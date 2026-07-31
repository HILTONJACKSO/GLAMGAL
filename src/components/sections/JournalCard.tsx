import React from 'react';
import { Link } from 'react-router-dom';
import { JournalArticle } from '../../types/shopify';
import { ArrowRight } from 'lucide-react';

export const JournalCard: React.FC<{ article: JournalArticle }> = ({ article }) => {
  return (
    <article className="bg-white border border-soft-stone rounded-sm overflow-hidden flex flex-col justify-between group hover:border-obsidian transition-all">
      <div>
        <div className="aspect-[16/10] overflow-hidden bg-warm-white">
          <img
            src={article.coverImage}
            alt={article.title}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
        </div>
        <div className="p-6 space-y-3">
          <div className="flex items-center justify-between text-[10px] font-display tracking-widest text-warm-taupe uppercase">
            <span>{article.category}</span>
            <span>{article.readTime}</span>
          </div>

          <h3 className="font-display text-sm tracking-wider text-obsidian uppercase font-bold group-hover:underline leading-snug">
            <Link to={`/journal/${article.handle}`}>{article.title}</Link>
          </h3>

          <p className="text-xs text-deep-charcoal line-clamp-2 leading-relaxed font-body">
            {article.summary}
          </p>
        </div>
      </div>

      <div className="p-6 pt-0">
        <Link
          to={`/journal/${article.handle}`}
          className="inline-flex items-center space-x-2 font-display text-xs tracking-widest text-obsidian uppercase hover:text-warm-taupe transition-colors"
        >
          <span>READ ARTICLE</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </article>
  );
};
