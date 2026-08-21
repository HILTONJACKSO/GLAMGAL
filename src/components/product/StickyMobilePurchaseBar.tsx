import React from 'react';
import { ProductVariant } from '../../types/shopify';
import { ExternalLink } from 'lucide-react';

interface StickyMobilePurchaseBarProps {
  productTitle: string;
  variant: ProductVariant;
}

export const StickyMobilePurchaseBar: React.FC<StickyMobilePurchaseBarProps> = ({
  productTitle,
}) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-warm-white/95 backdrop-blur-md border-t border-soft-stone p-4 md:hidden shadow-2xl flex items-center justify-between space-x-4">
      <div className="flex flex-col min-w-0 flex-1">
        <span className="font-display text-[10px] tracking-wider uppercase text-warm-taupe truncate">
          FORMULATION SPECIFICATION
        </span>
        <span className="font-display text-xs font-bold text-obsidian uppercase truncate">
          {productTitle}
        </span>
      </div>

      <a
        href="https://glamgalbeauty.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-obsidian text-warm-white font-display text-xs font-bold tracking-widest py-3 px-5 uppercase rounded-full flex items-center space-x-1.5 shadow-md shrink-0"
      >
        <span>STORE ↗</span>
        <ExternalLink className="w-3.5 h-3.5" />
      </a>
    </div>
  );
};
