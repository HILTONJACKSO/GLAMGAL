import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../types/shopify';
import { ProductPrice } from '../product/ProductPrice';
import { useCart } from '../../context/CartContext';
import { useAnalytics } from '../../context/AnalyticsContext';
import { ShoppingBag, Star, Sparkles, ArrowRight } from 'lucide-react';

interface NewArrivalsSectionProps {
  products: Product[];
}

export const NewArrivalsSection: React.FC<NewArrivalsSectionProps> = ({ products }) => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const { addItem, isLoading } = useCart();
  const { trackAddToCart } = useAnalytics();

  const categories = ['ALL', 'SKINCARE', 'MAKEUP', 'BODY CARE', 'BEAUTY TOOLS'];

  const filteredProducts = activeCategory === 'ALL'
    ? products
    : products.filter(p => p.category.toUpperCase() === activeCategory);

  const featuredProduct = filteredProducts[0] || products[0];
  // 4 products for 2x2 grid
  const gridProducts = filteredProducts.slice(1, 5);

  const handleQuickAdd = async (product: Product, e: React.MouseEvent) => {
    e.preventDefault();
    const defaultVariant = product.variants.find(v => v.availableForSale) || product.variants[0];
    if (!defaultVariant) return;

    await addItem(defaultVariant.id, 1);
    trackAddToCart(product.title, defaultVariant.id, defaultVariant.price.amount);
  };

  return (
    <section className="bg-[#F8F4EF] py-16 md:py-20 border-y border-[#E8DEC7]/70">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 space-y-10">
        {/* Section Header with Category Tabs & View All Action */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-[#E3D6C5]">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-[#B89275]" />
              <span className="font-display text-xs tracking-mega text-[#A68064] uppercase font-semibold">
                FRESH FORMULATIONS
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl tracking-widest text-obsidian uppercase font-black">
              NEW ARRIVALS
            </h2>
          </div>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full font-display text-[11px] tracking-wider uppercase transition-all select-none ${
                  activeCategory === cat
                    ? 'bg-obsidian text-warm-white shadow-sm'
                    : 'bg-white text-[#5C5046] hover:bg-warm-white border border-[#E3D6C5]'
                }`}
              >
                {cat}
              </button>
            ))}

            <Link
              to="/collections/new-arrivals"
              className="ml-auto lg:ml-4 inline-flex items-center space-x-1.5 font-display text-xs tracking-widest text-[#B89275] uppercase hover:text-obsidian transition-colors font-bold underline"
            >
              <span>VIEW ALL</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Asymmetrical Layout: Spotlight Card on Left + Complete 2x2 Grid Layout on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Featured Hero Product Card */}
          {featuredProduct && (
            <div className="lg:col-span-5 bg-white rounded-[24px] p-6 border border-[#E3D6C5]/80 shadow-sm flex flex-col justify-between group hover:shadow-xl transition-all duration-500">
              <div className="space-y-4">
                {/* Badges & Category Header */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-display tracking-widest text-[#A68064] uppercase font-semibold">
                    SPOTLIGHT RELEASE • {featuredProduct.category}
                  </span>
                  <div className="flex items-center space-x-1">
                    {featuredProduct.badges?.map((badge, i) => (
                      <span
                        key={i}
                        className="bg-obsidian text-warm-white font-display text-[9px] font-bold tracking-widest px-2.5 py-0.5 rounded-full uppercase"
                      >
                        {badge.text}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Featured Product Image */}
                <Link
                  to={`/products/${featuredProduct.handle}`}
                  className="block relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#F4EBE2]"
                >
                  <img
                    src={featuredProduct.featuredImage?.url}
                    alt={featuredProduct.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </Link>

                {/* Info & Description */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-1 text-obsidian">
                    <Star className="w-3.5 h-3.5 fill-obsidian" />
                    <span className="text-xs font-bold font-display">{featuredProduct.rating}</span>
                    <span className="text-xs text-warm-taupe">({featuredProduct.reviewCount} Reviews)</span>
                  </div>

                  <Link to={`/products/${featuredProduct.handle}`}>
                    <h3 className="font-display text-base sm:text-lg tracking-wider text-obsidian uppercase font-bold group-hover:underline">
                      {featuredProduct.title}
                    </h3>
                  </Link>

                  <p className="text-xs text-[#5C5046] font-body line-clamp-2 leading-relaxed">
                    {featuredProduct.subtitle || featuredProduct.description}
                  </p>
                </div>
              </div>

              {/* Action */}
              <div className="pt-4 mt-4 border-t border-[#E3D6C5]/60 flex items-center justify-end">
                <a
                  href="https://glamgalbeauty.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-obsidian text-warm-white hover:bg-[#B89275] font-display text-[11px] font-bold tracking-wider uppercase px-5 py-3 rounded-full flex items-center space-x-2 transition-all shadow-sm"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>SHOP STORE</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          )}

          {/* Right Column: Complete 2x2 Grid (4 Secondary Cards) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {(gridProducts.length > 0 ? gridProducts : products.slice(0, 4)).map((product) => {
              return (
                <div
                  key={product.id}
                  className="bg-white rounded-[20px] p-4 border border-[#E3D6C5]/80 hover:border-[#B89275] hover:-translate-y-1.5 hover:shadow-xl transition-all duration-400 flex flex-col justify-between group shadow-2xs"
                >
                  <div className="space-y-3">
                    {/* Image Area with Shorter Aspect Ratio & Background Tint */}
                    <Link
                      to={`/products/${product.handle}`}
                      className="block relative aspect-[4/3] rounded-xl overflow-hidden bg-[#F4EBE2]"
                    >
                      <img
                        src={product.featuredImage?.url}
                        alt={product.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />

                      {/* Badge in top left */}
                      {product.badges && product.badges.length > 0 && (
                        <span className="absolute top-2.5 left-2.5 bg-obsidian text-warm-white text-[8px] font-display font-bold tracking-widest px-2.5 py-0.5 rounded-full uppercase z-10 shadow-xs">
                          {product.badges[0].text}
                        </span>
                      )}
                    </Link>

                    {/* Content Meta */}
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] font-display text-[#A68064] uppercase font-semibold">
                          {product.category}
                        </span>
                        {product.rating && (
                          <div className="flex items-center space-x-1">
                            <Star className="w-3 h-3 fill-obsidian text-obsidian" />
                            <span className="text-[10px] font-bold text-obsidian">{product.rating}</span>
                          </div>
                        )}
                      </div>

                      <Link to={`/products/${product.handle}`}>
                        <h4 className="font-display text-xs tracking-wider text-obsidian uppercase font-semibold line-clamp-1 group-hover:underline">
                          {product.title}
                        </h4>
                      </Link>
                    </div>
                  </div>

                  {/* Shop Store Link */}
                  <div className="pt-3 mt-3 border-t border-[#E3D6C5]/50 flex items-center justify-end">
                    <a
                      href="https://glamgalbeauty.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#F8F4EF] hover:bg-obsidian text-obsidian hover:text-warm-white px-3 py-1.5 rounded-full border border-[#E3D6C5] font-display text-[10px] font-bold tracking-wider uppercase transition-all flex items-center space-x-1"
                    >
                      <ShoppingBag className="w-3 h-3" />
                      <span>SHOP STORE</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
