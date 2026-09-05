import React, { useState } from 'react';
import { MoreVertical } from 'lucide-react';
import { useAudio } from '../../context/AudioContext';
import { DayOfWeek } from '../../types/schedule';
import { clsx } from 'clsx';

interface ScheduleEntry {
  id: string;
  title: string;
  time: string;
  tag: 'music' | 'interview' | 'throwback' | 'talk';
  hostName: string;
  hostAvatar: string;
  bgImage: string;
}

const SCHEDULE_DAYS: DayOfWeek[] = [
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
  'sunday',
];

const DEFAULT_SHOWS: ScheduleEntry[] = [
  {
    id: 'sch-01',
    title: 'Top 10 Countdown',
    time: '10:00 am – 11:30 am',
    tag: 'music',
    hostName: 'Marcus Vance',
    hostAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    bgImage: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'sch-02',
    title: 'Urban Pulse',
    time: '11:30 am – 01:00 pm',
    tag: 'interview',
    hostName: 'Elena Rostova',
    hostAvatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
    bgImage: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'sch-03',
    title: 'After Hours Mix',
    time: '01:00 pm – 03:15 pm',
    tag: 'music',
    hostName: 'Ryan Taylor',
    hostAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    bgImage: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'sch-04',
    title: 'Throwback Jam',
    time: '03:15 pm – 05:00 pm',
    tag: 'throwback',
    hostName: 'DJ K-Slide',
    hostAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    bgImage: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'sch-05',
    title: 'The Fan Zone',
    time: '05:00 pm – 06:45 pm',
    tag: 'talk',
    hostName: 'Dave Sparks',
    hostAvatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=200&q=80',
    bgImage: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'sch-06',
    title: 'Hitmakers Live',
    time: '06:45 pm – 08:30 pm',
    tag: 'interview',
    hostName: 'Nia Cole',
    hostAvatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80',
    bgImage: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=400&q=80',
  },
];

const SCHEDULE_DATA: Record<DayOfWeek, ScheduleEntry[]> = {
  monday: DEFAULT_SHOWS,
  tuesday: DEFAULT_SHOWS,
  wednesday: DEFAULT_SHOWS,
  thursday: DEFAULT_SHOWS,
  friday: DEFAULT_SHOWS,
  saturday: DEFAULT_SHOWS,
  sunday: DEFAULT_SHOWS,
};

export const WeeklySchedule: React.FC = () => {
  const [activeDay, setActiveDay] = useState<DayOfWeek>('thursday');
  const { playLiveStream } = useAudio();

  const entries = SCHEDULE_DATA[activeDay] || DEFAULT_SHOWS;

  return (
    <section id="schedule" className="w-full py-6 sm:py-10 select-none scroll-mt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Dark Container Card */}
        <div className="bg-[#141416] rounded-[28px] sm:rounded-[32px] overflow-hidden border border-white/10 shadow-2xl">
          {/* Day Navigation Tabs */}
          <div className="grid grid-cols-7 border-b border-white/10 text-center">
            {SCHEDULE_DAYS.map((day) => {
              const isActive = activeDay === day;
              return (
                <button
                  key={day}
                  onClick={() => setActiveDay(day)}
                  className={clsx(
                    'py-3 sm:py-4 text-[10px] sm:text-xs font-black uppercase tracking-wider transition-all cursor-pointer truncate px-1',
                    isActive
                      ? 'bg-brand-yellow text-black font-black shadow-inner'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  )}
                >
                  {day}
                </button>
              );
            })}
          </div>

          {/* Schedule Show List Rows */}
          <div className="divide-y divide-white/5">
            {entries.map((item) => (
              <div
                key={item.id}
                className="p-3 sm:p-4 flex items-center justify-between gap-3 sm:gap-4 hover:bg-white/[0.03] transition-colors group cursor-pointer"
                onClick={() => playLiveStream()}
              >
                {/* Left: Show Graphics Banner + Host Avatar */}
                <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                  {/* Show Box with Vertical Yellow Label */}
                  <div className="relative w-20 sm:w-28 h-12 sm:h-14 rounded-lg overflow-hidden bg-neutral-900 shrink-0 border border-white/10 flex items-center">
                    <img
                      src={item.bgImage}
                      alt={item.title}
                      className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-300"
                    />
                    {/* Vertical Yellow "SHOW" badge */}
                    <div className="absolute left-0 top-0 bottom-0 w-5 bg-brand-yellow text-black flex items-center justify-center font-black text-[9px] uppercase tracking-tighter [writing-mode:vertical-lr] rotate-180">
                      SHOW
                    </div>
                    {/* Circular Host Avatar Overlay */}
                    <div className="absolute right-2 bottom-1.5 w-7 sm:w-8 h-7 sm:h-8 rounded-full overflow-hidden border-2 border-neutral-900 shadow-md">
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
                      {item.title}
                    </h4>
                    <p className="text-xs text-gray-400 font-mono mt-0.5 truncate">
                      {item.time}
                    </p>
                  </div>
                </div>

                {/* Right: Category Tag Badge & Options */}
                <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                  <span className="px-2.5 py-0.5 rounded border border-white/20 text-gray-300 text-[10px] sm:text-xs font-mono lowercase">
                    {item.tag}
                  </span>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      playLiveStream();
                    }}
                    className="p-1.5 text-gray-400 hover:text-brand-yellow transition-colors cursor-pointer"
                    title="Play Show Stream"
                  >
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
