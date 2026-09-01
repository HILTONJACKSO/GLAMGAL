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
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E3D6C5]/80 transition-all duration-300">
      {/* Announcement Bar */}
      <AnnouncementBar />

      {/* Main Header Container */}
      <div className="max-w-[1480px] w-full mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between relative">
        {/* Left Group: Mobile/Tablet Hamburger + Brand Logo */}
        <div className="flex items-center space-x-2 sm:space-x-3 shrink-0 mr-4 xl:mr-10 2xl:mr-14">
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="xl:hidden p-2 text-obsidian hover:opacity-75 focus-visible:outline-none rounded-lg hover:bg-warm-white"
            aria-label="Open Navigation Menu"
          >
            <Menu className="w-6 h-6" />
          </button>

          <Logo size="md" />
        </div>

        {/* Center: Desktop Navigation Links (Visible on 1280px+ Screens) */}
        <div className="flex-1 hidden xl:flex justify-center items-center px-4 min-w-0">
          <DesktopNavigation onHoverCategory={setActiveCategory} />
        </div>

        {/* Right: Action Controls */}
        <div className="flex items-center space-x-2 sm:space-x-3 text-obsidian shrink-0 ml-4 xl:ml-10 2xl:ml-14">
          {/* Search Trigger */}
          <button
            onClick={onOpenSearch}
            className="p-2 text-obsidian hover:text-[#B89275] transition-transform hover:scale-105 focus-visible:outline-none"
            aria-label="Search Storefront"
          >
            <Search className="w-5 h-5" />
          </button>

          {/* Direct Main Shopify Store Gateway Button */}
          <a
            href="https://glamgalbeauty.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1.5 bg-obsidian hover:bg-[#B89275] text-white font-display text-[10px] xl:text-[11px] font-bold tracking-wider uppercase px-4 py-2.5 rounded-full transition-all shadow-xs shrink-0 whitespace-nowrap"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>VISIT STORE ↗</span>
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
