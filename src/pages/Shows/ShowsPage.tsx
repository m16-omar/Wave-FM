import React, { useState } from 'react';
import { SHOWS_DATA } from '../../data/shows';
import { ShowCard } from '../../components/cards/ShowCard';
import { Tabs } from '../../components/ui/Tabs';
import type { TabItem } from '../../components/ui/Tabs';
import { Radio, Search } from 'lucide-react';

export const ShowsPage: React.FC = () => {
  const [selectedGenre, setSelectedGenre] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const genres: TabItem[] = [
    { id: 'all', label: 'All Shows', count: SHOWS_DATA.length },
    { id: 'Top 40', label: 'Top 40 & Hits' },
    { id: 'Hip-Hop', label: 'Hip-Hop & Urban' },
    { id: 'Dance', label: 'Dance & Club' },
    { id: 'Melodic House', label: 'Electronic & Techno' },
    { id: 'Classics & Throwbacks', label: 'Classics' },
  ];

  const filteredShows = SHOWS_DATA.filter((show) => {
    const matchesGenre =
      selectedGenre === 'all' ||
      show.genres.includes(selectedGenre) ||
      show.category.includes(selectedGenre);

    const matchesSearch =
      show.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      show.hostName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      show.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesGenre && matchesSearch;
  });

  return (
    <div className="w-full py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Page Title & Search */}
        <div className="border-b border-border pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs text-brand-yellow font-extrabold uppercase tracking-widest mb-2">
              <Radio className="w-4 h-4" />
              <span>Broadcast Directory</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              Radio Shows & Programs
            </h1>
            <p className="text-sm md:text-base text-gray-400 mt-2 max-w-xl">
              From morning talk to late-night underground club sessions, discover the airwave lineup on WAVE 98.5 FM.
            </p>
          </div>

          <div className="relative w-full md:w-72">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter shows by name or DJ..."
              className="w-full pl-10 pr-4 py-2.5 bg-background-card border border-border rounded-xl text-white placeholder-gray-500 text-xs focus:outline-none focus:border-brand-yellow"
            />
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          </div>
        </div>

        {/* Genre Tabs */}
        <div className="overflow-x-auto pb-1">
          <Tabs
            tabs={genres}
            activeTab={selectedGenre}
            onChange={setSelectedGenre}
            variant="pills"
          />
        </div>

        {/* Shows Grid */}
        {filteredShows.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredShows.map((show) => (
              <ShowCard key={show.id} show={show} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-background-card rounded-2xl border border-border">
            <p className="text-gray-300 font-bold">No shows found.</p>
            <button
              onClick={() => {
                setSelectedGenre('all');
                setSearchQuery('');
              }}
              className="mt-3 text-xs text-brand-yellow hover:underline font-bold"
            >
              Reset filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
