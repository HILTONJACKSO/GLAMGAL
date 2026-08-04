import React, { useState } from 'react';
import { Instagram, Heart, MessageCircle, Send, Bookmark, MoreHorizontal, CheckCircle2, Sparkles, X, ExternalLink } from 'lucide-react';
import { useCMS } from '../../context/CMSContext';
import { SocialPost } from '../../types/shopify';

export const SocialGallery: React.FC = () => {
  const { state } = useCMS();
  const sectionData = state.homepageSections.socialGallery || {
    id: 'socialGallery',
    title: 'JOIN THE GLAMGAL BEAUTY COMMUNITY',
    subtitle: '@GLAMGALBEAUTY',
    description: 'Tag @glamgalbeauty on Instagram & TikTok to be featured on our official global gallery.',
    ctaText: 'FOLLOW ON INSTAGRAM',
    ctaLink: 'https://instagram.com',
    enabled: true,
  };

  const posts = state.socialPosts && state.socialPosts.length > 0 ? state.socialPosts : [];

  const [likedPosts, setLikedPosts] = useState<Record<string, boolean>>({});
  const [savedPosts, setSavedPosts] = useState<Record<string, boolean>>({});
  const [likeCounts, setLikeCounts] = useState<Record<string, number>>(() => {
    const initial: Record<string, number> = {};
    posts.forEach(p => { initial[p.id] = p.likes; });
    return initial;
  });
  const [selectedTag, setSelectedTag] = useState<string>('ALL');
  const [activeModalPost, setActiveModalPost] = useState<SocialPost | null>(null);

  if (sectionData.enabled === false) {
    return null;
  }

  const toggleLike = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setLikedPosts(prev => {
      const isLiked = !prev[id];
      setLikeCounts(c => ({
        ...c,
        [id]: isLiked ? (c[id] || 0) + 1 : Math.max(0, (c[id] || 1) - 1)
      }));
      return { ...prev, [id]: isLiked };
    });
  };

  const toggleSave = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setSavedPosts(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredPosts = selectedTag === 'ALL'
    ? posts
    : posts.filter(p => p.tag?.toLowerCase() === selectedTag.toLowerCase());

  const tagsList = ['ALL', '@glamgalbeauty', '#GLAMGALGlow', '#GLAMGALRoutine'];

  return (
    <section className="bg-[#FAF7F5] py-20 border-t border-[#E8DFD8]" aria-label="Social Proof Community">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        {/* SECTION HEADER WITH INSTAGRAM BRANDING */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-amber-500/10 border border-pink-500/20">
            <Instagram className="w-4 h-4 text-pink-600" />
            <span className="font-display text-xs font-bold tracking-widest text-pink-700 uppercase">
              {sectionData.subtitle || '@GLAMGALBEAUTY'}
            </span>
          </div>

          <h2 className="font-display text-2xl sm:text-4xl tracking-widest text-obsidian uppercase font-black">
            {sectionData.title}
          </h2>

          <p className="text-xs sm:text-sm text-[#6E6259] font-body max-w-lg mx-auto font-light leading-relaxed">
            {sectionData.description}
          </p>

          {/* FILTER TAG PILLS */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {tagsList.map(tag => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-1.5 rounded-full font-display text-xs font-semibold tracking-wider transition-all ${
                  selectedTag === tag
                    ? 'bg-obsidian text-warm-white shadow-md scale-105'
                    : 'bg-white text-[#5C5046] border border-[#E3D5C8] hover:border-obsidian hover:text-obsidian'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* INSTAGRAM CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPosts.map((post) => {
            const isLiked = !!likedPosts[post.id];
            const isSaved = !!savedPosts[post.id];
            const currentLikes = likeCounts[post.id] || post.likes;

            return (
              <div
                key={post.id}
                className="bg-white rounded-2xl border border-[#E3D5C8]/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group"
              >
                {/* 1. INSTAGRAM HEADER */}
                <div className="px-4 py-3 flex items-center justify-between border-b border-gray-100 bg-white">
                  <div className="flex items-center space-x-2.5">
                    {/* Story Gradient Ring Around Avatar */}
                    <div className="p-[2px] bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 rounded-full">
                      <img
                        src={post.avatar}
                        alt={post.username}
                        className="w-8 h-8 rounded-full object-cover border border-white"
                      />
                    </div>
                    <div className="flex flex-col text-left">
                      <div className="flex items-center space-x-1">
                        <span className="font-display text-xs font-bold text-obsidian tracking-wide">
                          {post.username}
                        </span>
                        {post.isVerified && (
                          <CheckCircle2 className="w-3.5 h-3.5 fill-sky-500 text-white" />
                        )}
                      </div>
                      <span className="text-[10px] text-gray-400 font-body leading-none">
                        {post.location}
                      </span>
                    </div>
                  </div>

                  <button className="text-gray-400 hover:text-obsidian transition-colors">
                    <MoreHorizontal className="w-5 h-5" />
                  </button>
                </div>

                {/* 2. POST MEDIA */}
                <div
                  onClick={() => setActiveModalPost(post)}
                  className="relative aspect-square overflow-hidden bg-black cursor-pointer select-none group/img"
                >
                  <img
                    src={post.url}
                    alt={`Social post ${post.tag}`}
                    className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-700 opacity-95 group-hover/img:opacity-100"
                    loading="lazy"
                  />

                  {/* Tag Overlay Badge */}
                  <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full text-warm-white flex items-center space-x-1.5 text-[10px] font-display font-medium tracking-wider">
                    <Instagram className="w-3 h-3 text-pink-400" />
                    <span>{post.tag}</span>
                  </div>

                  {/* Hover Quick View Button */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-white/95 text-obsidian font-display text-[11px] font-bold tracking-widest uppercase px-4 py-2 rounded-full shadow-lg transform translate-y-2 group-hover/img:translate-y-0 transition-transform">
                      VIEW POST & SHOP
                    </span>
                  </div>
                </div>

                {/* 3. INSTAGRAM ACTION BAR */}
                <div className="p-4 flex-1 flex flex-col justify-between space-y-3 bg-white">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <button
                          onClick={(e) => toggleLike(post.id, e)}
                          className="group/btn focus:outline-none transition-transform active:scale-125"
                          title="Like"
                        >
                          <Heart
                            className={`w-6 h-6 transition-colors ${
                              isLiked
                                ? 'fill-rose-500 text-rose-500'
                                : 'text-gray-700 hover:text-rose-500'
                            }`}
                          />
                        </button>
                        <button
                          onClick={() => setActiveModalPost(post)}
                          className="text-gray-700 hover:text-obsidian transition-colors"
                          title="Comment"
                        >
                          <MessageCircle className="w-6 h-6" />
                        </button>
                        <a
                          href="https://instagram.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-700 hover:text-obsidian transition-colors"
                          title="Share"
                        >
                          <Send className="w-5 h-5 -rotate-12" />
                        </a>
                      </div>

                      <button
                        onClick={(e) => toggleSave(post.id, e)}
                        className="text-gray-700 hover:text-obsidian transition-colors"
                        title="Save"
                      >
                        <Bookmark
                          className={`w-6 h-6 ${
                            isSaved ? 'fill-obsidian text-obsidian' : ''
                          }`}
                        />
                      </button>
                    </div>

                    {/* Likes Count */}
                    <div className="text-xs font-bold text-obsidian tracking-wide">
                      {currentLikes.toLocaleString()} likes
                    </div>

                    {/* Caption */}
                    <div className="text-xs text-gray-700 leading-relaxed line-clamp-2">
                      <span className="font-bold text-obsidian mr-1.5">{post.username}</span>
                      {post.caption}
                    </div>

                    {/* Comments Count */}
                    <button
                      onClick={() => setActiveModalPost(post)}
                      className="text-[11px] text-gray-400 font-medium hover:underline block text-left"
                    >
                      View all {post.commentsCount} comments
                    </button>
                  </div>

                  {/* Time Ago */}
                  <div className="text-[9px] text-gray-400 tracking-widest font-mono uppercase pt-1 border-t border-gray-100">
                    {post.timeAgo}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* BOTTOM CTA BANNER */}
        <div className="bg-gradient-to-r from-obsidian via-[#1C1613] to-obsidian rounded-2xl p-8 text-warm-white text-center flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="font-display text-lg sm:text-xl font-bold tracking-widest uppercase text-warm-white">
              WANT TO BE FEATURED ON GLAMGAL?
            </h3>
            <p className="text-xs text-soft-stone font-light">
              Post your look using <span className="text-amber-300 font-semibold">#GLAMGALGlow</span> & tag <span className="text-amber-300 font-semibold">@glamgalbeauty</span>
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <a
              href={sectionData.ctaLink || 'https://instagram.com'}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 hover:opacity-90 text-white font-display text-xs font-bold tracking-widest px-6 py-3 rounded-full transition-all shadow-md hover:scale-105"
            >
              <Instagram className="w-4 h-4" />
              <span>{sectionData.ctaText || 'FOLLOW ON INSTAGRAM'}</span>
            </a>
          </div>
        </div>
      </div>

      {/* INSTAGRAM POST PREVIEW MODAL */}
      {activeModalPost && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl relative flex flex-col md:flex-row max-h-[90vh]">
            {/* Close Button */}
            <button
              onClick={() => setActiveModalPost(null)}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black text-white p-2 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left Image Side */}
            <div className="md:w-1/2 bg-black flex items-center justify-center relative min-h-[300px] md:min-h-[500px]">
              <img
                src={activeModalPost.url}
                alt={activeModalPost.username}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Details Side */}
            <div className="md:w-1/2 flex flex-col justify-between p-6 bg-white overflow-y-auto">
              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center space-x-3 pb-4 border-b border-gray-100">
                  <div className="p-[2px] bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 rounded-full">
                    <img
                      src={activeModalPost.avatar}
                      alt={activeModalPost.username}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex items-center space-x-1">
                      <span className="font-display text-sm font-bold text-obsidian">
                        {activeModalPost.username}
                      </span>
                      <CheckCircle2 className="w-4 h-4 fill-sky-500 text-white" />
                    </div>
                    <span className="text-xs text-gray-500 font-body">
                      {activeModalPost.location}
                    </span>
                  </div>
                </div>

                {/* Caption */}
                <div className="space-y-2">
                  <p className="text-xs sm:text-sm text-gray-800 leading-relaxed font-body">
                    <span className="font-bold text-obsidian mr-1.5">{activeModalPost.username}</span>
                    {activeModalPost.caption}
                  </p>
                  <span className="inline-block px-3 py-1 bg-pink-50 text-pink-700 font-display text-[10px] font-bold tracking-widest rounded-full uppercase">
                    {activeModalPost.tag}
                  </span>
                </div>

                {/* Featured Product Card inside Modal */}
                {activeModalPost.featuredProduct && (
                  <div className="p-4 bg-[#FAF7F5] rounded-xl border border-[#E8DFD8] space-y-3">
                    <div className="flex items-center justify-between text-[10px] font-display tracking-widest uppercase text-warm-taupe font-bold">
                      <span className="flex items-center space-x-1">
                        <Sparkles className="w-3 h-3 text-amber-500" />
                        <span>FEATURED IN THIS LOOK</span>
                      </span>
                    </div>

                    <div className="flex items-center space-x-3">
                      <img
                        src={activeModalPost.featuredProduct.image}
                        alt={activeModalPost.featuredProduct.name}
                        className="w-12 h-12 rounded-lg object-cover bg-white p-1 border border-gray-200"
                      />
                      <div className="flex-1">
                        <h4 className="font-display text-xs font-bold text-obsidian uppercase">
                          {activeModalPost.featuredProduct.name}
                        </h4>
                        <p className="text-xs font-bold text-pink-700">
                          {activeModalPost.featuredProduct.price}
                        </p>
                      </div>
                      <a
                        href={activeModalPost.featuredProduct.link}
                        className="inline-flex items-center space-x-1 bg-obsidian text-white font-display text-[10px] font-bold tracking-widest px-3 py-2 rounded-md hover:bg-pink-700 transition-colors uppercase"
                      >
                        <span>SHOP</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Action Footer */}
              <div className="pt-4 border-t border-gray-100 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => toggleLike(activeModalPost.id)}
                      className="focus:outline-none transition-transform active:scale-125"
                    >
                      <Heart
                        className={`w-6 h-6 ${
                          likedPosts[activeModalPost.id]
                            ? 'fill-rose-500 text-rose-500'
                            : 'text-gray-700'
                        }`}
                      />
                    </button>
                    <MessageCircle className="w-6 h-6 text-gray-700" />
                    <Send className="w-5 h-5 text-gray-700 -rotate-12" />
                  </div>
                  <button onClick={() => toggleSave(activeModalPost.id)}>
                    <Bookmark
                      className={`w-6 h-6 ${
                        savedPosts[activeModalPost.id]
                          ? 'fill-obsidian text-obsidian'
                          : 'text-gray-700'
                      }`}
                    />
                  </button>
                </div>

                <div className="text-xs font-bold text-obsidian">
                  {(likeCounts[activeModalPost.id] || activeModalPost.likes).toLocaleString()} likes
                </div>
                <div className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">
                  {activeModalPost.timeAgo}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

