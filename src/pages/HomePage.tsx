import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { HeroCampaign } from '../components/sections/HeroCampaign';
import { CategoryCard } from '../components/sections/CategoryCard';
import { NewArrivalsSection } from '../components/sections/NewArrivalsSection';
import { BestSellersSection } from '../components/sections/BestSellersSection';
import { EditorialSection } from '../components/sections/EditorialSection';
import { RoutineCard } from '../components/sections/RoutineCard';
import { IngredientCard } from '../components/sections/IngredientCard';
import { TestimonialsSection } from '../components/sections/TestimonialsSection';
import { JournalCard } from '../components/sections/JournalCard';
import { SocialGallery } from '../components/sections/SocialGallery';
import { VideoShowcaseSection } from '../components/sections/VideoShowcaseSection';
import { MarqueeBanner } from '../components/sections/MarqueeBanner';
import { ProductShowcaseSlider } from '../components/sections/ProductShowcaseSlider';
import { TrustBar } from '../components/layout/TrustBar';
import { SEO } from '../components/common/SEO';
import { LoadingState } from '../components/common/LoadingState';
import { ScrollReveal } from '../components/common/ScrollReveal';
import {
  getProducts,
  getHeroCampaign,
  getRoutines,
  getIngredients,
  getArticles,
} from '../lib/shopify';
import { Product, BeautyRoutine, BeautyIngredient, JournalArticle, HeroCampaignMetaobject } from '../types/shopify';
import { ArrowRight } from 'lucide-react';

