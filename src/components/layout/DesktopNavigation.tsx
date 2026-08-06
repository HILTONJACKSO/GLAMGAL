import React from 'react';
import { Link } from 'react-router-dom';

interface DesktopNavigationProps {
  onHoverCategory: (category: string | null) => void;
}

export const DesktopNavigation: React.FC<DesktopNavigationProps> = ({ onHoverCategory }) => {
  const navLinks = [
    { label: 'NEW', href: '/collections/new-arrivals', hasMega: true },
    { label: 'SKINCARE', href: '/collections/skincare', hasMega: true },
    { label: 'MAKEUP', href: '/collections/makeup', hasMega: true },
    { label: 'BODY', href: '/collections/body-care', hasMega: true },
    { label: 'TOOLS', href: '/collections/beauty-tools', hasMega: true },
    { label: 'STUDIO', href: '/behind-the-scenes', hasMega: false },
    { label: 'VANITY', href: '/virtual-vanity', hasMega: false },
    { label: 'JOURNAL', href: '/journal', hasMega: false },
    { label: 'ABOUT', href: '/about', hasMega: false },
  ];

  return (
    <nav className="hidden lg:flex items-center space-x-3 xl:space-x-5 2xl:space-x-6 flex-shrink-0" aria-label="Main Navigation">
      {navLinks.map((link) => (
        <Link
          key={link.label}
          to={link.href}
          onMouseEnter={() => onHoverCategory(link.hasMega ? link.label : null)}
          className="font-display text-[11px] xl:text-[12px] tracking-[0.12em] text-obsidian uppercase font-semibold relative py-2 transition-colors hover:text-[#B89275] whitespace-nowrap after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#B89275] hover:after:w-full after:transition-all after:duration-300"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
};
