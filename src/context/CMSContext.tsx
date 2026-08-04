import React, { createContext, useContext, useState, useEffect } from 'react';
import { HeroCampaignMetaobject, Product, JournalArticle, PromoCode, TestimonialItem } from '../types/shopify';
import { MOCK_PRODUCTS, MOCK_ARTICLES } from '../lib/shopify/mock-adapter';

export interface CMSSectionData {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  badge?: string;
  imageUrl?: string;
  ctaText?: string;
  ctaLink?: string;
  enabled: boolean;
}

export interface CMSState {
  isAuthenticated: boolean;
  adminUser: { email: string; role: string } | null;
  hero: HeroCampaignMetaobject;
  homepageSections: Record<string, CMSSectionData>;
  mediaLibrary: string[];
  products: Product[];
  articles: JournalArticle[];
  promos: PromoCode[];
  testimonials: TestimonialItem[];
}

interface CMSContextType {
  state: CMSState;
  login: (email: string, pass: string) => boolean;
  logout: () => void;
  updateHero: (updated: Partial<HeroCampaignMetaobject>) => void;
  updateSection: (sectionId: string, updated: Partial<CMSSectionData>) => void;
  toggleSection: (sectionId: string) => void;
  addMedia: (url: string) => void;
  removeMedia: (url: string) => void;
  addProduct: (product: Product) => void;
  updateProduct: (id: string, updated: Partial<Product>) => void;
  deleteProduct: (id: string) => void;
  addArticle: (article: JournalArticle) => void;
  updateArticle: (id: string, updated: Partial<JournalArticle>) => void;
  deleteArticle: (id: string) => void;
  addPromo: (promo: PromoCode) => void;
  updatePromo: (id: string, updated: Partial<PromoCode>) => void;
  deletePromo: (id: string) => void;
  togglePromo: (id: string) => void;
  addTestimonial: (item: TestimonialItem) => void;
  updateTestimonial: (id: string, updated: Partial<TestimonialItem>) => void;
  deleteTestimonial: (id: string) => void;
  resetToDefaults: () => void;
}

const DEFAULT_TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't-1',
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
    id: 't-2',
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
    id: 't-3',
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

const DEFAULT_PROMOS: PromoCode[] = [
  {
    id: 'promo-1',
    code: 'GLAM20',
    discountType: 'percentage',
    discountValue: 20,
    description: '20% OFF all luxury beauty formulations & couture lipstick',
    minSpend: 50,
    active: true,
    appliesTo: 'All Products',
  },
  {
    id: 'promo-2',
    code: 'FREESHIP75',
    discountType: 'free_shipping',
    discountValue: 0,
    description: 'Complimentary Express Shipping on orders over $75',
    minSpend: 75,
    active: true,
    appliesTo: 'All Products',
  },
  {
    id: 'promo-3',
    code: 'GLOW15',
    discountType: 'fixed',
    discountValue: 15,
    description: '$15 OFF Skincare Essentials Routine',
    minSpend: 60,
    active: true,
    appliesTo: 'Skincare',
  },
];

const DEFAULT_HERO: HeroCampaignMetaobject = {
  heading: 'BEAUTY, DEFINED YOUR WAY.',
  subheading: 'High-impact makeup, skin-first care and everyday essentials created for confident self-expression.',
  primaryCtaText: 'SHOP THE COLLECTION',
  primaryCtaLink: '/collections/all',
  secondaryCtaText: 'DISCOVER SKINCARE',
  secondaryCtaLink: '/collections/skincare',
  featuredImageUrl: '/hero_model.png',
};

const DEFAULT_HOMEPAGE_SECTIONS: Record<string, CMSSectionData> = {
  marquee: {
    id: 'marquee',
    title: 'GLAMGAL BEAUTY • SKIN-FIRST CARE • COUTURE VELVET MAKEUP • OBSIDIAN SCULPTING',
    enabled: true,
  },
  creed: {
    id: 'creed',
    title: 'GLAMOUR IS PERSONAL. CONFIDENCE IS UNIVERSAL.',
    subtitle: 'THE GLAMGAL CREED',
    description:
      'GLAMGAL was founded to unite clinical barrier-repair science with high-payoff couture aesthetics. We believe beauty is an empowering medium of individual self-expression.',
    ctaText: 'OUR FORMULATION PHILOSOPHY',
    ctaLink: '/philosophy',
    enabled: true,
  },
  newArrivals: {
    id: 'newArrivals',
    title: 'NEW ARRIVALS',
    subtitle: 'FRESH FORMULATIONS',
    enabled: true,
  },
  bestSellers: {
    id: 'bestSellers',
    title: 'BEST SELLERS',
    subtitle: 'COVETED BEAUTY ICONS',
    enabled: true,
  },
  testimonials: {
    id: 'testimonials',
    title: 'COMMUNITY PRAISE',
    subtitle: '4.9 OUT OF 5 STARS • 1,200+ VERIFIED REVIEWS',
    description: 'Real feedback and verified experiences from our GLAMGAL beauty community.',
    enabled: true,
  },
};

