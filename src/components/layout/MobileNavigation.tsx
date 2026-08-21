import React from 'react';
import { Link } from 'react-router-dom';
import { X, ChevronRight } from 'lucide-react';
import { Logo } from '../common/Logo';

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNavigation: React.FC<MobileNavigationProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const links = [
    { label: 'BEAUTY JOURNAL', href: '/journal' },
    { label: 'VIDEO MASTERCLASSES', href: '/masterclasses' },
    { label: 'INGREDIENT SCIENCE', href: '/ingredients' },
    { label: 'ROUTINE GUIDES', href: '/routines' },
    { label: 'STUDIO REELS', href: '/behind-the-scenes' },
    { label: 'UGC BEAUTY HUB', href: '/virtual-vanity' },
    { label: 'OUR PHILOSOPHY', href: '/philosophy' },
    { label: 'FAQS & HELP', href: '/faq' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-warm-white text-obsidian animate-fade-in lg:hidden select-none">
      {/* Header Bar */}
      <div className="flex items-center justify-between p-6 border-b border-soft-stone">
        <Logo size="sm" />
        <button
          onClick={onClose}
          className="p-2 -mr-2 text-obsidian hover:opacity-75 focus-visible:outline-none"
          aria-label="Close Mobile Menu"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Navigation List */}
      <div className="flex-1 overflow-y-auto px-6 py-6 space-y-1">
        {links.map((link) => (
          <Link
            key={link.label}
            to={link.href}
            onClick={onClose}
            className="flex items-center justify-between py-4 border-b border-soft-stone/60 font-display text-sm sm:text-base font-bold tracking-widest text-obsidian uppercase hover:pl-2 transition-all"
          >
            <span>{link.label}</span>
            <ChevronRight className="w-4 h-4 text-warm-taupe" />
          </Link>
        ))}
      </div>

      {/* Footer Banner in Menu */}
      <div className="p-6 bg-obsidian text-warm-white text-center border-t border-white/10 space-y-3">
        <a
          href="https://glamgalbeauty.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center space-x-2 bg-[#B89275] hover:bg-[#A37E62] text-white font-display text-xs font-bold tracking-widest uppercase py-3 rounded-full transition-all shadow-md"
        >
          <span>VISIT OFFICIAL STORE ↗</span>
        </a>
        <p className="text-[10px] text-warm-taupe font-display tracking-widest uppercase">
          © 2026 GLAMGAL EDITORIAL JOURNAL
        </p>
      </div>
    </div>
  );
};
