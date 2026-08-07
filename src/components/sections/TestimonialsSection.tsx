import React from 'react';
import { Link } from 'react-router-dom';
import { Star, CheckCircle, ArrowRight } from 'lucide-react';
import { useCMS } from '../../context/CMSContext';

export const TestimonialsSection: React.FC = () => {
  const { state } = useCMS();
  const secData = state.homepageSections.testimonials;
  const testimonials = state.testimonials;

  if (secData && !secData.enabled) return null;

  const defaultReviews = [
    {
      id: 'rev-1',
      title: 'Flawless makeup & glass skin finish!',
      name: 'SOPHIA V.',
      rating: 5,
      testimonial:
        'The Luminous Barrier Serum completely transformed my skin texture in less than a week. My foundation glides on like glass, and the 72-hour hydration is real!',
      productPurchased: 'LUMINOUS BARRIER SERUM',
      productHandle: 'luminous-barrier-serum',
      verified: true,
      skinType: 'Sensitive & Dry Skin',
    },
    {
      id: 'rev-2',
      title: 'Permanent holy grail lipstick shade!',
      name: 'CLARA M.',
      rating: 5,
      testimonial:
        "Finally a matte lipstick that doesn't crack or dry out my lips! The Velvet Matte in Warm Taupe is my permanent holy grail shade for daily glam.",
      productPurchased: 'VELVET MATTE COUTURE LIPSTICK',
      productHandle: 'velvet-matte-lipstick',
      verified: true,
      skinType: 'Combination Skin',
    },
    {
      id: 'rev-3',
      title: 'Gentle on my skin, powerful results!',
      name: 'ELENA R.',
      rating: 5,
      testimonial:
        'The Obsidian Gua Sha tool feels ultra-luxurious and heavy in hand. I use it every morning with the serum to de-puff and sculpt my jawline.',
      productPurchased: 'OBSIDIAN CONTOUR GUA SHA',
      productHandle: 'precision-contour-gua-sha',
      verified: true,
      skinType: 'All Skin Types',
    },
  ];

  const reviewList = testimonials && testimonials.length > 0 ? testimonials : defaultReviews;

  return (
    <section className="bg-[#ECE7E1] py-20 border-t border-[#DECFC0] relative overflow-hidden select-none" aria-label="Community Reviews Fan Club">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* FAN CLUB HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full border border-[#D8C6B5] shadow-2xs">
            <div className="flex items-center space-x-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#A81B5E] text-[#A81B5E]" />
              ))}
            </div>
            <span className="font-display text-[10px] tracking-widest text-obsidian uppercase font-bold">
              {secData?.subtitle || '4.9 OUT OF 5 STARS • 1,200+ VERIFIED REVIEWS'}
            </span>
          </div>

          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl tracking-wider text-obsidian uppercase font-black leading-tight">
            {secData?.title || 'WELCOME TO THE FAN CLUB'}
          </h2>

          <p className="text-xs sm:text-sm text-[#5C5046] font-body leading-relaxed max-w-xl mx-auto font-light">
            {secData?.description || 'Real feedback and verified experiences from our GLAMGAL beauty community.'}
          </p>
        </div>

        {/* REVIEWS GRID / CAROUSEL WITH LIFESTYLE IMAGE CARD */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {/* Review Card 1 */}
          {reviewList.slice(0, 1).map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-7 border border-[#DECFC0]/80 shadow-sm hover:shadow-xl transition-all duration-400 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#A81B5E] text-[#A81B5E]" />
                    ))}
                  </div>
                  {item.verified && (
                    <span className="inline-flex items-center space-x-1 bg-[#F4E6ED] text-[#A81B5E] text-[9px] font-display font-bold tracking-widest px-2.5 py-0.5 rounded-full uppercase">
                      <CheckCircle className="w-3 h-3 text-[#A81B5E]" />
                      <span>VERIFIED BUYER</span>
                    </span>
                  )}
                </div>

                <h3 className="font-display text-base tracking-wider text-obsidian uppercase font-bold">
                  "{item.testimonial.split('.')[0]}!"
                </h3>

                <p className="text-xs text-[#4A4036] leading-relaxed font-body font-light">
                  "{item.testimonial}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#F0E6DC] space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-display text-xs font-bold text-obsidian uppercase tracking-wider">{item.name}</span>
                  {item.skinType && <span className="text-[10px] text-warm-taupe font-body">{item.skinType}</span>}
                </div>

                <Link
                  to={item.productHandle ? `/products/${item.productHandle}` : '/collections/all'}
                  className="inline-flex items-center space-x-1.5 font-display text-[10px] font-bold text-[#A81B5E] hover:text-obsidian uppercase tracking-wider transition-colors pt-1"
                >
                  <span>PURCHASED: {item.productPurchased}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}

          {/* Featured Serum Bottle Lifestyle Image Card (From Reference Screenshot!) */}
          <div className="relative rounded-3xl overflow-hidden min-h-[360px] group shadow-md border border-[#DECFC0]/80">
            <img
              src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80"
              alt="GLAMGAL Luminous Barrier Serum Bottle"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-transparent flex flex-col justify-end p-6 text-white space-y-1">
              <span className="font-display text-[9px] font-bold tracking-widest text-amber-300 uppercase">OFFICIAL COMMUNITY FAVORITE</span>
              <h4 className="font-display text-lg font-bold tracking-wider uppercase">LUMINOUS BARRIER SERUM</h4>
              <p className="text-[11px] text-soft-stone font-body">72-Hour Barrier Recovery & Dewy Glow</p>
            </div>
          </div>

          {/* Review Card 2 & 3 */}
          {reviewList.slice(1, 3).map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-7 border border-[#DECFC0]/80 shadow-sm hover:shadow-xl transition-all duration-400 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#A81B5E] text-[#A81B5E]" />
                    ))}
                  </div>
                  {item.verified && (
                    <span className="inline-flex items-center space-x-1 bg-[#F4E6ED] text-[#A81B5E] text-[9px] font-display font-bold tracking-widest px-2.5 py-0.5 rounded-full uppercase">
                      <CheckCircle className="w-3 h-3 text-[#A81B5E]" />
                      <span>VERIFIED BUYER</span>
                    </span>
                  )}
                </div>

                <h3 className="font-display text-base tracking-wider text-obsidian uppercase font-bold">
                  "{item.testimonial.split('.')[0]}!"
                </h3>

                <p className="text-xs text-[#4A4036] leading-relaxed font-body font-light">
                  "{item.testimonial}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#F0E6DC] space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-display text-xs font-bold text-obsidian uppercase tracking-wider">{item.name}</span>
                  {item.skinType && <span className="text-[10px] text-warm-taupe font-body">{item.skinType}</span>}
                </div>

                <Link
                  to={item.productHandle ? `/products/${item.productHandle}` : '/collections/all'}
                  className="inline-flex items-center space-x-1.5 font-display text-[10px] font-bold text-[#A81B5E] hover:text-obsidian uppercase tracking-wider transition-colors pt-1"
                >
                  <span>PURCHASED: {item.productPurchased}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
