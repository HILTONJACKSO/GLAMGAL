export interface Image {
  id?: string;
  url: string;
  altText?: string;
  width?: number;
  height?: number;
}

export interface Money {
  amount: string;
  currencyCode: string;
}

export interface SelectedOption {
  name: string;
  value: string;
}

export interface ProductVariant {
  id: string;
  title: string;
  availableForSale: boolean;
  selectedOptions: SelectedOption[];
  price: Money;
  compareAtPrice?: Money | null;
  image?: Image | null;
  sku?: string;
  shadeHex?: string;
  shadeImage?: string;
  size?: string;
}

export interface ProductBadge {
  text: string;
  type: 'new' | 'best-seller' | 'limited' | 'vegan' | 'award';
}

export interface Product {
  id: string;
  handle: string;
  title: string;
  subtitle?: string;
  description: string;
  descriptionHtml?: string;
  category: string; // 'Skincare' | 'Makeup' | 'Body Care' | 'Beauty Tools'
  productType: string;
  vendor: string;
  availableForSale: boolean;
  tags: string[];
  priceRange: {
    minVariantPrice: Money;
    maxVariantPrice: Money;
  };
  compareAtPriceRange?: {
    minVariantPrice: Money;
    maxVariantPrice: Money;
  } | null;
  images: Image[];
  featuredImage: Image;
  secondaryImage?: Image;
  variants: ProductVariant[];
  options: {
    name: string;
    values: string[];
  }[];
  metafields?: {
    keyBenefits?: string[];
    howToUse?: string;
    fullIngredients?: string;
    skinTypes?: string[];
    beautyConcerns?: string[];
    finish?: string;
    size?: string;
    shadeDescription?: string;
    usageWarning?: string;
  };
  rating?: number;
  reviewCount?: number;
  badges?: ProductBadge[];
}

export interface Collection {
  id: string;
  handle: string;
  title: string;
  description: string;
  image?: Image | null;
  products: Product[];
  productCount: number;
}

export interface CartLine {
  id: string;
  quantity: number;
  cost: {
    totalAmount: Money;
  };
  merchandise: {
    id: string;
    title: string;
    product: {
      id: string;
      handle: string;
      title: string;
      featuredImage: Image;
      category: string;
    };
    price: Money;
    compareAtPrice?: Money | null;
    selectedOptions: SelectedOption[];
    image?: Image | null;
  };
}

export interface Cart {
  id: string;
  checkoutUrl: string;
  totalQuantity: number;
  lines: CartLine[];
  cost: {
    subtotalAmount: Money;
    totalAmount: Money;
    totalTaxAmount?: Money | null;
    totalDutyAmount?: Money | null;
  };
  discountCodes?: Array<{
    code: string;
    applicable: boolean;
  }>;
}

export interface BeautyIngredient {
  id: string;
  name: string;
  shortDescription: string;
  fullDetails: string;
  image: string;
  benefits: string[];
  featuredProductHandles: string[];
}

export interface BeautyRoutineStep {
  stepNumber: number;
  title: string;
  instruction: string;
  productHandle: string;
}

export interface BeautyRoutine {
  id: string;
  handle: string;
  title: string;
  subtitle: string;
  goal: string; // 'Hydration', 'Glow', 'Everyday Glam', etc.
  durationMinutes: number;
  coverImage: string;
  description: string;
  steps: BeautyRoutineStep[];
  recommendedSkinTypes: string[];
}

export interface JournalArticle {
  id: string;
  handle: string;
  title: string;
  summary: string;
  contentHtml: string;
  author: string;
  publishedAt: string;
  readTime: string;
  category: string;
  coverImage: string;
  relatedProductHandles: string[];
}

export interface HeroCampaignMetaobject {
  heading: string;
  subheading: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  featuredImageUrl?: string;
  desktopImage?: string;
  mobileImage?: string;
  theme?: 'dark' | 'light';
  featuredProducts?: Product[];
}

export interface AnnouncementMetaobject {
  id: string;
  message: string;
  link?: string;
  active: boolean;
}

export interface TestimonialItem {
  id: string;
  name: string;
  rating: number;
  testimonial: string;
  productPurchased: string;
  productHandle: string;
  verified: boolean;
  skinType?: string;
}

export interface PromoCode {
  id: string;
  code: string;
  discountType: 'percentage' | 'fixed' | 'free_shipping';
  discountValue: number;
  description: string;
  minSpend?: number;
  active: boolean;
  appliesTo: string;
}


