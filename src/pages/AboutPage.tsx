import React from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SEO } from '../components/common/SEO';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Sparkles, Heart } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="space-y-16 py-8">
      <SEO title="About GLAMGAL — Modern Luxury Beauty" description="Discover the GLAMGAL story, mission, and commitment to skin barrier health." />

      <div className="max-w-7xl mx-auto px-6">
        <Breadcrumbs items={[{ label: 'ABOUT GLAMGAL' }]} />
      </div>

      {/* Hero Banner */}
      <section className="bg-obsidian text-warm-white py-20 px-6 text-center border-y border-deep-charcoal">
        <div className="max-w-3xl mx-auto space-y-4">
          <span className="font-display text-xs tracking-mega text-warm-taupe uppercase">OUR ORIGIN & MISSION</span>
          <h1 className="font-display text-3xl sm:text-5xl tracking-widest text-warm-white uppercase font-black">
            BEAUTY, DEFINED YOUR WAY.
          </h1>
          <p className="font-body text-sm sm:text-base text-soft-stone leading-relaxed font-light">
            GLAMGAL was conceived as an antidote to compromise. We refuse to choose between dermatological barrier integrity and high-pigment couture payoff.
          </p>
        </div>
      </section>

      {/* Story Columns */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="aspect-[4/3] bg-warm-white border border-soft-stone overflow-hidden rounded-sm">
          <img
            src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=80"
            alt="GLAMGAL Atelier"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="space-y-6">
          <span className="font-display text-xs tracking-mega text-warm-taupe uppercase">THE FORMULATION CREED</span>
          <h2 className="font-display text-2xl tracking-widest text-obsidian uppercase font-bold">
            CLEAN SCIENCE. UNCOMPROMISING LUXURY.
          </h2>
          <p className="text-xs text-deep-charcoal leading-relaxed font-body">
            Every GLAMGAL formula is developed under rigorous clinical standards. We eliminate unnecessary fillers, harsh drying alcohols, and reactive fragrance agents, focusing instead on multi-molecular hyaluronic acid, bio-identical ceramides, and rare botanical peptides.
          </p>
          <div className="grid grid-cols-2 gap-4 pt-2">
            <div className="p-4 bg-white border border-soft-stone">
              <ShieldCheck className="w-5 h-5 text-obsidian mb-2" />
              <h4 className="font-display text-xs text-obsidian uppercase font-bold">DERMATOLOGIST TESTED</h4>
              <p className="text-[11px] text-warm-taupe">Safe for sensitive skin types</p>
            </div>
            <div className="p-4 bg-white border border-soft-stone">
              <Sparkles className="w-5 h-5 text-obsidian mb-2" />
              <h4 className="font-display text-xs text-obsidian uppercase font-bold">CRUELTY-FREE</h4>
              <p className="text-[11px] text-warm-taupe">100% Leaping Bunny certified</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
