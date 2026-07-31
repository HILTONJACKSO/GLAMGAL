import React from 'react';
import { Sparkles } from 'lucide-react';

export const MarqueeBanner: React.FC = () => {
  const items = [
    'GLAMGAL BEAUTY',
    'SKIN-FIRST CARE',
    'COUTURE VELVET MAKEUP',
    'OBSIDIAN FACIAL SCULPTING',
    'CRUELTY-FREE & VEGAN',
    'DERMATOLOGIST TESTED',
    '72-HOUR HYDRATION SCIENCE',
    'COMPLIMENTARY SHIPPING OVER $75',
  ];

  return (
    <div className="bg-obsidian text-warm-white py-4 overflow-hidden select-none border-y border-deep-charcoal">
      <div className="flex whitespace-nowrap animate-[marquee_25s_linear_infinite] space-x-8">
        {[...items, ...items, ...items].map((text, i) => (
          <div key={i} className="inline-flex items-center space-x-6">
            <span className="font-display text-xs tracking-[0.25em] uppercase font-bold text-warm-white">
              {text}
            </span>
            <Sparkles className="w-3.5 h-3.5 text-[#B89275]" />
          </div>
        ))}
      </div>
    </div>
  );
};
