import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Eye, Share2, MessageCircle, Newspaper } from 'lucide-react';
import type { Article } from '../../types/article';
import { clsx } from 'clsx';

interface ArticleCardProps {
  article: Article;
  variant?: 'featured' | 'standard' | 'horizontal' | 'compact' | 'grid';
  className?: string;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
  article,
  variant = 'grid',
  className,
}) => {
  if (variant === 'compact') {
    return (
      <Link
        to={`/blog/${article.slug}`}
        className={clsx(
          'group flex items-center gap-3.5 p-2 rounded-xl transition-all hover:bg-white/5',
          className
        )}
      >
        <div className="relative w-14 h-14 shrink-0 rounded-lg overflow-hidden bg-neutral-900 border border-white/10">
          <img
            src={article.featuredImage}
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-xs font-extrabold text-white group-hover:text-brand-yellow transition-colors line-clamp-2 leading-snug">
            {article.title}
          </h4>
        </div>
      </Link>
    );
  }

  // Default Grid Card style from Blog Page Reference Screenshot
  return (
    <article
      className={clsx(
        'group bg-[#141416] rounded-2xl overflow-hidden border border-white/5 shadow-xl hover:border-brand-yellow/30 transition-all duration-300 flex flex-col justify-between select-none',
        className
      )}
    >
      <Link to={`/blog/${article.slug}`} className="block">
        {/* Featured Image with Floating Icon Badge on Top-Right */}
        <div className="relative aspect-[16/11] sm:aspect-[4/3] w-full overflow-hidden bg-neutral-900">
          <img
            src={article.featuredImage}
            alt={article.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

          {/* Floating Circle Icon Badge on Top-Right Corner */}
          <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-black/50 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-md">
            <Newspaper className="w-3.5 h-3.5 stroke-[2]" />
          </div>
        </div>

        {/* Content Area */}
        <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
          <div>
            {/* Category Tag with Yellow Border */}
            <div className="mb-2.5">
              <span className="px-2.5 py-0.5 rounded border border-brand-yellow text-brand-yellow text-[10px] font-black uppercase tracking-wider inline-block">
                {article.category}
              </span>
            </div>

            {/* Article Title */}
            <h3 className="font-black text-sm sm:text-base text-white group-hover:text-brand-yellow transition-colors leading-snug line-clamp-2 mb-4 font-display">
              {article.title}
            </h3>
          </div>

          {/* Meta Info Row */}
          <div className="flex items-center justify-between text-[11px] text-gray-400 font-mono pt-3 border-t border-white/5">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3 h-3 text-brand-yellow" />
              <span>{article.publishedAt}</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <Eye className="w-3 h-3 text-gray-400" />
                <span>{article.viewsCount}</span>
              </div>
              <div className="flex items-center gap-1">
                <Share2 className="w-3 h-3 text-gray-400" />
                <span>{article.commentsCount}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
};
