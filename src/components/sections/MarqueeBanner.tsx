import React from 'react';
import { Sparkles } from 'lucide-react';
import { useCMS } from '../../context/CMSContext';

export const MarqueeBanner: React.FC = () => {
  const { state } = useCMS();
  const marqueeSec = state.homepageSections.marquee;

  if (marqueeSec && !marqueeSec.enabled) return null;

  const defaultItems = [
    'GLAMGAL BEAUTY',
    'SKINCARE',
    'COUTURE VELVET MAKEUP',
    'OBSIDIAN FACIAL SCULPTING',
    'CRUELTY-FREE & VEGAN',
    'DERMATOLOGIST TESTED',
    '72-HOUR HYDRATION SCIENCE',
    'COMPLIMENTARY SHIPPING OVER $75',
  ];

  // If user edited title in CMS, split by bullet or use default items
  const rawText = marqueeSec?.title || '';
  const items = rawText.includes('•')
    ? rawText.split('•').map((s) => s.trim()).filter(Boolean)
    : defaultItems;

  const renderTrack = () => (
    <div className="flex items-center space-x-8 pr-8 flex-shrink-0">
      {items.map((text, i) => (
        <div key={i} className="inline-flex items-center space-x-6 flex-shrink-0">
          <span className="font-display text-xs tracking-[0.25em] uppercase font-bold text-warm-white hover:text-[#B89275] transition-colors cursor-default">
            {text}
          </span>
          <Sparkles className="w-3.5 h-3.5 text-[#B89275] flex-shrink-0" />
        </div>
      ))}
    </div>
  );

  return (
    <div className="bg-obsidian text-warm-white py-4 overflow-hidden select-none border-y border-deep-charcoal relative">
      <div className="animate-marquee flex whitespace-nowrap">
        {renderTrack()}
        {renderTrack()}
        {renderTrack()}
        {renderTrack()}
      </div>
    </div>
  );
};
