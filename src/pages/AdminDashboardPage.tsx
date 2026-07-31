import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useCMS } from '../context/CMSContext';
import { Product, JournalArticle } from '../types/shopify';
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
} from 'lucide-react';

export const AdminDashboardPage: React.FC = () => {
  const {
    state,
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
  } = useCMS();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState<'products' | 'journal' | 'hero' | 'homepage' | 'media' | 'pages' | 'shopify'>('journal');
  const [saveNotification, setSaveNotification] = useState('');
  const [newImageUrl, setNewImageUrl] = useState('');
  
  // Product Modal State
  const [showAddProductModal, setShowAddProductModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  // Journal Modal State
  const [showArticleModal, setShowArticleModal] = useState(false);
  const [editingArticle, setEditingArticle] = useState<JournalArticle | null>(null);

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

  const handleShopifyCredentialsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    triggerSaveNotification(`Saved Shopify domain "${shopifyDomain}" & Access Token!`);
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
    setProdComparePrice('70.00');
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
      <SEO title="Admin Control Center — GLAMGAL CMS" description="Manage products, journal articles, homepage sections, page content, hero campaign & media assets." />

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
            EDITORIAL & CATALOG
          </span>

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
            onClick={() => setActiveTab('products')}
            className={`w-full text-left font-display text-xs tracking-wider uppercase px-4 py-3 rounded-xl flex items-center space-x-3 transition-colors ${
              activeTab === 'products' ? 'bg-[#B89275] text-white font-bold' : 'text-warm-white hover:bg-deep-charcoal'
            }`}
          >
            <Package className="w-4 h-4" />
            <span>PRODUCTS MANAGER</span>
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
                if (confirm('Reset all CMS products, articles & content to default settings?')) {
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
          {/* TAB 1: JOURNAL ARTICLES MANAGER */}
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

              {/* Journal Articles Cards */}
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

          {/* TAB 2: SHOPIFY CONNECTIVITY */}
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

              <div className="bg-[#1A1612] rounded-2xl p-6 border border-[#B89275]/50 space-y-4">
                <div className="flex items-center space-x-3 text-[#B89275]">
                  <AlertTriangle className="w-5 h-5 flex-shrink-0" />
                  <h3 className="font-display text-xs tracking-wider uppercase font-bold text-warm-white">
                    WHY DOES SHOPIFY SAY "THIS STORE WILL BE RIGHT BACK"?
                  </h3>
                </div>

                <p className="text-xs text-soft-stone font-body leading-relaxed">
                  If you see <strong className="text-warm-white">"This store will be right back"</strong> or <strong className="text-warm-white">"Start a free trial"</strong> when checking out, your Shopify store is currently password-protected or in trial mode. Here is how to make your Shopify checkout live:
                </p>

                <div className="bg-deep-charcoal p-4 rounded-xl space-y-2 text-xs font-body border border-deep-charcoal">
                  <div className="flex items-start space-x-2">
                    <span className="font-bold text-[#B89275]">Step 1:</span>
                    <span>Log into your official <a href="https://admin.shopify.com" target="_blank" rel="noreferrer" className="text-warm-white underline font-bold">Shopify Admin Portal ↗</a>.</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="font-bold text-[#B89275]">Step 2:</span>
                    <span>Go to <strong>Online Store → Preferences → Password Protection</strong>.</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="font-bold text-[#B89275]">Step 3:</span>
                    <span>Uncheck <em>"Restrict access to visitors with the password"</em> and click <strong>Save</strong>.</span>
                  </div>
                </div>
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

          {/* TAB 3: HERO CAMPAIGN EDITOR */}
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

          {/* TAB 4: PRODUCTS MANAGER */}
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

          {/* TAB 5: HOMEPAGE SECTIONS MANAGER */}
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

          {/* TAB 6: MEDIA LIBRARY */}
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

          {/* TAB 7: PAGES CONTENT MANAGER */}
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
        </main>
      </div>

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

              {/* Direct Cover Image Upload Box */}
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

              {/* Direct Product Image Upload Box */}
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
    </div>
  );
};
