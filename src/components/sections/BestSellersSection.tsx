import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../types/shopify';
import { useCart } from '../../context/CartContext';
import { useAnalytics } from '../../context/AnalyticsContext';
import { ShoppingBag, Star, Crown, ArrowRight } from 'lucide-react';

interface BestSellersSectionProps {
  products: Product[];
}

export const BestSellersSection: React.FC<BestSellersSectionProps> = ({ products }) => {
  const { addItem, isLoading } = useCart();
  const { trackAddToCart } = useAnalytics();

  const handleQuickAdd = async (product: Product, e: React.MouseEvent) => {
    e.preventDefault();
    const defaultVariant = product.variants.find(v => v.availableForSale) || product.variants[0];
    if (!defaultVariant) return;

    await addItem(defaultVariant.id, 1);
    trackAddToCart(product.title, defaultVariant.id, defaultVariant.price.amount);
  };

  return (
    <section className="bg-obsidian text-warm-white py-20 border-y border-deep-charcoal relative overflow-hidden">
      {/* Background Accent Glow */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-b from-[#B89275]/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 space-y-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-deep-charcoal">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Crown className="w-4 h-4 text-[#B89275]" />
              <span className="font-display text-xs tracking-mega text-[#B89275] uppercase font-semibold">
                COVETED BEAUTY ICONS
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl tracking-widest text-warm-white uppercase font-black">
              BEST SELLERS
            </h2>
          </div>

          <Link
            to="/collections/best-sellers"
            className="inline-flex items-center space-x-2 font-display text-xs tracking-widest text-warm-white uppercase border-b border-warm-white/40 pb-1 hover:border-warm-white hover:text-[#B89275] transition-all font-semibold"
          >
            <span>SHOP ALL BEST SELLERS</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 4-Column Dark Luxury Cards Grid with Rank Numbers (01, 02, 03, 04) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.slice(0, 4).map((product, index) => {
            const defaultVariant = product.variants.find(v => v.availableForSale) || product.variants[0];
            const rankNumber = `0${index + 1}`;
            const isSoldOut = !product.availableForSale;

            const shadeCount = product.options.find(o => o.name.toLowerCase().includes('shade'))?.values.length || 0;

            return (
              <div
                key={product.id}
                className="bg-[#141414] rounded-[24px] p-5 border border-deep-charcoal hover:border-[#B89275]/80 transition-all duration-500 flex flex-col justify-between group shadow-xl hover:-translate-y-1 relative"
              >
                {/* Rank Badge */}
                <div className="absolute top-4 right-4 z-20">
                  <span className="font-display text-2xl font-black text-warm-white/20 group-hover:text-[#B89275]/80 transition-colors">
                    #{rankNumber}
                  </span>
                </div>

                <div className="space-y-4">
                  {/* Product Image Area */}
                  <Link
                    to={`/products/${product.handle}`}
                    className="block relative aspect-[3/4] rounded-2xl overflow-hidden bg-deep-charcoal/40"
                  >
                    <img
                      src={product.featuredImage?.url}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                      loading="lazy"
                    />

                    {/* Top Left Badges */}
                    <div className="absolute top-3 left-3 flex flex-col space-y-1 z-10">
                      {product.badges?.slice(0, 2).map((b, i) => (
                        <span
                          key={i}
                          className="bg-warm-white text-obsidian font-display text-[8px] font-bold tracking-widest px-2.5 py-0.5 rounded-full uppercase shadow-md"
                        >
                          {b.text}
                        </span>
                      ))}
                    </div>

                    {/* Bottom Left Shade Count */}
                    {shadeCount > 0 && (
                      <div className="absolute bottom-3 left-3 bg-obsidian/90 backdrop-blur-md text-warm-white text-[9px] font-display tracking-widest px-2.5 py-1 rounded-full uppercase border border-deep-charcoal">
                        {shadeCount} SHADES
                      </div>
                    )}
                  </Link>

                  {/* Meta Details */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] font-display text-[#B89275] uppercase font-semibold">
                        {product.category}
                      </span>

                      {product.rating && (
                        <div className="flex items-center space-x-1">
                          <Star className="w-3 h-3 fill-[#B89275] text-[#B89275]" />
                          <span className="text-[10px] font-bold font-display text-warm-white">{product.rating}</span>
                          <span className="text-[9px] text-warm-taupe">({product.reviewCount})</span>
                        </div>
                      )}
                    </div>

                    <Link to={`/products/${product.handle}`}>
                      <h3 className="font-display text-xs tracking-wider text-warm-white uppercase font-bold line-clamp-1 group-hover:text-[#B89275] transition-colors">
                        {product.title}
                      </h3>
                    </Link>

                    {product.subtitle && (
                      <p className="text-[11px] text-soft-stone font-body line-clamp-1 font-light">
                        {product.subtitle}
                      </p>
                    )}
                  </div>
                </div>

                {/* Action Footer */}
                <div className="pt-4 mt-4 border-t border-deep-charcoal">
                  <Link
                    to={`/products/${product.handle}`}
                    className="w-full inline-flex items-center justify-center space-x-1.5 bg-warm-white hover:bg-[#B89275] text-obsidian hover:text-white px-3.5 py-2 rounded-full font-display text-[10px] font-bold tracking-wider uppercase transition-all shadow-sm"
                  >
                    <span>VIEW DOSSIER</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
