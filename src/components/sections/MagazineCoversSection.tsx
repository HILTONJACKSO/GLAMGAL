import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, MoveRight } from 'lucide-react';

export const MagazineCoversSection: React.FC = () => {
  const [activeCover, setActiveCover] = useState<number>(3);

  const magazineCovers = [
    {
      id: 1,
      issue: 'ISSUE N° 01',
      title: 'BARRIER REPAIR RITUALS',
      sub: '72-Hour Luminous Moisture Recovery',
      image: '/hero_model.png',
      badge: 'SPRING EDITION',
      link: '/journal',
    },
    {
      id: 2,
      issue: 'ISSUE N° 02',
      title: 'COUTURE VELVET LIPS',
      sub: 'High-Payoff Matte Pigments & Swatches',
      image: '/liquid_velvet_lipstick_mockup.png',
      badge: 'SUMMER EDIT',
      link: '/journal',
    },
    {
      id: 3,
      issue: 'ISSUE N° 03',
      title: 'THE OBSIDIAN ARCHETYPE',
      sub: 'Facial Contouring & Lymphatic Drainage',
      image: '/calming_rosewater_toner_mockup.png',
      badge: 'COVER STORY',
      link: '/journal',
    },
    {
      id: 4,
      issue: 'ISSUE N° 04',
      title: 'BOTANICAL INGREDIENT DOSSIER',
      sub: 'Triple Peptide & Centella Asiatica',
      image: '/ultimate_brow_eye_cream_liner_mockup.png',
      badge: 'AUTUMN SPECS',
      link: '/ingredients',
    },
    {
      id: 5,
      issue: 'ISSUE N° 05',
      title: 'STUDIO LAB BACKSTAGE',
      sub: 'Behind the Scenes in Paris Laboratory',
      image: '/polished_smoothing_body_scrub_mockup.png',
      badge: 'SPECIAL REPORT',
      link: '/behind-the-scenes',
    },
  ];

  return (
    <section className="relative bg-[#FAFAF8] py-28 overflow-hidden select-none border-t border-[#E3D6C5]">
      {/* Giant Background Watermark Text (Screenshot 5 Inspiration) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none z-0 overflow-hidden opacity-10">
        <span className="font-serif text-[18vw] font-black tracking-tighter text-obsidian uppercase whitespace-nowrap leading-none block">
          MAGAZINE
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 bg-obsidian text-warm-white px-4 py-1.5 rounded-full text-[10px] font-display font-bold tracking-mega uppercase shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#B89275]" />
            <span>PRINT & DIGITAL ARCHIVE</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-6xl tracking-tight text-obsidian uppercase font-black">
            EDITORIAL ISSUES
          </h2>

          <p className="font-body text-xs sm:text-sm text-[#5C5046] font-light leading-relaxed">
            Browse through our seasonal beauty dossiers, clinical formulation covers, and masterclass stories.
          </p>
        </div>

        {/* Overlapping 3D Covers Carousel Grid */}
        <div className="relative pt-6 pb-12 flex items-center justify-center overflow-x-auto scrollbar-none snap-x snap-mandatory">
          <div className="flex items-center space-x-4 sm:-space-x-8 md:-space-x-12 px-8 min-w-max">
            {magazineCovers.map((cover, idx) => {
              const isActive = activeCover === cover.id;

              return (
                <div
                  key={cover.id}
                  onClick={() => setActiveCover(cover.id)}
                  className={`relative transition-all duration-700 cursor-pointer snap-center group ${
                    isActive
                      ? 'z-30 scale-105 sm:scale-110 shadow-2xl -translate-y-4'
                      : 'z-10 scale-90 opacity-75 hover:opacity-100 hover:scale-95 hover:z-20'
                  }`}
                >
                  {/* Magazine Card Container */}
                  <div className="w-[260px] sm:w-[300px] md:w-[340px] aspect-[3/4] bg-black rounded-2xl overflow-hidden border-2 border-[#DECFC0] shadow-2xl relative flex flex-col justify-between p-6">
                    {/* Cover Background Image */}
                    <img
                      src={cover.image}
                      alt={cover.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/60 pointer-events-none" />

                    {/* Top Cover Header */}
                    <div className="relative z-10 flex items-center justify-between">
                      <span className="font-serif text-xl sm:text-2xl font-black tracking-widest text-white uppercase drop-shadow-md">
                        GLAMGAL
                      </span>

                      <span className="bg-white/20 backdrop-blur-md border border-white/30 text-white font-display text-[9px] font-bold tracking-widest px-3 py-1 rounded-full uppercase">
                        {cover.badge}
                      </span>
                    </div>

                    {/* Interactive Drag Cursor Badge for Active Card (Screenshot 5) */}
                    {isActive && (
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-16 h-16 rounded-full bg-white text-obsidian shadow-2xl flex items-center justify-center font-display text-[10px] font-bold uppercase tracking-wider animate-pulse border-2 border-obsidian pointer-events-none">
                        <span>DRAG</span>
                      </div>
                    )}

                    {/* Bottom Cover Title & Issue Info */}
                    <div className="relative z-10 space-y-2 text-white">
                      <span className="font-display text-[10px] tracking-mega font-bold text-[#B89275] uppercase block">
                        {cover.issue}
                      </span>

                      <h3 className="font-serif text-lg sm:text-xl font-bold uppercase leading-snug tracking-wide text-white drop-shadow-md">
                        {cover.title}
                      </h3>

                      <p className="font-body text-[11px] text-white/80 line-clamp-2 leading-relaxed">
                        {cover.sub}
                      </p>

                      <div className="pt-2">
                        <Link
                          to={cover.link}
                          className="inline-flex items-center space-x-2 bg-white text-obsidian font-display text-[10px] font-bold tracking-widest px-4 py-2 rounded-full uppercase hover:bg-[#B89275] hover:text-white transition-all shadow-md"
                        >
                          <span>READ ISSUE</span>
                          <MoveRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Gateway Link */}
        <div className="text-center pt-4">
          <Link
            to="/journal"
            className="inline-flex items-center space-x-2 font-display text-xs font-bold tracking-widest text-obsidian uppercase border-b-2 border-obsidian pb-1 hover:text-[#B89275] hover:border-[#B89275] transition-all"
          >
            <span>VIEW ALL PRINT & DIGITAL ISSUES</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
