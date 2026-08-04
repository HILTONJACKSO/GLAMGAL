import React from 'react';
import { Link } from 'react-router-dom';
import { BeautyRoutine } from '../../types/shopify';
import { useCart } from '../../context/CartContext';
import { Sparkles, ArrowRight, ShoppingBag, Clock, CheckCircle2 } from 'lucide-react';

export const RoutineCard: React.FC<{ routine: BeautyRoutine }> = ({ routine }) => {
  const { addRoutineToCart, isLoading } = useCart();

  return (
    <div className="h-full bg-white border border-[#E3D5C8]/70 hover:border-[#B89275] rounded-3xl overflow-hidden flex flex-col justify-between group shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500">
      <div className="flex-1 flex flex-col justify-between">
        {/* Card Header Media Container */}
        <div className="relative aspect-[16/10] overflow-hidden bg-warm-white rounded-t-3xl">
          <img
            src={routine.coverImage || '/hero_model.png'}
            alt={routine.title}
            className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
            loading="lazy"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = '/hero_model.png';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian/85 via-obsidian/30 to-transparent" />

          {/* Top Left Goal Pill */}
          <div className="absolute top-4 left-4 z-10">
            <span className="bg-[#B89275] text-white font-display text-[10px] font-bold tracking-widest px-3.5 py-1.5 uppercase rounded-full shadow-md backdrop-blur-sm border border-white/20 inline-flex items-center space-x-1.5">
              <Sparkles className="w-3 h-3 text-white" />
              <span>{routine.goal}</span>
            </span>
          </div>

          {/* Top Right Duration & Step Badge */}
          <div className="absolute top-4 right-4 z-10">
            <span className="bg-obsidian/80 backdrop-blur-md text-warm-white font-display text-[10px] font-semibold tracking-wider px-3 py-1.5 uppercase rounded-full border border-warm-white/20 inline-flex items-center space-x-1.5">
              <Clock className="w-3 h-3 text-[#B89275]" />
              <span>{routine.durationMinutes} MIN • {routine.steps.length} STEPS</span>
            </span>
          </div>

          {/* Bottom Card Title Overlay inside Header */}
          <div className="absolute bottom-4 left-4 right-4 z-10 text-warm-white">
            <h3 className="font-display text-lg sm:text-xl tracking-wider text-warm-white uppercase font-bold group-hover:text-[#F4EBE2] transition-colors drop-shadow-md">
              {routine.title}
            </h3>
            {routine.subtitle && (
              <p className="text-xs text-[#E3D5C8] font-body line-clamp-1 font-light opacity-90">
                {routine.subtitle}
              </p>
            )}
          </div>
        </div>

        {/* Card Body Content */}
        <div className="p-6 sm:p-7 space-y-5 bg-white flex-1 flex flex-col justify-between">
          <p className="text-xs sm:text-sm text-[#5C5046] font-body leading-relaxed font-light min-h-[44px]">
            {routine.description}
          </p>

          {/* Step Flow List */}
          <div className="space-y-2 pt-1 border-t border-[#F4EBE2]">
            <span className="text-[10px] font-display font-bold tracking-mega text-[#A68064] uppercase block mb-2">
              CURATED STEP RITUAL
            </span>
            {routine.steps.map((step) => (
              <div
                key={step.stepNumber}
                className="flex items-center justify-between p-3 rounded-2xl bg-[#FDFBF7] hover:bg-[#F7EFF5]/60 border border-[#E3D5C8]/40 transition-colors group/step"
              >
                <div className="flex items-center space-x-3 min-w-0">
                  <span className="w-6 h-6 rounded-full bg-[#B89275]/15 text-[#B89275] border border-[#B89275]/30 font-display text-[10px] font-bold flex items-center justify-center shrink-0">
                    {step.stepNumber}
                  </span>
                  <span className="text-xs font-display font-semibold text-obsidian tracking-wider uppercase truncate">
                    {step.title}
                  </span>
                </div>
                <CheckCircle2 className="w-4 h-4 text-[#B89275] opacity-60 group-hover/step:opacity-100 transition-opacity shrink-0 ml-2" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Card Footer Actions */}
      <div className="p-6 sm:p-7 pt-0 space-y-3 bg-white">
        <button
          onClick={() => addRoutineToCart(routine)}
          disabled={isLoading}
          className="w-full bg-obsidian hover:bg-[#B89275] text-warm-white font-display text-xs font-bold tracking-widest py-4 px-6 uppercase rounded-full transition-all duration-300 shadow-md hover:shadow-xl hover:scale-[1.01] active:scale-98 flex items-center justify-center space-x-2.5 cursor-pointer"
        >
          <ShoppingBag className="w-4 h-4 stroke-[2.2]" />
          <span>ADD ENTIRE ROUTINE TO BAG</span>
        </button>

        <Link
          to={`/routines/${routine.handle}`}
          className="group/link flex items-center justify-center space-x-1.5 w-full text-center font-display text-[11px] tracking-widest text-obsidian uppercase py-2 hover:text-[#B89275] transition-colors font-bold"
        >
          <span>VIEW FULL RITUAL INSTRUCTIONS</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};
