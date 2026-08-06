import React from 'react';
import { SEO } from '../components/common/SEO';
import { VirtualVanitySection } from '../components/sections/VirtualVanitySection';

export const VirtualVanityPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#17110E] text-warm-white">
      <SEO
        title="VIRTUAL VANITY COMMUNITY GALLERY — GLAMGAL"
        description="Browse live Instagram and TikTok community posts from real customers using GLAMGAL across all skin tones."
      />
      <VirtualVanitySection />
    </div>
  );
};
