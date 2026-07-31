import React from 'react';
import { X, SlidersHorizontal } from 'lucide-react';

export interface FilterState {
  category?: string;
  inStockOnly?: boolean;
  skinType?: string;
  concern?: string;
  finish?: string;
  minPrice?: number;
  maxPrice?: number;
}

interface CollectionFiltersProps {
  filters: FilterState;
  onChangeFilters: (newFilters: FilterState) => void;
  onClearAll: () => void;
  isMobileDrawerOpen?: boolean;
  onCloseMobileDrawer?: () => void;
}

export const CollectionFilters: React.FC<CollectionFiltersProps> = ({
  filters,
  onChangeFilters,
  onClearAll,
  isMobileDrawerOpen,
  onCloseMobileDrawer,
}) => {
  const CATEGORIES = ['All', 'Skincare', 'Makeup', 'Body Care', 'Beauty Tools'];
  const SKIN_TYPES = ['All Skin Types', 'Sensitive', 'Dry', 'Dehydrated', 'Combination'];
  const CONCERNS = ['Dryness', 'Dullness', 'Uneven Texture', 'Barrier Damage', 'Sculpting'];
  const FINISHES = ['Dewy & Glassy', 'Velvet Soft Matte', 'Satin Shimmer Glow'];

  const hasActiveFilters = Boolean(
    filters.category ||
    filters.inStockOnly ||
    filters.skinType ||
    filters.concern ||
    filters.finish
  );

  const renderContent = () => (
    <div className="space-y-8 text-obsidian">
      {/* Active Filter Chips */}
      {hasActiveFilters && (
        <div className="space-y-2 pb-6 border-b border-soft-stone">
          <div className="flex items-center justify-between">
            <span className="font-display text-[10px] tracking-widest text-warm-taupe uppercase">ACTIVE FILTERS</span>
            <button
              onClick={onClearAll}
              className="text-[11px] font-display uppercase underline hover:text-obsidian text-warm-taupe"
            >
              CLEAR ALL
            </button>
          </div>
          <div className="flex flex-wrap gap-2 pt-1">
            {filters.category && (
              <span className="inline-flex items-center space-x-1 px-2.5 py-1 bg-soft-stone text-obsidian text-xs font-display uppercase">
                <span>Category: {filters.category}</span>
                <button onClick={() => onChangeFilters({ ...filters, category: undefined })}>
                  <X className="w-3 h-3 ml-1" />
                </button>
              </span>
            )}
            {filters.inStockOnly && (
              <span className="inline-flex items-center space-x-1 px-2.5 py-1 bg-soft-stone text-obsidian text-xs font-display uppercase">
                <span>In Stock Only</span>
                <button onClick={() => onChangeFilters({ ...filters, inStockOnly: false })}>
                  <X className="w-3 h-3 ml-1" />
                </button>
              </span>
            )}
            {filters.skinType && (
              <span className="inline-flex items-center space-x-1 px-2.5 py-1 bg-soft-stone text-obsidian text-xs font-display uppercase">
                <span>Skin: {filters.skinType}</span>
                <button onClick={() => onChangeFilters({ ...filters, skinType: undefined })}>
                  <X className="w-3 h-3 ml-1" />
                </button>
              </span>
            )}
            {filters.concern && (
              <span className="inline-flex items-center space-x-1 px-2.5 py-1 bg-soft-stone text-obsidian text-xs font-display uppercase">
                <span>Concern: {filters.concern}</span>
                <button onClick={() => onChangeFilters({ ...filters, concern: undefined })}>
                  <X className="w-3 h-3 ml-1" />
                </button>
              </span>
            )}
            {filters.finish && (
              <span className="inline-flex items-center space-x-1 px-2.5 py-1 bg-soft-stone text-obsidian text-xs font-display uppercase">
                <span>Finish: {filters.finish}</span>
                <button onClick={() => onChangeFilters({ ...filters, finish: undefined })}>
                  <X className="w-3 h-3 ml-1" />
                </button>
              </span>
            )}
          </div>
        </div>
      )}

      {/* Availability Toggle */}
      <div className="space-y-2 pb-6 border-b border-soft-stone">
        <label className="flex items-center space-x-3 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={filters.inStockOnly || false}
            onChange={(e) => onChangeFilters({ ...filters, inStockOnly: e.target.checked })}
            className="accent-obsidian w-4 h-4 rounded-sm"
          />
          <span className="font-display text-xs tracking-wider uppercase">IN STOCK PRODUCTS ONLY</span>
        </label>
      </div>

      {/* Category Filter */}
      <div className="space-y-3 pb-6 border-b border-soft-stone">
        <h4 className="font-display text-xs tracking-widest text-obsidian uppercase">PRODUCT CATEGORY</h4>
        <div className="space-y-2">
          {CATEGORIES.map((cat) => (
            <label key={cat} className="flex items-center space-x-2 text-xs text-deep-charcoal cursor-pointer hover:text-obsidian">
              <input
                type="radio"
                name="category"
                checked={(filters.category || 'All') === cat}
                onChange={() => onChangeFilters({ ...filters, category: cat === 'All' ? undefined : cat })}
                className="accent-obsidian"
              />
              <span>{cat}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Skin Type Filter */}
      <div className="space-y-3 pb-6 border-b border-soft-stone">
        <h4 className="font-display text-xs tracking-widest text-obsidian uppercase">SKIN TYPE</h4>
        <div className="space-y-2">
          {SKIN_TYPES.map((st) => (
            <label key={st} className="flex items-center space-x-2 text-xs text-deep-charcoal cursor-pointer hover:text-obsidian">
              <input
                type="checkbox"
                checked={filters.skinType === st}
                onChange={(e) => onChangeFilters({ ...filters, skinType: e.target.checked ? st : undefined })}
                className="accent-obsidian"
              />
              <span>{st}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Beauty Concerns */}
      <div className="space-y-3 pb-6 border-b border-soft-stone">
        <h4 className="font-display text-xs tracking-widest text-obsidian uppercase">BEAUTY CONCERN</h4>
        <div className="space-y-2">
          {CONCERNS.map((c) => (
            <label key={c} className="flex items-center space-x-2 text-xs text-deep-charcoal cursor-pointer hover:text-obsidian">
              <input
                type="checkbox"
                checked={filters.concern === c}
                onChange={(e) => onChangeFilters({ ...filters, concern: e.target.checked ? c : undefined })}
                className="accent-obsidian"
              />
              <span>{c}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Product Finish */}
      <div className="space-y-3">
        <h4 className="font-display text-xs tracking-widest text-obsidian uppercase">PRODUCT FINISH</h4>
        <div className="space-y-2">
          {FINISHES.map((f) => (
            <label key={f} className="flex items-center space-x-2 text-xs text-deep-charcoal cursor-pointer hover:text-obsidian">
              <input
                type="checkbox"
                checked={filters.finish === f}
                onChange={(e) => onChangeFilters({ ...filters, finish: e.target.checked ? f : undefined })}
                className="accent-obsidian"
              />
              <span>{f}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  // Desktop Sidebar
  return (
    <>
      <div className="hidden lg:block w-64 flex-shrink-0 pr-8 border-r border-soft-stone">
        <div className="flex items-center justify-between mb-6 pb-2 border-b border-obsidian">
          <span className="font-display text-xs tracking-widest uppercase font-bold flex items-center space-x-2">
            <SlidersHorizontal className="w-4 h-4 text-obsidian" />
            <span>FILTER PRODUCTS</span>
          </span>
        </div>
        {renderContent()}
      </div>

      {/* Mobile Filter Drawer */}
      {isMobileDrawerOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex" role="dialog">
          <div className="fixed inset-0 bg-obsidian/60 backdrop-blur-sm" onClick={onCloseMobileDrawer} />
          <div className="relative ml-auto w-full max-w-xs bg-warm-white h-full p-6 overflow-y-auto flex flex-col justify-between shadow-2xl">
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-soft-stone">
                <span className="font-display text-sm tracking-widest uppercase font-bold">FILTERS</span>
                <button onClick={onCloseMobileDrawer} className="p-2 -mr-2 text-obsidian">
                  <X className="w-5 h-5" />
                </button>
              </div>
              {renderContent()}
            </div>
            <button
              onClick={onCloseMobileDrawer}
              className="mt-8 w-full bg-obsidian text-warm-white font-display text-xs tracking-widest py-3.5 uppercase"
            >
              APPLY FILTERS
            </button>
          </div>
        </div>
      )}
    </>
  );
};
