import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useCMS } from '../../context/CMSContext';
import { VideoShowcaseItem } from '../../types/shopify';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  X,
  Sparkles,
  Clock,
  ExternalLink,
  Video as VideoIcon,
  MoveRight,
} from 'lucide-react';

export const VideoShowcaseSection: React.FC = () => {
  const { state } = useCMS();
  const secData = state.homepageSections.videoShowcase;
  const videos = state.videos || [];

  const [activeVideo, setActiveVideo] = useState<VideoShowcaseItem | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);

  if (secData && !secData.enabled) return null;
  if (videos.length === 0) return null;

  const featuredVideo = videos[0];
  const galleryVideos = videos.slice(1);

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

  return (
    <section className="bg-white text-obsidian py-28 lg:py-36 border-t border-[#E3D6C5] relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12 relative z-10">
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#E3D6C5]">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white border border-[#B89275]/40 shadow-xs">
              <VideoIcon className="w-3.5 h-3.5 text-[#B89275] animate-pulse" />
              <span className="font-display text-[10px] sm:text-xs font-bold tracking-mega text-[#A68064] uppercase">
                EDITORIAL VIDEO DOSSIER
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl tracking-tight text-obsidian uppercase font-black">
              BEAUTY MASTERCLASSES
            </h2>

            <p className="font-body text-xs sm:text-sm text-[#5C5046] leading-relaxed font-light">
              Watch 4K high-definition texture reels, application masterclasses, and dermatological skin tips curated by GLAMGAL senior chemists.
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <a
              href="https://glamgalbeauty.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-[#B89275] hover:bg-obsidian text-white font-display text-xs font-bold tracking-widest uppercase px-6 py-3 rounded-full transition-all shadow-md"
            >
              <span>VISIT OFFICIAL STORE ↗</span>
            </a>
          </div>
        </div>

        {/* L'OFFICIEL ASYMMETRICAL EDITORIAL SPREAD GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* LEFT COLUMN: LARGE SPOTLIGHT FEATURED VIDEO HERO CARD */}
          {featuredVideo && (
            <div
              onClick={() => {
                setActiveVideo(featuredVideo);
                setIsPlaying(true);
              }}
              className="lg:col-span-7 group relative rounded-3xl overflow-hidden bg-black border border-[#E3D6C5] hover:border-[#B89275] shadow-xl transition-all duration-500 cursor-pointer flex flex-col justify-between min-h-[420px] sm:min-h-[500px]"
            >
              {/* Autoplay Video Background */}
              <video
                src={featuredVideo.videoUrl}
                poster={featuredVideo.posterImage}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                onCanPlay={(e) => {
                  e.currentTarget.muted = true;
                  e.currentTarget.play().catch(() => {});
                }}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-95"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/60 pointer-events-none" />

              {/* Top Header Badge */}
              <div className="relative z-10 p-6 flex items-center justify-between">
                <span className="bg-obsidian/90 backdrop-blur-md border border-white/20 text-white font-display text-[9px] font-bold tracking-widest px-3.5 py-1.5 rounded-full uppercase">
                  COVER STORY TUTORIAL
                </span>

                <div className="flex items-center space-x-1.5 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] font-mono text-amber-300 border border-white/20">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{featuredVideo.duration}</span>
                </div>
              </div>

              {/* Central Interactive Floating DRAG Badge */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-20 h-20 rounded-full bg-white text-obsidian shadow-2xl flex flex-col items-center justify-center font-display text-xs font-bold uppercase tracking-wider group-hover:scale-110 transition-all duration-300 border-2 border-obsidian pointer-events-none">
                <Play className="w-5 h-5 fill-obsidian ml-0.5" />
                <span className="text-[9px] mt-0.5">DRAG</span>
              </div>

              {/* Bottom Editorial Caption */}
              <div className="relative z-10 p-6 sm:p-8 space-y-3 bg-gradient-to-t from-black via-black/80 to-transparent pt-12">
                <span className="text-[10px] font-display font-bold text-[#B89275] tracking-widest uppercase block">
                  FEATURED MASTERCLASS • {featuredVideo.authorRole}
                </span>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold uppercase text-white tracking-tight leading-snug">
                  {featuredVideo.title}
                </h3>

                <p className="font-body text-xs sm:text-sm text-white/80 line-clamp-2 leading-relaxed max-w-xl font-light">
                  {featuredVideo.subtitle}
                </p>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[10px] font-body text-white/60">
                    08.21.2026 by @{featuredVideo.authorName.toLowerCase().replace(/\s+/g, '')}
                  </span>

                  <div className="inline-flex items-center space-x-2 bg-white text-obsidian font-display text-[10px] font-bold tracking-widest uppercase px-4 py-2 rounded-full group-hover:bg-[#B89275] group-hover:text-white transition-all">
                    <span>WATCH FULL DOSSIER</span>
                    <MoveRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* RIGHT COLUMN: STACKED / CAROUSEL EDITORIAL VIDEO CARDS */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            {galleryVideos.map((vid) => (
              <div
                key={vid.id}
                onClick={() => {
                  setActiveVideo(vid);
                  setIsPlaying(true);
                }}
                className="group relative rounded-2xl overflow-hidden bg-[#FAF7F2] border border-[#E3D6C5] hover:border-[#B89275] p-4 transition-all duration-300 cursor-pointer flex flex-col sm:flex-row gap-4 items-center shadow-xs hover:shadow-xl text-obsidian"
              >
                {/* Small Video Thumbnail Frame */}
                <div className="relative w-full sm:w-36 aspect-[4/3] rounded-xl overflow-hidden shrink-0 bg-black">
                  <video
                    src={vid.videoUrl}
                    poster={vid.posterImage}
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                  />
                  <div className="absolute inset-0 bg-black/30 pointer-events-none" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-white text-obsidian flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="w-3.5 h-3.5 fill-obsidian ml-0.5" />
                    </div>
                  </div>
                </div>

                {/* Article Info */}
                <div className="space-y-1.5 min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-display font-bold text-[#A68064] tracking-widest uppercase">
                      REEL MASTERCLASS
                    </span>
                    <span className="text-[9px] font-mono text-warm-taupe">
                      {vid.duration}
                    </span>
                  </div>

                  <h4 className="font-serif text-sm font-bold uppercase text-obsidian tracking-wide group-hover:text-[#B89275] transition-colors leading-snug line-clamp-1">
                    {vid.title}
                  </h4>

                  <p className="text-[11px] font-body text-[#5C5046] line-clamp-1">
                    {vid.subtitle}
                  </p>

                  <div className="pt-1 flex items-center justify-between">
                    <span className="text-[9px] font-body text-warm-taupe">
                      by @{vid.authorName.toLowerCase().replace(/\s+/g, '')}
                    </span>

                    <a
                      href="https://glamgalbeauty.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-[9px] font-display font-bold text-amber-300 hover:text-white uppercase tracking-wider"
                    >
                      STORE ↗
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FULL-SCREEN EDITORIAL VIDEO MODAL */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-2xl p-4 sm:p-6 animate-fade-in">
          {/* CLOSE BUTTON */}
          <button
            onClick={() => setActiveVideo(null)}
            className="absolute top-6 right-6 z-50 p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full border border-white/20 transition-all"
            aria-label="Close Masterclass"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-12 bg-neutral-900 rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
            {/* LEFT: 16:9 / PORTRAIT PLAYER */}
            <div className="lg:col-span-8 relative aspect-[9/16] max-h-[70vh] lg:max-h-[80vh] bg-black flex items-center justify-center">
              <video
                ref={videoRef}
                src={activeVideo.videoUrl}
                poster={activeVideo.posterImage}
                autoPlay
                loop
                playsInline
                className="w-full h-full object-cover"
              />

              {/* CONTROLS OVERLAY */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between bg-black/60 backdrop-blur-md px-4 py-2.5 rounded-full border border-white/20 text-white">
                <button onClick={togglePlay} className="hover:text-[#B89275] transition-colors">
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 fill-white" />}
                </button>

                <span className="font-display text-xs font-bold uppercase tracking-wider">
                  {activeVideo.title}
                </span>

                <button onClick={toggleMute} className="hover:text-[#B89275] transition-colors">
                  {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* RIGHT: EDITORIAL SPECS & STORE LINK */}
            <div className="lg:col-span-4 p-6 sm:p-8 flex flex-col justify-between space-y-6 bg-[#121212] border-t lg:border-t-0 lg:border-l border-white/15">
              <div className="space-y-4">
                <span className="text-[10px] font-display font-bold text-[#B89275] uppercase tracking-widest block">
                  GLAMGAL MASTERCLASS DOSSIER
                </span>

                <h3 className="font-serif text-2xl font-bold uppercase text-white leading-tight">
                  {activeVideo.title}
                </h3>

                <p className="text-xs text-white/80 font-body leading-relaxed">
                  {activeVideo.subtitle}
                </p>

                <div className="pt-4 border-t border-white/15 space-y-2">
                  <span className="text-[10px] font-display font-bold text-white/60 uppercase block">
                    FEATURED FORMULATION SPEC
                  </span>

                  <div className="flex items-center space-x-3 bg-white/5 p-3 rounded-2xl border border-white/10">
                    <img
                      src={activeVideo.featuredProductImage}
                      alt={activeVideo.featuredProductName}
                      className="w-12 h-12 rounded-xl object-cover border border-white/20"
                    />
                    <div className="min-w-0 flex-1">
                      <h4 className="font-display text-xs font-bold text-white uppercase truncate">
                        {activeVideo.featuredProductName}
                      </h4>
                      <span className="text-[10px] font-body text-[#B89275] uppercase block">
                        CLINICAL REPAIR SPEC
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3 pt-4">
                <a
                  href="https://glamgalbeauty.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#B89275] hover:bg-white hover:text-obsidian text-white font-display text-xs font-bold tracking-widest py-4 rounded-full transition-all flex items-center justify-center space-x-2 uppercase shadow-xl"
                >
                  <span>VISIT OFFICIAL STORE ↗</span>
                </a>

                <Link
                  to={`/products/${activeVideo.featuredProductHandle}`}
                  onClick={() => setActiveVideo(null)}
                  className="w-full bg-white/10 hover:bg-white/20 text-white font-display text-[11px] font-bold tracking-wider py-3 rounded-full transition-all flex items-center justify-center space-x-2 uppercase border border-white/20"
                >
                  <span>READ FORMULATION DOSSIER</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
