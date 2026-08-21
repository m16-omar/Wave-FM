import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ARTICLES_DATA, ARTICLE_CATEGORIES } from '../../data/articles';
import { ArticleCard } from '../../components/cards/ArticleCard';
import { BlogSidebar } from '../../components/blog/BlogSidebar';
import { Pagination } from '../../components/ui/Pagination';
import { Tabs } from '../../components/ui/Tabs';
import type { TabItem } from '../../components/ui/Tabs';
import { Newspaper } from 'lucide-react';

export const BlogPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedCategory = searchParams.get('category') || 'all';
  const selectedTag = searchParams.get('tag') || null;
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Filter articles
  const filteredArticles = useMemo(() => {
    return ARTICLES_DATA.filter((article) => {
      if (selectedCategory !== 'all' && article.category.toLowerCase().replace(/ & | /g, '-') !== selectedCategory) {
        // Also match category name directly
        if (!article.category.toLowerCase().includes(selectedCategory.replace(/-/g, ' '))) {
          return false;
        }
      }
      if (selectedTag) {
        const tagSlug = selectedTag.toLowerCase();
        const hasTag = article.tags.some(t => t.toLowerCase().replace(/ /g, '-') === tagSlug);
        if (!hasTag) return false;
      }
      return true;
    });
  }, [selectedCategory, selectedTag]);

  // Pagination calculation
  const totalPages = Math.ceil(filteredArticles.length / itemsPerPage) || 1;
  const currentArticles = filteredArticles.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const categoryTabs: TabItem[] = [
    { id: 'all', label: 'All Stories', count: ARTICLES_DATA.length },
    ...ARTICLE_CATEGORIES.map(c => ({
      id: c.slug,
      label: c.name,
      count: c.count,
    })),
  ];

  const handleCategoryChange = (tabId: string) => {
    setCurrentPage(1);
    if (tabId === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', tabId);
    }
    searchParams.delete('tag');
    setSearchParams(searchParams);
  };

  return (
    <div className="w-full py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Page Header / Breadcrumb */}
        <div className="border-b border-border pb-6">
          <div className="flex items-center gap-2 text-xs text-brand-yellow font-extrabold uppercase tracking-widest mb-2">
            <Newspaper className="w-4 h-4" />
            <span>WAVE 98.5 FM Editorial Newsroom</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
                News & Blog
              </h1>
              <p className="text-sm md:text-base text-gray-400 mt-2 max-w-2xl">
                Daily music journalism, exclusive studio dialogues, festival guides, gear reviews and chart analysis.
              </p>
            </div>

            {/* Category Filter Pills (Top Bar) */}
            <div className="shrink-0 overflow-x-auto pb-1">
              <Tabs
                tabs={categoryTabs}
                activeTab={selectedCategory}
                onChange={handleCategoryChange}
                variant="pills"
              />
            </div>
          </div>
        </div>

        {/* Selected Tag or Category indicator */}
        {(selectedTag || selectedCategory !== 'all') && (
          <div className="flex items-center justify-between p-3.5 rounded-xl bg-background-card border border-border text-xs">
            <span className="text-gray-300">
              Filtering by: <strong className="text-brand-yellow uppercase">{selectedTag ? `#${selectedTag}` : selectedCategory}</strong> ({filteredArticles.length} articles)
            </span>
            <button
              onClick={() => {
                setSearchParams({});
                setCurrentPage(1);
              }}
              className="text-gray-400 hover:text-white font-bold underline"
            >
              Clear filters
            </button>
          </div>
        )}

        {/* Exact WP35 Blog-Sidebar 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Main Articles Column (68% / 8 Cols on Large Screens) */}
          <main className="lg:col-span-8 space-y-8">
            {currentArticles.length > 0 ? (
              <>
                {/* First Article as Large Hero Card (on page 1 when showing all) */}
                {currentPage === 1 && selectedCategory === 'all' && !selectedTag && (
                  <div className="mb-8">
                    <ArticleCard article={currentArticles[0]} variant="featured" />
                  </div>
                )}

                {/* Grid of standard blog cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {(currentPage === 1 && selectedCategory === 'all' && !selectedTag
                    ? currentArticles.slice(1)
                    : currentArticles
                  ).map((article) => (
                    <ArticleCard
                      key={article.id}
                      article={article}
                      variant="standard"
                    />
                  ))}
                </div>

                {/* Pagination (1, 2, 3...) */}
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={(page) => {
                    setCurrentPage(page);
                    window.scrollTo({ top: 200, behavior: 'smooth' });
                  }}
                />
              </>
            ) : (
              <div className="text-center py-16 bg-background-card rounded-2xl border border-border p-8">
                <p className="text-base text-gray-300 font-bold mb-2">
                  No articles found matching this filter.
                </p>
                <p className="text-xs text-gray-500 mb-6">
                  Try selecting a different category or clear active tag filters.
                </p>
                <button
                  onClick={() => setSearchParams({})}
                  className="px-6 py-2.5 rounded-xl bg-brand-yellow text-black font-bold uppercase text-xs"
                >
                  View All News
                </button>
              </div>
            )}
          </main>

          {/* Dedicated Sidebar Column (32% / 4 Cols on Large Screens) */}
          <div className="lg:col-span-4">
            <BlogSidebar currentCategory={selectedCategory} />
          </div>
        </div>
      </div>
    </div>
  );
};
