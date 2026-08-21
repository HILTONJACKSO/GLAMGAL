import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Layers, ArrowRight, Check } from 'lucide-react';

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
    productImage: '/calming_rosewater_toner_mockup.png',
    instruction: 'Mist 3-4 pumps over clean skin. Press gently with palms until micro-droplets absorb.',
    benefit: 'Balances skin pH and prepares skin matrix to absorb 3x more hydration.',
  },
  {
    stepNumber: 2,
    stepTitle: 'HYDRATE & REPAIR',
    productName: 'LUMINOUS BARRIER SERUM',
    productHandle: 'luminous-barrier-serum',
    productImage: '/calming_rosewater_toner_mockup.png',
    instruction: 'Dispense 1 full dropper into fingertips. Sweep upward from neck to forehead.',
    benefit: 'Infuses triple micro-hyaluronic spheres and botanical peptides for 72-hour glass glow.',
  },
  {
    stepNumber: 3,
    stepTitle: 'SEAL & RECOVER',
    productName: 'CELLULAR OVERNIGHT REPAIR CREAM',
    productHandle: 'cellular-overnight-repair-cream',
    productImage: '/ultimate_brow_eye_cream_liner_mockup.png',
    instruction: 'Warm a pearl-sized amount between palms and press into skin to lock in active serum.',
    benefit: 'Seals moisture reservoir and repairs lipid barrier while sleeping.',
  },
  {
    stepNumber: 4,
    stepTitle: 'COUTURE ACCENT',
    productName: 'VELVET MATTE COUTURE LIPSTICK',
    productHandle: 'velvet-matte-lipstick',
    productImage: '/liquid_velvet_lipstick_mockup.png',
    instruction: 'Glide bullet from Cupid’s bow outward. Blot lightly for a soft-focus suede stain.',
    benefit: 'Delivers non-drying 16-hour velvet pigment with hyaluronic spheres.',
  },
];

export const GlamgalJournalSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'BLOG' | 'LAYERING'>('BLOG');

  const editorsChoiceArticles = [
    {
      category: 'BARRIER SCIENCE',
      title: '72-Hour Luminous Moisture Protocol',
      author: '08.21.2026 by Caroline',
      image: '/calming_rosewater_toner_mockup.png',
      link: '/journal',
    },
    {
      category: 'COUTURE MAKEUP',
      title: 'Velvet Matte Lip Styling & Swatches',
      author: '08.19.2026 by Gilly Flukinger',
      image: '/liquid_velvet_lipstick_mockup.png',
      link: '/journal',
    },
    {
      category: 'DERMATOLOGY',
      title: 'Botanical Niacinamide & Peptide Complex',
      author: '08.15.2026 by Dr. Paige Garvin',
      image: '/ultimate_brow_eye_cream_liner_mockup.png',
      link: '/ingredients',
    },
    {
      category: 'STUDIO REELS',
      title: 'Behind the Scenes in Paris Lab',
      author: '08.12.2026 by Kyra Limes',
      image: '/polished_smoothing_body_scrub_mockup.png',
      link: '/behind-the-scenes',
    },
    {
      category: 'VIRTUAL VANITY',
      title: '5-Minute Obsidian Gua Sha Sculpting',
      author: '08.10.2026 by Samantha Kim',
      image: '/hero_model.png',
      link: '/virtual-vanity',
    },
  ];

  return (
    <section className="bg-[#FAF5F0] py-24 border-t border-[#E3D5C8] relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12 relative z-10">
        {/* SECTION HEADER (L'OFFICIEL EDITORS' CHOICE STYLE - SCREENSHOT 2) */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white border border-[#B89275]/40 shadow-xs">
            <BookOpen className="w-3.5 h-3.5 text-[#B89275]" />
            <span className="font-display text-xs font-bold tracking-wider text-[#A68064] uppercase">
              EDITORIAL CURATION
            </span>
          </div>

          <h2 className="font-serif text-4xl sm:text-6xl tracking-tight text-obsidian uppercase font-black">
            EDITORS' CHOICE
          </h2>

          <p className="font-body text-xs sm:text-sm text-[#5C5046] leading-relaxed max-w-2xl mx-auto font-light">
            Selected beauty essays, formulation blueprints, and masterclass tutorials curated by GLAMGAL senior editors.
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

        {/* TAB 1: 5-COLUMN EDITORS' CHOICE PORTRAIT GRID (SCREENSHOT 2 INSPIRATION) */}
        {activeTab === 'BLOG' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {editorsChoiceArticles.map((art, idx) => (
              <Link
                key={art.title}
                to={art.link}
                className="group flex flex-col justify-between space-y-3 bg-white p-4 rounded-2xl border border-[#E3D5C8] hover:border-[#B89275] shadow-xs hover:shadow-xl transition-all"
              >
                <div>
                  {/* Vertical Portrait Image Ratio */}
                  <div className="aspect-[3/4] rounded-xl overflow-hidden bg-[#FAF5F0] mb-3">
                    <img
                      src={art.image}
                      alt={art.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <span className="text-[9px] font-display font-bold text-[#A68064] tracking-widest uppercase block mb-1">
                    {art.category}
                  </span>

                  <h3 className="font-serif text-sm font-bold text-obsidian uppercase tracking-wide group-hover:text-[#B89275] transition-colors leading-snug line-clamp-2">
                    {art.title}
                  </h3>
                </div>

                <div className="pt-2 border-t border-[#E3D5C8]/60 flex items-center justify-between">
                  <span className="text-[9px] font-body text-[#7C6659]">
                    {art.author}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#B89275] group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* TAB 2: STEP-BY-STEP PRODUCT LAYERING GUIDE */}
        {activeTab === 'LAYERING' && (
          <div className="space-y-8 bg-white p-6 sm:p-10 rounded-[28px] border border-[#E3D5C8] shadow-lg">
            <div className="text-center max-w-xl mx-auto space-y-2">
              <span className="text-[10px] font-display font-bold text-[#B89275] uppercase tracking-widest block">
                THE PERFECT SYNERGY
              </span>
              <h3 className="font-serif text-2xl font-bold text-obsidian uppercase tracking-wider">
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

                    <a
                      href="https://glamgalbeauty.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center bg-white hover:bg-obsidian hover:text-white text-obsidian text-[10px] font-display font-bold py-2 rounded-xl border border-[#E3D5C8] uppercase transition-all mt-2"
                    >
                      VISIT STORE ↗
                    </a>
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
