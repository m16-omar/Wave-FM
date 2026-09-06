import React, { useState } from 'react';
import { MoreVertical, Play, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAudio } from '../../context/AudioContext';
import { DayOfWeek } from '../../types/schedule';
import { WEEKLY_SCHEDULE } from '../../data/schedule';
import { clsx } from 'clsx';

const SCHEDULE_DAYS: { id: DayOfWeek; label: string }[] = [
  { id: 'monday', label: 'Monday' },
  { id: 'tuesday', label: 'Tuesday' },
  { id: 'wednesday', label: 'Wednesday' },
  { id: 'thursday', label: 'Thursday' },
  { id: 'friday', label: 'Friday' },
  { id: 'saturday', label: 'Saturday' },
  { id: 'sunday', label: 'Sunday' },
];

export const WeeklySchedule: React.FC = () => {
  const dayIndexMap: DayOfWeek[] = [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
  ];
  const todayDay = dayIndexMap[new Date().getDay()] || 'monday';
  const [activeDay, setActiveDay] = useState<DayOfWeek>(todayDay);
  const { playLiveStream } = useAudio();

  const entries = WEEKLY_SCHEDULE[activeDay] || [];

  return (
    <section id="schedule" className="w-full py-6 sm:py-10 select-none scroll-mt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Dark Container Card */}
        <div className="bg-[#0B173D] rounded-[28px] sm:rounded-[32px] overflow-hidden border border-blue-900/40 shadow-2xl">
          {/* Day Navigation Tabs */}
          <div className="grid grid-cols-7 border-b border-white/10 text-center">
            {SCHEDULE_DAYS.map((d) => {
              const isActive = activeDay === d.id;
              const isToday = d.id === todayDay;
              return (
                <button
                  key={d.id}
                  onClick={() => setActiveDay(d.id)}
                  className={clsx(
                    'py-3 sm:py-4 text-[10px] sm:text-xs font-black uppercase tracking-wider transition-all cursor-pointer truncate px-1 relative',
                    isActive
                      ? 'bg-brand-yellow text-black font-black shadow-inner'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  )}
                >
                  <span>{d.label.slice(0, 3)}</span>
                  <span className="hidden md:inline">{d.label.slice(3)}</span>
                  {isToday && !isActive && (
                    <span className="block text-[8px] text-brand-yellow font-bold leading-none mt-0.5">
                      TODAY
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Schedule Show List Rows */}
          <div className="divide-y divide-white/5">
            {entries.length > 0 ? (
              entries.map((item) => (
                <div
                  key={item.id}
                  className="p-3.5 sm:p-4 flex items-center justify-between gap-3 sm:gap-4 hover:bg-white/[0.04] transition-colors group cursor-pointer"
                  onClick={() => playLiveStream()}
                >
                  {/* Left: Show Graphics Banner + Host Avatar */}
                  <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                    {/* Show Box with Vertical Yellow Label */}
                    <div className="relative w-20 sm:w-28 h-12 sm:h-14 rounded-lg overflow-hidden bg-[#060D24] shrink-0 border border-white/10 flex items-center">
                      <img
                        src={item.image}
                        alt={item.showTitle}
                        className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-300"
                      />
                      {/* Vertical Yellow "SHOW" badge */}
                      <div className="absolute left-0 top-0 bottom-0 w-5 bg-brand-yellow text-black flex items-center justify-center font-black text-[9px] uppercase tracking-tighter [writing-mode:vertical-lr] rotate-180">
                        SHOW
                      </div>
                      {/* Circular Host Avatar Overlay */}
                      <div className="absolute right-1.5 bottom-1 w-6 sm:w-7 h-6 sm:h-7 rounded-full overflow-hidden border-2 border-neutral-900 shadow-md">
                        <img
                          src={item.hostAvatar}
                          alt={item.hostName}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Show Title & Time */}
                    <div className="min-w-0">
                      <h4 className="font-black text-sm sm:text-base text-white truncate group-hover:text-brand-yellow transition-colors">
                        {item.showTitle}
                      </h4>
                      <p className="text-xs text-gray-400 font-mono mt-0.5 truncate flex items-center gap-1">
                        <Clock className="w-3 h-3 text-brand-yellow shrink-0" />
                        <span>{item.timeSlot}</span>
                      </p>
                    </div>
                  </div>

                  {/* Right: Category Tag Badge & Action Link */}
                  <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                    <span className="hidden sm:inline-block px-2.5 py-0.5 rounded border border-white/20 text-gray-300 text-[10px] sm:text-xs font-mono">
                      {item.category}
                    </span>

                    <Link
                      to={`/shows/${item.showSlug}`}
                      onClick={(e) => e.stopPropagation()}
                      className="p-1.5 text-gray-400 hover:text-brand-yellow transition-colors cursor-pointer"
                      title="Show Information"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-10 text-gray-400 text-xs font-medium">
                Non-stop hit music playlist broadcasting on this day.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
