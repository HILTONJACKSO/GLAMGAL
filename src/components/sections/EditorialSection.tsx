import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const EditorialSection: React.FC = () => {
  return (
    <section className="bg-warm-white py-20 border-t border-soft-stone">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Asymmetrical Editorial Image */}
        <div className="lg:col-span-7 relative">
          <div className="aspect-[4/3] overflow-hidden rounded-sm border border-soft-stone shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1200&q=80"
              alt="GLAMGAL Editorial Campaign"
              className="w-full h-full object-cover object-center"
            />
          </div>
          {/* Float Badge */}
          <div className="absolute -bottom-6 -right-6 hidden sm:block bg-obsidian text-warm-white p-6 max-w-xs shadow-2xl border border-white/10">
            <span className="font-display text-[10px] tracking-widest text-warm-taupe uppercase">THE PHILOSOPHY</span>
            <p className="font-display text-xs tracking-wider uppercase font-bold mt-1">
              "HIGH-IMPACT COLOR MEETS BARRIER REPAIR SCIENCE."
            </p>
          </div>
        </div>

        {/* Editorial Text Content */}
        <div className="lg:col-span-5 space-y-6">
          <span className="font-display text-xs tracking-mega text-warm-taupe uppercase">CAMPAIGN HIGHLIGHT</span>
          <h2 className="font-display text-2xl sm:text-4xl tracking-widest text-obsidian uppercase font-black leading-tight">
            THE VELVET MATTE ERA
          </h2>
          <p className="font-body text-sm text-deep-charcoal leading-relaxed">
            Formulated to challenge standard matte lipsticks. Micro-encapsulated hyaluronic acid spheres keep your lips soft and plump while delivering weightless 12-hour pigment payoff.
          </p>
          <div className="pt-2">
            <Link
              to="/collections/makeup"
              className="inline-flex items-center space-x-3 bg-obsidian text-warm-white font-display text-xs tracking-widest py-3.5 px-8 uppercase hover:bg-black transition-colors"
            >
              <span>EXPLORE MAKEUP COLLECTION</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
