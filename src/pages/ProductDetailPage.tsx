import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductByHandle, getProducts } from '../lib/shopify';
import { Product, ProductVariant } from '../types/shopify';
import { ProductGallery } from '../components/product/ProductGallery';
import { ProductPrice } from '../components/product/ProductPrice';
import { ShadeSelector } from '../components/product/ShadeSelector';
import { VariantSelector } from '../components/product/VariantSelector';
import { QuantitySelector } from '../components/product/QuantitySelector';
import { AddToCartButton } from '../components/product/AddToCartButton';
import { BuyNowButton } from '../components/product/BuyNowButton';
import { StickyMobilePurchaseBar } from '../components/product/StickyMobilePurchaseBar';
import { ProductGrid } from '../components/product/ProductGrid';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SEO } from '../components/common/SEO';
import { LoadingState } from '../components/common/LoadingState';
import { useAnalytics } from '../context/AnalyticsContext';
import { ShieldCheck, Truck, RotateCcw, ChevronDown, Star, Sparkles, Heart } from 'lucide-react';

export const ProductDetailPage: React.FC = () => {
  const { handle } = useParams<{ handle: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [openSection, setOpenSection] = useState<string | null>('benefits');
  const { trackProductViewed } = useAnalytics();

  useEffect(() => {
    async function loadProduct() {
      if (!handle) return;
      setLoading(true);
      try {
        const data = await getProductByHandle(handle);
        if (data) {
          setProduct(data);
          const initialVariant = data.variants.find(v => v.availableForSale) || data.variants[0];
          setSelectedVariant(initialVariant);
          trackProductViewed(data);

          const allProds = await getProducts({ first: 5 });
          setRelatedProducts(allProds.filter(p => p.id !== data.id).slice(0, 4));
        }
      } catch (err) {
        console.error('Failed to load product detail:', err);
      } finally {
        setLoading(false);
      }
    }
    loadProduct();
  }, [handle]);

  if (loading) {
    return <LoadingState message="LOADING PRODUCT SPECIFICATIONS..." />;
  }

  if (!product || !selectedVariant) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-20 text-center space-y-6">
        <h2 className="font-display text-2xl font-bold uppercase text-obsidian">PRODUCT SPECIFICATION NOT FOUND</h2>
        <p className="text-xs text-warm-taupe">The requested beauty formulation could not be located on the store.</p>
        <Link to="/collections/all" className="inline-block bg-obsidian text-warm-white font-display text-xs font-bold px-8 py-3 rounded-full uppercase">
          EXPLORE BEAUTY COLLECTION
        </Link>
      </div>
    );
  }

  const isMakeup = product.category === 'Makeup';

  const toggleSection = (id: string) => {
    setOpenSection(prev => (prev === id ? null : id));
  };

  const jsonLd = {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    name: product.title,
    image: product.featuredImage?.url,
    description: product.description,
    brand: { '@type': 'Brand', name: 'GLAMGAL' },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      price: selectedVariant.price.amount,
      availability: selectedVariant.availableForSale
        ? 'https://schema.org/InStock'
        : 'https://schema.org/OutOfStock',
    },
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-8 space-y-16">
      <SEO
        title={product.title}
        description={product.description}
        image={product.featuredImage?.url}
        jsonLd={jsonLd}
      />

      <Breadcrumbs
        items={[
          { label: 'SHOP', href: '/collections/all' },
          { label: product.category.toUpperCase(), href: `/collections/${product.category.toLowerCase().replace(/ /g, '-')}` },
          { label: product.title },
        ]}
      />

      {/* Main Upper Product Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Gallery */}
        <div className="lg:col-span-7">
          <ProductGallery images={product.images} title={product.title} />
        </div>

        {/* Right Column: Buying Controls */}
        <div className="lg:col-span-5 space-y-6">
          <div>
            <span className="text-xs font-display tracking-mega text-warm-taupe uppercase block mb-1">
              {product.category} • {product.vendor}
            </span>
            <h1 className="font-display text-2xl sm:text-3xl tracking-widest text-obsidian uppercase font-bold">
              {product.title}
            </h1>
            {product.subtitle && (
              <p className="text-xs text-warm-taupe mt-1 font-body">{product.subtitle}</p>
            )}
          </div>

          {/* Rating Summary */}
          {product.rating && (
            <div className="flex items-center space-x-2 pt-1 border-b border-soft-stone pb-4">
              <div className="flex items-center space-x-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-obsidian text-obsidian" />
                ))}
              </div>
              <span className="text-xs font-bold text-obsidian">{product.rating}</span>
              <span className="text-xs text-warm-taupe">({product.reviewCount} Reviews)</span>
            </div>
          )}

          {/* Price Area */}
          <div className="py-2">
            <ProductPrice price={selectedVariant.price} compareAtPrice={selectedVariant.compareAtPrice} size="lg" />
          </div>

          {/* Variant Selection (Shade or Size) */}
          <div className="space-y-6 pt-2 border-t border-soft-stone">
            {isMakeup ? (
              <ShadeSelector
                variants={product.variants}
                selectedVariant={selectedVariant}
                onSelectVariant={setSelectedVariant}
              />
            ) : (
              <VariantSelector
                optionName="SIZE"
                variants={product.variants}
                selectedVariant={selectedVariant}
                onSelectVariant={setSelectedVariant}
              />
            )}

            {/* Quantity Selector */}
            <div className="space-y-2">
              <label className="block font-display text-xs tracking-widest text-obsidian uppercase">QUANTITY</label>
              <QuantitySelector quantity={quantity} onChange={setQuantity} disabled={!selectedVariant.availableForSale} />
            </div>

            {/* Direct Shopify Checkout Action */}
            <div className="pt-2">
              <BuyNowButton variant={selectedVariant} quantity={quantity} />
            </div>
          </div>

          {/* Guarantee Badges */}
          <div className="grid grid-cols-3 gap-2 pt-6 border-t border-soft-stone text-center text-[10px] font-display text-warm-taupe uppercase">
            <div className="flex flex-col items-center space-y-1">
              <Truck className="w-4 h-4 text-obsidian" />
              <span>Complimentary Shipping</span>
            </div>
            <div className="flex flex-col items-center space-y-1">
              <ShieldCheck className="w-4 h-4 text-obsidian" />
              <span>Shopify Checkout</span>
            </div>
            <div className="flex flex-col items-center space-y-1">
              <RotateCcw className="w-4 h-4 text-obsidian" />
              <span>30-Day Returns</span>
            </div>
          </div>

          {/* Expandable Information Accordions */}
          <div className="border-t border-soft-stone pt-4 space-y-2">
            {/* Key Benefits */}
            <div className="border-b border-soft-stone pb-3">
              <button
                onClick={() => toggleSection('benefits')}
                className="w-full flex items-center justify-between font-display text-xs tracking-widest text-obsidian uppercase font-semibold text-left py-2"
              >
                <span>KEY BENEFITS & RESULTS</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${openSection === 'benefits' ? 'rotate-180' : ''}`} />
              </button>
              {openSection === 'benefits' && (
                <div className="pt-2 text-xs text-deep-charcoal leading-relaxed space-y-2 animate-fade-in font-body">
                  <p>{product.description}</p>
                  {product.metafields?.keyBenefits && (
                    <ul className="list-disc pl-4 space-y-1 text-warm-taupe pt-2">
                      {product.metafields.keyBenefits.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>

            {/* How to Use */}
            <div className="border-b border-soft-stone pb-3">
              <button
                onClick={() => toggleSection('how-to-use')}
                className="w-full flex items-center justify-between font-display text-xs tracking-widest text-obsidian uppercase font-semibold text-left py-2"
              >
                <span>HOW TO APPLY & USE</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${openSection === 'how-to-use' ? 'rotate-180' : ''}`} />
              </button>
              {openSection === 'how-to-use' && (
                <div className="pt-2 text-xs text-deep-charcoal leading-relaxed animate-fade-in font-body">
                  {product.metafields?.howToUse || 'Dispense onto fingertips or brush and apply evenly over targeted skin areas morning and evening.'}
                </div>
              )}
            </div>

            {/* Full Ingredients */}
            <div className="border-b border-soft-stone pb-3">
              <button
                onClick={() => toggleSection('ingredients')}
                className="w-full flex items-center justify-between font-display text-xs tracking-widest text-obsidian uppercase font-semibold text-left py-2"
              >
                <span>FULL INGREDIENTS LIST</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${openSection === 'ingredients' ? 'rotate-180' : ''}`} />
              </button>
              {openSection === 'ingredients' && (
                <div className="pt-2 text-[11px] text-warm-taupe leading-relaxed animate-fade-in font-mono">
                  {product.metafields?.fullIngredients || 'Aqua/Water/Eau, Glycerin, Niacinamide, Sodium Hyaluronate, Tocopherol, Phenoxyethanol.'}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Complete the Routine & Related Products */}
      <section className="pt-16 border-t border-soft-stone space-y-8">
        <div className="text-center space-y-2">
          <span className="font-display text-xs tracking-mega text-warm-taupe uppercase">SYNERGISTIC RITUAL</span>
          <h2 className="font-display text-xl sm:text-2xl tracking-widest text-obsidian uppercase font-bold">
            PRODUCTS THAT WORK WELL TOGETHER
          </h2>
        </div>
        <ProductGrid products={relatedProducts} columns={4} />
      </section>

      {/* Sticky Mobile Purchase Bar */}
      <StickyMobilePurchaseBar productTitle={product.title} variant={selectedVariant} />
    </div>
  );
};
