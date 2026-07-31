import React, { createContext, useContext, useState, useEffect } from 'react';
import { Cart, BeautyRoutine } from '../types/shopify';
import { getCart, createCart, addToCart as apiAddToCart, updateCartQuantity, removeFromCart, getProductByHandle } from '../lib/shopify';

interface CartContextType {
  cart: Cart | null;
  isCartOpen: boolean;
  isLoading: boolean;
  error: string | null;
  openCart: () => void;
  closeCart: () => void;
  addItem: (variantId: string, quantity?: number) => Promise<void>;
  updateQuantity: (lineId: string, quantity: number) => Promise<void>;
  removeItem: (lineId: string) => Promise<void>;
  addRoutineToCart: (routine: BeautyRoutine) => Promise<void>;
  clearError: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_ID_STORAGE_KEY = 'glamgal_shopify_cart_id';

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<Cart | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function initializeCart() {
      const savedCartId = localStorage.getItem(CART_ID_STORAGE_KEY);
      if (savedCartId) {
        try {
          const existingCart = await getCart(savedCartId);
          if (existingCart) {
            setCart(existingCart);
            return;
          }
        } catch (e) {
          console.warn('Saved cart expired or invalid. Will create fresh cart on action.');
          localStorage.removeItem(CART_ID_STORAGE_KEY);
        }
      }
    }
    initializeCart();
  }, []);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);
  const clearError = () => setError(null);

  const addItem = async (variantId: string, quantity: number = 1) => {
    setIsLoading(true);
    setError(null);
    try {
      let updatedCart: Cart;
      if (!cart) {
        updatedCart = await createCart(variantId, quantity);
        localStorage.setItem(CART_ID_STORAGE_KEY, updatedCart.id);
      } else {
        updatedCart = await apiAddToCart(cart.id, variantId, quantity);
      }
      setCart(updatedCart);
      setIsCartOpen(true);
    } catch (err: any) {
      console.error('Add to Cart Failed:', err);
      setError(err.message || 'Unable to add item to bag. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const updateQuantity = async (lineId: string, quantity: number) => {
    if (!cart) return;
    setIsLoading(true);
    setError(null);
    try {
      const updatedCart = await updateCartQuantity(cart.id, lineId, quantity);
      setCart(updatedCart);
    } catch (err: any) {
      console.error('Update Cart Quantity Failed:', err);
      setError('Failed to update quantity.');
    } finally {
      setIsLoading(false);
    }
  };

  const removeItem = async (lineId: string) => {
    if (!cart) return;
    setIsLoading(true);
    setError(null);
    try {
      const updatedCart = await removeFromCart(cart.id, lineId);
      setCart(updatedCart);
    } catch (err: any) {
      console.error('Remove Item Failed:', err);
      setError('Failed to remove item from bag.');
    } finally {
      setIsLoading(false);
    }
  };

  const addRoutineToCart = async (routine: BeautyRoutine) => {
    setIsLoading(true);
    setError(null);
    try {
      for (const step of routine.steps) {
        const product = await getProductByHandle(step.productHandle);
        if (product && product.variants.length > 0) {
          const availableVariant = product.variants.find(v => v.availableForSale) || product.variants[0];
          await addItem(availableVariant.id, 1);
        }
      }
      setIsCartOpen(true);
    } catch (err: any) {
      console.error('Add Routine Failed:', err);
      setError('Unable to add all routine products to bag.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        isCartOpen,
        isLoading,
        error,
        openCart,
        closeCart,
        addItem,
        updateQuantity,
        removeItem,
        addRoutineToCart,
        clearError
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
