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
      ? 'h-5 sm:h-6'
      : size === 'lg'
      ? 'h-10 sm:h-12 md:h-14'
      : 'h-6 sm:h-7 md:h-8';

  return (
    <Link to="/" className={`inline-flex items-center ${className}`} aria-label="GLAMGAL Home">
      <img
        src="/glamgal_official_logo.jpg"
        alt="GLAMGAL Official Logo"
        className={`${sizeClasses} object-contain transition-opacity duration-300 hover:opacity-90 ${
          isLight ? 'invert brightness-200 contrast-200 mix-blend-screen' : 'mix-blend-multiply'
        }`}
      />
    </Link>
  );
};
