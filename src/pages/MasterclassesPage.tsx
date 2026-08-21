import React from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SEO } from '../components/common/SEO';
import { VideoShowcaseSection } from '../components/sections/VideoShowcaseSection';
import { Video, ExternalLink } from 'lucide-react';

export const MasterclassesPage: React.FC = () => {
  return (
    <div className="bg-[#0D0D0D] text-warm-white min-h-screen py-10 select-none font-serif">
      <SEO
        title="VIDEO MASTERCLASSES • GLAMGAL EDITORIAL HUB"
        description="Watch 4K high-definition texture reels, application masterclasses, and skin barrier tips."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        <Breadcrumbs items={[{ label: 'GLAMGAL EDITORIAL HUB' }, { label: 'VIDEO MASTERCLASSES' }]} />

        {/* PHYSICAL MAGAZINE OPEN SPREAD CONTAINER (DARK EDITION) */}
        <div className="bg-[#141414] rounded-[32px] border-2 border-white/15 shadow-2xl p-6 sm:p-10 lg:p-14 relative overflow-hidden">
          
          {/* CENTER BOOK BINDING SPINE LINE */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/15 to-transparent z-20 pointer-events-none" />

          {/* MAGAZINE PAGE MARGIN RUNNING HEADER */}
          <div className="flex items-center justify-between pb-6 mb-8 border-b border-white/15 text-[10px] font-display font-bold tracking-widest text-[#B89275] uppercase">
            <span>VOL. 04 — VIDEO REELS</span>
            <span className="hidden sm:inline-block">GLAMGAL BEAUTY MASTERCLASSES & TEXTURE REELS</span>
            <span>PAGE 40 / 41</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* LEFT MAGAZINE PAGE (PAGE 40: HEADER & INTRO) */}
            <div className="lg:col-span-5 space-y-6 lg:pr-6">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20">
                <Video className="w-3.5 h-3.5 text-[#B89275]" />
                <span className="font-display text-[9px] font-bold tracking-widest text-[#B89275] uppercase">
                  VIDEO REELS • ISSUE 04
                </span>
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl font-black uppercase text-white tracking-tight leading-none">
                VIDEO MASTERCLASSES.
              </h1>

              {/* DROP-CAP EDITORIAL PARAGRAPH */}
              <p className="font-serif text-sm text-white/80 leading-relaxed font-light first-letter:float-left first-letter:text-4xl first-letter:font-black first-letter:mr-2.5 first-letter:text-white first-letter:leading-none">
                Experience GLAMGAL formulations in motion. Watch 4K high-definition texture swatches, 12-hour lip wear tests, and step-by-step facial sculpting tutorials hosted by senior dermatologists and couture makeup artists.
              </p>

              {/* EDITORIAL VIDEO PLATE */}
              <div className="pt-2">
                <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-white/20 shadow-md group bg-black">
                  <img
                    src="/calming_rosewater_toner_mockup.png"
                    alt="GLAMGAL Video Masterclass Reel"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />

                  <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full text-[9px] font-display font-bold text-white uppercase tracking-wider border border-white/20">
                    MASTERCLASS REEL • 4K HD
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white space-y-0.5">
                    <span className="text-[9px] font-display text-[#B89275] uppercase font-bold tracking-widest block">
                      PARIS LAB FORMULATION SPECS
                    </span>
                    <p className="text-[11px] font-serif text-white/90 line-clamp-1 italic">
                      "Micro-hyaluronic sphere dispersion in real time."
                    </p>
                  </div>
                </div>
              </div>

              {/* BOTTOM PAGE FOOTER MARQUEE */}
              <div className="pt-6 border-t border-white/15 flex items-center justify-between text-[9px] font-display text-[#B89275] uppercase tracking-widest">
                <span>100% HIGH DEFINITION REELS</span>
                <a
                  href="https://glamgalbeauty.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#B89275] font-bold flex items-center space-x-1"
                >
                  <span>OFFICIAL STORE</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* RIGHT MAGAZINE PAGE (PAGE 41: VIDEO SHOWCASE REELS) */}
            <div className="lg:col-span-7 lg:pl-6 space-y-6">
              <VideoShowcaseSection />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
