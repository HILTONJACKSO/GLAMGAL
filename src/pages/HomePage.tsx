import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { HeroCampaign } from '../components/sections/HeroCampaign';
import { VideoShowcaseSection } from '../components/sections/VideoShowcaseSection';
import { GlamgalJournalSection } from '../components/sections/GlamgalJournalSection';
import { BehindTheStudioSection } from '../components/sections/BehindTheStudioSection';
import { IngredientGlossarySection } from '../components/sections/IngredientGlossarySection';
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
  getRoutines,
  getIngredients,
  getArticles,
} from '../lib/shopify';
import { HeroCampaignMetaobject } from '../types/shopify';
import { ArrowRight, Play, BookOpen, Sparkles, ExternalLink } from 'lucide-react';

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
    return <LoadingState message="PREPARING GLAMGAL EDITORIAL JOURNAL & VIDEO HUB..." />;
  }

  return (
    <div className="space-y-0 select-none">
      <SEO
        title="GLAMGAL — Beauty Journal, Masterclasses & Formulation Science"
        description="Explore 4K video beauty masterclasses, dermatological skincare science, skin tips, and routine tutorials curated by GLAMGAL editors."
      />

      {/* 1. HERO CAMPAIGN (MAGAZINE COVER & FEATURED VIDEO TUTORIAL) */}
      <ScrollReveal variant="fade-in" duration={0.8}>
        <HeroCampaign hero={hero} />
      </ScrollReveal>

      {/* MARQUEE RUNNING TICKER */}
      <MarqueeBanner />

      {/* TRUST BAR (BRAND COMMITMENTS) */}
      <ScrollReveal variant="fade-up" delay={0.1}>
        <TrustBar />
      </ScrollReveal>

      {/* 2. INTERACTIVE VIDEO SHOWCASE MASTERCLASSES */}
      <section id="video-showcase">
        <ScrollReveal variant="fade-up">
          <VideoShowcaseSection />
        </ScrollReveal>
      </section>

      {/* 3. BRAND CREED TYPOGRAPHY (DEEP BERRY OBSIDIAN VELVET PALETTE) */}
      <ScrollReveal variant="fade-in">
        <section className="bg-gradient-to-r from-[#200615] via-[#3E0E27] to-[#1C0512] text-warm-white py-24 px-6 text-center border-y border-[#5C163C]/50 relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pink-900/20 via-transparent to-transparent pointer-events-none" />

          <div className="max-w-4xl mx-auto space-y-6 relative z-10">
            <span className="font-display text-xs tracking-mega text-rose-300 uppercase font-bold">
              THE GLAMGAL CREED
            </span>
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl tracking-widest text-warm-white uppercase font-black leading-tight drop-shadow-md">
              GLAMOUR IS PERSONAL.<br />CONFIDENCE IS UNIVERSAL.
            </h2>
            <p className="font-body text-sm sm:text-base md:text-lg text-rose-100/90 max-w-2xl mx-auto leading-relaxed font-light">
              GLAMGAL was founded to unite clinical barrier-repair science with high-payoff couture aesthetics. We believe beauty is an empowering medium of individual self-expression.
            </p>
            <div className="pt-4 flex flex-wrap justify-center items-center gap-4">
              <Link
                to="/philosophy"
                className="inline-flex items-center space-x-2 border-2 border-rose-200/80 bg-white/5 hover:bg-rose-200 hover:text-obsidian text-rose-100 font-display text-xs tracking-[0.2em] py-3.5 px-8 uppercase transition-all rounded-full font-bold shadow-lg"
              >
                <span>OUR FORMULATION PHILOSOPHY</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://glamgalbeauty.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-[#B89275] hover:bg-white hover:text-obsidian text-white font-display text-xs tracking-[0.2em] py-3.5 px-8 uppercase transition-all rounded-full font-bold shadow-lg"
              >
                <span>VISIT OFFICIAL STORE ↗</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* 4. GLAMGAL JOURNAL & STEP-BY-STEP BEAUTY ARTICLES */}
      <ScrollReveal variant="fade-up">
        <GlamgalJournalSection />
      </ScrollReveal>

      {/* 5. BEHIND THE STUDIO & LAB FORMULATION REELS */}
      <ScrollReveal variant="fade-up">
        <BehindTheStudioSection />
      </ScrollReveal>

      {/* 6. INGREDIENT GLOSSARY & ACTIVE SCIENCE */}
      <ScrollReveal variant="fade-up">
        <IngredientGlossarySection />
      </ScrollReveal>

      {/* 7. FEATURED EDITORIAL CAMPAIGN */}
      <ScrollReveal variant="fade-up">
        <EditorialSection />
      </ScrollReveal>

      {/* 8. TESTIMONIALS & VERIFIED BUYER PRAISE */}
      <ScrollReveal variant="fade-up">
        <TestimonialsSection />
      </ScrollReveal>

      {/* 9. VIRTUAL VANITY COMMUNITY VIDEO GALLERY */}
      <ScrollReveal variant="fade-in">
        <VirtualVanitySection />
      </ScrollReveal>

      {/* 10. DIRECT STORE GATEWAY CALLOUT SECTION */}
      <section className="bg-[#FAF4EF] py-20 border-t border-[#E8D9CC]">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-6">
          <span className="font-display text-xs tracking-mega text-[#A68064] uppercase font-bold">
            READY TO EXPERIENCE THE FORMULATIONS?
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl tracking-widest text-obsidian uppercase font-black">
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
