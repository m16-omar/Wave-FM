import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { StationLogo } from '../ui/StationLogo';
import { SocialLinks } from '../ui/SocialLinks';
import { STATION_INFO } from '../../data/station';
import { MobileMenu } from './MobileMenu';
import { SearchOverlay } from './SearchOverlay';
import { StreamSelectorModal } from '../audio/StreamSelectorModal';
import { Search, Play, Pause, Volume2, Menu, Radio, Disc, Sparkles, Music2, Mic2 } from 'lucide-react';
import { useAudio } from '../../context/AudioContext';
import { clsx } from 'clsx';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isStreamModalOpen, setIsStreamModalOpen] = useState(false);

  const { isPlaying, togglePlay, toggleMute, playLiveStream } = useAudio();

  return (
    <>
      {/* Top Purple Accent Line (Pixel-matched to reference top border) */}
      <div className="w-full h-[3px] bg-[#532688] z-50 relative" />

      {/* Main White Navbar */}
      <header className="w-full bg-white text-black sticky top-0 z-40 shadow-[0_1px_3px_rgba(0,0,0,0.04)] border-b border-gray-100 select-none">
        <div className="w-full px-4 sm:px-6 lg:px-8 h-15 flex items-center justify-between gap-4">
          
          {/* Left Container: 4 Golden Yellow Circular Action Buttons + Navigation Items */}
          <div className="flex items-center gap-5 sm:gap-6 lg:gap-7 min-w-0">
            
            {/* 4 Golden Yellow Circular Action Buttons */}
            <div className="flex items-center gap-2 shrink-0">
              {/* 1. Search */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="w-8 h-8 rounded-full bg-brand-yellow hover:bg-brand-yellowHover active:scale-95 text-black flex items-center justify-center transition-all shadow-xs cursor-pointer"
                title="Search Station"
                aria-label="Search"
              >
                <Search className="w-3.5 h-3.5 stroke-[2.5]" />
              </button>

              {/* 2. Equalizer / Menu Bars (=) */}
              <button
                onClick={toggleMute}
                className="w-8 h-8 rounded-full bg-brand-yellow hover:bg-brand-yellowHover active:scale-95 text-black flex items-center justify-center transition-all shadow-xs cursor-pointer"
                title="Mute / Audio Toggle"
                aria-label="Equalizer"
              >
                <div className="flex flex-col gap-[3.5px] w-3.5 items-center justify-center">
                  <span className="h-[2px] w-full bg-black rounded-full" />
                  <span className="h-[2px] w-full bg-black rounded-full" />
                </div>
              </button>

              {/* 3. Play / Pause Action */}
              <button
                onClick={togglePlay}
                className="w-8 h-8 rounded-full bg-brand-yellow hover:bg-brand-yellowHover active:scale-95 text-black flex items-center justify-center transition-all shadow-xs cursor-pointer"
                title={isPlaying ? 'Pause Broadcast' : 'Play Live Broadcast'}
                aria-label="Toggle Play"
              >
                {isPlaying ? (
                  <Pause className="w-3.5 h-3.5 fill-black stroke-black" />
                ) : (
                  <Play className="w-3.5 h-3.5 fill-black stroke-black ml-0.5" />
                )}
              </button>

              {/* 4. Speaker / Audio Channels */}
              <button
                onClick={() => setIsStreamModalOpen(true)}
                className="w-8 h-8 rounded-full bg-brand-yellow hover:bg-brand-yellowHover active:scale-95 text-black flex items-center justify-center transition-all shadow-xs cursor-pointer"
                title="Select Audio Stream Channel"
                aria-label="Channels"
              >
                <Volume2 className="w-3.5 h-3.5 stroke-[2.5]" />
              </button>
            </div>

            {/* Desktop Navigation Links (HOME, BLOG, CHARTS, RADIO SHOWS, PODCASTS, HOSTS, CONTACT →) */}
            <nav className="hidden lg:flex items-center gap-5 xl:gap-6 text-[11px] xl:text-xs font-black uppercase tracking-wider text-black">
              
              {/* 1. HOME */}
              <NavLink
                to="/"
                className={({ isActive }) =>
                  clsx(
                    'transition-colors py-2',
                    isActive ? 'text-brand-yellowDark' : 'hover:text-brand-yellowDark'
                  )
                }
              >
                HOME
              </NavLink>

              {/* 2. BLOG (Plain direct link) */}
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  clsx(
                    'transition-colors py-2',
                    isActive ? 'text-brand-yellowDark' : 'hover:text-brand-yellowDark'
                  )
                }
              >
                BLOG
              </NavLink>

              {/* 3. CHARTS */}
              <NavLink
                to="/charts"
                className={({ isActive }) =>
                  clsx(
                    'transition-colors py-2',
                    isActive ? 'text-brand-yellowDark' : 'hover:text-brand-yellowDark'
                  )
                }
              >
                CHARTS
              </NavLink>

              {/* 4. RADIO SHOWS */}
              <NavLink
                to="/shows"
                className={({ isActive }) =>
                  clsx(
                    'transition-colors py-2',
                    isActive ? 'text-brand-yellowDark' : 'hover:text-brand-yellowDark'
                  )
                }
              >
                RADIO SHOWS
              </NavLink>

              {/* 5. PODCASTS */}
              <NavLink
                to="/podcasts"
                className={({ isActive }) =>
                  clsx(
                    'transition-colors py-2',
                    isActive ? 'text-brand-yellowDark' : 'hover:text-brand-yellowDark'
                  )
                }
              >
                PODCASTS
              </NavLink>

              {/* 6. HOSTS */}
              <NavLink
                to="/hosts"
                className={({ isActive }) =>
                  clsx(
                    'transition-colors py-2',
                    isActive ? 'text-brand-yellowDark' : 'hover:text-brand-yellowDark'
                  )
                }
              >
                HOSTS
              </NavLink>

              {/* 7. CONTACT (Plain direct link) */}
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  clsx(
                    'transition-colors py-2',
                    isActive ? 'text-brand-yellowDark' : 'hover:text-brand-yellowDark'
                  )
                }
              >
                CONTACT
              </NavLink>
            </nav>
          </div>

          {/* Right: Social Media Handles + Station Logo + Mobile Hamburger */}
          <div className="flex items-center gap-2.5 sm:gap-3.5 lg:gap-4 shrink-0">
            {/* Social Media Handles Icons (Before Logo) */}
            <div className="hidden sm:flex items-center">
              <SocialLinks size="xs" variant="navbar" />
            </div>

            <StationLogo variant="light" size="sm" asLink={true} />

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 rounded-lg text-black hover:bg-gray-100 lg:hidden transition-colors cursor-pointer"
              aria-label="Open Navigation Menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Search Modal */}
      <SearchOverlay
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />

      {/* Audio Streams Modal */}
      <StreamSelectorModal
        isOpen={isStreamModalOpen}
        onClose={() => setIsStreamModalOpen(false)}
      />
    </>
  );
};

