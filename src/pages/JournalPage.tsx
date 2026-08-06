import React, { useEffect, useState } from 'react';
import { getArticles } from '../lib/shopify';
import { JournalArticle } from '../types/shopify';
import { JournalCard } from '../components/sections/JournalCard';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SEO } from '../components/common/SEO';
import { LoadingState } from '../components/common/LoadingState';
import { EditorialMissionManifesto } from '../components/sections/EditorialMissionManifesto';
import { GlamgalJournalSection } from '../components/sections/GlamgalJournalSection';

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
    <div className="space-y-0 bg-[#FAF5F0]">
      <SEO title="GLAMGAL Editorial Hub — Journal & Tutorials" description="Skincare tutorials, makeup guides, zero hidden ingredients glossary, and behind the scenes stories." />

      {/* Top Breadcrumb Header */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <Breadcrumbs items={[{ label: 'GLAMGAL EDITORIAL HUB' }, { label: 'JOURNAL' }]} />
      </div>

      {/* Editorial Mission Manifesto */}
      <EditorialMissionManifesto />

      {/* Main Journal & Layering Section */}
      <GlamgalJournalSection />
    </div>
  );
};
