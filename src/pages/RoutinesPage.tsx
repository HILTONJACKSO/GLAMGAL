import React, { useEffect, useState } from 'react';
import { getRoutines } from '../lib/shopify';
import { BeautyRoutine } from '../types/shopify';
import { RoutineCard } from '../components/sections/RoutineCard';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SEO } from '../components/common/SEO';
import { LoadingState } from '../components/common/LoadingState';

export const RoutinesPage: React.FC = () => {
  const [routines, setRoutines] = useState<BeautyRoutine[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const data = await getRoutines();
        setRoutines(data);
      } catch (err) {
        console.error('Routines page load error:', err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  if (loading) return <LoadingState message="LOADING BEAUTY RITUALS..." />;

  return (
    <div className="max-w-7xl mx-auto px-6 py-8 space-y-10">
      <SEO title="Curated Beauty Routines" description="Step-by-step beauty rituals for morning radiance and evening barrier repair." />
      <Breadcrumbs items={[{ label: 'BEAUTY ROUTINES' }]} />

      <div className="text-center max-w-xl mx-auto space-y-2">
        <span className="font-display text-xs tracking-mega text-warm-taupe uppercase">SYNERGISTIC BEAUTY</span>
        <h1 className="font-display text-3xl sm:text-4xl tracking-widest text-obsidian uppercase font-bold">
          CURATED BEAUTY ROUTINES
        </h1>
        <p className="text-xs text-deep-charcoal font-body">
          Engineered step-by-step rituals to maximize active formulation synergy.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {routines.map((r) => (
          <RoutineCard key={r.id} routine={r} />
        ))}
      </div>
    </div>
  );
};
