import React from 'react';
import { useCart } from '../../context/CartContext';
import { useAnalytics } from '../../context/AnalyticsContext';
import { ProductVariant } from '../../types/shopify';
import { ShoppingBag, Loader2 } from 'lucide-react';

interface AddToCartButtonProps {
  variant: ProductVariant;
  productTitle: string;
  quantity?: number;
  fullWidth?: boolean;
}

export const AddToCartButton: React.FC<AddToCartButtonProps> = ({
  variant,
  productTitle,
  quantity = 1,
  fullWidth = true,
}) => {
  const { addItem, isLoading } = useCart();
  const { trackAddToCart } = useAnalytics();

  const handleAdd = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!variant.availableForSale) return;

    await addItem(variant.id, quantity);
    trackAddToCart(productTitle, variant.id, variant.price.amount);
  };

  const isSoldOut = !variant.availableForSale;

  return (
    <button
      onClick={handleAdd}
      disabled={isSoldOut || isLoading}
      className={`font-display text-xs tracking-[0.25em] py-4 px-8 uppercase transition-all duration-300 flex items-center justify-center space-x-3 select-none rounded-full ${
        fullWidth ? 'w-full' : ''
      } ${
        isSoldOut
          ? 'bg-soft-stone text-warm-taupe cursor-not-allowed border border-soft-stone'
          : 'bg-obsidian text-warm-white hover:bg-black hover:scale-[1.02] active:scale-[0.97] hover:shadow-xl border border-obsidian'
      }`}
    >
      {isLoading ? (
        <>
          <Loader2 className="w-4 h-4 animate-spin text-warm-white" />
          <span>ADDING TO BAG...</span>
        </>
      ) : isSoldOut ? (
        <span>SOLD OUT</span>
      ) : (
        <>
          <ShoppingBag className="w-4 h-4" />
          <span>ADD TO BAG — ${parseFloat(variant.price.amount).toFixed(2)}</span>
        </>
      )}
    </button>
  );
};
