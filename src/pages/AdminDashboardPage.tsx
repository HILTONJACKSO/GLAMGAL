import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useCMS } from '../context/CMSContext';
import { Product, JournalArticle, PromoCode, TestimonialItem, SocialPost, VideoShowcaseItem } from '../types/shopify';
import { SEO } from '../components/common/SEO';
import {
  LayoutDashboard,
  Image as ImageIcon,
  FileText,
  Settings,
  LogOut,
  Upload,
  Save,
  Check,
  Plus,
  Trash2,
  Eye,
  ExternalLink,
  Sparkles,
  Layers,
  ShoppingBag,
  RefreshCw,
  Edit3,
  X,
  Package,
  Key,
  Globe,
  AlertTriangle,
  BookOpen,
  Tag,
  Star,
  MessageSquareQuote,
  CheckCircle,
  Instagram,
  Heart,
  MessageCircle,
  Video,
  Play,
} from 'lucide-react';

export const AdminDashboardPage: React.FC = () => {
  const {
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
  } = useCMS();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState<'reviews' | 'promos' | 'products' | 'journal' | 'hero' | 'homepage' | 'social' | 'videos' | 'media' | 'pages' | 'footer' | 'shopify'>('reviews');
  const [saveNotification, setSaveNotification] = useState('');
  const [newImageUrl, setNewImageUrl] = useState('');
  
  // Video Modal State
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [editingVideo, setEditingVideo] = useState<VideoShowcaseItem | null>(null);
  const [vidTitle, setVidTitle] = useState('');
  const [vidSubtitle, setVidSubtitle] = useState('');
  const [vidDuration, setVidDuration] = useState('0:45');
  const [vidUrl, setVidUrl] = useState('');
  const [vidPosterImage, setVidPosterImage] = useState('');
  const [vidAuthorName, setVidAuthorName] = useState('');
  const [vidAuthorRole, setVidAuthorRole] = useState('');
  const [vidProdHandle, setVidProdHandle] = useState('');
  const [vidProdName, setVidProdName] = useState('');
  const [vidProdPrice, setVidProdPrice] = useState('$38.00');
  const [vidProdImage, setVidProdImage] = useState('');

  // Product Modal State
  const [showAddProductModal, setShowAddProductModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  // Journal Modal State
  const [showArticleModal, setShowArticleModal] = useState(false);
  const [editingArticle, setEditingArticle] = useState<JournalArticle | null>(null);

  // Promo Modal State
  const [showPromoModal, setShowPromoModal] = useState(false);
  const [editingPromo, setEditingPromo] = useState<PromoCode | null>(null);

  // Testimonial Review Modal State
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [editingReview, setEditingReview] = useState<TestimonialItem | null>(null);

  // Review Form State
  const [revName, setRevName] = useState('SOPHIA V.');
  const [revRating, setRevRating] = useState('5');
  const [revQuote, setRevQuote] = useState('The Luminous Barrier Serum completely transformed my skin texture in less than a week.');
  const [revProductPurchased, setRevProductPurchased] = useState('LUMINOUS BARRIER SERUM');
  const [revProductHandle, setRevProductHandle] = useState('luminous-barrier-serum');
  const [revSkinType, setRevSkinType] = useState('Sensitive & Dry Skin');
  const [revVerified, setRevVerified] = useState(true);

  // Shopify Credentials State
  const [shopifyDomain, setShopifyDomain] = useState(
    import.meta.env.VITE_PUBLIC_STORE_DOMAIN || 'glamgal-beauty.myshopify.com'
  );
  const [shopifyToken, setShopifyToken] = useState(
    import.meta.env.VITE_PUBLIC_STOREFRONT_API_TOKEN || 'c781d4e08a01f901a88b'
  );

  // Hero Image Picker State
  const [heroImage, setHeroImage] = useState<string>(state.hero.featuredImageUrl || '/hero_model.png');

  // Product Form State
  const [prodTitle, setProdTitle] = useState('');
  const [prodSubtitle, setProdSubtitle] = useState('');
  const [prodCategory, setProdCategory] = useState<'Skincare' | 'Makeup' | 'Body Care' | 'Beauty Tools'>('Skincare');
  const [prodPrice, setProdPrice] = useState('58.00');
  const [prodComparePrice, setProdComparePrice] = useState('70.00');
  const [prodImage, setProdImage] = useState('https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80');
  const [prodDescription, setProdDescription] = useState('High-performance botanical formulation engineered for skin radiance and moisture barrier repair.');
  const [prodBadge, setProdBadge] = useState('NEW');

  // Article Form State
  const [artTitle, setArtTitle] = useState('');
  const [artSummary, setArtSummary] = useState('');
  const [artCategory, setArtCategory] = useState('Skincare Education');
  const [artAuthor, setArtAuthor] = useState('Dr. Elena Vance, Lead Chemist');
  const [artReadTime, setArtReadTime] = useState('4 min read');
  const [artCoverImage, setArtCoverImage] = useState('https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1000&q=80');
  const [artContentHtml, setArtContentHtml] = useState('<p class="lead">Understanding the architecture of your skin barrier is the first step toward achieving lasting radiance.</p>');

  // Promo Form State
  const [promoCodeText, setPromoCodeText] = useState('GLAM20');
  const [promoType, setPromoType] = useState<'percentage' | 'fixed' | 'free_shipping'>('percentage');
  const [promoValue, setPromoValue] = useState('20');
  const [promoDesc, setPromoDesc] = useState('20% OFF all luxury beauty formulations & couture lipstick');
  const [promoMinSpend, setPromoMinSpend] = useState('50');
  const [promoAppliesTo, setPromoAppliesTo] = useState('All Products');

  if (!state.isAuthenticated) {
    return (
      <div className="min-h-screen bg-obsidian text-warm-white flex items-center justify-center p-6 text-center space-y-4">
        <div className="space-y-4 max-w-md bg-[#141414] p-8 rounded-2xl border border-deep-charcoal">
          <h2 className="font-display text-xl uppercase font-bold text-warm-white">ACCESS RESTRICTED</h2>
          <p className="text-xs text-soft-stone font-body">Please log in with admin credentials to access the GLAMGAL CMS control center.</p>
          <Link
            to="/admin/login"
            className="inline-block bg-warm-white text-obsidian font-display text-xs tracking-widest px-6 py-3 rounded-full uppercase font-bold hover:bg-[#B89275] hover:text-white transition-colors"
          >
            GO TO ADMIN LOGIN →
          </Link>
        </div>
      </div>
    );
  }

  const triggerSaveNotification = (msg: string) => {
    setSaveNotification(msg);
    setTimeout(() => setSaveNotification(''), 3000);
  };

  const handleCreateOrUpdateReview = (e: React.FormEvent) => {
    e.preventDefault();
    const ratingNum = parseInt(revRating, 10) || 5;
    const cleanHandle = revProductHandle || revProductPurchased.toLowerCase().replace(/[^a-z0-9]+/g, '-');

    if (editingReview) {
      updateTestimonial(editingReview.id, {
        name: revName,
        rating: ratingNum,
        testimonial: revQuote,
        productPurchased: revProductPurchased,
        productHandle: cleanHandle,
        verified: revVerified,
        skinType: revSkinType,
      });
      triggerSaveNotification(`Updated review from "${revName}"!`);
    } else {
      const newRev: TestimonialItem = {
        id: `t-${Date.now()}`,
        name: revName,
        rating: ratingNum,
        testimonial: revQuote,
        productPurchased: revProductPurchased,
        productHandle: cleanHandle,
        verified: revVerified,
        skinType: revSkinType,
      };
      addTestimonial(newRev);
      triggerSaveNotification(`Added new buyer review from "${revName}"!`);
    }

    setShowReviewModal(false);
    setEditingReview(null);
    resetReviewForm();
  };

  const handleStartEditReview = (item: TestimonialItem) => {
    setEditingReview(item);
    setRevName(item.name);
    setRevRating(item.rating.toString());
    setRevQuote(item.testimonial);
    setRevProductPurchased(item.productPurchased);
    setRevProductHandle(item.productHandle);
    setRevSkinType(item.skinType || '');
    setRevVerified(item.verified);
    setShowReviewModal(true);
  };

  const resetReviewForm = () => {
    setRevName('');
    setRevRating('5');
    setRevQuote('');
    setRevProductPurchased('');
    setRevProductHandle('');
    setRevSkinType('');
    setRevVerified(true);
  };

  const handleShopifyCredentialsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    triggerSaveNotification(`Saved Shopify domain "${shopifyDomain}" & Access Token!`);
  };

  const handleCreateOrUpdatePromo = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanCode = promoCodeText.toUpperCase().trim();
    const val = parseFloat(promoValue) || 0;
    const spend = promoMinSpend ? parseFloat(promoMinSpend) : undefined;

    if (editingPromo) {
      updatePromo(editingPromo.id, {
        code: cleanCode,
        discountType: promoType,
        discountValue: val,
        description: promoDesc,
        minSpend: spend,
        appliesTo: promoAppliesTo,
      });
      triggerSaveNotification(`Updated promo code "${cleanCode}"!`);
    } else {
      const newP: PromoCode = {
        id: `promo-${Date.now()}`,
        code: cleanCode,
        discountType: promoType,
        discountValue: val,
        description: promoDesc,
        minSpend: spend,
        active: true,
        appliesTo: promoAppliesTo,
      };
      addPromo(newP);
      triggerSaveNotification(`Added discount code "${cleanCode}"!`);
    }

    setShowPromoModal(false);
    setEditingPromo(null);
    resetPromoForm();
  };

  const handleStartEditPromo = (promo: PromoCode) => {
    setEditingPromo(promo);
    setPromoCodeText(promo.code);
    setPromoType(promo.discountType);
    setPromoValue(promo.discountValue.toString());
    setPromoDesc(promo.description);
    setPromoMinSpend(promo.minSpend ? promo.minSpend.toString() : '');
    setPromoAppliesTo(promo.appliesTo);
    setShowPromoModal(true);
  };

  const resetPromoForm = () => {
    setPromoCodeText('');
    setPromoType('percentage');
    setPromoValue('20');
    setPromoDesc('20% OFF all luxury beauty formulations & couture lipstick');
    setPromoMinSpend('50');
    setPromoAppliesTo('All Products');
  };

  const handleHeroFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setHeroImage(result);
          addMedia(result);
          triggerSaveNotification(`Selected uploaded image "${file.name}" for Hero Banner!`);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleProductFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setProdImage(result);
          addMedia(result);
          triggerSaveNotification(`Uploaded product photo "${file.name}"!`);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleArticleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setArtCoverImage(result);
          addMedia(result);
          triggerSaveNotification(`Uploaded cover photo "${file.name}" for Journal!`);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCreateOrUpdateArticle = (e: React.FormEvent) => {
    e.preventDefault();
    const handle = artTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

    if (editingArticle) {
      updateArticle(editingArticle.id, {
        title: artTitle,
        summary: artSummary,
        category: artCategory,
        author: artAuthor,
        readTime: artReadTime,
        coverImage: artCoverImage,
        contentHtml: artContentHtml,
      });
      triggerSaveNotification(`Updated Journal article "${artTitle}"!`);
    } else {
      const newArt: JournalArticle = {
        id: `art-${Date.now()}`,
        handle: handle || `article-${Date.now()}`,
        title: artTitle,
        summary: artSummary,
        category: artCategory,
        author: artAuthor,
        publishedAt: new Date().toISOString().split('T')[0],
        readTime: artReadTime,
        coverImage: artCoverImage,
        contentHtml: artContentHtml,
        relatedProductHandles: ['luminous-barrier-serum'],
      };
      addArticle(newArt);
      triggerSaveNotification(`Published new Journal article "${artTitle}"!`);
    }

    setShowArticleModal(false);
    setEditingArticle(null);
    resetArticleForm();
  };

  const handleStartEditArticle = (article: JournalArticle) => {
    setEditingArticle(article);
    setArtTitle(article.title);
    setArtSummary(article.summary);
    setArtCategory(article.category);
    setArtAuthor(article.author);
    setArtReadTime(article.readTime);
    setArtCoverImage(article.coverImage);
    setArtContentHtml(article.contentHtml);
    setShowArticleModal(true);
  };

  const resetArticleForm = () => {
    setArtTitle('');
    setArtSummary('');
    setArtCategory('Skincare Education');
    setArtAuthor('Dr. Elena Vance, Lead Chemist');
    setArtReadTime('4 min read');
    setArtCoverImage('https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1000&q=80');
    setArtContentHtml('<p class="lead">Understanding the architecture of your skin barrier is the first step toward achieving lasting radiance.</p>');
  };

  const handleCreateOrUpdateProduct = (e: React.FormEvent) => {
    e.preventDefault();
    const handle = prodTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
    const priceStr = parseFloat(prodPrice).toFixed(2);
    const compareStr = prodComparePrice ? parseFloat(prodComparePrice).toFixed(2) : undefined;

    if (editingProduct) {
      updateProduct(editingProduct.id, {
        title: prodTitle,
        subtitle: prodSubtitle,
        category: prodCategory,
        priceRange: {
          minVariantPrice: { amount: priceStr, currencyCode: 'USD' },
          maxVariantPrice: { amount: priceStr, currencyCode: 'USD' },
        },
        featuredImage: { id: `img-${Date.now()}`, url: prodImage, altText: prodTitle },
        description: prodDescription,
        badges: prodBadge ? [{ text: prodBadge, type: prodBadge.toLowerCase().includes('best') ? 'best-seller' : 'new' }] : [],
        variants: [
          {
            id: editingProduct.variants[0]?.id || `gid://shopify/ProductVariant/${Date.now()}`,
            title: 'Default Variant',
            availableForSale: true,
            selectedOptions: [{ name: 'Option', value: 'Default' }],
            price: { amount: priceStr, currencyCode: 'USD' },
            compareAtPrice: compareStr ? { amount: compareStr, currencyCode: 'USD' } : undefined,
          },
        ],
      });
      triggerSaveNotification(`Updated product "${prodTitle}"!`);
    } else {
      const newProd: Product = {
        id: `gid://shopify/Product/${Date.now()}`,
        handle: handle || `product-${Date.now()}`,
        title: prodTitle,
        subtitle: prodSubtitle,
        description: prodDescription,
        category: prodCategory,
        productType: prodCategory,
        vendor: 'GLAMGAL',
        availableForSale: true,
        tags: [prodCategory, 'CMS Created'],
        priceRange: {
          minVariantPrice: { amount: priceStr, currencyCode: 'USD' },
          maxVariantPrice: { amount: priceStr, currencyCode: 'USD' },
        },
        compareAtPriceRange: compareStr
          ? {
              minVariantPrice: { amount: compareStr, currencyCode: 'USD' },
              maxVariantPrice: { amount: compareStr, currencyCode: 'USD' },
            }
          : undefined,
        featuredImage: { id: `img-${Date.now()}`, url: prodImage, altText: prodTitle },
        images: [{ id: `img-${Date.now()}`, url: prodImage, altText: prodTitle }],
        options: [{ name: 'Option', values: ['Default'] }],
        variants: [
          {
            id: `gid://shopify/ProductVariant/${Date.now()}`,
            title: 'Default Variant',
            availableForSale: true,
            selectedOptions: [{ name: 'Option', value: 'Default' }],
            price: { amount: priceStr, currencyCode: 'USD' },
            compareAtPrice: compareStr ? { amount: compareStr, currencyCode: 'USD' } : undefined,
          },
        ],
        rating: 4.9,
        reviewCount: 48,
        badges: prodBadge ? [{ text: prodBadge, type: prodBadge.toLowerCase().includes('best') ? 'best-seller' : 'new' }] : [],
      };
      addProduct(newProd);
      triggerSaveNotification(`Added new product "${prodTitle}" to catalog!`);
    }

    setShowAddProductModal(false);
    setEditingProduct(null);
    resetProductForm();
  };

  const handleStartEdit = (product: Product) => {
    setEditingProduct(product);
    setProdTitle(product.title);
    setProdSubtitle(product.subtitle || '');
    setProdCategory((product.category as any) || 'Skincare');
    setProdPrice(product.variants[0]?.price.amount || product.priceRange.minVariantPrice.amount);
    setProdComparePrice(product.variants[0]?.compareAtPrice?.amount || '');
    setProdImage(product.featuredImage?.url || '');
    setProdDescription(product.description || '');
    setProdBadge(product.badges?.[0]?.text || 'NEW');
    setShowAddProductModal(true);
  };

  const resetProductForm = () => {
    setProdTitle('');
    setProdSubtitle('');
    setProdCategory('Skincare');
    setProdPrice('58.00');
    setProdPrice('70.00');
    setProdImage('https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80');
    setProdDescription('High-performance botanical formulation engineered for skin radiance and moisture barrier repair.');
    setProdBadge('NEW');
  };

  const handleHeroSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    updateHero({
      heading: formData.get('heading') as string,
      subheading: formData.get('subheading') as string,
      primaryCtaText: formData.get('primaryCtaText') as string,
      primaryCtaLink: formData.get('primaryCtaLink') as string,
      secondaryCtaText: formData.get('secondaryCtaText') as string,
      secondaryCtaLink: formData.get('secondaryCtaLink') as string,
      featuredImageUrl: heroImage,
    });
    triggerSaveNotification('Hero Campaign updated successfully!');
  };

  const [showSocialModal, setShowSocialModal] = useState(false);
  const [editingSocialPost, setEditingSocialPost] = useState<SocialPost | null>(null);
  const [spTag, setSpTag] = useState('@glamgalbeauty');
  const [spUsername, setSpUsername] = useState('glamgalbeauty');
  const [spAvatar, setSpAvatar] = useState('https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80');
  const [spLocation, setSpLocation] = useState('SoHo, New York');
  const [spLikes, setSpLikes] = useState(1450);
  const [spCommentsCount, setSpCommentsCount] = useState(42);
  const [spCaption, setSpCaption] = useState('');
  const [spTimeAgo, setSpTimeAgo] = useState('2 HOURS AGO');
  const [spUrl, setSpUrl] = useState('');
  const [spProductName, setSpProductName] = useState('');
  const [spProductPrice, setSpProductPrice] = useState('');
  const [spProductImage, setSpProductImage] = useState('');
  const [spProductLink, setSpProductLink] = useState('');

  const resetSocialPostForm = () => {
    setSpTag('@glamgalbeauty');
    setSpUsername('glamgalbeauty');
    setSpAvatar('https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80');
    setSpLocation('SoHo, New York');
    setSpLikes(1450);
    setSpCommentsCount(42);
    setSpCaption('Glass-skin glow achieved ✨ Tag @glamgalbeauty to be featured!');
    setSpTimeAgo('2 HOURS AGO');
    setSpUrl('https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80');
    setSpProductName('Rosewater Hydration Mist');
    setSpProductPrice('$38.00');
    setSpProductImage('/calming_rosewater_toner_mockup.png');
    setSpProductLink('/products/rosewater-hydration-mist');
  };

  const resetVideoForm = () => {
    setVidTitle('');
    setVidSubtitle('');
    setVidDuration('0:45');
    setVidUrl('https://assets.mixkit.co/videos/preview/mixkit-fashion-model-putting-on-lipstick-42930-large.mp4');
    setVidPosterImage('https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=800&q=80');
    setVidAuthorName('Sora Kim');
    setVidAuthorRole('Global Editorial Makeup Artist');
    setVidProdHandle('velvet-matte-lipstick');
    setVidProdName('VELVET MATTE COUTURE LIPSTICK');
    setVidProdPrice('$38.00');
    setVidProdImage('https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=80');
  };

  const handleCreateOrUpdateVideo = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingVideo) {
      updateVideo(editingVideo.id, {
        title: vidTitle,
        subtitle: vidSubtitle,
        duration: vidDuration,
        videoUrl: vidUrl,
        posterImage: vidPosterImage,
        authorName: vidAuthorName,
        authorRole: vidAuthorRole,
        featuredProductHandle: vidProdHandle,
        featuredProductName: vidProdName,
        featuredProductPrice: vidProdPrice,
        featuredProductImage: vidProdImage,
      });
      triggerSaveNotification('Video Reel updated live!');
    } else {
      const newVid: VideoShowcaseItem = {
        id: `vid-${Date.now()}`,
        title: vidTitle,
        subtitle: vidSubtitle,
        duration: vidDuration,
        videoUrl: vidUrl,
        posterImage: vidPosterImage,
        authorName: vidAuthorName,
        authorRole: vidAuthorRole,
        featuredProductHandle: vidProdHandle,
        featuredProductName: vidProdName,
        featuredProductPrice: vidProdPrice,
        featuredProductImage: vidProdImage,
      };
      addVideo(newVid);
      triggerSaveNotification('New Product Video Reel added to storefront!');
    }
    setShowVideoModal(false);
    setEditingVideo(null);
  };

  const handleStartEditSocialPost = (post: SocialPost) => {
    setEditingSocialPost(post);
    setSpTag(post.tag || '@glamgalbeauty');
    setSpUsername(post.username || 'glamgalbeauty');
    setSpAvatar(post.avatar || '');
    setSpLocation(post.location || '');
    setSpLikes(post.likes || 1000);
    setSpCommentsCount(post.commentsCount || 20);
    setSpCaption(post.caption || '');
    setSpTimeAgo(post.timeAgo || '1 HOUR AGO');
    setSpUrl(post.url || '');
    setSpProductName(post.featuredProduct?.name || '');
    setSpProductPrice(post.featuredProduct?.price || '');
    setSpProductImage(post.featuredProduct?.image || '');
    setSpProductLink(post.featuredProduct?.link || '');
    setShowSocialModal(true);
  };

  const handleCreateOrUpdateSocialPost = (e: React.FormEvent) => {
    e.preventDefault();
    const postData: SocialPost = {
      id: editingSocialPost ? editingSocialPost.id : `post-${Date.now()}`,
      tag: spTag,
      username: spUsername,
      avatar: spAvatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      location: spLocation,
      likes: Number(spLikes) || 100,
      commentsCount: Number(spCommentsCount) || 10,
      caption: spCaption,
      timeAgo: spTimeAgo,
      url: spUrl || 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
      isVerified: true,
      featuredProduct: spProductName ? {
        name: spProductName,
        price: spProductPrice || '$35.00',
        image: spProductImage || '/hero_model.png',
        link: spProductLink || '/collections/skincare'
      } : undefined
    };

    if (editingSocialPost) {
      updateSocialPost(editingSocialPost.id, postData);
      triggerSaveNotification(`Updated Instagram post "${postData.tag}"!`);
    } else {
      addSocialPost(postData);
      triggerSaveNotification(`Published new Instagram post "${postData.tag}"!`);
    }
    setShowSocialModal(false);
    setEditingSocialPost(null);
  };

  const handleUploadImage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newImageUrl.trim()) {
      addMedia(newImageUrl.trim());
      setNewImageUrl('');
      triggerSaveNotification('Image added to Media Library!');
    }
  };

  const handleFileUploadMock = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          addMedia(result);
          triggerSaveNotification(`Uploaded asset "${file.name}" to Media Library!`);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-warm-white flex flex-col font-body">
      <SEO title="Admin Control Center — GLAMGAL CMS" description="Manage products, buyer reviews, promo codes, journal articles, homepage sections & media assets." />

      {saveNotification && (
        <div className="fixed top-5 right-5 z-50 bg-[#B89275] text-white px-5 py-3 rounded-xl shadow-2xl font-display text-xs tracking-wider uppercase flex items-center space-x-2 animate-bounce">
          <Check className="w-4 h-4" />
          <span>{saveNotification}</span>
        </div>
      )}

      {/* Top Admin Header */}
      <header className="bg-obsidian border-b border-deep-charcoal sticky top-0 z-40 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="bg-[#B89275] text-white font-display text-xs px-3 py-1 rounded-md uppercase font-black tracking-widest">
            CMS
          </div>
          <div>
            <h1 className="font-display text-sm sm:text-base tracking-widest text-warm-white uppercase font-bold">
              GLAMGAL CONTROL CENTER
            </h1>
            <span className="text-[10px] text-warm-taupe block font-body">
              Signed in as <strong className="text-warm-white">{state.adminUser?.email}</strong>
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <Link
            to="/"
            target="_blank"
            className="inline-flex items-center space-x-1.5 bg-deep-charcoal hover:bg-deep-charcoal/80 text-warm-white font-display text-[11px] tracking-wider uppercase px-4 py-2 rounded-full border border-deep-charcoal transition-colors"
          >
            <span>PREVIEW STOREFRONT</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>

          <button
            onClick={() => {
              logout();
              navigate('/admin/login');
            }}
            className="inline-flex items-center space-x-1.5 bg-red-950/60 hover:bg-red-900 text-red-200 font-display text-[11px] tracking-wider uppercase px-4 py-2 rounded-full border border-red-800/60 transition-colors"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>LOGOUT</span>
          </button>
        </div>
      </header>

      {/* Main Admin Layout */}
      <div className="flex-1 flex flex-col md:flex-row">
        {/* Left Navigation Sidebar */}
        <aside className="w-full md:w-64 bg-[#141414] border-r border-deep-charcoal p-4 space-y-2">
          <span className="text-[9px] font-display tracking-mega text-warm-taupe uppercase block px-3 py-2">
            REVIEWS & CONTENT
          </span>

          <button
            onClick={() => setActiveTab('reviews')}
            className={`w-full text-left font-display text-xs tracking-wider uppercase px-4 py-3 rounded-xl flex items-center space-x-3 transition-colors ${
              activeTab === 'reviews' ? 'bg-[#B89275] text-white font-bold' : 'text-warm-white hover:bg-deep-charcoal'
            }`}
          >
            <Star className="w-4 h-4 text-amber-400" />
            <span>REVIEWS & PRAISE</span>
          </button>

          <button
            onClick={() => setActiveTab('promos')}
            className={`w-full text-left font-display text-xs tracking-wider uppercase px-4 py-3 rounded-xl flex items-center space-x-3 transition-colors ${
              activeTab === 'promos' ? 'bg-[#B89275] text-white font-bold' : 'text-warm-white hover:bg-deep-charcoal'
            }`}
          >
            <Tag className="w-4 h-4" />
            <span>PROMO & DISCOUNTS</span>
          </button>

          <button
            onClick={() => setActiveTab('products')}
            className={`w-full text-left font-display text-xs tracking-wider uppercase px-4 py-3 rounded-xl flex items-center space-x-3 transition-colors ${
              activeTab === 'products' ? 'bg-[#B89275] text-white font-bold' : 'text-warm-white hover:bg-deep-charcoal'
            }`}
          >
            <Package className="w-4 h-4" />
            <span>PRODUCTS MANAGER</span>
          </button>

          <button
            onClick={() => setActiveTab('journal')}
            className={`w-full text-left font-display text-xs tracking-wider uppercase px-4 py-3 rounded-xl flex items-center space-x-3 transition-colors ${
              activeTab === 'journal' ? 'bg-[#B89275] text-white font-bold' : 'text-warm-white hover:bg-deep-charcoal'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>JOURNAL ARTICLES</span>
          </button>

          <button
            onClick={() => setActiveTab('hero')}
            className={`w-full text-left font-display text-xs tracking-wider uppercase px-4 py-3 rounded-xl flex items-center space-x-3 transition-colors ${
              activeTab === 'hero' ? 'bg-[#B89275] text-white font-bold' : 'text-warm-white hover:bg-deep-charcoal'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>HERO CAMPAIGN</span>
          </button>

          <button
            onClick={() => setActiveTab('homepage')}
            className={`w-full text-left font-display text-xs tracking-wider uppercase px-4 py-3 rounded-xl flex items-center space-x-3 transition-colors ${
              activeTab === 'homepage' ? 'bg-[#B89275] text-white font-bold' : 'text-warm-white hover:bg-deep-charcoal'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>HOMEPAGE SECTIONS</span>
          </button>

          <button
            onClick={() => setActiveTab('social')}
            className={`w-full text-left font-display text-xs tracking-wider uppercase px-4 py-3 rounded-xl flex items-center space-x-3 transition-colors ${
              activeTab === 'social' ? 'bg-[#B89275] text-white font-bold' : 'text-warm-white hover:bg-deep-charcoal'
            }`}
          >
            <Instagram className="w-4 h-4 text-pink-400" />
            <span>INSTAGRAM COMMUNITY</span>
          </button>

          <button
            onClick={() => setActiveTab('videos')}
            className={`w-full text-left font-display text-xs tracking-wider uppercase px-4 py-3 rounded-xl flex items-center space-x-3 transition-colors ${
              activeTab === 'videos' ? 'bg-[#B89275] text-white font-bold' : 'text-warm-white hover:bg-deep-charcoal'
            }`}
          >
            <Video className="w-4 h-4 text-amber-400" />
            <span>PRODUCT VIDEO REELS</span>
          </button>

          <button
            onClick={() => setActiveTab('media')}
            className={`w-full text-left font-display text-xs tracking-wider uppercase px-4 py-3 rounded-xl flex items-center space-x-3 transition-colors ${
              activeTab === 'media' ? 'bg-[#B89275] text-white font-bold' : 'text-warm-white hover:bg-deep-charcoal'
            }`}
          >
            <ImageIcon className="w-4 h-4" />
            <span>MEDIA LIBRARY</span>
          </button>

          <button
            onClick={() => setActiveTab('pages')}
            className={`w-full text-left font-display text-xs tracking-wider uppercase px-4 py-3 rounded-xl flex items-center space-x-3 transition-colors ${
              activeTab === 'pages' ? 'bg-[#B89275] text-white font-bold' : 'text-warm-white hover:bg-deep-charcoal'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>PAGE CONTENT</span>
          </button>

          <button
            onClick={() => setActiveTab('footer')}
            className={`w-full text-left font-display text-xs tracking-wider uppercase px-4 py-3 rounded-xl flex items-center space-x-3 transition-colors ${
              activeTab === 'footer' ? 'bg-[#B89275] text-white font-bold' : 'text-warm-white hover:bg-deep-charcoal'
            }`}
          >
            <Globe className="w-4 h-4 text-emerald-400" />
            <span>FOOTER & NAVIGATION</span>
          </button>

          <button
            onClick={() => setActiveTab('shopify')}
            className={`w-full text-left font-display text-xs tracking-wider uppercase px-4 py-3 rounded-xl flex items-center space-x-3 transition-colors ${
              activeTab === 'shopify' ? 'bg-[#B89275] text-white font-bold' : 'text-warm-white hover:bg-deep-charcoal'
            }`}
          >
            <ShoppingBag className="w-4 h-4" />
            <span>SHOPIFY CONNECTIVITY</span>
          </button>

          <div className="pt-8 px-3 border-t border-deep-charcoal">
            <button
              onClick={() => {
                if (confirm('Reset all CMS products, reviews, promos & content to default settings?')) {
                  resetToDefaults();
                  triggerSaveNotification('Catalog & CMS reset to defaults!');
                }
              }}
              className="text-[10px] font-display text-warm-taupe hover:text-red-400 uppercase tracking-widest flex items-center space-x-1 transition-colors"
            >
              <RefreshCw className="w-3 h-3" />
              <span>RESET TO DEFAULTS</span>
            </button>
          </div>
        </aside>

        {/* Right Content Workspace */}
        <main className="flex-1 p-6 md:p-10 space-y-8 max-w-5xl">
          {/* TAB 1: REVIEWS & COMMUNITY PRAISE MANAGER */}
          {activeTab === 'reviews' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="font-display text-xl tracking-widest text-warm-white uppercase font-bold">
                    COMMUNITY REVIEWS & PRAISE MANAGER
                  </h2>
                  <p className="text-xs text-soft-stone font-body">
                    Edit customer quotes, verified buyer badges, star ratings, and review headline banners.
                  </p>
                </div>

                <button
                  onClick={() => {
                    setEditingReview(null);
                    resetReviewForm();
                    setShowReviewModal(true);
                  }}
                  className="bg-[#B89275] hover:bg-[#A37E62] text-white font-display text-xs tracking-wider uppercase px-5 py-3 rounded-xl flex items-center space-x-2 transition-all font-bold shadow-lg"
                >
                  <Plus className="w-4 h-4" />
                  <span>+ ADD NEW BUYER REVIEW</span>
                </button>
              </div>

              {/* Verified Buyer Reviews Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {state.testimonials.map((rev) => (
                  <div
                    key={rev.id}
                    className="bg-[#141414] rounded-2xl p-5 border border-deep-charcoal space-y-3 group hover:border-[#B89275]/60 transition-all flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-1 text-amber-400">
                          {Array.from({ length: rev.rating }).map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                          ))}
                        </div>

                        {rev.verified && (
                          <span className="inline-flex items-center space-x-1 bg-emerald-950 text-emerald-400 text-[9px] font-display font-bold tracking-widest px-2.5 py-0.5 rounded-full uppercase border border-emerald-800">
                            <CheckCircle className="w-3 h-3 text-emerald-400" />
                            <span>VERIFIED BUYER</span>
                          </span>
                        )}
                      </div>

                      <p className="text-xs text-warm-white font-body italic leading-relaxed">
                        "{rev.testimonial}"
                      </p>
                    </div>

                    <div className="pt-3 border-t border-deep-charcoal flex items-center justify-between text-xs">
                      <div>
                        <h4 className="font-display text-xs text-warm-white uppercase font-bold">
                          {rev.name}
                        </h4>
                        <span className="text-[10px] text-warm-taupe font-mono block">
                          Purchased: {rev.productPurchased}
                        </span>
                      </div>

                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => handleStartEditReview(rev)}
                          className="bg-deep-charcoal hover:bg-[#B89275] text-warm-white p-2 rounded-lg transition-colors"
                          title="Edit Review"
                        >
                          <Edit3 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => {
                            if (confirm(`Are you sure you want to delete review from "${rev.name}"?`)) {
                              deleteTestimonial(rev.id);
                              triggerSaveNotification(`Deleted review from "${rev.name}"`);
                            }
                          }}
                          className="bg-red-950/80 hover:bg-red-900 text-red-200 p-2 rounded-lg transition-colors"
                          title="Delete Review"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: PROMO & DISCOUNTS MANAGER */}
          {activeTab === 'promos' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="font-display text-xl tracking-widest text-warm-white uppercase font-bold">
                    PROMO & DISCOUNT CODES MANAGER
                  </h2>
                  <p className="text-xs text-soft-stone font-body">
                    Create promo codes, manage percentage/fixed discounts, minimum order requirements, and toggle active status.
                  </p>
                </div>

                <button
                  onClick={() => {
                    setEditingPromo(null);
                    resetPromoForm();
                    setShowPromoModal(true);
                  }}
                  className="bg-[#B89275] hover:bg-[#A37E62] text-white font-display text-xs tracking-wider uppercase px-5 py-3 rounded-xl flex items-center space-x-2 transition-all font-bold shadow-lg"
                >
                  <Plus className="w-4 h-4" />
                  <span>+ CREATE PROMO CODE</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {state.promos.map((promo) => (
                  <div
                    key={promo.id}
                    className="bg-[#141414] rounded-2xl p-5 border border-deep-charcoal space-y-3 group hover:border-[#B89275]/60 transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="font-mono text-sm tracking-wider font-bold bg-[#B89275]/20 text-[#B89275] px-3 py-1 rounded-lg border border-[#B89275]/40">
                          {promo.code}
                        </span>
                        <span className="text-[10px] font-display text-warm-white uppercase bg-deep-charcoal px-2.5 py-1 rounded-full border border-deep-charcoal">
                          {promo.discountType === 'percentage'
                            ? `${promo.discountValue}% OFF`
                            : promo.discountType === 'fixed'
                            ? `$${promo.discountValue} OFF`
                            : 'FREE SHIPPING'}
                        </span>
                      </div>

                      <button
                        onClick={() => {
                          togglePromo(promo.id);
                          triggerSaveNotification(`Toggled ${promo.code} status`);
                        }}
                        className={`text-[9px] font-display tracking-widest px-3 py-1 rounded-full uppercase font-bold ${
                          promo.active
                            ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                            : 'bg-red-950 text-red-400 border border-red-800'
                        }`}
                      >
                        {promo.active ? 'ACTIVE' : 'DISABLED'}
                      </button>
                    </div>

                    <p className="text-xs text-warm-white font-body">{promo.description}</p>

                    <div className="flex items-center justify-between pt-2 border-t border-deep-charcoal text-[11px] text-warm-taupe font-mono">
                      <span>Applies: {promo.appliesTo}</span>
                      {promo.minSpend && <span>Min Order: ${promo.minSpend}</span>}

                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => handleStartEditPromo(promo)}
                          className="text-warm-white hover:text-[#B89275] p-1 transition-colors"
                          title="Edit Promo"
                        >
                          <Edit3 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => {
                            if (confirm(`Are you sure you want to delete "${promo.code}"?`)) {
                              deletePromo(promo.id);
                              triggerSaveNotification(`Deleted promo code "${promo.code}"`);
                            }
                          }}
                          className="text-red-400 hover:text-red-300 p-1 transition-colors"
                          title="Delete Promo"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: PRODUCTS MANAGER */}
          {activeTab === 'products' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="font-display text-xl tracking-widest text-warm-white uppercase font-bold">
                    STORE PRODUCTS MANAGEMENT
                  </h2>
                  <p className="text-xs text-soft-stone font-body">
                    Add new products, modify prices, upload photos, and delete items from your live storefront.
                  </p>
                </div>

                <button
                  onClick={() => {
                    setEditingProduct(null);
                    resetProductForm();
                    setShowAddProductModal(true);
                  }}
                  className="bg-[#B89275] hover:bg-[#A37E62] text-white font-display text-xs tracking-wider uppercase px-5 py-3 rounded-xl flex items-center space-x-2 transition-all font-bold shadow-lg"
                >
                  <Plus className="w-4 h-4" />
                  <span>ADD NEW PRODUCT</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {state.products.map((product) => (
                  <div
                    key={product.id}
                    className="bg-[#141414] rounded-2xl p-4 border border-deep-charcoal flex space-x-4 items-center justify-between group hover:border-[#B89275]/60 transition-all"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 rounded-xl overflow-hidden bg-deep-charcoal flex-shrink-0">
                        <img
                          src={product.featuredImage?.url}
                          alt={product.title}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="space-y-0.5">
                        <span className="text-[9px] font-display text-[#B89275] uppercase block font-semibold">
                          {product.category}
                        </span>
                        <h4 className="font-display text-xs tracking-wider text-warm-white uppercase font-bold line-clamp-1">
                          {product.title}
                        </h4>
                        <span className="text-xs font-display text-warm-white font-semibold">
                          ${parseFloat(product.variants[0]?.price.amount || product.priceRange.minVariantPrice.amount).toFixed(2)} USD
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleStartEdit(product)}
                        className="bg-deep-charcoal hover:bg-[#B89275] text-warm-white p-2 rounded-lg transition-colors"
                        title="Edit Product"
                      >
                        <Edit3 className="w-4 h-4" />
                      </button>

                      <button
                        onClick={() => {
                          if (confirm(`Are you sure you want to delete "${product.title}"?`)) {
                            deleteProduct(product.id);
                            triggerSaveNotification(`Deleted "${product.title}"`);
                          }
                        }}
                        className="bg-red-950/80 hover:bg-red-900 text-red-200 p-2 rounded-lg transition-colors"
                        title="Delete Product"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: JOURNAL ARTICLES */}
          {activeTab === 'journal' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="font-display text-xl tracking-widest text-warm-white uppercase font-bold">
                    BEAUTY JOURNAL ARTICLES MANAGER
                  </h2>
                  <p className="text-xs text-soft-stone font-body">
                    Create, edit, upload cover images, and publish beauty tutorials or skincare articles live.
                  </p>
                </div>

                <div className="flex items-center space-x-3">
                  <Link
                    to="/journal"
                    target="_blank"
                    className="bg-deep-charcoal hover:bg-deep-charcoal/80 text-warm-white font-display text-xs tracking-wider uppercase px-4 py-3 rounded-xl flex items-center space-x-1.5 transition-all font-bold"
                  >
                    <span>VIEW LIVE JOURNAL ↗</span>
                  </Link>

                  <button
                    onClick={() => {
                      setEditingArticle(null);
                      resetArticleForm();
                      setShowArticleModal(true);
                    }}
                    className="bg-[#B89275] hover:bg-[#A37E62] text-white font-display text-xs tracking-wider uppercase px-5 py-3 rounded-xl flex items-center space-x-2 transition-all font-bold shadow-lg"
                  >
                    <Plus className="w-4 h-4" />
                    <span>ADD NEW ARTICLE</span>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {state.articles.map((article) => (
                  <div
                    key={article.id}
                    className="bg-[#141414] rounded-2xl p-4 border border-deep-charcoal flex space-x-4 items-center justify-between group hover:border-[#B89275]/60 transition-all"
                  >
                    <div className="flex items-center space-x-4 overflow-hidden">
                      <div className="w-20 h-20 rounded-xl overflow-hidden bg-deep-charcoal flex-shrink-0">
                        <img
                          src={article.coverImage}
                          alt={article.title}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="space-y-1">
                        <div className="flex items-center space-x-2">
                          <span className="text-[9px] font-display text-[#B89275] uppercase font-semibold">
                            {article.category}
                          </span>
                          <span className="text-[9px] text-warm-taupe font-mono">• {article.readTime}</span>
                        </div>
                        <h4 className="font-display text-xs tracking-wider text-warm-white uppercase font-bold line-clamp-1">
                          {article.title}
                        </h4>
                        <p className="text-[11px] text-soft-stone line-clamp-1 font-body">
                          {article.summary}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 flex-shrink-0">
                      <button
                        onClick={() => handleStartEditArticle(article)}
                        className="bg-deep-charcoal hover:bg-[#B89275] text-warm-white p-2 rounded-lg transition-colors"
                        title="Edit Article"
                      >
                        <Edit3 className="w-4 h-4" />
                      </button>

                      <button
                        onClick={() => {
                          if (confirm(`Are you sure you want to delete "${article.title}"?`)) {
                            deleteArticle(article.id);
                            triggerSaveNotification(`Deleted article "${article.title}"`);
                          }
                        }}
                        className="bg-red-950/80 hover:bg-red-900 text-red-200 p-2 rounded-lg transition-colors"
                        title="Delete Article"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: HERO CAMPAIGN EDITOR */}
          {activeTab === 'hero' && (
            <div className="space-y-6">
              <div>
                <h2 className="font-display text-xl tracking-widest text-warm-white uppercase font-bold">
                  HERO CAMPAIGN SECTION
                </h2>
                <p className="text-xs text-soft-stone font-body">
                  Upload an image file directly from your computer, choose from your Media Library, or edit hero text and CTA links.
                </p>
              </div>

              <form onSubmit={handleHeroSubmit} className="bg-[#141414] rounded-2xl p-6 border border-deep-charcoal space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1.5 md:col-span-2">
                    <label className="block font-display text-[10px] tracking-widest text-warm-taupe uppercase">
                      HERO HEADLINE
                    </label>
                    <input
                      type="text"
                      name="heading"
                      defaultValue={state.hero.heading}
                      className="w-full bg-deep-charcoal border border-deep-charcoal focus:border-[#B89275] text-warm-white text-xs p-3.5 rounded-xl outline-none"
                    />
                  </div>

                  <div className="space-y-1.5 md:col-span-2">
                    <label className="block font-display text-[10px] tracking-widest text-warm-taupe uppercase">
                      SUBHEADING / DESCRIPTION
                    </label>
                    <textarea
                      name="subheading"
                      rows={3}
                      defaultValue={state.hero.subheading}
                      className="w-full bg-deep-charcoal border border-deep-charcoal focus:border-[#B89275] text-warm-white text-xs p-3.5 rounded-xl outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block font-display text-[10px] tracking-widest text-warm-taupe uppercase">
                      PRIMARY CTA TEXT
                    </label>
                    <input
                      type="text"
                      name="primaryCtaText"
                      defaultValue={state.hero.primaryCtaText}
                      className="w-full bg-deep-charcoal border border-deep-charcoal focus:border-[#B89275] text-warm-white text-xs p-3.5 rounded-xl outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block font-display text-[10px] tracking-widest text-warm-taupe uppercase">
                      PRIMARY CTA LINK
                    </label>
                    <input
                      type="text"
                      name="primaryCtaLink"
                      defaultValue={state.hero.primaryCtaLink}
                      className="w-full bg-deep-charcoal border border-deep-charcoal focus:border-[#B89275] text-warm-white text-xs p-3.5 rounded-xl outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block font-display text-[10px] tracking-widest text-warm-taupe uppercase">
                      SECONDARY CTA TEXT
                    </label>
                    <input
                      type="text"
                      name="secondaryCtaText"
                      defaultValue={state.hero.secondaryCtaText}
                      className="w-full bg-deep-charcoal border border-deep-charcoal focus:border-[#B89275] text-warm-white text-xs p-3.5 rounded-xl outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block font-display text-[10px] tracking-widest text-warm-taupe uppercase">
                      SECONDARY CTA LINK
                    </label>
                    <input
                      type="text"
                      name="secondaryCtaLink"
                      defaultValue={state.hero.secondaryCtaLink}
                      className="w-full bg-deep-charcoal border border-deep-charcoal focus:border-[#B89275] text-warm-white text-xs p-3.5 rounded-xl outline-none"
                    />
                  </div>

                  <div className="space-y-4 md:col-span-2 pt-4 border-t border-deep-charcoal">
                    <label className="block font-display text-[11px] tracking-widest text-[#B89275] uppercase font-bold">
                      HERO PORTRAIT IMAGE UPLOADER & PICKER
                    </label>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                      <div className="md:col-span-4 space-y-2">
                        <span className="text-[10px] font-display text-warm-taupe uppercase block">
                          SELECTED IMAGE PREVIEW
                        </span>
                        <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-deep-charcoal border border-[#B89275]/50 relative shadow-lg">
                          <img
                            src={heroImage}
                            alt="Selected Hero Banner"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>

                      <div className="md:col-span-8 space-y-4">
                        <div className="bg-deep-charcoal p-5 rounded-2xl border-2 border-dashed border-[#B89275]/50 hover:border-[#B89275] transition-all relative text-center space-y-2 cursor-pointer">
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handleHeroFileUpload}
                            className="absolute inset-0 opacity-0 cursor-pointer z-20"
                          />
                          <Upload className="w-7 h-7 text-[#B89275] mx-auto" />
                          <div>
                            <span className="font-display text-xs text-warm-white uppercase block font-bold">
                              UPLOAD IMAGE FROM COMPUTER
                            </span>
                            <span className="text-[10px] text-warm-taupe block font-body">
                              Click or drag any photo file (PNG, JPG, WEBP)
                            </span>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <span className="text-[10px] font-display text-warm-taupe uppercase block">
                            OR CLICK A PHOTO FROM MEDIA LIBRARY
                          </span>
                          <div className="flex flex-wrap gap-2 max-h-36 overflow-y-auto p-2 bg-deep-charcoal rounded-xl border border-deep-charcoal">
                            {state.mediaLibrary.map((url, i) => (
                              <button
                                key={i}
                                type="button"
                                onClick={() => {
                                  setHeroImage(url);
                                  triggerSaveNotification('Selected image from Media Library!');
                                }}
                                className={`w-14 h-14 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 ${
                                  heroImage === url ? 'border-[#B89275] scale-105 shadow-md' : 'border-transparent opacity-70 hover:opacity-100'
                                }`}
                              >
                                <img src={url} alt={`Option ${i}`} className="w-full h-full object-cover" />
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-deep-charcoal flex justify-end">
                  <button
                    type="submit"
                    className="bg-[#B89275] hover:bg-[#A37E62] text-white font-display text-xs tracking-wider uppercase px-6 py-3.5 rounded-xl flex items-center space-x-2 transition-all font-bold shadow-lg"
                  >
                    <Save className="w-4 h-4" />
                    <span>SAVE HERO CAMPAIGN</span>
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* TAB 6: HOMEPAGE SECTIONS MANAGER */}
          {activeTab === 'homepage' && (
            <div className="space-y-6">
              <div>
                <h2 className="font-display text-xl tracking-widest text-warm-white uppercase font-bold">
                  HOMEPAGE SECTIONS CONTENT
                </h2>
                <p className="text-xs text-soft-stone font-body">
                  Edit headlines, subtitles, descriptions, and toggle visibility for sections across the main homepage.
                </p>
              </div>

              <div className="space-y-4">
                {Object.entries(state.homepageSections).map(([secId, sec]) => (
                  <div key={secId} className="bg-[#141414] rounded-2xl p-6 border border-deep-charcoal space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-deep-charcoal">
                      <span className="font-display text-xs tracking-widest text-[#B89275] uppercase font-bold">
                        SECTION: {secId}
                      </span>
                      <button
                        onClick={() => {
                          toggleSection(secId);
                          triggerSaveNotification(`Toggled visibility for ${secId}`);
                        }}
                        className={`text-[10px] font-display tracking-widest px-3 py-1 rounded-full uppercase font-bold ${
                          sec.enabled ? 'bg-emerald-950 text-emerald-400 border border-emerald-800' : 'bg-red-950 text-red-400 border border-red-800'
                        }`}
                      >
                        {sec.enabled ? 'ENABLED' : 'DISABLED'}
                      </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-[9px] font-display tracking-widest text-warm-taupe uppercase">TITLE</label>
                        <input
                          type="text"
                          value={sec.title}
                          onChange={(e) => updateSection(secId, { title: e.target.value })}
                          className="w-full bg-deep-charcoal border border-deep-charcoal focus:border-[#B89275] text-warm-white text-xs p-3 rounded-xl outline-none"
                        />
                      </div>

                      {sec.subtitle !== undefined && (
                        <div className="space-y-1">
                          <label className="text-[9px] font-display tracking-widest text-warm-taupe uppercase">SUBTITLE</label>
                          <input
                            type="text"
                            value={sec.subtitle}
                            onChange={(e) => updateSection(secId, { subtitle: e.target.value })}
                            className="w-full bg-deep-charcoal border border-deep-charcoal focus:border-[#B89275] text-warm-white text-xs p-3 rounded-xl outline-none"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB: INSTAGRAM COMMUNITY MANAGER */}
          {activeTab === 'social' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="font-display text-xl tracking-widest text-warm-white uppercase font-bold flex items-center space-x-2">
                    <Instagram className="w-5 h-5 text-pink-400" />
                    <span>INSTAGRAM COMMUNITY & SOCIAL CARDS MANAGER</span>
                  </h2>
                  <p className="text-xs text-soft-stone font-body">
                    Manage the "JOIN THE GLAMGAL BEAUTY COMMUNITY" section text, toggle storefront visibility, and edit or publish Instagram post cards.
                  </p>
                </div>

                <button
                  onClick={() => {
                    setEditingSocialPost(null);
                    resetSocialPostForm();
                    setShowSocialModal(true);
                  }}
                  className="bg-gradient-to-r from-pink-600 to-amber-500 hover:opacity-90 text-white font-display text-xs tracking-wider uppercase px-5 py-3 rounded-xl flex items-center space-x-2 transition-all font-bold shadow-lg"
                >
                  <Plus className="w-4 h-4" />
                  <span>ADD NEW INSTAGRAM POST</span>
                </button>
              </div>

              {/* SECTION HEADINGS CONTROL */}
              {state.homepageSections.socialGallery && (
                <div className="bg-[#141414] rounded-2xl p-6 border border-deep-charcoal space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-deep-charcoal">
                    <span className="font-display text-xs tracking-widest text-[#B89275] uppercase font-bold">
                      MAIN SECTION SETTINGS & COPY
                    </span>
                    <button
                      onClick={() => {
                        toggleSection('socialGallery');
                        triggerSaveNotification(`Toggled visibility for Social Gallery section`);
                      }}
                      className={`text-[10px] font-display tracking-widest px-3 py-1 rounded-full uppercase font-bold ${
                        state.homepageSections.socialGallery.enabled
                          ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                          : 'bg-red-950 text-red-400 border border-red-800'
                      }`}
                    >
                      {state.homepageSections.socialGallery.enabled ? 'ENABLED ON HOMEPAGE' : 'DISABLED ON HOMEPAGE'}
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[9px] font-display tracking-widest text-warm-taupe uppercase">SECTION TITLE</label>
                      <input
                        type="text"
                        value={state.homepageSections.socialGallery.title}
                        onChange={(e) => updateSection('socialGallery', { title: e.target.value })}
                        className="w-full bg-deep-charcoal border border-deep-charcoal focus:border-[#B89275] text-warm-white text-xs p-3 rounded-xl outline-none font-bold"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[9px] font-display tracking-widest text-warm-taupe uppercase">INSTAGRAM BADGE SUBTITLE</label>
                      <input
                        type="text"
                        value={state.homepageSections.socialGallery.subtitle || ''}
                        onChange={(e) => updateSection('socialGallery', { subtitle: e.target.value })}
                        className="w-full bg-deep-charcoal border border-deep-charcoal focus:border-[#B89275] text-warm-white text-xs p-3 rounded-xl outline-none"
                      />
                    </div>

                    <div className="space-y-1 md:col-span-2">
                      <label className="text-[9px] font-display tracking-widest text-warm-taupe uppercase">SECTION DESCRIPTION / INSTRUCTIONS</label>
                      <input
                        type="text"
                        value={state.homepageSections.socialGallery.description || ''}
                        onChange={(e) => updateSection('socialGallery', { description: e.target.value })}
                        className="w-full bg-deep-charcoal border border-deep-charcoal focus:border-[#B89275] text-warm-white text-xs p-3 rounded-xl outline-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[9px] font-display tracking-widest text-warm-taupe uppercase">CTA BUTTON TEXT</label>
                      <input
                        type="text"
                        value={state.homepageSections.socialGallery.ctaText || ''}
                        onChange={(e) => updateSection('socialGallery', { ctaText: e.target.value })}
                        className="w-full bg-deep-charcoal border border-deep-charcoal focus:border-[#B89275] text-warm-white text-xs p-3 rounded-xl outline-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[9px] font-display tracking-widest text-warm-taupe uppercase">CTA LINK URL</label>
                      <input
                        type="text"
                        value={state.homepageSections.socialGallery.ctaLink || ''}
                        onChange={(e) => updateSection('socialGallery', { ctaLink: e.target.value })}
                        className="w-full bg-deep-charcoal border border-deep-charcoal focus:border-[#B89275] text-warm-white text-xs p-3 rounded-xl outline-none font-mono"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* INSTAGRAM POST CARDS LIST */}
              <div className="space-y-3">
                <h3 className="font-display text-xs tracking-wider text-warm-white uppercase font-bold">
                  ACTIVE INSTAGRAM POST CARDS ({state.socialPosts.length})
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {state.socialPosts.map((post) => (
                    <div
                      key={post.id}
                      className="bg-[#141414] rounded-2xl p-4 border border-deep-charcoal flex space-x-4 items-center justify-between group hover:border-pink-500/50 transition-all"
                    >
                      <div className="flex items-center space-x-4 overflow-hidden">
                        <div className="w-16 h-16 rounded-xl overflow-hidden bg-deep-charcoal flex-shrink-0 relative">
                          <img
                            src={post.url}
                            alt={post.tag}
                            className="w-full h-full object-cover"
                          />
                          <span className="absolute bottom-1 left-1 bg-black/70 text-pink-400 px-1.5 py-0.5 rounded text-[8px] font-mono">
                            {post.tag}
                          </span>
                        </div>

                        <div className="space-y-1 overflow-hidden">
                          <div className="flex items-center space-x-2">
                            <span className="font-display text-xs font-bold text-warm-white">
                              @{post.username}
                            </span>
                            <span className="text-[10px] text-warm-taupe">• {post.location}</span>
                          </div>
                          <p className="text-[11px] text-soft-stone line-clamp-1 font-body">
                            {post.caption}
                          </p>
                          <div className="flex items-center space-x-3 text-[10px] text-warm-taupe font-mono">
                            <span>❤️ {post.likes.toLocaleString()} likes</span>
                            <span>💬 {post.commentsCount} comments</span>
                            <span>⏱️ {post.timeAgo}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2 flex-shrink-0">
                        <button
                          onClick={() => handleStartEditSocialPost(post)}
                          className="bg-deep-charcoal hover:bg-[#B89275] text-warm-white p-2 rounded-lg transition-colors"
                          title="Edit Post"
                        >
                          <Edit3 className="w-4 h-4" />
                        </button>

                        <button
                          onClick={() => {
                            if (confirm(`Are you sure you want to delete post "${post.tag}"?`)) {
                              deleteSocialPost(post.id);
                              triggerSaveNotification(`Deleted Instagram post "${post.tag}"`);
                            }
                          }}
                          className="bg-red-950/80 hover:bg-red-900 text-red-200 p-2 rounded-lg transition-colors"
                          title="Delete Post"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 7: MEDIA LIBRARY */}
          {activeTab === 'media' && (
            <div className="space-y-6">
              <div>
                <h2 className="font-display text-xl tracking-widest text-warm-white uppercase font-bold">
                  MEDIA LIBRARY & IMAGE UPLOAD MANAGER
                </h2>
                <p className="text-xs text-soft-stone font-body">
                  Upload new product photos, editorial campaign banners, or paste direct image URLs.
                </p>
              </div>

              <div className="bg-[#141414] rounded-2xl p-6 border border-deep-charcoal space-y-4">
                <h3 className="font-display text-xs tracking-wider text-warm-white uppercase font-bold">
                  UPLOAD NEW IMAGE ASSET
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border-2 border-dashed border-deep-charcoal hover:border-[#B89275] rounded-2xl p-6 text-center space-y-3 cursor-pointer relative">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileUploadMock}
                      className="absolute inset-0 opacity-0 cursor-pointer"
                    />
                    <Upload className="w-8 h-8 text-[#B89275] mx-auto" />
                    <div>
                      <span className="font-display text-xs text-warm-white uppercase block font-bold">
                        DRAG & DROP IMAGE FILE
                      </span>
                      <span className="text-[10px] text-warm-taupe block font-body">
                        Supports PNG, JPG, WEBP up to 10MB
                      </span>
                    </div>
                  </div>

                  <form onSubmit={handleUploadImage} className="space-y-3 flex flex-col justify-between">
                    <div className="space-y-1.5">
                      <label className="block font-display text-[10px] tracking-widest text-warm-taupe uppercase">
                        OR PASTE DIRECT IMAGE URL
                      </label>
                      <input
                        type="url"
                        value={newImageUrl}
                        onChange={(e) => setNewImageUrl(e.target.value)}
                        placeholder="https://images.unsplash.com/..."
                        className="w-full bg-deep-charcoal border border-deep-charcoal focus:border-[#B89275] text-warm-white text-xs p-3.5 rounded-xl outline-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-[#B89275] hover:bg-[#A37E62] text-white font-display text-xs tracking-wider uppercase py-3 rounded-xl flex items-center justify-center space-x-2 font-bold transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                      <span>ADD IMAGE TO LIBRARY</span>
                    </button>
                  </form>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-display text-xs tracking-wider text-warm-white uppercase font-bold">
                  UPLOADED MEDIA ASSETS ({state.mediaLibrary.length})
                </h3>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {state.mediaLibrary.map((url, idx) => (
                    <div key={idx} className="bg-[#141414] rounded-xl overflow-hidden border border-deep-charcoal group relative aspect-[4/3]">
                      <img src={url} alt={`Media asset ${idx}`} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-2 p-2">
                        <button
                          onClick={() => {
                            navigator.clipboard.writeText(url);
                            triggerSaveNotification('Copied image URL to clipboard!');
                          }}
                          className="bg-warm-white text-obsidian p-2 rounded-full hover:scale-110 transition-transform"
                        >
                          <Eye className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => {
                            removeMedia(url);
                            triggerSaveNotification('Removed image from library.');
                          }}
                          className="bg-red-600 text-white p-2 rounded-full hover:scale-110 transition-transform"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 8: PAGES CONTENT MANAGER */}
          {activeTab === 'pages' && (
            <div className="space-y-6">
              <div>
                <h2 className="font-display text-xl tracking-widest text-warm-white uppercase font-bold">
                  STOREFRONT PAGES CONTENT MANAGER
                </h2>
                <p className="text-xs text-soft-stone font-body">
                  Manage titles and copy for category pages, concern guides, formulation philosophy, routines, and FAQs.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { name: 'Beauty Journal Editorial', path: '/journal' },
                  { name: 'Skincare Collection Page', path: '/collections/skincare' },
                  { name: 'Makeup Couture Collection', path: '/collections/makeup' },
                  { name: 'Body Care Nectars', path: '/collections/body-care' },
                  { name: 'Beauty Tools & Gua Sha', path: '/collections/beauty-tools' },
                  { name: 'Formulation Philosophy Page', path: '/philosophy' },
                  { name: 'Routine Builder Rituals', path: '/routines' },
                  { name: 'Ingredient Science Guide', path: '/ingredients' },
                  { name: 'Skin Concern Matrix', path: '/concerns' },
                  { name: 'Frequently Asked Questions (FAQ)', path: '/faq' },
                ].map((p, idx) => (
                  <div key={idx} className="bg-[#141414] rounded-2xl p-5 border border-deep-charcoal flex items-center justify-between">
                    <div>
                      <h4 className="font-display text-xs tracking-wider text-warm-white uppercase font-bold">
                        {p.name}
                      </h4>
                      <span className="text-[10px] text-warm-taupe font-mono block">{p.path}</span>
                    </div>

                    <Link
                      to={p.path}
                      target="_blank"
                      className="bg-deep-charcoal hover:bg-[#B89275] text-warm-white text-[10px] font-display tracking-widest px-3 py-1.5 rounded-full uppercase transition-colors"
                    >
                      VIEW PAGE ↗
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB: PRODUCT VIDEO REELS MANAGER */}
          {activeTab === 'videos' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="font-display text-xl tracking-widest text-warm-white uppercase font-bold">
                    PRODUCT VIDEO REELS MANAGER
                  </h2>
                  <p className="text-xs text-soft-stone font-body">
                    Upload product application reels, texture demonstrations, and shop-this-reel video cards.
                  </p>
                </div>

                <button
                  onClick={() => {
                    setEditingVideo(null);
                    resetVideoForm();
                    setShowVideoModal(true);
                  }}
                  className="bg-[#B89275] hover:bg-[#A37E62] text-white font-display text-xs tracking-wider uppercase px-5 py-3 rounded-xl flex items-center space-x-2 transition-all font-bold shadow-lg"
                >
                  <Plus className="w-4 h-4" />
                  <span>+ ADD NEW VIDEO REEL</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {state.videos?.map((vid) => (
                  <div
                    key={vid.id}
                    className="bg-[#141414] rounded-2xl p-5 border border-deep-charcoal space-y-4 group hover:border-[#B89275]/60 transition-all flex flex-col justify-between"
                  >
                    <div className="flex space-x-4 items-start">
                      <div className="w-24 h-32 rounded-xl overflow-hidden bg-black flex-shrink-0 relative border border-white/10">
                        <img src={vid.posterImage} alt={vid.title} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                          <Play className="w-6 h-6 text-amber-400 fill-amber-400" />
                        </div>
                        <span className="absolute bottom-1 right-1 bg-black/80 text-amber-300 font-mono text-[9px] px-1.5 py-0.5 rounded">
                          {vid.duration}
                        </span>
                      </div>

                      <div className="space-y-2 flex-1 min-w-0">
                        <span className="text-[9px] font-display text-amber-400 uppercase font-bold block">
                          REEL • {vid.authorName}
                        </span>
                        <h4 className="font-display text-xs tracking-wider text-warm-white uppercase font-bold line-clamp-2">
                          {vid.title}
                        </h4>
                        <p className="text-[11px] text-soft-stone line-clamp-2 font-body">
                          {vid.subtitle}
                        </p>
                        <div className="text-[10px] text-warm-taupe font-mono pt-1">
                          FEATURED: <strong className="text-white">{vid.featuredProductName}</strong> ({vid.featuredProductPrice})
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-end space-x-2 border-t border-deep-charcoal pt-3">
                      <button
                        onClick={() => {
                          setEditingVideo(vid);
                          setVidTitle(vid.title);
                          setVidSubtitle(vid.subtitle);
                          setVidDuration(vid.duration);
                          setVidUrl(vid.videoUrl);
                          setVidPosterImage(vid.posterImage);
                          setVidAuthorName(vid.authorName);
                          setVidAuthorRole(vid.authorRole);
                          setVidProdHandle(vid.featuredProductHandle);
                          setVidProdName(vid.featuredProductName);
                          setVidProdPrice(vid.featuredProductPrice);
                          setVidProdImage(vid.featuredProductImage);
                          setShowVideoModal(true);
                        }}
                        className="bg-deep-charcoal hover:bg-deep-charcoal/80 text-warm-white text-xs px-3 py-1.5 rounded-lg transition-colors font-display uppercase font-bold flex items-center space-x-1"
                      >
                        <Edit3 className="w-3.5 h-3.5 text-[#B89275]" />
                        <span>EDIT</span>
                      </button>

                      <button
                        onClick={() => {
                          if (confirm('Delete this video reel from the homepage showcase?')) {
                            deleteVideo(vid.id);
                            triggerSaveNotification('Video Reel deleted!');
                          }
                        }}
                        className="bg-red-950/40 hover:bg-red-900/60 text-red-300 text-xs px-3 py-1.5 rounded-lg transition-colors font-display uppercase font-bold flex items-center space-x-1"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span>DELETE</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB: FOOTER & NAVIGATION MANAGER */}
          {activeTab === 'footer' && (
            <div className="space-y-6">
              <div>
                <h2 className="font-display text-xl tracking-widest text-warm-white uppercase font-bold">
                  FOOTER & NAVIGATION SETTINGS
                </h2>
                <p className="text-xs text-soft-stone font-body">
                  Manage brand intro description, social media channels, newsletter visibility, payment badges, and copyright notice.
                </p>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  triggerSaveNotification('Footer settings saved successfully!');
                }}
                className="space-y-6"
              >
                <div className="bg-[#141414] rounded-2xl p-6 border border-deep-charcoal space-y-4">
                  <h3 className="font-display text-xs tracking-wider text-[#B89275] uppercase font-bold border-b border-deep-charcoal pb-2">
                    BRAND BIO & SOCIAL LINKS
                  </h3>

                  <div className="space-y-2">
                    <label className="block font-display text-[10px] tracking-widest text-warm-taupe uppercase">
                      BRAND DESCRIPTION PARAGRAPH
                    </label>
                    <textarea
                      rows={3}
                      value={state.footerSettings.brandDescription}
                      onChange={(e) => updateFooterSettings({ brandDescription: e.target.value })}
                      className="w-full bg-deep-charcoal border border-deep-charcoal focus:border-[#B89275] text-warm-white text-xs p-3 rounded-xl outline-none font-body leading-relaxed"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="space-y-1">
                      <label className="block font-display text-[10px] tracking-widest text-warm-taupe uppercase">
                        INSTAGRAM URL
                      </label>
                      <input
                        type="url"
                        value={state.footerSettings.instagramUrl}
                        onChange={(e) => updateFooterSettings({ instagramUrl: e.target.value })}
                        className="w-full bg-deep-charcoal border border-deep-charcoal focus:border-[#B89275] text-warm-white text-xs p-3 rounded-xl outline-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="block font-display text-[10px] tracking-widest text-warm-taupe uppercase">
                        TIKTOK URL
                      </label>
                      <input
                        type="url"
                        value={state.footerSettings.tiktokUrl}
                        onChange={(e) => updateFooterSettings({ tiktokUrl: e.target.value })}
                        className="w-full bg-deep-charcoal border border-deep-charcoal focus:border-[#B89275] text-warm-white text-xs p-3 rounded-xl outline-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="block font-display text-[10px] tracking-widest text-warm-taupe uppercase">
                        FACEBOOK URL
                      </label>
                      <input
                        type="url"
                        value={state.footerSettings.facebookUrl}
                        onChange={(e) => updateFooterSettings({ facebookUrl: e.target.value })}
                        className="w-full bg-deep-charcoal border border-deep-charcoal focus:border-[#B89275] text-warm-white text-xs p-3 rounded-xl outline-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="block font-display text-[10px] tracking-widest text-warm-taupe uppercase">
                        YOUTUBE URL
                      </label>
                      <input
                        type="url"
                        value={state.footerSettings.youtubeUrl}
                        onChange={(e) => updateFooterSettings({ youtubeUrl: e.target.value })}
                        className="w-full bg-deep-charcoal border border-deep-charcoal focus:border-[#B89275] text-warm-white text-xs p-3 rounded-xl outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-[#141414] rounded-2xl p-6 border border-deep-charcoal space-y-4">
                  <h3 className="font-display text-xs tracking-wider text-[#B89275] uppercase font-bold border-b border-deep-charcoal pb-2">
                    FOOTER DISPLAY & METADATA
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="block font-display text-[10px] tracking-widest text-warm-taupe uppercase">
                        COPYRIGHT NOTICE
                      </label>
                      <input
                        type="text"
                        value={state.footerSettings.copyrightText}
                        onChange={(e) => updateFooterSettings({ copyrightText: e.target.value })}
                        className="w-full bg-deep-charcoal border border-deep-charcoal focus:border-[#B89275] text-warm-white text-xs p-3 rounded-xl outline-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="block font-display text-[10px] tracking-widest text-warm-taupe uppercase">
                        REGION & CURRENCY
                      </label>
                      <input
                        type="text"
                        value={state.footerSettings.countryCurrency}
                        onChange={(e) => updateFooterSettings({ countryCurrency: e.target.value })}
                        className="w-full bg-deep-charcoal border border-deep-charcoal focus:border-[#B89275] text-warm-white text-xs p-3 rounded-xl outline-none"
                      />
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-6 pt-2">
                    <label className="flex items-center space-x-2 text-xs font-display text-warm-white uppercase cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={state.footerSettings.showNewsletter}
                        onChange={(e) => updateFooterSettings({ showNewsletter: e.target.checked })}
                        className="accent-[#B89275] w-4 h-4"
                      />
                      <span>SHOW NEWSLETTER BANNER IN FOOTER</span>
                    </label>

                    <label className="flex items-center space-x-2 text-xs font-display text-warm-white uppercase cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={state.footerSettings.showPaymentBadges}
                        onChange={(e) => updateFooterSettings({ showPaymentBadges: e.target.checked })}
                        className="accent-[#B89275] w-4 h-4"
                      />
                      <span>SHOW ACCEPTED PAYMENT BADGES</span>
                    </label>
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-[#B89275] hover:bg-[#A37E62] text-white font-display text-xs tracking-wider uppercase px-6 py-3.5 rounded-xl flex items-center space-x-2 transition-all font-bold shadow-lg"
                  >
                    <Save className="w-4 h-4" />
                    <span>SAVE FOOTER SETTINGS</span>
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* TAB 9: SHOPIFY CONNECTIVITY */}
          {activeTab === 'shopify' && (
            <div className="space-y-6">
              <div>
                <h2 className="font-display text-xl tracking-widest text-warm-white uppercase font-bold">
                  CONNECT YOUR LIVE SHOPIFY STORE & CHECKOUT
                </h2>
                <p className="text-xs text-soft-stone font-body">
                  Link your real Shopify store domain so when customers click BUY or CHECKOUT, they complete payment on your exact Shopify checkout.
                </p>
              </div>

              <form onSubmit={handleShopifyCredentialsSubmit} className="bg-[#141414] rounded-2xl p-6 border border-deep-charcoal space-y-6">
                <h3 className="font-display text-xs tracking-wider text-warm-white uppercase font-bold">
                  SHOPIFY STOREFRONT API CREDENTIALS (.ENV)
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block font-display text-[10px] tracking-widest text-warm-taupe uppercase">
                      SHOPIFY STORE DOMAIN *
                    </label>
                    <div className="relative">
                      <Globe className="w-4 h-4 text-warm-taupe absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        value={shopifyDomain}
                        onChange={(e) => setShopifyDomain(e.target.value)}
                        placeholder="your-store-name.myshopify.com"
                        className="w-full bg-deep-charcoal border border-deep-charcoal focus:border-[#B89275] text-warm-white text-xs pl-10 pr-4 py-3 rounded-xl outline-none font-mono"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block font-display text-[10px] tracking-widest text-warm-taupe uppercase">
                      STOREFRONT API ACCESS TOKEN *
                    </label>
                    <div className="relative">
                      <Key className="w-4 h-4 text-warm-taupe absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        value={shopifyToken}
                        onChange={(e) => setShopifyToken(e.target.value)}
                        placeholder="c781d4e08a01f901a88b..."
                        className="w-full bg-deep-charcoal border border-deep-charcoal focus:border-[#B89275] text-warm-white text-xs pl-10 pr-4 py-3 rounded-xl outline-none font-mono"
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-deep-charcoal flex items-center justify-between">
                  <a
                    href="https://admin.shopify.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-[#B89275] hover:bg-[#A37E62] text-white font-display text-xs tracking-wider uppercase px-6 py-3 rounded-xl transition-all font-bold"
                  >
                    <span>OPEN SHOPIFY ADMIN ↗</span>
                  </a>

                  <button
                    type="submit"
                    className="bg-warm-white hover:bg-[#B89275] text-obsidian hover:text-white font-display text-xs tracking-wider uppercase px-6 py-3 rounded-xl transition-all font-bold"
                  >
                    SAVE CREDENTIALS
                  </button>
                </div>
              </form>
            </div>
          )}
        </main>
      </div>

      {/* ADD / EDIT REVIEW MODAL */}
      {showReviewModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#141414] rounded-[24px] border border-deep-charcoal p-6 sm:p-8 max-w-xl w-full space-y-6 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setShowReviewModal(false)}
              className="absolute top-6 right-6 text-warm-taupe hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <h3 className="font-display text-lg tracking-wider text-warm-white uppercase font-bold">
                {editingReview ? 'EDIT BUYER REVIEW' : 'ADD NEW BUYER REVIEW'}
              </h3>
              <p className="text-xs text-soft-stone font-body">
                Add authentic buyer feedback, star ratings, and skin type tags to display on the storefront.
              </p>
            </div>

            <form onSubmit={handleCreateOrUpdateReview} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="block font-display text-[10px] tracking-widest text-warm-taupe uppercase">
                    CUSTOMER NAME *
                  </label>
                  <input
                    type="text"
                    required
                    value={revName}
                    onChange={(e) => setRevName(e.target.value)}
                    placeholder="e.g. SOPHIA V."
                    className="w-full bg-deep-charcoal border border-deep-charcoal focus:border-[#B89275] text-warm-white text-xs p-3 rounded-xl outline-none uppercase font-bold"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block font-display text-[10px] tracking-widest text-warm-taupe uppercase">
                    STAR RATING (1 to 5) *
                  </label>
                  <select
                    value={revRating}
                    onChange={(e) => setRevRating(e.target.value)}
                    className="w-full bg-deep-charcoal border border-deep-charcoal focus:border-[#B89275] text-warm-white text-xs p-3 rounded-xl outline-none font-bold text-amber-400"
                  >
                    <option value="5">⭐⭐⭐⭐⭐ (5 Stars)</option>
                    <option value="4">⭐⭐⭐⭐ (4 Stars)</option>
                    <option value="3">⭐⭐⭐ (3 Stars)</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="block font-display text-[10px] tracking-widest text-warm-taupe uppercase">
                  REVIEW QUOTE / TESTIMONIAL *
                </label>
                <textarea
                  rows={3}
                  required
                  value={revQuote}
                  onChange={(e) => setRevQuote(e.target.value)}
                  placeholder="The Luminous Barrier Serum completely transformed my skin texture..."
                  className="w-full bg-deep-charcoal border border-deep-charcoal focus:border-[#B89275] text-warm-white text-xs p-3 rounded-xl outline-none font-body"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="block font-display text-[10px] tracking-widest text-warm-taupe uppercase">
                    PRODUCT PURCHASED NAME *
                  </label>
                  <input
                    type="text"
                    required
                    value={revProductPurchased}
                    onChange={(e) => setRevProductPurchased(e.target.value)}
                    placeholder="LUMINOUS BARRIER SERUM"
                    className="w-full bg-deep-charcoal border border-deep-charcoal focus:border-[#B89275] text-warm-white text-xs p-3 rounded-xl outline-none uppercase font-bold"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block font-display text-[10px] tracking-widest text-warm-taupe uppercase">
                    SKIN TYPE TAG
                  </label>
                  <input
                    type="text"
                    value={revSkinType}
                    onChange={(e) => setRevSkinType(e.target.value)}
                    placeholder="Sensitive & Dry Skin"
                    className="w-full bg-deep-charcoal border border-deep-charcoal focus:border-[#B89275] text-warm-white text-xs p-3 rounded-xl outline-none"
                  />
                </div>
              </div>

              <div className="flex items-center space-x-2 pt-2">
                <input
                  type="checkbox"
                  id="revVerified"
                  checked={revVerified}
                  onChange={(e) => setRevVerified(e.target.checked)}
                  className="w-4 h-4 accent-[#B89275]"
                />
                <label htmlFor="revVerified" className="text-xs text-warm-white font-display uppercase tracking-widest cursor-pointer">
                  SHOW "VERIFIED BUYER" BADGE
                </label>
              </div>

              <div className="pt-4 flex items-center justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setShowReviewModal(false)}
                  className="bg-deep-charcoal hover:bg-deep-charcoal/80 text-warm-white font-display text-xs tracking-wider px-5 py-3 rounded-xl uppercase font-bold"
                >
                  CANCEL
                </button>
                <button
                  type="submit"
                  className="bg-[#B89275] hover:bg-[#A37E62] text-white font-display text-xs tracking-wider px-6 py-3 rounded-xl uppercase font-bold flex items-center space-x-2"
                >
                  <Save className="w-4 h-4" />
                  <span>{editingReview ? 'UPDATE REVIEW' : 'PUBLISH BUYER REVIEW'}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* CREATE / EDIT PROMO CODE MODAL */}
      {showPromoModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#141414] rounded-[24px] border border-deep-charcoal p-6 sm:p-8 max-w-xl w-full space-y-6 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setShowPromoModal(false)}
              className="absolute top-6 right-6 text-warm-taupe hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <h3 className="font-display text-lg tracking-wider text-warm-white uppercase font-bold">
                {editingPromo ? 'EDIT PROMO CODE' : 'CREATE NEW PROMO CODE'}
              </h3>
              <p className="text-xs text-soft-stone font-body">
                Define promotional coupon codes, percentage/fixed discounts, and minimum order values.
              </p>
            </div>

            <form onSubmit={handleCreateOrUpdatePromo} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="block font-display text-[10px] tracking-widest text-warm-taupe uppercase">
                    PROMO CODE (UPPERCASE) *
                  </label>
                  <input
                    type="text"
                    required
                    value={promoCodeText}
                    onChange={(e) => setPromoCodeText(e.target.value)}
                    placeholder="e.g. GLAM20"
                    className="w-full bg-deep-charcoal border border-deep-charcoal focus:border-[#B89275] text-warm-white text-xs p-3 rounded-xl outline-none font-mono uppercase font-bold"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block font-display text-[10px] tracking-widest text-warm-taupe uppercase">
                    DISCOUNT TYPE *
                  </label>
                  <select
                    value={promoType}
                    onChange={(e) => setPromoType(e.target.value as any)}
                    className="w-full bg-deep-charcoal border border-deep-charcoal focus:border-[#B89275] text-warm-white text-xs p-3 rounded-xl outline-none"
                  >
                    <option value="percentage">Percentage Off (%)</option>
                    <option value="fixed">Fixed Dollar Off ($)</option>
                    <option value="free_shipping">Free Shipping</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="block font-display text-[10px] tracking-widest text-warm-taupe uppercase">
                    DISCOUNT VALUE ({promoType === 'percentage' ? '%' : '$'}) *
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    required
                    value={promoValue}
                    onChange={(e) => setPromoValue(e.target.value)}
                    placeholder="20"
                    className="w-full bg-deep-charcoal border border-deep-charcoal focus:border-[#B89275] text-warm-white text-xs p-3 rounded-xl outline-none font-mono"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block font-display text-[10px] tracking-widest text-warm-taupe uppercase">
                    MINIMUM SPEND REQUIREMENT ($)
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    value={promoMinSpend}
                    onChange={(e) => setPromoMinSpend(e.target.value)}
                    placeholder="50.00"
                    className="w-full bg-deep-charcoal border border-deep-charcoal focus:border-[#B89275] text-warm-white text-xs p-3 rounded-xl outline-none font-mono"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="block font-display text-[10px] tracking-widest text-warm-taupe uppercase">
                  APPLIES TO CATEGORY *
                </label>
                <select
                  value={promoAppliesTo}
                  onChange={(e) => setPromoAppliesTo(e.target.value)}
                  className="w-full bg-deep-charcoal border border-deep-charcoal focus:border-[#B89275] text-warm-white text-xs p-3 rounded-xl outline-none"
                >
                  <option value="All Products">All Products</option>
                  <option value="Skincare">Skincare Only</option>
                  <option value="Makeup">Makeup Only</option>
                  <option value="Body Care">Body Care Only</option>
                  <option value="Beauty Tools">Beauty Tools Only</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="block font-display text-[10px] tracking-widest text-warm-taupe uppercase">
                  PROMO DESCRIPTION *
                </label>
                <input
                  type="text"
                  required
                  value={promoDesc}
                  onChange={(e) => setPromoDesc(e.target.value)}
                  placeholder="20% OFF all luxury beauty formulations & couture lipstick"
                  className="w-full bg-deep-charcoal border border-deep-charcoal focus:border-[#B89275] text-warm-white text-xs p-3 rounded-xl outline-none"
                />
              </div>

              <div className="pt-4 flex items-center justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setShowPromoModal(false)}
                  className="bg-deep-charcoal hover:bg-deep-charcoal/80 text-warm-white font-display text-xs tracking-wider px-5 py-3 rounded-xl uppercase font-bold"
                >
                  CANCEL
                </button>
                <button
                  type="submit"
                  className="bg-[#B89275] hover:bg-[#A37E62] text-white font-display text-xs tracking-wider px-6 py-3 rounded-xl uppercase font-bold flex items-center space-x-2"
                >
                  <Save className="w-4 h-4" />
                  <span>{editingPromo ? 'UPDATE PROMO CODE' : 'CREATE PROMO CODE'}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ADD / EDIT JOURNAL ARTICLE MODAL */}
      {showArticleModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#141414] rounded-[24px] border border-deep-charcoal p-6 sm:p-8 max-w-xl w-full space-y-6 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setShowArticleModal(false)}
              className="absolute top-6 right-6 text-warm-taupe hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <h3 className="font-display text-lg tracking-wider text-warm-white uppercase font-bold">
                {editingArticle ? 'EDIT JOURNAL ARTICLE' : 'CREATE NEW JOURNAL ARTICLE'}
              </h3>
              <p className="text-xs text-soft-stone font-body">
                Publish skincare guides, makeup tutorials, or formulation articles live to your storefront.
              </p>
            </div>

            <form onSubmit={handleCreateOrUpdateArticle} className="space-y-4">
              <div className="space-y-1">
                <label className="block font-display text-[10px] tracking-widest text-warm-taupe uppercase">
                  ARTICLE TITLE *
                </label>
                <input
                  type="text"
                  required
                  value={artTitle}
                  onChange={(e) => setArtTitle(e.target.value)}
                  placeholder="e.g. Master the Velvet Matte Lip Without Any Drying"
                  className="w-full bg-deep-charcoal border border-deep-charcoal focus:border-[#B89275] text-warm-white text-xs p-3 rounded-xl outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="block font-display text-[10px] tracking-widest text-warm-taupe uppercase">
                  SUMMARY / EXCERPT *
                </label>
                <textarea
                  rows={2}
                  required
                  value={artSummary}
                  onChange={(e) => setArtSummary(e.target.value)}
                  placeholder="Pro editorial makeup secrets to achieve seamless matte lips..."
                  className="w-full bg-deep-charcoal border border-deep-charcoal focus:border-[#B89275] text-warm-white text-xs p-3 rounded-xl outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="block font-display text-[10px] tracking-widest text-warm-taupe uppercase">
                    CATEGORY *
                  </label>
                  <select
                    value={artCategory}
                    onChange={(e) => setArtCategory(e.target.value)}
                    className="w-full bg-deep-charcoal border border-deep-charcoal focus:border-[#B89275] text-warm-white text-xs p-3 rounded-xl outline-none"
                  >
                    <option value="Skincare Education">Skincare Education</option>
                    <option value="Makeup Tutorials">Makeup Tutorials</option>
                    <option value="Formulation Science">Formulation Science</option>
                    <option value="Editorial Rituals">Editorial Rituals</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="block font-display text-[10px] tracking-widest text-warm-taupe uppercase">
                    READ TIME
                  </label>
                  <input
                    type="text"
                    value={artReadTime}
                    onChange={(e) => setArtReadTime(e.target.value)}
                    placeholder="4 min read"
                    className="w-full bg-deep-charcoal border border-deep-charcoal focus:border-[#B89275] text-warm-white text-xs p-3 rounded-xl outline-none"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="block font-display text-[10px] tracking-widest text-warm-taupe uppercase">
                  AUTHOR *
                </label>
                <input
                  type="text"
                  required
                  value={artAuthor}
                  onChange={(e) => setArtAuthor(e.target.value)}
                  placeholder="Dr. Elena Vance, Lead Chemist"
                  className="w-full bg-deep-charcoal border border-deep-charcoal focus:border-[#B89275] text-warm-white text-xs p-3 rounded-xl outline-none"
                />
              </div>

              <div className="space-y-2 border-t border-deep-charcoal pt-3">
                <label className="block font-display text-[10px] tracking-widest text-[#B89275] uppercase font-bold">
                  COVER PHOTO UPLOADER & PREVIEW
                </label>

                <div className="flex space-x-4 items-center">
                  <div className="w-20 h-20 rounded-xl overflow-hidden bg-deep-charcoal border border-[#B89275]/50 flex-shrink-0">
                    <img src={artCoverImage} alt="Cover Preview" className="w-full h-full object-cover" />
                  </div>

                  <div className="flex-1 space-y-2">
                    <div className="bg-deep-charcoal border border-dashed border-[#B89275]/60 hover:border-[#B89275] p-3 rounded-xl relative text-center cursor-pointer">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleArticleFileUpload}
                        className="absolute inset-0 opacity-0 cursor-pointer"
                      />
                      <span className="text-[11px] font-display text-warm-white uppercase block font-bold">
                        UPLOAD PHOTO FROM COMPUTER
                      </span>
                    </div>

                    <input
                      type="url"
                      value={artCoverImage}
                      onChange={(e) => setArtCoverImage(e.target.value)}
                      placeholder="Or paste cover image URL"
                      className="w-full bg-deep-charcoal border border-deep-charcoal focus:border-[#B89275] text-warm-white text-[11px] p-2.5 rounded-xl outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-1">
                <label className="block font-display text-[10px] tracking-widest text-warm-taupe uppercase">
                  ARTICLE CONTENT (HTML / TEXT)
                </label>
                <textarea
                  rows={4}
                  value={artContentHtml}
                  onChange={(e) => setArtContentHtml(e.target.value)}
                  placeholder="<p class='lead'>Article body text...</p>"
                  className="w-full bg-deep-charcoal border border-deep-charcoal focus:border-[#B89275] text-warm-white text-xs p-3 rounded-xl outline-none font-mono"
                />
              </div>

              <div className="pt-4 flex items-center justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setShowArticleModal(false)}
                  className="bg-deep-charcoal hover:bg-deep-charcoal/80 text-warm-white font-display text-xs tracking-wider px-5 py-3 rounded-xl uppercase font-bold"
                >
                  CANCEL
                </button>
                <button
                  type="submit"
                  className="bg-[#B89275] hover:bg-[#A37E62] text-white font-display text-xs tracking-wider px-6 py-3 rounded-xl uppercase font-bold flex items-center space-x-2"
                >
                  <Save className="w-4 h-4" />
                  <span>{editingArticle ? 'UPDATE ARTICLE' : 'PUBLISH ARTICLE'}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ADD / EDIT PRODUCT MODAL */}
      {showAddProductModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#141414] rounded-[24px] border border-deep-charcoal p-6 sm:p-8 max-w-xl w-full space-y-6 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setShowAddProductModal(false)}
              className="absolute top-6 right-6 text-warm-taupe hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <h3 className="font-display text-lg tracking-wider text-warm-white uppercase font-bold">
                {editingProduct ? 'EDIT PRODUCT DETAILS' : 'CREATE NEW PRODUCT'}
              </h3>
              <p className="text-xs text-soft-stone font-body">
                Fill in product information or upload a product photo to publish it live instantly.
              </p>
            </div>

            <form onSubmit={handleCreateOrUpdateProduct} className="space-y-4">
              <div className="space-y-1">
                <label className="block font-display text-[10px] tracking-widest text-warm-taupe uppercase">
                  PRODUCT TITLE *
                </label>
                <input
                  type="text"
                  required
                  value={prodTitle}
                  onChange={(e) => setProdTitle(e.target.value)}
                  placeholder="e.g. Niacinamide Glow Illuminating Drops"
                  className="w-full bg-deep-charcoal border border-deep-charcoal focus:border-[#B89275] text-warm-white text-xs p-3 rounded-xl outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="block font-display text-[10px] tracking-widest text-warm-taupe uppercase">
                  SUBTITLE / KEY HIGHLIGHT
                </label>
                <input
                  type="text"
                  value={prodSubtitle}
                  onChange={(e) => setProdSubtitle(e.target.value)}
                  placeholder="e.g. 10% Niacinamide & Rosehip Radiance Concentrate"
                  className="w-full bg-deep-charcoal border border-deep-charcoal focus:border-[#B89275] text-warm-white text-xs p-3 rounded-xl outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="block font-display text-[10px] tracking-widest text-warm-taupe uppercase">
                    CATEGORY *
                  </label>
                  <select
                    value={prodCategory}
                    onChange={(e) => setProdCategory(e.target.value as any)}
                    className="w-full bg-deep-charcoal border border-deep-charcoal focus:border-[#B89275] text-warm-white text-xs p-3 rounded-xl outline-none"
                  >
                    <option value="Skincare">Skincare</option>
                    <option value="Makeup">Makeup</option>
                    <option value="Body Care">Body Care</option>
                    <option value="Beauty Tools">Beauty Tools</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="block font-display text-[10px] tracking-widest text-warm-taupe uppercase">
                    BADGE TAG
                  </label>
                  <input
                    type="text"
                    value={prodBadge}
                    onChange={(e) => setProdBadge(e.target.value)}
                    placeholder="NEW, BEST SELLER, VEGAN"
                    className="w-full bg-deep-charcoal border border-deep-charcoal focus:border-[#B89275] text-warm-white text-xs p-3 rounded-xl outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="block font-display text-[10px] tracking-widest text-warm-taupe uppercase">
                    PRICE ($ USD) *
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    required
                    value={prodPrice}
                    onChange={(e) => setProdPrice(e.target.value)}
                    className="w-full bg-deep-charcoal border border-deep-charcoal focus:border-[#B89275] text-warm-white text-xs p-3 rounded-xl outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block font-display text-[10px] tracking-widest text-warm-taupe uppercase">
                    COMPARE AT PRICE ($ USD)
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    value={prodComparePrice}
                    onChange={(e) => setProdComparePrice(e.target.value)}
                    placeholder="70.00"
                    className="w-full bg-deep-charcoal border border-deep-charcoal focus:border-[#B89275] text-warm-white text-xs p-3 rounded-xl outline-none"
                  />
                </div>
              </div>

              <div className="space-y-2 border-t border-deep-charcoal pt-3">
                <label className="block font-display text-[10px] tracking-widest text-[#B89275] uppercase font-bold">
                  PRODUCT PHOTO UPLOADER & PREVIEW
                </label>

                <div className="flex space-x-4 items-center">
                  <div className="w-16 h-16 rounded-xl overflow-hidden bg-deep-charcoal border border-[#B89275]/50 flex-shrink-0">
                    <img src={prodImage} alt="Product Preview" className="w-full h-full object-cover" />
                  </div>

                  <div className="flex-1 space-y-2">
                    <div className="bg-deep-charcoal border border-dashed border-[#B89275]/60 hover:border-[#B89275] p-3 rounded-xl relative text-center cursor-pointer">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleProductFileUpload}
                        className="absolute inset-0 opacity-0 cursor-pointer"
                      />
                      <span className="text-[11px] font-display text-warm-white uppercase block font-bold">
                        UPLOAD PHOTO FROM COMPUTER
                      </span>
                    </div>

                    <input
                      type="url"
                      value={prodImage}
                      onChange={(e) => setProdImage(e.target.value)}
                      placeholder="Or paste image URL"
                      className="w-full bg-deep-charcoal border border-deep-charcoal focus:border-[#B89275] text-warm-white text-[11px] p-2.5 rounded-xl outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-1">
                <label className="block font-display text-[10px] tracking-widest text-warm-taupe uppercase">
                  DESCRIPTION
                </label>
                <textarea
                  rows={3}
                  value={prodDescription}
                  onChange={(e) => setProdDescription(e.target.value)}
                  className="w-full bg-deep-charcoal border border-deep-charcoal focus:border-[#B89275] text-warm-white text-xs p-3 rounded-xl outline-none"
                />
              </div>

              <div className="pt-4 flex items-center justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setShowAddProductModal(false)}
                  className="bg-deep-charcoal hover:bg-deep-charcoal/80 text-warm-white font-display text-xs tracking-wider px-5 py-3 rounded-xl uppercase font-bold"
                >
                  CANCEL
                </button>
                <button
                  type="submit"
                  className="bg-[#B89275] hover:bg-[#A37E62] text-white font-display text-xs tracking-wider px-6 py-3 rounded-xl uppercase font-bold flex items-center space-x-2"
                >
                  <Save className="w-4 h-4" />
                  <span>{editingProduct ? 'UPDATE PRODUCT' : 'SAVE & PUBLISH PRODUCT'}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {/* CREATE / EDIT INSTAGRAM POST MODAL */}
      {showSocialModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#141414] rounded-[24px] border border-deep-charcoal p-6 sm:p-8 max-w-xl w-full space-y-6 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setShowSocialModal(false)}
              className="absolute top-6 right-6 text-warm-taupe hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <h3 className="font-display text-lg tracking-wider text-warm-white uppercase font-bold flex items-center space-x-2">
                <Instagram className="w-5 h-5 text-pink-400" />
                <span>{editingSocialPost ? 'EDIT INSTAGRAM POST CARD' : 'CREATE INSTAGRAM POST CARD'}</span>
              </h3>
              <p className="text-xs text-soft-stone font-body">
                Upload image, set likes count, caption, hashtags, and tag store products to feature on the live homepage gallery.
              </p>
            </div>

            <form onSubmit={handleCreateOrUpdateSocialPost} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="block font-display text-[10px] tracking-widest text-warm-taupe uppercase">
                    FILTER TAG / HASHTAG *
                  </label>
                  <select
                    value={spTag}
                    onChange={(e) => setSpTag(e.target.value)}
                    className="w-full bg-deep-charcoal border border-deep-charcoal focus:border-[#B89275] text-warm-white text-xs p-3 rounded-xl outline-none font-bold"
                  >
                    <option value="@glamgalbeauty">@glamgalbeauty</option>
                    <option value="#GLAMGALGlow">#GLAMGALGlow</option>
                    <option value="#GLAMGALRoutine">#GLAMGALRoutine</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="block font-display text-[10px] tracking-widest text-warm-taupe uppercase">
                    INSTAGRAM HANDLE *
                  </label>
                  <input
                    type="text"
                    required
                    value={spUsername}
                    onChange={(e) => setSpUsername(e.target.value)}
                    className="w-full bg-deep-charcoal border border-deep-charcoal focus:border-[#B89275] text-warm-white text-xs p-3 rounded-xl outline-none font-mono"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="block font-display text-[10px] tracking-widest text-warm-taupe uppercase">
                    LOCATION TAG
                  </label>
                  <input
                    type="text"
                    value={spLocation}
                    onChange={(e) => setSpLocation(e.target.value)}
                    placeholder="e.g. SoHo, New York"
                    className="w-full bg-deep-charcoal border border-deep-charcoal focus:border-[#B89275] text-warm-white text-xs p-3 rounded-xl outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block font-display text-[10px] tracking-widest text-warm-taupe uppercase">
                    TIME AGO TIMESTAMP
                  </label>
                  <input
                    type="text"
                    value={spTimeAgo}
                    onChange={(e) => setSpTimeAgo(e.target.value)}
                    placeholder="e.g. 2 HOURS AGO"
                    className="w-full bg-deep-charcoal border border-deep-charcoal focus:border-[#B89275] text-warm-white text-xs p-3 rounded-xl outline-none font-mono"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="block font-display text-[10px] tracking-widest text-warm-taupe uppercase">
                    LIKES COUNT *
                  </label>
                  <input
                    type="number"
                    required
                    value={spLikes}
                    onChange={(e) => setSpLikes(Number(e.target.value))}
                    className="w-full bg-deep-charcoal border border-deep-charcoal focus:border-[#B89275] text-warm-white text-xs p-3 rounded-xl outline-none font-mono"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block font-display text-[10px] tracking-widest text-warm-taupe uppercase">
                    COMMENTS COUNT *
                  </label>
                  <input
                    type="number"
                    required
                    value={spCommentsCount}
                    onChange={(e) => setSpCommentsCount(Number(e.target.value))}
                    className="w-full bg-deep-charcoal border border-deep-charcoal focus:border-[#B89275] text-warm-white text-xs p-3 rounded-xl outline-none font-mono"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="block font-display text-[10px] tracking-widest text-warm-taupe uppercase">
                  POST PHOTO IMAGE URL *
                </label>
                <input
                  type="url"
                  required
                  value={spUrl}
                  onChange={(e) => setSpUrl(e.target.value)}
                  placeholder="https://images.unsplash.com/..."
                  className="w-full bg-deep-charcoal border border-deep-charcoal focus:border-[#B89275] text-warm-white text-xs p-3 rounded-xl outline-none font-mono"
                />
              </div>

              <div className="space-y-1">
                <label className="block font-display text-[10px] tracking-widest text-warm-taupe uppercase">
                  POST CAPTION TEXT *
                </label>
                <textarea
                  rows={3}
                  required
                  value={spCaption}
                  onChange={(e) => setSpCaption(e.target.value)}
                  placeholder="Glass-skin glow achieved ✨ Step 1: Calming Rosewater Toner..."
                  className="w-full bg-deep-charcoal border border-deep-charcoal focus:border-[#B89275] text-warm-white text-xs p-3 rounded-xl outline-none font-body"
                />
              </div>

              {/* FEATURED PRODUCT IN LOOK */}
              <div className="space-y-3 pt-3 border-t border-deep-charcoal">
                <label className="block font-display text-[10px] tracking-widest text-amber-400 uppercase font-bold">
                  ATTACH FEATURED STORE ITEM (OPTIONAL)
                </label>

                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    value={spProductName}
                    onChange={(e) => setSpProductName(e.target.value)}
                    placeholder="Product Title (e.g. Rosewater Mist)"
                    className="bg-deep-charcoal border border-deep-charcoal focus:border-[#B89275] text-warm-white text-xs p-2.5 rounded-xl outline-none"
                  />
                  <input
                    type="text"
                    value={spProductPrice}
                    onChange={(e) => setSpProductPrice(e.target.value)}
                    placeholder="Price (e.g. $38.00)"
                    className="bg-deep-charcoal border border-deep-charcoal focus:border-[#B89275] text-warm-white text-xs p-2.5 rounded-xl outline-none"
                  />
                  <input
                    type="text"
                    value={spProductImage}
                    onChange={(e) => setSpProductImage(e.target.value)}
                    placeholder="Product Mockup Image Path"
                    className="bg-deep-charcoal border border-deep-charcoal focus:border-[#B89275] text-warm-white text-xs p-2.5 rounded-xl outline-none"
                  />
                  <input
                    type="text"
                    value={spProductLink}
                    onChange={(e) => setSpProductLink(e.target.value)}
                    placeholder="Product Link (/products/...)"
                    className="bg-deep-charcoal border border-deep-charcoal focus:border-[#B89275] text-warm-white text-xs p-2.5 rounded-xl outline-none"
                  />
                </div>
              </div>

              <div className="pt-4 flex items-center justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setShowSocialModal(false)}
                  className="bg-deep-charcoal hover:bg-deep-charcoal/80 text-warm-white font-display text-xs tracking-wider px-5 py-3 rounded-xl uppercase font-bold"
                >
                  CANCEL
                </button>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-pink-600 to-amber-500 hover:opacity-90 text-white font-display text-xs tracking-wider px-6 py-3 rounded-xl uppercase font-bold flex items-center space-x-2"
                >
                  <Save className="w-4 h-4" />
                  <span>{editingSocialPost ? 'UPDATE POST CARD' : 'PUBLISH POST CARD'}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ADD / EDIT VIDEO REEL MODAL */}
      {showVideoModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#141414] rounded-[24px] border border-deep-charcoal p-6 sm:p-8 max-w-xl w-full space-y-6 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setShowVideoModal(false)}
              className="absolute top-6 right-6 text-warm-taupe hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <h3 className="font-display text-lg tracking-wider text-warm-white uppercase font-bold flex items-center space-x-2">
                <Video className="w-5 h-5 text-amber-400" />
                <span>{editingVideo ? 'EDIT PRODUCT VIDEO REEL' : 'ADD NEW PRODUCT VIDEO REEL'}</span>
              </h3>
              <p className="text-xs text-soft-stone font-body">
                Upload video reels showcasing texture, application, and featured store products.
              </p>
            </div>

            <form onSubmit={handleCreateOrUpdateVideo} className="space-y-4">
              <div className="space-y-1">
                <label className="block font-display text-[10px] tracking-widest text-warm-taupe uppercase">
                  VIDEO REEL TITLE *
                </label>
                <input
                  type="text"
                  required
                  value={vidTitle}
                  onChange={(e) => setVidTitle(e.target.value)}
                  placeholder="e.g. Velvet Matte Lipstick Swatch & One-Swipe Application"
                  className="w-full bg-deep-charcoal border border-deep-charcoal focus:border-[#B89275] text-warm-white text-xs p-3 rounded-xl outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="block font-display text-[10px] tracking-widest text-warm-taupe uppercase">
                  SUBTITLE / DESCRIPTION
                </label>
                <textarea
                  rows={2}
                  value={vidSubtitle}
                  onChange={(e) => setVidSubtitle(e.target.value)}
                  placeholder="Watch Sora Kim demonstrate non-drying matte application..."
                  className="w-full bg-deep-charcoal border border-deep-charcoal focus:border-[#B89275] text-warm-white text-xs p-3 rounded-xl outline-none font-body"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="block font-display text-[10px] tracking-widest text-warm-taupe uppercase">
                    VIDEO DURATION (e.g. 0:45)
                  </label>
                  <input
                    type="text"
                    value={vidDuration}
                    onChange={(e) => setVidDuration(e.target.value)}
                    className="w-full bg-deep-charcoal border border-deep-charcoal focus:border-[#B89275] text-warm-white text-xs p-3 rounded-xl outline-none font-mono"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block font-display text-[10px] tracking-widest text-warm-taupe uppercase">
                    AUTHOR NAME
                  </label>
                  <input
                    type="text"
                    value={vidAuthorName}
                    onChange={(e) => setVidAuthorName(e.target.value)}
                    placeholder="Sora Kim"
                    className="w-full bg-deep-charcoal border border-deep-charcoal focus:border-[#B89275] text-warm-white text-xs p-3 rounded-xl outline-none"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="block font-display text-[10px] tracking-widest text-warm-taupe uppercase">
                  VIDEO MP4 FILE / STREAM URL *
                </label>
                <input
                  type="url"
                  required
                  value={vidUrl}
                  onChange={(e) => setVidUrl(e.target.value)}
                  placeholder="https://assets.mixkit.co/videos/preview/..."
                  className="w-full bg-deep-charcoal border border-deep-charcoal focus:border-[#B89275] text-warm-white text-xs p-3 rounded-xl outline-none font-mono"
                />
              </div>

              <div className="space-y-1">
                <label className="block font-display text-[10px] tracking-widest text-warm-taupe uppercase">
                  POSTER / COVER THUMBNAIL URL *
                </label>
                <input
                  type="url"
                  required
                  value={vidPosterImage}
                  onChange={(e) => setVidPosterImage(e.target.value)}
                  placeholder="Cover thumbnail image URL"
                  className="w-full bg-deep-charcoal border border-deep-charcoal focus:border-[#B89275] text-warm-white text-xs p-3 rounded-xl outline-none font-mono"
                />
              </div>

              <div className="space-y-3 pt-3 border-t border-deep-charcoal">
                <label className="block font-display text-[10px] tracking-widest text-amber-400 uppercase font-bold">
                  FEATURED PRODUCT TO SHOP
                </label>

                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    value={vidProdName}
                    onChange={(e) => setVidProdName(e.target.value)}
                    placeholder="Product Title (e.g. VELVET MATTE LIPSTICK)"
                    className="bg-deep-charcoal border border-deep-charcoal focus:border-[#B89275] text-warm-white text-xs p-3 rounded-xl outline-none"
                  />
                  <input
                    type="text"
                    value={vidProdPrice}
                    onChange={(e) => setVidProdPrice(e.target.value)}
                    placeholder="Price (e.g. $38.00)"
                    className="bg-deep-charcoal border border-deep-charcoal focus:border-[#B89275] text-warm-white text-xs p-3 rounded-xl outline-none"
                  />
                  <input
                    type="text"
                    value={vidProdHandle}
                    onChange={(e) => setVidProdHandle(e.target.value)}
                    placeholder="Product Handle (e.g. velvet-matte-lipstick)"
                    className="bg-deep-charcoal border border-deep-charcoal focus:border-[#B89275] text-warm-white text-xs p-3 rounded-xl outline-none font-mono"
                  />
                  <input
                    type="url"
                    value={vidProdImage}
                    onChange={(e) => setVidProdImage(e.target.value)}
                    placeholder="Product Thumbnail Image URL"
                    className="bg-deep-charcoal border border-deep-charcoal focus:border-[#B89275] text-warm-white text-xs p-3 rounded-xl outline-none font-mono"
                  />
                </div>
              </div>

              <div className="pt-4 flex items-center justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setShowVideoModal(false)}
                  className="bg-deep-charcoal hover:bg-deep-charcoal/80 text-warm-white font-display text-xs tracking-wider px-5 py-3 rounded-xl uppercase font-bold"
                >
                  CANCEL
                </button>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-amber-500 to-pink-600 hover:opacity-90 text-white font-display text-xs tracking-wider px-6 py-3 rounded-xl uppercase font-bold flex items-center space-x-2"
                >
                  <Save className="w-4 h-4" />
                  <span>{editingVideo ? 'UPDATE VIDEO REEL' : 'PUBLISH VIDEO REEL'}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
