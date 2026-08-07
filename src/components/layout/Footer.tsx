import React from 'react';
import { Logo } from '../common/Logo';
import { Instagram, Facebook, Youtube } from 'lucide-react';
import { NewsletterForm } from '../sections/NewsletterForm';
import { useCMS } from '../../context/CMSContext';

export const Footer: React.FC = () => {
  const { state } = useCMS();
  const f = state.footerSettings;

  return (
    <footer className="bg-obsidian text-warm-white border-t border-deep-charcoal" aria-label="Website Footer">
      {/* Upper Newsletter Section */}
      {f.showNewsletter && (
        <div className="border-b border-deep-charcoal">
          <NewsletterForm />
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6 py-16 text-center">
        {/* Brand Intro Column */}
        <div className="max-w-xl mx-auto space-y-6 flex flex-col items-center">
          <Logo variant="light" size="lg" />
          <p className="text-xs sm:text-sm text-soft-stone leading-relaxed font-body font-light">
            {f.brandDescription}
          </p>

          <div className="flex items-center space-x-6 pt-2">
            {f.instagramUrl && (
              <a
                href={f.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-soft-stone hover:text-warm-white hover:scale-110 transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            )}
            {f.tiktokUrl && (
              <a
                href={f.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-soft-stone hover:text-warm-white hover:scale-110 transition-all"
                aria-label="TikTok"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.12V9.37a6.33 6.33 0 0 0-1-.08 6.34 6.34 0 1 0 6.34 6.34V9.6a8.27 8.27 0 0 0 4.91 1.62V7.78a4.85 4.85 0 0 1-1-.09z" />
                </svg>
              </a>
            )}
            {f.facebookUrl && (
              <a
                href={f.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-soft-stone hover:text-warm-white hover:scale-110 transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            )}
            {f.youtubeUrl && (
              <a
                href={f.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-soft-stone hover:text-warm-white hover:scale-110 transition-all"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>

        {/* Bottom Copyright Row */}
        <div className="pt-10 mt-12 border-t border-deep-charcoal text-center text-xs text-warm-taupe tracking-wider font-display">
          <p>© 2026, GLAMGAL, LLC.</p>
        </div>
      </div>
    </footer>
  );
};

