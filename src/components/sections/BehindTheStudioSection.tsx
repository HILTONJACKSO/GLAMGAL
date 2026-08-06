import React, { useState } from 'react';
import { Camera, Sparkles, Film, Eye, X, Play } from 'lucide-react';

export interface StudioSessionItem {
  id: string;
  title: string;
  category: 'CAMPAIGN SHOOT' | 'BACKSTAGE LAB' | 'EDITORIAL FITTING' | 'MASTERCLASS';
  location: string;
  date: string;
  photographer: string;
  imageUrl: string;
  videoUrl?: string;
  artistNotes: string;
  featuredShades: string[];
}

export const STUDIO_SESSIONS_DATA: StudioSessionItem[] = [
  {
    id: 'studio-1',
    title: 'NEW YORK COUTURE FALL CAMPAIGN',
    category: 'CAMPAIGN SHOOT',
    location: 'Pier 59 Studios, SoHo NYC',
    date: 'OCTOBER 2026',
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
    location: 'GLAMGAL Formulation Lab, Geneva',
    date: 'SEPTEMBER 2026',
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
    date: 'MARCH 2026',
    photographer: 'Chloe Bennett',
    imageUrl: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1000&q=80',
    artistNotes:
      'Backstage panic resolved in seconds. Models had dry skin patches from frequent runway changes. We pressed 3 drops of Sculpting Glow Nectar into collarbones and cheekbones for instantaneous high-definition glass radiance.',
    featuredShades: ['Couture Red', 'Bronze Nectar'],
  },
  {
    id: 'studio-4',
    title: 'MASTERCLASS: ONE-SWIPE SWATCH TECHNIQUE',
    category: 'MASTERCLASS',
    location: 'GLAMGAL Flagship Studio, Los Angeles',
    date: 'AUGUST 2026',
    photographer: 'Maya Lin',
    imageUrl: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=80',
    artistNotes:
      'Demonstrating triple-milled pigment release on diverse skin tones. Notice how the velvety polymers flex with lip movement without feathering or fine-line settling.',
    featuredShades: ['Velvet Berry', 'Couture Mauve', 'Terracotta Nude'],
  },
];

export const BehindTheStudioSection: React.FC = () => {
  const [selectedSession, setSelectedSession] = useState<StudioSessionItem | null>(null);

  return (
    <section className="bg-[#120D0B] text-warm-white py-24 border-t border-deep-charcoal relative overflow-hidden">
      {/* Ambient Studio Lighting Glow */}
      <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/3 w-[500px] h-[500px] bg-pink-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12 relative z-10">
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/5 border border-amber-400/30 backdrop-blur-md">
            <Camera className="w-3.5 h-3.5 text-amber-400" />
            <span className="font-display text-xs font-bold tracking-wider text-amber-300 uppercase">
              BEHIND THE STUDIO & BACKSTAGE
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl tracking-wider text-warm-white uppercase font-bold">
            INSIDE OUR CAMPAIGN SHOOTS & LAB SESSIONS
          </h2>

          <p className="font-body text-sm sm:text-base text-soft-stone leading-relaxed max-w-2xl mx-auto font-light">
            Take a backstage peek into our lighting tests, Paris & NYC runway fittings, and formulation lab breakthroughs with lead makeup artists and chemists.
          </p>
        </div>

        {/* STUDIO SESSIONS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {STUDIO_SESSIONS_DATA.map((session) => (
            <div
              key={session.id}
              onClick={() => setSelectedSession(session)}
              className="bg-[#1A1310] rounded-[28px] border border-white/10 hover:border-amber-400/50 overflow-hidden group cursor-pointer shadow-2xl transition-all duration-500 flex flex-col justify-between"
            >
              {/* IMAGE CONTAINER */}
              <div className="relative aspect-[16/10] overflow-hidden bg-black">
                <img
                  src={session.imageUrl}
                  alt={session.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />

                {/* Category & Date Pill */}
                <div className="absolute top-4 left-4 flex items-center space-x-2 bg-black/70 backdrop-blur-md px-3.5 py-1.5 rounded-full text-[10px] font-display font-bold text-amber-300 border border-white/10 uppercase tracking-wider">
                  <Film className="w-3.5 h-3.5" />
                  <span>{session.category}</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 space-y-1">
                  <span className="text-[10px] font-display text-warm-taupe uppercase tracking-widest block">
                    {session.location} • {session.date}
                  </span>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-white uppercase tracking-wider group-hover:text-amber-300 transition-colors">
                    {session.title}
                  </h3>
                </div>
              </div>

              {/* CARD FOOTER */}
              <div className="p-6 space-y-3 bg-[#1A1310]">
                <p className="text-xs text-soft-stone font-body line-clamp-2 leading-relaxed">
                  {session.artistNotes}
                </p>

                <div className="pt-2 flex items-center justify-between text-xs font-display font-bold text-amber-400 group-hover:translate-x-1 transition-transform uppercase">
                  <span>READ ARTIST BACKSTAGE NOTES</span>
                  <Eye className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* STUDIO SESSION MODAL */}
      {selectedSession && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-6 animate-fade-in">
          <div className="bg-[#17110E] rounded-[32px] border border-amber-500/40 max-w-3xl w-full overflow-hidden shadow-2xl relative p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto text-warm-white">
            <button
              onClick={() => setSelectedSession(null)}
              className="absolute top-4 right-4 bg-black/70 hover:bg-amber-500 text-white hover:text-obsidian p-2.5 rounded-full backdrop-blur-md transition-all border border-white/20"
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
              <span className="text-[10px] font-display font-bold text-amber-400 uppercase tracking-widest block">
                {selectedSession.category} • {selectedSession.location}
              </span>
              <h3 className="font-display text-2xl font-bold text-white uppercase tracking-wider">
                {selectedSession.title}
              </h3>
              <p className="text-xs font-mono text-soft-stone">
                PHOTOGRAPHY & ART DIRECTION BY {selectedSession.photographer.toUpperCase()}
              </p>
            </div>

            <div className="bg-[#241A16] p-5 rounded-2xl border border-amber-500/30 space-y-2">
              <span className="text-[10px] font-display font-bold text-amber-300 uppercase tracking-wider block">
                ARTIST & CHEMIST BACKSTAGE NOTES
              </span>
              <p className="text-xs text-soft-stone font-body leading-relaxed">
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
                    className="text-[10px] font-display font-bold text-amber-300 bg-black/60 px-3 py-1 rounded-full border border-white/10 uppercase"
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
