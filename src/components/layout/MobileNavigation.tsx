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
    { label: 'JOURNAL', href: '/journal' },
    { label: 'GLOSSARY', href: '/ingredients' },
    { label: 'STUDIO', href: '/behind-the-scenes' },
    { label: 'UGC HUB', href: '/virtual-vanity' },
    { label: 'SKINCARE', href: '/collections/skincare' },
    { label: 'MAKEUP', href: '/collections/makeup' },
    { label: 'SHOP ALL', href: '/collections/all' },
    { label: 'BODY CARE', href: '/collections/body-care' },
    { label: 'BEAUTY TOOLS', href: '/collections/beauty-tools' },
    { label: 'ABOUT GLAMGAL', href: '/about' },
    { label: 'OUR PHILOSOPHY', href: '/philosophy' },
    { label: 'FAQS', href: '/faq' },
    { label: 'CONTACT', href: '/contact' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-warm-white text-obsidian animate-fade-in lg:hidden">
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
            className="flex items-center justify-between py-3.5 border-b border-soft-stone/40 font-display text-sm tracking-widest text-obsidian uppercase hover:pl-2 transition-all"
          >
            <span>{link.label}</span>
            <ChevronRight className="w-4 h-4 text-warm-taupe" />
          </Link>
        ))}
      </div>

      {/* Footer Banner in Menu */}
      <div className="p-6 bg-obsidian text-warm-white text-center border-t border-white/10">
        <p className="font-display text-xs tracking-widest uppercase mb-2">GLAMGAL BEAUTY COMMUNITY</p>
        <p className="text-xs text-soft-stone">High-impact makeup & skincare</p>
      </div>
    </div>
  );
};
