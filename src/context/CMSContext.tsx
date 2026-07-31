import React, { createContext, useContext, useState, useEffect } from 'react';
import { HeroCampaignMetaobject, Product, JournalArticle } from '../types/shopify';
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
  resetToDefaults: () => void;
}

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
        return {
          ...parsed,
          products: parsed.products && parsed.products.length > 0 ? parsed.products : MOCK_PRODUCTS,
          articles: parsed.articles && parsed.articles.length > 0 ? parsed.articles : MOCK_ARTICLES,
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

  const resetToDefaults = () => {
    setState({
      isAuthenticated: state.isAuthenticated,
      adminUser: state.adminUser,
      hero: DEFAULT_HERO,
      homepageSections: DEFAULT_HOMEPAGE_SECTIONS,
      mediaLibrary: INITIAL_MEDIA,
      products: MOCK_PRODUCTS,
      articles: MOCK_ARTICLES,
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
