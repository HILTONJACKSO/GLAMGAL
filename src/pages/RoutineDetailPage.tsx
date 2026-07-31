import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getRoutineByHandle, getProductByHandle } from '../lib/shopify';
import { BeautyRoutine, Product } from '../types/shopify';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SEO } from '../components/common/SEO';
import { LoadingState } from '../components/common/LoadingState';
import { useCart } from '../context/CartContext';
import { ShoppingBag, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

export const RoutineDetailPage: React.FC = () => {
  const { handle } = useParams<{ handle: string }>();
  const [routine, setRoutine] = useState<BeautyRoutine | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const { addRoutineToCart, isLoading } = useCart();

  useEffect(() => {
    async function loadRoutine() {
      if (!handle) return;
      setLoading(true);
      try {
        const data = await getRoutineByHandle(handle);
        if (data) {
          setRoutine(data);
          const loadedProds: Product[] = [];
          for (const step of data.steps) {
            const p = await getProductByHandle(step.productHandle);
            if (p) loadedProds.push(p);
          }
          setProducts(loadedProds);
        }
      } catch (err) {
        console.error('Failed to load routine detail:', err);
      } finally {
        setLoading(false);
      }
    }
    loadRoutine();
  }, [handle]);

  if (loading || !routine) return <LoadingState message="LOADING BEAUTY RITUAL INSTRUCTIONS..." />;

  const totalPrice = products.reduce((acc, p) => acc + parseFloat(p.priceRange.minVariantPrice.amount), 0);

  return (
    <div className="max-w-5xl mx-auto px-6 py-8 space-y-12">
      <SEO title={routine.title} description={routine.description} image={routine.coverImage} />
      <Breadcrumbs items={[{ label: 'BEAUTY ROUTINES', href: '/routines' }, { label: routine.title }]} />

      {/* Routine Banner */}
      <div className="relative overflow-hidden bg-obsidian text-warm-white p-8 md:p-12 rounded-sm border border-soft-stone">
        <img
          src={routine.coverImage}
          alt={routine.title}
          className="absolute inset-0 w-full h-full object-cover object-center opacity-30"
        />
        <div className="relative z-10 space-y-4 max-w-2xl">
          <div className="flex items-center space-x-2 text-[10px] font-display text-warm-taupe uppercase">
            <Sparkles className="w-3.5 h-3.5 text-warm-white" />
            <span>{routine.goal} • {routine.durationMinutes} MIN RITUAL</span>
          </div>
          <h1 className="font-display text-2xl sm:text-4xl tracking-widest uppercase font-bold">{routine.title}</h1>
          <p className="text-xs sm:text-sm text-soft-stone font-light leading-relaxed">{routine.description}</p>

          <div className="pt-4 flex items-center space-x-4">
            <button
              onClick={() => addRoutineToCart(routine)}
              disabled={isLoading}
              className="bg-warm-white text-obsidian font-display text-xs tracking-widest py-3.5 px-8 uppercase hover:bg-white transition-colors flex items-center space-x-2"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>ADD ALL {products.length} PRODUCTS TO BAG — ${totalPrice.toFixed(2)}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Step by Step Breakdown */}
      <div className="space-y-8">
        <h2 className="font-display text-xl tracking-widest text-obsidian uppercase font-bold border-b border-soft-stone pb-3">
          STEP-BY-STEP RITUAL GUIDE
        </h2>

        <div className="space-y-8">
          {routine.steps.map((step, idx) => {
            const product = products[idx];
            return (
              <div key={step.stepNumber} className="bg-white border border-soft-stone p-6 rounded-sm grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-1 flex justify-center">
                  <span className="w-12 h-12 rounded-full bg-obsidian text-warm-white font-display text-lg font-bold flex items-center justify-center">
                    {step.stepNumber}
                  </span>
                </div>

                <div className="md:col-span-7 space-y-2">
                  <h3 className="font-display text-sm tracking-wider text-obsidian uppercase font-bold">
                    {step.title}
                  </h3>
                  <p className="text-xs text-deep-charcoal leading-relaxed font-body">
                    {step.instruction}
                  </p>
                </div>

                {product && (
                  <div className="md:col-span-4 flex items-center space-x-3 bg-warm-white p-3 border border-soft-stone/50">
                    <img src={product.featuredImage?.url} alt={product.title} className="w-12 h-14 object-cover" />
                    <div>
                      <h4 className="font-display text-xs text-obsidian font-bold line-clamp-1">{product.title}</h4>
                      <span className="font-display text-xs text-obsidian">${parseFloat(product.priceRange.minVariantPrice.amount).toFixed(2)}</span>
                      <Link to={`/products/${product.handle}`} className="text-[10px] font-display text-warm-taupe uppercase block hover:underline">
                        VIEW ITEM →
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
