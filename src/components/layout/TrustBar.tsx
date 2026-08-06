import React from 'react';
import { ShieldCheck, Truck, Sparkles, RefreshCw } from 'lucide-react';

export const TrustBar: React.FC = () => {
  const trustPoints = [
    {
      icon: Truck,
      title: 'COMPLIMENTARY SHIPPING',
      description: 'On all orders over $75 within North America',
    },
    {
      icon: ShieldCheck,
      title: 'SHOPIFY SECURE CHECKOUT',
      description: '256-bit encrypted secure payment processing',
    },
    {
      icon: Sparkles,
      title: 'SKINCARE FORMULATION',
      description: 'Clean, cruelty-free & dermatologist validated',
    },
    {
      icon: RefreshCw,
      title: 'HASSLE-FREE RETURNS',
      description: '30-day return policy on unopened items',
    },
  ];

  return (
    <section className="bg-white border-y border-soft-stone py-10" aria-label="Brand Commitments">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {trustPoints.map((point) => {
          const Icon = point.icon;
          return (
            <div key={point.title} className="flex flex-col items-center p-4">
              <Icon className="w-6 h-6 text-obsidian mb-3 stroke-[1.5]" />
              <h4 className="font-display text-xs tracking-widest text-obsidian uppercase mb-1">
                {point.title}
              </h4>
              <p className="text-xs text-warm-taupe">{point.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
