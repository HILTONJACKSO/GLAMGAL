import React, { useEffect, useState } from 'react';
import { getArticles } from '../lib/shopify';
import { JournalArticle } from '../types/shopify';
import { JournalCard } from '../components/sections/JournalCard';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SEO } from '../components/common/SEO';
import { LoadingState } from '../components/common/LoadingState';

export const JournalPage: React.FC = () => {
  const [articles, setArticles] = useState<JournalArticle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadArticles() {
      try {
        const data = await getArticles();
        setArticles(data);
      } catch (err) {
        console.error('Journal articles error:', err);
      } finally {
        setLoading(false);
      }
    }
    loadArticles();
  }, []);

  if (loading) return <LoadingState message="LOADING EDITORIAL ARTICLES..." />;

  return (
    <div className="max-w-7xl mx-auto px-6 py-8 space-y-10">
      <SEO title="GLAMGAL Beauty Journal" description="Skincare tutorials, makeup guides, and behind the scenes formulation stories." />
      <Breadcrumbs items={[{ label: 'BEAUTY JOURNAL' }]} />

      <div className="text-center max-w-xl mx-auto space-y-2">
        <span className="font-display text-xs tracking-mega text-warm-taupe uppercase">EDITORIAL BEAUTY</span>
        <h1 className="font-display text-3xl sm:text-4xl tracking-widest text-obsidian uppercase font-bold">
          THE BEAUTY JOURNAL
        </h1>
        <p className="text-xs text-deep-charcoal font-body">
          Skincare education, velvet makeup tutorials, and behind-the-brand formulation insights.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {articles.map((art) => (
          <JournalCard key={art.id} article={art} />
        ))}
      </div>
    </div>
  );
};
