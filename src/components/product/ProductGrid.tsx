import React from 'react';
import { Product } from '../../types/shopify';
import { ProductCard } from './ProductCard';
import { EmptyState } from '../common/EmptyState';

interface ProductGridProps {
  products: Product[];
  columns?: 2 | 3 | 4;
}

export const ProductGrid: React.FC<ProductGridProps> = ({ products, columns = 4 }) => {
  if (products.length === 0) {
    return (
      <EmptyState
        title="NO PRODUCTS FOUND"
        description="We couldn't find products matching your exact filter criteria. Try resetting filters or exploring another collection."
      />
    );
  }

  const gridColClasses = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <div className={`grid ${gridColClasses[columns]} gap-6`}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
