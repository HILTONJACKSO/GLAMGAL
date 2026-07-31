import React from 'react';
import { ProductVariant } from '../../types/shopify';
import { Check, Ban } from 'lucide-react';

interface ShadeSelectorProps {
  variants: ProductVariant[];
  selectedVariant: ProductVariant;
  onSelectVariant: (variant: ProductVariant) => void;
}

export const ShadeSelector: React.FC<ShadeSelectorProps> = ({
  variants,
  selectedVariant,
  onSelectVariant,
}) => {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <span className="font-display text-xs tracking-widest text-obsidian uppercase">
          SHADE: <span className="font-body text-deep-charcoal font-semibold">{selectedVariant.title}</span>
        </span>
        {!selectedVariant.availableForSale && (
          <span className="text-[10px] font-display text-red-600 uppercase font-semibold">OUT OF STOCK</span>
        )}
      </div>

      <div className="flex flex-wrap gap-2.5" role="radiogroup" aria-label="Product Shades">
        {variants.map((v) => {
          const isSelected = v.id === selectedVariant.id;
          const hex = v.shadeHex || '#090909';

          return (
            <button
              key={v.id}
              onClick={() => onSelectVariant(v)}
              className={`relative w-9 h-9 rounded-full flex items-center justify-center transition-all focus-visible:outline-none ${
                isSelected
                  ? 'ring-2 ring-obsidian ring-offset-2 ring-offset-warm-white scale-105'
                  : 'hover:scale-105 opacity-90'
              } ${!v.availableForSale ? 'opacity-40 cursor-not-allowed' : ''}`}
              style={{ backgroundColor: hex }}
              title={`${v.title} ${!v.availableForSale ? '(Sold Out)' : ''}`}
              role="radio"
              aria-checked={isSelected}
              aria-label={`Select shade ${v.title}`}
            >
              {isSelected && (
                <Check className={`w-4 h-4 ${isLightHex(hex) ? 'text-obsidian' : 'text-warm-white'}`} />
              )}
              {!v.availableForSale && (
                <Ban className="absolute w-5 h-5 text-red-500 stroke-[2.5]" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

function isLightHex(hex: string): boolean {
  const cleanHex = hex.replace('#', '');
  if (cleanHex.length !== 6) return true;
  const r = parseInt(cleanHex.substring(0, 2), 16);
  const g = parseInt(cleanHex.substring(2, 4), 16);
  const b = parseInt(cleanHex.substring(4, 6), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 150;
}
