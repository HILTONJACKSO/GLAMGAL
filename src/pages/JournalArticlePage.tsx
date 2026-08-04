import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getArticleByHandle, getProductByHandle, getArticles } from '../lib/shopify';
import { JournalArticle, Product } from '../types/shopify';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SEO } from '../components/common/SEO';
import { LoadingState } from '../components/common/LoadingState';
import { ProductCard } from '../components/product/ProductCard';
import { NewsletterForm } from '../components/sections/NewsletterForm';
import { useCart } from '../context/CartContext';
import {
  Clock,
  User,
  Calendar,
  Share2,
  Bookmark,
  Heart,
  Sparkles,
  Check,
  ArrowRight,
  ShoppingBag,
  Star,
  CheckCircle2,
  MessageCircle,
  ExternalLink,
} from 'lucide-react';

export const JournalArticlePage: React.FC = () => {
  const { handle } = useParams<{ handle: string }>();
  const { addItem } = useCart();
  const [article, setArticle] = useState<JournalArticle | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [moreArticles, setMoreArticles] = useState<JournalArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [articleLikes, setArticleLikes] = useState(428);
  const [hasLiked, setHasLiked] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    async function loadArticleData() {
      if (!handle) return;
      setLoading(true);
      try {
        const [data, allArts] = await Promise.all([
          getArticleByHandle(handle),
          getArticles(),
        ]);

        if (data) {
          setArticle(data);
          const prods: Product[] = [];
          for (const h of data.relatedProductHandles) {
            const p = await getProductByHandle(h);
            if (p) prods.push(p);
          }
          setRelatedProducts(prods);

          // Filter out current article for "More Stories"
          setMoreArticles(allArts.filter((a) => a.handle !== data.handle).slice(0, 3));
        }
      } catch (err) {
        console.error('Article load error:', err);
      } finally {
        setLoading(false);
      }
    }
    loadArticleData();
  }, [handle]);

  if (loading || !article) {
    return <LoadingState message="PREPARING EDITORIAL STORY..." />;
  }

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const handleLike = () => {
    if (!hasLiked) {
      setArticleLikes((prev) => prev + 1);
      setHasLiked(true);
    } else {
      setArticleLikes((prev) => prev - 1);
      setHasLiked(false);
    }
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    image: article.coverImage,
    author: { '@type': 'Person', name: article.author },
    datePublished: article.publishedAt,
    description: article.summary,
  };

  return (
    <article className="bg-[#FAF7F5] min-h-screen pb-24 text-obsidian font-body">
      <SEO title={article.title} description={article.summary} image={article.coverImage} jsonLd={jsonLd} />

      {/* TOP HEADER CONTAINER */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-6 pb-10 space-y-8">
        <Breadcrumbs items={[{ label: 'BEAUTY JOURNAL', href: '/journal' }, { label: article.title }]} />

        {/* HERO TITLE SECTION */}
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-warm-white border border-[#E3D5C8] shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span className="font-display text-[11px] font-bold tracking-mega text-warm-taupe uppercase">
              {article.category}
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl md:text-6xl tracking-widest text-obsidian uppercase font-black leading-tight sm:leading-none">
            {article.title}
          </h1>

          <p className="font-serif italic text-base sm:text-xl text-[#5C5046] max-w-2xl mx-auto leading-relaxed font-light">
            "{article.summary}"
          </p>

          {/* META & AUTHOR BAR */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-y border-[#E8DFD8] text-xs font-display text-warm-taupe uppercase">
            <div className="flex items-center space-x-4">
              {/* Author Avatar */}
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-obsidian border-2 border-amber-500/30 flex-shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
                    alt={article.author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-left leading-tight">
                  <span className="font-bold text-obsidian block text-xs tracking-wider">
                    {article.author}
                  </span>
                  <span className="text-[10px] text-[#8C7A6B] font-body lowercase tracking-normal">
                    Editorial Specialist
                  </span>
                </div>
              </div>

              <span className="hidden sm:inline text-gray-300">•</span>

              <div className="hidden sm:flex items-center space-x-4 text-[11px] tracking-widest">
                <span className="flex items-center space-x-1.5">
                  <Calendar className="w-3.5 h-3.5 text-obsidian" />
                  <span>{article.publishedAt}</span>
                </span>
                <span>•</span>
                <span className="flex items-center space-x-1.5">
                  <Clock className="w-3.5 h-3.5 text-obsidian" />
                  <span>{article.readTime}</span>
                </span>
              </div>
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex items-center space-x-2">
              <button
                onClick={handleLike}
                className={`flex items-center space-x-1.5 px-3.5 py-2 rounded-full border transition-all ${
                  hasLiked
                    ? 'bg-rose-50 border-rose-200 text-rose-600 font-bold'
                    : 'bg-white border-[#E3D5C8] text-[#5C5046] hover:border-obsidian'
                }`}
                title="Like article"
              >
                <Heart className={`w-4 h-4 ${hasLiked ? 'fill-rose-500 text-rose-500' : ''}`} />
                <span className="text-xs font-mono">{articleLikes}</span>
              </button>

              <button
                onClick={() => setIsBookmarked(!isBookmarked)}
                className={`p-2 rounded-full border transition-all ${
                  isBookmarked
                    ? 'bg-obsidian text-white border-obsidian'
                    : 'bg-white border-[#E3D5C8] text-[#5C5046] hover:border-obsidian'
                }`}
                title="Bookmark article"
              >
                <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-white' : ''}`} />
              </button>

              <button
                onClick={handleShare}
                className="flex items-center space-x-1.5 px-4 py-2 bg-obsidian hover:bg-pink-700 text-white font-display text-[11px] font-bold tracking-widest rounded-full transition-all shadow-xs"
                title="Share article link"
              >
                {copiedLink ? <Check className="w-4 h-4 text-amber-300" /> : <Share2 className="w-4 h-4" />}
                <span>{copiedLink ? 'LINK COPIED' : 'SHARE'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* HERO COVER IMAGE BANNER */}
        <div className="relative aspect-[16/9] sm:aspect-[21/9] overflow-hidden rounded-2xl border border-[#E3D5C8] bg-obsidian shadow-xl group">
          <img
            src={article.coverImage}
            alt={article.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 opacity-95"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 via-transparent to-transparent pointer-events-none" />

          <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-warm-white text-[10px] font-display tracking-widest uppercase">
            <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
              EDITORIAL EXCLUSIVE • GLAMGAL BEAUTY LABS
            </span>
            <span className="hidden sm:inline-block opacity-80">
              PHOTOGRAPHY BY GLAMGAL STUDIO
            </span>
          </div>
        </div>
      </div>

      {/* MAIN TWO-COLUMN LAYOUT (BODY CONTENT + STICKY SIDEBAR) */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* LEFT COLUMN: EDITORIAL CONTENT */}
        <div className="lg:col-span-8 space-y-10">
          {/* EDITORIAL ESSENTIALS HIGHLIGHT BOX */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E3D5C8] shadow-sm space-y-4 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center space-x-2 text-amber-700 font-display text-xs font-bold tracking-widest uppercase">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>EDITORIAL HIGHLIGHTS & KEY TAKEAWAYS</span>
            </div>

            <ul className="space-y-2.5 text-xs sm:text-sm text-[#5C5046] font-body leading-relaxed">
              <li className="flex items-start space-x-3">
                <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-800 font-display font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                  1
                </span>
                <span>
                  <strong>Hydration Base First:</strong> Prepare lips with warm moisture and oil-encapsulated serums prior to matte application.
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-800 font-display font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                  2
                </span>
                <span>
                  <strong>Center-Out Bullet Technique:</strong> Apply color directly from the bullet center out to prevent heavy buildup on corners.
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-800 font-display font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                  3
                </span>
                <span>
                  <strong>Feather-Free Satin Cushion:</strong> Enjoy 12-hour high-pigment payoff without cracking or dryness.
                </span>
              </li>
            </ul>
          </div>

          {/* ARTICLE HTML BODY CONTENT */}
          <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#E3D5C8] shadow-sm space-y-6">
            <div
              className="prose prose-lg max-w-none text-obsidian leading-relaxed space-y-6 font-body text-sm sm:text-base prose-headings:font-display prose-headings:uppercase prose-headings:tracking-widest prose-headings:font-bold prose-p:text-[#4A3F35] prose-strong:text-obsidian prose-a:text-pink-700 hover:prose-a:underline"
              dangerouslySetInnerHTML={{ __html: article.contentHtml }}
            />

            {/* FEEDBACK HELPFUL BAR */}
            <div className="pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-gray-500 font-display uppercase tracking-wider">
                WAS THIS TUTORIAL HELPFUL TO YOUR BEAUTY RITUAL?
              </div>

              <div className="flex items-center space-x-3">
                <button
                  onClick={handleLike}
                  className={`inline-flex items-center space-x-2 px-5 py-2.5 rounded-full font-display text-xs font-bold tracking-widest transition-all ${
                    hasLiked
                      ? 'bg-rose-500 text-white shadow-md'
                      : 'bg-[#FAF7F5] text-obsidian border border-[#E3D5C8] hover:bg-obsidian hover:text-white'
                  }`}
                >
                  <Heart className={`w-4 h-4 ${hasLiked ? 'fill-white' : ''}`} />
                  <span>{hasLiked ? 'THANK YOU!' : `YES (${articleLikes})`}</span>
                </button>
              </div>
            </div>
          </div>

          {/* AUTHOR BIO SPOTLIGHT CARD */}
          <div className="bg-[#1C1613] text-warm-white rounded-2xl p-6 sm:p-8 space-y-4 border border-deep-charcoal shadow-lg">
            <span className="text-[10px] font-display tracking-mega text-amber-400 uppercase font-bold">
              ABOUT THE AUTHOR
            </span>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
                alt={article.author}
                className="w-16 h-16 rounded-full object-cover border-2 border-amber-500 flex-shrink-0"
              />
              <div className="space-y-1">
                <h4 className="font-display text-base tracking-wider text-warm-white uppercase font-bold">
                  {article.author}
                </h4>
                <p className="text-xs text-soft-stone font-light leading-relaxed">
                  Global Editorial Makeup Artist with over 12+ years backstage at Paris, New York, and Milan fashion weeks. Sora specializes in clinical barrier-first lip care and high-payoff couture pigments.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: STICKY FEATURED PRODUCTS SIDEBAR */}
        <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
          <div className="bg-white rounded-2xl p-6 border border-[#E3D5C8] shadow-lg space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <span className="font-display text-xs font-bold tracking-widest text-obsidian uppercase">
                FEATURED IN THIS ARTICLE
              </span>
              <span className="bg-pink-50 text-pink-700 text-[10px] font-display font-bold tracking-widest px-2.5 py-1 rounded-full uppercase">
                PRO PICK
              </span>
            </div>

            {relatedProducts.length > 0 ? (
              <div className="space-y-6">
                {relatedProducts.map((product) => {
                  const firstVariant = product.variants[0];
                  const priceStr = parseFloat(
                    firstVariant?.price.amount || product.priceRange.minVariantPrice.amount
                  ).toFixed(2);

                  return (
                    <div key={product.id} className="space-y-4 group">
                      {/* Product Image */}
                      <div className="relative aspect-square rounded-xl overflow-hidden bg-[#FAF7F5] border border-gray-200">
                        <img
                          src={product.featuredImage?.url}
                          alt={product.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        {product.badges?.[0] && (
                          <span className="absolute top-3 left-3 bg-obsidian text-white font-display text-[9px] font-bold tracking-widest px-2.5 py-1 rounded-full uppercase">
                            {product.badges[0].text}
                          </span>
                        )}
                      </div>

                      {/* Title & Meta */}
                      <div className="space-y-1">
                        <span className="text-[10px] font-display text-[#A68064] uppercase font-bold block">
                          {product.category}
                        </span>
                        <Link
                          to={`/products/${product.handle}`}
                          className="font-display text-sm tracking-wider text-obsidian uppercase font-bold hover:underline block"
                        >
                          {product.title}
                        </Link>
                        <p className="text-xs text-gray-500 font-body line-clamp-2">
                          {product.subtitle || product.description}
                        </p>
                      </div>

                      {/* Rating & Price */}
                      <div className="flex items-center justify-between text-xs pt-1">
                        <div className="flex items-center space-x-1">
                          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                          <span className="font-bold text-obsidian">{product.rating || 4.9}</span>
                          <span className="text-gray-400 text-[10px]">({product.reviewCount || 189})</span>
                        </div>
                        <span className="font-display text-sm font-bold text-obsidian">
                          ${priceStr} USD
                        </span>
                      </div>

                      {/* Shades Preview if available */}
                      {product.variants.some((v) => v.shadeHex) && (
                        <div className="space-y-1.5 pt-2 border-t border-gray-100">
                          <span className="text-[10px] font-display text-gray-500 uppercase tracking-widest block font-medium">
                            AVAILABLE SHADES ({product.variants.length})
                          </span>
                          <div className="flex items-center space-x-2">
                            {product.variants.map((v) => (
                              <div
                                key={v.id}
                                className="w-5 h-5 rounded-full border border-gray-300 shadow-xs cursor-pointer hover:scale-110 transition-transform"
                                style={{ backgroundColor: v.shadeHex || '#8B0000' }}
                                title={v.title}
                              />
                            ))}
                          </div>
                        </div>
                      )}

                      {/* CTA Buttons */}
                      <div className="pt-2 space-y-2">
                        <button
                          onClick={() => {
                            if (firstVariant) {
                              addItem(firstVariant.id, 1);
                            }
                          }}
                          className="w-full bg-obsidian hover:bg-pink-700 text-white font-display text-xs font-bold tracking-widest py-3 rounded-xl transition-all flex items-center justify-center space-x-2 uppercase shadow-md"
                        >
                          <ShoppingBag className="w-4 h-4" />
                          <span>ADD TO BAG • ${priceStr}</span>
                        </button>

                        <Link
                          to={`/products/${product.handle}`}
                          className="w-full bg-[#FAF7F5] hover:bg-[#E8DFD8] text-obsidian font-display text-xs font-bold tracking-widest py-2.5 rounded-xl transition-all flex items-center justify-center space-x-1.5 uppercase border border-[#E3D5C8]"
                        >
                          <span>VIEW PRODUCT DETAILS</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="text-xs text-gray-500 font-body">No products listed.</div>
            )}
          </div>
        </div>
      </div>

      {/* BOTTOM SECTION: MORE RECOMMENDED STORIES */}
      {moreArticles.length > 0 && (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-20 border-t border-[#E8DFD8] space-y-10">
          <div className="flex items-center justify-between">
            <div>
              <span className="font-display text-xs tracking-mega text-warm-taupe uppercase font-bold block">
                MORE FROM THE BEAUTY JOURNAL
              </span>
              <h3 className="font-display text-2xl sm:text-3xl tracking-widest text-obsidian uppercase font-black">
                RECOMMENDED EDITORIAL STORIES
              </h3>
            </div>

            <Link
              to="/journal"
              className="hidden sm:inline-flex items-center space-x-2 font-display text-xs font-bold tracking-widest text-obsidian uppercase hover:underline"
            >
              <span>VIEW ALL STORIES</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {moreArticles.map((art) => (
              <Link
                key={art.id}
                to={`/journal/${art.handle}`}
                className="bg-white rounded-2xl border border-[#E3D5C8] overflow-hidden group hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="aspect-[16/10] overflow-hidden bg-obsidian relative">
                    <img
                      src={art.coverImage}
                      alt={art.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-95"
                    />
                    <span className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-white font-display text-[9px] font-bold tracking-widest px-2.5 py-1 rounded-full uppercase">
                      {art.category}
                    </span>
                  </div>

                  <div className="p-6 space-y-2">
                    <span className="text-[10px] text-warm-taupe font-mono uppercase block tracking-wider">
                      {art.publishedAt} • {art.readTime}
                    </span>
                    <h4 className="font-display text-base tracking-wider text-obsidian uppercase font-bold group-hover:text-pink-700 transition-colors line-clamp-2">
                      {art.title}
                    </h4>
                    <p className="text-xs text-gray-600 font-body line-clamp-2">
                      {art.summary}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 flex items-center text-xs font-display font-bold tracking-widest text-obsidian group-hover:text-pink-700 uppercase space-x-2">
                  <span>READ STORY</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* EDITORIAL NEWSLETTER BANNER */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-16">
        <NewsletterForm />
      </div>
    </article>
  );
};

