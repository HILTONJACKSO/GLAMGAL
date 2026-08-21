import React from 'react';
import { Link } from 'react-router-dom';

interface DesktopNavigationProps {
  onHoverCategory: (category: string | null) => void;
}

export const DesktopNavigation: React.FC<DesktopNavigationProps> = ({ onHoverCategory }) => {
  const navLinks = [
    { label: 'BEAUTY JOURNAL', href: '/journal', hasMega: false },
    { label: 'VIDEO MASTERCLASSES', href: '/#video-showcase', hasMega: false },
    { label: 'INGREDIENT SCIENCE', href: '/ingredients', hasMega: false },
    { label: 'ROUTINE GUIDES', href: '/routines', hasMega: false },
    { label: 'STUDIO REELS', href: '/behind-the-scenes', hasMega: false },
  ];

  return (
    <nav className="hidden lg:flex items-center space-x-5 xl:space-x-7 2xl:space-x-8 flex-shrink-0" aria-label="Main Navigation">
      {navLinks.map((link) => (
        <Link
          key={link.label}
          to={link.href}
          onMouseEnter={() => onHoverCategory(link.hasMega ? link.label : null)}
          className="font-display text-xs xl:text-sm tracking-widest text-obsidian uppercase font-bold relative py-2 transition-all hover:text-[#B89275] whitespace-nowrap after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#B89275] hover:after:w-full after:transition-all after:duration-300"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
};
