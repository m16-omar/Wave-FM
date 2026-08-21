import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Radio, Newspaper, Disc, Mic2, Calendar, ArrowRight } from 'lucide-react';
import { ARTICLES_DATA } from '../../data/articles';
import { SHOWS_DATA } from '../../data/shows';
import { PODCAST_EPISODES } from '../../data/podcasts';
import { TOP_CHART_SONGS } from '../../data/charts';
import { EVENTS_DATA } from '../../data/events';
import { RADIO_HOSTS } from '../../data/hosts';
import { SearchResultItem } from '../../types/common';

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchOverlay: React.FC<SearchOverlayProps> = ({
  isOpen,
  onClose,
}) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResultItem[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const q = query.toLowerCase();
    const matches: SearchResultItem[] = [];

    // Articles
    ARTICLES_DATA.forEach(a => {
      if (a.title.toLowerCase().includes(q) || a.excerpt.toLowerCase().includes(q) || a.category.toLowerCase().includes(q)) {
        matches.push({
          id: a.id,
          type: 'article',
          title: a.title,
          subtitle: a.category,
          url: `/blog/${a.slug}`,
          image: a.featuredImage,
          date: a.publishedAt,
        });
      }
    });

    // Shows
    SHOWS_DATA.forEach(s => {
      if (s.title.toLowerCase().includes(q) || s.description.toLowerCase().includes(q) || s.hostName.toLowerCase().includes(q)) {
        matches.push({
          id: s.id,
          type: 'show',
          title: s.title,
          subtitle: `${s.category} • w/ ${s.hostName}`,
          url: `/shows/${s.slug}`,
          image: s.image,
        });
      }
    });

    // Hosts
    RADIO_HOSTS.forEach(h => {
      if (h.name.toLowerCase().includes(q) || h.role.toLowerCase().includes(q)) {
        matches.push({
          id: h.id,
          type: 'host',
          title: h.name,
          subtitle: h.role,
          url: `/hosts/${h.slug}`,
          image: h.photo,
        });
      }
    });

    // Podcasts
    PODCAST_EPISODES.forEach(p => {
      if (p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q)) {
        matches.push({
          id: p.id,
          type: 'podcast',
          title: p.title,
          subtitle: `${p.podcastTitle} • ${p.duration}`,
          url: `/podcasts/${p.slug}`,
          image: p.coverImage,
        });
      }
    });

    // Songs
    TOP_CHART_SONGS.forEach(song => {
      if (song.title.toLowerCase().includes(q) || song.artist.toLowerCase().includes(q)) {
        matches.push({
          id: song.id,
          type: 'song',
          title: song.title,
          subtitle: `${song.artist} • Peak #${song.peakRank}`,
          url: `/charts`,
          image: song.coverArt,
        });
      }
    });

    // Events
    EVENTS_DATA.forEach(e => {
      if (e.title.toLowerCase().includes(q) || e.venue.toLowerCase().includes(q)) {
        matches.push({
          id: e.id,
          type: 'event',
          title: e.title,
          subtitle: `${e.date} • ${e.venue}`,
          url: `/events/${e.slug}`,
          image: e.image,
        });
      }
    });

    setResults(matches.slice(0, 8));
  }, [query]);

  const handleSelectResult = (url: string) => {
    onClose();
    navigate(url);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && query.trim()) {
      onClose();
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-start p-4 sm:p-6 md:p-12 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/90 backdrop-blur-xl"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="relative w-full max-w-3xl bg-background-card border border-border rounded-2xl shadow-2xl p-6 z-10 my-auto"
          >
            {/* Search Input Bar */}
            <div className="relative flex items-center border-b border-border pb-4">
              <Search className="w-6 h-6 text-brand-yellow shrink-0 mr-3" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Search songs, radio shows, DJs, articles, podcasts, events..."
                className="w-full bg-transparent text-lg sm:text-xl font-bold text-white placeholder-gray-500 focus:outline-none"
                autoFocus
              />
              <button
                onClick={onClose}
                className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors ml-2"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Quick Suggestions / Real-time Results */}
            <div className="mt-6">
              {query.trim() === '' ? (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
                    Popular Searches
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {['Peggy Gou', 'Morning Drive', 'Top 20 Chart', 'Summer Festival', 'DJ K-Real', 'Afrobeats', 'Techno', 'Studio Sessions'].map((tag) => (
                      <button
                        key={tag}
                        onClick={() => setQuery(tag)}
                        className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-brand-yellow hover:text-black text-xs font-bold text-gray-300 transition-colors"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              ) : results.length > 0 ? (
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-gray-400 mb-2">
                    <span>Found {results.length} quick results</span>
                    <button
                      onClick={() => {
                        onClose();
                        navigate(`/search?q=${encodeURIComponent(query)}`);
                      }}
                      className="text-brand-yellow hover:underline font-bold"
                    >
                      View all in Search page →
                    </button>
                  </div>

                  {results.map((item) => (
                    <div
                      key={`${item.type}-${item.id}`}
                      onClick={() => handleSelectResult(item.url)}
                      className="group flex items-center justify-between p-3 rounded-xl bg-background-secondary/70 hover:bg-background-hover border border-border hover:border-brand-yellow/50 transition-all cursor-pointer"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-10 h-10 rounded-lg object-cover shrink-0"
                        />
                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-brand-yellow/10 text-brand-yellow">
                              {item.type}
                            </span>
                            <h5 className="text-sm font-bold text-white group-hover:text-brand-yellow transition-colors truncate">
                              {item.title}
                            </h5>
                          </div>
                          <p className="text-xs text-gray-400 truncate mt-0.5">
                            {item.subtitle}
                          </p>
                        </div>
                      </div>

                      <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-brand-yellow group-hover:translate-x-1 transition-all shrink-0 ml-3" />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-10">
                  <p className="text-gray-400 text-sm">
                    No matching results found for "{query}".
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Try searching for artist names, shows like "Morning Drive", or chart tracks.
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
