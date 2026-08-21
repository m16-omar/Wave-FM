import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight, Radio } from 'lucide-react';
import { Badge } from '../ui/Badge';
import { useAudio } from '../../context/AudioContext';
import { clsx } from 'clsx';

interface ComingNextProps {
  className?: string;
}

export const ComingNext: React.FC<ComingNextProps> = ({ className }) => {
  const { comingNextShow } = useAudio();

  return (
    <div
      className={clsx(
        'relative rounded-3xl overflow-hidden bg-background-card border border-border p-6 sm:p-8 flex flex-col justify-between group shadow-card',
        className
      )}
    >
      <div className="absolute inset-0 z-0">
        <img
          src={comingNextShow.image}
          alt={comingNextShow.title}
          className="w-full h-full object-cover opacity-25 group-hover:scale-105 group-hover:opacity-30 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background-card via-background-card/90 to-background-card/60" />
      </div>

      <div className="relative z-10 flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-brand-yellow">
            COMING NEXT
          </span>
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-brand-yellow/15 text-brand-yellow font-bold">
            in {comingNextShow.startsIn}
          </span>
        </div>

        <Badge variant="cyan" size="sm">
          {comingNextShow.category}
        </Badge>
      </div>

      <div className="relative z-10 my-2">
        <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-2">
          <Clock className="w-3.5 h-3.5 text-brand-yellow" />
          <span>{comingNextShow.timeSlot}</span>
        </div>

        <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-brand-yellow transition-colors leading-snug mb-2">
          <Link to={`/shows/${comingNextShow.id}`}>
            {comingNextShow.title}
          </Link>
        </h3>

        <p className="text-xs sm:text-sm text-gray-300">
          Hosted by <span className="text-white font-bold">{comingNextShow.hostName}</span>
        </p>
      </div>

      <div className="relative z-10 pt-4 border-t border-border mt-4 flex items-center justify-between">
        <Link
          to={`/shows/${comingNextShow.id}`}
          className="text-xs font-bold uppercase tracking-wider text-brand-yellow group-hover:text-white flex items-center gap-1 transition-colors"
        >
          <span>Show Preview</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </Link>

        <Link
          to="/schedule"
          className="text-xs text-gray-400 hover:text-white transition-colors"
        >
          View Timetable
        </Link>
      </div>
    </div>
  );
};
