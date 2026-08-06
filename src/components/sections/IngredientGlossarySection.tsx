import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Search, Check, ExternalLink, X, ShieldCheck, Droplets, Sun, Activity } from 'lucide-react';

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
    featuredProductImage: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80',
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
    featuredProductImage: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80',
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
    featuredProductImage: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80',
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
    featuredProductImage: 'https://images.unsplash.com/photo-1608248597261-833258057467?auto=format&fit=crop&w=600&q=80',
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
    featuredProductImage: 'https://images.unsplash.com/photo-1608248597261-833258057467?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'ing-6',
    name: 'SWISS EDELWEISS STEM CELLS',
    chemicalName: 'Leontopodium Alpinum Callus Culture Extract',
    category: 'ANTI-AGING',
    origin: 'High-Altitude Swiss Alps',
    concentration: '1.5% Concentrated Bio-Extract',
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
    featuredProductImage: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80',
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
        return <ShieldCheck className="w-5 h-5 text-amber-600" />;
      case 'droplet':
        return <Droplets className="w-5 h-5 text-blue-600" />;
      case 'sun':
        return <Sun className="w-5 h-5 text-amber-500" />;
      default:
        return <Activity className="w-5 h-5 text-purple-600" />;
    }
  };

  return (
    <section className="bg-gradient-to-b from-[#FAF5F0] via-[#F4EBE2] to-[#FAF5F0] py-24 border-t border-[#E3D5C8] relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#B89275]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12 relative z-10">
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/80 border border-[#B89275]/40 shadow-xs backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-[#B89275]" />
            <span className="font-display text-xs font-bold tracking-wider text-[#A68064] uppercase">
              THE INGREDIENT GLOSSARY
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl tracking-wider text-obsidian uppercase font-bold">
            SCIENCE & ACTIVE FORMULATION GLOSSARY
          </h2>

          <p className="font-body text-sm sm:text-base text-[#5C5046] leading-relaxed max-w-2xl mx-auto font-light">
            We believe in 100% bio-transparency. Explore the molecular science, botanical origins, and clinical benefits behind every active component in GLAMGAL formulations.
          </p>
        </div>

        {/* SEARCH & FILTER CONTROLS */}
        <div className="bg-white/90 p-4 sm:p-5 rounded-2xl border border-[#E3D5C8] shadow-sm flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-[#A68064] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search active ingredient or benefits..."
              className="w-full bg-[#FAF5F0] border border-[#E3D5C8] focus:border-[#B89275] text-obsidian text-xs font-body pl-10 pr-4 py-2.5 rounded-xl outline-none"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {['ALL', 'BARRIER REPAIR', 'HYDRATION', 'RADIANCE', 'ANTI-AGING'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-[10px] sm:text-xs font-display tracking-wider uppercase px-4 py-2 rounded-full font-bold transition-all ${
                  activeCategory === cat
                    ? 'bg-obsidian text-warm-white shadow-md'
                    : 'bg-[#FAF5F0] text-[#5C5046] hover:bg-white hover:text-obsidian border border-[#E3D5C8]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* INGREDIENTS CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredIngredients.map((ing) => (
            <div
              key={ing.id}
              onClick={() => setSelectedIngredient(ing)}
              className="bg-white rounded-2xl p-6 border border-[#E3D5C8] hover:border-[#B89275] shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between group space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-[#FAF5F0] border border-[#E3D5C8]">
                    {renderIcon(ing.iconType)}
                  </div>
                  <span className="text-[10px] font-display font-bold text-[#B89275] bg-[#FAF5F0] border border-[#B89275]/30 px-3 py-1 rounded-full uppercase">
                    {ing.concentration}
                  </span>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] font-display text-[#A68064] uppercase font-bold block">
                    {ing.origin}
                  </span>
                  <h3 className="font-display text-base font-bold text-obsidian uppercase tracking-wider group-hover:text-[#B89275] transition-colors">
                    {ing.name}
                  </h3>
                  <p className="text-xs font-mono text-warm-taupe italic truncate">
                    {ing.chemicalName}
                  </p>
                </div>

                <p className="text-xs text-[#5C5046] font-body line-clamp-3 leading-relaxed">
                  {ing.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E3D5C8]/60 flex items-center justify-between text-xs font-display font-bold text-[#B89275] group-hover:translate-x-1 transition-transform uppercase">
                <span>VIEW MOLECULAR BREAKDOWN</span>
                <span>→</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* INGREDIENT DETAIL MODAL */}
      {selectedIngredient && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fade-in">
          <div className="bg-white rounded-[28px] border border-[#B89275]/40 max-w-2xl w-full overflow-hidden shadow-2xl relative p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedIngredient(null)}
              className="absolute top-4 right-4 bg-[#FAF5F0] hover:bg-obsidian text-obsidian hover:text-white p-2 rounded-full transition-all border border-[#E3D5C8]"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center space-x-3">
              <div className="p-3 rounded-2xl bg-[#FAF5F0] border border-[#E3D5C8]">
                {renderIcon(selectedIngredient.iconType)}
              </div>
              <div>
                <span className="text-[10px] font-display font-bold text-[#B89275] uppercase block">
                  {selectedIngredient.category} • {selectedIngredient.concentration}
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-obsidian uppercase tracking-wider">
                  {selectedIngredient.name}
                </h3>
                <p className="text-xs font-mono text-warm-taupe italic">
                  {selectedIngredient.chemicalName}
                </p>
              </div>
            </div>

            <div className="space-y-3 bg-[#FAF5F0] p-4 rounded-2xl border border-[#E3D5C8]">
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
                  <h4 className="font-display text-xs font-bold text-white uppercase truncate">
                    {selectedIngredient.featuredProductName}
                  </h4>
                </div>
              </div>

              <Link
                to={`/products/${selectedIngredient.featuredProductHandle}`}
                onClick={() => setSelectedIngredient(null)}
                className="bg-[#B89275] hover:bg-[#A37E62] text-white text-[10px] font-display font-bold px-4 py-2.5 rounded-xl uppercase transition-all shrink-0 flex items-center space-x-1"
              >
                <span>SHOP</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
