import React from 'react';
import { Link } from 'react-router-dom';
import { HeroCampaignMetaobject } from '../../types/shopify';
import { useCMS } from '../../context/CMSContext';
import { PlayCircle, ArrowRight, ExternalLink, Sparkles } from 'lucide-react';

interface HeroCampaignProps {
  hero?: HeroCampaignMetaobject;
}

export const HeroCampaign: React.FC<HeroCampaignProps> = ({ hero: initialHero }) => {
  const { state } = useCMS();
  const hero = (state.hero && state.hero.featuredImageUrl) ? state.hero : (initialHero || state.hero || {});

  return (
    /* L'OFFICIEL STYLE FULL-BLEED DARK EDITORIAL COVER HERO (SCREENSHOT 1) */
    <section className="relative w-full bg-[#0A0A0A] text-white overflow-hidden min-h-[85vh] flex flex-col justify-between border-b border-white/10 select-none">
      {/* Background Hero Image with Vignette Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={hero.featuredImageUrl || '/hero_model.png'}
          alt="GLAMGAL Editorial Cover Model"
          className="w-full h-full object-cover object-center scale-105 filter brightness-90 contrast-110"
        />
        {/* Dark Editorial Radial Vignette Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/70 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/40 to-black/90 pointer-events-none" />
      </div>

      {/* 2. FLOATING MOSAIC FILMSTRIP THUMBNAIL CARDS (SCREENSHOT 1 INSPIRATION) */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 my-auto py-12 grid grid-cols-12 items-center gap-6">
        {/* Left Floating Mosaic Thumbnails */}
        <div className="hidden lg:flex lg:col-span-3 flex-col space-y-4">
          <div className="group w-36 aspect-[3/4] rounded-xl overflow-hidden border border-white/20 bg-black/60 backdrop-blur-md shadow-2xl transition-transform duration-500 hover:scale-105 hover:border-[#B89275]">
            <img
              src="/calming_rosewater_toner_mockup.png"
              alt="Filmstrip Thumbnail 1"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80"
            />
            <div className="absolute bottom-2 left-2 right-2 text-[9px] font-display font-bold uppercase tracking-wider text-white">
              01 • BARRIER
            </div>
          </div>

          <div className="group w-44 aspect-[3/4] rounded-xl overflow-hidden border border-white/20 bg-black/60 backdrop-blur-md shadow-2xl transition-transform duration-500 hover:scale-105 hover:border-[#B89275] translate-x-6">
            <img
              src="/liquid_velvet_lipstick_mockup.png"
              alt="Filmstrip Thumbnail 2"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80"
            />
            <div className="absolute bottom-2 left-2 right-2 text-[9px] font-display font-bold uppercase tracking-wider text-white">
              02 • VELVET LIP
            </div>
          </div>
        </div>

        {/* Center Main Cover Statement Typography (Lower Left Alignment) */}
        <div className="col-span-12 lg:col-span-6 space-y-6 text-center lg:text-left">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full text-[10px] font-display font-bold tracking-mega text-[#B89275] uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>COVER STORY SPECS</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold uppercase tracking-tight leading-[0.95] text-white drop-shadow-lg">
            SAINT LAURENT BEAUTY.
          </h1>

          <p className="font-body text-xs sm:text-sm md:text-base text-white/80 max-w-xl leading-relaxed font-light">
            Spring/Summer 2026: The Quintessential Female Archetype. Exploring active barrier repair, obsidian contouring, and weightless velvet pigments.
          </p>

          <div className="pt-2 flex flex-wrap justify-center lg:justify-start items-center gap-4">
            <a
              href="#video-showcase"
              className="inline-flex items-center space-x-2.5 bg-white text-obsidian hover:bg-[#B89275] hover:text-white font-display text-xs font-bold tracking-widest uppercase px-8 py-4 rounded-full transition-all shadow-2xl hover:scale-105"
            >
              <PlayCircle className="w-4 h-4" />
              <span>WATCH TUTORIAL 🎬</span>
            </a>

            <Link
              to="/journal"
              className="inline-flex items-center space-x-2 border border-white/40 hover:border-white text-white font-display text-xs font-bold tracking-widest uppercase px-8 py-4 rounded-full transition-all backdrop-blur-md hover:bg-white/10"
            >
              <span>READ MORE</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Right Floating Mosaic Thumbnails (Screenshot 1 Inspiration) */}
        <div className="hidden lg:flex lg:col-span-3 flex-col items-end space-y-4">
          <div className="group w-40 aspect-[3/4] rounded-xl overflow-hidden border border-white/20 bg-black/60 backdrop-blur-md shadow-2xl transition-transform duration-500 hover:scale-105 hover:border-[#B89275] -translate-x-4">
            <img
              src="/ultimate_brow_eye_cream_liner_mockup.png"
              alt="Filmstrip Thumbnail 3"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80"
            />
            <div className="absolute bottom-2 left-2 right-2 text-[9px] font-display font-bold uppercase tracking-wider text-white">
              03 • EYE SPEC
            </div>
          </div>

          <div className="group w-32 aspect-[3/4] rounded-xl overflow-hidden border border-white/20 bg-black/60 backdrop-blur-md shadow-2xl transition-transform duration-500 hover:scale-105 hover:border-[#B89275]">
            <img
              src="/polished_smoothing_body_scrub_mockup.png"
              alt="Filmstrip Thumbnail 4"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80"
            />
            <div className="absolute bottom-2 left-2 right-2 text-[9px] font-display font-bold uppercase tracking-wider text-white">
              04 • BODY GLOW
            </div>
          </div>
        </div>
      </div>

      {/* 3. BOTTOM COVER FOOTER MARQUEE INFO */}
      <div className="relative z-20 w-full bg-black/80 backdrop-blur-md border-t border-white/10 py-3 px-6 text-center">
        <p className="font-display text-[10px] sm:text-xs font-bold tracking-widest uppercase text-white/70">
          GLAMGAL DIGITAL EDITORIAL • ALL FORMULATIONS AVAILABLE EXCLUSIVELY AT GLAMGALBEAUTY.COM
        </p>
      </div>
    </section>
  );
};
