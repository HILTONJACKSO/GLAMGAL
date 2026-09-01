import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCMS } from '../../context/CMSContext';
import { useCart } from '../../context/CartContext';
import { Product } from '../../types/shopify';
import {
  ChevronLeft,
  ChevronRight,
  ShoppingBag,
  Star,
  Sparkles,
  ArrowRight,
  Check,
  Pause,
  Play,
} from 'lucide-react';

export const ProductShowcaseSlider: React.FC = () => {
  const { state } = useCMS();
  const { addItem } = useCart();

  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [isPaused, setIsPaused] = useState(false);
  const [addedProductId, setAddedProductId] = useState<string | null>(null);

  const scrollRef = useRef<HTMLDivElement>(null);

  const products = state.products || [];

  // Filter products by category tab
  const filteredProducts = products.filter((p) => {
    if (activeCategory === 'ALL') return true;
    if (activeCategory === 'BEAUTY TOOLS') {
      return (
        p.category.toUpperCase().includes('TOOL') ||
        p.category.toUpperCase().includes('GADGET')
      );
    }
    return p.category.toUpperCase().includes(activeCategory.toUpperCase());
  });

  // Auto-scroll effect
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });
        }
      }
    }, 3500);

    return () => clearInterval(interval);
  }, [isPaused, filteredProducts]);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -360, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 360, behavior: 'smooth' });
    }
  };

  const handleQuickAdd = async (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    e.stopPropagation();
    const variant = product.variants.find((v) => v.availableForSale) || product.variants[0];
    if (variant) {
      await addItem(variant.id, 1);
      setAddedProductId(product.id);
      setTimeout(() => setAddedProductId(null), 2500);
    }
  };

  return (
    <section className="bg-white py-28 lg:py-36 border-t border-[#E8D9CC] relative overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#B89275]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10 relative z-10">
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-[#E3D5C8]/80">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#B89275]/10 border border-[#B89275]/30 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-[#B89275]" />
              <span className="font-display text-[10px] sm:text-xs font-bold tracking-mega text-[#9E6D59] uppercase">
                COMPLETE CATALOG SHOWCASE
              </span>
            </div>

            <h2 className="font-display text-2xl sm:text-4xl md:text-5xl tracking-widest text-obsidian uppercase font-black">
              ALL GLAMGAL PRODUCTS IN MOTION
            </h2>

            <p className="font-body text-xs sm:text-sm text-[#5C5046] leading-relaxed font-light">
              Explore our complete couture formulation lineup. Swipe, slide, or pause to discover high-payoff makeup, clinical skincare, and luxury beauty rituals.
            </p>
          </div>

          {/* SLIDER CONTROLS */}
          <div className="flex items-center space-x-3 shrink-0">
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="p-3 bg-white border border-[#E3D5C8] rounded-full hover:bg-obsidian hover:text-white transition-all shadow-xs"
              title={isPaused ? 'Resume Auto Slide' : 'Pause Auto Slide'}
            >
              {isPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
            </button>

            <button
              onClick={scrollLeft}
              className="p-3 bg-white border border-[#E3D5C8] rounded-full hover:bg-obsidian hover:text-white transition-all shadow-xs"
              title="Slide Left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={scrollRight}
              className="p-3 bg-white border border-[#E3D5C8] rounded-full hover:bg-obsidian hover:text-white transition-all shadow-xs"
              title="Slide Right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CATEGORY FILTER TABS */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none">
          {['ALL', 'MAKEUP', 'SKINCARE', 'BODY CARE', 'BEAUTY TOOLS'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-display text-xs tracking-wider uppercase px-5 py-2.5 rounded-full font-bold transition-all shrink-0 ${
                activeCategory === cat
                  ? 'bg-obsidian text-warm-white shadow-md'
                  : 'bg-white/80 text-[#5C5046] border border-[#E3D5C8] hover:bg-white hover:text-obsidian'
              }`}
            >
              {cat} {cat === 'ALL' ? `(${products.length})` : ''}
            </button>
          ))}
        </div>

        {/* INFINITE / SMOOTH SLIDER CAROUSEL TRACK */}
        <div
          ref={scrollRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="flex space-x-6 overflow-x-auto pt-2 pb-6 scrollbar-none snap-x snap-mandatory"
        >
          {filteredProducts.map((product) => {
            const primaryImg =
              product.featuredImage?.url || '/hero_model.png';
            const secondaryImg =
              product.secondaryImage?.url || primaryImg;
            const price = parseFloat(
              product.variants[0]?.price.amount ||
                product.priceRange?.minVariantPrice.amount ||
                '38.00'
            ).toFixed(2);

            const shadeCount =
              product.options.find((o) => o.name.toLowerCase().includes('shade'))?.values.length || 0;

            const isAdded = addedProductId === product.id;

            return (
              <div
                key={product.id}
                className="w-[280px] sm:w-[310px] shrink-0 snap-start bg-white rounded-2xl border border-[#E7D6CB] hover:border-[#B89275] shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden flex flex-col justify-between group"
              >
                {/* PRODUCT THUMBNAIL */}
                <Link
                  to={`/products/${product.handle}`}
                  className="relative aspect-[3/4] bg-[#FAF5F0] overflow-hidden block"
                >
                  <img
                    src={primaryImg}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = '/hero_model.png';
                    }}
                  />

                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 bg-obsidian/90 text-warm-white text-[9px] font-display font-bold tracking-widest px-2.5 py-1 rounded-full uppercase">
                    {product.category}
                  </div>

                  {/* Shade Count */}
                  {shadeCount > 0 && (
                    <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md text-obsidian text-[9px] font-display font-bold tracking-widest px-2.5 py-1 rounded-full uppercase border border-[#E3D5C8]">
                      {shadeCount} {shadeCount === 1 ? 'SHADE' : 'SHADES'}
                    </div>
                  )}

                  {/* Direct Shop Store Overlay Button */}
                  <a
                    href="https://glamgalbeauty.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-3 right-3 p-3 rounded-full shadow-lg bg-obsidian text-warm-white hover:bg-[#B89275] hover:scale-110 transition-all duration-300"
                    title="Shop Store"
                  >
                    <ShoppingBag className="w-4 h-4" />
                  </a>
                </Link>

                {/* PRODUCT DETAILS */}
                <div className="p-5 space-y-3 flex-1 flex flex-col justify-between bg-white">
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] font-display tracking-widest text-[#9E6D59] uppercase font-bold">
                        {product.vendor || 'GLAMGAL'}
                      </span>
                      <div className="flex items-center space-x-1 text-[10px] font-bold text-obsidian">
                        <Star className="w-3 h-3 fill-obsidian text-obsidian" />
                        <span>{product.rating || 4.9}</span>
                      </div>
                    </div>

                    <Link to={`/products/${product.handle}`}>
                      <h3 className="font-display text-xs tracking-wider text-obsidian uppercase font-bold group-hover:text-[#B89275] transition-colors line-clamp-1">
                        {product.title}
                      </h3>
                    </Link>

                    {product.subtitle && (
                      <p className="text-[11px] text-[#7C6659] font-body line-clamp-1">
                        {product.subtitle}
                      </p>
                    )}
                  </div>

                  <div className="pt-3 border-t border-[#F0E4D8]">
                    <a
                      href="https://glamgalbeauty.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center space-x-1.5 bg-obsidian hover:bg-[#B89275] text-white font-display text-[10px] font-bold tracking-wider uppercase py-2 rounded-xl transition-colors shadow-2xs"
                    >
                      <span>SHOP STORE</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
