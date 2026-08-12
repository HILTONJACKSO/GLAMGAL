import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductByHandle, getProducts } from '../lib/shopify';
import { Product, ProductVariant } from '../types/shopify';
import { ProductGallery } from '../components/product/ProductGallery';
import { ShadeSelector } from '../components/product/ShadeSelector';
import { VariantSelector } from '../components/product/VariantSelector';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SEO } from '../components/common/SEO';
import { LoadingState } from '../components/common/LoadingState';
import { useAnalytics } from '../context/AnalyticsContext';
import {
  ShieldCheck,
  Truck,
  RotateCcw,
  ChevronDown,
  Star,
  Sparkles,
  BookOpen,
  Layers,
  Award,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

export const ProductDetailPage: React.FC = () => {
  const { handle } = useParams<{ handle: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'dossier' | 'how-to' | 'ingredients'>('dossier');
  const { trackProductViewed } = useAnalytics();

  useEffect(() => {
    async function loadProduct() {
      if (!handle) return;
      setLoading(true);
      try {
        const data = await getProductByHandle(handle);
        if (data) {
          setProduct(data);
          const initialVariant = data.variants.find((v) => v.availableForSale) || data.variants[0];
          setSelectedVariant(initialVariant);
          trackProductViewed(data);

          const allProds = await getProducts({ first: 5 });
          setRelatedProducts(allProds.filter((p) => p.id !== data.id).slice(0, 4));
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
    return <LoadingState message="COMPILING EDITORIAL DOSSIER..." />;
  }

  if (!product || !selectedVariant) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-20 text-center space-y-6">
        <h2 className="font-display text-2xl font-bold uppercase text-obsidian">FORMULATION DOSSIER NOT FOUND</h2>
        <p className="text-xs text-warm-taupe">The requested beauty specification could not be located in the journal archives.</p>
        <Link
          to="/collections/all"
          className="inline-block bg-obsidian text-warm-white font-display text-xs font-bold px-8 py-3 rounded-full uppercase"
        >
          EXPLORE BEAUTY COLLECTION
        </Link>
      </div>
    );
  }

  const isMakeup = product.category === 'Makeup';

  const jsonLd = {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    name: product.title,
    image: product.featuredImage?.url,
    description: product.description,
    brand: { '@type': 'Brand', name: 'GLAMGAL' },
  };

  return (
    <article className="bg-[#FAF7F2] min-h-screen pb-20 select-none">
      <SEO
        title={`${product.title} • GLAMGAL Editorial Dossier`}
        description={product.description}
        image={product.featuredImage?.url}
        jsonLd={jsonLd}
      />

      {/* MAGAZINE MASTHEAD EDITORIAL TOP BANNER */}
      <header className="border-b border-[#E3D6C5] bg-[#F4EBE2] py-4 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center space-x-2">
            <span className="font-display text-[10px] font-bold tracking-mega text-[#9E6D59] uppercase bg-white/80 px-3 py-1 rounded-full border border-[#E3D6C5]">
              GLAMGAL EDITORIAL DOSSIER N° 04
            </span>
            <span className="hidden md:inline text-xs text-warm-taupe font-body">• SPRING / SUMMER BEAUTY EDITION</span>
          </div>

          <div className="flex items-center space-x-4">
            <Breadcrumbs
              items={[
                { label: 'JOURNAL', href: '/journal' },
                { label: product.category.toUpperCase(), href: `/collections/${product.category.toLowerCase().replace(/ /g, '-')}` },
                { label: product.title },
              ]}
            />
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
        {/* MAIN HIGH-FASHION 2-COLUMN MAGAZINE SPREAD */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* LEFT COLUMN: EDITORIAL GALLERY SPREAD */}
          <div className="lg:col-span-7 space-y-4">
            <div className="bg-white rounded-3xl p-4 sm:p-6 border border-[#DECFC0] shadow-sm">
              <ProductGallery images={product.images} title={product.title} />

              <div className="mt-4 pt-4 border-t border-[#F0E6DC] flex items-center justify-between text-[10px] font-display text-warm-taupe uppercase tracking-widest">
                <span>FIG 1.1 — CLINICAL FORMULATION & TEXTURE BREAKDOWN</span>
                <span className="font-bold text-obsidian">GLAMGAL BEAUTY LAB</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: MAGAZINE ARTICLE & SPECIFICATION NOTES */}
          <div className="lg:col-span-5 space-y-8">
            {/* Title & Category Header */}
            <div className="space-y-3 border-b border-[#DECFC0] pb-6">
              <div className="flex items-center justify-between">
                <span className="font-display text-xs font-bold tracking-widest text-[#9E6D59] uppercase">
                  {product.category} • {product.vendor || 'GLAMGAL FORMULATION'}
                </span>

                {product.rating && (
                  <div className="flex items-center space-x-1.5 bg-white px-3 py-1 rounded-full border border-[#DECFC0] shadow-2xs">
                    <Star className="w-3.5 h-3.5 fill-[#A81B5E] text-[#A81B5E]" />
                    <span className="font-display text-xs font-bold text-obsidian">{product.rating}</span>
                    <span className="text-[10px] text-warm-taupe font-body">({product.reviewCount} Reviews)</span>
                  </div>
                )}
              </div>

              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl tracking-wider text-obsidian uppercase font-black leading-tight">
                {product.title}
              </h1>

              {product.subtitle && (
                <p className="font-body text-xs sm:text-sm text-[#5C5046] font-light leading-relaxed">
                  {product.subtitle}
                </p>
              )}
            </div>

            {/* EDITOR'S PULL QUOTE BOX */}
            <blockquote className="bg-white rounded-2xl p-5 border-l-4 border-[#B89275] border border-[#DECFC0] shadow-2xs space-y-2">
              <div className="flex items-center space-x-2 text-[#9E6D59]">
                <Sparkles className="w-4 h-4 text-[#B89275]" />
                <span className="font-display text-[10px] font-bold tracking-widest uppercase">EDITOR'S IMPRESSION</span>
              </div>
              <p className="font-body text-xs sm:text-sm text-[#4A3E36] italic leading-relaxed">
                "{product.description}"
              </p>
            </blockquote>

            {/* CLINICAL HIGHLIGHTS GRID */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="bg-white rounded-2xl p-4 border border-[#DECFC0] space-y-1">
                <span className="font-display text-[9px] font-bold tracking-widest text-warm-taupe uppercase block">
                  HYDRATION LOCK
                </span>
                <span className="font-display text-xs font-bold text-obsidian uppercase block">
                  72-HOUR RECOVERY
                </span>
              </div>

              <div className="bg-white rounded-2xl p-4 border border-[#DECFC0] space-y-1">
                <span className="font-display text-[9px] font-bold tracking-widest text-warm-taupe uppercase block">
                  CLINICAL RATING
                </span>
                <span className="font-display text-xs font-bold text-obsidian uppercase block">
                  DERMATOLOGIST TESTED
                </span>
              </div>
            </div>

            {/* VARIANT SELECTION (SHADE OR SIZE) */}
            <div className="space-y-6 pt-4 border-t border-[#DECFC0]">
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

              {/* DIRECT ACTION BUTTON TO OFFICIAL SHOPIFY STORE */}
              <div className="pt-2">
                <a
                  href="https://glamgalbeauty.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center space-x-3 bg-obsidian hover:bg-[#B89275] text-white font-display text-xs sm:text-sm font-bold tracking-widest uppercase py-4 rounded-full transition-all shadow-md hover:scale-101"
                >
                  <span>SHOP ON OFFICIAL STORE</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* GUARANTEE BADGES */}
            <div className="grid grid-cols-3 gap-2 pt-6 border-t border-[#DECFC0] text-center text-[10px] font-display text-warm-taupe uppercase">
              <div className="flex flex-col items-center space-y-1">
                <Truck className="w-4 h-4 text-obsidian" />
                <span>Complimentary Shipping</span>
              </div>
              <div className="flex flex-col items-center space-y-1">
                <ShieldCheck className="w-4 h-4 text-obsidian" />
                <span>Zero Hidden Ingredients</span>
              </div>
              <div className="flex flex-col items-center space-y-1">
                <RotateCcw className="w-4 h-4 text-obsidian" />
                <span>Worldwide Express</span>
              </div>
            </div>
          </div>
        </div>

        {/* MAGAZINE EDITORIAL TABS / EXPANDABLE DOSSIER SECTIONS */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-[#DECFC0] shadow-sm space-y-8">
          {/* TAB HEADER SWITCHER */}
          <div className="flex items-center space-x-4 border-b border-[#F0E6DC] pb-4 overflow-x-auto scrollbar-none">
            <button
              onClick={() => setActiveTab('dossier')}
              className={`font-display text-xs sm:text-sm font-bold tracking-widest uppercase pb-2 transition-all border-b-2 shrink-0 ${
                activeTab === 'dossier'
                  ? 'border-obsidian text-obsidian'
                  : 'border-transparent text-warm-taupe hover:text-obsidian'
              }`}
            >
              FORMULATION DOSSIER & SPECS
            </button>

            <button
              onClick={() => setActiveTab('how-to')}
              className={`font-display text-xs sm:text-sm font-bold tracking-widest uppercase pb-2 transition-all border-b-2 shrink-0 ${
                activeTab === 'how-to'
                  ? 'border-obsidian text-obsidian'
                  : 'border-transparent text-warm-taupe hover:text-obsidian'
              }`}
            >
              HOW TO APPLY & LAYERING TUTORIAL
            </button>

            <button
              onClick={() => setActiveTab('ingredients')}
              className={`font-display text-xs sm:text-sm font-bold tracking-widest uppercase pb-2 transition-all border-b-2 shrink-0 ${
                activeTab === 'ingredients'
                  ? 'border-obsidian text-obsidian'
                  : 'border-transparent text-warm-taupe hover:text-obsidian'
              }`}
            >
              FULL INCI INGREDIENTS LIST
            </button>
          </div>

          {/* TAB CONTENTS */}
          <div className="pt-2">
            {activeTab === 'dossier' && (
              <div className="space-y-6 animate-fade-in">
                <div className="prose prose-stone max-w-none">
                  <p className="first-letter:text-5xl first-letter:font-display first-letter:font-black first-letter:mr-3 first-letter:float-left text-xs sm:text-sm text-[#4A3E36] leading-relaxed font-body font-light">
                    {product.description}
                  </p>
                </div>

                {product.metafields?.keyBenefits && (
                  <div className="space-y-3 pt-4 border-t border-[#F0E6DC]">
                    <h4 className="font-display text-xs font-bold tracking-wider text-obsidian uppercase">
                      CLINICAL BENEFITS & TARGETED RESULTS
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {product.metafields.keyBenefits.map((benefit, i) => (
                        <div key={i} className="flex items-start space-x-2.5 bg-[#FAF7F2] p-3 rounded-xl border border-[#F0E6DC]">
                          <CheckCircle2 className="w-4 h-4 text-[#B89275] shrink-0 mt-0.5" />
                          <span className="text-xs text-[#4A3E36] font-body">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'how-to' && (
              <div className="space-y-6 animate-fade-in">
                <div className="bg-[#FAF7F2] rounded-2xl p-6 border border-[#F0E6DC] space-y-4">
                  <div className="flex items-center space-x-2 text-[#9E6D59]">
                    <Layers className="w-5 h-5" />
                    <h4 className="font-display text-xs font-bold tracking-widest uppercase">STEP-BY-STEP APPLICATION ROUTINE</h4>
                  </div>
                  <p className="text-xs sm:text-sm text-[#4A3E36] font-body leading-relaxed">
                    {product.metafields?.howToUse ||
                      'Dispense 2-3 drops or swipe applicator evenly over targeted areas after cleansing. Gently press into skin using upward motions for optimal absorption and radiant glass-skin finish.'}
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'ingredients' && (
              <div className="space-y-4 animate-fade-in font-mono">
                <div className="bg-[#FAF7F2] rounded-2xl p-6 border border-[#F0E6DC] space-y-2">
                  <span className="font-display text-[10px] font-bold tracking-widest text-warm-taupe uppercase block">
                    DERMATOLOGIST INCI FORMULATION COMPOSITION
                  </span>
                  <p className="text-xs text-[#5C5046] leading-relaxed break-words">
                    {product.metafields?.fullIngredients ||
                      'Aqua/Water/Eau, Glycerin, Niacinamide, Sodium Hyaluronate, Tocopherol, Squalane, Peptide Complex, Centella Asiatica Extract, Rose Flower Water, Phenoxyethanol.'}
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* CURATED EDITORIAL PAIRINGS (PRODUCTS THAT WORK WELL TOGETHER) */}
        {relatedProducts.length > 0 && (
          <section className="space-y-8 pt-6">
            <div className="text-center space-y-2">
              <span className="font-display text-xs font-bold tracking-mega text-[#9E6D59] uppercase">
                SYNERGISTIC EDITORIAL PAIRINGS
              </span>
              <h2 className="font-display text-2xl sm:text-4xl tracking-widest text-obsidian uppercase font-black">
                RECOMMENDED FORMULATION RITUAL
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
                <div key={p.id} className="bg-white rounded-3xl p-5 border border-[#DECFC0] shadow-sm hover:shadow-xl transition-all duration-400 flex flex-col justify-between group">
                  <div className="space-y-3">
                    <Link to={`/products/${p.handle}`} className="block relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#FAF7F2]">
                      <img
                        src={p.featuredImage?.url || '/hero_model.png'}
                        alt={p.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </Link>

                    <div className="space-y-1">
                      <span className="text-[9px] font-display text-[#9E6D59] uppercase font-bold block">{p.category}</span>
                      <Link to={`/products/${p.handle}`}>
                        <h4 className="font-display text-xs tracking-wider text-obsidian uppercase font-bold group-hover:text-[#B89275] transition-colors line-clamp-1">
                          {p.title}
                        </h4>
                      </Link>
                    </div>
                  </div>

                  <div className="pt-3 mt-3 border-t border-[#F0E6DC]">
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
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  );
};
