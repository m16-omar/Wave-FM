import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Clock, Ticket, ArrowRight } from 'lucide-react';
import { StationEvent } from '../../types/event';
import { Badge } from '../ui/Badge';
import { clsx } from 'clsx';

interface EventCardProps {
  event: StationEvent;
  className?: string;
  variant?: 'grid' | 'horizontal';
}

export const EventCard: React.FC<EventCardProps> = ({
  event,
  className,
  variant = 'grid',
}) => {
  return (
    <div
      className={clsx(
        'group bg-background-card border border-border rounded-2xl overflow-hidden transition-all duration-300 hover:border-brand-yellow/50 hover:-translate-y-1 shadow-card flex flex-col',
        className
      )}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-background-tertiary">
        <Link to={`/events/${event.slug}`}>
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </Link>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

        <div className="absolute top-3 left-3 z-10 flex items-center gap-2">
          <Badge variant="purple" size="sm">
            {event.category}
          </Badge>
        </div>

        <div className="absolute bottom-3 left-3 z-10">
          <span className="px-3 py-1.5 rounded-lg bg-black/80 backdrop-blur-md text-xs font-extrabold uppercase tracking-wider text-brand-yellow border border-white/10">
            {event.ticketPrice}
          </span>
        </div>
      </div>

      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 text-xs text-brand-yellow font-bold uppercase tracking-wider mb-2">
            <Calendar className="w-3.5 h-3.5" />
            <span>{event.date}</span>
            <span>•</span>
            <Clock className="w-3.5 h-3.5" />
            <span>{event.time}</span>
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-brand-yellow transition-colors leading-snug mb-2 line-clamp-2">
            <Link to={`/events/${event.slug}`}>
              {event.title}
            </Link>
          </h3>

          <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-3">
            <MapPin className="w-3.5 h-3.5 text-gray-400 shrink-0" />
            <span className="truncate">{event.venue}, {event.city}</span>
          </div>

          <p className="text-gray-400 text-xs sm:text-sm line-clamp-2 leading-relaxed mb-4">
            {event.description}
          </p>
        </div>

        <div className="pt-4 border-t border-border flex items-center justify-between">
          <Link
            to={`/events/${event.slug}`}
            className="text-xs font-bold uppercase tracking-wider text-brand-yellow hover:text-white flex items-center gap-1 transition-colors"
          >
            <span>Event Info</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>

          {event.ticketUrl && (
            <a
              href={event.ticketUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-brand-yellow hover:text-black text-xs font-extrabold uppercase tracking-wider text-white transition-all flex items-center gap-1.5"
            >
              <Ticket className="w-3.5 h-3.5" />
              <span>Tickets</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
