import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  variant?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
  showSymbol?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'dark',
  size = 'md',
  showSymbol = true,
  className = '',
}) => {
  const isLight = variant === 'light';

  const sizeClasses =
    size === 'sm'
      ? 'h-6 sm:h-7'
      : size === 'lg'
      ? 'h-10 sm:h-12'
      : 'h-8 sm:h-9';

  return (
    <Link to="/" className={`inline-flex items-center space-x-2.5 ${className}`} aria-label="GLAMGAL Home">
      <img
        src="/glamgal_official_logo.jpg"
        alt="GLAMGAL Official Logo"
        className={`${sizeClasses} object-contain transition-opacity duration-300 hover:opacity-90 ${
          isLight ? 'invert brightness-200 contrast-200 mix-blend-screen' : 'mix-blend-multiply'
        }`}
      />
      <span className="hidden sm:inline-block font-display text-[9px] font-bold tracking-widest uppercase bg-obsidian text-warm-white px-2 py-0.5 rounded-full border border-[#B89275]/40 shadow-xs">
        EDITORIAL
      </span>
    </Link>
  );
};
