import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Search, ShoppingBag, Heart, User, Globe } from 'lucide-react';
import { Logo } from '../common/Logo';
import { AnnouncementBar } from './AnnouncementBar';
import { DesktopNavigation } from './DesktopNavigation';
import { MobileNavigation } from './MobileNavigation';
import { MegaMenu } from './MegaMenu';
import { useCart } from '../../context/CartContext';
import { AnnouncementMetaobject } from '../../types/shopify';

interface HeaderProps {
  announcements?: AnnouncementMetaobject[];
  onOpenSearch: () => void;
}

export const Header: React.FC<HeaderProps> = ({ announcements = [], onOpenSearch }) => {
  const { cart, openCart } = useCart();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const cartQuantity = cart?.totalQuantity || 0;

  return (
    <header className="sticky top-0 z-40 bg-warm-white/95 backdrop-blur-md border-b border-soft-stone/60 transition-all duration-300">
      {/* Announcement Bar */}
      <AnnouncementBar announcements={announcements} />

      {/* Main Header Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between relative">
        {/* Left Group: Mobile Hamburger + Brand Logo */}
        <div className="flex items-center space-x-3 sm:space-x-4 flex-shrink-0 mr-4 xl:mr-8">
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden p-2 text-obsidian hover:opacity-75 focus-visible:outline-none rounded-lg hover:bg-warm-white"
            aria-label="Open Navigation Menu"
          >
            <Menu className="w-6 h-6" />
          </button>

          <Logo size="md" />
        </div>

        {/* Center: Desktop Navigation Links */}
        <DesktopNavigation onHoverCategory={setActiveCategory} />

        {/* Right: Action Controls */}
        <div className="flex items-center space-x-2 sm:space-x-4 text-obsidian flex-shrink-0">
          {/* Currency Selector */}
          <button
            className="hidden 2xl:flex items-center space-x-1.5 text-xs font-display tracking-widest text-deep-charcoal hover:text-obsidian transition-colors px-2 py-1"
            title="Select Country & Currency"
          >
            <Globe className="w-3.5 h-3.5 text-warm-taupe" />
            <span>USD $</span>
          </button>

          {/* Search Trigger */}
          <button
            onClick={onOpenSearch}
            className="p-2 text-obsidian hover:text-[#B89275] transition-transform hover:scale-105 focus-visible:outline-none"
            aria-label="Search Storefront"
          >
            <Search className="w-5 h-5" />
          </button>

          {/* Direct Main Shopify Store Button */}
          <a
            href="https://glamgalbeauty.myshopify.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center space-x-1.5 bg-obsidian hover:bg-[#B89275] text-warm-white font-display text-[10px] xl:text-[11px] font-bold tracking-wider uppercase px-4 py-2 rounded-full transition-all shadow-xs"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>SHOP STORE</span>
          </a>
        </div>

        {/* Mega Menu Dropdown */}
        <MegaMenu activeCategory={activeCategory} onClose={() => setActiveCategory(null)} />
      </div>

      {/* Mobile Drawer */}
      <MobileNavigation isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </header>
  );
};
