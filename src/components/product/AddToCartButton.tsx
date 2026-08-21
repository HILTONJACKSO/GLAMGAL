import React from 'react';
import { ProductVariant } from '../../types/shopify';
import { ShoppingBag, ArrowRight } from 'lucide-react';

interface AddToCartButtonProps {
  variant: ProductVariant;
  productTitle: string;
  quantity?: number;
  fullWidth?: boolean;
}

export const AddToCartButton: React.FC<AddToCartButtonProps> = ({
  fullWidth = true,
}) => {
  return (
    <a
      href="https://glamgalbeauty.com/"
      target="_blank"
      rel="noopener noreferrer"
      className={`font-display text-xs tracking-[0.25em] py-4 px-8 uppercase transition-all duration-300 flex items-center justify-center space-x-3 select-none rounded-full bg-obsidian text-warm-white hover:bg-[#B89275] hover:shadow-xl border border-obsidian ${
        fullWidth ? 'w-full' : ''
      }`}
    >
      <ShoppingBag className="w-4 h-4" />
      <span>VISIT OFFICIAL STORE ↗</span>
    </a>
  );
};
