import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  HeroCampaignMetaobject,
  Product,
  JournalArticle,
  PromoCode,
  TestimonialItem,
  SocialPost,
  VideoShowcaseItem,
} from '../types/shopify';
import { MOCK_PRODUCTS, MOCK_ARTICLES } from '../lib/shopify/mock-adapter';

export interface FooterSettings {
  brandDescription: string;
  instagramUrl: string;
  tiktokUrl: string;
  facebookUrl: string;
  youtubeUrl: string;
  copyrightText: string;
  showNewsletter: boolean;
  showPaymentBadges: boolean;
  countryCurrency: string;
}

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
  socialPosts: SocialPost[];
  footerSettings: FooterSettings;
  videos: VideoShowcaseItem[];
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
  addSocialPost: (post: SocialPost) => void;
  updateSocialPost: (id: string, updated: Partial<SocialPost>) => void;
  deleteSocialPost: (id: string) => void;
  addVideo: (video: VideoShowcaseItem) => void;
  updateVideo: (id: string, updated: Partial<VideoShowcaseItem>) => void;
  deleteVideo: (id: string) => void;
  updateFooterSettings: (updated: Partial<FooterSettings>) => void;
  resetToDefaults: () => void;
}

const DEFAULT_SOCIAL_POSTS: SocialPost[] = [
  {
    id: 'post-1',
    url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    tag: '@glamgalbeauty',
    username: 'glamgalbeauty',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    location: 'SoHo, New York',
    likes: 1428,
    commentsCount: 34,
    caption: 'Glass-skin glow achieved ✨ Step 1: Calming Rosewater Toner. Step 2: Cellular Hydration Peptide Serum. Who else is obsessed with this combo?',
    timeAgo: '2 HOURS AGO',
    isVerified: true,
    featuredProduct: {
      name: 'Rosewater Hydration Mist',
      price: '$38.00',
      image: '/calming_rosewater_toner_mockup.png',
      link: '/products/rosewater-hydration-mist'
    }
  },
  {
    id: 'post-2',
    url: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=800&q=80',
    tag: '#GLAMGALGlow',
    username: 'glamgalbeauty',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
    location: 'Le Marais, Paris',
    likes: 3892,
    commentsCount: 89,
    caption: 'Golden hour moments hit different when your lip game is Velvet Matte Couture 💄 Shade: Royal Velvet. Tag us in your #GLAMGALGlow looks!',
    timeAgo: '6 HOURS AGO',
    isVerified: true,
    featuredProduct: {
      name: 'Liquid Velvet Lipstick',
      price: '$32.00',
      image: '/liquid_velvet_lipstick_mockup.png',
      link: '/products/liquid-velvet-lipstick'
    }
  },
  {
    id: 'post-3',
    url: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80',
    tag: '#GLAMGALRoutine',
    username: 'glamgalbeauty',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    location: 'Beverly Hills, CA',
    likes: 2150,
    commentsCount: 45,
    caption: 'Sunday ritual with our Obsidian Volcanic Sculpting Stone. Smooth skin, enhanced blood circulation & instant tension release ✨ #GLAMGALRoutine',
    timeAgo: '1 DAY AGO',
    isVerified: true,
    featuredProduct: {
      name: 'Obsidian Sculpting Gua Sha',
      price: '$45.00',
      image: '/ultimate_brow_eye_cream_liner_mockup.png',
      link: '/products/obsidian-sculpting-gua-sha'
    }
  },
  {
    id: 'post-4',
    url: 'https://images.unsplash.com/photo-1608248597263-00079996576f?auto=format&fit=crop&w=800&q=80',
    tag: '@glamgalbeauty',
    username: 'glamgalbeauty',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    location: 'Mayfair, London',
    likes: 4105,
    commentsCount: 112,
    caption: 'Backstage at Fashion Week! Ultra-luxe texture, non-drying formula & 12hr weightless coverage. Tag @glamgalbeauty to be featured next 💋',
    timeAgo: '2 DAYS AGO',
    isVerified: true,
    featuredProduct: {
      name: 'Polished Body Scrub',
      price: '$42.00',
      image: '/polished_smoothing_body_scrub_mockup.png',
      link: '/products/polished-smoothing-body-scrub'
    }
  }
];

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
  socialGallery: {
    id: 'socialGallery',
    title: 'JOIN THE GLAMGAL BEAUTY COMMUNITY',
    subtitle: '@GLAMGALBEAUTY',
    description: 'Tag @glamgalbeauty on Instagram & TikTok to be featured on our official global gallery.',
    ctaText: 'FOLLOW ON INSTAGRAM',
    ctaLink: 'https://instagram.com',
    enabled: true,
  },
  testimonials: {
    id: 'testimonials',
    title: 'COMMUNITY PRAISE',
    subtitle: '4.9 OUT OF 5 STARS • 1,200+ VERIFIED REVIEWS',
    description: 'Real feedback and verified experiences from our GLAMGAL beauty community.',
    enabled: true,
  },
  videoShowcase: {
    id: 'videoShowcase',
    title: 'SEE GLAMGAL IN ACTION',
    subtitle: 'COUTURE IN MOTION',
    description: 'Watch high-definition texture reels, application tutorials, and real results from our lab artists.',
    enabled: true,
  },
};

