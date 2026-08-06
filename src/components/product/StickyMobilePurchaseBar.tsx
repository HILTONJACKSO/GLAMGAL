import React, { useState } from 'react';
import { ProductVariant } from '../../types/shopify';
import { createCart } from '../../lib/shopify';
import { ArrowRight, Loader2 } from 'lucide-react';

interface StickyMobilePurchaseBarProps {
  productTitle: string;
  variant: ProductVariant;
}

export const StickyMobilePurchaseBar: React.FC<StickyMobilePurchaseBarProps> = ({
  productTitle,
  variant,
}) => {
  const [loading, setLoading] = useState(false);
  const isSoldOut = !variant.availableForSale;

  const handleBuyNow = async () => {
    if (isSoldOut) return;
    setLoading(true);
    try {
      const cart = await createCart(variant.id, 1);
      if (cart.checkoutUrl) {
        window.location.href = cart.checkoutUrl;
      }
    } catch (e) {
      console.error('Mobile checkout redirect failed:', e);
    } finally {
      setLoading(false);
    }
  };

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
        onClick={handleBuyNow}
        disabled={isSoldOut || loading}
        className={`flex-1 font-display text-xs font-bold tracking-widest py-3.5 px-4 uppercase rounded-full flex items-center justify-center space-x-2 ${
          isSoldOut
            ? 'bg-soft-stone text-warm-taupe cursor-not-allowed'
            : 'bg-obsidian text-warm-white active:scale-95 shadow-md'
        }`}
      >
        {loading ? (
          <Loader2 className="w-4 h-4 animate-spin text-warm-white" />
        ) : isSoldOut ? (
          <span>SOLD OUT</span>
        ) : (
          <>
            <span>BUY NOW WITH SHOPIFY</span>
            <ArrowRight className="w-4 h-4 text-amber-300" />
          </>
        )}
      </button>
    </div>
  );
};
