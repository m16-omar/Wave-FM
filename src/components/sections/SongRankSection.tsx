import React from 'react';
import { Play, Pause, MoreHorizontal, Heart, Check } from 'lucide-react';
import { useAudio } from '../../context/AudioContext';
import confetti from 'canvas-confetti';

interface VoteCardSong {
  id: string;
  title: string;
  artist: string;
  coverArt: string;
  audioUrl: string;
  votes: number;
}

const VOTE_SONGS: VoteCardSong[] = [
  {
    id: 'vote-01',
    title: 'Who',
    artist: 'Jimin',
    coverArt: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    votes: 3840,
  },
  {
    id: 'vote-02',
    title: 'Back Outside',
    artist: 'Sleepy',
    coverArt: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    votes: 3410,
  },
  {
    id: 'vote-03',
    title: 'The Life',
    artist: 'SAINT JHN & Starrah',
    coverArt: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    votes: 2950,
  },
  {
    id: 'vote-04',
    title: "Don't Bother Us (feat. B...)",
    artist: 'Sweet Flower',
    coverArt: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
    votes: 2720,
  },
];

export const SongRankSection: React.FC = () => {
  const { isPlaying, currentTrack, playTrack, togglePlay, voteSong, votedSongIds } = useAudio();

  const handleVote = (e: React.MouseEvent, songId: string) => {
    e.stopPropagation();
    voteSong(songId);

    // Trigger celebratory confetti effect
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#F5B800', '#FFFFFF', '#FF4B4B'],
    });
  };

  return (
    <section className="w-full py-12 sm:py-16 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Row: Title + Last Played Song Widget */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          {/* Left Title */}
          <div className="max-w-xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-yellow tracking-tight uppercase font-display">
              SONG RANK
            </h2>
            <p className="mt-2 text-sm sm:text-base text-gray-400 font-medium">
              Vote for your favorite records to climb this week's official airplay chart. Direct listener power on Imole 106.3 FM.
            </p>
          </div>

          {/* Right: Last Played Song Pill Card */}
          <div className="relative self-start md:self-auto">
            <div className="bg-brand-yellow text-black rounded-3xl p-3 sm:p-4 flex items-center gap-3 sm:gap-4 shadow-xl border border-brand-yellowHover">
              {/* Album Thumbnail */}
              <div className="w-12 h-12 rounded-xl overflow-hidden bg-black/10 shrink-0 border border-black/10">
                <img
                  src="https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=400&q=80"
                  alt="Better - Square a Saw"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Info */}
              <div className="min-w-0 pr-2">
                <h4 className="font-black text-sm text-black leading-tight truncate">Better</h4>
                <p className="text-xs font-semibold text-black/80 truncate">Square a Saw</p>
              </div>

              {/* Time & Play */}
              <div className="flex items-center gap-2 pl-2 border-l border-black/10 text-xs font-bold text-black">
                <span className="font-mono">13:59</span>
                <button
                  onClick={() => {
                    playTrack({
                      id: 'last-played-better',
                      title: 'Better',
                      artist: 'Square a Saw',
                      album: 'Summer Drive',
                      coverArt: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=400&q=80',
                      duration: 215,
                      previewAudioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
                      votes: 1200,
                      genre: 'Dance / House',
                    });
                  }}
                  className="w-7 h-7 rounded-full bg-black text-brand-yellow flex items-center justify-center hover:scale-105 active:scale-95 transition-transform cursor-pointer"
                  title="Play Track"
                >
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </button>
              </div>
            </div>

            {/* Handwritten "Last played song" script overlay */}
            <span className="font-marker text-white text-xl sm:text-2xl absolute -bottom-7 right-2 rotate-[-8deg] drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] pointer-events-none whitespace-nowrap">
              Last played song
            </span>
          </div>
        </div>

        {/* White Rounded Card Container from Screenshot 1 & 2 */}
        <div className="bg-white rounded-[32px] p-6 sm:p-8 md:p-10 shadow-2xl text-black">
          {/* Top Badge + Dotted Line */}
          <div className="flex items-center gap-4 pb-6">
            <span className="px-4 py-1.5 rounded-full bg-black text-white text-[11px] sm:text-xs font-black uppercase tracking-wider shrink-0 shadow-md">
              VOTE YOUR FAV SONG
            </span>
            <div className="flex-1 border-b border-dashed border-gray-300" />
          </div>

          {/* 4 Dark Voting Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {VOTE_SONGS.map((song) => {
              const isThisPlaying = isPlaying && currentTrack.title === song.title;
              const voted = votedSongIds.includes(song.id);

              return (
                <div
                  key={song.id}
                  className="bg-[#141416] text-white rounded-2xl p-3.5 flex flex-col justify-between group hover:shadow-xl transition-all duration-300 border border-neutral-800"
                >
                  {/* Album Cover Art with Play Button Hover */}
                  <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-neutral-900 mb-3.5">
                    <img
                      src={song.coverArt}
                      alt={song.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Play/Pause Overlay Button */}
                    <button
                      onClick={() => {
                        if (isThisPlaying) {
                          togglePlay();
                        } else {
                          playTrack({
                            id: song.id,
                            title: song.title,
                            artist: song.artist,
                            album: 'Chart Nominee',
                            coverArt: song.coverArt,
                            duration: 210,
                            previewAudioUrl: song.audioUrl,
                            votes: song.votes,
                            genre: 'Hit Music',
                          });
                        }
                      }}
                      className="absolute inset-0 bg-black/40 hover:bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                      title={isThisPlaying ? 'Pause' : 'Preview Song'}
                    >
                      <div className="w-12 h-12 rounded-full bg-brand-yellow text-black flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-transform">
                        {isThisPlaying ? (
                          <Pause className="w-5 h-5 fill-current" />
                        ) : (
                          <Play className="w-5 h-5 fill-current ml-0.5" />
                        )}
                      </div>
                    </button>
                  </div>

                  {/* Title & Artist */}
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0 flex-1">
                      <h4 className="font-extrabold text-sm text-white truncate group-hover:text-brand-yellow transition-colors">
                        {song.title}
                      </h4>
                      <p className="text-xs text-gray-400 font-medium truncate mt-0.5">
                        {song.artist}
                      </p>
                    </div>

                    {/* Vote / Action Button */}
                    <button
                      onClick={(e) => handleVote(e, song.id)}
                      className={`p-2 rounded-xl transition-all cursor-pointer ${
                        voted
                          ? 'bg-brand-yellow text-black'
                          : 'bg-white/10 hover:bg-brand-yellow hover:text-black text-gray-300'
                      }`}
                      title={voted ? 'Voted!' : 'Vote for song'}
                    >
                      {voted ? (
                        <Check className="w-4 h-4 stroke-[3]" />
                      ) : (
                        <MoreHorizontal className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
