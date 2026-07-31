import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getArticleByHandle, getProductByHandle } from '../lib/shopify';
import { JournalArticle, Product } from '../types/shopify';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SEO } from '../components/common/SEO';
import { LoadingState } from '../components/common/LoadingState';
import { ProductCard } from '../components/product/ProductCard';
import { NewsletterForm } from '../components/sections/NewsletterForm';
import { Clock, User, Calendar, Share2 } from 'lucide-react';

export const JournalArticlePage: React.FC = () => {
  const { handle } = useParams<{ handle: string }>();
  const [article, setArticle] = useState<JournalArticle | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadArticle() {
      if (!handle) return;
      setLoading(true);
      try {
        const data = await getArticleByHandle(handle);
        if (data) {
          setArticle(data);
          const prods: Product[] = [];
          for (const h of data.relatedProductHandles) {
            const p = await getProductByHandle(h);
            if (p) prods.push(p);
          }
          setRelatedProducts(prods);
        }
      } catch (err) {
        console.error('Article load error:', err);
      } finally {
        setLoading(false);
      }
    }
    loadArticle();
  }, [handle]);

  if (loading || !article) return <LoadingState message="LOADING EDITORIAL STORY..." />;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    image: article.coverImage,
    author: { '@type': 'Person', name: article.author },
    datePublished: article.publishedAt,
    description: article.summary,
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-8 space-y-12">
      <SEO title={article.title} description={article.summary} image={article.coverImage} jsonLd={jsonLd} />
      <Breadcrumbs items={[{ label: 'BEAUTY JOURNAL', href: '/journal' }, { label: article.title }]} />

      {/* Header Info */}
      <div className="space-y-4 text-center">
        <span className="font-display text-xs tracking-mega text-warm-taupe uppercase">{article.category}</span>
        <h1 className="font-display text-2xl sm:text-4xl tracking-widest text-obsidian uppercase font-bold leading-tight">
          {article.title}
        </h1>
        <div className="flex items-center justify-center space-x-6 text-xs text-warm-taupe border-y border-soft-stone py-3 font-display uppercase">
          <span className="flex items-center space-x-1.5"><User className="w-3.5 h-3.5 text-obsidian" /><span>{article.author}</span></span>
          <span className="flex items-center space-x-1.5"><Calendar className="w-3.5 h-3.5 text-obsidian" /><span>{article.publishedAt}</span></span>
          <span className="flex items-center space-x-1.5"><Clock className="w-3.5 h-3.5 text-obsidian" /><span>{article.readTime}</span></span>
        </div>
      </div>

      {/* Hero Cover Image */}
      <div className="aspect-[16/9] overflow-hidden rounded-sm border border-soft-stone bg-warm-white">
        <img src={article.coverImage} alt={article.title} className="w-full h-full object-cover" />
      </div>

      {/* Body Content */}
      <div
        className="prose prose-obsidian max-w-none text-deep-charcoal text-sm leading-relaxed space-y-4 font-body"
        dangerouslySetInnerHTML={{ __html: article.contentHtml }}
      />

      {/* Featured Products in Article */}
      {relatedProducts.length > 0 && (
        <div className="pt-12 border-t border-soft-stone space-y-6">
          <h3 className="font-display text-sm tracking-widest text-obsidian uppercase font-bold">
            FEATURED IN THIS ARTICLE
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
