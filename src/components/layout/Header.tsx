import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { StationLogo } from '../ui/StationLogo';
import { MobileMenu } from './MobileMenu';
import { SearchOverlay } from './SearchOverlay';
import { StreamSelectorModal } from '../audio/StreamSelectorModal';
import { Search, Play, Pause, Volume2, Menu, ArrowRight } from 'lucide-react';
import { useAudio } from '../../context/AudioContext';
import { clsx } from 'clsx';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isStreamModalOpen, setIsStreamModalOpen] = useState(false);
  const [isDemosDropdownOpen, setIsDemosDropdownOpen] = useState(false);
  const [isMoreDropdownOpen, setIsMoreDropdownOpen] = useState(false);

  const { isPlaying, togglePlay, toggleMute } = useAudio();

  return (
    <>
      <header className="w-full bg-white text-black sticky top-0 z-40 shadow-sm border-b border-gray-100 select-none">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          {/* Left Container: 4 Yellow Circular Buttons + Navigation Items */}
          <div className="flex items-center gap-5 sm:gap-7 lg:gap-8 min-w-0">
            {/* 4 Golden Yellow Circular Action Buttons (Pixel-matched to reference) */}
            <div className="flex items-center gap-2 shrink-0">
              {/* 1. Search */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-brand-yellow hover:bg-brand-yellowHover active:scale-95 text-black flex items-center justify-center transition-all shadow-sm cursor-pointer"
                title="Search Station"
                aria-label="Search"
              >
                <Search className="w-4 h-4 stroke-[2.5]" />
              </button>

              {/* 2. Equalizer / Menu Bars (=) */}
              <button
                onClick={toggleMute}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-brand-yellow hover:bg-brand-yellowHover active:scale-95 text-black flex items-center justify-center transition-all shadow-sm cursor-pointer"
                title="Mute / Sound Settings"
                aria-label="Equalizer"
              >
                <div className="flex flex-col gap-[3.5px] w-3.5 items-center">
                  <span className="h-[2px] w-full bg-black rounded-full" />
                  <span className="h-[2px] w-full bg-black rounded-full" />
                </div>
              </button>

              {/* 3. Play / Pause Outlined Triangle */}
              <button
                onClick={togglePlay}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-brand-yellow hover:bg-brand-yellowHover active:scale-95 text-black flex items-center justify-center transition-all shadow-sm cursor-pointer"
                title={isPlaying ? 'Pause Broadcast' : 'Play Live Broadcast'}
                aria-label="Toggle Play"
              >
                {isPlaying ? (
                  <Pause className="w-4 h-4 fill-current" />
                ) : (
                  <Play className="w-4 h-4 fill-transparent stroke-black stroke-[2.5] ml-0.5" />
                )}
              </button>

              {/* 4. Speaker / Audio Channels */}
              <button
                onClick={() => setIsStreamModalOpen(true)}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-brand-yellow hover:bg-brand-yellowHover active:scale-95 text-black flex items-center justify-center transition-all shadow-sm cursor-pointer"
                title="Select Audio Stream Channel"
                aria-label="Channels"
              >
                <Volume2 className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-[11px] xl:text-xs font-black uppercase tracking-wider text-black">
              {/* DEMOS with right arrow */}
              <div
                className="relative"
                onMouseEnter={() => setIsDemosDropdownOpen(true)}
                onMouseLeave={() => setIsDemosDropdownOpen(false)}
              >
                <Link
                  to="/"
                  className="flex items-center gap-1.5 hover:text-brand-yellowDark transition-colors py-2 group cursor-pointer"
                >
                  <span>DEMOS</span>
                  <span className="text-[10px] text-gray-500 font-sans group-hover:translate-x-0.5 transition-transform">
                    →
                  </span>
                </Link>

                {isDemosDropdownOpen && (
                  <div className="absolute top-full left-0 w-48 bg-white border border-gray-100 rounded-xl shadow-xl py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                    <Link
                      to="/"
                      className="block px-4 py-2 text-xs font-bold hover:bg-gray-50 hover:text-brand-yellowDark text-gray-800"
                    >
                      Radio Station Home
                    </Link>
                    <Link
                      to="/charts"
                      className="block px-4 py-2 text-xs font-bold hover:bg-gray-50 hover:text-brand-yellowDark text-gray-800"
                    >
                      Top 20 Countdown
                    </Link>
                    <Link
                      to="/shows"
                      className="block px-4 py-2 text-xs font-bold hover:bg-gray-50 hover:text-brand-yellowDark text-gray-800"
                    >
                      DJ Shows Showcase
                    </Link>
                  </div>
                )}
              </div>

              {/* BLOG with right arrow */}
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  clsx(
                    'flex items-center gap-1.5 transition-colors py-2 group',
                    isActive ? 'text-brand-yellowDark' : 'hover:text-brand-yellowDark'
                  )
                }
              >
                <span>BLOG</span>
                <span className="text-[10px] text-gray-500 font-sans group-hover:translate-x-0.5 transition-transform">
                  →
                </span>
              </NavLink>

              {/* CHARTS */}
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

              {/* RADIO SHOWS */}
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

              {/* PODCASTS */}
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

              {/* HOSTS */}
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

              {/* CONTACT */}
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

              {/* MORE with right arrow */}
              <div
                className="relative"
                onMouseEnter={() => setIsMoreDropdownOpen(true)}
                onMouseLeave={() => setIsMoreDropdownOpen(false)}
              >
                <button className="flex items-center gap-1.5 hover:text-brand-yellowDark transition-colors py-2 cursor-pointer font-black">
                  <span>MORE</span>
                  <span className="text-[10px] text-gray-500 font-sans">→</span>
                </button>

                {isMoreDropdownOpen && (
                  <div className="absolute top-full left-0 w-48 bg-white border border-gray-100 rounded-xl shadow-xl py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                    <Link
                      to="/schedule"
                      className="block px-4 py-2 text-xs font-bold hover:bg-gray-50 hover:text-brand-yellowDark text-gray-800"
                    >
                      Weekly Schedule
                    </Link>
                    <Link
                      to="/videos"
                      className="block px-4 py-2 text-xs font-bold hover:bg-gray-50 hover:text-brand-yellowDark text-gray-800"
                    >
                      Videos Archive
                    </Link>
                    <Link
                      to="/events"
                      className="block px-4 py-2 text-xs font-bold hover:bg-gray-50 hover:text-brand-yellowDark text-gray-800"
                    >
                      Events & Concerts
                    </Link>
                    <Link
                      to="/contact"
                      className="block px-4 py-2 text-xs font-bold hover:bg-gray-50 hover:text-brand-yellowDark text-gray-800"
                    >
                      Contact Studio
                    </Link>
                    <Link
                      to="/promote"
                      className="block px-4 py-2 text-xs font-bold hover:bg-gray-50 hover:text-brand-yellowDark text-gray-800"
                    >
                      Promote / Submit Song
                    </Link>
                  </div>
                )}
              </div>
            </nav>
          </div>

          {/* Right: Station Logo (WAVE 98 RADIO) + Mobile Hamburger */}
          <div className="flex items-center gap-4 shrink-0">
            <StationLogo variant="light" size="sm" />

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