const DEFAULT_VIDEOS: VideoShowcaseItem[] = [
  {
    id: 'vid-1',
    title: 'Velvet Matte Lipstick Swatch & One-Swipe Application',
    subtitle: 'Watch Sora Kim demonstrate non-drying matte application with micro-hyaluronic spheres.',
    duration: '0:45',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    posterImage: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=800&q=80',
    authorName: 'Sora Kim',
    authorRole: 'Global Editorial Makeup Artist',
    featuredProductHandle: 'velvet-matte-lipstick',
    featuredProductName: 'VELVET MATTE COUTURE LIPSTICK',
    featuredProductPrice: '$38.00',
    featuredProductImage: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'vid-2',
    title: 'Luminous Barrier Serum 72-Hour Glass Skin Glow',
    subtitle: 'Triple Peptide & Hyaluronic Acid dropper application for barrier recovery & glossy dew.',
    duration: '1:12',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoypasses.mp4',
    posterImage: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80',
    authorName: 'Dr. Elena Vance',
    authorRole: 'Lead Chemist',
    featuredProductHandle: 'luminous-barrier-serum',
    featuredProductName: 'LUMINOUS BARRIER SERUM',
    featuredProductPrice: '$68.00',
    featuredProductImage: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'vid-3',
    title: 'Obsidian Volcanic Stone Gua Sha Facial Sculpting Ritual',
    subtitle: '5-minute lymphatic drainage tutorial for sculpted cheekbones & jawline tension release.',
    duration: '1:30',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
    posterImage: '/ultimate_brow_eye_cream_liner_mockup.png',
    authorName: 'Maya Lin',
    authorRole: 'Facial Sculpting Specialist',
    featuredProductHandle: 'precision-contour-gua-sha',
    featuredProductName: 'OBSIDIAN PRECISION CONTOUR GUA SHA',
    featuredProductPrice: '$45.00',
    featuredProductImage: '/ultimate_brow_eye_cream_liner_mockup.png',
  },
  {
    id: 'vid-4',
    title: 'Sculpting Glow Body Nectar Shimmer Demonstration',
    subtitle: 'Marula oil & gold shimmer micro-pearls for silky shoulder & collarbone radiance.',
    duration: '0:50',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    posterImage: '/polished_smoothing_body_scrub_mockup.png',
    authorName: 'Chloe Bennett',
    authorRole: 'Body Care Director',
    featuredProductHandle: 'sculpting-body-nectar',
    featuredProductName: 'SCULPTING GLOW BODY NECTAR',
    featuredProductPrice: '$72.00',
    featuredProductImage: '/polished_smoothing_body_scrub_mockup.png',
  },
];


