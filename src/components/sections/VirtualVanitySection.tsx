import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Video, Heart, ExternalLink, X, Sparkles, Filter, MoveRight } from 'lucide-react';

export interface VanityPost {
  id: string;
  handle: string;
  creatorName: string;
  platform: 'INSTAGRAM' | 'TIKTOK';
  skinTone: 'FAIR' | 'MEDIUM' | 'OLIVE' | 'DEEP' | 'RICH';
  lookType: 'GLOWY SKIN' | 'MATTE COUTURE' | 'NATURAL DEW' | 'EDITORIAL WING';
  imageUrl: string;
  likes: string;
  caption: string;
  featuredProductName: string;
  featuredProductHandle: string;
  featuredProductImage: string;
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
    caption: 'Zero filter skin barrier glow using Luminous Barrier Serum + Body Nectar on collarbones! ✨ #GLAMGAL #GLAMGALVANITY',
    featuredProductName: 'LUMINOUS BARRIER SERUM',
    featuredProductHandle: 'luminous-barrier-serum',
    featuredProductImage: '/calming_rosewater_toner_mockup.png',
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
    featuredProductImage: '/liquid_velvet_lipstick_mockup.png',
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
    featuredProductImage: '/ultimate_brow_eye_cream_liner_mockup.png',
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
    featuredProductImage: '/polished_smoothing_body_scrub_mockup.png',
  },
];

