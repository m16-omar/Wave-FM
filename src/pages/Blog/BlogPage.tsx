import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ARTICLES_DATA } from '../../data/articles';
import { ArticleCard } from '../../components/cards/ArticleCard';
import { BlogSidebar } from '../../components/blog/BlogSidebar';

export const BlogPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedCategory = searchParams.get('category') || 'all';
  const selectedTag = searchParams.get('tag') || null;
  const [visibleCount, setVisibleCount] = useState<number>(6);

  // Filter articles by category or tag
  const filteredArticles = useMemo(() => {
    return ARTICLES_DATA.filter((article) => {
      if (selectedCategory !== 'all') {
        const catSlug = article.category.toLowerCase().replace(/ & | /g, '-');
        if (catSlug !== selectedCategory && !article.category.toLowerCase().includes(selectedCategory)) {
          return false;
        }
      }
      if (selectedTag) {
        const tagUpper = selectedTag.toUpperCase();
        const hasTag = article.tags.some((t) => t.toUpperCase() === tagUpper);
        if (!hasTag) return false;
      }
      return true;
    });
  }, [selectedCategory, selectedTag]);

  const displayedArticles = filteredArticles.slice(0, visibleCount);
  const hasMore = visibleCount < filteredArticles.length;

  const handleCategorySelect = (catSlug: string) => {
    setVisibleCount(6);
    if (catSlug === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', catSlug);
    }
    searchParams.delete('tag');
    setSearchParams(searchParams);
  };

  const handleTagSelect = (tag: string) => {
    setVisibleCount(6);
    searchParams.set('tag', tag);
    searchParams.delete('category');
    setSearchParams(searchParams);
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  return (
    <div className="w-full select-none">
      {/* 1. Hero Page Title with Repeating "Blog" Watermark (Pixel-Matched to Screenshot 1) */}
      <div className="w-full bg-[#0C0D10] py-14 sm:py-20 relative overflow-hidden border-b border-white/5">
        {/* Background Repeating Script Watermark "Blog" */}
        <div className="absolute inset-0 flex items-center justify-around pointer-events-none opacity-[0.04] overflow-hidden select-none">
          <span className="font-script text-8xl sm:text-[11rem] text-white rotate-[-12deg] whitespace-nowrap">
            Blog
          </span>
          <span className="font-script text-8xl sm:text-[11rem] text-white rotate-[-12deg] whitespace-nowrap hidden sm:inline">
            Blog
          </span>
          <span className="font-script text-8xl sm:text-[11rem] text-white rotate-[-12deg] whitespace-nowrap hidden md:inline">
            Blog
          </span>
        </div>

        {/* Centered Title */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight font-display">
            Blog Sidebar
          </h1>
        </div>
      </div>

      {/* 2. Main Content Grid: Articles (8 Cols) + Sidebar (4 Cols) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column (8 Cols): 2-Column Article Cards Grid */}
          <div className="lg:col-span-8 space-y-10">
            {displayedArticles.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                {displayedArticles.map((article) => (
                  <ArticleCard key={article.id} article={article} variant="grid" />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-[#141416] rounded-2xl border border-white/10">
                <p className="text-gray-400 font-bold text-sm">No stories found in this category.</p>
                <button
                  onClick={() => {
                    searchParams.delete('category');
                    searchParams.delete('tag');
                    setSearchParams(searchParams);
                  }}
                  className="mt-4 px-6 py-2 rounded-full bg-brand-yellow text-black font-extrabold text-xs uppercase"
                >
                  View All Stories
                </button>
              </div>
            )}

            {/* "LOAD MORE" Pill Button from Screenshot 3 */}
            {hasMore && (
              <div className="text-center pt-4">
                <button
                  onClick={handleLoadMore}
                  className="px-10 py-3 rounded-full border border-white/30 text-white hover:border-brand-yellow hover:text-brand-yellow hover:scale-105 active:scale-95 font-black text-xs uppercase tracking-widest transition-all cursor-pointer shadow-lg"
                >
                  LOAD MORE
                </button>
              </div>
            )}
          </div>

          {/* Right Column (4 Cols): Redesigned Sidebar */}
          <div className="lg:col-span-4">
            <BlogSidebar
              onSelectCategory={handleCategorySelect}
              onSelectTag={handleTagSelect}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
