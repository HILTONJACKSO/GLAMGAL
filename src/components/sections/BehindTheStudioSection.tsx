import React, { useState } from 'react';
import { Camera, Film, Eye, X, MoveRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export interface StudioSessionItem {
  id: string;
  title: string;
  category: 'CAMPAIGN SHOOT' | 'BACKSTAGE LAB' | 'EDITORIAL FITTING' | 'MASTERCLASS';
  location: string;
  date: string;
  photographer: string;
  imageUrl: string;
  artistNotes: string;
  featuredShades: string[];
}

export const STUDIO_SESSIONS_DATA: StudioSessionItem[] = [
  {
    id: 'studio-1',
    title: 'NEW YORK COUTURE FALL CAMPAIGN',
    category: 'CAMPAIGN SHOOT',
    location: 'Pier 59 Studios, SoHo NYC',
    date: '10.24.2026',
    photographer: 'Sora Kim & Marcus Vance',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80',
    artistNotes:
      'We aimed for liquid glass reflections under high-intensity 5600K studio strobe lights. Applied Luminous Barrier Serum 10 minutes before foundation to create an invincible skin canvas that holds up under 12 hours of runway lights.',
    featuredShades: ['Velvet Nude', 'Golden Hour Shimmer', 'Obsidian Black Eyeliner'],
  },
  {
    id: 'studio-2',
    title: 'LAB STABILITY & PEPTIDE BLENDING',
    category: 'BACKSTAGE LAB',
    location: 'GLAMGAL Lab, Geneva',
    date: '09.18.2026',
    photographer: 'Dr. Elena Vance',
    imageUrl: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1000&q=80',
    artistNotes:
      'Testing batch #048 of our Cellular Overnight Repair Cream under micro-emulsion centrifuges. We achieved micro-hyaluronic encapsulation at 2.5% concentration without breaking emulsion integrity.',
    featuredShades: ['Pure Un-tinted Barrier Formula'],
  },
  {
    id: 'studio-3',
    title: 'PARIS FASHION WEEK BACKSTAGE TOUCHUPS',
    category: 'EDITORIAL FITTING',
    location: 'Grand Palais, Paris',
    date: '03.28.2026',
    photographer: 'Chloe Bennett',
    imageUrl: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1000&q=80',
    artistNotes:
      'Backstage panic resolved in seconds. Models had dry skin patches from frequent runway changes. We pressed 3 drops of Sculpting Glow Nectar into collarbones and cheekbones for instantaneous glass radiance.',
    featuredShades: ['Couture Red', 'Bronze Nectar'],
  },
  {
    id: 'studio-4',
    title: 'ONE-SWIPE COUTURE SWATCH TECHNIQUE',
    category: 'MASTERCLASS',
    location: 'GLAMGAL Studio, Los Angeles',
    date: '08.12.2026',
    photographer: 'Maya Lin',
    imageUrl: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=80',
    artistNotes:
      'Demonstrating triple-milled pigment release on diverse skin tones. Notice how the velvety polymers flex with lip movement without feathering or fine-line settling.',
    featuredShades: ['Velvet Berry', 'Couture Mauve', 'Terracotta Nude'],
  },
];

export const BehindTheStudioSection: React.FC = () => {
  const [selectedSession, setSelectedSession] = useState<StudioSessionItem | null>(null);

  const featuredSpotlight = STUDIO_SESSIONS_DATA[0];
  const stackedArticles = STUDIO_SESSIONS_DATA.slice(1);

  return (
    <section className="bg-white text-obsidian py-28 lg:py-36 border-t border-[#E3D6C5] relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12 relative z-10">
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#E3D6C5]">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white border border-[#B89275]/40 shadow-xs">
              <Camera className="w-3.5 h-3.5 text-[#B89275]" />
              <span className="font-display text-[10px] sm:text-xs font-bold tracking-mega text-[#A68064] uppercase">
                STUDIO & LAB DOSSIER
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl tracking-tight text-obsidian uppercase font-black">
              BEHIND THE SCENES
            </h2>

            <p className="font-body text-xs sm:text-sm text-[#5C5046] leading-relaxed font-light">
              Take an editorial backstage look into Paris & NYC runway fittings, studio strobe tests, and formulation lab breakthroughs.
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <Link
              to="/behind-the-scenes"
              className="inline-flex items-center space-x-2 border border-[#E3D6C5] hover:bg-obsidian hover:text-white text-obsidian font-display text-xs font-bold tracking-widest uppercase px-6 py-3 rounded-full transition-all"
            >
              <span>VIEW ALL DOSSIERS</span>
              <ArrowRight className="w-4 h-4 text-[#B89275]" />
            </Link>
          </div>
        </div>

        {/* L'OFFICIEL ART 2-COLUMN SPLIT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* LEFT COLUMN: LARGE SPOTLIGHT FEATURED ARTICLE */}
          <div
            onClick={() => setSelectedSession(featuredSpotlight)}
            className="lg:col-span-7 group bg-white rounded-3xl overflow-hidden border border-[#E3D6C5] hover:border-[#B89275] p-6 sm:p-8 transition-all duration-500 cursor-pointer flex flex-col justify-between space-y-6 shadow-sm hover:shadow-2xl"
          >
            {/* Image Container */}
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-black">
              <img
                src={featuredSpotlight.imageUrl}
                alt={featuredSpotlight.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent pointer-events-none" />

              <span className="absolute top-4 left-4 bg-obsidian/90 backdrop-blur-md border border-white/20 text-white font-display text-[9px] font-bold tracking-widest px-3 py-1 rounded-full uppercase">
                {featuredSpotlight.category}
              </span>
            </div>

            {/* Article Headline & Excerpt */}
            <div className="space-y-3">
              <span className="text-[10px] font-display text-[#A68064] tracking-widest uppercase block font-bold">
                {featuredSpotlight.location} • {featuredSpotlight.date}
              </span>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold uppercase text-obsidian tracking-tight leading-snug group-hover:text-[#B89275] transition-colors">
                {featuredSpotlight.title}
              </h3>

              <p className="font-body text-xs sm:text-sm text-[#5C5046] line-clamp-3 leading-relaxed font-light">
                {featuredSpotlight.artistNotes}
              </p>
            </div>

            {/* Card Footer Link */}
            <div className="pt-4 border-t border-[#E3D6C5] flex items-center justify-between">
              <span className="text-[10px] font-body text-warm-taupe">
                {featuredSpotlight.date} by {featuredSpotlight.photographer}
              </span>

              <div className="inline-flex items-center space-x-2 bg-obsidian text-white font-display text-[10px] font-bold tracking-widest uppercase px-4 py-2 rounded-full group-hover:bg-[#B89275] transition-all">
                <span>READ ARTICLE</span>
                <MoveRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: STACKED LIST OF 3 ARTICLE CARDS */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            {stackedArticles.map((article) => (
              <div
                key={article.id}
                onClick={() => setSelectedSession(article)}
                className="group bg-[#FAF7F2] rounded-2xl border border-[#E3D6C5] hover:border-[#B89275] p-4 transition-all duration-300 cursor-pointer flex flex-col sm:flex-row gap-4 items-center flex-1 justify-between shadow-xs hover:shadow-xl"
              >
                {/* Square Image Thumbnail */}
                <div className="relative w-full sm:w-36 aspect-square rounded-xl overflow-hidden shrink-0 bg-black">
                  <img
                    src={article.imageUrl}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  />
                  <div className="absolute inset-0 bg-black/20 pointer-events-none" />
                </div>

                {/* Article Info */}
                <div className="space-y-2 min-w-0 flex-1 flex flex-col justify-between h-full">
                  <div>
                    <span className="text-[9px] font-display font-bold text-[#A68064] tracking-widest uppercase block mb-1">
                      {article.category}
                    </span>

                    <h4 className="font-serif text-sm font-bold uppercase text-obsidian tracking-wide group-hover:text-[#B89275] transition-colors leading-snug line-clamp-2">
                      {article.title}
                    </h4>
                  </div>

                  <div className="pt-2 border-t border-[#E3D6C5] flex items-center justify-between">
                    <span className="text-[9px] font-body text-warm-taupe truncate">
                      {article.date} by {article.photographer}
                    </span>

                    <span className="text-[9px] font-display font-bold text-obsidian uppercase tracking-wider group-hover:text-[#B89275] flex items-center space-x-1 shrink-0">
                      <span>READ</span>
                      <MoveRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* STUDIO SESSION MODAL */}
      {selectedSession && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-6 animate-fade-in">
          <div className="bg-[#141414] rounded-3xl border border-white/20 max-w-3xl w-full overflow-hidden shadow-2xl relative p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto text-warm-white">
            <button
              onClick={() => setSelectedSession(null)}
              className="absolute top-4 right-4 bg-white/10 hover:bg-white text-white hover:text-obsidian p-2.5 rounded-full backdrop-blur-md transition-all border border-white/20"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 bg-black">
              <img
                src={selectedSession.imageUrl}
                alt={selectedSession.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
            </div>

            <div className="space-y-2">
              <span className="text-[10px] font-display font-bold text-[#B89275] uppercase tracking-widest block">
                {selectedSession.category} • {selectedSession.location}
              </span>
              <h3 className="font-serif text-2xl font-bold text-white uppercase tracking-wider">
                {selectedSession.title}
              </h3>
              <p className="text-xs font-mono text-white/60">
                PHOTOGRAPHY & ART DIRECTION BY {selectedSession.photographer.toUpperCase()}
              </p>
            </div>

            <div className="bg-white/5 p-5 rounded-2xl border border-white/10 space-y-2">
              <span className="text-[10px] font-display font-bold text-[#B89275] uppercase tracking-wider block">
                ARTIST & CHEMIST BACKSTAGE NOTES
              </span>
              <p className="text-xs text-white/80 font-body leading-relaxed">
                {selectedSession.artistNotes}
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-[10px] font-display font-bold text-warm-white uppercase tracking-wider block">
                KEY SHADES & FORMULATIONS USED
              </span>
              <div className="flex flex-wrap gap-2">
                {selectedSession.featuredShades.map((shade, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] font-display font-bold text-[#B89275] bg-black/60 px-3 py-1 rounded-full border border-white/20 uppercase"
                  >
                    {shade}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