export const HomePage: React.FC = () => {
  const [hero, setHero] = useState<HeroCampaignMetaobject | null>(null);
  const [newArrivals, setNewArrivals] = useState<Product[]>([]);
  const [bestSellers, setBestSellers] = useState<Product[]>([]);
  const [routines, setRoutines] = useState<BeautyRoutine[]>([]);
  const [ingredients, setIngredients] = useState<BeautyIngredient[]>([]);
  const [articles, setArticles] = useState<JournalArticle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadHomeData() {
      try {
        const [heroData, productsData, routinesData, ingredientsData, articlesData] = await Promise.all([
          getHeroCampaign(),
          getProducts({ first: 10 }),
          getRoutines(),
          getIngredients(),
          getArticles(),
        ]);

        setHero(heroData);
        setNewArrivals(productsData.slice(0, 5));
        setBestSellers(productsData.slice(0, 4));
        setRoutines(routinesData);
        setIngredients(ingredientsData);
        setArticles(articlesData);
      } catch (err) {
        console.error('Home Page Data Load Error:', err);
      } finally {
        setLoading(false);
      }
    }
    loadHomeData();
  }, []);

  if (loading || !hero) {
    return <LoadingState message="PREPARING GLAMGAL DIGITAL EXPERIENCE..." />;
  }

  const BEAUTY_GOALS = [
    { goal: 'HYDRATION', desc: 'Deep cellular moisture locking', link: '/concerns#hydration' },
    { goal: 'GLOW', desc: 'Glass-skin radiance & polish', link: '/concerns#glow' },
    { goal: 'SMOOTH APPEARANCE', desc: 'Refined texture & pore blur', link: '/concerns#texture' },
    { goal: 'EVEN-LOOKING TONE', desc: 'Luminous balanced complexions', link: '/concerns#tone' },
    { goal: 'EVERYDAY GLAM', desc: '5-minute weightless beauty', link: '/routines' },
    { goal: 'FULL GLAM', desc: 'Couture pigments for evening drama', link: '/collections/makeup' },
    { goal: 'LIP ESSENTIALS', desc: 'Non-drying velvet lip satellite', link: '/collections/makeup' },
    { goal: 'EYE DEFINITION', desc: 'Smudge-free precision framing', link: '/collections/makeup' },
  ];

  return (
    <div className="space-y-0">
      <SEO
        title="GLAMGAL — High-Impact Makeup & Skin-First Care"
        description="Discover luxury skin-first care, couture velvet makeup, and obsidian sculpting tools."
      />

      {/* 2. HERO CAMPAIGN WITH SCROLL ANIMATION */}
      <ScrollReveal variant="fade-in" duration={0.8}>
        <HeroCampaign hero={hero} />
      </ScrollReveal>

      {/* MARQUEE RUNNING TICKER */}
      <MarqueeBanner />

      {/* TRUST BAR */}
      <ScrollReveal variant="fade-up" delay={0.1}>
        <TrustBar />
      </ScrollReveal>

      {/* 3. SHOP BY CATEGORY */}
      <section className="py-20 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="bg-gradient-to-b from-[#FAF6F0] via-[#F5ECE2] to-[#FAF6F0] rounded-3xl p-6 sm:p-12 border border-[#E8DCCF] shadow-xs space-y-10">
          <ScrollReveal variant="fade-up">
            <div className="text-center max-w-xl mx-auto space-y-2">
              <span className="font-display text-xs tracking-mega text-[#A68064] uppercase font-bold">
                EXPLORE COLLECTIONS
              </span>
              <h2 className="font-display text-2xl sm:text-3xl tracking-widest text-obsidian uppercase font-bold">
                SHOP BY CATEGORY
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ScrollReveal variant="scale-up" delay={0.1}>
              <CategoryCard
                title="SKINCARE"
                subtitle="Triple Peptide & Hyaluronic Actives"
                image="/calming_rosewater_toner_mockup.png"
                link="/collections/skincare"
              />
            </ScrollReveal>
            <ScrollReveal variant="scale-up" delay={0.2}>
              <CategoryCard
                title="MAKEUP"
                subtitle="Velvet Matte & Weightless Pigments"
                image="/liquid_velvet_lipstick_mockup.png"
                link="/collections/makeup"
              />
            </ScrollReveal>
            <ScrollReveal variant="scale-up" delay={0.3}>
              <CategoryCard
                title="BODY CARE"
                subtitle="Sculpting Glow Nectars & Oils"
                image="/polished_smoothing_body_scrub_mockup.png"
                link="/collections/body-care"
              />
            </ScrollReveal>
            <ScrollReveal variant="scale-up" delay={0.4}>
              <CategoryCard
                title="BEAUTY TOOLS"
                subtitle="Obsidian Volcanic Sculpting Stones"
                image="/ultimate_brow_eye_cream_liner_mockup.png"
                link="/collections/beauty-tools"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 4. NEW ARRIVALS */}
      <ScrollReveal variant="fade-up">
        <NewArrivalsSection products={newArrivals} />
      </ScrollReveal>

      {/* 5. BRAND STATEMENT TYPOGRAPHY (DEEP BERRY OBSIDIAN VELVET PALETTE) */}
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
            <p className="font-body text-sm sm:text-base text-rose-100/90 max-w-2xl mx-auto leading-relaxed font-light">
              GLAMGAL was founded to unite clinical barrier-repair science with high-payoff couture aesthetics. We believe beauty is an empowering medium of individual self-expression.
            </p>
            <div className="pt-4">
              <Link
                to="/philosophy"
                className="inline-flex items-center space-x-2 border-2 border-rose-200/80 bg-white/5 hover:bg-rose-200 hover:text-obsidian text-rose-100 font-display text-xs tracking-[0.2em] py-3.5 px-8 uppercase transition-all rounded-full font-bold shadow-lg"
              >
                <span>OUR FORMULATION PHILOSOPHY</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* 6. BEST SELLERS */}
      <ScrollReveal variant="fade-up">
        <BestSellersSection products={bestSellers} />
      </ScrollReveal>

      {/* 6B. ALL PRODUCTS SLIDE SHOWCAROUSEL */}
      <ScrollReveal variant="fade-up">
        <ProductShowcaseSlider />
      </ScrollReveal>

      {/* 7. SHOP BY BEAUTY GOAL (WARM TERRACOTTA NUDE PALETTE) */}
      <section className="bg-gradient-to-b from-[#FAF4EF] via-[#F5ECE3] to-[#FAF4EF] py-20 border-t border-[#E8D9CC]">
        <div className="max-w-7xl mx-auto px-6 space-y-10">
          <ScrollReveal variant="fade-up">
            <div className="text-center max-w-xl mx-auto space-y-2">
              <span className="font-display text-xs tracking-mega text-[#A85848] uppercase font-bold">
                TARGETED RESULTS
              </span>
              <h2 className="font-display text-2xl sm:text-3xl tracking-widest text-obsidian uppercase font-bold">
                SHOP BY BEAUTY GOAL
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {BEAUTY_GOALS.map((goal, idx) => (
              <ScrollReveal key={goal.goal} variant="fade-up" delay={idx * 0.05}>
                <Link
                  to={goal.link}
                  className="p-6 bg-white/90 backdrop-blur-xs border border-[#E7D6CB] hover:border-[#A85848] hover:shadow-lg transition-all group rounded-2xl block h-full"
                >
                  <h3 className="font-display text-xs tracking-widest text-obsidian uppercase font-bold group-hover:text-[#A85848] transition-colors mb-1">
                    {goal.goal}
                  </h3>
                  <p className="text-xs text-[#7C6659] font-body">{goal.desc}</p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FEATURED CAMPAIGN */}
      <ScrollReveal variant="fade-up">
        <EditorialSection />
      </ScrollReveal>

      {/* VIDEO SHOWCASE REELS */}
      <ScrollReveal variant="fade-up">
        <VideoShowcaseSection />
      </ScrollReveal>

      {/* 9. ROUTINE BUILDER (WARM BRONZE & CHAMPAGNE PALETTE) */}
      <section className="bg-gradient-to-br from-[#FBF6F0] via-[#F4EBE0] to-[#EFE4D6] py-24 border-t border-[#E4D4C3]">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <ScrollReveal variant="fade-up">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#E3D5C8]/80">
              <div className="space-y-2 max-w-2xl">
                <span className="inline-block font-display text-[10px] sm:text-xs tracking-mega text-[#9E5739] uppercase font-bold px-3 py-1 bg-[#B87352]/10 rounded-full border border-[#B87352]/20">
                  CURATED RITUALS
                </span>
                <h2 className="font-display text-2xl sm:text-4xl tracking-widest text-obsidian uppercase font-black">
                  GLAMGAL ROUTINE BUILDER
                </h2>
                <p className="font-body text-xs sm:text-sm text-[#5C5046] font-light leading-relaxed">
                  Engineered multi-step regimes tailored to your skin goals. Combine active formulas into a single seamless daily beauty ritual.
                </p>
              </div>
              <Link
                to="/routines"
                className="inline-flex items-center space-x-2 font-display text-xs font-bold tracking-widest text-obsidian uppercase px-6 py-3 bg-white border border-[#E3D5C8] rounded-full hover:bg-obsidian hover:text-white hover:border-obsidian transition-all shadow-xs"
              >
                <span>DISCOVER ALL BEAUTY ROUTINES</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {routines.map((routine, idx) => (
              <ScrollReveal key={routine.id} variant="fade-up" delay={idx * 0.15}>
                <RoutineCard routine={routine} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 10. INGREDIENT SPOTLIGHT (SILK POWDER ROSE & ALMOND PALETTE) */}
      <section className="bg-gradient-to-b from-[#FDF8F5] via-[#FAF1EB] to-[#F7ECE4] py-24 border-t border-[#E8D7CC]">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <ScrollReveal variant="fade-up">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="inline-block font-display text-[10px] sm:text-xs tracking-mega text-[#8C525D] uppercase font-bold px-3 py-1 bg-[#CFA7AE]/20 rounded-full border border-[#CFA7AE]/40">
                INGREDIENT SCIENCE
              </span>
              <h2 className="font-display text-2xl sm:text-4xl tracking-widest text-obsidian uppercase font-black">
                ACTIVE INGREDIENT SPOTLIGHT
              </h2>
              <p className="font-body text-xs sm:text-sm text-[#5C5046] font-light leading-relaxed">
                Discover the bio-identical peptides, clinical actives, and cold-pressed botanical oils powering GLAMGAL high-performance formulations.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {ingredients.map((ing, idx) => (
              <ScrollReveal key={ing.id} variant="fade-up" delay={idx * 0.1}>
                <IngredientCard ingredient={ing} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 11. TESTIMONIALS */}
      <ScrollReveal variant="fade-up">
        <TestimonialsSection />
      </ScrollReveal>

      {/* 12. BEAUTY JOURNAL (WARM VELVET NUDE PALETTE) */}
      <section className="bg-gradient-to-b from-[#FAF4EF] via-[#F4EBE3] to-[#F2E7DC] py-24 border-t border-[#E6D6C7]">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <ScrollReveal variant="fade-up">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#E3D5C8]/80">
              <div className="space-y-2 max-w-2xl">
                <span className="inline-block font-display text-[10px] sm:text-xs tracking-mega text-[#7D4F3E] uppercase font-bold px-3 py-1 bg-[#9E6D59]/10 rounded-full border border-[#9E6D59]/20">
                  EDITORIAL STORIES
                </span>
                <h2 className="font-display text-2xl sm:text-4xl tracking-widest text-obsidian uppercase font-black">
                  BEAUTY JOURNAL
                </h2>
                <p className="font-body text-xs sm:text-sm text-[#5C5046] font-light leading-relaxed">
                  Pro editorial tutorials, formulation deep dives, and backstage beauty insights curated by our lab chemists and artists.
                </p>
              </div>
              <Link
                to="/journal"
                className="inline-flex items-center space-x-2 font-display text-xs font-bold tracking-widest text-obsidian uppercase px-6 py-3 bg-white border border-[#E3D5C8] rounded-full hover:bg-obsidian hover:text-white hover:border-obsidian transition-all shadow-xs"
              >
                <span>READ ALL JOURNAL ARTICLES</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-stretch">
            {articles.map((art, idx) => (
              <ScrollReveal key={art.id} variant="fade-up" delay={idx * 0.15}>
                <JournalCard article={art} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 13. SOCIAL PROOF */}
      <ScrollReveal variant="fade-in">
        <SocialGallery />
      </ScrollReveal>

    </div>
  );
};
