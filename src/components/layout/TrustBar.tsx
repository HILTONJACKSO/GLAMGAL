import React from 'react';
import { ShieldCheck, Truck, Globe } from 'lucide-react';

export const TrustBar: React.FC = () => {
  const trustPoints = [
    {
      icon: Truck,
      title: 'COMPLIMENTARY SHIPPING',
      description: 'On all orders over $75 within North America',
    },
    {
      icon: ShieldCheck,
      title: 'ZERO HIDDEN INGREDIENTS',
      description: '100% Transparent active component breakdowns',
    },
    {
      icon: Globe,
      title: 'WORLDWIDE SHIPPING AVAILABLE',
      description: 'From our shop to your doorstep—worldwide shipping available!',
    },
  ];

  return (
    <section className="bg-white border-y border-soft-stone py-12 select-none" aria-label="Brand Commitments">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {trustPoints.map((point) => {
          const Icon = point.icon;
          return (
            <div key={point.title} className="flex flex-col items-center p-4">
              <Icon className="w-6 h-6 text-obsidian mb-3 stroke-[1.5]" />
              <h4 className="font-display text-xs tracking-widest text-obsidian uppercase font-bold mb-1.5">
                {point.title}
              </h4>
              <p className="text-xs text-warm-taupe font-body max-w-xs">{point.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
