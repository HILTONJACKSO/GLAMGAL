import React from 'react';
import { Instagram } from 'lucide-react';

export const SocialGallery: React.FC = () => {
  const socialImages = [
    { url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80', tag: '@glamgalbeauty' },
    { url: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=80', tag: '#GLAMGALGlow' },
    { url: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80', tag: '#GLAMGALRoutine' },
    { url: 'https://images.unsplash.com/photo-1608248597263-00079996576f?auto=format&fit=crop&w=600&q=80', tag: '@glamgalbeauty' },
  ];

  return (
    <section className="bg-warm-white py-16 border-t border-soft-stone" aria-label="Social Proof Community">
      <div className="max-w-7xl mx-auto px-6 text-center space-y-8">
        <div className="space-y-2">
          <span className="font-display text-xs tracking-mega text-warm-taupe uppercase">@GLAMGALBEAUTY</span>
          <h2 className="font-display text-xl sm:text-2xl tracking-widest text-obsidian uppercase font-bold">
            JOIN THE GLAMGAL BEAUTY COMMUNITY
          </h2>
          <p className="text-xs text-deep-charcoal">Tag @glamgalbeauty on Instagram & TikTok to be featured.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {socialImages.map((img, idx) => (
            <a
              key={idx}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden bg-obsidian block rounded-sm"
            >
              <img
                src={img.url}
                alt={`Social post ${idx + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-obsidian/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-warm-white p-4">
                <Instagram className="w-6 h-6 mb-2" />
                <span className="font-display text-[10px] tracking-widest uppercase">{img.tag}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
