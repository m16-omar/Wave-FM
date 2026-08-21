import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ChevronDown } from 'lucide-react';
import { ARTICLES_DATA, ARTICLE_CATEGORIES } from '../../data/articles';
import { clsx } from 'clsx';

const TREND_TAGS = [
  'ARTISTS',
  'CHARTS',
  'COUNTDOWN',
  'CULTURE',
  'DISCOVERY',
  'DJ',
  'FESTIVALS',
  'FEATURED',
  'GOSSIP',
  'HITS',
  'INDUSTRY',
  'INTERVIEW',
  'LIVE',
  'ONLINE',
  'ON AIR',
  'POP',
  'PRO RADIO',
  'RADIO LIVE',
  'RELEASES',
  'ROCK',
  'SOUND',
  'STUDIO',
  'SYNTH',
  'TECHNO',
  'TRENDS',
  'VIDEO',
];

interface BlogSidebarProps {
  currentCategory?: string;
  onSelectCategory?: (category: string) => void;
  onSelectTag?: (tag: string) => void;
  className?: string;
}

export const BlogSidebar: React.FC<BlogSidebarProps> = ({
  currentCategory,
  onSelectCategory,
  onSelectTag,
  className,
}) => {
  const [searchVal, setSearchVal] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchVal.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchVal)}`);
    }
  };

  const handleCategorySelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    if (onSelectCategory) {
      onSelectCategory(val);
    } else {
      navigate(val === 'all' ? '/blog' : `/blog?category=${val}`);
    }
  };

  const hotNowArticles = ARTICLES_DATA.slice(0, 5);

  return (
    <aside className={clsx('space-y-8 select-none', className)}>
      {/* 1. SEARCH Widget */}
      <div>
        {/* Header with Yellow Dashed Line */}
        <div className="flex items-center gap-2 mb-3">
          <span className="px-2.5 py-0.5 rounded bg-brand-yellow text-black text-[10px] font-black uppercase tracking-wider">
            SEARCH
          </span>
          <div className="flex-1 border-b border-dashed border-brand-yellow/60" />
        </div>

        <form onSubmit={handleSearch} className="relative">
          <input
            type="text"
            value={searchVal}
            onChange={(e) => setSearchVal(e.target.value)}
            placeholder="Search in this website"
            className="w-full bg-white text-black pl-3.5 pr-10 py-2.5 rounded-lg text-xs font-semibold placeholder-gray-500 shadow-md focus:outline-none focus:ring-2 focus:ring-brand-yellow"
          />
          <button
            type="submit"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-brand-yellow hover:text-black transition-colors cursor-pointer"
            aria-label="Search"
          >
            <Search className="w-4 h-4 text-brand-yellow" />
          </button>
        </form>
      </div>

      {/* 2. TREND TAGS Widget */}
      <div>
        {/* Header with Yellow Dashed Line */}
        <div className="flex items-center gap-2 mb-3">
          <span className="px-2.5 py-0.5 rounded bg-brand-yellow text-black text-[10px] font-black uppercase tracking-wider">
            TREND TAGS
          </span>
          <div className="flex-1 border-b border-dashed border-brand-yellow/60" />
        </div>

        <div className="flex flex-wrap gap-1.5">
          {TREND_TAGS.map((tag) => (
            <button
              key={tag}
              onClick={() => (onSelectTag ? onSelectTag(tag) : navigate(`/blog?tag=${tag}`))}
              className="px-2 py-1 bg-[#1A1B20] hover:bg-brand-yellow hover:text-black text-gray-300 text-[9px] font-bold uppercase tracking-wider rounded border border-white/10 transition-colors cursor-pointer"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* 3. POST CATEGORIES Dropdown Widget */}
      <div>
        {/* Header with Yellow Dashed Line */}
        <div className="flex items-center gap-2 mb-3">
          <span className="px-2.5 py-0.5 rounded bg-brand-yellow text-black text-[10px] font-black uppercase tracking-wider">
            POST CATEGORIES
          </span>
          <div className="flex-1 border-b border-dashed border-brand-yellow/60" />
        </div>

        <div className="relative">
          <select
            onChange={handleCategorySelect}
            defaultValue="all"
            className="w-full appearance-none bg-white text-black px-3.5 py-2.5 rounded-lg text-xs font-bold shadow-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-yellow pr-8"
          >
            <option value="all">Select Category</option>
            {ARTICLE_CATEGORIES.map((cat) => (
              <option key={cat.id} value={cat.slug}>
                {cat.name} ({cat.count})
              </option>
            ))}
          </select>
          <ChevronDown className="w-4 h-4 text-black absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>
      </div>

      {/* 4. HOT NOW Widget */}
      <div>
        {/* Header with Yellow Dashed Line */}
        <div className="flex items-center gap-2 mb-3">
          <span className="px-2.5 py-0.5 rounded bg-brand-yellow text-black text-[10px] font-black uppercase tracking-wider">
            HOT NOW
          </span>
          <div className="flex-1 border-b border-dashed border-brand-yellow/60" />
        </div>

        <div className="bg-[#141416] rounded-2xl p-3 sm:p-4 border border-white/5 shadow-xl space-y-3">
          {hotNowArticles.map((art) => (
            <Link
              key={art.id}
              to={`/blog/${art.slug}`}
              className="flex items-center gap-3 p-1.5 rounded-xl hover:bg-white/5 transition-colors group"
            >
              {/* Thumbnail Square */}
              <div className="w-12 h-12 rounded-lg overflow-hidden bg-neutral-900 shrink-0 border border-white/10">
                <img
                  src={art.featuredImage}
                  alt={art.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>

              {/* Title on Right */}
              <div className="min-w-0 flex-1">
                <h5 className="font-extrabold text-xs text-white group-hover:text-brand-yellow transition-colors leading-tight line-clamp-2">
                  {art.title}
                </h5>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
};
