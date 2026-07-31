import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getProducts } from '../lib/shopify';
import { Product } from '../types/shopify';
import { ProductGrid } from '../components/product/ProductGrid';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SEO } from '../components/common/SEO';
import { LoadingState } from '../components/common/LoadingState';

export const SearchPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const q = searchParams.get('q') || '';
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function performSearch() {
      setLoading(true);
      try {
        const results = await getProducts({ query: q });
        setProducts(results);
      } catch (err) {
        console.error('Search page query error:', err);
      } finally {
        setLoading(false);
      }
    }
    performSearch();
  }, [q]);

  if (loading) return <LoadingState message="SEARCHING CATALOG..." />;

  return (
    <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
      <SEO title={`Search Results for "${q}"`} />
      <Breadcrumbs items={[{ label: 'SEARCH RESULTS' }]} />

      <div className="border-b border-soft-stone pb-6">
        <span className="font-display text-xs tracking-mega text-warm-taupe uppercase">GLAMGAL SEARCH</span>
        <h1 className="font-display text-2xl md:text-3xl tracking-widest text-obsidian uppercase font-bold mt-1">
          SEARCH RESULTS FOR "{q.toUpperCase()}"
        </h1>
        <p className="text-xs text-warm-taupe mt-1 font-display uppercase">
          FOUND {products.length} {products.length === 1 ? 'RESULT' : 'RESULTS'}
        </p>
      </div>

      <ProductGrid products={products} columns={4} />
    </div>
  );
};
