import React from 'react';
import { ArrowUpDown } from 'lucide-react';

export type SortOption = 'featured' | 'newest' | 'price-asc' | 'price-desc' | 'best-selling' | 'title-asc';

interface SortMenuProps {
  currentSort: SortOption;
  onChangeSort: (sort: SortOption) => void;
}

export const SortMenu: React.FC<SortMenuProps> = ({ currentSort, onChangeSort }) => {
  const options: Array<{ label: string; value: SortOption }> = [
    { label: 'Featured', value: 'featured' },
    { label: 'Newest Arrivals', value: 'newest' },
    { label: 'Price: Low to High', value: 'price-asc' },
    { label: 'Price: High to Low', value: 'price-desc' },
    { label: 'Best Selling', value: 'best-selling' },
    { label: 'Alphabetical: A-Z', value: 'title-asc' },
  ];

  return (
    <div className="flex items-center space-x-2 text-xs">
      <ArrowUpDown className="w-3.5 h-3.5 text-warm-taupe" />
      <span className="font-display tracking-widest text-warm-taupe uppercase hidden sm:inline">SORT BY:</span>
      <select
        value={currentSort}
        onChange={(e) => onChangeSort(e.target.value as SortOption)}
        className="bg-white border border-soft-stone text-obsidian font-display text-xs tracking-wider uppercase py-2 px-3 outline-none focus:border-obsidian cursor-pointer"
        aria-label="Sort Collection Products"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};
