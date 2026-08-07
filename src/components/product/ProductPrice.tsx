import React from 'react';
import { Money } from '../../types/shopify';

interface ProductPriceProps {
  price: Money;
  compareAtPrice?: Money | null;
  size?: 'sm' | 'md' | 'lg';
}

export const ProductPrice: React.FC<ProductPriceProps> = () => {
  return null;
};
