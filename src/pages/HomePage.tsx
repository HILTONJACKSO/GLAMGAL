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
import { MarqueeBanner } from '../components/sections/MarqueeBanner';
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
      <section className="bg-warm-white py-20 px-6 max-w-7xl mx-auto space-y-10">
        <ScrollReveal variant="fade-up">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="font-display text-xs tracking-mega text-warm-taupe uppercase">EXPLORE COLLECTIONS</span>
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
      </section>

      {/* 4. NEW ARRIVALS */}
      <ScrollReveal variant="fade-up">
        <NewArrivalsSection products={newArrivals} />
      </ScrollReveal>

      {/* 5. BRAND STATEMENT TYPOGRAPHY */}
      <ScrollReveal variant="fade-in">
        <section className="bg-obsidian text-warm-white py-24 px-6 text-center border-y border-deep-charcoal">
          <div className="max-w-4xl mx-auto space-y-6">
            <span className="font-display text-xs tracking-mega text-warm-taupe uppercase">THE GLAMGAL CREED</span>
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl tracking-widest text-warm-white uppercase font-black leading-tight">
              GLAMOUR IS PERSONAL.<br />CONFIDENCE IS UNIVERSAL.
            </h2>
            <p className="font-body text-sm sm:text-base text-soft-stone max-w-2xl mx-auto leading-relaxed font-light">
              GLAMGAL was founded to unite clinical barrier-repair science with high-payoff couture aesthetics. We believe beauty is an empowering medium of individual self-expression.
            </p>
            <div className="pt-4">
              <Link
                to="/philosophy"
                className="inline-flex items-center space-x-2 border border-warm-white text-warm-white font-display text-xs tracking-[0.2em] py-3.5 px-8 uppercase hover:bg-warm-white hover:text-obsidian transition-colors"
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

      {/* 7. SHOP BY BEAUTY GOAL */}
      <section className="bg-white py-20 border-t border-soft-stone">
        <div className="max-w-7xl mx-auto px-6 space-y-10">
          <ScrollReveal variant="fade-up">
            <div className="text-center max-w-xl mx-auto space-y-2">
              <span className="font-display text-xs tracking-mega text-warm-taupe uppercase">TARGETED RESULTS</span>
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
                  className="p-6 bg-warm-white border border-soft-stone hover:border-obsidian transition-all group rounded-sm block h-full"
                >
                  <h3 className="font-display text-xs tracking-widest text-obsidian uppercase font-bold group-hover:underline mb-1">
                    {goal.goal}
                  </h3>
                  <p className="text-xs text-warm-taupe font-body">{goal.desc}</p>
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

      {/* 9. ROUTINE BUILDER */}
      <section className="bg-warm-white py-20 border-t border-soft-stone">
        <div className="max-w-7xl mx-auto px-6 space-y-10">
          <ScrollReveal variant="fade-up">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <span className="font-display text-xs tracking-mega text-warm-taupe uppercase">CURATED RITUALS</span>
                <h2 className="font-display text-2xl sm:text-3xl tracking-widest text-obsidian uppercase font-bold">
                  GLAMGAL ROUTINE BUILDER
                </h2>
              </div>
              <Link
                to="/routines"
                className="font-display text-xs tracking-widest text-obsidian uppercase underline hover:text-warm-taupe transition-colors"
              >
                DISCOVER ALL BEAUTY ROUTINES →
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {routines.map((routine, idx) => (
              <ScrollReveal key={routine.id} variant="fade-up" delay={idx * 0.15}>
                <RoutineCard routine={routine} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 10. INGREDIENT SPOTLIGHT */}
      <section className="bg-white py-20 border-t border-soft-stone">
        <div className="max-w-7xl mx-auto px-6 space-y-10">
          <ScrollReveal variant="fade-up">
            <div className="text-center max-w-xl mx-auto space-y-2">
              <span className="font-display text-xs tracking-mega text-warm-taupe uppercase">INGREDIENT SCIENCE</span>
              <h2 className="font-display text-2xl sm:text-3xl tracking-widest text-obsidian uppercase font-bold">
                ACTIVE INGREDIENT SPOTLIGHT
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

      {/* 12. BEAUTY JOURNAL */}
      <section className="bg-white py-20 border-t border-soft-stone">
        <div className="max-w-7xl mx-auto px-6 space-y-10">
          <ScrollReveal variant="fade-up">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <span className="font-display text-xs tracking-mega text-warm-taupe uppercase">EDITORIAL STORIES</span>
                <h2 className="font-display text-2xl sm:text-3xl tracking-widest text-obsidian uppercase font-bold">
                  BEAUTY JOURNAL
                </h2>
              </div>
              <Link
                to="/journal"
                className="font-display text-xs tracking-widest text-obsidian uppercase underline hover:text-warm-taupe transition-colors"
              >
                READ ALL JOURNAL ARTICLES →
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
