import React from 'react';
import { useCart } from '../context/CartContext';
import { useAnalytics } from '../context/AnalyticsContext';
import { CartLine } from '../components/cart/CartLine';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SEO } from '../components/common/SEO';
import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingBag, ShieldCheck } from 'lucide-react';

export const CartPage: React.FC = () => {
  const { cart, isLoading } = useCart();
  const { trackCheckoutStarted } = useAnalytics();

  const lines = cart?.lines || [];
  const subtotal = parseFloat(cart?.cost.subtotalAmount.amount || '0');

  const handleCheckout = () => {
    if (!cart || lines.length === 0) return;
    trackCheckoutStarted(cart.id, cart.cost.totalAmount.amount);
    if (cart.checkoutUrl) {
      window.location.href = cart.checkoutUrl;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
      <SEO title="Your Shopping Bag" />
      <Breadcrumbs items={[{ label: 'SHOPPING BAG' }]} />

      <h1 className="font-display text-2xl sm:text-3xl tracking-widest text-obsidian uppercase font-bold border-b border-soft-stone pb-4">
        YOUR SHOPPING BAG ({cart?.totalQuantity || 0})
      </h1>

      {lines.length === 0 ? (
        <div className="text-center py-16 bg-white border border-soft-stone space-y-4">
          <ShoppingBag className="w-12 h-12 text-warm-taupe mx-auto" />
          <h2 className="font-display text-sm tracking-widest uppercase">YOUR BAG IS CURRENTLY EMPTY</h2>
          <Link
            to="/collections/all"
            className="inline-block bg-obsidian text-warm-white font-display text-xs tracking-widest py-3.5 px-8 uppercase"
          >
            EXPLORE STOREFRONT
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 bg-white p-6 border border-soft-stone rounded-sm">
            {lines.map((line) => (
              <CartLine key={line.id} line={line} />
            ))}
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white p-6 border border-soft-stone rounded-sm space-y-4">
              <h3 className="font-display text-xs tracking-widest text-obsidian uppercase border-b border-soft-stone pb-2 font-bold">
                ORDER SUMMARY
              </h3>

              <div className="space-y-2 text-xs text-deep-charcoal">
                <div className="flex justify-between font-display text-sm text-obsidian font-bold">
                  <span>SUBTOTAL</span>
                  <span>${subtotal.toFixed(2)} USD</span>
                </div>
                <p className="text-[11px] text-warm-taupe">
                  Taxes, shipping, and promotional discounts applied securely during Shopify checkout.
                </p>
              </div>

              <button
                onClick={handleCheckout}
                disabled={isLoading}
                className="w-full bg-obsidian text-warm-white font-display text-xs tracking-[0.25em] py-4 px-6 uppercase hover:bg-black transition-colors flex items-center justify-center space-x-2"
              >
                <span>PROCEED TO SHOPIFY CHECKOUT</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
