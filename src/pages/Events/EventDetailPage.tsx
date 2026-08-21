import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { EVENTS_DATA } from '../../data/events';
import { EventCard } from '../../components/cards/EventCard';
import { Badge } from '../../components/ui/Badge';
import { Calendar, MapPin, Ticket } from 'lucide-react';

export const EventDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const event = EVENTS_DATA.find((e) => e.slug === slug || e.id === slug) || EVENTS_DATA[0];
  const otherEvents = EVENTS_DATA.filter((e) => e.id !== event.id).slice(0, 3);

  return (
    <div className="w-full py-8 md:py-12 space-y-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <Link to="/" className="hover:text-brand-yellow">Home</Link>
          <span>/</span>
          <Link to="/events" className="hover:text-brand-yellow">Events</Link>
          <span>/</span>
          <span className="text-brand-yellow truncate max-w-xs">{event.title}</span>
        </div>

        {/* Hero Event Card */}
        <div className="relative rounded-3xl overflow-hidden bg-background-card border border-border p-6 sm:p-10 lg:p-12 shadow-2xl">
          <div className="absolute inset-0 -z-10">
            <img
              src={event.bannerImage}
              alt={event.title}
              className="w-full h-full object-cover opacity-25"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background-card via-background-card/90 to-background-card/40" />
          </div>

          <div className="max-w-4xl space-y-5">
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="purple" size="md">
                {event.category}
              </Badge>
              <span className="px-3 py-1 rounded-lg bg-black/60 text-brand-yellow text-xs font-extrabold uppercase tracking-wider border border-white/10">
                {event.ticketPrice}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              {event.title}
            </h1>

            <p className="text-base sm:text-lg text-gray-300">
              {event.subtitle}
            </p>

            {/* Quick Meta Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-border text-xs sm:text-sm text-gray-300">
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-brand-yellow shrink-0" />
                <div>
                  <span className="text-[10px] text-gray-400 uppercase block">Date & Time</span>
                  <span className="font-bold text-white">{event.date} • {event.time}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-brand-yellow shrink-0" />
                <div>
                  <span className="text-[10px] text-gray-400 uppercase block">Venue & City</span>
                  <span className="font-bold text-white">{event.venue}, {event.city}</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              {event.ticketUrl && (
                <a
                  href={event.ticketUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-2xl bg-brand-yellow text-black font-black uppercase text-xs sm:text-sm tracking-wider shadow-glow-yellow hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
                >
                  <Ticket className="w-4 h-4" />
                  <span>Reserve / Buy Tickets</span>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Lineup & Event Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Info */}
          <div className="lg:col-span-8 p-8 rounded-3xl bg-background-card border border-border space-y-6">
            <h3 className="text-2xl font-black text-white border-l-2 border-brand-yellow pl-3">
              Event Details & Experience
            </h3>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              {event.description}
            </p>

            {event.lineup && event.lineup.length > 0 && (
              <div className="pt-4 border-t border-border">
                <h4 className="text-base font-extrabold text-white mb-4">
                  Artist & DJ Lineup
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  {event.lineup.map((artist) => (
                    <span
                      key={artist}
                      className="px-3.5 py-1.5 rounded-xl bg-background-secondary border border-border text-xs font-bold text-brand-yellow"
                    >
                      ★ {artist}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar Venue Box */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-3xl bg-background-card border border-border space-y-4">
              <h4 className="text-sm font-extrabold uppercase tracking-wider text-white border-l-2 border-brand-yellow pl-3">
                Venue Location
              </h4>
              <p className="text-xs text-gray-300">
                <strong>{event.venue}</strong><br />
                {event.address}<br />
                {event.city}
              </p>

              {/* Map Placeholder */}
              <div className="aspect-video w-full rounded-xl overflow-hidden bg-background-secondary border border-border flex items-center justify-center text-gray-500 text-xs">
                <MapPin className="w-5 h-5 text-brand-yellow mr-1" />
                <span>Interactive Map Guide</span>
              </div>
            </div>
          </div>
        </div>

        {/* Other Events */}
        <div className="pt-8 border-t border-border">
          <h3 className="text-2xl font-black text-white mb-6">
            More Live Events
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {otherEvents.map((evt) => (
              <EventCard key={evt.id} event={evt} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