export const VirtualVanitySection: React.FC = () => {
  const [selectedSkinTone, setSelectedSkinTone] = useState<string>('ALL');
  const [activePost, setActivePost] = useState<VanityPost | null>(null);

  const filteredPosts = VIRTUAL_VANITY_POSTS.filter((post) => {
    if (selectedSkinTone === 'ALL') return true;
    return post.skinTone === selectedSkinTone;
  });

  return (
    <section className="bg-white text-obsidian py-28 lg:py-36 border-t border-[#E3D6C5] relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12 relative z-10">
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white border border-[#B89275]/40 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#B89275]" />
            <span className="font-display text-[10px] sm:text-xs font-bold tracking-mega text-[#A68064] uppercase">
              READER BEAUTY GALLERY • #GLAMGALVANITY
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl tracking-tight text-obsidian uppercase font-black">
            VIRTUAL VANITY
          </h2>

          <p className="font-body text-xs sm:text-sm text-[#5C5046] leading-relaxed max-w-2xl mx-auto font-light">
            Real reader street style, live beauty posts, and skin match results across all complexions. Filter by skin tone to explore exact shade pairings.
          </p>

          {/* SKIN TONE FILTER PILLS */}
          <div className="pt-4 flex flex-wrap justify-center items-center gap-2">
            <span className="text-[10px] font-display font-bold text-[#A68064] uppercase tracking-widest flex items-center space-x-1 mr-2">
              <Filter className="w-3 h-3 text-[#B89275]" />
              <span>SKIN MATCH:</span>
            </span>

            {['ALL', 'FAIR', 'MEDIUM', 'OLIVE', 'DEEP', 'RICH'].map((tone) => (
              <button
                key={tone}
                onClick={() => setSelectedSkinTone(tone)}
                className={`text-[10px] font-display font-bold tracking-wider uppercase px-4 py-2 rounded-full transition-all ${
                  selectedSkinTone === tone
                    ? 'bg-obsidian text-white font-black shadow-md'
                    : 'bg-white text-[#5C5046] border border-[#E3D6C5] hover:bg-obsidian hover:text-white'
                }`}
              >
                {tone}
              </button>
            ))}
          </div>
        </div>

        {/* HIGH-FASHION EDITORIAL CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              onClick={() => setActivePost(post)}
              className="bg-[#FAF7F2] rounded-3xl border border-[#E3D6C5] hover:border-[#B89275] p-4 shadow-xs hover:shadow-xl transition-all duration-500 font-serif flex flex-col justify-between group cursor-pointer text-obsidian"
            >
              {/* PHOTO / VIDEO CONTAINER */}
              <div className="relative aspect-[3/4] bg-black rounded-2xl overflow-hidden mb-4">
                <img
                  src={post.imageUrl}
                  alt={post.creatorName}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/40 pointer-events-none" />

                {/* Top Badge: Platform & Skin Tone */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <div className="flex items-center space-x-1.5 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-[9px] font-display font-bold text-white border border-white/20">
                    {post.platform === 'INSTAGRAM' ? (
                      <Instagram className="w-3 h-3 text-[#B89275]" />
                    ) : (
                      <Video className="w-3 h-3 text-[#B89275]" />
                    )}
                    <span>{post.platform}</span>
                  </div>

                  <span className="bg-white text-obsidian font-display text-[9px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                    {post.skinTone}
                  </span>
                </div>

                {/* Bottom Overlay: Creator & Likes */}
                <div className="absolute bottom-3 left-3 right-3 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-xs font-bold text-white uppercase tracking-wider">
                      {post.handle}
                    </span>
                    <span className="text-[10px] font-display font-bold text-[#B89275] flex items-center space-x-1">
                      <Heart className="w-3 h-3 fill-[#B89275] text-[#B89275]" />
                      <span>{post.likes}</span>
                    </span>
                  </div>
                  <p className="text-[11px] text-white/80 font-serif line-clamp-1 italic">
                    "{post.caption}"
                  </p>
                </div>
              </div>

              {/* PRODUCT BANNER AT BOTTOM OF CARD */}
              <div className="p-3 bg-black rounded-2xl border border-white/15 flex items-center justify-between space-x-2">
                <div className="flex items-center space-x-2.5 min-w-0 flex-1">
                  <img
                    src={post.featuredProductImage}
                    alt={post.featuredProductName}
                    className="w-10 h-10 rounded-xl object-cover border border-white/20 shrink-0"
                  />
                  <div className="min-w-0 flex-1">
                    <span className="text-[8px] font-display text-[#B89275] uppercase font-bold block truncate">
                      COMMUNITY LOOK
                    </span>
                    <h4 className="text-[10px] font-serif font-bold text-white uppercase truncate">
                      {post.featuredProductName}
                    </h4>
                  </div>
                </div>

                <a
                  href="https://glamgalbeauty.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="bg-white hover:bg-[#B89275] text-obsidian hover:text-white text-[9px] font-display font-black px-3.5 py-2 rounded-xl uppercase transition-all shrink-0 flex items-center space-x-1"
                >
                  <span>STORE</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* LIGHTBOX MODAL */}
      {activePost && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-6 animate-fade-in">
          <div className="bg-[#141414] rounded-3xl border border-white/20 max-w-3xl w-full overflow-hidden shadow-2xl relative grid grid-cols-1 md:grid-cols-12">
            <button
              onClick={() => setActivePost(null)}
              className="absolute top-4 right-4 z-20 bg-white/10 hover:bg-white text-white hover:text-obsidian p-2.5 rounded-full backdrop-blur-md transition-all border border-white/20"
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

            <div className="md:col-span-6 p-6 sm:p-8 space-y-6 flex flex-col justify-between bg-[#1A1A1A]">
              <div className="space-y-4 font-serif">
                <div className="flex items-center space-x-2 text-[#B89275]">
                  <Sparkles className="w-4 h-4" />
                  <span className="font-display text-[10px] font-bold tracking-widest uppercase">
                    VIRTUAL VANITY DOSSIER
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="font-serif text-xl font-bold text-white uppercase">
                    {activePost.handle}
                  </h3>
                  <span className="text-[10px] font-display text-[#B89275] uppercase block font-bold">
                    SKIN TONE MATCH: {activePost.skinTone} • {activePost.lookType}
                  </span>
                </div>

                <p className="text-xs text-white/80 font-body leading-relaxed">
                  "{activePost.caption}"
                </p>
              </div>

              {/* SHOP THIS LOOK PRODUCT CARD */}
              <div className="bg-black p-4 rounded-2xl border border-white/20 space-y-3 font-serif">
                <span className="text-[9px] font-display font-bold text-[#B89275] uppercase block">
                  FEATURED BEAUTY FORMULATION
                </span>

                <div className="flex items-center space-x-3">
                  <img
                    src={activePost.featuredProductImage}
                    alt={activePost.featuredProductName}
                    className="w-12 h-12 rounded-xl object-cover border border-white/20 shrink-0"
                  />
                  <div className="min-w-0 flex-1">
                    <h4 className="font-serif text-xs font-bold text-white uppercase truncate">
                      {activePost.featuredProductName}
                    </h4>
                    <span className="font-display text-[10px] font-bold text-white/60 block uppercase">
                      OFFICIAL FORMULATION
                    </span>
                  </div>
                </div>

                <div className="space-y-2 pt-1">
                  <a
                    href="https://glamgalbeauty.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#B89275] hover:bg-white hover:text-obsidian text-white font-display text-xs font-bold tracking-widest py-3 rounded-full uppercase transition-all flex items-center justify-center space-x-2 shadow-lg"
                  >
                    <span>VISIT OFFICIAL STORE ↗</span>
                  </a>

                  <Link
                    to={`/products/${activePost.featuredProductHandle}`}
                    onClick={() => setActivePost(null)}
                    className="w-full bg-white/10 hover:bg-white/20 text-white font-display text-[10px] font-bold tracking-widest py-2.5 rounded-full uppercase transition-all flex items-center justify-center space-x-1 border border-white/20"
                  >
                    <span>VIEW FORMULATION DOSSIER</span>
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
