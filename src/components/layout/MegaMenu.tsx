import React from 'react';
import { Link } from 'react-router-dom';

interface MegaMenuProps {
  activeCategory: string | null;
  onClose: () => void;
}

export const MegaMenu: React.FC<MegaMenuProps> = ({ activeCategory, onClose }) => {
  if (!activeCategory) return null;

  return (
    <div
      className="absolute top-full left-0 w-full bg-warm-white border-b border-soft-stone shadow-2xl py-10 z-40 transition-all duration-300"
      onMouseLeave={onClose}
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-12 gap-8">
        {/* Navigation Columns */}
        <div className="col-span-3 space-y-4">
          <h4 className="font-display text-xs tracking-widest text-obsidian uppercase border-b border-soft-stone pb-2">
            CATEGORIES
          </h4>
          <ul className="space-y-2.5 text-xs text-deep-charcoal font-medium">
            <li>
              <Link to="/collections/skincare" onClick={onClose} className="hover:text-obsidian transition-colors">
                Skincare Actives
              </Link>
            </li>
            <li>
              <Link to="/collections/makeup" onClick={onClose} className="hover:text-obsidian transition-colors">
                Couture Makeup
              </Link>
            </li>
            <li>
              <Link to="/collections/body-care" onClick={onClose} className="hover:text-obsidian transition-colors">
                Body & Bath Nectars
              </Link>
            </li>
            <li>
              <Link to="/collections/beauty-tools" onClick={onClose} className="hover:text-obsidian transition-colors">
                Obsidian Sculpting Tools
              </Link>
            </li>
            <li>
              <Link to="/collections/all" onClick={onClose} className="hover:text-obsidian font-semibold transition-colors">
                View All Products →
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-span-3 space-y-4">
          <h4 className="font-display text-xs tracking-widest text-obsidian uppercase border-b border-soft-stone pb-2">
            BEAUTY GOALS
          </h4>
          <ul className="space-y-2.5 text-xs text-deep-charcoal font-medium">
            <li>
              <Link to="/concerns#hydration" onClick={onClose} className="hover:text-obsidian transition-colors">
                Deep Hydration & Barrier Repair
              </Link>
            </li>
            <li>
              <Link to="/concerns#glow" onClick={onClose} className="hover:text-obsidian transition-colors">
                Glass Skin & Radiance
              </Link>
            </li>
            <li>
              <Link to="/concerns#texture" onClick={onClose} className="hover:text-obsidian transition-colors">
                Smooth Appearance & Pores
              </Link>
            </li>
            <li>
              <Link to="/routines" onClick={onClose} className="hover:text-obsidian font-semibold transition-colors">
                Explore Beauty Routines →
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-span-3 space-y-4">
          <h4 className="font-display text-xs tracking-widest text-obsidian uppercase border-b border-soft-stone pb-2">
            EDITORIAL JOURNAL
          </h4>
          <ul className="space-y-2.5 text-xs text-deep-charcoal font-medium">
            <li>
              <Link to="/journal/the-art-of-skin-barrier-repair" onClick={onClose} className="hover:text-obsidian transition-colors">
                The Art of Barrier Repair
              </Link>
            </li>
            <li>
              <Link to="/journal/how-to-master-velvet-matte-lips" onClick={onClose} className="hover:text-obsidian transition-colors">
                Mastering Velvet Matte Lips
              </Link>
            </li>
            <li>
              <Link to="/ingredients" onClick={onClose} className="hover:text-obsidian transition-colors">
                Ingredient Science Spotlight
              </Link>
            </li>
            <li>
              <Link to="/philosophy" onClick={onClose} className="hover:text-obsidian font-semibold transition-colors">
                Our Formulation Philosophy →
              </Link>
            </li>
          </ul>
        </div>

        {/* Promotional Campaign Highlight */}
        <div className="col-span-3 bg-white p-4 border border-soft-stone flex flex-col justify-between">
          <div>
            <span className="text-[10px] font-display tracking-widest text-warm-taupe uppercase">FEATURED ICON</span>
            <h5 className="font-display text-xs tracking-wider text-obsidian uppercase mt-1 mb-2">
              LUMINOUS BARRIER SERUM
            </h5>
            <p className="text-xs text-deep-charcoal line-clamp-2">
              Triple peptide & hyaluronic acid skin elixir for an instant glassy glow.
            </p>
          </div>
          <Link
            to="/products/luminous-barrier-serum"
            onClick={onClose}
            className="mt-4 block w-full text-center bg-obsidian text-warm-white font-display text-[10px] tracking-widest py-2.5 uppercase hover:bg-black transition-colors"
          >
            SHOP NOW — $68
          </Link>
        </div>
      </div>
    </div>
  );
};
