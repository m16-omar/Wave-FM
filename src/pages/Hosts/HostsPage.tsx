import React from 'react';
import { PRESENTERS_DATA } from '../../data/hosts';
import { useAudio } from '../../context/AudioContext';
import { User, MoreVertical, Star } from 'lucide-react';
import confetti from 'canvas-confetti';

const HOSTED_SHOWS_PREVIEWS = [
  {
    id: 'hs-1',
    title: 'Hitmakers Live',
    tag: 'Interviews',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'hs-2',
    title: 'The Fan Zone',
    tag: 'Trends',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'hs-3',
    title: 'Throwback Jam',
    tag: 'Interviews',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
  },
];

export const HostsPage: React.FC = () => {
  const { playLiveStream } = useAudio();

  const handleJoinUs = () => {
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#F5B800', '#FFFFFF', '#000000'],
    });
  };

  return (
    <div className="w-full select-none space-y-12 sm:space-y-16 pb-16">
      {/* 1. Hero Page Title Banner with Repeating "radio hosts" Watermark (Screenshot 1) */}
      <div className="w-full bg-[#0C0D10] relative overflow-hidden border-b border-white/5 pt-12 pb-16 sm:pt-16 sm:pb-20">
        {/* Background Repeating Cursive Script Watermark "radio hosts" */}
        <div className="absolute inset-0 flex items-center justify-around pointer-events-none opacity-[0.05] overflow-hidden select-none">
          <span className="font-script text-7xl sm:text-[10rem] text-white rotate-[-12deg] whitespace-nowrap">
            radio hosts
          </span>
          <span className="font-script text-7xl sm:text-[10rem] text-white rotate-[-12deg] whitespace-nowrap hidden sm:inline">
            radio hosts
          </span>
          <span className="font-script text-7xl sm:text-[10rem] text-white rotate-[-12deg] whitespace-nowrap hidden md:inline">
            radio hosts
          </span>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
          {/* Top Title Row + SEE ALL TEAM Badge */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white uppercase font-display tracking-tight">
              TEAM MEMBERS
            </h1>
            <div>
              <span className="px-5 py-2 rounded-full bg-brand-yellow text-black text-xs font-black uppercase tracking-wider inline-block shadow-md">
                SEE ALL TEAM
              </span>
            </div>
          </div>

          {/* 2 Paired Cards: Yellow Box (Left) + 3 Presenters Photo (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            {/* Left Card: Yellow Box */}
            <div className="lg:col-span-5 bg-brand-yellow text-black rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl border border-brand-yellowHover space-y-4">
              <p className="text-xs sm:text-sm text-black/80 font-bold leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>

              <div>
                <button
                  onClick={handleJoinUs}
                  className="px-6 py-2.5 rounded-full bg-black text-white hover:bg-neutral-900 active:scale-95 font-black text-xs uppercase tracking-wider shadow-md transition-all cursor-pointer"
                >
                  JOIN US
                </button>
              </div>
            </div>

            {/* Right Card: 3 Presenters Photo with "Radio Hosts" Script */}
            <div className="lg:col-span-7 relative rounded-3xl overflow-hidden bg-neutral-900 shadow-2xl border border-white/10 aspect-[16/9] sm:aspect-[2.2/1] group flex items-end justify-end p-6">
              {/* Photo of 3 Presenters */}
              <img
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80"
                alt="Imole 106.3 FM Radio Hosts"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Floating Yellow Brush Script "Radio Hosts" */}
              <span className="font-marker text-brand-yellow text-3xl sm:text-4xl rotate-[-10deg] relative z-10 drop-shadow-[0_3px_6px_rgba(0,0,0,0.8)] pointer-events-none select-none">
                Radio
                <br />
                Hosts
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. "MEET OUR HOST STAR" (Founder Highlight - Screenshot 1) */}
      <section className="w-full px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center">
          {/* Left Card: Clean White Rounded Card */}
          <div className="md:col-span-5 bg-white rounded-[32px] p-8 sm:p-10 text-black shadow-2xl space-y-3">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-black uppercase font-display leading-tight">
              MEET OUR
              <br />
              HOST STAR
            </h2>

            <p className="text-xs sm:text-sm text-gray-700 font-semibold leading-relaxed">
              Meet Alex Rivera, the wonderful founder, and the reason for all the fun and games!
            </p>
          </div>

          {/* Right Card: Dark Photo Card of Alex Rivera */}
          <div className="md:col-span-7 bg-[#141416] rounded-[32px] overflow-hidden relative aspect-[16/10] sm:aspect-[16/9] shadow-2xl border border-white/10 group">
            <img
              src="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=1000&q=80"
              alt="Alex Rivera - Founder & Host Star"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-85"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* 3. "HOSTED SHOWS" Grid (Screenshot 1) */}
      <section className="w-full px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Header with Yellow Dashed Line */}
        <div className="flex items-center gap-2 mb-6">
          <span className="px-2.5 py-0.5 rounded bg-brand-yellow text-black text-[10px] font-black uppercase tracking-wider">
            HOSTED SHOWS
          </span>
          <div className="flex-1 border-b border-dashed border-brand-yellow/60" />
        </div>

        {/* 3-Column Show Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {HOSTED_SHOWS_PREVIEWS.map((show) => (
            <div
              key={show.id}
              onClick={() => playLiveStream()}
              className="relative rounded-2xl overflow-hidden bg-neutral-900 shadow-xl min-h-[220px] sm:min-h-[240px] flex flex-col justify-end p-5 border border-white/10 group cursor-pointer"
            >
              {/* Background Image */}
              <img
                src={show.image}
                alt={show.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              {/* Stylized Background Watermark */}
              <div className="absolute top-3 left-4 pointer-events-none opacity-20 select-none">
                <span className="font-black text-4xl tracking-tighter text-white uppercase font-display leading-none">
                  SHOW
                </span>
                <span className="block font-marker text-brand-yellow text-base -mt-1">
                  RADIO
                </span>
              </div>

              {/* Foreground Details */}
              <div className="relative z-10 space-y-1">
                <span className="px-2 py-0.5 rounded border border-brand-yellow text-brand-yellow text-[9px] font-black uppercase tracking-wider inline-block">
                  {show.tag}
                </span>

                <h4 className="text-base sm:text-lg font-black text-white uppercase font-display">
                  {show.title}
                </h4>

                <div className="flex justify-end pt-1">
                  <MoreVertical className="w-4 h-4 text-gray-400 group-hover:text-brand-yellow transition-colors" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. "THE START OF ALL" Story Section (Screenshot 2) */}
      <section className="w-full px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pt-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center">
          {/* Left Column: Portrait Photo of Smiling Woman in Beanie (5 Cols) */}
          <div className="md:col-span-5 rounded-[32px] overflow-hidden bg-neutral-900 shadow-2xl border border-white/10 aspect-[4/5] group">
            <img
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80"
              alt="The Start of All - Street Vibes"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Right Column: Clean White Story Card (7 Cols) */}
          <div className="md:col-span-7 bg-white rounded-[32px] p-8 sm:p-10 text-black shadow-2xl space-y-4">
            <h2 className="text-3xl sm:text-4xl font-black uppercase font-display tracking-tight text-black leading-none">
              THE START OF ALL
            </h2>

            <div className="space-y-3 text-xs sm:text-sm text-gray-700 font-medium leading-relaxed">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={handleJoinUs}
                className="px-6 py-2.5 rounded-full bg-black text-white hover:bg-neutral-900 active:scale-95 font-black text-xs uppercase tracking-wider shadow-md transition-all cursor-pointer"
              >
                MEET ALEX
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. "ALL PRESENTERS" Grid (Screenshot 2 & 3) */}
      <section className="w-full px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pt-6">
        {/* Yellow Header Banner */}
        <div className="w-full bg-brand-yellow text-black rounded-3xl p-6 sm:p-8 text-center mb-8 shadow-xl border border-brand-yellowHover">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase font-display tracking-tight leading-none">
            ALL PRESENTERS
          </h2>
        </div>

        {/* 3-Column Presenters Card Grid (6 Presenters) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {PRESENTERS_DATA.map((presenter) => (
            <div
              key={presenter.id}
              className="bg-[#141416] rounded-3xl overflow-hidden relative aspect-[4/5] shadow-2xl border border-white/10 group flex flex-col justify-end p-5 sm:p-6"
            >
              {/* Presenter Photo */}
              <img
                src={presenter.photo}
                alt={presenter.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />

              {/* Floating Top-Right User Circle Icon */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-lg">
                <User className="w-4 h-4 text-white" />
              </div>

              {/* Bottom Presenter Details */}
              <div className="relative z-10 text-center space-y-1.5">
                {/* Role Tag in Yellow Outline */}
                <div className="inline-block px-2.5 py-0.5 rounded border border-brand-yellow text-brand-yellow text-[9px] font-black uppercase tracking-wider bg-black/50 backdrop-blur-sm">
                  {presenter.roleTag}
                </div>

                {/* Name in Bold White Font */}
                <h3 className="text-lg sm:text-xl font-black text-white uppercase font-display tracking-tight drop-shadow-md">
                  {presenter.name}
                </h3>

                {/* 5 Yellow Rating Stars / Dots */}
                <div className="flex items-center justify-center gap-1 text-brand-yellow pt-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 text-brand-yellow fill-current" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
