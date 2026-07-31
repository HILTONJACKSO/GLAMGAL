import React, { useEffect, useState } from 'react';
import { getIngredients } from '../lib/shopify';
import { BeautyIngredient } from '../types/shopify';
import { IngredientCard } from '../components/sections/IngredientCard';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SEO } from '../components/common/SEO';
import { LoadingState } from '../components/common/LoadingState';

export const IngredientsPage: React.FC = () => {
  const [ingredients, setIngredients] = useState<BeautyIngredient[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const data = await getIngredients();
        setIngredients(data);
      } catch (err) {
        console.error('Ingredients load error:', err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  if (loading) return <LoadingState message="LOADING INGREDIENT DICTIONARY..." />;

  return (
    <div className="max-w-7xl mx-auto px-6 py-8 space-y-10">
      <SEO title="Active Ingredient Glossary" description="Explore the science behind GLAMGAL's peptides, ceramides, and hyaluronic acid." />
      <Breadcrumbs items={[{ label: 'INGREDIENTS' }]} />

      <div className="text-center max-w-xl mx-auto space-y-2">
        <span className="font-display text-xs tracking-mega text-warm-taupe uppercase">FORMULATION SCIENCE</span>
        <h1 className="font-display text-3xl sm:text-4xl tracking-widest text-obsidian uppercase font-bold">
          INGREDIENT GLOSSARY
        </h1>
        <p className="text-xs text-deep-charcoal font-body">
          Plain-language explanations of our key active botanical and clinical compounds.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {ingredients.map((ing) => (
          <IngredientCard key={ing.id} ingredient={ing} />
        ))}
      </div>
    </div>
  );
};
