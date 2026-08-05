import React from 'react';
import { Link } from 'react-router-dom';
import { HeroCampaignMetaobject, Product } from '../../types/shopify';
import { useCMS } from '../../context/CMSContext';
import { ChevronRight, PlayCircle } from 'lucide-react';

interface HeroCampaignProps {
  hero?: HeroCampaignMetaobject;
  featuredProducts?: Product[];
}

export const HeroCampaign: React.FC<HeroCampaignProps> = ({ hero: initialHero }) => {
  const { state } = useCMS();
  // Live CMS state takes precedence over static hero prop
  const hero = state.hero || initialHero || {};

  return (
    /* Full Width Hero Background Connected Directly to Header Navbar */
    <section className="w-full bg-[#F4EBE2] border-b border-[#E3D5C8]/80">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-10 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-stretch">
          {/* Left Column: Headline, Description, Pill Buttons & Product Sub-Cards */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-8">
            {/* Top Text Group */}
            <div className="space-y-4">
              <span className="inline-block font-display text-[10px] sm:text-xs tracking-mega text-[#A68064] uppercase font-semibold">
                LUXURY SKIN-FIRST CARE & BEAUTY
              </span>

              <h1 className="font-display text-2xl sm:text-4xl md:text-5xl font-black text-obsidian tracking-wider uppercase leading-tight sm:leading-none">
                {hero.heading || 'BEAUTY, DEFINED YOUR WAY.'}
              </h1>

              <p className="font-body text-xs sm:text-sm text-[#5C5046] leading-relaxed max-w-lg font-light">
                {hero.subheading ||
                  'High-impact makeup, skin-first care and everyday essentials created for confident self-expression.'}
              </p>

              {/* Action Buttons Row */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
                {/* Primary Pill Button */}
                <Link
                  to={hero.primaryCtaLink || '/collections/all'}
                  className="inline-flex items-center space-x-2 bg-[#B89275] hover:bg-[#A37E62] hover:scale-105 active:scale-95 text-white font-display text-[11px] sm:text-xs tracking-wider uppercase px-6 sm:px-7 py-3.5 rounded-full transition-all shadow-sm hover:shadow-md"
                >
                  <span>{hero.primaryCtaText || 'SHOP THE COLLECTION'}</span>
                  <ChevronRight className="w-4 h-4 stroke-[2.5]" />
                </Link>

                {/* Secondary Video/Action Pill Button */}
                <Link
                  to={hero.secondaryCtaLink || '/collections/skincare'}
                  className="inline-flex items-center space-x-2 bg-white hover:bg-warm-white hover:scale-105 active:scale-95 border border-[#B89275]/50 text-obsidian font-display text-[11px] sm:text-xs tracking-wider uppercase px-6 sm:px-7 py-3.5 rounded-full transition-all"
                >
                  <span>{hero.secondaryCtaText || 'DISCOVER SKINCARE'}</span>
                  <PlayCircle className="w-4 h-4 text-[#B89275] stroke-[1.8]" />
                </Link>
              </div>
            </div>

            {/* Bottom Product Sub-Cards */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-6 border-t border-[#E3D5C8]/80">
              {/* Product Sub-Card 1 */}
              <Link
                to="/products/luminous-barrier-serum"
                className="group bg-white rounded-2xl p-3 border border-[#E3D5C8]/60 hover:border-[#B89275] hover:-translate-y-1 transition-all duration-300 shadow-xs hover:shadow-md block"
              >
                <div className="aspect-[4/3] rounded-xl overflow-hidden bg-warm-white mb-2.5">
                  <img
                    src="/calming_rosewater_toner_mockup.png"
                    alt="Luminous Barrier Serum"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = '/hero_model.png';
                    }}
                  />
                </div>
                <h4 className="font-display text-[11px] sm:text-xs tracking-wider text-obsidian uppercase font-semibold line-clamp-1 group-hover:underline">
                  LUMINOUS BARRIER SERUM
                </h4>
                <span className="text-[10px] font-display text-[#A68064] uppercase block mt-0.5">$68.00 USD</span>
              </Link>

              {/* Product Sub-Card 2 */}
              <Link
                to="/products/velvet-matte-lipstick"
                className="group bg-white rounded-2xl p-3 border border-[#E3D5C8]/60 hover:border-[#B89275] hover:-translate-y-1 transition-all duration-300 shadow-xs hover:shadow-md block"
              >
                <div className="aspect-[4/3] rounded-xl overflow-hidden bg-warm-white mb-2.5">
                  <img
                    src="/liquid_velvet_lipstick_mockup.png"
                    alt="Velvet Matte Couture Lipstick"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = '/hero_model.png';
                    }}
                  />
                </div>
                <h4 className="font-display text-[11px] sm:text-xs tracking-wider text-obsidian uppercase font-semibold line-clamp-1 group-hover:underline">
                  VELVET MATTE LIPSTICK
                </h4>
                <span className="text-[10px] font-display text-[#A68064] uppercase block mt-0.5">$38.00 USD</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Large Rounded Hero Image Card */}
          <div className="lg:col-span-6">
            <div className="relative w-full h-full min-h-[360px] sm:min-h-[460px] lg:min-h-[520px] rounded-[20px] sm:rounded-[28px] overflow-hidden shadow-md border border-[#E3D5C8]/40">
              <img
                src={hero.featuredImageUrl || '/hero_model.png'}
                alt="GLAMGAL Radiant Beauty Model Applying Serum"
                className="w-full h-full object-cover object-center transform hover:scale-102 transition-transform duration-700"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = '/hero_model.png';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/20 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
