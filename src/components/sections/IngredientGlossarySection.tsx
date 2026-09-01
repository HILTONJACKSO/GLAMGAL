import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Search, Check, ExternalLink, X, ShieldCheck, Droplets, Sun, Activity, BookOpen, MoveRight } from 'lucide-react';

export interface IngredientDetail {
  id: string;
  name: string;
  chemicalName: string;
  category: 'BARRIER REPAIR' | 'HYDRATION' | 'ANTI-AGING' | 'RADIANCE';
  origin: string;
  benefits: string[];
  description: string;
  featuredProductHandle: string;
  featuredProductName: string;
  featuredProductImage: string;
  concentration: string;
  iconType: 'shield' | 'droplet' | 'sun' | 'activity';
}

export const INGREDIENT_GLOSSARY_DATA: IngredientDetail[] = [
  {
    id: 'ing-1',
    name: 'MICRO-HYALURONIC SPHERES',
    chemicalName: 'Sodium Hyaluronate Crosspolymer (Multi-Molecular Weight)',
    category: 'HYDRATION',
    origin: 'Swiss Biotechnology Lab',
    concentration: '2.5% Pure Active',
    iconType: 'droplet',
    benefits: [
      'Penetrates 5 epidermal layers for 72-hour deep reservoir moisture',
      'Plumps fine dehydration lines and smooths skin texture instantly',
      'Locks in barrier moisture without clogging pores or greasy residue',
    ],
    description:
      'Engineered with micro-encapsulated hyaluronic spheres of varying molecular weights. Low molecular weight molecules reach deep dermal layers, while high molecular weight spheres form a breathable protective hydration shield on top.',
    featuredProductHandle: 'luminous-barrier-serum',
    featuredProductName: 'LUMINOUS BARRIER SERUM',
    featuredProductImage: '/calming_rosewater_toner_mockup.png',
  },
  {
    id: 'ing-2',
    name: 'BOTANICAL PEPTIDE COMPLEX',
    chemicalName: 'Palmitoyl Tripeptide-5 & Acetyl Hexapeptide-8',
    category: 'BARRIER REPAIR',
    origin: 'French Marine Biotechnology',
    concentration: '3.0% Clinical Complex',
    iconType: 'shield',
    benefits: [
      'Stimulates natural collagen synthesis & restores skin elasticity',
      'Accelerates lipid barrier recovery from pollution & environmental stress',
      'Protects against moisture loss and redness caused by active treatments',
    ],
    description:
      'A bio-identical amino acid peptide matrix that mimics natural cellular signals. It reinforces intercellular lipids and ceramides, creating an invincible barrier against environmental oxidation.',
    featuredProductHandle: 'cellular-overnight-repair-cream',
    featuredProductName: 'CELLULAR OVERNIGHT REPAIR CREAM',
    featuredProductImage: '/calming_rosewater_toner_mockup.png',
  },
  {
    id: 'ing-3',
    name: 'NIACINAMIDE B3',
    chemicalName: 'Nicotinamide Pure USP Grade',
    category: 'RADIANCE',
    origin: 'Fermented Botanical Isolate',
    concentration: '5.0% Ultra-Refined',
    iconType: 'sun',
    benefits: [
      'Minimizes look of enlarged pores & refines skin grain',
      'Evens out hyperpigmentation and post-inflammatory dark spots',
      'Regulates excess sebum production for balanced, poreless clarity',
    ],
    description:
      'Ultra-purified Vitamin B3 designed to harmonize skin tone and strengthen lipid membranes. It prevents melanosome transfer, visibly illuminating dull skin while keeping oil production strictly balanced.',
    featuredProductHandle: 'calming-rosewater-hydrating-toner',
    featuredProductName: 'CALMING ROSEWATER TONER',
    featuredProductImage: '/calming_rosewater_toner_mockup.png',
  },
  {
    id: 'ing-4',
    name: 'COLD-PRESSED MARULA & GOLD SHIMMER',
    chemicalName: 'Sclerocarya Birrea Seed Oil & Mineral Mica',
    category: 'RADIANCE',
    origin: 'Ethically Harvested Southern Africa',
    concentration: '100% Pure Virgin Cold-Pressed',
    iconType: 'sun',
    benefits: [
      'Rich in Essential Fatty Acids Omega 6 & 9 for silky softness',
      'Delivers golden micro-pearlescent reflection to body & collarbones',
      'Fast-absorbing dry oil feel with zero sticky residue',
    ],
    description:
      'Unrefined wild-harvested Marula Oil infused with light-reflecting micro-gold minerals. Antioxidant-rich Vitamin C and E defend skin while delivering a lit-from-within golden hourglass radiance.',
    featuredProductHandle: 'sculpting-glow-body-nectar',
    featuredProductName: 'SCULPTING GLOW BODY NECTAR',
    featuredProductImage: '/polished_smoothing_body_scrub_mockup.png',
  },
  {
    id: 'ing-5',
    name: 'VOLCANIC OBSIDIAN MINERAL',
    chemicalName: 'Natural Vitreous Volcanic Glass',
    category: 'ANTI-AGING',
    origin: 'Natural Volcanic Minerals',
    concentration: '100% Solid Carved Gemstone',
    iconType: 'activity',
    benefits: [
      'Retains therapeutic heat & cooling thermal energy for lymphatic relief',
      'Sculpts jawline contours, cheekbones, and relieves muscle tension',
      'Enhances serum absorption deeper into dermal layers',
    ],
    description:
      'Hand-cut and polished natural volcanic obsidian stone. Known for its intense grounding thermal properties, it drains stagnant lymphatic fluids and releases facial micro-tensions for instant sculpting.',
    featuredProductHandle: 'obsidian-precision-contour-gua-sha',
    featuredProductName: 'OBSIDIAN PRECISION CONTOUR GUA SHA',
    featuredProductImage: '/ultimate_brow_eye_cream_liner_mockup.png',
  },
  {
    id: 'ing-6',
    name: 'SWISS EDELWEISS STEM CELLS',
    chemicalName: 'Leontopodium Alpinum Callus Culture Extract',
    category: 'ANTI-AGING',
    origin: 'High-Altitude Swiss Alps',
    concentration: '1.5% Bio-Extract',
    iconType: 'shield',
    benefits: [
      'Contains 2x more antioxidant capacity than Vitamin C',
      'Protects cellular DNA from UV oxidative stress & blue light breakdown',
      'Firms sagging skin texture and reinforces skin scaffolding',
    ],
    description:
      'Harvested from resilient alpine flowers surviving extreme UV exposure in Swiss mountains. Packed with leontopodic acid to neutralize free radicals and preserve youthful dermal elasticity.',
    featuredProductHandle: 'luminous-barrier-serum',
    featuredProductName: 'LUMINOUS BARRIER SERUM',
    featuredProductImage: '/calming_rosewater_toner_mockup.png',
  },
];

