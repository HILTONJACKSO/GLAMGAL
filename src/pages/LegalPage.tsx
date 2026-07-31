import React from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SEO } from '../components/common/SEO';

interface LegalPageProps {
  title: string;
  category: string;
  contentHtml: string;
}

export const LegalPage: React.FC<LegalPageProps> = ({ title, category, contentHtml }) => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-8 space-y-8">
      <SEO title={title} />
      <Breadcrumbs items={[{ label: category.toUpperCase(), href: '#' }, { label: title }]} />

      <div className="border-b border-soft-stone pb-6 space-y-2">
        <span className="font-display text-xs tracking-mega text-warm-taupe uppercase">LEGAL & TRUST</span>
        <h1 className="font-display text-2xl sm:text-4xl tracking-widest text-obsidian uppercase font-bold">
          {title}
        </h1>
        <p className="text-xs text-warm-taupe font-display uppercase">LAST UPDATED: JULY 2026</p>
      </div>

      <div
        className="prose prose-obsidian max-w-none text-deep-charcoal text-xs sm:text-sm leading-relaxed space-y-4 font-body bg-white p-8 border border-soft-stone rounded-sm"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    </div>
  );
};
