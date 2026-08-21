import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, ArrowRight } from 'lucide-react';
import { ARTICLES_DATA } from '../../data/articles';
import { SHOWS_DATA } from '../../data/shows';
import { PODCAST_EPISODES } from '../../data/podcasts';
import { TOP_CHART_SONGS } from '../../data/charts';
import { EVENTS_DATA } from '../../data/events';
import { RADIO_HOSTS } from '../../data/hosts';
import { Tabs } from '../../components/ui/Tabs';
import type { TabItem } from '../../components/ui/Tabs';
import type { SearchResultItem } from '../../types/common';

export const SearchPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const [query, setQuery] = useState(initialQuery);
  const [selectedType, setSelectedType] = useState('all');

  useEffect(() => {
    setQuery(initialQuery);
  }, [initialQuery]);

  const allResults = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    const list: SearchResultItem[] = [];

    // Articles
    ARTICLES_DATA.forEach((a) => {
      if (a.title.toLowerCase().includes(q) || a.excerpt.toLowerCase().includes(q) || a.category.toLowerCase().includes(q)) {
        list.push({
          id: a.id,
          type: 'article',
          title: a.title,
          subtitle: `${a.category} • ${a.publishedAt}`,
          url: `/blog/${a.slug}`,
          image: a.featuredImage,
          date: a.publishedAt,
        });
      }
    });

    // Shows
    SHOWS_DATA.forEach((s) => {
      if (s.title.toLowerCase().includes(q) || s.description.toLowerCase().includes(q) || s.hostName.toLowerCase().includes(q)) {
        list.push({
          id: s.id,
          type: 'show',
          title: s.title,
          subtitle: `${s.category} • w/ ${s.hostName}`,
          url: `/shows/${s.slug}`,
          image: s.image,
        });
      }
    });

    // Podcasts
    PODCAST_EPISODES.forEach((p) => {
      if (p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q)) {
        list.push({
          id: p.id,
          type: 'podcast',
          title: p.title,
          subtitle: `${p.podcastTitle} • ${p.duration}`,
          url: `/podcasts/${p.slug}`,
          image: p.coverImage,
        });
      }
    });

    // Events
    EVENTS_DATA.forEach((e) => {
      if (e.title.toLowerCase().includes(q) || e.venue.toLowerCase().includes(q)) {
        list.push({
          id: e.id,
          type: 'event',
          title: e.title,
          subtitle: `${e.date} • ${e.venue}`,
          url: `/events/${e.slug}`,
          image: e.image,
        });
      }
    });

    // Hosts
    RADIO_HOSTS.forEach((h) => {
      if (h.name.toLowerCase().includes(q) || h.role.toLowerCase().includes(q)) {
        list.push({
          id: h.id,
          type: 'host',
          title: h.name,
          subtitle: h.role,
          url: `/hosts/${h.slug}`,
          image: h.photo,
        });
      }
    });

    // Songs
    TOP_CHART_SONGS.forEach((s) => {
      if (s.title.toLowerCase().includes(q) || s.artist.toLowerCase().includes(q)) {
        list.push({
          id: s.id,
          type: 'song',
          title: s.title,
          subtitle: `${s.artist} • Chart Rank #${s.rank}`,
          url: `/charts`,
          image: s.coverArt,
        });
      }
    });

    return list;
  }, [query]);

  const filteredResults = useMemo(() => {
    if (selectedType === 'all') return allResults;
    return allResults.filter((r) => r.type === selectedType);
  }, [allResults, selectedType]);

  const typeTabs: TabItem[] = [
    { id: 'all', label: 'All Results', count: allResults.length },
    { id: 'article', label: 'Articles', count: allResults.filter(r => r.type === 'article').length },
    { id: 'show', label: 'Radio Shows', count: allResults.filter(r => r.type === 'show').length },
    { id: 'podcast', label: 'Podcasts', count: allResults.filter(r => r.type === 'podcast').length },
    { id: 'event', label: 'Events', count: allResults.filter(r => r.type === 'event').length },
    { id: 'host', label: 'DJs & Hosts', count: allResults.filter(r => r.type === 'host').length },
    { id: 'song', label: 'Chart Songs', count: allResults.filter(r => r.type === 'song').length },
  ];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchParams({ q: query });
  };

  return (
    <div className="w-full py-8 md:py-12 space-y-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Search Bar Banner */}
        <div className="p-6 sm:p-10 rounded-3xl bg-background-card border border-border shadow-2xl space-y-4">
          <h1 className="text-2xl sm:text-3xl font-black text-white">
            Global Search
          </h1>
          <form onSubmit={handleSearchSubmit} className="relative">
            <Search className="w-6 h-6 text-brand-yellow absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search across all articles, shows, DJs, podcasts, tracks, and live events..."
              className="w-full pl-14 pr-32 py-4 bg-background-secondary border border-border rounded-2xl text-white text-sm sm:text-base font-bold placeholder-gray-500 focus:outline-none focus:border-brand-yellow"
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 -translate-y-1/2 px-5 py-2.5 rounded-xl bg-brand-yellow text-black font-extrabold text-xs uppercase tracking-wider shadow-glow-yellow"
            >
              Search
            </button>
          </form>
        </div>

        {/* Results Filters */}
        {query.trim() && (
          <div className="space-y-6">
            <div className="overflow-x-auto pb-1">
              <Tabs
                tabs={typeTabs}
                activeTab={selectedType}
                onChange={setSelectedType}
                variant="pills"
              />
            </div>

            {/* Results List */}
            {filteredResults.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredResults.map((item) => (
                  <Link
                    key={`${item.type}-${item.id}`}
                    to={item.url}
                    className="group flex items-center justify-between p-4 rounded-2xl bg-background-card border border-border hover:border-brand-yellow/50 transition-all hover:bg-background-hover shadow-sm"
                  >
                    <div className="flex items-center gap-4 min-w-0">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-14 h-14 rounded-xl object-cover shrink-0 border border-white/10"
                      />
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-brand-yellow/10 text-brand-yellow">
                            {item.type}
                          </span>
                        </div>
                        <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-brand-yellow transition-colors truncate">
                          {item.title}
                        </h4>
                        <p className="text-xs text-gray-400 truncate mt-0.5">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>

                    <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-brand-yellow group-hover:translate-x-1 transition-all shrink-0 ml-3" />
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-background-card rounded-2xl border border-border">
                <p className="text-gray-300 font-bold">No results found for "{query}".</p>
                <p className="text-xs text-gray-500 mt-1">Try searching for keywords like "Peggy Gou", "Drive", "Festival", or "Podcast".</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
