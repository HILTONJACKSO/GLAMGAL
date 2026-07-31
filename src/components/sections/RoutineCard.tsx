import React from 'react';
import { Link } from 'react-router-dom';
import { BeautyRoutine } from '../../types/shopify';
import { useCart } from '../../context/CartContext';
import { Sparkles, ArrowRight, ShoppingBag } from 'lucide-react';

export const RoutineCard: React.FC<{ routine: BeautyRoutine }> = ({ routine }) => {
  const { addRoutineToCart, isLoading } = useCart();

  return (
    <div className="bg-white border border-soft-stone rounded-sm overflow-hidden flex flex-col justify-between group hover:border-obsidian transition-all">
      <div>
        <div className="relative aspect-[16/9] overflow-hidden bg-warm-white">
          <img
            src={routine.coverImage}
            alt={routine.title}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
          <div className="absolute top-3 left-3 bg-obsidian text-warm-white font-display text-[9px] tracking-widest px-2.5 py-1 uppercase">
            {routine.goal}
          </div>
        </div>

        <div className="p-6 space-y-3">
          <div className="flex items-center space-x-2 text-[10px] font-display text-warm-taupe uppercase">
            <Sparkles className="w-3 h-3 text-obsidian" />
            <span>{routine.durationMinutes} MIN RITUAL • {routine.steps.length} STEPS</span>
          </div>

          <h3 className="font-display text-base tracking-wider text-obsidian uppercase font-bold">
            {routine.title}
          </h3>

          <p className="text-xs text-deep-charcoal line-clamp-2 leading-relaxed">
            {routine.description}
          </p>

          <div className="space-y-1.5 pt-2">
            {routine.steps.map((step) => (
              <div key={step.stepNumber} className="text-[11px] text-warm-taupe flex items-center space-x-2">
                <span className="w-4 h-4 rounded-full bg-soft-stone text-obsidian flex items-center justify-center font-display text-[9px]">
                  {step.stepNumber}
                </span>
                <span className="truncate">{step.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="p-6 pt-0 space-y-2">
        <button
          onClick={() => addRoutineToCart(routine)}
          disabled={isLoading}
          className="w-full bg-obsidian text-warm-white font-display text-xs tracking-widest py-3 px-4 uppercase hover:bg-black transition-colors flex items-center justify-center space-x-2"
        >
          <ShoppingBag className="w-4 h-4" />
          <span>ADD ENTIRE ROUTINE TO BAG</span>
        </button>

        <Link
          to={`/routines/${routine.handle}`}
          className="block w-full text-center font-display text-[11px] tracking-widest text-obsidian uppercase py-2 hover:underline"
        >
          VIEW FULL RITUAL INSTRUCTIONS →
        </Link>
      </div>
    </div>
  );
};
