import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { StationLogo } from '../ui/StationLogo';
import { MobileMenu } from './MobileMenu';
import { SearchOverlay } from './SearchOverlay';
import { StreamSelectorModal } from '../audio/StreamSelectorModal';
import { Search, Play, Pause, Volume2, VolumeX, Menu, ChevronDown, Minus } from 'lucide-react';
import { useAudio } from '../../context/AudioContext';
import { clsx } from 'clsx';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isStreamModalOpen, setIsStreamModalOpen] = useState(false);
  const [isDemosDropdownOpen, setIsDemosDropdownOpen] = useState(false);
  const [isMoreDropdownOpen, setIsMoreDropdownOpen] = useState(false);

  const { isPlaying, togglePlay, isMuted, toggleMute } = useAudio();

  return (
    <>
      <header className="w-full bg-white text-black sticky top-0 z-40 shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-4">
          {/* Left: 4 Yellow Circular Buttons & Desktop Nav */}
          <div className="flex items-center gap-4 sm:gap-6 lg:gap-8 min-w-0">
            {/* 4 Yellow Circular Buttons from Screenshot 1 */}
            <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
              {/* 1. Search */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-brand-yellow hover:bg-brand-yellowHover text-black flex items-center justify-center transition-transform hover:scale-105 active:scale-95 shadow-sm cursor-pointer"
                title="Search Site"
                aria-label="Search"
              >
                <Search className="w-3.5 h-3.5 stroke-[2.5]" />
              </button>

              {/* 2. Mute / Minus */}
              <button
                onClick={toggleMute}
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-brand-yellow hover:bg-brand-yellowHover text-black flex items-center justify-center transition-transform hover:scale-105 active:scale-95 shadow-sm cursor-pointer"
                title={isMuted ? 'Unmute' : 'Mute'}
                aria-label="Toggle Mute"
              >
                <Minus className="w-3.5 h-3.5 stroke-[3]" />
              </button>

              {/* 3. Play / Pause */}
              <button
                onClick={togglePlay}
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-brand-yellow hover:bg-brand-yellowHover text-black flex items-center justify-center transition-transform hover:scale-105 active:scale-95 shadow-sm cursor-pointer"
                title={isPlaying ? 'Pause' : 'Play'}
                aria-label="Toggle Play"
              >
                {isPlaying ? (
                  <Pause className="w-3.5 h-3.5 fill-current" />
                ) : (
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                )}
              </button>

              {/* 4. Stream / Volume Channels */}
              <button
                onClick={() => setIsStreamModalOpen(true)}
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-brand-yellow hover:bg-brand-yellowHover text-black flex items-center justify-center transition-transform hover:scale-105 active:scale-95 shadow-sm cursor-pointer"
                title="Live Streams & Audio Channels"
                aria-label="Channels"
              >
                <Volume2 className="w-3.5 h-3.5 stroke-[2.5]" />
              </button>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-xs xl:text-[13px] font-black uppercase tracking-wider text-black">
              {/* DEMOS Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsDemosDropdownOpen(true)}
                onMouseLeave={() => setIsDemosDropdownOpen(false)}
              >
                <Link
                  to="/"
                  className="flex items-center gap-1 hover:text-brand-yellowDark transition-colors py-2 group cursor-pointer"
                >
                  <span>DEMOS</span>
                  <span className="text-[10px] text-gray-500 group-hover:translate-x-0.5 transition-transform">→</span>
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

              {/* BLOG */}
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  clsx(
                    'flex items-center gap-1 transition-colors py-2 group',
                    isActive ? 'text-brand-yellowDark' : 'hover:text-brand-yellowDark'
                  )
                }
              >
                <span>BLOG</span>
                <span className="text-[10px] text-gray-500 group-hover:translate-x-0.5 transition-transform">→</span>
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

              {/* MORE Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsMoreDropdownOpen(true)}
                onMouseLeave={() => setIsMoreDropdownOpen(false)}
              >
                <button className="flex items-center gap-1 hover:text-brand-yellowDark transition-colors py-2 cursor-pointer font-black">
                  <span>MORE</span>
                  <span className="text-[10px] text-gray-500">→</span>
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

          {/* Right: Station Logo (WAVE 98 RADIO) & Mobile Hamburger */}
          <div className="flex items-center gap-4 shrink-0">
            <StationLogo variant="light" size="sm" />

            {/* Mobile Menu Button */}
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
