import React from 'react';
import { Minus, Plus } from 'lucide-react';

interface QuantitySelectorProps {
  quantity: number;
  onChange: (newQuantity: number) => void;
  disabled?: boolean;
}

export const QuantitySelector: React.FC<QuantitySelectorProps> = ({ quantity, onChange, disabled }) => {
  return (
    <div className="inline-flex items-center border border-soft-stone bg-white select-none">
      <button
        type="button"
        onClick={() => onChange(Math.max(1, quantity - 1))}
        disabled={disabled || quantity <= 1}
        className="p-2.5 text-obsidian hover:bg-soft-stone/30 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        aria-label="Decrease Quantity"
      >
        <Minus className="w-3.5 h-3.5" />
      </button>
      <span className="w-10 text-center font-display text-xs font-semibold text-obsidian">
        {quantity}
      </span>
      <button
        type="button"
        onClick={() => onChange(quantity + 1)}
        disabled={disabled}
        className="p-2.5 text-obsidian hover:bg-soft-stone/30 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        aria-label="Increase Quantity"
      >
        <Plus className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};