const DEFAULT_FOOTER_SETTINGS: FooterSettings = {
  brandDescription:
    'GLAMGAL is a modern luxury beauty brand delivering high-impact couture makeup, skin-first care, and everyday essentials crafted for confident self-expression.',
  instagramUrl: 'https://instagram.com',
  tiktokUrl: 'https://tiktok.com',
  facebookUrl: 'https://facebook.com',
  youtubeUrl: 'https://youtube.com',
  copyrightText: '© 2026 GLAMGAL Beauty Inc. All rights reserved.',
  showNewsletter: true,
  showPaymentBadges: true,
  countryCurrency: 'United States (USD $)',
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
        // Ensure all catalog products from MOCK_PRODUCTS are loaded alongside saved products
        const savedProducts: Product[] = parsed.products && parsed.products.length > 0 ? parsed.products : MOCK_PRODUCTS;
        const missingProducts = MOCK_PRODUCTS.filter(
          (m) => !savedProducts.some((p) => p.id === m.id || p.handle === m.handle)
        );
        const rawProducts: Product[] = [...savedProducts, ...missingProducts];

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

        const rawVideos: VideoShowcaseItem[] = parsed.videos && parsed.videos.length > 0 ? parsed.videos : DEFAULT_VIDEOS;
        const sanitizedVideos = rawVideos.map((v) => {
          if (!v.videoUrl || v.videoUrl.includes('mixkit.co')) {
            const fresh = DEFAULT_VIDEOS.find((d) => d.id === v.id);
            return fresh ? { ...v, videoUrl: fresh.videoUrl } : { ...v, videoUrl: DEFAULT_VIDEOS[0].videoUrl };
          }
          return v;
        });

        return {
          ...parsed,
          hero: heroState,
          homepageSections: { ...DEFAULT_HOMEPAGE_SECTIONS, ...parsed.homepageSections },
          products: sanitizedProducts,
          articles: parsed.articles && parsed.articles.length > 0 ? parsed.articles : MOCK_ARTICLES,
          promos: parsed.promos && parsed.promos.length > 0 ? parsed.promos : DEFAULT_PROMOS,
          testimonials: parsed.testimonials && parsed.testimonials.length > 0 ? parsed.testimonials : DEFAULT_TESTIMONIALS,
          socialPosts: parsed.socialPosts && parsed.socialPosts.length > 0 ? parsed.socialPosts : DEFAULT_SOCIAL_POSTS,
          footerSettings: parsed.footerSettings || DEFAULT_FOOTER_SETTINGS,
          videos: sanitizedVideos,
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
      socialPosts: DEFAULT_SOCIAL_POSTS,
      footerSettings: DEFAULT_FOOTER_SETTINGS,
      videos: DEFAULT_VIDEOS,
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
    setState((prev) => ({
      ...prev,
      mediaLibrary: [url, ...prev.mediaLibrary],
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

  const addSocialPost = (post: SocialPost) => {
    setState((prev) => ({
      ...prev,
      socialPosts: [post, ...prev.socialPosts],
    }));
  };

  const updateSocialPost = (id: string, updated: Partial<SocialPost>) => {
    setState((prev) => ({
      ...prev,
      socialPosts: prev.socialPosts.map((sp) => (sp.id === id ? { ...sp, ...updated } : sp)),
    }));
  };

  const deleteSocialPost = (id: string) => {
    setState((prev) => ({
      ...prev,
      socialPosts: prev.socialPosts.filter((sp) => sp.id !== id),
    }));
  };

  const addVideo = (video: VideoShowcaseItem) => {
    setState((prev) => ({
      ...prev,
      videos: [video, ...prev.videos],
    }));
  };

  const updateVideo = (id: string, updated: Partial<VideoShowcaseItem>) => {
    setState((prev) => ({
      ...prev,
      videos: prev.videos.map((v) => (v.id === id ? { ...v, ...updated } : v)),
    }));
  };

  const deleteVideo = (id: string) => {
    setState((prev) => ({
      ...prev,
      videos: prev.videos.filter((v) => v.id !== id),
    }));
  };

  const updateFooterSettings = (updated: Partial<FooterSettings>) => {
    setState((prev) => ({
      ...prev,
      footerSettings: { ...prev.footerSettings, ...updated },
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
      socialPosts: DEFAULT_SOCIAL_POSTS,
      footerSettings: DEFAULT_FOOTER_SETTINGS,
      videos: DEFAULT_VIDEOS,
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
        addSocialPost,
        updateSocialPost,
        deleteSocialPost,
        addVideo,
        updateVideo,
        deleteVideo,
        updateFooterSettings,
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
