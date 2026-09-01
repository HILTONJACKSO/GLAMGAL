import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, MoveRight, ExternalLink, ArrowRight, Grid } from 'lucide-react';

export const HomepageBentoGallerySection: React.FC = () => {
  return (
    <section className="bg-white py-28 lg:py-36 border-t border-[#E3D6C5] relative overflow-hidden select-none font-serif">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-14">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#E3D6C5]">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-white border border-[#B89275]/30 shadow-xs">
              <Grid className="w-3.5 h-3.5 text-[#B89275]" />
              <span className="font-display text-[9px] sm:text-xs font-bold tracking-widest text-[#A68064] uppercase">
                FORMULATION ARCHIVE • BENTO MATRIX
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl tracking-tight text-obsidian uppercase font-black">
              COUTURE BEAUTY GALLERY
            </h2>

            <p className="font-body text-xs sm:text-sm text-[#5C5046] leading-relaxed font-light">
              Explore our curated high-performance skincare, cosmetics, and beauty tools in an asymmetrical editorial bento grid.
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <Link
              to="/gallery"
              className="inline-flex items-center space-x-2 bg-obsidian hover:bg-[#B89275] text-white font-display text-xs font-bold tracking-widest uppercase px-6 py-3 rounded-full transition-all shadow-md"
            >
              <span>OPEN FULL MAGAZINE GALLERY</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* ASYMMETRICAL HIGH-FASHION BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          
          {/* BENTO ITEM 1: HERO FEATURE CARD (7 COLUMNS) */}
          <div className="md:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-[#E3D6C5] shadow-xs hover:shadow-2xl transition-all duration-500 flex flex-col justify-between group font-serif relative overflow-hidden min-h-[400px]">
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-black mb-6 border border-[#E3D6C5]">
              <img
                src="/calming_rosewater_toner_mockup.png"
                alt="Luminous Barrier Serum"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent pointer-events-none" />

              <div className="absolute top-4 left-4 bg-obsidian text-white font-display text-[9px] font-bold tracking-widest px-3 py-1 rounded-full uppercase border border-white/20">
                #01 BESTSELLER • CLINICAL SERUM
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                <span className="text-[9px] font-display text-[#B89275] font-bold uppercase tracking-widest block">
                  72-HOUR HYDRATION RESERVOIR
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold uppercase tracking-wide">
                  LUMINOUS BARRIER SERUM
                </h3>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-xs sm:text-sm text-[#5C5046] font-body leading-relaxed font-light">
                Engineered with micro-encapsulated hyaluronic spheres of varying molecular weights. Low molecular weight molecules reach deep dermal layers while high molecular weight spheres form a protective hydration shield.
              </p>

              <div className="pt-4 border-t border-[#E3D6C5] flex items-center justify-between">
                <Link
                  to="/products/luminous-barrier-serum"
                  className="font-display text-xs font-bold text-obsidian hover:text-[#B89275] uppercase tracking-wider flex items-center space-x-1.5"
                >
                  <span>VIEW FORMULATION DOSSIER</span>
                  <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="https://glamgalbeauty.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-display font-bold text-[#B89275] hover:text-obsidian uppercase"
                >
                  STORE ↗
                </a>
              </div>
            </div>
          </div>

          {/* BENTO ITEM 2: COUTURE ACCENT CARD (5 COLUMNS) */}
          <div className="md:col-span-5 bg-white text-obsidian rounded-3xl p-6 sm:p-8 border border-[#E3D6C5] shadow-xs hover:shadow-2xl hover:border-[#B89275] transition-all duration-500 flex flex-col justify-between group font-serif relative overflow-hidden min-h-[400px]">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-black mb-6 border border-[#E3D6C5]">
              <img
                src="/liquid_velvet_lipstick_mockup.png"
                alt="Velvet Matte Couture Lipstick"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />

              <div className="absolute top-4 left-4 bg-obsidian text-white font-display text-[9px] font-bold tracking-widest px-3 py-1 rounded-full uppercase">
                COUTURE LIP PIGMENT
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-1">
                <span className="text-[9px] font-display text-[#B89275] font-bold uppercase tracking-widest block">
                  16-HOUR VELVET FINISH
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-bold uppercase tracking-wide text-obsidian">
                  VELVET MATTE COUTURE LIPSTICK
                </h3>
              </div>

              <p className="text-xs text-[#5C5046] font-body leading-relaxed font-light">
                Non-drying 16-hour velvet pigment infused with hyaluronic spheres and wild rose wax for a soft-focus suede stain.
              </p>

              <div className="pt-4 border-t border-[#E3D6C5] flex items-center justify-between">
                <Link
                  to="/products/velvet-matte-lipstick"
                  className="font-display text-xs font-bold text-obsidian hover:text-[#B89275] uppercase tracking-wider flex items-center space-x-1.5"
                >
                  <span>VIEW SHADES & DOSSIER</span>
                  <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="https://glamgalbeauty.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-display font-bold text-[#B89275] hover:text-obsidian uppercase"
                >
                  STORE ↗
                </a>
              </div>
            </div>
          </div>

          {/* BENTO ITEM 3: BEAUTY TOOL CARD (4 COLUMNS) */}
          <div className="md:col-span-4 bg-white rounded-3xl p-6 border border-[#E3D6C5] shadow-xs hover:shadow-2xl transition-all duration-500 flex flex-col justify-between group font-serif">
            <div className="space-y-4">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#FAF5F0] border border-[#E3D6C5]">
                <img
                  src="/ultimate_brow_eye_cream_liner_mockup.png"
                  alt="Obsidian Precision Gua Sha"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-obsidian text-white font-display text-[8px] font-bold tracking-widest px-2.5 py-0.5 rounded-full uppercase">
                  VOLCANIC GEMSTONE
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-[9px] font-display text-[#A68064] font-bold uppercase tracking-widest block">
                  LYMPHATIC SCULPTING
                </span>
                <h3 className="font-serif text-base font-bold text-obsidian uppercase tracking-wide group-hover:text-[#B89275] transition-colors">
                  OBSIDIAN GUA SHA TOOL
                </h3>
                <p className="text-xs text-[#5C5046] font-body line-clamp-2 leading-relaxed">
                  Hand-cut volcanic obsidian stone for grounding thermal facial sculpting and lymphatic drainage.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E3D6C5] flex items-center justify-between text-xs font-display font-bold">
              <Link to="/products/obsidian-precision-contour-gua-sha" className="hover:text-[#B89275]">
                VIEW DOSSIER →
              </Link>
              <a href="https://glamgalbeauty.com/" target="_blank" rel="noopener noreferrer" className="text-[#B89275]">
                STORE ↗
              </a>
            </div>
          </div>

          {/* BENTO ITEM 4: SKINCARE PREP CARD (4 COLUMNS) */}
          <div className="md:col-span-4 bg-white rounded-3xl p-6 border border-[#E3D6C5] shadow-xs hover:shadow-2xl transition-all duration-500 flex flex-col justify-between group font-serif">
            <div className="space-y-4">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#FAF5F0] border border-[#E3D6C5]">
                <img
                  src="/calming_rosewater_toner_mockup.png"
                  alt="Calming Rosewater Hydrating Toner"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#B89275] text-white font-display text-[8px] font-bold tracking-widest px-2.5 py-0.5 rounded-full uppercase">
                  ALPINE BOTANICAL
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-[9px] font-display text-[#A68064] font-bold uppercase tracking-widest block">
                  pH BALANCING PREP
                </span>
                <h3 className="font-serif text-base font-bold text-obsidian uppercase tracking-wide group-hover:text-[#B89275] transition-colors">
                  CALMING ROSEWATER TONER
                </h3>
                <p className="text-xs text-[#5C5046] font-body line-clamp-2 leading-relaxed">
                  Hydro-distilled damask rose petals blended with niacinamide B3 to harmonize skin barrier pH.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E3D6C5] flex items-center justify-between text-xs font-display font-bold">
              <Link to="/products/calming-rosewater-hydrating-toner" className="hover:text-[#B89275]">
                VIEW DOSSIER →
              </Link>
              <a href="https://glamgalbeauty.com/" target="_blank" rel="noopener noreferrer" className="text-[#B89275]">
                STORE ↗
              </a>
            </div>
          </div>

          {/* BENTO ITEM 5: BODY CARE CARD (4 COLUMNS) */}
          <div className="md:col-span-4 bg-white rounded-3xl p-6 border border-[#E3D6C5] shadow-xs hover:shadow-2xl transition-all duration-500 flex flex-col justify-between group font-serif">
            <div className="space-y-4">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#FAF5F0] border border-[#E3D6C5]">
                <img
                  src="/polished_smoothing_body_scrub_mockup.png"
                  alt="Sculpting Glow Body Nectar"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-obsidian text-white font-display text-[8px] font-bold tracking-widest px-2.5 py-0.5 rounded-full uppercase">
                  GOLD SHIMMER NECTAR
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-[9px] font-display text-[#A68064] font-bold uppercase tracking-widest block">
                  VIRGIN COLD-PRESSED
                </span>
                <h3 className="font-serif text-base font-bold text-obsidian uppercase tracking-wide group-hover:text-[#B89275] transition-colors">
                  SCULPTING GLOW BODY NECTAR
                </h3>
                <p className="text-xs text-[#5C5046] font-body line-clamp-2 leading-relaxed">
                  Wild-harvested Marula Oil infused with light-reflecting micro-gold minerals for collarbone radiance.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E3D6C5] flex items-center justify-between text-xs font-display font-bold">
              <Link to="/products/sculpting-glow-body-nectar" className="hover:text-[#B89275]">
                VIEW DOSSIER →
              </Link>
              <a href="https://glamgalbeauty.com/" target="_blank" rel="noopener noreferrer" className="text-[#B89275]">
                STORE ↗
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
