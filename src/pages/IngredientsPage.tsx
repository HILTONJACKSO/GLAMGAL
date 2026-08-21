import React from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SEO } from '../components/common/SEO';
import { IngredientGlossarySection } from '../components/sections/IngredientGlossarySection';

export const IngredientsPage: React.FC = () => {
  return (
    <div className="bg-[#FAF5F0] min-h-screen py-10 select-none font-serif">
      <SEO
        title="INGREDIENT SCIENCE • GLAMGAL EDITORIAL HUB"
        description="Explore the science behind GLAMGAL's peptides, ceramides, and micro-hyaluronic acid."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-6">
        <Breadcrumbs items={[{ label: 'GLAMGAL EDITORIAL HUB' }, { label: 'INGREDIENT SCIENCE' }]} />

        {/* OPEN PHYSICAL MAGAZINE GLOSSARY SPREAD */}
        <IngredientGlossarySection />
      </div>
    </div>
  );
};
