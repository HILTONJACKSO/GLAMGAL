import React from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SEO } from '../components/common/SEO';
import { CoutureProductGallerySection } from '../components/sections/CoutureProductGallerySection';

export const ProductGalleryPage: React.FC = () => {
  return (
    <div className="bg-[#FAF5F0] min-h-screen py-10 select-none font-serif">
      <SEO
        title="BEAUTY GALLERY • GLAMGAL EDITORIAL HUB"
        description="Explore the complete GLAMGAL couture beauty formulation gallery archive."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-6">
        <Breadcrumbs items={[{ label: 'GLAMGAL EDITORIAL HUB' }, { label: 'BEAUTY GALLERY' }]} />

        {/* OPEN PHYSICAL MAGAZINE GALLERY SPREAD */}
        <CoutureProductGallerySection />
      </div>
    </div>
  );
};
