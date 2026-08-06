import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Video, Heart, MessageCircle, ShoppingBag, ExternalLink, X, Check, Sparkles, Filter } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export interface VanityPost {
  id: string;
  handle: string;
  creatorName: string;
  platform: 'INSTAGRAM' | 'TIKTOK';
  skinTone: 'FAIR' | 'MEDIUM' | 'OLIVE' | 'DEEP' | 'RICH';
  lookType: 'GLOWY SKIN' | 'MATTE COUTURE' | 'NATURAL DEW' | 'EDITORIAL WING';
  imageUrl: string;
  videoUrl?: string;
  likes: string;
  caption: string;
  featuredProductName: string;
  featuredProductHandle: string;
  featuredProductImage: string;
  featuredProductPrice: string;
}

export const VIRTUAL_VANITY_POSTS: VanityPost[] = [
  {
    id: 'van-1',
    handle: '@amara_beauty',
    creatorName: 'Amara Johnson',
    platform: 'INSTAGRAM',
    skinTone: 'RICH',
    lookType: 'GLOWY SKIN',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    likes: '48.2K',
    caption: 'Zero filter skin barrier glow using @meetglamgal Luminous Barrier Serum + Body Nectar on collarbones! ✨ #GLAMGAL #GLAMGALVANITY',
    featuredProductName: 'LUMINOUS BARRIER SERUM',
    featuredProductHandle: 'luminous-barrier-serum',
    featuredProductImage: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80',
    featuredProductPrice: '$68.00',
  },
  {
    id: 'van-2',
    handle: '@sophia_glam',
    creatorName: 'Sophia Lin',
    platform: 'TIKTOK',
    skinTone: 'MEDIUM',
    lookType: 'MATTE COUTURE',
    imageUrl: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=800&q=80',
    likes: '34.5K',
    caption: 'Tested Velvet Matte Couture Lipstick during 12h workday. Zero fine line feathering! 💄 #GLAMGAL #TikTokMadeMeBuyIt',
    featuredProductName: 'VELVET MATTE LIPSTICK',
    featuredProductHandle: 'velvet-matte-lipstick',
    featuredProductImage: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=80',
    featuredProductPrice: '$38.00',
  },
  {
    id: 'van-3',
    handle: '@camila_skincare',
    creatorName: 'Camila Rodriguez',
    platform: 'INSTAGRAM',
    skinTone: 'OLIVE',
    lookType: 'NATURAL DEW',
    imageUrl: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80',
    likes: '29.1K',
    caption: 'My morning skin prep routine: Calming Rosewater Toner + Obsidian Gua Sha sculpting ritual. Drains puffiness instantly! 🌿 #GLAMGALVANITY',
    featuredProductName: 'OBSIDIAN GUA SHA',
    featuredProductHandle: 'obsidian-precision-contour-gua-sha',
    featuredProductImage: 'https://images.unsplash.com/photo-1608248597261-833258057467?auto=format&fit=crop&w=600&q=80',
    featuredProductPrice: '$45.00',
  },
  {
    id: 'van-4',
    handle: '@zara_skin',
    creatorName: 'Zara Al-Mansoor',
    platform: 'TIKTOK',
    skinTone: 'DEEP',
    lookType: 'EDITORIAL WING',
    imageUrl: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80',
    likes: '52.7K',
    caption: 'Brow Fixx Gel + 5 Well Eyeshadow Palette swatch on deep skin tones! 🎨 #GLAMGAL #RealBeauty',
    featuredProductName: 'BROW FIXX GEL TINT',
    featuredProductHandle: 'brow-fixx-gel-tint-shaper',
    featuredProductImage: 'https://images.unsplash.com/photo-1590156206657-b089c256037e?auto=format&fit=crop&w=600&q=80',
    featuredProductPrice: '$34.00',
  },
];

