import React from 'react';
import { RADIO_HOSTS } from '../../data/hosts';
import { PresenterCard } from '../../components/cards/PresenterCard';
import { Mic2 } from 'lucide-react';

export const HostsPage: React.FC = () => {
  return (
    <div className="w-full py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header */}
        <div className="border-b border-border pb-6">
          <div className="flex items-center gap-2 text-xs text-brand-yellow font-extrabold uppercase tracking-widest mb-2">
            <Mic2 className="w-4 h-4" />
            <span>On-Air Talent & Personalities</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            WAVE FM DJs & Presenters
          </h1>
          <p className="text-sm md:text-base text-gray-400 mt-2 max-w-xl">
            Meet the iconic voices, turntablists, comedians, and tastemakers who curate your daily soundtrack.
          </p>
        </div>

        {/* Hosts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {RADIO_HOSTS.map((host) => (
            <PresenterCard key={host.id} host={host} />
          ))}
        </div>
      </div>
    </div>
  );
};
