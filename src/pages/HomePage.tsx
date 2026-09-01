import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { HeroCampaign } from '../components/sections/HeroCampaign';
import { VideoShowcaseSection } from '../components/sections/VideoShowcaseSection';
import { GlamgalJournalSection } from '../components/sections/GlamgalJournalSection';
import { MagazineCoversSection } from '../components/sections/MagazineCoversSection';
import { BehindTheStudioSection } from '../components/sections/BehindTheStudioSection';
import { IngredientGlossarySection } from '../components/sections/IngredientGlossarySection';
import { HomepageBentoGallerySection } from '../components/sections/HomepageBentoGallerySection';
import { VirtualVanitySection } from '../components/sections/VirtualVanitySection';
import { TestimonialsSection } from '../components/sections/TestimonialsSection';
import { EditorialSection } from '../components/sections/EditorialSection';
import { MarqueeBanner } from '../components/sections/MarqueeBanner';
import { TrustBar } from '../components/layout/TrustBar';
import { SEO } from '../components/common/SEO';
import { LoadingState } from '../components/common/LoadingState';
import { ScrollReveal } from '../components/common/ScrollReveal';
import {
  getHeroCampaign,
} from '../lib/shopify';
import { HeroCampaignMetaobject } from '../types/shopify';
import { ArrowRight, ExternalLink } from 'lucide-react';

export const HomePage: React.FC = () => {
  const [hero, setHero] = useState<HeroCampaignMetaobject | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadHomeData() {
      try {
        const heroData = await getHeroCampaign();
        setHero(heroData);
      } catch (err) {
        console.error('Home Page Data Load Error:', err);
      } finally {
        setLoading(false);
      }
    }
    loadHomeData();
  }, []);

  if (loading || !hero) {
    return <LoadingState message="PREPARING GLAMGAL L'OFFICIEL EDITORIAL MAGAZINE..." />;
  }

  return (
    <div className="space-y-0 select-none bg-white">
      <SEO
        title="GLAMGAL — High-Fashion Beauty Journal, Masterclasses & Magazine"
        description="Explore 4K video beauty masterclasses, dermatological skincare science, skin tips, and routine tutorials curated by GLAMGAL senior editors."
      />

      {/* 1. L'OFFICIEL DARK FULL-BLEED COVER HERO WITH MOSAIC FILMSTRIPS (SCREENSHOT 1) */}
      <ScrollReveal variant="fade-in" duration={0.8}>
        <HeroCampaign hero={hero} />
      </ScrollReveal>

      {/* MARQUEE RUNNING TICKER */}
      <MarqueeBanner />

      {/* TRUST BAR (BRAND COMMITMENTS) */}
      <ScrollReveal variant="fade-up" delay={0.1}>
        <TrustBar />
      </ScrollReveal>

      {/* 2. EDITORS' CHOICE 5-COLUMN PORTRAIT GRID (SCREENSHOT 2) */}
      <ScrollReveal variant="fade-up">
        <GlamgalJournalSection />
      </ScrollReveal>

      {/* 3. INTERACTIVE VIDEO SHOWCASE MASTERCLASSES WITH DRAG BADGE (SCREENSHOTS 3 & 4) */}
      <section id="video-showcase">
        <ScrollReveal variant="fade-up">
          <VideoShowcaseSection />
        </ScrollReveal>
      </section>

      {/* 4. OVERLAPPING MAGAZINE COVERS CAROUSEL (SCREENSHOT 5) */}
      <ScrollReveal variant="fade-up">
        <MagazineCoversSection />
      </ScrollReveal>

      {/* 5. BRAND CREED TYPOGRAPHY (CLEAN BRIGHT EDITORIAL WHITE SPREAD) */}
      <ScrollReveal variant="fade-in">
        <section className="bg-white text-obsidian py-32 px-6 text-center border-y border-[#E3D6C5] relative overflow-hidden">
          <div className="max-w-4xl mx-auto space-y-8 relative z-10">
            <span className="font-display text-xs tracking-mega text-[#A68064] uppercase font-bold">
              THE GLAMGAL CREED
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl tracking-tight text-obsidian uppercase font-black leading-tight">
              GLAMOUR IS PERSONAL.<br />CONFIDENCE IS UNIVERSAL.
            </h2>
            <p className="font-body text-sm sm:text-base md:text-lg text-[#5C5046] max-w-2xl mx-auto leading-relaxed font-light">
              GLAMGAL was founded to unite clinical barrier-repair science with high-payoff couture aesthetics. We believe beauty is an empowering medium of individual self-expression.
            </p>
            <div className="pt-4 flex flex-wrap justify-center items-center gap-4">
              <Link
                to="/philosophy"
                className="inline-flex items-center space-x-2 border border-[#E3D6C5] bg-white hover:bg-obsidian hover:text-white text-obsidian font-display text-xs tracking-[0.2em] py-3.5 px-8 uppercase transition-all rounded-full font-bold shadow-xs"
              >
                <span>OUR FORMULATION PHILOSOPHY</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://glamgalbeauty.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-[#B89275] hover:bg-obsidian text-white font-display text-xs tracking-[0.2em] py-3.5 px-8 uppercase transition-all rounded-full font-bold shadow-md"
              >
                <span>VISIT OFFICIAL STORE ↗</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* 6. BEHIND THE STUDIO & LAB FORMULATION REELS */}
      <ScrollReveal variant="fade-up">
        <BehindTheStudioSection />
      </ScrollReveal>

      {/* 7. INGREDIENT GLOSSARY & ACTIVE SCIENCE */}
      <ScrollReveal variant="fade-up">
        <IngredientGlossarySection />
      </ScrollReveal>

      {/* 7.5. COUTURE BEAUTY BENTO GALLERY MATRIX */}
      <ScrollReveal variant="fade-up">
        <HomepageBentoGallerySection />
      </ScrollReveal>

      {/* 8. FEATURED EDITORIAL CAMPAIGN */}
      <ScrollReveal variant="fade-up">
        <EditorialSection />
      </ScrollReveal>

      {/* 9. TESTIMONIALS & VERIFIED BUYER PRAISE */}
      <ScrollReveal variant="fade-up">
        <TestimonialsSection />
      </ScrollReveal>

      {/* 10. VIRTUAL VANITY COMMUNITY VIDEO GALLERY */}
      <ScrollReveal variant="fade-in">
        <VirtualVanitySection />
      </ScrollReveal>

      {/* 11. DIRECT STORE GATEWAY CALLOUT SECTION */}
      <section className="bg-white py-28 border-t border-[#E3D6C5]">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-6">
          <span className="font-display text-xs tracking-mega text-[#A68064] uppercase font-bold">
            READY TO EXPERIENCE THE FORMULATIONS?
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-obsidian uppercase font-black">
            EXPLORE THE OFFICIAL GLAMGAL STORE
          </h2>
          <p className="font-body text-xs sm:text-sm text-[#5C5046] max-w-xl mx-auto leading-relaxed">
            All GLAMGAL skincare and cosmetics are available for worldwide shipping exclusively on our main flagship store.
          </p>
          <div className="pt-2">
            <a
              href="https://glamgalbeauty.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-obsidian hover:bg-[#B89275] text-white font-display text-xs sm:text-sm font-bold tracking-widest uppercase py-4 px-10 rounded-full transition-all shadow-md hover:scale-105"
            >
              <span>VISIT GLAMGALBEAUTY.COM</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
