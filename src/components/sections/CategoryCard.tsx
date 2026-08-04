import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

interface CategoryCardProps {
  title: string;
  subtitle: string;
  image: string;
  link: string;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ title, subtitle, image, link }) => {
  return (
    <Link
      to={link}
      className="group relative aspect-[4/5] overflow-hidden bg-obsidian block rounded-sm border border-soft-stone/40"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover object-center opacity-85 group-hover:opacity-95 group-hover:scale-105 transition-all duration-700 ease-out"
        loading="lazy"
        onError={(e) => {
          const target = e.currentTarget as HTMLImageElement;
          if (!target.src.includes('/hero_model.png')) {
            target.src = '/hero_model.png';
          }
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-obsidian/20 to-transparent" />

      <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end text-warm-white">
        <div className="flex items-center justify-between mb-1">
          <h3 className="font-display text-base sm:text-lg tracking-widest uppercase font-bold text-warm-white group-hover:translate-x-1 transition-transform">
            {title}
          </h3>
          <ArrowUpRight className="w-5 h-5 text-warm-white opacity-75 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
        </div>
        <p className="text-xs text-soft-stone font-light line-clamp-1">{subtitle}</p>
      </div>
    </Link>
  );
};
