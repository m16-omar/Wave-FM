import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Pause, Radio, Users, Clock, ArrowRight } from 'lucide-react';
import { Badge } from '../ui/Badge';
import { EqualizerVisualizer } from '../audio/EqualizerVisualizer';
import { useAudio } from '../../context/AudioContext';
import { clsx } from 'clsx';

interface OnAirProps {
  className?: string;
}

export const OnAir: React.FC<OnAirProps> = ({ className }) => {
  const { onAirShow, isPlaying, playLiveStream, togglePlay } = useAudio();

  return (
    <div
      className={clsx(
        'relative rounded-3xl overflow-hidden bg-background-card border border-border/80 shadow-2xl p-6 sm:p-8 lg:p-10 flex flex-col justify-between group',
        className
      )}
    >
      {/* Background Image with Dark Vignette Gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src={onAirShow.image}
          alt={onAirShow.title}
          className="w-full h-full object-cover opacity-35 group-hover:scale-105 group-hover:opacity-40 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background-card via-background-card/90 to-background-card/40" />
      </div>

      {/* Top Meta: Live Badge & Show Category */}
      <div className="relative z-10 flex items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <Badge variant="live" size="md" dot>
            ON AIR NOW
          </Badge>
          <span className="text-xs font-black uppercase tracking-widest text-brand-yellow">
            {onAirShow.category}
          </span>
        </div>

        <div className="flex items-center gap-2 text-xs text-gray-300 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
          <Users className="w-3.5 h-3.5 text-brand-cyan" />
          <span className="font-bold">{onAirShow.listeners.toLocaleString()} Live Listeners</span>
        </div>
      </div>

      {/* Center: Show Title, Presenters & Time */}
      <div className="relative z-10 my-4 sm:my-6">
        <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-gray-300 mb-2">
          <Clock className="w-4 h-4 text-brand-yellow" />
          <span>{onAirShow.timeSlot}</span>
        </div>

        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight group-hover:text-brand-yellow transition-colors mb-4">
          <Link to={`/shows/${onAirShow.id}`}>
            {onAirShow.title}
          </Link>
        </h1>

        <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-2xl line-clamp-3">
          {onAirShow.description}
        </p>

        {/* Presenter Avatars & Info */}
        <div className="flex items-center gap-3 mt-6">
          <img
            src={onAirShow.hostAvatar}
            alt={onAirShow.hostName}
            className="w-12 h-12 rounded-full object-cover border-2 border-brand-yellow shadow-glow-yellow/30"
          />
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block">
              Presented by
            </span>
            <span className="text-sm font-extrabold text-white">
              {onAirShow.hostName}
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Action: Big Listen Live Button & Equalizer */}
      <div className="relative z-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-6">
        <div className="flex items-center gap-4">
          <button
            onClick={() => (isPlaying ? togglePlay() : playLiveStream())}
            className="px-8 py-4 rounded-2xl bg-brand-yellow text-black font-black uppercase text-sm tracking-wider shadow-glow-yellow hover:bg-brand-yellowHover hover:scale-105 active:scale-95 transition-all flex items-center gap-3"
          >
            {isPlaying ? (
              <>
                <Pause className="w-5 h-5 fill-current" />
                <span>Pause Live Audio</span>
              </>
            ) : (
              <>
                <Play className="w-5 h-5 fill-current" />
                <span>Listen Live Now</span>
              </>
            )}
          </button>

          <Link
            to={`/shows/${onAirShow.id}`}
            className="px-5 py-4 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold uppercase text-xs tracking-wider transition-all hidden sm:inline-block"
          >
            Show Details
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <EqualizerVisualizer isPlaying={isPlaying} barCount={6} />
          <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">
            320kbps HD Audio
          </span>
        </div>
      </div>
    </div>
  );
};
