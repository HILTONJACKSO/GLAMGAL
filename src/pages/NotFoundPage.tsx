import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/common/SEO';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6 py-20 bg-warm-white space-y-6">
      <SEO title="Page Not Found (404)" />
      <span className="font-display text-xs tracking-mega text-warm-taupe uppercase">ERROR 404</span>
      <h1 className="font-display text-4xl sm:text-6xl tracking-widest text-obsidian uppercase font-black">
        PAGE NOT FOUND
      </h1>
      <p className="text-xs sm:text-sm text-deep-charcoal max-w-md mx-auto leading-relaxed font-body">
        The beauty experience or page you requested could not be located. It may have moved or been updated.
      </p>
      <Link
        to="/"
        className="inline-block bg-obsidian text-warm-white font-display text-xs tracking-[0.25em] py-4 px-8 uppercase hover:bg-black transition-colors"
      >
        RETURN TO HOME STOREFRONT
      </Link>
    </div>
  );
};
