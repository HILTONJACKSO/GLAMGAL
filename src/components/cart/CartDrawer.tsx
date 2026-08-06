import React, { useEffect } from 'react';
import { useCart } from '../../context/CartContext';
import { useAnalytics } from '../../context/AnalyticsContext';
import { CartLine } from './CartLine';
import { BRAND_TOKENS } from '../../styles/tokens';
import { X, ShoppingBag, ArrowRight, ShieldCheck, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';

export const CartDrawer: React.FC = () => {
  const { cart, isCartOpen, closeCart, isLoading, error, clearError } = useCart();
  const { trackCheckoutStarted } = useAnalytics();

  // Trap Escape Key to Close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isCartOpen) {
        closeCart();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isCartOpen, closeCart]);

  if (!isCartOpen) return null;

  const lines = cart?.lines || [];
  const subtotal = parseFloat(cart?.cost.subtotalAmount.amount || '0');
  const freeShippingLimit = BRAND_TOKENS.freeShippingThreshold;
  const progressPercent = Math.min(100, (subtotal / freeShippingLimit) * 100);
  const remainingForFreeShipping = Math.max(0, freeShippingLimit - subtotal);

  const handleCheckout = () => {
    if (!cart || lines.length === 0) return;
    trackCheckoutStarted(cart.id, cart.cost.totalAmount.amount);
    if (cart.checkoutUrl) {
      window.location.href = cart.checkoutUrl;
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-hidden"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cart-drawer-title"
    >
      {/* Dark Overlay Background */}
      <div
        className="absolute inset-0 bg-obsidian/60 backdrop-blur-sm transition-opacity animate-fade-in"
        onClick={closeCart}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-warm-white text-obsidian shadow-2xl flex flex-col justify-between">
          {/* Header */}
          <div className="p-6 border-b border-soft-stone flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <ShoppingBag className="w-5 h-5 text-obsidian" />
              <h2 id="cart-drawer-title" className="font-display text-sm tracking-widest text-obsidian uppercase">
                YOUR SHOPPING BAG ({cart?.totalQuantity || 0})
              </h2>
            </div>
            <button
              onClick={closeCart}
              className="p-2 -mr-2 text-obsidian hover:opacity-70 focus-visible:outline-none"
              aria-label="Close Shopping Bag"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Indicator */}
          <div className="bg-white px-6 py-3 border-b border-soft-stone">
            {remainingForFreeShipping > 0 ? (
              <p className="text-xs text-deep-charcoal mb-1.5 flex items-center space-x-1.5">
                <Truck className="w-3.5 h-3.5 text-obsidian" />
                <span>Add <strong>${remainingForFreeShipping.toFixed(2)}</strong> for Complimentary Delivery</span>
              </p>
            ) : (
              <p className="text-xs font-semibold text-obsidian mb-1.5 flex items-center space-x-1.5">
                <Truck className="w-3.5 h-3.5 text-obsidian" />
                <span>You’ve Unlocked Complimentary Express Delivery!</span>
              </p>
            )}
            <div className="w-full h-1.5 bg-soft-stone rounded-full overflow-hidden">
              <div
                className="h-full bg-obsidian transition-all duration-500 ease-out"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto px-6 py-4 space-y-2">
            {error && (
              <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs flex justify-between items-center mb-2">
                <span>{error}</span>
                <button onClick={clearError} className="font-bold underline text-[10px]">DISMISS</button>
              </div>
            )}

            {lines.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-16">
                <ShoppingBag className="w-12 h-12 text-warm-taupe mb-4 stroke-1" />
                <h3 className="font-display text-sm tracking-widest text-obsidian uppercase mb-2">
                  YOUR BAG IS CURRENTLY EMPTY
                </h3>
                <p className="text-xs text-warm-taupe max-w-xs mb-6">
                  Discover skincare, couture makeup, and glowing beauty rituals.
                </p>
                <Link
                  to="/collections/all"
                  onClick={closeCart}
                  className="bg-obsidian text-warm-white font-display text-xs tracking-widest py-3.5 px-8 uppercase hover:bg-black transition-colors"
                >
                  START SHOPPING
                </Link>
              </div>
            ) : (
              lines.map((line) => <CartLine key={line.id} line={line} />)
            )}
          </div>

          {/* Drawer Footer & Checkout Controls */}
          {lines.length > 0 && (
            <div className="p-6 bg-white border-t border-soft-stone space-y-4">
              <div className="space-y-1 text-xs text-deep-charcoal">
                <div className="flex justify-between font-display text-sm text-obsidian font-bold">
                  <span>SUBTOTAL</span>
                  <span>${subtotal.toFixed(2)} USD</span>
                </div>
                <p className="text-[11px] text-warm-taupe">
                  Taxes, discounts, and shipping calculated at secure Shopify Checkout.
                </p>
              </div>

              <div className="space-y-2.5">
                <button
                  onClick={handleCheckout}
                  disabled={isLoading}
                  className="w-full bg-obsidian text-warm-white font-display text-xs tracking-[0.25em] py-4 px-6 uppercase hover:bg-black transition-colors flex items-center justify-center space-x-2"
                >
                  <span>PROCEED TO SHOPIFY CHECKOUT</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <Link
                  to="/cart"
                  onClick={closeCart}
                  className="block w-full text-center font-display text-[11px] tracking-widest text-obsidian uppercase py-2 hover:underline"
                >
                  VIEW FULL CART PAGE
                </Link>
              </div>

              <div className="flex items-center justify-center space-x-1.5 text-[10px] font-display text-warm-taupe uppercase pt-2">
                <ShieldCheck className="w-3.5 h-3.5 text-obsidian" />
                <span>256-BIT ENCRYPTED SHOPIFY SECURE CHECKOUT</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
