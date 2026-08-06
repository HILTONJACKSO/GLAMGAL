import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../types/shopify';
import { ProductPrice } from './ProductPrice';
import { useCart } from '../../context/CartContext';
import { useAnalytics } from '../../context/AnalyticsContext';
import { ShoppingBag, Star } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addItem, isLoading } = useCart();
  const { trackAddToCart } = useAnalytics();

  const defaultVariant = product.variants.find(v => v.availableForSale) || product.variants[0];
  const isSoldOut = !product.availableForSale || !defaultVariant?.availableForSale;

  const primaryImg = product.featuredImage?.url || 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80';
  const secondaryImg = product.secondaryImage?.url || primaryImg;

  const shadeCount = product.options.find(o => o.name.toLowerCase().includes('shade'))?.values.length || 0;

  const handleQuickAdd = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isSoldOut || !defaultVariant) return;

    await addItem(defaultVariant.id, 1);
    trackAddToCart(product.title, defaultVariant.id, defaultVariant.price.amount);
  };

  return (
    <div
      className="group relative flex flex-col bg-white border border-soft-stone/60 hover:border-obsidian/80 hover:-translate-y-2 hover:shadow-xl transition-all duration-400 rounded-2xl overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image Area */}
      <Link to={`/products/${product.handle}`} className="relative aspect-[3/4] overflow-hidden bg-warm-white block">
        <img
          src={isHovered ? secondaryImg : primaryImg}
          alt={product.featuredImage?.altText || product.title}
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
          loading="lazy"
          onError={(e) => {
            const target = e.currentTarget as HTMLImageElement;
            if (!target.src.includes('/hero_model.png')) {
              target.src = '/hero_model.png';
            }
          }}
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col space-y-1.5 z-10">
          {isSoldOut ? (
            <span className="bg-obsidian text-warm-white font-display text-[9px] font-bold tracking-widest px-2.5 py-1 uppercase rounded-full">
              SOLD OUT
            </span>
          ) : (
            product.badges?.map((badge, idx) => (
              <span
                key={idx}
                className={`font-display text-[9px] font-bold tracking-widest px-2.5 py-1 uppercase rounded-full ${
                  badge.type === 'best-seller'
                    ? 'bg-obsidian text-warm-white'
                    : badge.type === 'new'
                    ? 'bg-warm-taupe text-obsidian'
                    : 'bg-nude-beige text-obsidian'
                }`}
              >
                {badge.text}
              </span>
            ))
          )}
        </div>

        {/* Shade count indicator */}
        {shadeCount > 0 && (
          <div className="absolute bottom-3 left-3 bg-warm-white/90 backdrop-blur-sm text-obsidian text-[10px] font-display tracking-widest px-2.5 py-1 rounded-full uppercase border border-soft-stone">
            {shadeCount} {shadeCount === 1 ? 'SHADE' : 'SHADES'}
          </div>
        )}

        {/* Desktop View Details Overlay Button */}
        {!isSoldOut && (
          <Link
            to={`/products/${product.handle}`}
            className="absolute bottom-3 right-3 bg-obsidian hover:bg-[#B89275] text-warm-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 active:scale-95 shadow-xl focus-visible:opacity-100 flex items-center justify-center"
            title="View Shades & Buy"
            aria-label={`View ${product.title} Shades & Options`}
          >
            <ShoppingBag className="w-4 h-4" />
          </Link>
        )}
      </Link>

      {/* Product Content Details */}
      <div className="p-4 flex flex-col flex-1 justify-between bg-white">
        <div>
          <span className="text-[10px] font-display tracking-widest text-warm-taupe uppercase block mb-1">
            {product.category}
          </span>
          <Link to={`/products/${product.handle}`} className="group-hover:underline">
            <h3 className="font-display text-xs tracking-wider text-obsidian uppercase font-semibold line-clamp-1 mb-1 group-hover:text-[#B89275] transition-colors">
              {product.title}
            </h3>
          </Link>
          {product.subtitle && (
            <p className="text-[11px] text-warm-taupe line-clamp-1 mb-2 font-body">
              {product.subtitle}
            </p>
          )}
        </div>

        <div>
          {/* Review Rating summary */}
          {product.rating && (
            <div className="flex items-center space-x-1 mb-2">
              <Star className="w-3 h-3 fill-obsidian text-obsidian" />
              <span className="text-[10px] font-bold text-obsidian">{product.rating}</span>
              <span className="text-[10px] text-warm-taupe">({product.reviewCount})</span>
            </div>
          )}

          <div className="flex items-center justify-between pt-2 border-t border-soft-stone/40">
            <ProductPrice
              price={defaultVariant?.price || product.priceRange.minVariantPrice}
              compareAtPrice={defaultVariant?.compareAtPrice}
              size="sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
