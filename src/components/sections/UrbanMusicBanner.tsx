import React from 'react';
import { Play, Heart } from 'lucide-react';
import { useAudio } from '../../context/AudioContext';

export const UrbanMusicBanner: React.FC = () => {
  const { playTrack } = useAudio();

  return (
    <section className="w-full my-8 sm:my-14 select-none overflow-hidden">
      <div className="w-full bg-neutral-900 border-y border-white/10 relative">
        <div className="grid grid-cols-1 md:grid-cols-12 min-h-[320px] sm:min-h-[360px]">
          {/* Left Block (4 Cols): Grayscale Performance Photo */}
          <div className="md:col-span-4 relative overflow-hidden bg-black">
            <img
              src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80"
              alt="Artists Live Session"
              className="w-full h-full object-cover grayscale contrast-125 opacity-75"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent md:to-black/30" />
          </div>

          {/* Center Block (4 Cols): Yellow Block with Script & Latest Songs */}
          <div className="md:col-span-4 bg-brand-yellow text-black p-6 sm:p-8 flex flex-col justify-between relative z-10">
            {/* Hand-drawn Brush Script Header */}
            <div>
              <span className="font-marker text-3xl sm:text-4xl lg:text-5xl text-black block leading-none drop-shadow-sm">
                The Best
              </span>
              <span className="font-marker text-2xl sm:text-3xl lg:text-4xl text-black/90 block leading-tight mt-1">
                urban music
              </span>
            </div>

            {/* "LATEST SONGS" Mini Player Pill Container */}
            <div className="mt-4 bg-black text-white rounded-2xl p-3 sm:p-4 shadow-xl border border-white/10 space-y-2.5">
              <div className="text-[10px] font-black uppercase tracking-widest text-brand-yellow">
                LATEST SONGS
              </div>

              {/* Song 1 */}
              <div
                onClick={() => {
                  playTrack({
                    id: 'banner-better',
                    title: 'Better',
                    artist: 'Square a Saw',
                    album: 'Vibes',
                    coverArt: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=300&q=80',
                    duration: 210,
                    previewAudioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
                    votes: 1400,
                    genre: 'Urban',
                  });
                }}
                className="flex items-center justify-between gap-3 p-1.5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer group"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-8 h-8 rounded-lg overflow-hidden shrink-0 bg-neutral-800">
                    <img
                      src="https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=300&q=80"
                      alt="Better"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-extrabold text-white truncate group-hover:text-brand-yellow">Better</div>
                    <div className="text-[10px] text-gray-400 truncate">Square a Saw</div>
                  </div>
                </div>
                <Play className="w-3.5 h-3.5 text-gray-400 group-hover:text-brand-yellow shrink-0 fill-current" />
              </div>

              {/* Song 2 */}
              <div
                onClick={() => {
                  playTrack({
                    id: 'banner-love-too-serious',
                    title: 'Love Too Serious',
                    artist: 'Lily Wolf',
                    album: 'Late Night Talks',
                    coverArt: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
                    duration: 240,
                    previewAudioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
                    votes: 1180,
                    genre: 'Pop / RnB',
                  });
                }}
                className="flex items-center justify-between gap-3 p-1.5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer group"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-8 h-8 rounded-lg overflow-hidden shrink-0 bg-neutral-800">
                    <img
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
                      alt="Love Too Serious"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-extrabold text-white truncate group-hover:text-brand-yellow">Love Too Serious</div>
                    <div className="text-[10px] text-gray-400 truncate">Lily Wolf</div>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-[10px] font-mono text-gray-400">
                  <span>13:32</span>
                  <Heart className="w-3 h-3 text-red-500 fill-current" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Block (4 Cols): Coral/Red with Guy in Orange Tee & Vertical WAVE98 Branding */}
          <div className="md:col-span-4 bg-[#E05A47] relative overflow-hidden flex items-center justify-between">
            {/* Guy in Orange Shirt Image */}
            <img
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80"
              alt="Urban Culture Presenter"
              className="absolute inset-0 w-full h-full object-cover object-top mix-blend-luminosity opacity-85"
            />
            <div className="absolute inset-0 bg-[#E05A47]/40" />

            {/* Giant Vertical Typography on Far Right */}
            <div className="relative z-10 ml-auto h-full flex flex-col items-center justify-center pr-4 sm:pr-6 select-none">
              <span className="font-marker text-brand-yellow text-2xl sm:text-3xl [writing-mode:vertical-rl] rotate-180 drop-shadow-md leading-none">
                RADIO
              </span>
              <span className="font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tighter uppercase font-display [writing-mode:vertical-rl] rotate-180 leading-none">
                WAVE 98
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
