import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Layers, Play, Clock, Sparkles, ArrowRight, Check } from 'lucide-react';

export interface LayeringStep {
  stepNumber: number;
  stepTitle: string;
  productName: string;
  productHandle: string;
  productImage: string;
  instruction: string;
  benefit: string;
}

export const LAYERING_GUIDE_STEPS: LayeringStep[] = [
  {
    stepNumber: 1,
    stepTitle: 'PREP & BALANCE',
    productName: 'CALMING ROSEWATER HYDRATING TONER',
    productHandle: 'calming-rosewater-hydrating-toner',
    productImage: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80',
    instruction: 'Mist 3-4 pumps over clean skin. Press gently with palms until micro-droplets absorb.',
    benefit: 'Balances skin pH and prepares skin matrix to absorb 3x more hydration.',
  },
  {
    stepNumber: 2,
    stepTitle: 'HYDRATE & REPAIR',
    productName: 'LUMINOUS BARRIER SERUM',
    productHandle: 'luminous-barrier-serum',
    productImage: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80',
    instruction: 'Dispense 1 full dropper into fingertips. Sweep upward from neck to forehead.',
    benefit: 'Infuses triple micro-hyaluronic spheres and botanical peptides for 72-hour glass glow.',
  },
  {
    stepNumber: 3,
    stepTitle: 'SEAL & RECOVER',
    productName: 'CELLULAR OVERNIGHT REPAIR CREAM',
    productHandle: 'cellular-overnight-repair-cream',
    productImage: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80',
    instruction: 'Warm a pearl-sized amount between palms and press into skin to lock in active serum.',
    benefit: 'Seals moisture reservoir and repairs lipid barrier while sleeping.',
  },
  {
    stepNumber: 4,
    stepTitle: 'COUTURE ACCENT',
    productName: 'VELVET MATTE COUTURE LIPSTICK',
    productHandle: 'velvet-matte-lipstick',
    productImage: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=80',
    instruction: 'Glide bullet from Cupid’s bow outward. Blot lightly for a soft-focus suede stain.',
    benefit: 'Delivers non-drying 16-hour velvet pigment with hyaluronic spheres.',
  },
];

