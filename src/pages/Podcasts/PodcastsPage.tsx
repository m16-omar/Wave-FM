import React, { useState } from 'react';
import { PODCAST_EPISODES, PODCAST_SHOWS } from '../../data/podcasts';
import { PodcastCard } from '../../components/cards/PodcastCard';
import { Tabs } from '../../components/ui/Tabs';
import type { TabItem } from '../../components/ui/Tabs';
import { Mic2, Search } from 'lucide-react';

export const PodcastsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchVal, setSearchVal] = useState('');

  const categories: TabItem[] = [
    { id: 'all', label: 'All Episodes', count: PODCAST_EPISODES.length },
    { id: 'Interviews', label: 'Artist Interviews' },
    { id: 'Comedy & Talk', label: 'Comedy & Talk' },
    { id: 'Music Culture', label: 'Music Culture' },
    { id: 'Production', label: 'Studio Production' },
  ];

  const filteredEpisodes = PODCAST_EPISODES.filter((ep) => {
    const matchCat = selectedCategory === 'all' || ep.category === selectedCategory;
    const matchSearch =
      ep.title.toLowerCase().includes(searchVal.toLowerCase()) ||
      ep.hostName.toLowerCase().includes(searchVal.toLowerCase()) ||
      ep.description.toLowerCase().includes(searchVal.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="w-full py-8 md:py-12 space-y-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header */}
        <div className="border-b border-border pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs text-brand-yellow font-extrabold uppercase tracking-widest mb-2">
              <Mic2 className="w-4 h-4" />
              <span>On-Demand Audio Archive</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              WAVE Original Podcasts
            </h1>
            <p className="text-sm md:text-base text-gray-400 mt-2 max-w-xl">
              Listen anytime. Deep dive interviews with global headliners, unfiltered morning show unreleased tapes, and music production breakdowns.
            </p>
          </div>

          <div className="relative w-full md:w-72">
            <input
              type="text"
              value={searchVal}
              onChange={(e) => setSearchVal(e.target.value)}
              placeholder="Search episodes & hosts..."
              className="w-full pl-10 pr-4 py-2.5 bg-background-card border border-border rounded-xl text-white placeholder-gray-500 text-xs focus:outline-none focus:border-brand-yellow"
            />
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          </div>
        </div>

        {/* Featured Podcast Series Cards */}
        <div>
          <h3 className="text-xs font-black uppercase tracking-widest text-brand-yellow mb-4">
            Featured Series
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {PODCAST_SHOWS.map((show) => (
              <div
                key={show.id}
                className="p-6 rounded-2xl bg-background-card border border-border hover:border-brand-yellow/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <img
                      src={show.coverImage}
                      alt={show.title}
                      className="w-12 h-12 rounded-xl object-cover"
                    />
                    <div>
                      <h4 className="font-extrabold text-white text-base">
                        {show.title}
                      </h4>
                      <span className="text-[11px] text-gray-400">w/ {show.hostName}</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-300 line-clamp-2 mb-4">
                    {show.description}
                  </p>
                </div>
                <div className="text-xs text-brand-yellow font-bold uppercase tracking-wider flex items-center justify-between pt-3 border-t border-border">
                  <span>{show.totalEpisodes} Episodes</span>
                  <span className="text-gray-400 font-normal">Updated Weekly</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Category Tabs */}
        <div className="overflow-x-auto pb-1">
          <Tabs
            tabs={categories}
            activeTab={selectedCategory}
            onChange={setSelectedCategory}
            variant="pills"
          />
        </div>

        {/* Episodes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredEpisodes.map((ep) => (
            <PodcastCard key={ep.id} episode={ep} />
          ))}
        </div>
      </div>
    </div>
  );
};
