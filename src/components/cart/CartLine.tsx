import React from 'react';
import { CartLine as CartLineType } from '../../types/shopify';
import { QuantitySelector } from '../product/QuantitySelector';
import { useCart } from '../../context/CartContext';
import { Trash2 } from 'lucide-react';

export const CartLine: React.FC<{ line: CartLineType }> = ({ line }) => {
  const { updateQuantity, removeItem, isLoading } = useCart();
  const { merchandise, quantity } = line;
  const product = merchandise.product;

  const itemPrice = `$${parseFloat(merchandise.price.amount).toFixed(2)}`;
  const lineTotal = `$${parseFloat(line.cost.totalAmount.amount).toFixed(2)}`;

  return (
    <div className="flex space-x-4 py-4 border-b border-soft-stone/50 text-obsidian">
      {/* Product Image */}
      <div className="w-20 h-24 flex-shrink-0 bg-warm-white border border-soft-stone overflow-hidden">
        <img
          src={merchandise.image?.url || product.featuredImage.url}
          alt={merchandise.image?.altText || product.title}
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Details */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start">
            <h4 className="font-display text-xs tracking-wider uppercase font-semibold text-obsidian line-clamp-1">
              {product.title}
            </h4>
            <span className="font-display text-xs font-bold text-obsidian ml-2">{lineTotal}</span>
          </div>

          <p className="text-xs text-warm-taupe mt-0.5">{merchandise.title}</p>
          <span className="text-[11px] text-deep-charcoal">{itemPrice} each</span>
        </div>

        {/* Quantity Controls & Remove Action */}
        <div className="flex items-center justify-between pt-2">
          <QuantitySelector
            quantity={quantity}
            onChange={(newQty) => updateQuantity(line.id, newQty)}
            disabled={isLoading}
          />

          <button
            onClick={() => removeItem(line.id)}
            disabled={isLoading}
            className="p-1 text-warm-taupe hover:text-red-600 transition-colors"
            title="Remove item"
            aria-label={`Remove ${product.title} from bag`}
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
