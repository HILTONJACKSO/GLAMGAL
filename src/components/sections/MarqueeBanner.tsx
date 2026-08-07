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
    'DESIGNED TO MAKE EVERY SKIN TYPE SHINE',
    'TAG @GLAMGALBEAUTY_ TO BE FEATURED ON OUR PAGE!',
    'CRUELTY-FREE & VEGAN',
    '72-HOUR HYDRATION SCIENCE',
  ];

  // Clean any legacy text from CMS state and remove unwanted items
  const rawText = (marqueeSec?.title || '')
    .replace(/SKIN-FIRST CARE/gi, 'SKINCARE')
    .replace(/SKIN-FIRST/gi, 'SKINCARE')
    .replace(/OBSIDIAN SCULPTING/gi, '')
    .replace(/OBSIDIAN FACIAL SCULPTING/gi, '')
    .replace(/COUTURE VELVET MAKEUP/gi, '');

  const items = [
    'GLAMGAL BEAUTY',
    'SKINCARE',
    'DESIGNED TO MAKE EVERY SKIN TYPE SHINE',
    'TAG @GLAMGALBEAUTY_ TO BE FEATURED ON OUR PAGE!',
    'CRUELTY-FREE & VEGAN',
    '72-HOUR HYDRATION SCIENCE',
  ];

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
