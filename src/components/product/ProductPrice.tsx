import React from 'react';
import { Money } from '../../types/shopify';

interface ProductPriceProps {
  price: Money;
  compareAtPrice?: Money | null;
  size?: 'sm' | 'md' | 'lg';
}

export const ProductPrice: React.FC<ProductPriceProps> = ({ price, compareAtPrice, size = 'md' }) => {
  const isSale = compareAtPrice && parseFloat(compareAtPrice.amount) > parseFloat(price.amount);

  const sizeClasses = {
    sm: 'text-xs',
    md: 'text-sm font-semibold',
    lg: 'text-xl font-bold tracking-tight',
  };

  const formattedPrice = `$${parseFloat(price.amount).toFixed(2)}`;
  const formattedCompare = compareAtPrice ? `$${parseFloat(compareAtPrice.amount).toFixed(2)}` : null;

  return (
    <div className={`flex items-baseline space-x-2 font-display text-obsidian ${sizeClasses[size]}`}>
      <span>{formattedPrice}</span>
      {isSale && formattedCompare && (
        <span className="text-warm-taupe line-through text-xs font-normal">
          {formattedCompare}
        </span>
      )}
    </div>
  );
};
