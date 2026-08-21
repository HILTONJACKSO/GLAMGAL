import React from 'react';
import { Link } from 'react-router-dom';
import { Star, CheckCircle, ArrowRight, Quote, MoveRight, ExternalLink } from 'lucide-react';
import { useCMS } from '../../context/CMSContext';

export const TestimonialsSection: React.FC = () => {
  const { state } = useCMS();
  const secData = state.homepageSections.testimonials;
  const testimonials = state.testimonials;

  if (secData && !secData.enabled) return null;

  const defaultReviews = [
    {
      id: 'rev-1',
      title: 'THE LUMINOUS BARRIER SERUM TRANSFORMED MY SKIN IN LESS THAN A WEEK!',
      name: 'SOPHIA V.',
      rating: 5,
      testimonial:
        'The Luminous Barrier Serum completely transformed my skin texture in less than a week. My foundation glides on like glass, and the 72-hour hydration is real!',
      productPurchased: 'LUMINOUS BARRIER SERUM',
      productHandle: 'luminous-barrier-serum',
      verified: true,
      location: 'NEW YORK, NY',
    },
    {
      id: 'rev-2',
      title: 'FINALLY A MATTE LIPSTICK THAT DOESNT CRACK OR DRY OUT MY LIPS!',
      name: 'CLARA M.',
      rating: 5,
      testimonial:
        "Finally a matte lipstick that doesn't crack or dry out my lips! The Velvet Matte in Warm Taupe is my permanent holy grail shade for daily glam.",
      productPurchased: 'VELVET MATTE COUTURE LIPSTICK',
      productHandle: 'velvet-matte-lipstick',
      verified: true,
      location: 'PARIS, FRANCE',
    },
    {
      id: 'rev-3',
      title: 'THE OBSIDIAN GUA SHA TOOL FEELS ULTRA-LUXURIOUS AND HEAVY IN HAND!',
      name: 'ELENA R.',
      rating: 5,
      testimonial:
        'The Obsidian Gua Sha tool feels ultra-luxurious and heavy in hand. I use it every morning with the serum to de-puff and sculpt my jawline.',
      productPurchased: 'OBSIDIAN CONTOUR GUA SHA',
      productHandle: 'precision-contour-gua-sha',
      verified: true,
      location: 'LOS ANGELES, CA',
    },
  ];

  const reviewList = testimonials && testimonials.length > 0 ? testimonials : defaultReviews;

  return (
    <section className="bg-[#FAF5F0] py-24 border-t border-[#E3D6C5] relative overflow-hidden select-none" aria-label="Readers' Voices & Press Praise">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* SECTION HEADER (L'OFFICIEL EDITORIAL STYLE) */}
        <div className="text-center max-w-3xl mx-auto space-y-4 font-serif">
          <div className="inline-flex items-center space-x-2 bg-white px-4 py-1.5 rounded-full border border-[#B89275]/40 shadow-xs">
            <div className="flex items-center space-x-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#B89275] text-[#B89275]" />
              ))}
            </div>
            <span className="font-display text-[10px] tracking-widest text-obsidian uppercase font-bold">
              {secData?.subtitle || '4.9 OUT OF 5 STARS • 1,200+ VERIFIED REVIEWS'}
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl tracking-tight text-obsidian uppercase font-black leading-tight">
            {secData?.title || 'READERS’ VOICES & PRESS PRAISE'}
          </h2>

          <p className="font-body text-xs sm:text-sm text-[#5C5046] leading-relaxed max-w-xl mx-auto font-light">
            {secData?.description || 'Real feedback, clinical test reports, and verified experiences from our global GLAMGAL beauty community.'}
          </p>
        </div>

        {/* REVIEWS GRID / CAROUSEL WITH LIFESTYLE IMAGE CARD */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          
          {/* Review Card 1 */}
          {reviewList.slice(0, 1).map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-7 border border-[#E3D6C5] shadow-xs hover:shadow-xl transition-all duration-400 flex flex-col justify-between group font-serif space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#B89275] text-[#B89275]" />
                    ))}
                  </div>
                  {item.verified && (
                    <span className="inline-flex items-center space-x-1 bg-[#FAF5F0] border border-[#B89275]/30 text-[#B89275] text-[9px] font-display font-bold tracking-widest px-2.5 py-0.5 rounded-full uppercase">
                      <CheckCircle className="w-3 h-3 text-[#B89275]" />
                      <span>VERIFIED</span>
                    </span>
                  )}
                </div>

                <div className="relative">
                  <Quote className="w-8 h-8 text-[#B89275]/20 absolute -top-3 -left-2 rotate-180" />
                  <h3 className="font-serif text-sm font-bold tracking-wide text-obsidian uppercase leading-snug pt-2">
                    "{item.title || item.testimonial.split('.')[0] + '!'}"
                  </h3>
                </div>

                <p className="text-xs text-[#5C5046] leading-relaxed font-body font-light line-clamp-4">
                  "{item.testimonial}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#E3D6C5]/80 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-display text-xs font-bold text-obsidian uppercase tracking-wider">{item.name}</span>
                  <span className="text-[9px] text-[#A68064] font-display uppercase tracking-widest">{item.location || 'VERIFIED BUYER'}</span>
                </div>

                <a
                  href="https://glamgalbeauty.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 font-display text-[9px] font-bold text-[#B89275] hover:text-obsidian uppercase tracking-wider transition-colors pt-1"
                >
                  <span>PURCHASED: {item.productPurchased}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}

          {/* Featured Editorial Product / Model Portrait Plate */}
          <div className="relative rounded-3xl overflow-hidden min-h-[360px] group shadow-xl border border-[#E3D6C5] bg-black">
            <img
              src="/calming_rosewater_toner_mockup.png"
              alt="GLAMGAL Luminous Barrier Serum Bottle"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent flex flex-col justify-end p-6 text-white space-y-2 pointer-events-none">
              <span className="font-display text-[9px] font-bold tracking-widest text-[#B89275] uppercase block">
                EDITORIAL VERDICT • #01 BESTSELLER
              </span>
              <h4 className="font-serif text-xl font-bold tracking-tight uppercase leading-snug">
                LUMINOUS BARRIER SERUM
              </h4>
              <p className="text-[11px] text-white/80 font-body leading-relaxed font-light">
                72-Hour Barrier Recovery & Dewy Glass Hydration
              </p>
            </div>
          </div>

          {/* Review Card 2 & 3 */}
          {reviewList.slice(1, 3).map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-7 border border-[#E3D6C5] shadow-xs hover:shadow-xl transition-all duration-400 flex flex-col justify-between group font-serif space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#B89275] text-[#B89275]" />
                    ))}
                  </div>
                  {item.verified && (
                    <span className="inline-flex items-center space-x-1 bg-[#FAF5F0] border border-[#B89275]/30 text-[#B89275] text-[9px] font-display font-bold tracking-widest px-2.5 py-0.5 rounded-full uppercase">
                      <CheckCircle className="w-3 h-3 text-[#B89275]" />
                      <span>VERIFIED</span>
                    </span>
                  )}
                </div>

                <div className="relative">
                  <Quote className="w-8 h-8 text-[#B89275]/20 absolute -top-3 -left-2 rotate-180" />
                  <h3 className="font-serif text-sm font-bold tracking-wide text-obsidian uppercase leading-snug pt-2">
                    "{item.title || item.testimonial.split('.')[0] + '!'}"
                  </h3>
                </div>

                <p className="text-xs text-[#5C5046] leading-relaxed font-body font-light line-clamp-4">
                  "{item.testimonial}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#E3D6C5]/80 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-display text-xs font-bold text-obsidian uppercase tracking-wider">{item.name}</span>
                  <span className="text-[9px] text-[#A68064] font-display uppercase tracking-widest">{item.location || 'VERIFIED BUYER'}</span>
                </div>

                <a
                  href="https://glamgalbeauty.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 font-display text-[9px] font-bold text-[#B89275] hover:text-obsidian uppercase tracking-wider transition-colors pt-1"
                >
                  <span>PURCHASED: {item.productPurchased}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
