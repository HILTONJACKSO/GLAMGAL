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
  ArrowRight,
  Clock,
  User,
  ExternalLink,
  Check,
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

  const handleAddToCart = (handle: string) => {
    const product = state.products.find((p) => p.handle === handle);
    if (product && product.variants[0]) {
      addItem(product.variants[0].id, 1);
      setAddedToCartId(handle);
      setTimeout(() => setAddedToCartId(null), 2500);
    }
  };

  return (
    <section className="bg-gradient-to-b from-[#181210] via-[#241B17] to-[#181210] text-warm-white py-24 border-t border-deep-charcoal relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-14 relative z-10">
        {/* SECTION HEADER */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/5 border border-amber-400/30 backdrop-blur-md">
            <Play className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            <span className="font-display text-[10px] sm:text-xs font-bold tracking-mega text-amber-300 uppercase">
              {secData?.subtitle || 'COUTURE IN MOTION'}
            </span>
          </div>

          <h2 className="font-display text-2xl sm:text-4xl md:text-5xl tracking-widest text-warm-white uppercase font-black">
            {secData?.title || 'SEE GLAMGAL IN ACTION'}
          </h2>

          <p className="font-body text-xs sm:text-sm text-soft-stone leading-relaxed font-light max-w-xl mx-auto">
            {secData?.description ||
              'Watch high-definition texture reels, application tutorials, and real results from our lab artists.'}
          </p>
        </div>

        {/* VIDEO CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((vid) => (
            <div
              key={vid.id}
              onClick={() => {
                setActiveVideo(vid);
                setIsPlaying(true);
              }}
              className="bg-[#1F1916] rounded-2xl border border-white/10 overflow-hidden group cursor-pointer hover:border-amber-400/50 hover:shadow-2xl transition-all duration-500 flex flex-col justify-between"
            >
              {/* AUTOPLAYING VIDEO THUMBNAIL CONTAINER */}
              <div className="relative aspect-[4/5] overflow-hidden bg-black">
                <video
                  src={vid.videoUrl}
                  poster={vid.posterImage}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                {/* Duration & Live Reel Badge */}
                <div className="absolute top-3 left-3 flex items-center space-x-1.5 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-mono text-amber-300 border border-white/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
                  <Clock className="w-3 h-3 ml-0.5" />
                  <span>{vid.duration}</span>
                </div>


                {/* Featured Product Tag at Bottom of Thumbnail */}
                <div className="absolute bottom-3 left-3 right-3 bg-black/80 backdrop-blur-md rounded-xl p-2.5 border border-white/10 flex items-center space-x-3">
                  <img
                    src={vid.featuredProductImage}
                    alt={vid.featuredProductName}
                    className="w-9 h-9 rounded-lg object-cover flex-shrink-0 border border-amber-400/30"
                  />
                  <div className="flex-1 min-w-0">
                    <span className="text-[9px] font-display text-amber-300 tracking-wider uppercase block truncate">
                      FEATURED PRODUCT
                    </span>
                    <h4 className="text-[11px] font-display font-bold text-white uppercase truncate">
                      {vid.featuredProductName}
                    </h4>
                  </div>
                  <span className="text-xs font-display font-bold text-amber-400 flex-shrink-0">
                    {vid.featuredProductPrice}
                  </span>
                </div>
              </div>

              {/* CARD DETAILS */}
              <div className="p-5 space-y-3">
                <div className="flex items-center space-x-2 text-[10px] text-warm-taupe font-display uppercase tracking-wider">
                  <User className="w-3 h-3 text-amber-400" />
                  <span className="font-bold text-white">{vid.authorName}</span>
                  <span>•</span>
                  <span>{vid.authorRole}</span>
                </div>

                <h3 className="font-display text-sm tracking-wider text-warm-white uppercase font-bold group-hover:text-amber-300 transition-colors line-clamp-2">
                  {vid.title}
                </h3>

                <p className="text-xs text-soft-stone font-body line-clamp-2 leading-relaxed">
                  {vid.subtitle}
                </p>

                <div className="pt-2 flex items-center justify-between text-xs font-display font-bold text-amber-400 group-hover:translate-x-1 transition-transform uppercase">
                  <span>WATCH TUTORIAL & SHOP</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FULL-SCREEN VIDEO LIGHTBOX MODAL */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 animate-fade-in">
          <div className="bg-[#171210] rounded-[24px] border border-amber-500/30 max-w-4xl w-full overflow-hidden shadow-2xl relative grid grid-cols-1 lg:grid-cols-12 max-h-[90vh]">
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 z-20 bg-black/60 hover:bg-amber-500 text-white hover:text-obsidian p-2 rounded-full backdrop-blur-md transition-all border border-white/20"
              title="Close Video"
            >
              <X className="w-5 h-5" />
            </button>

            {/* VIDEO PLAYER COLUMN */}
            <div className="lg:col-span-7 bg-black relative flex items-center justify-center min-h-[300px] lg:min-h-[450px]">
              <video
                ref={videoRef}
                src={activeVideo.videoUrl}
                poster={activeVideo.posterImage}
                autoPlay
                loop
                playsInline
                className="w-full h-full object-cover max-h-[500px]"
              />

              {/* VIDEO OVERLAY CONTROLS */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-black/70 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                <button
                  onClick={togglePlay}
                  className="text-white hover:text-amber-400 transition-colors p-1"
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 fill-white" />}
                </button>

                <div className="flex items-center space-x-2">
                  <span className="text-[10px] font-mono text-amber-300 uppercase tracking-widest">
                    {activeVideo.duration}
                  </span>
                  <button
                    onClick={toggleMute}
                    className="text-white hover:text-amber-400 transition-colors p-1"
                  >
                    {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                  </button>
                </div>
              </div>
            </div>

            {/* FEATURED PRODUCT & TUTORIAL DETAILS SIDEBAR */}
            <div className="lg:col-span-5 p-6 sm:p-8 space-y-6 flex flex-col justify-between bg-[#1C1613]">
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-amber-400">
                  <Sparkles className="w-4 h-4" />
                  <span className="font-display text-[10px] font-bold tracking-mega uppercase">
                    GLAMGAL TUTORIAL REEL
                  </span>
                </div>

                <h3 className="font-display text-lg tracking-wider text-white uppercase font-bold">
                  {activeVideo.title}
                </h3>

                <p className="text-xs text-soft-stone font-body leading-relaxed">
                  {activeVideo.subtitle}
                </p>

                {/* Author Info */}
                <div className="pt-2 flex items-center space-x-3 text-xs border-t border-white/10 pt-4">
                  <div className="w-8 h-8 rounded-full bg-amber-500 text-obsidian flex items-center justify-center font-bold font-display text-xs">
                    {activeVideo.authorName.charAt(0)}
                  </div>
                  <div>
                    <span className="font-bold text-white block uppercase font-display text-[11px]">
                      {activeVideo.authorName}
                    </span>
                    <span className="text-[10px] text-warm-taupe">{activeVideo.authorRole}</span>
                  </div>
                </div>
              </div>

              {/* SHOP THIS REEL PRODUCT CARD */}
              <div className="bg-[#241C18] rounded-2xl p-4 border border-amber-500/30 space-y-4 shadow-lg">
                <span className="font-display text-[10px] font-bold tracking-widest text-amber-400 uppercase block">
                  FEATURED IN THIS REEL
                </span>

                <div className="flex items-center space-x-4">
                  <img
                    src={activeVideo.featuredProductImage}
                    alt={activeVideo.featuredProductName}
                    className="w-16 h-16 rounded-xl object-cover border border-white/10 flex-shrink-0"
                  />

                  <div className="flex-1 space-y-1">
                    <h4 className="font-display text-xs tracking-wider text-white uppercase font-bold">
                      {activeVideo.featuredProductName}
                    </h4>
                    <span className="font-display text-sm font-bold text-amber-400 block">
                      {activeVideo.featuredProductPrice} USD
                    </span>
                  </div>
                </div>

                {/* ACTION BUTTONS */}
                <div className="space-y-2 pt-2">
                  <button
                    onClick={() => handleAddToCart(activeVideo.featuredProductHandle)}
                    className="w-full bg-amber-500 hover:bg-amber-400 text-obsidian font-display text-xs font-bold tracking-widest py-3 rounded-xl transition-all flex items-center justify-center space-x-2 uppercase shadow-md"
                  >
                    {addedToCartId === activeVideo.featuredProductHandle ? (
                      <>
                        <Check className="w-4 h-4 text-obsidian" />
                        <span>ADDED TO BAG!</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-4 h-4" />
                        <span>ADD TO BAG • {activeVideo.featuredProductPrice}</span>
                      </>
                    )}
                  </button>

                  <Link
                    to={`/products/${activeVideo.featuredProductHandle}`}
                    className="w-full bg-white/5 hover:bg-white/10 text-white font-display text-[11px] font-bold tracking-widest py-2.5 rounded-xl transition-all flex items-center justify-center space-x-1.5 uppercase border border-white/10"
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
