import React from 'react';
import { ProductVariant } from '../../types/shopify';

interface VariantSelectorProps {
  optionName: string;
  variants: ProductVariant[];
  selectedVariant: ProductVariant;
  onSelectVariant: (variant: ProductVariant) => void;
}

export const VariantSelector: React.FC<VariantSelectorProps> = ({
  optionName,
  variants,
  selectedVariant,
  onSelectVariant,
}) => {
  return (
    <div className="space-y-2.5">
      <label className="block font-display text-xs tracking-widest text-obsidian uppercase">
        {optionName}: <span className="font-body text-deep-charcoal font-semibold">{selectedVariant.title}</span>
      </label>
      <div className="flex flex-wrap gap-2">
        {variants.map((v) => {
          const isSelected = v.id === selectedVariant.id;
          return (
            <button
              key={v.id}
              onClick={() => onSelectVariant(v)}
              className={`px-4 py-2 text-xs font-display tracking-wider uppercase border transition-all ${
                isSelected
                  ? 'border-obsidian bg-obsidian text-warm-white'
                  : 'border-soft-stone text-obsidian hover:border-obsidian bg-white'
              } ${!v.availableForSale ? 'opacity-40 line-through' : ''}`}
            >
              {v.title}
            </button>
          );
        })}
      </div>
    </div>
  );
};
