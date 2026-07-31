import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../types/shopify';
import { getProducts } from '../../lib/shopify';
import { Search, X, ArrowRight, Sparkles } from 'lucide-react';

interface PredictiveSearchProps {
  onClose: () => void;
}

export const PredictiveSearch: React.FC<PredictiveSearchProps> = ({ onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Product[]>([]);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const POPULAR_SEARCHES = ['Luminous Serum', 'Velvet Lipstick', 'Obsidian Gua Sha', 'Ceramides', 'Night Cream'];

  useEffect(() => {
    const saved = localStorage.getItem('glamgal_recent_searches');
    if (saved) setRecentSearches(JSON.parse(saved));
  }, []);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const timer = setTimeout(async () => {
      setLoading(true);
      try {
        const data = await getProducts({ query, first: 6 });
        setResults(data);
      } catch (err) {
        console.error('Search fetch error:', err);
      } finally {
        setLoading(false);
      }
    }, 250);

    return () => clearTimeout(timer);
  }, [query]);

  const handleSelectQuery = (term: string) => {
    setQuery(term);
    saveRecentSearch(term);
  };

  const saveRecentSearch = (term: string) => {
    const updated = Array.from(new Set([term, ...recentSearches])).slice(0, 5);
    setRecentSearches(updated);
    localStorage.setItem('glamgal_recent_searches', JSON.stringify(updated));
  };

  return (
    <div className="flex flex-col h-full bg-warm-white text-obsidian p-6 sm:p-10 max-w-4xl mx-auto w-full">
      {/* Search Input Bar */}
      <div className="relative flex items-center border-b-2 border-obsidian pb-3">
        <Search className="w-6 h-6 text-obsidian mr-3" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="SEARCH SKINCARE, MAKEUP, ROUTINES..."
          className="w-full bg-transparent font-display text-lg sm:text-2xl tracking-wider text-obsidian placeholder:text-warm-taupe uppercase outline-none"
          autoFocus
          aria-label="Predictive Product Search"
        />
        {query && (
          <button onClick={() => setQuery('')} className="p-1 text-warm-taupe hover:text-obsidian">
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-y-auto py-8">
        {loading ? (
          <div className="text-center py-12">
            <div className="w-8 h-8 border-2 border-soft-stone border-t-obsidian rounded-full animate-spin mx-auto mb-3" />
            <span className="font-display text-xs tracking-widest uppercase">SEARCHING GLAMGAL CATALOG...</span>
          </div>
        ) : query.trim() ? (
          results.length > 0 ? (
            <div className="space-y-6">
              <h4 className="font-display text-xs tracking-widest text-warm-taupe uppercase border-b border-soft-stone pb-2">
                PRODUCT MATCHES ({results.length})
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {results.map((product) => (
                  <Link
                    key={product.id}
                    to={`/products/${product.handle}`}
                    onClick={() => {
                      saveRecentSearch(query);
                      onClose();
                    }}
                    className="flex items-center space-x-3 p-3 bg-white border border-soft-stone hover:border-obsidian transition-colors"
                  >
                    <img
                      src={product.featuredImage?.url}
                      alt={product.title}
                      className="w-14 h-16 object-cover bg-warm-white flex-shrink-0"
                    />
                    <div>
                      <span className="text-[9px] font-display text-warm-taupe uppercase block">
                        {product.category}
                      </span>
                      <h5 className="font-display text-xs tracking-wider text-obsidian uppercase font-semibold line-clamp-1">
                        {product.title}
                      </h5>
                      <span className="font-display text-xs text-obsidian font-bold mt-1 block">
                        ${parseFloat(product.priceRange.minVariantPrice.amount).toFixed(2)}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-12 space-y-3">
              <h4 className="font-display text-sm tracking-widest text-obsidian uppercase">
                NO MATCHES FOUND FOR "{query.toUpperCase()}"
              </h4>
              <p className="text-xs text-warm-taupe">Try searching for keywords like "Serum", "Lipstick", or "Gua Sha".</p>
            </div>
          )
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Popular Searches */}
            <div className="space-y-3">
              <h4 className="font-display text-xs tracking-widest text-obsidian uppercase flex items-center space-x-2">
                <Sparkles className="w-3.5 h-3.5 text-obsidian" />
                <span>POPULAR SEARCHES</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {POPULAR_SEARCHES.map((term) => (
                  <button
                    key={term}
                    onClick={() => handleSelectQuery(term)}
                    className="px-3 py-1.5 bg-white border border-soft-stone text-xs font-display tracking-wider text-obsidian uppercase hover:border-obsidian transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>

            {/* Recent Searches */}
            {recentSearches.length > 0 && (
              <div className="space-y-3">
                <h4 className="font-display text-xs tracking-widest text-obsidian uppercase">RECENT SEARCHES</h4>
                <ul className="space-y-2 text-xs text-deep-charcoal font-medium">
                  {recentSearches.map((term) => (
                    <li key={term}>
                      <button
                        onClick={() => handleSelectQuery(term)}
                        className="hover:text-obsidian underline transition-colors"
                      >
                        {term}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
