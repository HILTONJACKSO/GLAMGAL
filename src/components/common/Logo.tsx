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

  return (
    <Link to="/" className={`inline-flex items-center space-x-2.5 ${className}`} aria-label="GLAMGAL Home">
      {/* Official GG Monogram Emblem */}
      {showSymbol && (
        <img
          src="/glamgal_emblem_transparent.png"
          alt="GLAMGAL Monogram Emblem"
          className={`${
            size === 'sm' ? 'w-6 h-6' : size === 'lg' ? 'w-10 h-10' : 'w-8 h-8'
          } object-contain ${isLight ? 'brightness-0 invert' : ''}`}
        />
      )}

      {/* Official GLAMGAL Wordmark */}
      <span
        className={`font-display font-black uppercase tracking-[0.2em] ${
          size === 'sm' ? 'text-sm' : size === 'lg' ? 'text-2xl' : 'text-lg'
        } ${isLight ? 'text-warm-white' : 'text-obsidian'}`}
      >
        GLAMGAL
      </span>
    </Link>
  );
};
