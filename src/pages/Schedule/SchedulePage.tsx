import React from 'react';
import { Schedule } from '../../components/radio/Schedule';
import { Calendar } from 'lucide-react';

export const SchedulePage: React.FC = () => {
  return (
    <div className="w-full py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header */}
        <div className="border-b border-border pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs text-brand-yellow font-extrabold uppercase tracking-widest mb-2">
              <Calendar className="w-4 h-4" />
              <span>Broadcast Program Guide</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              Weekly Radio Schedule
            </h1>
            <p className="text-sm md:text-base text-gray-400 mt-2 max-w-xl">
              All times are displayed in Eastern Standard Time (EST). Tune in live on 98.5 FM or our high-definition digital streams.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-xs text-brand-yellow font-bold bg-brand-yellow/10 px-3 py-1.5 rounded-lg border border-brand-yellow/20">
              <span className="w-2 h-2 rounded-full bg-brand-red animate-ping" />
              Live Feed Active
            </span>
          </div>
        </div>

        {/* Schedule Component */}
        <Schedule defaultDay="monday" />
      </div>
    </div>
  );
};
