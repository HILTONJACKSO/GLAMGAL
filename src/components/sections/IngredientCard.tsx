import React from 'react';
import { Link } from 'react-router-dom';
import { BeautyIngredient } from '../../types/shopify';
import { CheckCircle2 } from 'lucide-react';

export const IngredientCard: React.FC<{ ingredient: BeautyIngredient }> = ({ ingredient }) => {
  return (
    <div className="bg-white border border-soft-stone p-6 rounded-sm flex flex-col justify-between space-y-6 hover:shadow-lg transition-shadow">
      <div className="space-y-4">
        <div className="aspect-[16/9] overflow-hidden rounded-sm bg-warm-white">
          <img
            src={ingredient.image}
            alt={ingredient.name}
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
        </div>
        <h3 className="font-display text-sm tracking-widest text-obsidian uppercase font-bold">
          {ingredient.name}
        </h3>
        <p className="text-xs text-deep-charcoal leading-relaxed">
          {ingredient.shortDescription}
        </p>

        {/* Benefits list */}
        <div className="space-y-1.5 pt-2">
          {ingredient.benefits.map((benefit, i) => (
            <div key={i} className="flex items-center space-x-2 text-xs text-warm-taupe">
              <CheckCircle2 className="w-3.5 h-3.5 text-obsidian flex-shrink-0" />
              <span>{benefit}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-4 border-t border-soft-stone/50">
        <span className="text-[10px] font-display text-warm-taupe uppercase block mb-2">FOUND IN:</span>
        <div className="flex flex-wrap gap-2">
          {ingredient.featuredProductHandles.map((handle) => (
            <Link
              key={handle}
              to={`/products/${handle}`}
              className="text-[11px] font-display uppercase underline text-obsidian hover:text-warm-taupe"
            >
              {handle.replace(/-/g, ' ')}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
