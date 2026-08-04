import React from 'react';
import { Link } from 'react-router-dom';
import { BeautyIngredient } from '../../types/shopify';
import { CheckCircle2, Sparkles, ArrowUpRight } from 'lucide-react';

export const IngredientCard: React.FC<{ ingredient: BeautyIngredient }> = ({ ingredient }) => {
  return (
    <div className="h-full bg-white border border-[#E3D5C8]/70 hover:border-[#B89275] rounded-3xl overflow-hidden flex flex-col justify-between group shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500">
      <div className="flex-1 flex flex-col justify-between">
        {/* Card Header Media Container */}
        <div className="relative aspect-[16/10] overflow-hidden bg-warm-white rounded-t-3xl">
          <img
            src={ingredient.image || '/hero_model.png'}
            alt={ingredient.name}
            className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
            loading="lazy"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = '/hero_model.png';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian/85 via-obsidian/30 to-transparent" />

          {/* Top Left Badge */}
          <div className="absolute top-4 left-4 z-10">
            <span className="bg-[#B89275] text-white font-display text-[10px] font-bold tracking-widest px-3.5 py-1.5 uppercase rounded-full shadow-md backdrop-blur-sm border border-white/20 inline-flex items-center space-x-1.5">
              <Sparkles className="w-3 h-3 text-white" />
              <span>ACTIVE CLINICAL INGREDIENT</span>
            </span>
          </div>

          {/* Bottom Card Title Overlay inside Header */}
          <div className="absolute bottom-4 left-4 right-4 z-10 text-warm-white">
            <h3 className="font-display text-base sm:text-lg tracking-wider text-warm-white uppercase font-bold group-hover:text-[#F4EBE2] transition-colors drop-shadow-md line-clamp-1">
              {ingredient.name}
            </h3>
          </div>
        </div>

        {/* Card Body Content */}
        <div className="p-6 sm:p-7 space-y-5 bg-white flex-1 flex flex-col justify-between">
          <p className="text-xs sm:text-sm text-[#5C5046] font-body leading-relaxed font-light min-h-[44px]">
            {ingredient.shortDescription}
          </p>

          {/* Benefits List */}
          <div className="space-y-2 pt-1 border-t border-[#F4EBE2]">
            <span className="text-[10px] font-display font-bold tracking-mega text-[#A68064] uppercase block mb-2">
              TARGETED BENEFITS
            </span>
            {ingredient.benefits.map((benefit, i) => (
              <div
                key={i}
                className="flex items-center space-x-2.5 p-2.5 rounded-2xl bg-[#FDFBF7] hover:bg-[#F7EFF5]/60 border border-[#E3D5C8]/40 transition-colors"
              >
                <CheckCircle2 className="w-4 h-4 text-[#B89275] flex-shrink-0" />
                <span className="text-xs font-display font-semibold text-obsidian tracking-wider uppercase truncate">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Card Footer: Found In Products */}
      <div className="p-6 sm:p-7 pt-0 bg-white">
        <div className="pt-4 border-t border-[#F4EBE2] space-y-2.5">
          <span className="text-[10px] font-display font-bold tracking-mega text-[#A68064] uppercase block">
            FORMULATED IN:
          </span>
          <div className="flex flex-wrap gap-2">
            {ingredient.featuredProductHandles.map((handle) => (
              <Link
                key={handle}
                to={`/products/${handle}`}
                className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-full bg-[#FAF7F2] hover:bg-obsidian hover:text-white border border-[#E3D5C8] text-obsidian text-[10px] font-display font-bold uppercase tracking-wider transition-all duration-300 shadow-2xs group/btn"
              >
                <span>{handle.replace(/-/g, ' ')}</span>
                <ArrowUpRight className="w-3 h-3 text-[#B89275] group-hover/btn:text-white transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