export const VirtualVanitySection: React.FC = () => {
  const { addItem } = useCart();
  const [selectedSkinTone, setSelectedSkinTone] = useState<string>('ALL');
  const [activePost, setActivePost] = useState<VanityPost | null>(null);
  const [addedHandle, setAddedHandle] = useState<string | null>(null);

  const filteredPosts = VIRTUAL_VANITY_POSTS.filter((post) => {
    if (selectedSkinTone === 'ALL') return true;
    return post.skinTone === selectedSkinTone;
  });

  const handleQuickBuy = (e: React.MouseEvent, handle: string) => {
    e.stopPropagation();
    addItem(handle, 1);
    setAddedHandle(handle);
    setTimeout(() => setAddedHandle(null), 2500);
  };

  return (
    <section className="bg-gradient-to-b from-[#17110E] via-[#201713] to-[#17110E] text-warm-white py-24 border-t border-deep-charcoal relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12 relative z-10">
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/5 border border-amber-400/30 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span className="font-display text-xs font-bold tracking-wider text-amber-300 uppercase">
              VIRTUAL VANITY • #GLAMGALVANITY
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl tracking-wider text-warm-white uppercase font-bold">
            REAL COMMUNITY LOOKS ACROSS ALL SKIN TONES
          </h2>

          <p className="font-body text-sm sm:text-base text-soft-stone leading-relaxed max-w-2xl mx-auto font-light">
            Browse live Instagram and TikTok posts from real beauty lovers using GLAMGAL. Filter by skin tone to see exact shade matches and texture payoff in high definition.
          </p>

          {/* SKIN TONE FILTER PILLS */}
          <div className="pt-4 flex flex-wrap justify-center items-center gap-2">
            <span className="text-[10px] font-display font-bold text-amber-300 uppercase tracking-widest flex items-center space-x-1 mr-2">
              <Filter className="w-3 h-3" />
              <span>SKIN TONE:</span>
            </span>

            {['ALL', 'FAIR', 'MEDIUM', 'OLIVE', 'DEEP', 'RICH'].map((tone) => (
              <button
                key={tone}
                onClick={() => setSelectedSkinTone(tone)}
                className={`text-[10px] font-display font-bold tracking-wider uppercase px-4 py-1.5 rounded-full transition-all ${
                  selectedSkinTone === tone
                    ? 'bg-amber-400 text-obsidian font-black shadow-md'
                    : 'bg-white/5 text-soft-stone border border-white/10 hover:bg-white/10'
                }`}
              >
                {tone}
              </button>
            ))}
          </div>
        </div>

        {/* VIRTUAL VANITY MASONRY GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              onClick={() => setActivePost(post)}
              className="bg-[#1F1714] rounded-[28px] border border-white/15 hover:border-amber-400/60 overflow-hidden group cursor-pointer shadow-2xl transition-all duration-500 flex flex-col justify-between"
            >
              {/* PHOTO / VIDEO CONTAINER */}
              <div className="relative aspect-[3/4] bg-black overflow-hidden">
                <img
                  src={post.imageUrl}
                  alt={post.creatorName}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/50 pointer-events-none" />

                {/* Top Badge: Platform & Skin Tone */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <div className="flex items-center space-x-1.5 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-display font-bold text-amber-300 border border-white/10">
                    {post.platform === 'INSTAGRAM' ? (
                      <Instagram className="w-3 h-3 text-pink-400" />
                    ) : (
                      <Video className="w-3 h-3 text-cyan-400" />
                    )}
                    <span>{post.platform}</span>
                  </div>

                  <span className="bg-amber-400 text-obsidian font-display text-[9px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                    {post.skinTone}
                  </span>
                </div>

                {/* Bottom Overlay: Creator & Likes */}
                <div className="absolute bottom-3 left-3 right-3 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-xs font-bold text-white uppercase tracking-wider">
                      {post.handle}
                    </span>
                    <span className="text-[10px] font-display font-bold text-pink-300 flex items-center space-x-1">
                      <Heart className="w-3 h-3 fill-pink-400 text-pink-400" />
                      <span>{post.likes}</span>
                    </span>
                  </div>
                  <p className="text-[11px] text-soft-stone font-body line-clamp-1">
                    {post.caption}
                  </p>
                </div>
              </div>

              {/* PRODUCT BANNER AT BOTTOM OF CARD */}
              <div className="p-3 bg-[#1A1310] border-t border-white/10 flex items-center justify-between space-x-2">
                <div className="flex items-center space-x-2 min-w-0">
                  <img
                    src={post.featuredProductImage}
                    alt={post.featuredProductName}
                    className="w-9 h-9 rounded-lg object-cover border border-amber-400/40 shrink-0"
                  />
                  <div className="min-w-0">
                    <span className="text-[8px] font-display text-amber-400 uppercase font-bold block truncate">
                      FEATURED LOOK
                    </span>
                    <h4 className="text-[10px] font-display font-bold text-white uppercase truncate">
                      {post.featuredProductName}
                    </h4>
                  </div>
                </div>

                <button
                  onClick={(e) => handleQuickBuy(e, post.featuredProductHandle)}
                  className="bg-amber-400 hover:bg-amber-300 text-obsidian text-[9px] font-display font-black px-3 py-1.5 rounded-lg uppercase transition-all shrink-0 flex items-center space-x-1"
                >
                  {addedHandle === post.featuredProductHandle ? (
                    <>
                      <Check className="w-3 h-3 text-obsidian" />
                      <span>ADDED</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-3 h-3" />
                      <span>SHOP</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* LIGHTBOX MODAL */}
      {activePost && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-6 animate-fade-in">
          <div className="bg-[#140E0C] rounded-[32px] border border-amber-500/40 max-w-3xl w-full overflow-hidden shadow-2xl relative grid grid-cols-1 md:grid-cols-12">
            <button
              onClick={() => setActivePost(null)}
              className="absolute top-4 right-4 z-20 bg-black/70 hover:bg-amber-500 text-white hover:text-obsidian p-2 rounded-full backdrop-blur-md transition-all border border-white/20"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="md:col-span-6 bg-black relative aspect-[3/4] md:aspect-auto">
              <img
                src={activePost.imageUrl}
                alt={activePost.creatorName}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="md:col-span-6 p-6 sm:p-8 space-y-6 flex flex-col justify-between bg-[#1C1411]">
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-amber-400">
                  <Sparkles className="w-4 h-4" />
                  <span className="font-display text-[10px] font-bold tracking-widest uppercase">
                    COMMUNITY VANITY SPOTLIGHT
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="font-display text-lg font-bold text-white uppercase">
                    {activePost.handle}
                  </h3>
                  <span className="text-[10px] font-display text-amber-300 uppercase block">
                    SKIN TONE MATCH: {activePost.skinTone} • {activePost.lookType}
                  </span>
                </div>

                <p className="text-xs text-soft-stone font-body leading-relaxed">
                  {activePost.caption}
                </p>
              </div>

              {/* SHOP THIS LOOK PRODUCT CARD */}
              <div className="bg-[#241A16] p-4 rounded-2xl border border-amber-500/30 space-y-3">
                <span className="text-[9px] font-display font-bold text-amber-400 uppercase block">
                  PRODUCTS USED IN THIS LOOK
                </span>

                <div className="flex items-center space-x-3">
                  <img
                    src={activePost.featuredProductImage}
                    alt={activePost.featuredProductName}
                    className="w-12 h-12 rounded-xl object-cover border border-amber-400/40 shrink-0"
                  />
                  <div className="min-w-0 flex-1">
                    <h4 className="font-display text-xs font-bold text-white uppercase truncate">
                      {activePost.featuredProductName}
                    </h4>
                    <span className="font-display text-xs font-bold text-amber-300 block">
                      {activePost.featuredProductPrice} USD
                    </span>
                  </div>
                </div>

                <div className="space-y-2 pt-1">
                  <button
                    onClick={(e) => handleQuickBuy(e, activePost.featuredProductHandle)}
                    className="w-full bg-amber-400 hover:bg-amber-300 text-obsidian font-display text-xs font-black tracking-widest py-3 rounded-xl uppercase transition-all flex items-center justify-center space-x-2 shadow-lg"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>ADD TO BAG • {activePost.featuredProductPrice}</span>
                  </button>

                  <Link
                    to={`/products/${activePost.featuredProductHandle}`}
                    onClick={() => setActivePost(null)}
                    className="w-full bg-white/10 hover:bg-white/20 text-white font-display text-[10px] font-bold tracking-widest py-2.5 rounded-xl uppercase transition-all flex items-center justify-center space-x-1 border border-white/20"
                  >
                    <span>VIEW PRODUCT DETAILS</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
