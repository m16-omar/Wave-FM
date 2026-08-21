import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { RADIO_HOSTS } from '../../data/hosts';
import { SHOWS_DATA } from '../../data/shows';
import { ShowCard } from '../../components/cards/ShowCard';
import { SocialLinks } from '../../components/ui/SocialLinks';
import { Radio, Heart } from 'lucide-react';

export const HostDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const host = RADIO_HOSTS.find((h) => h.slug === slug || h.id === slug) || RADIO_HOSTS[0];
  const hostShows = SHOWS_DATA.filter((s) => s.hostName.includes(host.name) || s.hostId === host.id);

  return (
    <div className="w-full py-8 md:py-12 space-y-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <Link to="/" className="hover:text-brand-yellow">Home</Link>
          <span>/</span>
          <Link to="/hosts" className="hover:text-brand-yellow">Hosts</Link>
          <span>/</span>
          <span className="text-brand-yellow">{host.name}</span>
        </div>

        {/* Hero Card */}
        <div className="relative rounded-3xl overflow-hidden bg-background-card border border-border p-6 sm:p-10 lg:p-12 shadow-2xl">
          <div className="absolute inset-0 -z-10">
            <img
              src={host.bannerPhoto}
              alt={host.name}
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background-card via-background-card/90 to-background-card/40" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Host Portrait */}
            <div className="lg:col-span-4 aspect-[4/5] rounded-2xl overflow-hidden bg-background-tertiary border-2 border-brand-yellow shadow-glow-yellow/20">
              <img
                src={host.photo}
                alt={host.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Host Bio Info */}
            <div className="lg:col-span-8 space-y-5">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-widest text-brand-yellow block mb-1">
                  {host.role}
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                  {host.name}
                </h1>
              </div>

              <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl">
                {host.fullBio}
              </p>

              {/* Shows & Socials */}
              <div className="pt-4 border-t border-border flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <Radio className="w-4 h-4 text-brand-yellow" />
                  <span className="text-xs font-bold text-white">
                    Primary Show: {host.shows[0]?.title}
                  </span>
                </div>

                <SocialLinks size="sm" variant="pills" />
              </div>
            </div>
          </div>
        </div>

        {/* Host Curated Tracks / Favorites */}
        {host.favoriteTracks && host.favoriteTracks.length > 0 && (
          <div className="p-8 rounded-3xl bg-background-card border border-border space-y-4">
            <h3 className="text-xl font-extrabold text-white border-l-2 border-brand-yellow pl-3 flex items-center gap-2">
              <Heart className="w-4 h-4 text-brand-pink fill-current" />
              <span>{host.name}’s Top Favorite Rotations</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {host.favoriteTracks.map((track, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-background-secondary border border-border text-xs font-bold text-gray-300 flex items-center gap-3"
                >
                  <span className="w-6 h-6 rounded-full bg-brand-yellow/10 text-brand-yellow flex items-center justify-center font-mono">
                    0{i + 1}
                  </span>
                  <span>{track}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Shows Hosted by this DJ */}
        <div>
          <h3 className="text-2xl font-black text-white mb-6">
            Radio Shows Hosted by {host.name}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {hostShows.map((show) => (
              <ShowCard key={show.id} show={show} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
