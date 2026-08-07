import React from 'react';
import { Sparkles, ShieldCheck, Heart, Camera, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const EditorialMissionManifesto: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-[#1C1411] via-[#241A16] to-[#1C1411] text-warm-white py-20 px-6 border-b border-deep-charcoal relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-amber-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto space-y-12 relative z-10 text-center">
        {/* EDITORIAL HUB BADGE */}
        <div className="inline-flex items-center space-x-2 px-5 py-2 rounded-full bg-white/5 border border-amber-400/30 backdrop-blur-md">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span className="font-display text-xs font-bold tracking-widest text-amber-300 uppercase">
            WELCOME TO THE GLAMGAL EDITORIAL HUB • OUR TRANSPARENCY PROMISE
          </span>
        </div>

        {/* MAIN MISSION STATEMENT */}
        <div className="space-y-6">
          <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold uppercase tracking-wider text-white leading-tight">
            "WE DON'T WANT YOU TO JUST BUY A PRODUCT; WE WANT YOU TO UNDERSTAND EXACTLY WHAT YOU ARE PUTTING ON YOUR SKIN."
          </h2>

          <p className="font-body text-sm sm:text-base md:text-lg text-soft-stone leading-relaxed max-w-3xl mx-auto font-light">
            We designed this dedicated editorial hub to be your ultimate beauty resource. Here, you will find <strong className="text-amber-300 font-normal">Zero Hidden Ingredients</strong>. Every chemical and natural extract we use is fully broken down in our Glossary.
          </p>
        </div>

        {/* 3 EDITORIAL PILLARS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left pt-6">
          {/* Pillar 1: Zero Hidden Ingredients */}
          <div className="bg-[#17100D] p-6 rounded-2xl border border-white/10 space-y-3 hover:border-amber-400/40 transition-all group">
            <div className="flex items-center space-x-3 text-amber-300">
              <ShieldCheck className="w-5 h-5 shrink-0" />
              <h3 className="font-display text-sm font-bold uppercase tracking-wider">
                ZERO HIDDEN INGREDIENTS
              </h3>
            </div>
            <p className="text-xs text-soft-stone font-body leading-relaxed">
              Every chemical and natural extract we formulate is completely decoded with clinical proof in our Ingredient Glossary.
            </p>
            <Link
              to="/ingredients"
              className="inline-flex items-center space-x-1.5 text-xs font-display font-bold text-amber-400 group-hover:translate-x-1 transition-transform uppercase"
            >
              <span>EXPLORE GLOSSARY</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Pillar 2: Real Skin, Real Results */}
          <div className="bg-[#17100D] p-6 rounded-2xl border border-white/10 space-y-3 hover:border-amber-400/40 transition-all group">
            <div className="flex items-center space-x-3 text-pink-400">
              <Heart className="w-5 h-5 shrink-0 fill-pink-400/20" />
              <h3 className="font-display text-sm font-bold uppercase tracking-wider text-pink-300">
                REAL SKIN, REAL RESULTS
              </h3>
            </div>
            <p className="text-xs text-soft-stone font-body leading-relaxed">
              Our User-Generated Content Hub features our community, showing you exactly how our makeup and skincare perform on diverse, unedited skin tones.
            </p>
            <Link
              to="/virtual-vanity"
              className="inline-flex items-center space-x-1.5 text-xs font-display font-bold text-pink-300 group-hover:translate-x-1 transition-transform uppercase"
            >
              <span>VIEW UGC HUB</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Pillar 3: Behind-The-Scenes Access */}
          <div className="bg-[#17100D] p-6 rounded-2xl border border-white/10 space-y-3 hover:border-amber-400/40 transition-all group">
            <div className="flex items-center space-x-3 text-amber-400">
              <Camera className="w-5 h-5 shrink-0" />
              <h3 className="font-display text-sm font-bold uppercase tracking-wider">
                BEHIND-THE-SCENES ACCESS
              </h3>
            </div>
            <p className="text-xs text-soft-stone font-body leading-relaxed">
              Take a front-row seat to backstage studio sessions, campaign photoshoots, and the formulation lab craftsmanship that brings GLAMGAL to life.
            </p>
            <Link
              to="/behind-the-scenes"
              className="inline-flex items-center space-x-1.5 text-xs font-display font-bold text-amber-400 group-hover:translate-x-1 transition-transform uppercase"
            >
              <span>ENTER STUDIO</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
