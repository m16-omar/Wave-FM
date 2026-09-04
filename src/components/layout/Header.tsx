import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { StationLogo } from '../ui/StationLogo';
import { MobileMenu } from './MobileMenu';
import { SearchOverlay } from './SearchOverlay';
import { StreamSelectorModal } from '../audio/StreamSelectorModal';
import { Search, Play, Pause, Volume2, Menu, Radio, Disc, Sparkles, Music2, Mic2, Calendar, Video, PartyPopper, PhoneCall, Megaphone } from 'lucide-react';
import { useAudio } from '../../context/AudioContext';
import { clsx } from 'clsx';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isStreamModalOpen, setIsStreamModalOpen] = useState(false);
  const [isDemosDropdownOpen, setIsDemosDropdownOpen] = useState(false);
  const [isBlogDropdownOpen, setIsBlogDropdownOpen] = useState(false);
  const [isMoreDropdownOpen, setIsMoreDropdownOpen] = useState(false);

  const { isPlaying, togglePlay, toggleMute, playLiveStream } = useAudio();

  return (
    <>
      {/* Top Purple Accent Line (Pixel-matched to reference top border) */}
      <div className="w-full h-[3px] bg-[#532688] z-50 relative" />

      {/* Main White Navbar */}
      <header className="w-full bg-white text-black sticky top-0 z-40 shadow-[0_1px_3px_rgba(0,0,0,0.04)] border-b border-gray-100 select-none">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-15 flex items-center justify-between gap-4">
          
          {/* Left Container: 4 Golden Yellow Circular Action Buttons + Navigation Items */}
          <div className="flex items-center gap-6 sm:gap-7 lg:gap-8 min-w-0">
            
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

            {/* Desktop Navigation Links (DEMOS ›, BLOG ›, CHARTS, RADIO SHOWS, PODCASTS, HOSTS, MORE ›) */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-7 text-[11px] xl:text-xs font-black uppercase tracking-wider text-black">
              
              {/* 1. DEMOS with right chevron › */}
              <div
                className="relative"
                onMouseEnter={() => setIsDemosDropdownOpen(true)}
                onMouseLeave={() => setIsDemosDropdownOpen(false)}
              >
                <button
                  onClick={() => setIsDemosDropdownOpen(!isDemosDropdownOpen)}
                  className="flex items-center gap-1 hover:text-brand-yellowDark transition-colors py-2 cursor-pointer font-black"
                >
                  <span>DEMOS</span>
                  <span className="text-[12px] text-gray-400 font-sans leading-none ml-0.5 select-none">
                    ›
                  </span>
                </button>

                {isDemosDropdownOpen && (
                  <div className="absolute top-full left-0 w-60 bg-white border border-gray-100 rounded-xl shadow-xl py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                    <button
                      onClick={() => {
                        playLiveStream();
                        setIsDemosDropdownOpen(false);
                      }}
                      className="w-full text-left px-4 py-2.5 text-xs font-bold hover:bg-gray-50 hover:text-brand-yellowDark text-gray-800 flex items-center gap-2.5 transition-colors"
                    >
                      <Radio className="w-4 h-4 text-brand-yellow shrink-0" />
                      <div>
                        <div className="font-extrabold text-black">Live Radio Stream</div>
                        <div className="text-[10px] text-gray-500 font-normal">Main 98.5 FM Broadcast</div>
                      </div>
                    </button>
                    
                    <button
                      onClick={() => {
                        setIsStreamModalOpen(true);
                        setIsDemosDropdownOpen(false);
                      }}
                      className="w-full text-left px-4 py-2.5 text-xs font-bold hover:bg-gray-50 hover:text-brand-yellowDark text-gray-800 flex items-center gap-2.5 transition-colors"
                    >
                      <Disc className="w-4 h-4 text-brand-orange shrink-0" />
                      <div>
                        <div className="font-extrabold text-black">Audio Stream Switcher</div>
                        <div className="text-[10px] text-gray-500 font-normal">HD / AAC / Low-Bandwidth</div>
                      </div>
                    </button>

                    <Link
                      to="/charts"
                      onClick={() => setIsDemosDropdownOpen(false)}
                      className="block px-4 py-2.5 text-xs font-bold hover:bg-gray-50 hover:text-brand-yellowDark text-gray-800 flex items-center gap-2.5 transition-colors"
                    >
                      <Sparkles className="w-4 h-4 text-brand-cyan shrink-0" />
                      <div>
                        <div className="font-extrabold text-black">Top 20 Interactive Chart</div>
                        <div className="text-[10px] text-gray-500 font-normal">Weekly listener voting</div>
                      </div>
                    </Link>

                    <Link
                      to="/videos"
                      onClick={() => setIsDemosDropdownOpen(false)}
                      className="block px-4 py-2.5 text-xs font-bold hover:bg-gray-50 hover:text-brand-yellowDark text-gray-800 flex items-center gap-2.5 transition-colors"
                    >
                      <Video className="w-4 h-4 text-brand-pink shrink-0" />
                      <div>
                        <div className="font-extrabold text-black">Studio Live Visualizer</div>
                        <div className="text-[10px] text-gray-500 font-normal">4K Video stream recording</div>
                      </div>
                    </Link>
                  </div>
                )}
              </div>

              {/* 2. BLOG with right chevron › */}
              <div
                className="relative"
                onMouseEnter={() => setIsBlogDropdownOpen(true)}
                onMouseLeave={() => setIsBlogDropdownOpen(false)}
              >
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    clsx(
                      'flex items-center gap-1 transition-colors py-2',
                      isActive ? 'text-brand-yellowDark' : 'hover:text-brand-yellowDark'
                    )
                  }
                >
                  <span>BLOG</span>
                  <span className="text-[12px] text-gray-400 font-sans leading-none ml-0.5 select-none">
                    ›
                  </span>
                </NavLink>

                {isBlogDropdownOpen && (
                  <div className="absolute top-full left-0 w-52 bg-white border border-gray-100 rounded-xl shadow-xl py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                    <Link
                      to="/blog"
                      onClick={() => setIsBlogDropdownOpen(false)}
                      className="block px-4 py-2 text-xs font-bold hover:bg-gray-50 hover:text-brand-yellowDark text-gray-800"
                    >
                      All Articles & News
                    </Link>
                    <Link
                      to="/blog"
                      onClick={() => setIsBlogDropdownOpen(false)}
                      className="block px-4 py-2 text-xs font-bold hover:bg-gray-50 hover:text-brand-yellowDark text-gray-800"
                    >
                      Artist Interviews
                    </Link>
                    <Link
                      to="/blog"
                      onClick={() => setIsBlogDropdownOpen(false)}
                      className="block px-4 py-2 text-xs font-bold hover:bg-gray-50 hover:text-brand-yellowDark text-gray-800"
                    >
                      Music Debuts & Reviews
                    </Link>
                    <Link
                      to="/blog"
                      onClick={() => setIsBlogDropdownOpen(false)}
                      className="block px-4 py-2 text-xs font-bold hover:bg-gray-50 hover:text-brand-yellowDark text-gray-800"
                    >
                      Festival Coverage
                    </Link>
                  </div>
                )}
              </div>

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

              {/* 7. MORE with right chevron › */}
              <div
                className="relative"
                onMouseEnter={() => setIsMoreDropdownOpen(true)}
                onMouseLeave={() => setIsMoreDropdownOpen(false)}
              >
                <button
                  onClick={() => setIsMoreDropdownOpen(!isMoreDropdownOpen)}
                  className="flex items-center gap-1 hover:text-brand-yellowDark transition-colors py-2 cursor-pointer font-black"
                >
                  <span>MORE</span>
                  <span className="text-[12px] text-gray-400 font-sans leading-none ml-0.5 select-none">
                    ›
                  </span>
                </button>

                {isMoreDropdownOpen && (
                  <div className="absolute top-full left-0 w-52 bg-white border border-gray-100 rounded-xl shadow-xl py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                    <Link
                      to="/schedule"
                      onClick={() => setIsMoreDropdownOpen(false)}
                      className="px-4 py-2 text-xs font-bold hover:bg-gray-50 hover:text-brand-yellowDark text-gray-800 flex items-center gap-2"
                    >
                      <Calendar className="w-3.5 h-3.5 text-gray-400" />
                      <span>Weekly Schedule</span>
                    </Link>
                    <Link
                      to="/videos"
                      onClick={() => setIsMoreDropdownOpen(false)}
                      className="px-4 py-2 text-xs font-bold hover:bg-gray-50 hover:text-brand-yellowDark text-gray-800 flex items-center gap-2"
                    >
                      <Video className="w-3.5 h-3.5 text-gray-400" />
                      <span>Videos Archive</span>
                    </Link>
                    <Link
                      to="/events"
                      onClick={() => setIsMoreDropdownOpen(false)}
                      className="px-4 py-2 text-xs font-bold hover:bg-gray-50 hover:text-brand-yellowDark text-gray-800 flex items-center gap-2"
                    >
                      <PartyPopper className="w-3.5 h-3.5 text-gray-400" />
                      <span>Events & Concerts</span>
                    </Link>
                    <Link
                      to="/contact"
                      onClick={() => setIsMoreDropdownOpen(false)}
                      className="px-4 py-2 text-xs font-bold hover:bg-gray-50 hover:text-brand-yellowDark text-gray-800 flex items-center gap-2"
                    >
                      <PhoneCall className="w-3.5 h-3.5 text-gray-400" />
                      <span>Contact Studio</span>
                    </Link>
                    <Link
                      to="/promote"
                      onClick={() => setIsMoreDropdownOpen(false)}
                      className="px-4 py-2 text-xs font-bold hover:bg-gray-50 hover:text-brand-yellowDark text-gray-800 flex items-center gap-2"
                    >
                      <Megaphone className="w-3.5 h-3.5 text-gray-400" />
                      <span>Promote / Advertise</span>
                    </Link>
                  </div>
                )}
              </div>
            </nav>
          </div>

          {/* Right: Station Logo (WAVE98 gold) + Mobile Hamburger */}
          <div className="flex items-center gap-4 shrink-0">
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

