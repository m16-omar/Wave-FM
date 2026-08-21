import React from 'react';
import { Link } from 'react-router-dom';
import { Radio, ArrowRight } from 'lucide-react';
import type { RadioHost } from '../../types/host';
import { clsx } from 'clsx';

interface PresenterCardProps {
  host: RadioHost;
  className?: string;
}

export const PresenterCard: React.FC<PresenterCardProps> = ({
  host,
  className,
}) => {
  return (
    <div
      className={clsx(
        'group bg-background-card border border-border rounded-2xl overflow-hidden transition-all duration-300 hover:border-brand-yellow/40 hover:-translate-y-1 shadow-card flex flex-col',
        className
      )}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-background-tertiary">
        <Link to={`/hosts/${host.slug}`}>
          <img
            src={host.photo}
            alt={host.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </Link>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />

        <div className="absolute bottom-4 left-4 right-4 z-10">
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-brand-yellow block mb-1">
            {host.role}
          </span>
          <h3 className="text-xl font-extrabold text-white group-hover:text-brand-yellow transition-colors leading-tight">
            <Link to={`/hosts/${host.slug}`}>
              {host.name}
            </Link>
          </h3>
        </div>
      </div>

      <div className="p-5 flex-1 flex flex-col justify-between">
        <p className="text-gray-400 text-xs sm:text-sm line-clamp-2 leading-relaxed mb-4">
          {host.bio}
        </p>

        <div className="pt-3 border-t border-border flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-xs text-gray-300">
            <Radio className="w-3.5 h-3.5 text-brand-yellow" />
            <span className="truncate max-w-[140px]">{host.shows[0]?.title}</span>
          </div>

          <Link
            to={`/hosts/${host.slug}`}
            className="p-2 rounded-lg bg-white/5 hover:bg-brand-yellow hover:text-black text-gray-300 transition-all"
            aria-label="View DJ Profile"
          >
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
