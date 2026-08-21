import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Eye, ArrowRight } from 'lucide-react';
import type { Article } from '../../types/article';
import { Badge } from '../ui/Badge';
import { clsx } from 'clsx';

interface ArticleCardProps {
  article: Article;
  variant?: 'featured' | 'standard' | 'horizontal' | 'compact';
  className?: string;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
  article,
  variant = 'standard',
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
        <div className="relative w-16 h-16 shrink-0 rounded-lg overflow-hidden bg-background-tertiary">
          <img
            src={article.featuredImage}
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            loading="lazy"
          />
        </div>
        <div className="flex-1 min-w-0">
          <span className="text-[10px] font-extrabold uppercase tracking-wider text-brand-yellow">
            {article.category}
          </span>
          <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-brand-yellow transition-colors line-clamp-2 leading-snug">
            {article.title}
          </h4>
          <span className="text-[11px] text-gray-500 mt-1 block">
            {article.publishedAt}
          </span>
        </div>
      </Link>
    );
  }

  if (variant === 'featured') {
    return (
      <article
        className={clsx(
          'group relative rounded-2xl overflow-hidden bg-background-card border border-border transition-all duration-300 hover:border-brand-yellow/50 shadow-card flex flex-col md:flex-row',
          className
        )}
      >
        <div className="relative md:w-7/12 aspect-[16/10] md:aspect-auto overflow-hidden bg-background-tertiary">
          <img
            src={article.featuredImage}
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/80 via-black/20 to-transparent" />
          <div className="absolute top-4 left-4 z-10">
            <Badge variant="yellow" size="md">
              {article.category}
            </Badge>
          </div>
        </div>

        <div className="p-6 md:p-8 md:w-5/12 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 text-xs text-gray-400 mb-3 font-medium">
              <span className="flex items-center gap-1.5">
                <img
                  src={article.author.avatar}
                  alt={article.author.name}
                  className="w-5 h-5 rounded-full object-cover"
                />
                {article.author.name}
              </span>
              <span>•</span>
              <span>{article.publishedAt}</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {article.readTime}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white group-hover:text-brand-yellow transition-colors leading-tight mb-4">
              <Link to={`/blog/${article.slug}`}>
                {article.title}
              </Link>
            </h3>

            <p className="text-gray-300 text-sm md:text-base line-clamp-3 leading-relaxed mb-6">
              {article.excerpt}
            </p>
          </div>

          <div className="pt-4 border-t border-border/60 flex items-center justify-between">
            <Link
              to={`/blog/${article.slug}`}
              className="inline-flex items-center gap-2 text-xs md:text-sm font-extrabold uppercase tracking-wider text-brand-yellow hover:text-white transition-colors"
            >
              <span>Read Article</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            {article.viewsCount && (
              <span className="flex items-center gap-1 text-xs text-gray-500">
                <Eye className="w-3.5 h-3.5" />
                {article.viewsCount.toLocaleString()}
              </span>
            )}
          </div>
        </div>
      </article>
    );
  }

  // Standard Blog card (matching WP35 blog-sidebar card structure)
  return (
    <article
      className={clsx(
        'group flex flex-col bg-background-card border border-border rounded-2xl overflow-hidden transition-all duration-300 hover:border-brand-yellow/40 hover:-translate-y-1 shadow-card',
        className
      )}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-background-tertiary">
        <Link to={`/blog/${article.slug}`}>
          <img
            src={article.featuredImage}
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </Link>
        <div className="absolute top-3.5 left-3.5 z-10">
          <Badge variant="yellow" size="sm">
            {article.category}
          </Badge>
        </div>
      </div>

      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-3 text-xs text-gray-400 mb-2.5">
            <span className="flex items-center gap-1.5">
              <img
                src={article.author.avatar}
                alt={article.author.name}
                className="w-4 h-4 rounded-full object-cover"
              />
              <span className="truncate max-w-[120px]">{article.author.name}</span>
            </span>
            <span>•</span>
            <span>{article.publishedAt}</span>
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-brand-yellow transition-colors leading-snug mb-3 line-clamp-2">
            <Link to={`/blog/${article.slug}`}>
              {article.title}
            </Link>
          </h3>

          <p className="text-gray-400 text-xs sm:text-sm line-clamp-2 leading-relaxed mb-4">
            {article.excerpt}
          </p>
        </div>

        <div className="pt-4 border-t border-border flex items-center justify-between">
          <Link
            to={`/blog/${article.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-yellow group-hover:text-white transition-colors"
          >
            <span>Read More</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>

          <div className="flex items-center gap-3 text-xs text-gray-500">
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {article.readTime}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};
