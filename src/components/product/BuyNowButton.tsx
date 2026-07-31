import React, { useState } from 'react';
import { ProductVariant } from '../../types/shopify';
import { createCart } from '../../lib/shopify';
import { useAnalytics } from '../../context/AnalyticsContext';
import { ArrowRight, Loader2 } from 'lucide-react';

interface BuyNowButtonProps {
  variant: ProductVariant;
  quantity?: number;
}

export const BuyNowButton: React.FC<BuyNowButtonProps> = ({ variant, quantity = 1 }) => {
  const [loading, setLoading] = useState(false);
  const { trackCheckoutStarted } = useAnalytics();

  const handleBuyNow = async () => {
    if (!variant.availableForSale) return;
    setLoading(true);
    try {
      const cart = await createCart(variant.id, quantity);
      trackCheckoutStarted(cart.id, cart.cost.totalAmount.amount);
      if (cart.checkoutUrl) {
        window.location.href = cart.checkoutUrl;
      }
    } catch (e) {
      console.error('Buy Now checkout redirect failed:', e);
      alert('Unable to initiate checkout. Redirecting to cart...');
    } finally {
      setLoading(false);
    }
  };

  if (!variant.availableForSale) return null;

  return (
    <button
      onClick={handleBuyNow}
      disabled={loading}
      className="w-full font-display text-xs tracking-[0.25em] py-4 px-8 uppercase bg-transparent text-obsidian border border-obsidian hover:bg-obsidian hover:text-warm-white hover:scale-[1.02] active:scale-[0.97] transition-all duration-300 flex items-center justify-center space-x-2 rounded-full"
    >
      {loading ? (
        <>
          <Loader2 className="w-4 h-4 animate-spin" />
          <span>REDIRECTING TO SHOPIFY CHECKOUT...</span>
        </>
      ) : (
        <>
          <span>BUY NOW WITH SHOPIFY</span>
          <ArrowRight className="w-4 h-4" />
        </>
      )}
    </button>
  );
};
