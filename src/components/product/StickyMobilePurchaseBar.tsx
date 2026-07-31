import React from 'react';
import { ProductVariant } from '../../types/shopify';
import { useCart } from '../../context/CartContext';
import { ShoppingBag, Loader2 } from 'lucide-react';

interface StickyMobilePurchaseBarProps {
  productTitle: string;
  variant: ProductVariant;
}

export const StickyMobilePurchaseBar: React.FC<StickyMobilePurchaseBarProps> = ({
  productTitle,
  variant,
}) => {
  const { addItem, isLoading } = useCart();
  const isSoldOut = !variant.availableForSale;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-warm-white/95 backdrop-blur-md border-t border-soft-stone p-4 md:hidden shadow-2xl flex items-center justify-between space-x-4">
      <div className="flex flex-col">
        <span className="font-display text-[10px] tracking-wider uppercase text-warm-taupe line-clamp-1">
          {variant.title}
        </span>
        <span className="font-display text-sm font-bold text-obsidian">
          ${parseFloat(variant.price.amount).toFixed(2)}
        </span>
      </div>

      <button
        onClick={() => addItem(variant.id, 1)}
        disabled={isSoldOut || isLoading}
        className={`flex-1 font-display text-xs tracking-widest py-3 px-4 uppercase flex items-center justify-center space-x-2 ${
          isSoldOut
            ? 'bg-soft-stone text-warm-taupe cursor-not-allowed'
            : 'bg-obsidian text-warm-white active:scale-95'
        }`}
      >
        {isLoading ? (
          <Loader2 className="w-4 h-4 animate-spin text-warm-white" />
        ) : isSoldOut ? (
          <span>SOLD OUT</span>
        ) : (
          <>
            <ShoppingBag className="w-4 h-4" />
            <span>ADD TO BAG</span>
          </>
        )}
      </button>
    </div>
  );
};
