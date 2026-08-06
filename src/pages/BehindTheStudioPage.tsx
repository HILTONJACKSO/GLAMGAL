import React from 'react';
import { SEO } from '../components/common/SEO';
import { BehindTheStudioSection } from '../components/sections/BehindTheStudioSection';

export const BehindTheStudioPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#120D0B] text-warm-white">
      <SEO
        title="BEHIND THE STUDIO & BACKSTAGE — GLAMGAL"
        description="Explore backstage studio campaign photoshoots, lab formulation tests, and artist backstage notes."
      />
      <BehindTheStudioSection />
    </div>
  );
};
