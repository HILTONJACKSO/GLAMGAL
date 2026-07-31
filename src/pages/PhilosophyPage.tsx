import React from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SEO } from '../components/common/SEO';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const PhilosophyPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-8 space-y-12">
      <SEO title="Our Formulation Philosophy" description="Learn about GLAMGAL's strict skin-first formulation standards and clean ingredients." />
      <Breadcrumbs items={[{ label: 'OUR PHILOSOPHY' }]} />

      <div className="text-center space-y-4">
        <span className="font-display text-xs tracking-mega text-warm-taupe uppercase">SKIN-FIRST STANDARDS</span>
        <h1 className="font-display text-3xl sm:text-4xl tracking-widest text-obsidian uppercase font-bold">
          OUR FORMULATION PHILOSOPHY
        </h1>
        <p className="text-xs text-deep-charcoal font-body leading-relaxed max-w-2xl mx-auto">
          We combine clinical skin barrier research with high-impact editorial pigments.
        </p>
      </div>

      <div className="space-y-8 bg-white p-8 border border-soft-stone rounded-sm">
        <div className="space-y-3">
          <h2 className="font-display text-base tracking-wider text-obsidian uppercase font-bold">1. BARRIER-FIRST INGREDIENT POLICY</h2>
          <p className="text-xs text-deep-charcoal leading-relaxed font-body">
            Every product we release—whether a hydrating serum or a velvet matte lipstick—contains barrier-supportive lipids, ceramides, or moisture retainers.
          </p>
        </div>

        <div className="space-y-3 pt-6 border-t border-soft-stone">
          <h2 className="font-display text-base tracking-wider text-obsidian uppercase font-bold">2. TRANSPARENT BOTANICAL ACTIVE CONCENTRATIONS</h2>
          <p className="text-xs text-deep-charcoal leading-relaxed font-body">
            We use clinically validated percentages of niacinamide, multi-molecular hyaluronic acid, and bakuchiol to deliver visible skin texture refinement without irritation.
          </p>
        </div>

        <div className="space-y-3 pt-6 border-t border-soft-stone">
          <h2 className="font-display text-base tracking-wider text-obsidian uppercase font-bold">3. NO MEDICAL PROMISES OR FALSE DIAGNOSES</h2>
          <p className="text-xs text-deep-charcoal leading-relaxed font-body">
            GLAMGAL storefront products provide cosmetic, skin-smoothing, and illuminating benefits. We encourage customers with clinical medical conditions to consult board-certified dermatologists.
          </p>
        </div>
      </div>
    </div>
  );
};
