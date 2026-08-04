import React from 'react';
import { Link } from 'react-router-dom';
import { JournalArticle } from '../../types/shopify';
import { ArrowRight, BookOpen, Clock, User } from 'lucide-react';

export const JournalCard: React.FC<{ article: JournalArticle }> = ({ article }) => {
  return (
    <article className="h-full bg-white border border-[#E3D5C8]/70 hover:border-[#B89275] rounded-3xl overflow-hidden flex flex-col justify-between group shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500">
      <div className="flex-1 flex flex-col justify-between">
        {/* Card Header Media Container */}
        <div className="relative aspect-[16/10] overflow-hidden bg-warm-white rounded-t-3xl">
          <img
            src={article.coverImage || '/hero_model.png'}
            alt={article.title}
            className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
            loading="lazy"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = '/hero_model.png';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian/85 via-obsidian/30 to-transparent" />

          {/* Top Left Category Pill */}
          <div className="absolute top-4 left-4 z-10">
            <span className="bg-[#B89275] text-white font-display text-[10px] font-bold tracking-widest px-3.5 py-1.5 uppercase rounded-full shadow-md backdrop-blur-sm border border-white/20 inline-flex items-center space-x-1.5">
              <BookOpen className="w-3 h-3 text-white" />
              <span>{article.category}</span>
            </span>
          </div>

          {/* Top Right Read Time Badge */}
          <div className="absolute top-4 right-4 z-10">
            <span className="bg-obsidian/80 backdrop-blur-md text-warm-white font-display text-[10px] font-semibold tracking-wider px-3 py-1.5 uppercase rounded-full border border-warm-white/20 inline-flex items-center space-x-1.5">
              <Clock className="w-3 h-3 text-[#B89275]" />
              <span>{article.readTime}</span>
            </span>
          </div>

          {/* Bottom Overlay Title inside Header */}
          <div className="absolute bottom-4 left-4 right-4 z-10 text-warm-white">
            <h3 className="font-display text-lg sm:text-xl tracking-wider text-warm-white uppercase font-bold group-hover:text-[#F4EBE2] transition-colors drop-shadow-md line-clamp-2 leading-tight">
              <Link to={`/journal/${article.handle}`}>{article.title}</Link>
            </h3>
          </div>
        </div>

        {/* Card Body Content */}
        <div className="p-6 sm:p-7 space-y-4 bg-white flex-1 flex flex-col justify-between">
          {/* Author byline */}
          {article.author && (
            <div className="flex items-center space-x-2 text-[11px] font-display text-[#A68064] uppercase tracking-wider">
              <User className="w-3.5 h-3.5 text-[#B89275]" />
              <span>{article.author}</span>
            </div>
          )}

          <p className="text-xs sm:text-sm text-[#5C5046] font-body leading-relaxed font-light line-clamp-2 min-h-[44px]">
            {article.summary}
          </p>
        </div>
      </div>

      {/* Card Footer Read Article Button */}
      <div className="p-6 sm:p-7 pt-0 bg-white">
        <Link
          to={`/journal/${article.handle}`}
          className="w-full bg-obsidian hover:bg-[#B89275] text-warm-white font-display text-xs font-bold tracking-widest py-4 px-6 uppercase rounded-full transition-all duration-300 shadow-md hover:shadow-xl hover:scale-[1.01] active:scale-98 flex items-center justify-center space-x-2.5 group/btn"
        >
          <span>READ ARTICLE</span>
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </Link>
      </div>
    </article>
  );
};
