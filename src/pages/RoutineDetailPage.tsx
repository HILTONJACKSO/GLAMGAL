import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getRoutineByHandle, getProductByHandle } from '../lib/shopify';
import { BeautyRoutine, Product } from '../types/shopify';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SEO } from '../components/common/SEO';
import { LoadingState } from '../components/common/LoadingState';
import { Sparkles, ArrowRight, ExternalLink } from 'lucide-react';

export const RoutineDetailPage: React.FC = () => {
  const { handle } = useParams<{ handle: string }>();
  const [routine, setRoutine] = useState<BeautyRoutine | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <div className="max-w-5xl mx-auto px-6 py-8 space-y-12 select-none font-serif">
      <SEO title={routine.title} description={routine.description} image={routine.coverImage} />
      <Breadcrumbs items={[{ label: 'BEAUTY ROUTINES', href: '/routines' }, { label: routine.title }]} />

      {/* Routine Banner */}
      <div className="relative overflow-hidden bg-obsidian text-warm-white p-8 md:p-12 rounded-3xl border border-soft-stone shadow-2xl">
        <img
          src={routine.coverImage}
          alt={routine.title}
          className="absolute inset-0 w-full h-full object-cover object-center opacity-30"
        />
        <div className="relative z-10 space-y-4 max-w-2xl">
          <div className="flex items-center space-x-2 text-[10px] font-display text-[#B89275] uppercase font-bold">
            <Sparkles className="w-3.5 h-3.5 text-[#B89275]" />
            <span>{routine.goal} • {routine.durationMinutes} MIN CLINICAL RITUAL</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl tracking-tight uppercase font-black">{routine.title}</h1>
          <p className="text-xs sm:text-sm text-soft-stone font-light leading-relaxed">{routine.description}</p>

          <div className="pt-4 flex items-center space-x-4">
            <a
              href="https://glamgalbeauty.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#B89275] hover:bg-white hover:text-obsidian text-white font-display text-xs font-bold tracking-widest py-3.5 px-8 uppercase rounded-full transition-all flex items-center space-x-2 shadow-md"
            >
              <span>VISIT STORE FOR FORMULATIONS ↗</span>
            </a>
          </div>
        </div>
      </div>

      {/* Step by Step Breakdown */}
      <div className="space-y-8">
        <h2 className="font-serif text-xl tracking-wide text-obsidian uppercase font-bold border-b border-soft-stone pb-3">
          STEP-BY-STEP RITUAL GUIDE
        </h2>

        <div className="space-y-6">
          {routine.steps.map((step, idx) => {
            const product = products[idx];
            return (
              <div key={step.stepNumber} className="bg-white border border-[#E3D6C5] p-6 rounded-2xl grid grid-cols-1 md:grid-cols-12 gap-6 items-center shadow-xs">
                <div className="md:col-span-1 flex justify-center">
                  <span className="w-12 h-12 rounded-full bg-obsidian text-warm-white font-display text-base font-bold flex items-center justify-center">
                    0{step.stepNumber}
                  </span>
                </div>

                <div className="md:col-span-7 space-y-2">
                  <h3 className="font-serif text-base tracking-wider text-obsidian uppercase font-bold">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#5C5046] leading-relaxed font-body">
                    {step.instruction}
                  </p>
                </div>

                {product && (
                  <div className="md:col-span-4 flex items-center space-x-3 bg-[#FAF5F0] p-3 rounded-xl border border-[#E3D6C5]">
                    <img src={product.featuredImage?.url} alt={product.title} className="w-12 h-14 object-cover rounded-lg" />
                    <div className="min-w-0 flex-1">
                      <h4 className="font-serif text-xs text-obsidian font-bold truncate">{product.title}</h4>
                      <Link to={`/products/${product.handle}`} className="text-[10px] font-display text-[#B89275] font-bold uppercase block hover:underline mt-1">
                        VIEW FORMULATION SPECS →
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
