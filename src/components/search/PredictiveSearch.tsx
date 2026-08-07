import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MOCK_ARTICLES, MOCK_INGREDIENTS, MOCK_ROUTINES } from '../../lib/shopify/mock-adapter';
import { Search, X, ArrowRight, Sparkles, BookOpen, ShieldCheck, Layers } from 'lucide-react';

interface PredictiveSearchProps {
  onClose: () => void;
}

export const PredictiveSearch: React.FC<PredictiveSearchProps> = ({ onClose }) => {
  const [query, setQuery] = useState('');
  const [recentSearches, setRecentSearches] = useState<string[]>([]);

  const POPULAR_SEARCHES = [
    'BARRIER REPAIR',
    'GUA SHA SCULPTING',
    'PEPTIDES & HYALURONIC',
    'LIP LAYERING',
    'SEASONAL TRENDS',
    'ROSEWATER TONER',
  ];

  useEffect(() => {
    const saved = localStorage.getItem('glamgal_recent_searches');
    if (saved) setRecentSearches(JSON.parse(saved));
  }, []);

  const handleSelectQuery = (term: string) => {
    setQuery(term);
    saveRecentSearch(term);
  };

  const saveRecentSearch = (term: string) => {
    const updated = Array.from(new Set([term, ...recentSearches])).slice(0, 5);
    setRecentSearches(updated);
    localStorage.setItem('glamgal_recent_searches', JSON.stringify(updated));
  };

  // Filter Editorial Content
  const q = query.toLowerCase().trim();
  const matchedArticles = q
    ? MOCK_ARTICLES.filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          (a.summary && a.summary.toLowerCase().includes(q)) ||
          a.category.toLowerCase().includes(q)
      )
    : [];

  const matchedIngredients = q
    ? MOCK_INGREDIENTS.filter(
        (i) =>
          i.name.toLowerCase().includes(q) ||
          (i.shortDescription && i.shortDescription.toLowerCase().includes(q))
      )
    : [];

  const matchedRoutines = q
    ? MOCK_ROUTINES.filter(
        (r) =>
          r.title.toLowerCase().includes(q) ||
          r.description.toLowerCase().includes(q) ||
          (r.goal && r.goal.toLowerCase().includes(q))
      )
    : [];

  const totalMatches = matchedArticles.length + matchedIngredients.length + matchedRoutines.length;

  return (
    <div className="flex flex-col h-full bg-warm-white text-obsidian p-6 sm:p-10 max-w-4xl mx-auto w-full select-none">
      {/* Search Input Bar */}
      <div className="relative flex items-center border-b-2 border-obsidian pb-3">
        <Search className="w-6 h-6 text-obsidian mr-3 shrink-0" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="SEARCH SKIN TIPS, BEAUTY ARTICLES, TUTORIALS & INGREDIENTS..."
          className="w-full bg-transparent font-display text-base sm:text-2xl tracking-wider text-obsidian placeholder:text-warm-taupe uppercase outline-none"
          autoFocus
          aria-label="Search Editorial Content"
        />
        {query && (
          <button onClick={() => setQuery('')} className="p-1 text-warm-taupe hover:text-obsidian">
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-y-auto py-8">
        {query.trim() ? (
          totalMatches > 0 ? (
            <div className="space-y-8">
              {/* Journal Stories & Skin Tips */}
              {matchedArticles.length > 0 && (
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 border-b border-soft-stone pb-2">
                    <BookOpen className="w-4 h-4 text-[#B89275]" />
                    <h4 className="font-display text-xs tracking-widest text-obsidian uppercase font-bold">
                      BEAUTY JOURNAL ARTICLES & SKIN TIPS ({matchedArticles.length})
                    </h4>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {matchedArticles.map((article) => (
                      <Link
                        key={article.id}
                        to={`/journal/${article.handle}`}
                        onClick={() => {
                          saveRecentSearch(query);
                          onClose();
                        }}
                        className="flex items-start space-x-4 p-4 bg-white border border-soft-stone hover:border-obsidian rounded-2xl transition-all shadow-2xs hover:shadow-md group"
                      >
                        <img
                          src={article.coverImage}
                          alt={article.title}
                          className="w-16 h-20 object-cover rounded-xl bg-warm-white flex-shrink-0"
                        />
                        <div className="space-y-1">
                          <span className="text-[9px] font-display text-[#B89275] uppercase font-bold block">
                            {article.category}
                          </span>
                          <h5 className="font-display text-xs tracking-wider text-obsidian uppercase font-bold line-clamp-2 group-hover:text-[#B89275] transition-colors">
                            {article.title}
                          </h5>
                          <span className="text-[10px] text-warm-taupe font-body block pt-1">
                            {article.readTime} • Read Story →
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Active Ingredient Breakdown */}
              {matchedIngredients.length > 0 && (
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 border-b border-soft-stone pb-2">
                    <ShieldCheck className="w-4 h-4 text-amber-500" />
                    <h4 className="font-display text-xs tracking-widest text-obsidian uppercase font-bold">
                      INGREDIENT GLOSSARY BREAKDOWNS ({matchedIngredients.length})
                    </h4>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {matchedIngredients.map((ing) => (
                      <Link
                        key={ing.id}
                        to="/ingredients"
                        onClick={() => {
                          saveRecentSearch(query);
                          onClose();
                        }}
                        className="p-4 bg-white border border-soft-stone hover:border-obsidian rounded-2xl transition-all shadow-2xs hover:shadow-md space-y-2 block group"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-display text-xs font-bold text-obsidian uppercase group-hover:text-[#B89275]">
                            {ing.name}
                          </span>
                        </div>
                        <p className="text-[11px] text-warm-taupe font-body line-clamp-2">
                          {ing.shortDescription}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Beauty Routines & Tutorials */}
              {matchedRoutines.length > 0 && (
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 border-b border-soft-stone pb-2">
                    <Layers className="w-4 h-4 text-pink-500" />
                    <h4 className="font-display text-xs tracking-widest text-obsidian uppercase font-bold">
                      BEAUTY ROUTINES & LAYERING GUIDE ({matchedRoutines.length})
                    </h4>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {matchedRoutines.map((routine) => (
                      <Link
                        key={routine.id}
                        to="/journal"
                        onClick={() => {
                          saveRecentSearch(query);
                          onClose();
                        }}
                        className="p-4 bg-white border border-soft-stone hover:border-obsidian rounded-2xl transition-all shadow-2xs hover:shadow-md space-y-2 block group"
                      >
                        <span className="font-display text-xs font-bold text-obsidian uppercase block group-hover:text-[#B89275]">
                          {routine.title}
                        </span>
                        <p className="text-[11px] text-warm-taupe font-body line-clamp-2">
                          {routine.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center py-12 space-y-3">
              <h4 className="font-display text-sm tracking-widest text-obsidian uppercase font-bold">
                NO EDITORIAL STORIES OR SKIN TIPS FOUND FOR "{query.toUpperCase()}"
              </h4>
              <p className="text-xs text-warm-taupe">
                Try searching for keywords like "Barrier Repair", "Gua Sha", "Peptides", or "Toner".
              </p>
            </div>
          )
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Popular Editorial Searches */}
            <div className="space-y-4">
              <h4 className="font-display text-xs tracking-widest text-obsidian uppercase flex items-center space-x-2 font-bold">
                <Sparkles className="w-4 h-4 text-[#B89275]" />
                <span>POPULAR BEAUTY SEARCHES</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {POPULAR_SEARCHES.map((term) => (
                  <button
                    key={term}
                    onClick={() => handleSelectQuery(term)}
                    className="px-4 py-2 bg-white border border-soft-stone text-xs font-display font-bold tracking-wider text-obsidian uppercase rounded-full hover:border-obsidian hover:bg-obsidian hover:text-white transition-all shadow-2xs"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>

            {/* Recent Searches */}
            {recentSearches.length > 0 && (
              <div className="space-y-4">
                <h4 className="font-display text-xs tracking-widest text-obsidian uppercase font-bold">RECENT SEARCHES</h4>
                <ul className="space-y-2 text-xs text-deep-charcoal font-medium">
                  {recentSearches.map((term) => (
                    <li key={term}>
                      <button
                        onClick={() => handleSelectQuery(term)}
                        className="hover:text-[#B89275] underline transition-colors flex items-center space-x-1"
                      >
                        <span>{term}</span>
                        <ArrowRight className="w-3 h-3 text-warm-taupe" />
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
