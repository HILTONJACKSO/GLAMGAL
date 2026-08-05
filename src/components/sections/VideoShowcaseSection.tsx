import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useCMS } from '../../context/CMSContext';
import { useCart } from '../../context/CartContext';
import { VideoShowcaseItem } from '../../types/shopify';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  X,
  ShoppingBag,
  Sparkles,
  Clock,
  ExternalLink,
  Check,
  Heart,
  MessageCircle,
  Share2,
  Disc,
  Music,
  Video as VideoIcon,
} from 'lucide-react';

export const VideoShowcaseSection: React.FC = () => {
  const { state } = useCMS();
  const { addItem } = useCart();

  const secData = state.homepageSections.videoShowcase;
  const videos = state.videos || [];

  const [activeVideo, setActiveVideo] = useState<VideoShowcaseItem | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [addedToCartId, setAddedToCartId] = useState<string | null>(null);
  const [likedVideos, setLikedVideos] = useState<Record<string, boolean>>({});
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const videoRef = useRef<HTMLVideoElement>(null);

  if (secData && !secData.enabled) return null;
  if (videos.length === 0) return null;

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleAddToCart = (e: React.MouseEvent, handle: string) => {
    e.stopPropagation();
    const product = state.products.find((p) => p.handle === handle);
    if (product && product.variants[0]) {
      addItem(product.variants[0].id, 1);
      setAddedToCartId(handle);
      showToast(`Added ${product.title} to your bag!`);
      setTimeout(() => setAddedToCartId(null), 2500);
    }
  };

  const toggleLike = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setLikedVideos((prev) => {
      const isLiked = !prev[id];
      if (isLiked) showToast('Saved to your liked beauty reels!');
      return { ...prev, [id]: isLiked };
    });
  };

  const handleShare = (e: React.MouseEvent, title: string) => {
    e.stopPropagation();
    showToast(`Reel link for "${title}" copied to clipboard!`);
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Mock engagement stats for TikTok look
  const getMockLikes = (idx: number, isLiked: boolean) => {
    const base = (24.8 + idx * 12.3).toFixed(1);
    return isLiked ? `${(parseFloat(base) + 0.1).toFixed(1)}K` : `${base}K`;
  };

  const getMockComments = (idx: number) => `${(1.2 + idx * 0.8).toFixed(1)}K`;

  return (
    <section className="bg-gradient-to-b from-[#120D0B] via-[#1C1411] to-[#120D0B] text-warm-white py-24 border-t border-deep-charcoal relative overflow-hidden">
      {/* Background Ambient Pink & Gold Glow */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-pink-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* TOAST NOTIFICATION */}
      {toastMessage && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-black/90 text-white border border-pink-500/40 px-6 py-3 rounded-full text-xs font-display font-bold uppercase tracking-wider shadow-2xl backdrop-blur-md flex items-center space-x-2 animate-bounce">
          <Sparkles className="w-4 h-4 text-pink-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12 relative z-10">
        {/* SECTION HEADER (TIKTOK STYLE) */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-pink-500/20 via-amber-500/20 to-pink-500/20 border border-pink-500/30 backdrop-blur-md">
            <VideoIcon className="w-3.5 h-3.5 text-pink-400 animate-pulse" />
            <span className="font-display text-[10px] sm:text-xs font-bold tracking-mega text-pink-300 uppercase">
              {secData?.subtitle || 'TIKTOK BEAUTY REELS'}
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl tracking-widest text-warm-white uppercase font-black">
            {secData?.title || 'SEE GLAMGAL IN ACTION'}
          </h2>

          <p className="font-body text-xs sm:text-sm text-soft-stone leading-relaxed font-light max-w-xl mx-auto">
            {secData?.description ||
              'Watch high-definition texture reels, application tutorials, and real results from our lab artists.'}
          </p>
        </div>

        {/* TIKTOK VIDEO CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {videos.map((vid, idx) => {
            const isLiked = !!likedVideos[vid.id];

            return (
              <div
                key={vid.id}
                onClick={() => {
                  setActiveVideo(vid);
                  setIsPlaying(true);
                }}
                className="group relative aspect-[9/16] rounded-[32px] overflow-hidden bg-black border border-white/15 hover:border-pink-500/60 shadow-2xl hover:shadow-[0_0_40px_rgba(236,72,153,0.25)] transition-all duration-500 cursor-pointer flex flex-col justify-between"
              >
                {/* 1. AUTOPLAYING VIDEO BACKGROUND */}
                <video
                  ref={(el) => {
                    if (el) {
                      el.muted = true;
                      el.defaultMuted = true;
                      const playPromise = el.play();
                      if (playPromise !== undefined) {
                        playPromise.catch(() => {});
                      }
                    }
                  }}
                  src={vid.videoUrl}
                  poster={vid.posterImage}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  onCanPlay={(e) => {
                    e.currentTarget.muted = true;
                    e.currentTarget.play().catch(() => {});
                  }}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                />

                {/* Dark Gradient Overlay for Readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/95 pointer-events-none" />

                {/* 2. TIKTOK TOP BAR */}
                <div className="relative z-10 p-4 flex items-center justify-between">
                  <div className="flex items-center space-x-2 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-[10px] font-display font-bold uppercase tracking-wider text-pink-300">
                    <span className="w-2 h-2 rounded-full bg-pink-500 animate-ping" />
                    <span>REEL</span>
                  </div>

                  <div className="flex items-center space-x-1 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-mono text-amber-300 border border-white/10">
                    <Clock className="w-3 h-3" />
                    <span>{vid.duration}</span>
                  </div>
                </div>

                {/* 3. TIKTOK VERTICAL RIGHT ACTION SIDEBAR */}
                <div className="absolute right-3 bottom-28 z-20 flex flex-col items-center space-y-4">
                  {/* LIKE BUTTON */}
                  <button
                    onClick={(e) => toggleLike(e, vid.id)}
                    className="group/btn flex flex-col items-center text-white"
                    title="Like Reel"
                  >
                    <div
                      className={`w-11 h-11 rounded-full backdrop-blur-md border flex items-center justify-center transition-all ${
                        isLiked
                          ? 'bg-pink-600 border-pink-500 scale-110 shadow-lg shadow-pink-500/50'
                          : 'bg-black/60 border-white/20 hover:bg-white/20'
                      }`}
                    >
                      <Heart
                        className={`w-5 h-5 transition-colors ${
                          isLiked ? 'fill-white text-white' : 'text-white'
                        }`}
                      />
                    </div>
                    <span className="text-[10px] font-display font-bold mt-1 text-white shadow-sm">
                      {getMockLikes(idx, isLiked)}
                    </span>
                  </button>

                  {/* COMMENT BUTTON */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveVideo(vid);
                    }}
                    className="flex flex-col items-center text-white group/btn"
                    title="View Comments"
                  >
                    <div className="w-11 h-11 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all">
                      <MessageCircle className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-[10px] font-display font-bold mt-1 text-white shadow-sm">
                      {getMockComments(idx)}
                    </span>
                  </button>

                  {/* SHARE BUTTON */}
                  <button
                    onClick={(e) => handleShare(e, vid.title)}
                    className="flex flex-col items-center text-white group/btn"
                    title="Share Reel"
                  >
                    <div className="w-11 h-11 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all">
                      <Share2 className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-[10px] font-display font-bold mt-1 text-white shadow-sm">
                      Share
                    </span>
                  </button>

                  {/* SPINNING MUSIC VINYL DISC */}
                  <div className="pt-2">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-obsidian via-black to-pink-950 p-1 border border-white/30 shadow-lg animate-[spin_6s_linear_infinite]">
                      <div className="w-full h-full rounded-full bg-black flex items-center justify-center border border-white/20">
                        <Disc className="w-4 h-4 text-pink-400" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* 4. TIKTOK BOTTOM CAPTION & CREATOR AREA */}
                <div className="relative z-10 p-4 space-y-3">
                  {/* Creator Info */}
                  <div className="flex items-center space-x-2.5">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-pink-500 to-amber-400 p-0.5 shadow-md">
                      <div className="w-full h-full rounded-full bg-black flex items-center justify-center text-[10px] font-display font-bold text-white uppercase">
                        {vid.authorName.charAt(0)}
                      </div>
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center space-x-1.5">
                        <span className="font-display text-xs font-bold text-white uppercase tracking-wider truncate">
                          @{vid.authorName.toLowerCase().replace(/\s+/g, '')}
                        </span>
                        <span className="bg-pink-500 text-white rounded-full p-0.5 text-[8px] font-bold">
                          ✓
                        </span>
                      </div>
                      <span className="text-[9px] font-body text-pink-300 block truncate">
                        {vid.authorRole}
                      </span>
                    </div>
                  </div>

                  {/* Reel Caption */}
                  <div className="space-y-1 pr-12">
                    <h3 className="font-display text-xs font-bold text-white uppercase tracking-wider line-clamp-2 leading-snug">
                      {vid.title}
                    </h3>
                    <p className="text-[11px] font-body text-soft-stone line-clamp-2 leading-relaxed">
                      {vid.subtitle} <span className="text-pink-400 font-semibold">#GLAMGAL #BeautyReels</span>
                    </p>
                  </div>

                  {/* Audio Track Marquee */}
                  <div className="flex items-center space-x-1.5 text-[9px] font-display text-amber-300 uppercase tracking-widest pt-1">
                    <Music className="w-3 h-3 text-pink-400 animate-pulse shrink-0" />
                    <span className="truncate">
                      GLAMGAL Original Sound — {vid.authorName}
                    </span>
                  </div>

                  {/* 5. TIKTOK SHOP PRODUCT BANNER ("SHOP THE REEL") */}
                  <div className="bg-black/80 backdrop-blur-xl rounded-2xl p-2.5 border border-pink-500/30 flex items-center justify-between space-x-2 hover:border-pink-400 transition-all shadow-xl">
                    <div className="flex items-center space-x-2.5 min-w-0 flex-1">
                      <img
                        src={vid.featuredProductImage}
                        alt={vid.featuredProductName}
                        className="w-10 h-10 rounded-xl object-cover border border-amber-400/40 shrink-0"
                      />
                      <div className="min-w-0 flex-1">
                        <span className="text-[8px] font-display text-amber-400 font-bold tracking-widest uppercase block truncate">
                          TIKTOK SHOP
                        </span>
                        <h4 className="text-[10px] font-display font-bold text-white uppercase truncate">
                          {vid.featuredProductName}
                        </h4>
                        <span className="text-xs font-display font-bold text-pink-300 block">
                          {vid.featuredProductPrice}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={(e) => handleAddToCart(e, vid.featuredProductHandle)}
                      className="bg-gradient-to-r from-pink-500 to-amber-500 hover:from-pink-600 hover:to-amber-600 text-white font-display text-[10px] font-bold tracking-wider px-3 py-2 rounded-xl uppercase transition-all shadow-md shrink-0 flex items-center space-x-1"
                    >
                      {addedToCartId === vid.featuredProductHandle ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-white" />
                          <span>ADDED</span>
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="w-3.5 h-3.5" />
                          <span>BUY</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* FULL-SCREEN TIKTOK REEL LIGHTBOX MODAL */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-6 animate-fade-in">
          <div className="bg-[#140E0C] rounded-[32px] border border-pink-500/40 max-w-4xl w-full overflow-hidden shadow-2xl relative grid grid-cols-1 lg:grid-cols-12 max-h-[90vh]">
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 z-30 bg-black/70 hover:bg-pink-500 text-white hover:text-white p-2.5 rounded-full backdrop-blur-md transition-all border border-white/20"
              title="Close Reel"
            >
              <X className="w-5 h-5" />
            </button>

            {/* VIDEO PLAYER COLUMN */}
            <div className="lg:col-span-7 bg-black relative flex items-center justify-center min-h-[350px] lg:min-h-[500px]">
              <video
                ref={videoRef}
                src={activeVideo.videoUrl}
                poster={activeVideo.posterImage}
                autoPlay
                loop
                playsInline
                className="w-full h-full object-cover max-h-[550px]"
              />

              {/* VIDEO OVERLAY CONTROLS */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-black/80 backdrop-blur-md px-4 py-2.5 rounded-full border border-white/20">
                <button
                  onClick={togglePlay}
                  className="text-white hover:text-pink-400 transition-colors p-1"
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 fill-white" />}
                </button>

                <div className="flex items-center space-x-3">
                  <span className="text-[10px] font-mono text-pink-300 uppercase tracking-widest">
                    {activeVideo.duration}
                  </span>
                  <button
                    onClick={toggleMute}
                    className="text-white hover:text-pink-400 transition-colors p-1"
                  >
                    {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                  </button>
                </div>
              </div>
            </div>

            {/* FEATURED PRODUCT & TUTORIAL DETAILS SIDEBAR */}
            <div className="lg:col-span-5 p-5 sm:p-6 space-y-5 flex flex-col justify-between bg-[#1A120F] overflow-y-auto max-h-[85vh]">
              <div className="space-y-3.5">
                <div className="flex items-center space-x-2 text-pink-400">
                  <Sparkles className="w-4 h-4" />
                  <span className="font-display text-[10px] font-bold tracking-mega uppercase">
                    TIKTOK REEL SPOTLIGHT
                  </span>
                </div>

                <h3 className="font-display text-lg sm:text-xl tracking-wider text-white uppercase font-bold leading-tight">
                  {activeVideo.title}
                </h3>

                <p className="text-xs text-soft-stone font-body leading-relaxed">
                  {activeVideo.subtitle}
                </p>

                {/* Author Info */}
                <div className="flex items-center space-x-3 text-xs border-t border-white/10 pt-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-pink-500 to-amber-400 text-white flex items-center justify-center font-bold font-display text-xs shrink-0">
                    {activeVideo.authorName.charAt(0)}
                  </div>
                  <div>
                    <span className="font-bold text-white block uppercase font-display text-[11px]">
                      {activeVideo.authorName}
                    </span>
                    <span className="text-[10px] text-pink-300">{activeVideo.authorRole}</span>
                  </div>
                </div>
              </div>

              {/* SHOP THIS REEL PRODUCT CARD */}
              <div className="bg-[#241A16] rounded-2xl p-4 border border-pink-500/30 space-y-3.5 shadow-xl">
                <span className="font-display text-[10px] font-bold tracking-widest text-amber-400 uppercase block">
                  FEATURED PRODUCT IN THIS REEL
                </span>

                <div className="flex items-center space-x-3">
                  <img
                    src={activeVideo.featuredProductImage}
                    alt={activeVideo.featuredProductName}
                    className="w-14 h-14 rounded-xl object-cover border border-amber-400/40 shrink-0"
                  />

                  <div className="flex-1 space-y-0.5 min-w-0">
                    <h4 className="font-display text-xs tracking-wider text-white uppercase font-bold truncate">
                      {activeVideo.featuredProductName}
                    </h4>
                    <span className="font-display text-sm font-bold text-pink-300 block">
                      {activeVideo.featuredProductPrice} USD
                    </span>
                  </div>
                </div>

                {/* ACTION BUTTONS */}
                <div className="space-y-2.5 pt-1">
                  <button
                    onClick={(e) => handleAddToCart(e, activeVideo.featuredProductHandle)}
                    className="w-full bg-gradient-to-r from-pink-500 to-amber-500 hover:from-pink-600 hover:to-amber-600 text-white font-display text-xs font-bold tracking-widest py-3 rounded-xl transition-all flex items-center justify-center space-x-2 uppercase shadow-lg"
                  >
                    {addedToCartId === activeVideo.featuredProductHandle ? (
                      <>
                        <Check className="w-4 h-4 text-white" />
                        <span>ADDED TO BAG!</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-4 h-4" />
                        <span>BUY NOW • {activeVideo.featuredProductPrice}</span>
                      </>
                    )}
                  </button>

                  <Link
                    to={`/products/${activeVideo.featuredProductHandle}`}
                    onClick={() => setActiveVideo(null)}
                    className="w-full bg-white/10 hover:bg-pink-600 text-white font-display text-[11px] font-bold tracking-wider py-3 rounded-xl transition-all flex items-center justify-center space-x-2 uppercase border border-white/20 hover:border-pink-500 shadow-md"
                  >
                    <span>VIEW FULL PRODUCT DETAILS</span>
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
