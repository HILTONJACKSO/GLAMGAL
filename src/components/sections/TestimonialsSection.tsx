import React from 'react';
import { Link } from 'react-router-dom';
import { Star, CheckCircle, Quote } from 'lucide-react';
import { useCMS } from '../../context/CMSContext';

export const TestimonialsSection: React.FC = () => {
  const { state } = useCMS();
  const secData = state.homepageSections.testimonials;
  const testimonials = state.testimonials;

  if (secData && !secData.enabled) return null;

  return (
    <section className="bg-[#F8F4EF] py-20 border-t border-[#E8DEC7]/70 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 space-y-12">
        {/* Section Header with Overall Aggregate Score */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 bg-white px-4 py-1.5 rounded-full border border-[#E3D6C5] shadow-2xs">
            <div className="flex items-center space-x-1 text-[#B89275]">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#B89275]" />
              ))}
            </div>
            <span className="font-display text-[10px] tracking-widest text-obsidian uppercase font-bold">
              {secData?.subtitle || '4.9 OUT OF 5 STARS • 1,200+ VERIFIED REVIEWS'}
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl tracking-widest text-obsidian uppercase font-black">
            {secData?.title || 'COMMUNITY PRAISE'}
          </h2>
          <p className="text-xs sm:text-sm text-[#5C5046] font-body leading-relaxed">
            {secData?.description || 'Real feedback and verified experiences from our GLAMGAL beauty community.'}
          </p>
        </div>

        {/* 3-Column Luxury Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-[24px] p-8 border border-[#E3D6C5]/80 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between group relative"
            >
              {/* Quote Icon Overlay */}
              <Quote className="w-10 h-10 text-[#E8DEC7] absolute top-6 right-6 stroke-1 pointer-events-none group-hover:text-[#B89275]/30 transition-colors" />

              <div className="space-y-6 relative z-10">
                {/* Rating Stars & Verified Tag */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-obsidian text-obsidian" />
                    ))}
                  </div>

                  {item.verified && (
                    <span className="inline-flex items-center space-x-1 bg-[#E8F5E9] text-[#2E7D32] text-[9px] font-display font-bold tracking-widest px-2.5 py-1 rounded-full uppercase">
                      <CheckCircle className="w-3 h-3 text-[#2E7D32]" />
                      <span>VERIFIED BUYER</span>
                    </span>
                  )}
                </div>

                {/* Review Quote */}
                <p className="text-xs sm:text-sm text-deep-charcoal italic leading-relaxed font-body">
                  "{item.testimonial}"
                </p>
              </div>

              {/* Author & Product Purchased Link */}
              <div className="pt-6 mt-6 border-t border-[#E3D6C5]/60 flex flex-col space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-display text-xs tracking-wider text-obsidian uppercase font-bold">
                    {item.name}
                  </h4>
                  {item.skinType && (
                    <span className="text-[10px] text-warm-taupe font-body">{item.skinType}</span>
                  )}
                </div>

                <Link
                  to={item.productHandle ? `/products/${item.productHandle}` : '/collections/all'}
                  className="text-[11px] font-display text-[#B89275] hover:text-obsidian uppercase font-semibold transition-colors flex items-center space-x-1"
                >
                  <span>PURCHASED: {item.productPurchased}</span>
                  <span className="text-xs">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
