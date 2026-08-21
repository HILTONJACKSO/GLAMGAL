import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ExternalLink, MoveRight, Layers, Eye } from 'lucide-react';
import { useCMS } from '../../context/CMSContext';
import { Product } from '../../types/shopify';

export const CoutureProductGallerySection: React.FC = () => {
  const { state } = useCMS();
  const products: Product[] = state.products || [];
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  const filteredProducts = products.filter((p) => {
    if (activeCategory === 'ALL') return true;
    if (activeCategory === 'BEAUTY TOOLS') {
      return (
        p.category.toUpperCase().includes('TOOL') ||
        p.category.toUpperCase().includes('GADGET')
      );
    }
    return p.category.toUpperCase().includes(activeCategory.toUpperCase());
  });

  return (
    <section className="bg-[#FAF5F0] py-24 border-t border-[#E3D6C5] relative overflow-hidden select-none font-serif">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-8">
        
        {/* PHYSICAL MAGAZINE OPEN SPREAD CONTAINER */}
        <div className="bg-white rounded-[32px] border-2 border-[#E3D6C5] shadow-2xl p-6 sm:p-10 lg:p-14 relative overflow-hidden">
          
          {/* CENTER BOOK BINDING SPINE LINE */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#E3D6C5] to-transparent z-20 pointer-events-none" />

          {/* MAGAZINE PAGE MARGIN RUNNING HEADER */}
          <div className="flex items-center justify-between pb-6 mb-8 border-b border-[#E3D6C5]/80 text-[10px] font-display font-bold tracking-widest text-[#A68064] uppercase">
            <span>VOL. 04 — COUTURE PRODUCT GALLERY</span>
            <span className="hidden sm:inline-block">GLAMGAL BEAUTY FORMULATION ARCHIVE</span>
            <span>PAGE 44 / 45</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* LEFT MAGAZINE PAGE (PAGE 44: GALLERY INTRO & PLATE) */}
            <div className="lg:col-span-5 space-y-6 lg:pr-6">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#FAF5F0] border border-[#B89275]/30">
                <Sparkles className="w-3.5 h-3.5 text-[#B89275]" />
                <span className="font-display text-[9px] font-bold tracking-widest text-[#A68064] uppercase">
                  COMPLETE FORMULATION GALLERY
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl font-black uppercase text-obsidian tracking-tight leading-none">
                BEAUTY GALLERY.
              </h2>

              {/* DROP-CAP EDITORIAL PARAGRAPH */}
              <p className="font-serif text-sm text-[#5C5046] leading-relaxed font-light first-letter:float-left first-letter:text-4xl first-letter:font-black first-letter:mr-2.5 first-letter:text-obsidian first-letter:leading-none">
                Explore the complete GLAMGAL beauty formulation archive. Each product is engineered with 100% clean botanical actives, bio-identical peptides, and unrefined cold-pressed oils for high-payoff couture aesthetics.
              </p>

              {/* CATEGORY TABS (PRINT INDEX STYLE) */}
              <div className="space-y-2 pt-2">
                <span className="text-[10px] font-display font-bold text-[#A68064] uppercase tracking-widest block">
                  GALLERY INDEX
                </span>

                <div className="flex flex-wrap gap-2">
                  {['ALL', 'SKINCARE', 'MAKEUP', 'BODY CARE', 'BEAUTY TOOLS'].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`text-[10px] font-display font-bold tracking-wider uppercase px-4 py-2 rounded-lg transition-all ${
                        activeCategory === cat
                          ? 'bg-obsidian text-white shadow-md'
                          : 'bg-[#FAF5F0] text-[#5C5046] hover:bg-[#E3D6C5] border border-[#E3D6C5]'
                      }`}
                    >
                      {cat} {cat === 'ALL' ? `(${products.length})` : ''}
                    </button>
                  ))}
                </div>
              </div>

              {/* EDITORIAL PHOTO PLATE */}
              <div className="pt-2">
                <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-[#E3D6C5] shadow-md group bg-black">
                  <img
                    src="/calming_rosewater_toner_mockup.png"
                    alt="GLAMGAL Formulation Gallery Plate"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[9px] font-display font-bold text-obsidian uppercase tracking-wider border border-[#E3D6C5]">
                    GALLERY ARCHIVE • FIG. 06
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white space-y-0.5">
                    <span className="text-[9px] font-display text-[#B89275] uppercase font-bold tracking-widest block">
                      PARIS & SWISS BIOTECHNOLOGY FORMULATIONS
                    </span>
                    <p className="text-[11px] font-serif text-white/90 line-clamp-1 italic">
                      "Clean bio-transparency, dermatological efficacy, and velvet pigments."
                    </p>
                  </div>
                </div>
              </div>

              {/* BOTTOM PAGE FOOTER MARQUEE */}
              <div className="pt-6 border-t border-[#E3D6C5]/60 flex items-center justify-between text-[9px] font-display text-[#A68064] uppercase tracking-widest">
                <span>100% CLEAN FORMULATION ARCHIVE</span>
                <a
                  href="https://glamgalbeauty.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-obsidian hover:text-[#B89275] font-bold flex items-center space-x-1"
                >
                  <span>OFFICIAL STORE ↗</span>
                </a>
              </div>
            </div>

            {/* RIGHT MAGAZINE PAGE (PAGE 45: PRODUCT CARDS GRID) */}
            <div className="lg:col-span-7 lg:pl-6 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {filteredProducts.map((p) => {
                  const primaryImg = p.featuredImage?.url || '/calming_rosewater_toner_mockup.png';
                  const shadeCount = p.options.find((o) => o.name.toLowerCase().includes('shade'))?.values.length || 0;

                  return (
                    <div
                      key={p.id}
                      className="bg-[#FAF7F2] rounded-2xl p-5 border border-[#E3D6C5] hover:border-[#B89275] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-4 group font-serif"
                    >
                      <div className="space-y-3">
                        {/* Image Thumbnail */}
                        <Link
                          to={`/products/${p.handle}`}
                          className="block relative aspect-[4/3] rounded-xl overflow-hidden bg-white border border-[#E3D6C5]"
                        >
                          <img
                            src={primaryImg}
                            alt={p.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute top-2.5 left-2.5 bg-obsidian text-white font-display text-[8px] font-bold tracking-widest px-2.5 py-0.5 rounded-full uppercase">
                            {p.category}
                          </div>
                          {shadeCount > 0 && (
                            <div className="absolute bottom-2.5 left-2.5 bg-white/90 text-obsidian font-display text-[8px] font-bold tracking-widest px-2 py-0.5 rounded-full uppercase border border-[#E3D6C5]">
                              {shadeCount} SHADES
                            </div>
                          )}
                        </Link>

                        <div className="space-y-1">
                          <span className="text-[9px] font-display text-[#A68064] uppercase font-bold block">
                            {p.vendor || 'GLAMGAL BEAUTY'}
                          </span>
                          <Link to={`/products/${p.handle}`}>
                            <h3 className="font-serif text-base font-bold text-obsidian uppercase tracking-wide group-hover:text-[#B89275] transition-colors leading-snug line-clamp-1">
                              {p.title}
                            </h3>
                          </Link>
                          {p.subtitle && (
                            <p className="text-[11px] font-serif text-warm-taupe italic line-clamp-2">
                              {p.subtitle}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="pt-3 border-t border-[#E3D6C5]/80 flex items-center justify-between text-[10px] font-display font-bold text-obsidian uppercase">
                        <Link
                          to={`/products/${p.handle}`}
                          className="hover:text-[#B89275] flex items-center space-x-1"
                        >
                          <span>VIEW DOSSIER</span>
                          <MoveRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <a
                          href="https://glamgalbeauty.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#B89275] hover:text-obsidian font-bold"
                        >
                          STORE ↗
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
