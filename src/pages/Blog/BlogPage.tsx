import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAudio } from '../../context/AudioContext';
import { Radio, Newspaper, Sparkles, Send, CheckCircle2, RadioTower, Bell, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { ASSET_IMAGES } from '../../assets/images';

export const BlogPage: React.FC = () => {
  const { playLiveStream, isPlaying } = useAudio();
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNotifySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubscribed(true);
    confetti({
      particleCount: 70,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#F5B800', '#532688', '#FFFFFF', '#00E5FF'],
    });
  };

  return (
    <div className="w-full select-none overflow-hidden pb-16 font-sans">
      {/* ========================================================================= */}
      {/* 1. COMING SOON HERO SPOTLIGHT                                             */}
      {/* ========================================================================= */}
      <section className="relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Background Ambient Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-yellow/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/4 right-10 w-[400px] h-[400px] bg-[#532688]/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
          {/* Eyebrow Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900 border border-brand-yellow/40 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-brand-yellow animate-ping" />
            <span className="text-[11px] font-black tracking-widest text-brand-yellow uppercase font-mono">
              IMOLE 106.3 FM DIGITAL NEWSROOM
            </span>
          </div>

          {/* Main Headline */}
          <div className="relative inline-block">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase font-display tracking-tight text-white leading-[1.05]">
              IMOLE NEWS
              <br />
              <span className="text-brand-yellow">COMING SOON!</span>
            </h1>
          </div>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg text-gray-300 font-medium leading-relaxed max-w-2xl mx-auto">
            Our digital newsroom is currently integrating live 24/7 editorial feeds, verified local Lagos reports, breaking community updates, and broadcast audio bulletins. Stay tuned as we prepare to bring you accurate, timely, and unbiased news across Lagos and beyond.
          </p>

          {/* Feature Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left pt-4">
            <div className="bg-[#0F204E]/80 backdrop-blur-md rounded-2xl p-5 border border-blue-900/40 shadow-xl space-y-2 group hover:border-brand-yellow/50 transition-colors">
              <div className="w-9 h-9 rounded-xl bg-brand-yellow/15 flex items-center justify-center text-brand-yellow">
                <Newspaper className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-black text-white uppercase font-display">Breaking Lagos News</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Real-time civic affairs, traffic updates, metro reports, and grassroots stories.
              </p>
            </div>

            <div className="bg-[#0F204E]/80 backdrop-blur-md rounded-2xl p-5 border border-blue-900/40 shadow-xl space-y-2 group hover:border-brand-yellow/50 transition-colors">
              <div className="w-9 h-9 rounded-xl bg-brand-yellow/15 flex items-center justify-center text-brand-yellow">
                <RadioTower className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-black text-white uppercase font-display">Audio Bulletins</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Top-of-the-hour broadcast audio recaps and live on-air journalist field reports.
              </p>
            </div>

            <div className="bg-[#0F204E]/80 backdrop-blur-md rounded-2xl p-5 border border-blue-900/40 shadow-xl space-y-2 group hover:border-brand-yellow/50 transition-colors">
              <div className="w-9 h-9 rounded-xl bg-brand-yellow/15 flex items-center justify-center text-brand-yellow">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-black text-white uppercase font-display">Culture & Society</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                In-depth features celebrating Yoruba heritage, urban lifestyle, entertainment, and sports.
              </p>
            </div>
          </div>

          {/* Notify Me Form Box */}
          <div className="pt-6 max-w-lg mx-auto">
            {isSubscribed ? (
              <div className="bg-[#0F204E] border border-brand-yellow/40 rounded-2xl p-6 shadow-2xl space-y-2 text-center">
                <CheckCircle2 className="w-10 h-10 text-brand-yellow mx-auto" />
                <h4 className="text-base font-black text-white uppercase font-display">You're on the news VIP list!</h4>
                <p className="text-xs text-gray-400">
                  We'll send you an instant notification as soon as our live digital news portal goes live.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleNotifySubmit}
                className="bg-[#0F204E]/90 border border-blue-900/40 rounded-2xl p-2 sm:p-2.5 shadow-2xl flex flex-col sm:flex-row items-center gap-2"
              >
                <div className="flex items-center gap-2 px-3 w-full sm:flex-1">
                  <Bell className="w-4 h-4 text-brand-yellow shrink-0" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email for news updates..."
                    className="w-full bg-transparent text-white text-xs sm:text-sm placeholder-gray-500 focus:outline-none py-2"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-brand-yellow text-black hover:bg-brand-yellowHover active:scale-95 font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shrink-0 shadow-lg"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Notify Me</span>
                </button>
              </form>
            )}
          </div>

          {/* Quick Action Buttons */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => playLiveStream()}
              className="px-8 py-3.5 rounded-full bg-brand-yellow hover:bg-brand-yellowHover active:scale-95 text-black font-black text-xs uppercase tracking-wider shadow-glow-yellow transition-all flex items-center gap-2 cursor-pointer"
            >
              <Radio className="w-4 h-4" />
              <span>{isPlaying ? 'Listening Live Now' : 'Listen Live On Air'}</span>
            </button>

            <Link
              to="/shows"
              className="px-8 py-3.5 rounded-full bg-neutral-900 border border-white/10 hover:border-brand-yellow/50 active:scale-95 text-white font-black text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Explore Radio Shows</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. PHOTO BANNER SHOWCASE                                                  */}
      {/* ========================================================================= */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl overflow-hidden relative border border-white/10 shadow-2xl aspect-[16/6] min-h-[220px]">
          <img
            src={ASSET_IMAGES.building}
            alt="Imole 106.3 FM Broadcast House"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/80" />
          <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-12 max-w-xl space-y-2">
            <span className="text-[10px] font-black uppercase tracking-widest text-brand-yellow font-mono">
              OFFICIAL NEWSROOM & BROADCAST HOUSE
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white uppercase font-display">
              Inform • Inspire • Illuminate
            </h2>
            <p className="text-xs text-gray-300">
              Broadcasting credible journalism, grassroots reports, and live news bulletins 24/7 across Lagos from 20, Adetoro John Street, Fadeyi.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

/*
===================================================================================
PREVIOUS BLOG/NEWS PAGE DESIGN (PRESERVED IN COMMENTS FOR FUTURE BACKEND ACTIVATION)
===================================================================================

import { useSearchParams } from 'react-router-dom';
import { ARTICLES_DATA } from '../../data/articles';
import { ArticleCard } from '../../components/cards/ArticleCard';
import { BlogSidebar } from '../../components/blog/BlogSidebar';

export const PreviousBlogPageDesign: React.FC = () => {
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
      {/* 1. Hero Page Title --}
      <div className="w-full bg-[#060D24] py-14 sm:py-20 relative overflow-hidden border-b border-blue-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight font-display">
            Imole News
          </h1>
        </div>
      </div>

      {/* 2. Main Content Grid: Articles (8 Cols) + Sidebar (4 Cols) --}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          <div className="lg:col-span-8 space-y-10">
            {displayedArticles.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                {displayedArticles.map((article) => (
                  <ArticleCard key={article.id} article={article} variant="grid" />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-[#0F204E] rounded-2xl border border-blue-900/40">
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
*/