export const IngredientGlossarySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedIngredient, setSelectedIngredient] = useState<IngredientDetail | null>(null);

  const filteredIngredients = INGREDIENT_GLOSSARY_DATA.filter((ing) => {
    const matchesCategory =
      activeCategory === 'ALL' || ing.category === activeCategory;
    const matchesSearch =
      ing.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ing.chemicalName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ing.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const renderIcon = (type: string) => {
    switch (type) {
      case 'shield':
        return <ShieldCheck className="w-4 h-4 text-[#B89275]" />;
      case 'droplet':
        return <Droplets className="w-4 h-4 text-[#B89275]" />;
      case 'sun':
        return <Sun className="w-4 h-4 text-[#B89275]" />;
      default:
        return <Activity className="w-4 h-4 text-[#B89275]" />;
    }
  };

  return (
    <section className="bg-white py-28 lg:py-36 border-t border-[#E3D6C5] relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-8">
        
        {/* PHYSICAL MAGAZINE OPEN SPREAD CONTAINER */}
        <div className="bg-white rounded-[32px] border-2 border-[#E3D6C5] shadow-2xl p-6 sm:p-10 lg:p-14 relative overflow-hidden font-serif">
          
          {/* CENTER BOOK BINDING SPINE LINE (DESKTOP PRINT EFFECT) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#E3D6C5] to-transparent z-20 pointer-events-none" />

          {/* MAGAZINE PAGE MARGIN RUNNING HEADER */}
          <div className="flex items-center justify-between pb-6 mb-8 border-b border-[#E3D6C5]/80 text-[10px] font-display font-bold tracking-widest text-[#A68064] uppercase">
            <span>VOL. 04 — FORMULATION SCIENCE</span>
            <span className="hidden sm:inline-block">GLAMGAL BOTANICAL INGREDIENT GLOSSARY</span>
            <span>PAGE 42 / 43</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* LEFT MAGAZINE PAGE (PAGE 42: TITLE, DROP-CAP & FILTER INDEX) */}
            <div className="lg:col-span-5 space-y-6 lg:pr-6">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#FAF5F0] border border-[#B89275]/30">
                <BookOpen className="w-3.5 h-3.5 text-[#B89275]" />
                <span className="font-display text-[9px] font-bold tracking-widest text-[#A68064] uppercase">
                  ACTIVE INGREDIENT SPECS
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl font-black uppercase text-obsidian tracking-tight leading-none">
                FORMULATION GLOSSARY.
              </h2>

              {/* DROP-CAP EDITORIAL PARAGRAPH */}
              <p className="font-serif text-sm text-[#5C5046] leading-relaxed font-light first-letter:float-left first-letter:text-4xl first-letter:font-black first-letter:mr-2.5 first-letter:text-obsidian first-letter:leading-none">
                We believe in 100% bio-transparency. Every active component in GLAMGAL formulations is ethically sourced from alpine flora, marine biotechnology labs, and pure mineral extractions engineered for high-potency barrier health.
              </p>

              {/* SEARCH REGISTER INPUT */}
              <div className="relative pt-2">
                <Search className="w-4 h-4 text-[#A68064] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search active ingredient or chemical name..."
                  className="w-full bg-[#FAF5F0] border border-[#E3D6C5] focus:border-[#B89275] text-obsidian text-xs font-body pl-10 pr-4 py-3 rounded-xl outline-none"
                />
              </div>

              {/* INDEX TABS (PRINT STYLE) */}
              <div className="space-y-2 pt-2">
                <span className="text-[10px] font-display font-bold text-[#A68064] uppercase tracking-widest block">
                  CATEGORY INDEX
                </span>

                <div className="flex flex-wrap gap-2">
                  {['ALL', 'BARRIER REPAIR', 'HYDRATION', 'RADIANCE', 'ANTI-AGING'].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`text-[10px] font-display font-bold tracking-wider uppercase px-4 py-2 rounded-lg transition-all ${
                        activeCategory === cat
                          ? 'bg-obsidian text-white shadow-md'
                          : 'bg-[#FAF5F0] text-[#5C5046] hover:bg-[#E3D6C5] border border-[#E3D6C5]'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* EDITORIAL BOTANICAL & LAB PHOTOGRAPHY CARD (MAGAZINE PAGE 42 PLATE) */}
              <div className="pt-2">
                <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-[#E3D6C5] shadow-md group bg-black">
                  <img
                    src="/calming_rosewater_toner_mockup.png"
                    alt="GLAMGAL Botanical Extraction Plate"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[9px] font-display font-bold text-obsidian uppercase tracking-wider border border-[#E3D6C5]">
                    BOTANICAL ARCHIVE • FIG. 04
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white space-y-0.5">
                    <span className="text-[9px] font-display text-[#B89275] uppercase font-bold tracking-widest block">
                      SWISS BIOTECHNOLOGY EXTRACTION
                    </span>
                    <p className="text-[11px] font-serif text-white/90 line-clamp-1 italic">
                      "Pure molecular isolation of micro-hyaluronic spheres & alpine peptides."
                    </p>
                  </div>
                </div>
              </div>

              {/* BOTTOM PAGE FOOTER MARQUEE */}
              <div className="pt-6 border-t border-[#E3D6C5]/60 flex items-center justify-between text-[9px] font-display text-[#A68064] uppercase tracking-widest">
                <span>100% CLEAN & BIO-TRANSPARENT</span>
                <a
                  href="https://glamgalbeauty.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-obsidian hover:text-[#B89275] font-bold"
                >
                  STORE ↗
                </a>
              </div>
            </div>

            {/* RIGHT MAGAZINE PAGE (PAGE 43: INGREDIENT SPECS CARDS GRID) */}
            <div className="lg:col-span-7 lg:pl-6 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {filteredIngredients.map((ing) => (
                  <div
                    key={ing.id}
                    onClick={() => setSelectedIngredient(ing)}
                    className="bg-[#FAF7F2] rounded-2xl p-5 border border-[#E3D6C5] hover:border-[#B89275] shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between space-y-4 group font-serif"
                  >
                    <div className="space-y-2.5">
                      {/* Top Stamp Header */}
                      <div className="flex items-center justify-between">
                        <div className="p-2 rounded-xl bg-white border border-[#E3D6C5]">
                          {renderIcon(ing.iconType)}
                        </div>

                        <span className="text-[9px] font-display font-bold text-[#B89275] bg-white border border-[#B89275]/40 px-2.5 py-1 rounded-full uppercase">
                          {ing.concentration}
                        </span>
                      </div>

                      <span className="text-[9px] font-display text-[#A68064] uppercase font-bold block">
                        {ing.origin}
                      </span>

                      <h3 className="font-serif text-base font-bold text-obsidian uppercase tracking-wide group-hover:text-[#B89275] transition-colors leading-snug">
                        {ing.name}
                      </h3>

                      <p className="text-[11px] font-serif text-warm-taupe italic truncate">
                        {ing.chemicalName}
                      </p>

                      <p className="text-xs text-[#5C5046] font-body line-clamp-3 leading-relaxed">
                        {ing.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#E3D6C5]/80 flex items-center justify-between text-[10px] font-display font-bold text-obsidian group-hover:text-[#B89275] uppercase">
                      <span>SPECIFICATION</span>
                      <MoveRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* INGREDIENT DETAIL MODAL */}
      {selectedIngredient && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fade-in">
          <div className="bg-white rounded-[28px] border-2 border-[#E3D6C5] max-w-2xl w-full overflow-hidden shadow-2xl relative p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto font-serif">
            <button
              onClick={() => setSelectedIngredient(null)}
              className="absolute top-4 right-4 bg-[#FAF5F0] hover:bg-obsidian text-obsidian hover:text-white p-2 rounded-full transition-all border border-[#E3D6C5]"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center space-x-3">
              <div className="p-3 rounded-2xl bg-[#FAF5F0] border border-[#E3D6C5]">
                {renderIcon(selectedIngredient.iconType)}
              </div>
              <div>
                <span className="text-[10px] font-display font-bold text-[#B89275] uppercase block">
                  {selectedIngredient.category} • {selectedIngredient.concentration}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-obsidian uppercase tracking-wider">
                  {selectedIngredient.name}
                </h3>
                <p className="text-xs font-serif text-warm-taupe italic">
                  {selectedIngredient.chemicalName}
                </p>
              </div>
            </div>

            <div className="space-y-3 bg-[#FAF5F0] p-4 rounded-2xl border border-[#E3D6C5]">
              <span className="text-[10px] font-display font-bold text-obsidian uppercase tracking-wider block">
                ORIGIN & EXTRACTION
              </span>
              <p className="text-xs text-[#5C5046] font-body leading-relaxed">
                {selectedIngredient.description}
              </p>
            </div>

            <div className="space-y-3">
              <span className="text-[10px] font-display font-bold text-obsidian uppercase tracking-wider block">
                CLINICAL SKIN BENEFITS
              </span>
              <ul className="space-y-2">
                {selectedIngredient.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start space-x-2 text-xs text-obsidian font-body">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* FEATURED IN PRODUCT */}
            <div className="bg-[#141414] text-warm-white p-4 rounded-2xl flex items-center justify-between space-x-4 border border-deep-charcoal">
              <div className="flex items-center space-x-3 min-w-0">
                <img
                  src={selectedIngredient.featuredProductImage}
                  alt={selectedIngredient.featuredProductName}
                  className="w-12 h-12 rounded-xl object-cover border border-[#B89275]"
                />
                <div className="min-w-0">
                  <span className="text-[9px] font-display text-[#B89275] font-bold uppercase block">
                    FEATURED IN THIS FORMULATION
                  </span>
                  <h4 className="font-serif text-xs font-bold text-white uppercase truncate">
                    {selectedIngredient.featuredProductName}
                  </h4>
                </div>
              </div>

              <a
                href="https://glamgalbeauty.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#B89275] hover:bg-white hover:text-obsidian text-white text-[10px] font-display font-bold px-4 py-2.5 rounded-xl uppercase transition-all shrink-0 flex items-center space-x-1"
              >
                <span>STORE ↗</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
