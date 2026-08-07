import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../common/Logo';
import { Instagram, Facebook, Youtube, Globe, CreditCard } from 'lucide-react';
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

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Intro Column */}
          <div className="lg:col-span-2 space-y-6">
            <Logo variant="light" size="md" />
            <p className="text-xs text-soft-stone leading-relaxed max-w-sm">
              {f.brandDescription}
            </p>
            <div className="flex items-center space-x-4 pt-2">
              {f.instagramUrl && (
                <a
                  href={f.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-soft-stone hover:text-warm-white transition-colors"
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
                  className="p-2 text-soft-stone hover:text-warm-white transition-colors"
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
                  className="p-2 text-soft-stone hover:text-warm-white transition-colors"
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
                  className="p-2 text-soft-stone hover:text-warm-white transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>

          {/* Shop Column */}
          <div className="space-y-4">
            <h4 className="font-display text-xs tracking-widest text-warm-white uppercase border-b border-deep-charcoal pb-2">
              SHOP
            </h4>
            <ul className="space-y-2 text-xs text-soft-stone">
              <li><Link to="/collections/all" className="hover:text-warm-white transition-colors">Shop All</Link></li>
              <li><Link to="/collections/skincare" className="hover:text-warm-white transition-colors">Skincare</Link></li>
              <li><Link to="/collections/makeup" className="hover:text-warm-white transition-colors">Makeup</Link></li>
              <li><Link to="/collections/body-care" className="hover:text-warm-white transition-colors">Body Care</Link></li>
              <li><Link to="/collections/beauty-tools" className="hover:text-warm-white transition-colors">Beauty Tools</Link></li>
              <li><Link to="/collections/new-arrivals" className="hover:text-warm-white transition-colors">New Arrivals</Link></li>
              <li><Link to="/collections/best-sellers" className="hover:text-warm-white transition-colors">Best Sellers</Link></li>
            </ul>
          </div>

          {/* Customer Care Column */}
          <div className="space-y-4">
            <h4 className="font-display text-xs tracking-widest text-warm-white uppercase border-b border-deep-charcoal pb-2">
              CUSTOMER CARE
            </h4>
            <ul className="space-y-2 text-xs text-soft-stone">
              <li><Link to="/contact" className="hover:text-warm-white transition-colors">Contact Support</Link></li>
              <li><Link to="/faq" className="hover:text-warm-white transition-colors">FAQs</Link></li>
              <li><Link to="/shipping-and-delivery" className="hover:text-warm-white transition-colors">Shipping & Delivery</Link></li>
              <li><Link to="/returns-and-refunds" className="hover:text-warm-white transition-colors">Returns & Refunds</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-warm-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-and-conditions" className="hover:text-warm-white transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/cookie-policy" className="hover:text-warm-white transition-colors">Cookie Policy</Link></li>
              <li><Link to="/accessibility" className="hover:text-warm-white transition-colors">Accessibility Statement</Link></li>
            </ul>
          </div>

          {/* Explore GLAMGAL Column */}
          <div className="space-y-4">
            <h4 className="font-display text-xs tracking-widest text-warm-white uppercase border-b border-deep-charcoal pb-2">
              EXPLORE GLAMGAL
            </h4>
            <ul className="space-y-2 text-xs text-soft-stone">
              <li><Link to="/journal" className="hover:text-warm-white transition-colors">GLAMGAL Journal</Link></li>
              <li><Link to="/ingredients" className="hover:text-warm-white transition-colors">Ingredient Glossary</Link></li>
              <li><Link to="/behind-the-scenes" className="hover:text-warm-white transition-colors">Behind-The-Scenes Studio</Link></li>
              <li><Link to="/virtual-vanity" className="hover:text-warm-white transition-colors">Virtual Vanity UGC Hub</Link></li>
              <li><Link to="/about" className="hover:text-warm-white transition-colors">Our Brand Story</Link></li>
              <li><Link to="/philosophy" className="hover:text-warm-white transition-colors">Our Philosophy</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Metadata & Legal Row */}
        <div className="pt-8 border-t border-deep-charcoal flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 text-xs text-warm-taupe">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1 text-soft-stone">
              <Globe className="w-4 h-4 text-warm-taupe" />
              <span>{f.countryCurrency}</span>
            </div>
          </div>

          <p>© 2026, GLAMGAL, LLC.</p>
        </div>
      </div>
    </footer>
  );
};

