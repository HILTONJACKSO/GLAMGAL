import React from 'react';
import { Link } from 'react-router-dom';

interface EmptyStateProps {
  title: string;
  description: string;
  ctaText?: string;
  ctaLink?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  title,
  description,
  ctaText = 'EXPLORE STOREFRONT',
  ctaLink = '/collections/all',
}) => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-12 bg-white border border-soft-stone/40 my-8">
      <h3 className="font-display text-lg tracking-widest text-obsidian uppercase mb-2">{title}</h3>
      <p className="text-sm text-warm-taupe max-w-md mb-6">{description}</p>
      {ctaLink && (
        <Link
          to={ctaLink}
          className="inline-block bg-obsidian text-warm-white font-display text-xs tracking-widest py-3 px-8 uppercase hover:bg-black transition-colors"
        >
          {ctaText}
        </Link>
      )}
    </div>
  );
};
