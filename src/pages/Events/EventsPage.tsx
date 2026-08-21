import React, { useState } from 'react';
import { EVENTS_DATA } from '../../data/events';
import { EventCard } from '../../components/cards/EventCard';
import { Tabs } from '../../components/ui/Tabs';
import type { TabItem } from '../../components/ui/Tabs';
import { Calendar } from 'lucide-react';

export const EventsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');

  const tabs: TabItem[] = [
    { id: 'upcoming', label: 'Upcoming Festivals & Concerts', count: EVENTS_DATA.filter(e => !e.isPast).length },
    { id: 'past', label: 'Past Events & Archives', count: EVENTS_DATA.filter(e => e.isPast).length },
  ];

  const filteredEvents = EVENTS_DATA.filter((e) => {
    return activeTab === 'upcoming' ? !e.isPast : e.isPast;
  });

  return (
    <div className="w-full py-8 md:py-12 space-y-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header */}
        <div className="border-b border-border pb-6">
          <div className="flex items-center gap-2 text-xs text-brand-yellow font-extrabold uppercase tracking-widest mb-2">
            <Calendar className="w-4 h-4" />
            <span>Station Calendar & Live Experiences</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            WAVE Live Events & Festivals
          </h1>
          <p className="text-sm md:text-base text-gray-400 mt-2 max-w-xl">
            Concerts, club nights, summer festivals and free live breakfast broadcasts powered by WAVE 98.5 FM.
          </p>
        </div>

        {/* Tab Toggle */}
        <div className="overflow-x-auto pb-1">
          <Tabs
            tabs={tabs}
            activeTab={activeTab}
            onChange={(id) => setActiveTab(id as 'upcoming' | 'past')}
            variant="pills"
          />
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
};