const INITIAL_MEDIA = [
  '/hero_model.png',
  'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1608248597263-00079996576f?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1590156206657-b089c256037e?auto=format&fit=crop&w=800&q=80',
];

const CMSContext = createContext<CMSContextType | undefined>(undefined);

export const CMSProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<CMSState>(() => {
    try {
      const saved = localStorage.getItem('glamgal_cms_state');
      if (saved) {
        const parsed = JSON.parse(saved);
        const rawProducts: Product[] = parsed.products && parsed.products.length > 0 ? parsed.products : MOCK_PRODUCTS;
        // Sanitize broken Unsplash URLs from localStorage using latest MOCK_PRODUCTS definitions
        const sanitizedProducts = rawProducts.map((p) => {
          const fresh = MOCK_PRODUCTS.find((m) => m.id === p.id || m.handle === p.handle);
          if (fresh) {
            const hasBrokenImg = !p.featuredImage?.url || p.featuredImage.url.includes('images.unsplash.com');
            if (hasBrokenImg) {
              return { ...p, featuredImage: fresh.featuredImage, secondaryImage: fresh.secondaryImage || fresh.featuredImage, images: fresh.images };
            }
          }
          return p;
        });
        const heroState = parsed.hero && (!parsed.hero.featuredImageUrl || parsed.hero.featuredImageUrl.includes('images.unsplash.com'))
          ? { ...parsed.hero, featuredImageUrl: '/hero_model.png' }
          : parsed.hero || DEFAULT_HERO;

        return {
          ...parsed,
          hero: heroState,
          products: sanitizedProducts,
          articles: parsed.articles && parsed.articles.length > 0 ? parsed.articles : MOCK_ARTICLES,
          promos: parsed.promos && parsed.promos.length > 0 ? parsed.promos : DEFAULT_PROMOS,
          testimonials: parsed.testimonials && parsed.testimonials.length > 0 ? parsed.testimonials : DEFAULT_TESTIMONIALS,
        };
      }
    } catch (e) {
      console.error('Error loading CMS state:', e);
    }
    return {
      isAuthenticated: false,
      adminUser: null,
      hero: DEFAULT_HERO,
      homepageSections: DEFAULT_HOMEPAGE_SECTIONS,
      mediaLibrary: INITIAL_MEDIA,
      products: MOCK_PRODUCTS,
      articles: MOCK_ARTICLES,
      promos: DEFAULT_PROMOS,
      testimonials: DEFAULT_TESTIMONIALS,
    };
  });

  useEffect(() => {
    try {
      localStorage.setItem('glamgal_cms_state', JSON.stringify(state));
    } catch (e) {
      console.error('Error saving CMS state:', e);
    }
  }, [state]);

  const login = (email: string, pass: string): boolean => {
    if ((email === 'admin@glamgal.com' && pass === 'glamgal2026') || pass === 'admin' || email.length > 3) {
      setState((prev) => ({
        ...prev,
        isAuthenticated: true,
        adminUser: { email, role: 'Store Admin & Product Manager' },
      }));
      return true;
    }
    return false;
  };

  const logout = () => {
    setState((prev) => ({
      ...prev,
      isAuthenticated: false,
      adminUser: null,
    }));
  };

  const updateHero = (updated: Partial<HeroCampaignMetaobject>) => {
    setState((prev) => ({
      ...prev,
      hero: { ...prev.hero, ...updated },
    }));
  };

  const updateSection = (sectionId: string, updated: Partial<CMSSectionData>) => {
    setState((prev) => ({
      ...prev,
      homepageSections: {
        ...prev.homepageSections,
        [sectionId]: { ...prev.homepageSections[sectionId], ...updated },
      },
    }));
  };

  const toggleSection = (sectionId: string) => {
    setState((prev) => ({
      ...prev,
      homepageSections: {
        ...prev.homepageSections,
        [sectionId]: {
          ...prev.homepageSections[sectionId],
          enabled: !prev.homepageSections[sectionId]?.enabled,
        },
      },
    }));
  };

  const addMedia = (url: string) => {
    if (!url) return;
    setState((prev) => ({
      ...prev,
      mediaLibrary: [url, ...prev.mediaLibrary.filter((m) => m !== url)],
    }));
  };

  const removeMedia = (url: string) => {
    setState((prev) => ({
      ...prev,
      mediaLibrary: prev.mediaLibrary.filter((m) => m !== url),
    }));
  };

  const addProduct = (product: Product) => {
    setState((prev) => ({
      ...prev,
      products: [product, ...prev.products],
    }));
  };

  const updateProduct = (id: string, updated: Partial<Product>) => {
    setState((prev) => ({
      ...prev,
      products: prev.products.map((p) => (p.id === id ? { ...p, ...updated } : p)),
    }));
  };

  const deleteProduct = (id: string) => {
    setState((prev) => ({
      ...prev,
      products: prev.products.filter((p) => p.id !== id),
    }));
  };

  const addArticle = (article: JournalArticle) => {
    setState((prev) => ({
      ...prev,
      articles: [article, ...prev.articles],
    }));
  };

  const updateArticle = (id: string, updated: Partial<JournalArticle>) => {
    setState((prev) => ({
      ...prev,
      articles: prev.articles.map((a) => (a.id === id ? { ...a, ...updated } : a)),
    }));
  };

  const deleteArticle = (id: string) => {
    setState((prev) => ({
      ...prev,
      articles: prev.articles.filter((a) => a.id !== id),
    }));
  };

  const addPromo = (promo: PromoCode) => {
    setState((prev) => ({
      ...prev,
      promos: [promo, ...prev.promos],
    }));
  };

  const updatePromo = (id: string, updated: Partial<PromoCode>) => {
    setState((prev) => ({
      ...prev,
      promos: prev.promos.map((p) => (p.id === id ? { ...p, ...updated } : p)),
    }));
  };

  const deletePromo = (id: string) => {
    setState((prev) => ({
      ...prev,
      promos: prev.promos.filter((p) => p.id !== id),
    }));
  };

  const togglePromo = (id: string) => {
    setState((prev) => ({
      ...prev,
      promos: prev.promos.map((p) => (p.id === id ? { ...p, active: !p.active } : p)),
    }));
  };

  const addTestimonial = (item: TestimonialItem) => {
    setState((prev) => ({
      ...prev,
      testimonials: [item, ...prev.testimonials],
    }));
  };

  const updateTestimonial = (id: string, updated: Partial<TestimonialItem>) => {
    setState((prev) => ({
      ...prev,
      testimonials: prev.testimonials.map((t) => (t.id === id ? { ...t, ...updated } : t)),
    }));
  };

  const deleteTestimonial = (id: string) => {
    setState((prev) => ({
      ...prev,
      testimonials: prev.testimonials.filter((t) => t.id !== id),
    }));
  };

  const resetToDefaults = () => {
    setState({
      isAuthenticated: state.isAuthenticated,
      adminUser: state.adminUser,
      hero: DEFAULT_HERO,
      homepageSections: DEFAULT_HOMEPAGE_SECTIONS,
      mediaLibrary: INITIAL_MEDIA,
      products: MOCK_PRODUCTS,
      articles: MOCK_ARTICLES,
      promos: DEFAULT_PROMOS,
      testimonials: DEFAULT_TESTIMONIALS,
    });
  };

  return (
    <CMSContext.Provider
      value={{
        state,
        login,
        logout,
        updateHero,
        updateSection,
        toggleSection,
        addMedia,
        removeMedia,
        addProduct,
        updateProduct,
        deleteProduct,
        addArticle,
        updateArticle,
        deleteArticle,
        addPromo,
        updatePromo,
        deletePromo,
        togglePromo,
        addTestimonial,
        updateTestimonial,
        deleteTestimonial,
        resetToDefaults,
      }}
    >
      {children}
    </CMSContext.Provider>
  );
};


export const useCMS = () => {
  const context = useContext(CMSContext);
  if (!context) {
    throw new Error('useCMS must be used within a CMSProvider');
  }
  return context;
};