export const GlamgalJournalSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'BLOG' | 'LAYERING'>('BLOG');

  return (
    <section className="bg-[#FAF5F0] py-24 border-t border-[#E3D5C8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12 relative z-10">
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white border border-[#B89275]/40 shadow-xs backdrop-blur-md">
            <BookOpen className="w-3.5 h-3.5 text-[#B89275]" />
            <span className="font-display text-xs font-bold tracking-wider text-[#A68064] uppercase">
              THE GLAMGAL JOURNAL & TUTORIALS
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl tracking-wider text-obsidian uppercase font-bold">
            SKIN EDUCATION, TRENDS & PRODUCT LAYERING
          </h2>

          <p className="font-body text-sm sm:text-base text-[#5C5046] leading-relaxed max-w-2xl mx-auto font-light">
            Master the art of barrier-first skincare and seasonal couture makeup with step-by-step layering tutorials and editorial beauty guides.
          </p>

          {/* TAB SWITCHER */}
          <div className="pt-4 flex justify-center space-x-3">
            <button
              onClick={() => setActiveTab('BLOG')}
              className={`font-display text-xs font-bold tracking-wider uppercase px-6 py-3 rounded-full transition-all ${
                activeTab === 'BLOG'
                  ? 'bg-obsidian text-warm-white shadow-md'
                  : 'bg-white text-[#5C5046] border border-[#E3D5C8] hover:bg-[#F4EBE2]'
              }`}
            >
              EDITORIAL JOURNAL & TRENDS
            </button>
            <button
              onClick={() => setActiveTab('LAYERING')}
              className={`font-display text-xs font-bold tracking-wider uppercase px-6 py-3 rounded-full transition-all flex items-center space-x-2 ${
                activeTab === 'LAYERING'
                  ? 'bg-obsidian text-warm-white shadow-md'
                  : 'bg-white text-[#5C5046] border border-[#E3D5C8] hover:bg-[#F4EBE2]'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>PRODUCT LAYERING GUIDE</span>
            </button>
          </div>
        </div>

        {/* TAB 1: EDITORIAL ARTICLES */}
        {activeTab === 'BLOG' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link
              to="/journal/72-hour-barrier-repair-guide"
              className="bg-white rounded-2xl border border-[#E3D5C8] hover:border-[#B89275] overflow-hidden group shadow-xs hover:shadow-xl transition-all block"
            >
              <div className="aspect-[16/10] overflow-hidden bg-[#FAF5F0]">
                <img
                  src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80"
                  alt="72-Hour Barrier Repair"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-3">
                <span className="text-[10px] font-display font-bold text-[#B89275] uppercase block">
                  SKIN CONCERNS • BARRIER SCIENCE
                </span>
                <h3 className="font-display text-base font-bold text-obsidian uppercase tracking-wider group-hover:text-[#B89275] transition-colors">
                  THE 72-HOUR BARRIER REPAIR PROTOCOL
                </h3>
                <p className="text-xs text-[#5C5046] font-body line-clamp-2 leading-relaxed">
                  How micro-hyaluronic spheres and botanical peptides reverse moisture loss and environmental sensitivity in 3 simple steps.
                </p>
                <div className="pt-2 flex items-center justify-between text-xs font-display font-bold text-obsidian group-hover:translate-x-1 transition-transform uppercase">
                  <span>READ JOURNAL ARTICLE</span>
                  <ArrowRight className="w-4 h-4 text-[#B89275]" />
                </div>
              </div>
            </Link>

            <Link
              to="/journal/velvet-vs-satin-lipstick-guide"
              className="bg-white rounded-2xl border border-[#E3D5C8] hover:border-[#B89275] overflow-hidden group shadow-xs hover:shadow-xl transition-all block"
            >
              <div className="aspect-[16/10] overflow-hidden bg-[#FAF5F0]">
                <img
                  src="https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=800&q=80"
                  alt="Velvet vs Satin"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-3">
                <span className="text-[10px] font-display font-bold text-[#B89275] uppercase block">
                  SEASONAL MAKEUP TRENDS
                </span>
                <h3 className="font-display text-base font-bold text-obsidian uppercase tracking-wider group-hover:text-[#B89275] transition-colors">
                  AUTUMN VELVET: COUTURE LIPSTICK STYLING
                </h3>
                <p className="text-xs text-[#5C5046] font-body line-clamp-2 leading-relaxed">
                  Discover how to achieve a non-drying suede lip stain using our hyaluronic micro-spheres formula.
                </p>
                <div className="pt-2 flex items-center justify-between text-xs font-display font-bold text-obsidian group-hover:translate-x-1 transition-transform uppercase">
                  <span>READ JOURNAL ARTICLE</span>
                  <ArrowRight className="w-4 h-4 text-[#B89275]" />
                </div>
              </div>
            </Link>

            <Link
              to="/journal/gua-sha-lymphatic-drainage-routine"
              className="bg-white rounded-2xl border border-[#E3D5C8] hover:border-[#B89275] overflow-hidden group shadow-xs hover:shadow-xl transition-all block"
            >
              <div className="aspect-[16/10] overflow-hidden bg-[#FAF5F0]">
                <img
                  src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80"
                  alt="Gua Sha Lymphatic Drainage"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-3">
                <span className="text-[10px] font-display font-bold text-[#B89275] uppercase block">
                  ARTIST TUTORIALS & SCULPTING
                </span>
                <h3 className="font-display text-base font-bold text-obsidian uppercase tracking-wider group-hover:text-[#B89275] transition-colors">
                  5-MINUTE OBSIDIAN GUA SHA SCULPTING RITUAL
                </h3>
                <p className="text-xs text-[#5C5046] font-body line-clamp-2 leading-relaxed">
                  Release cheekbone tension, drain stagnant fluid, and define jawline contours with volcanic stone energy.
                </p>
                <div className="pt-2 flex items-center justify-between text-xs font-display font-bold text-obsidian group-hover:translate-x-1 transition-transform uppercase">
                  <span>READ JOURNAL ARTICLE</span>
                  <ArrowRight className="w-4 h-4 text-[#B89275]" />
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* TAB 2: STEP-BY-STEP PRODUCT LAYERING GUIDE */}
        {activeTab === 'LAYERING' && (
          <div className="space-y-8 bg-white p-6 sm:p-10 rounded-[28px] border border-[#E3D5C8] shadow-lg">
            <div className="text-center max-w-xl mx-auto space-y-2">
              <span className="text-[10px] font-display font-bold text-[#B89275] uppercase tracking-widest block">
                THE PERFECT SYNERGY
              </span>
              <h3 className="font-display text-2xl font-bold text-obsidian uppercase tracking-wider">
                GLAMGAL STEP-BY-STEP PRODUCT LAYERING SEQUENCE
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
              {LAYERING_GUIDE_STEPS.map((step) => (
                <div
                  key={step.stepNumber}
                  className="bg-[#FAF5F0] p-5 rounded-2xl border border-[#E3D5C8] space-y-4 flex flex-col justify-between group hover:border-[#B89275] transition-all"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="w-8 h-8 rounded-full bg-obsidian text-warm-white font-display text-xs font-bold flex items-center justify-center">
                        0{step.stepNumber}
                      </span>
                      <span className="text-[10px] font-display font-bold text-[#B89275] uppercase tracking-wider">
                        {step.stepTitle}
                      </span>
                    </div>

                    <div className="aspect-square rounded-xl overflow-hidden bg-white border border-[#E3D5C8]">
                      <img
                        src={step.productImage}
                        alt={step.productName}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>

                    <h4 className="font-display text-xs font-bold text-obsidian uppercase tracking-wider line-clamp-1">
                      {step.productName}
                    </h4>

                    <p className="text-xs text-[#5C5046] font-body leading-relaxed">
                      {step.instruction}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#E3D5C8] space-y-2">
                    <span className="text-[9px] font-display font-bold text-[#A68064] uppercase block">
                      KEY CLINICAL BENEFIT
                    </span>
                    <p className="text-[11px] text-obsidian font-body flex items-start space-x-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{step.benefit}</span>
                    </p>

                    <Link
                      to={`/products/${step.productHandle}`}
                      className="block w-full text-center bg-white hover:bg-obsidian hover:text-white text-obsidian text-[10px] font-display font-bold py-2 rounded-xl border border-[#E3D5C8] uppercase transition-all mt-2"
                    >
                      SHOP STEP 0{step.stepNumber}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
