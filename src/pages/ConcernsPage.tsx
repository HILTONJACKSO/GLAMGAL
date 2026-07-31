import React from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SEO } from '../components/common/SEO';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

export const ConcernsPage: React.FC = () => {
  const concerns = [
    {
      id: 'hydration',
      title: 'HYDRATION & BARRIER DEHYDRATION',
      description: 'Compromised moisture barriers lead to tight, dull, and reactive skin. Discover multi-molecular hyaluronic acid and tri-ceramide formulas designed to lock deep moisture.',
      productHandle: 'luminous-barrier-serum',
      recommendation: 'LUMINOUS BARRIER SERUM',
    },
    {
      id: 'glow',
      title: 'GLASS SKIN & RADIANCE',
      description: 'Target uneven reflection and surface fatigue with gentle botanical peptides and luminous dry oils for an instant glossy finish.',
      productHandle: 'sculpting-body-nectar',
      recommendation: 'SCULPTING GLOW BODY NECTAR',
    },
    {
      id: 'texture',
      title: 'SMOOTH APPEARANCE & PORES',
      description: 'Refine skin texture without abrasive physical scrubs. Micronized silk dust blurs pores while bio-fermented lipids restore elasticity.',
      productHandle: 'micro-skin-perfecting-veil',
      recommendation: 'MICRO-SKIN PERFECTING VEIL',
    },
    {
      id: 'repair',
      title: 'OVERNIGHT RECOVERY',
      description: 'Bakuchiol and ceramide NP repair daily environmental stressors while you sleep, promoting firmer, plumper skin upon waking.',
      productHandle: 'cellular-overnight-cream',
      recommendation: 'CELLULAR OVERNIGHT REPAIR CREAM',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-8 space-y-12">
      <SEO title="Shop By Beauty Concerns & Goals" description="Targeted skincare and beauty solutions for hydration, barrier repair, and radiant skin." />
      <Breadcrumbs items={[{ label: 'SKIN CONCERNS' }]} />

      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="font-display text-xs tracking-mega text-warm-taupe uppercase">TARGETED SOLUTIONS</span>
        <h1 className="font-display text-3xl sm:text-4xl tracking-widest text-obsidian uppercase font-bold">
          SHOP BY BEAUTY CONCERN
        </h1>
        <p className="text-xs text-deep-charcoal font-body leading-relaxed">
          Formulated to restore, protect, and illuminate without making unverified medical claims or conditions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {concerns.map((c) => (
          <div key={c.id} id={c.id} className="bg-white border border-soft-stone p-8 rounded-sm space-y-4">
            <div className="flex items-center space-x-2 text-[10px] font-display text-warm-taupe uppercase">
              <Sparkles className="w-3.5 h-3.5 text-obsidian" />
              <span>SKIN CONCERN</span>
            </div>
            <h3 className="font-display text-lg tracking-wider text-obsidian uppercase font-bold">{c.title}</h3>
            <p className="text-xs text-deep-charcoal leading-relaxed font-body">{c.description}</p>
            <div className="pt-4 border-t border-soft-stone/40">
              <span className="text-[10px] font-display text-warm-taupe uppercase block mb-1">RECOMMENDED FORMULA:</span>
              <Link
                to={`/products/${c.productHandle}`}
                className="inline-flex items-center space-x-2 font-display text-xs tracking-widest text-obsidian uppercase font-bold hover:underline"
              >
                <span>{c.recommendation}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
