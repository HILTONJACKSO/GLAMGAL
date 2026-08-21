import React from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SEO } from '../components/common/SEO';
import { GlamgalJournalSection } from '../components/sections/GlamgalJournalSection';
import { BookOpen, ExternalLink } from 'lucide-react';

export const JournalPage: React.FC = () => {
  return (
    <div className="bg-[#FAF5F0] min-h-screen py-10 select-none font-serif">
      <SEO
        title="BEAUTY JOURNAL • GLAMGAL EDITORIAL HUB"
        description="Skincare tutorials, makeup guides, zero hidden ingredients glossary, and behind the scenes stories."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        <Breadcrumbs items={[{ label: 'GLAMGAL EDITORIAL HUB' }, { label: 'BEAUTY JOURNAL' }]} />

        {/* PHYSICAL MAGAZINE OPEN SPREAD CONTAINER */}
        <div className="bg-white rounded-[32px] border-2 border-[#E3D6C5] shadow-2xl p-6 sm:p-10 lg:p-14 relative overflow-hidden">
          
          {/* CENTER BOOK BINDING SPINE LINE */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#E3D6C5] to-transparent z-20 pointer-events-none" />

          {/* MAGAZINE PAGE MARGIN RUNNING HEADER */}
          <div className="flex items-center justify-between pb-6 mb-8 border-b border-[#E3D6C5]/80 text-[10px] font-display font-bold tracking-widest text-[#A68064] uppercase">
            <span>VOL. 04 — EDITORIAL ESSAYS</span>
            <span className="hidden sm:inline-block">GLAMGAL BEAUTY JOURNAL & TREND BLUEPRINTS</span>
            <span>PAGE 38 / 39</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* LEFT MAGAZINE PAGE (PAGE 38: COVER ESSAY & MANIFESTO) */}
            <div className="lg:col-span-5 space-y-6 lg:pr-6">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#FAF5F0] border border-[#B89275]/30">
                <BookOpen className="w-3.5 h-3.5 text-[#B89275]" />
                <span className="font-display text-[9px] font-bold tracking-widest text-[#A68064] uppercase">
                  COVER STORY • ISSUE 04
                </span>
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl font-black uppercase text-obsidian tracking-tight leading-none">
                BEAUTY JOURNAL.
              </h1>

              {/* DROP-CAP EDITORIAL PARAGRAPH */}
              <p className="font-serif text-sm text-[#5C5046] leading-relaxed font-light first-letter:float-left first-letter:text-4xl first-letter:font-black first-letter:mr-2.5 first-letter:text-obsidian first-letter:leading-none">
                Welcome to the GLAMGAL Beauty Journal. Our editors report directly from behind studio lights, formulation labs, and runway backstages to bring you clinical skin guides, shade swatching tutorials, and bio-transparency analysis.
              </p>

              {/* EDITORIAL PHOTO PLATE (REFERENCE SCREENSHOT STYLING) */}
              <div className="pt-2">
                <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-[#E3D6C5] shadow-md group bg-black">
                  <img
                    src="/calming_rosewater_toner_mockup.png"
                    alt="GLAMGAL Editorial Cover Story"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[9px] font-display font-bold text-obsidian uppercase tracking-wider border border-[#E3D6C5]">
                    COVER DOSSIER • FIG. 01
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white space-y-0.5">
                    <span className="text-[9px] font-display text-[#B89275] uppercase font-bold tracking-widest block">
                      PARIS & NEW YORK EDITORIAL REELS
                    </span>
                    <p className="text-[11px] font-serif text-white/90 line-clamp-1 italic">
                      "Skin barrier restoration and glass skin prep under 5600K studio lights."
                    </p>
                  </div>
                </div>
              </div>

              {/* BOTTOM PAGE FOOTER MARQUEE */}
              <div className="pt-6 border-t border-[#E3D6C5]/60 flex items-center justify-between text-[9px] font-display text-[#A68064] uppercase tracking-widest">
                <span>CURATED BY GLAMGAL EDITORS</span>
                <a
                  href="https://glamgalbeauty.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-obsidian hover:text-[#B89275] font-bold flex items-center space-x-1"
                >
                  <span>OFFICIAL STORE</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* RIGHT MAGAZINE PAGE (PAGE 39: JOURNAL SECTIONS & CURATIONS) */}
            <div className="lg:col-span-7 lg:pl-6 space-y-6">
              <GlamgalJournalSection />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
