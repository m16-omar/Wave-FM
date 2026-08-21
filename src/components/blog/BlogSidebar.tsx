import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Play, Pause, Send, CheckCircle2 } from 'lucide-react';
import { ARTICLES_DATA, ARTICLE_CATEGORIES } from '../../data/articles';
import { STATION_TAGS } from '../../data/categories';
import { ArticleCard } from '../cards/ArticleCard';
import { SocialLinks } from '../ui/SocialLinks';
import { useAudio } from '../../context/AudioContext';
import { clsx } from 'clsx';

interface BlogSidebarProps {
  currentCategory?: string;
  className?: string;
}

export const BlogSidebar: React.FC<BlogSidebarProps> = ({
  currentCategory,
  className,
}) => {
  const [searchVal, setSearchVal] = useState('');
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { isPlaying, playLiveStream, togglePlay, currentChannel, onAirShow } = useAudio();
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchVal.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchVal)}`);
    }
  };

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setEmail('');
    }
  };

  return (
    <aside className={clsx('space-y-8', className)}>
      {/* Widget 1: Search */}
      <div className="p-6 rounded-2xl bg-background-card border border-border">
        <h4 className="text-xs font-black uppercase tracking-widest text-white mb-4 border-l-2 border-brand-yellow pl-3">
          Search Articles
        </h4>
        <form onSubmit={handleSearch} className="relative">
          <input
            type="text"
            value={searchVal}
            onChange={(e) => setSearchVal(e.target.value)}
            placeholder="Search news & interviews..."
            className="w-full pl-4 pr-10 py-3 bg-background-secondary border border-border rounded-xl text-white placeholder-gray-500 text-xs focus:outline-none focus:border-brand-yellow"
          />
          <button
            type="submit"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-brand-yellow transition-colors"
          >
            <Search className="w-4 h-4" />
          </button>
        </form>
      </div>

      {/* Widget 2: Station Mini Bio */}
      <div className="p-6 rounded-2xl bg-background-card border border-border">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-brand-yellow text-black font-black flex items-center justify-center text-lg shadow-glow-yellow">
            W
          </div>
          <div>
            <h4 className="font-extrabold text-white text-base">
              WAVE 98.5 FM
            </h4>
            <span className="text-[10px] uppercase font-bold text-brand-yellow tracking-wider">
              Urban & Hit Radio Media
            </span>
          </div>
        </div>
        <p className="text-xs text-gray-400 leading-relaxed mb-4">
          WAVE FM is the heartbeat of modern city culture, broadcasting commercial-free hits, high-energy breakfast talk, underground electronic sets, and breaking news.
        </p>
        <SocialLinks size="sm" variant="pills" />
      </div>

      {/* Widget 3: Live Radio On-Air Sidebar Box */}
      <div className="p-6 rounded-2xl bg-gradient-to-br from-brand-yellow/15 via-background-card to-background-card border border-brand-yellow/30 shadow-card">
        <div className="flex items-center justify-between mb-3">
          <span className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-brand-yellow">
            <span className="w-2 h-2 rounded-full bg-brand-red animate-ping" />
            ON AIR NOW
          </span>
          <span className="text-[10px] font-mono text-gray-400">{currentChannel.frequency}</span>
        </div>

        <h4 className="text-base font-extrabold text-white leading-tight mb-1">
          {onAirShow.title}
        </h4>
        <p className="text-xs text-gray-400 mb-4">
          w/ {onAirShow.hostName}
        </p>

        <button
          onClick={() => (isPlaying ? togglePlay() : playLiveStream())}
          className="w-full py-2.5 px-4 rounded-xl bg-brand-yellow text-black font-extrabold uppercase text-xs tracking-wider shadow-glow-yellow hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2"
        >
          {isPlaying ? (
            <>
              <Pause className="w-4 h-4 fill-current" />
              <span>Playing Live</span>
            </>
          ) : (
            <>
              <Play className="w-4 h-4 fill-current" />
              <span>Listen Live</span>
            </>
          )}
        </button>
      </div>

      {/* Widget 4: Categories with Counts */}
      <div className="p-6 rounded-2xl bg-background-card border border-border">
        <h4 className="text-xs font-black uppercase tracking-widest text-white mb-4 border-l-2 border-brand-yellow pl-3">
          Categories
        </h4>
        <div className="space-y-1.5">
          {ARTICLE_CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              to={`/blog?category=${cat.slug}`}
              className={clsx(
                'flex items-center justify-between px-3 py-2 rounded-xl text-xs font-bold transition-all',
                currentCategory === cat.slug
                  ? 'bg-brand-yellow text-black shadow-glow-yellow/20'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              )}
            >
              <span>{cat.name}</span>
              <span className="text-[10px] px-2 py-0.5 rounded-md bg-black/30 font-mono">
                {cat.count}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Widget 5: Recent Articles with Thumbnails */}
      <div className="p-6 rounded-2xl bg-background-card border border-border">
        <h4 className="text-xs font-black uppercase tracking-widest text-white mb-4 border-l-2 border-brand-yellow pl-3">
          Recent Stories
        </h4>
        <div className="space-y-2">
          {ARTICLES_DATA.slice(0, 4).map((art) => (
            <ArticleCard
              key={art.id}
              article={art}
              variant="compact"
            />
          ))}
        </div>
      </div>

      {/* Widget 6: Trending Tags Cloud */}
      <div className="p-6 rounded-2xl bg-background-card border border-border">
        <h4 className="text-xs font-black uppercase tracking-widest text-white mb-4 border-l-2 border-brand-yellow pl-3">
          Popular Tags
        </h4>
        <div className="flex flex-wrap gap-2">
          {STATION_TAGS.map((tag) => (
            <Link
              key={tag.id}
              to={`/blog?tag=${tag.slug}`}
              className="px-2.5 py-1 rounded-lg bg-background-secondary hover:bg-brand-yellow hover:text-black border border-border text-[11px] font-bold text-gray-300 transition-colors"
            >
              #{tag.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Widget 7: Newsletter Widget */}
      <div className="p-6 rounded-2xl bg-background-card border border-border text-center">
        <div className="w-10 h-10 rounded-full bg-brand-yellow/10 text-brand-yellow flex items-center justify-center mx-auto mb-3">
          <Send className="w-5 h-5" />
        </div>
        <h4 className="text-sm font-extrabold text-white mb-1">
          Weekly VIP Newsletter
        </h4>
        <p className="text-xs text-gray-400 mb-4">
          Get exclusive backstage interviews, festival tickets and charts delivered to your inbox.
        </p>

        <form onSubmit={handleNewsletter} className="space-y-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            required
            className="w-full px-3 py-2.5 bg-background-secondary border border-border rounded-xl text-white placeholder-gray-500 text-xs focus:outline-none focus:border-brand-yellow text-center"
          />
          <button
            type="submit"
            className="w-full py-2.5 rounded-xl bg-brand-yellow text-black font-extrabold uppercase text-xs tracking-wider shadow-glow-yellow hover:bg-brand-yellowHover transition-all flex items-center justify-center gap-2"
          >
            {isSubscribed ? (
              <>
                <CheckCircle2 className="w-4 h-4" />
                <span>Joined VIP Club!</span>
              </>
            ) : (
              <span>Subscribe</span>
            )}
          </button>
        </form>
      </div>
    </aside>
  );
};
