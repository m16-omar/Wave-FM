import React, { useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Pause, ChevronDown, MoreVertical } from 'lucide-react';
import { useAudio } from '../../context/AudioContext';
import { getCurrentLiveShow, getUpcomingConsecutiveShows } from '../../data/schedule';
import { clsx } from 'clsx';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenSearch?: () => void;
}

const TREND_TAGS = [
  'ARTISTS',
  'CHARTS',
  'COMMERCIAL',
  'CULTURE',
  'DISCUSSION',
  'DJ',
  'EVENTS',
  'FAVOURITE',
  'GOSSIP',
  'HITS',
  'INDUSTRY',
  'MELODIES',
  'MUSIC',
  'OPINION',
  'ORIGINS',
  'POP',
  'POP WORLD',
  'PREDICTIONS',
  'REVIEWS',
  'ROCK',
  'SONG',
  'STORIES',
  'TOP HITS',
  'TRACKS',
  'TREND',
  'AFROBEATS',
  'LAGOS 106.3',
];

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
}) => {
  const { playLiveStream, togglePlay, isPlaying } = useAudio();
  const navigate = useNavigate();
  const currentLive = getCurrentLiveShow();
  const nextShows = getUpcomingConsecutiveShows(2);

  // Accordion state for dropdown nav items
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (key: string) => {
    setOpenDropdown(prev => (prev === key ? null : key));
  };

  const handleTagClick = (tag: string) => {
    onClose();
    navigate(`/news?tag=${encodeURIComponent(tag)}`);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
          />

          {/* Side Navigation Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 300 }}
            className="relative w-full max-w-[380px] sm:max-w-[420px] h-full bg-[#121620] text-white flex flex-col justify-between p-6 sm:p-7 z-10 overflow-y-auto scrollbar-thin border-l border-white/10 shadow-2xl"
          >
            <div className="space-y-6">
              {/* Top Row: Close Button (Top Right as in Screenshot) */}
              <div className="flex items-center justify-end">
                <button
                  onClick={onClose}
                  className="w-9 h-9 rounded-full bg-neutral-900 border border-white/50 text-white flex items-center justify-center hover:bg-white/10 hover:border-white transition-all cursor-pointer shadow-md"
                  aria-label="Close menu"
                >
                  <X className="w-4 h-4 stroke-[2.5]" />
                </button>
              </div>

              {/* ============================================================= */}
              {/* 1. PRIMARY NAVIGATION LINKS (Pixel-matched to Screenshot 1) */}
              {/* ============================================================= */}
              <nav className="divide-y divide-white/10 border-t border-b border-white/10 font-display">
                {/* DEMOS / HOME (With Dropdown) */}
                <div>
                  <div className="flex items-center justify-between py-3 group">
                    <NavLink
                      to="/"
                      onClick={onClose}
                      className={({ isActive }) =>
                        clsx(
                          'text-sm font-black uppercase tracking-wider transition-colors',
                          isActive ? 'text-brand-yellow' : 'text-brand-yellow/90 hover:text-brand-yellow'
                        )
                      }
                    >
                      DEMOS
                    </NavLink>
                    <button
                      onClick={() => toggleDropdown('demos')}
                      className="w-6 h-6 rounded-full border border-white/20 hover:border-brand-yellow text-gray-300 hover:text-brand-yellow flex items-center justify-center transition-all cursor-pointer"
                      aria-label="Toggle Demos submenu"
                    >
                      <ChevronDown
                        className={clsx(
                          'w-3.5 h-3.5 transition-transform duration-300',
                          openDropdown === 'demos' && 'rotate-180 text-brand-yellow'
                        )}
                      />
                    </button>
                  </div>
                  {openDropdown === 'demos' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-3 pb-2 space-y-1.5 text-xs font-bold text-gray-300"
                    >
                      <Link
                        to="/"
                        onClick={onClose}
                        className="block py-1 hover:text-brand-yellow transition-colors"
                      >
                        • Main Station Broadcast
                      </Link>
                      <Link
                        to="/shows"
                        onClick={onClose}
                        className="block py-1 hover:text-brand-yellow transition-colors"
                      >
                        • Lineup & Daily Programs
                      </Link>
                    </motion.div>
                  )}
                </div>

                {/* BLOG / NEWS (With Dropdown) */}
                <div>
                  <div className="flex items-center justify-between py-3 group">
                    <NavLink
                      to="/news"
                      onClick={onClose}
                      className={({ isActive }) =>
                        clsx(
                          'text-sm font-black uppercase tracking-wider transition-colors',
                          isActive ? 'text-brand-yellow' : 'text-brand-yellow/90 hover:text-brand-yellow'
                        )
                      }
                    >
                      BLOG
                    </NavLink>
                    <button
                      onClick={() => toggleDropdown('blog')}
                      className="w-6 h-6 rounded-full border border-white/20 hover:border-brand-yellow text-gray-300 hover:text-brand-yellow flex items-center justify-center transition-all cursor-pointer"
                      aria-label="Toggle Blog submenu"
                    >
                      <ChevronDown
                        className={clsx(
                          'w-3.5 h-3.5 transition-transform duration-300',
                          openDropdown === 'blog' && 'rotate-180 text-brand-yellow'
                        )}
                      />
                    </button>
                  </div>
                  {openDropdown === 'blog' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-3 pb-2 space-y-1.5 text-xs font-bold text-gray-300"
                    >
                      <Link
                        to="/news"
                        onClick={onClose}
                        className="block py-1 hover:text-brand-yellow transition-colors"
                      >
                        • Breaking National News
                      </Link>
                      <Link
                        to="/news"
                        onClick={onClose}
                        className="block py-1 hover:text-brand-yellow transition-colors"
                      >
                        • Lagos Culture & Lifestyle
                      </Link>
                    </motion.div>
                  )}
                </div>

                {/* CHARTS */}
                <div className="py-3">
                  <NavLink
                    to="/shows"
                    onClick={onClose}
                    className={({ isActive }) =>
                      clsx(
                        'block text-sm font-black uppercase tracking-wider transition-colors',
                        isActive ? 'text-brand-yellow' : 'text-brand-yellow/90 hover:text-brand-yellow'
                      )
                    }
                  >
                    CHARTS
                  </NavLink>
                </div>

                {/* RADIO SHOWS */}
                <div className="py-3">
                  <NavLink
                    to="/shows"
                    onClick={onClose}
                    className={({ isActive }) =>
                      clsx(
                        'block text-sm font-black uppercase tracking-wider transition-colors',
                        isActive ? 'text-brand-yellow' : 'text-brand-yellow/90 hover:text-brand-yellow'
                      )
                    }
                  >
                    RADIO SHOWS
                  </NavLink>
                </div>

                {/* PODCASTS */}
                <div className="py-3">
                  <NavLink
                    to="/podcasts"
                    onClick={onClose}
                    className={({ isActive }) =>
                      clsx(
                        'block text-sm font-black uppercase tracking-wider transition-colors',
                        isActive ? 'text-brand-yellow' : 'text-brand-yellow/90 hover:text-brand-yellow'
                      )
                    }
                  >
                    PODCASTS
                  </NavLink>
                </div>

                {/* HOSTS */}
                <div className="py-3">
                  <NavLink
                    to="/hosts"
                    onClick={onClose}
                    className={({ isActive }) =>
                      clsx(
                        'block text-sm font-black uppercase tracking-wider transition-colors',
                        isActive ? 'text-brand-yellow' : 'text-brand-yellow/90 hover:text-brand-yellow'
                      )
                    }
                  >
                    HOSTS
                  </NavLink>
                </div>

                {/* MORE (With Dropdown) */}
                <div>
                  <div className="flex items-center justify-between py-3 group">
                    <span className="text-sm font-black uppercase tracking-wider text-brand-yellow cursor-pointer" onClick={() => toggleDropdown('more')}>
                      MORE
                    </span>
                    <button
                      onClick={() => toggleDropdown('more')}
                      className="w-6 h-6 rounded-full border border-white/20 hover:border-brand-yellow text-gray-300 hover:text-brand-yellow flex items-center justify-center transition-all cursor-pointer"
                      aria-label="Toggle More submenu"
                    >
                      <ChevronDown
                        className={clsx(
                          'w-3.5 h-3.5 transition-transform duration-300',
                          openDropdown === 'more' && 'rotate-180 text-brand-yellow'
                        )}
                      />
                    </button>
                  </div>
                  {openDropdown === 'more' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-3 pb-2 space-y-1.5 text-xs font-bold text-gray-300"
                    >
                      <Link
                        to="/schedule"
                        onClick={onClose}
                        className="block py-1 hover:text-brand-yellow transition-colors"
                      >
                        • Broadcast Schedule Guide
                      </Link>
                      <Link
                        to="/promote"
                        onClick={onClose}
                        className="block py-1 hover:text-brand-yellow transition-colors"
                      >
                        • Promote & Advertising
                      </Link>
                      <Link
                        to="/videos"
                        onClick={onClose}
                        className="block py-1 hover:text-brand-yellow transition-colors"
                      >
                        • Video Archives
                      </Link>
                      <Link
                        to="/events"
                        onClick={onClose}
                        className="block py-1 hover:text-brand-yellow transition-colors"
                      >
                        • Station Events & Concerts
                      </Link>
                      <Link
                        to="/contact"
                        onClick={onClose}
                        className="block py-1 hover:text-brand-yellow transition-colors"
                      >
                        • Contact Studio & Staff
                      </Link>
                    </motion.div>
                  )}
                </div>
              </nav>

              {/* ============================================================= */}
              {/* 2. ON AIR SECTION (Pixel-matched to Screenshot 1)             */}
              {/* ============================================================= */}
              <div className="space-y-3">
                {/* Yellow Badge with Dashed Line */}
                <div className="flex items-center gap-3">
                  <span className="px-3 py-0.5 rounded-full bg-brand-yellow text-black text-[10px] font-black uppercase tracking-wider">
                    ON AIR
                  </span>
                  <div className="flex-1 border-b border-dashed border-brand-yellow/60" />
                </div>

                {/* Live Show Banner Card */}
                <div className="relative rounded-2xl overflow-hidden bg-neutral-900 border border-white/10 shadow-xl min-h-[160px] flex flex-col justify-end p-4 group">
                  <img
                    src={currentLive.image}
                    alt={currentLive.showTitle}
                    className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent" />

                  <div className="relative z-10 space-y-1.5">
                    <span className="px-2 py-0.5 rounded border border-brand-yellow text-brand-yellow text-[9px] font-black uppercase tracking-wider bg-black/60 backdrop-blur-sm inline-block">
                      {currentLive.category}
                    </span>

                    <h4 className="text-base sm:text-lg font-black text-white uppercase font-display leading-tight truncate">
                      {currentLive.showTitle}
                    </h4>

                    <div className="flex items-center justify-between text-xs text-gray-300 font-medium pt-1">
                      <span className="font-mono bg-black/50 px-2 py-0.5 rounded border border-white/10 text-[10px]">
                        {currentLive.timeSlot}
                      </span>

                      <button
                        onClick={() => (isPlaying ? togglePlay() : playLiveStream())}
                        className="p-1.5 rounded-full bg-brand-yellow text-black hover:scale-110 active:scale-95 transition-transform cursor-pointer shadow-md"
                        title={isPlaying ? 'Pause broadcast' : 'Listen live'}
                      >
                        {isPlaying ? (
                          <Pause className="w-3.5 h-3.5 fill-current" />
                        ) : (
                          <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* ============================================================= */}
              {/* 3. COMING NEXT SECTION (Pixel-matched to Screenshot 1)        */}
              {/* ============================================================= */}
              <div className="space-y-3">
                {/* Yellow Badge with Dashed Line */}
                <div className="flex items-center gap-3">
                  <span className="px-3 py-0.5 rounded-full bg-brand-yellow text-black text-[10px] font-black uppercase tracking-wider">
                    COMING NEXT
                  </span>
                  <div className="flex-1 border-b border-dashed border-brand-yellow/60" />
                </div>

                {/* 2 Upcoming Show Rows */}
                <div className="space-y-2.5">
                  {nextShows.slice(0, 2).map((item) => (
                    <Link
                      key={item.id}
                      to={`/shows/${item.slug}`}
                      onClick={onClose}
                      className="bg-[#0B1530] rounded-xl p-2.5 flex items-center gap-3 border border-white/5 hover:border-brand-yellow/40 hover:bg-[#0E1A3C] transition-all group"
                    >
                      {/* Thumbnail with Vertical Yellow "SHOW" Label */}
                      <div className="relative w-14 h-12 rounded-lg overflow-hidden bg-neutral-900 shrink-0 border border-white/10">
                        <img
                          src={item.coverArt}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                        <div className="absolute left-0 top-0 bottom-0 w-3.5 bg-brand-yellow text-black flex items-center justify-center font-black text-[7.5px] uppercase [writing-mode:vertical-lr] rotate-180 tracking-tighter">
                          SHOW
                        </div>
                      </div>

                      {/* Info */}
                      <div className="min-w-0 flex-1 space-y-0.5">
                        <h5 className="font-extrabold text-xs text-white truncate group-hover:text-brand-yellow transition-colors font-display">
                          {item.title}
                        </h5>
                        <p className="text-[10px] text-gray-400 font-medium truncate">
                          With {item.host}
                        </p>
                        <p className="text-[9.5px] text-brand-yellow font-mono truncate">
                          {item.timeSlot}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* ============================================================= */}
              {/* 4. TREND TAGS SECTION (Pixel-matched to Screenshot 1)         */}
              {/* ============================================================= */}
              <div className="space-y-3">
                {/* Yellow Badge with Dashed Line */}
                <div className="flex items-center gap-3">
                  <span className="px-3 py-0.5 rounded-full bg-brand-yellow text-black text-[10px] font-black uppercase tracking-wider">
                    TREND TAGS
                  </span>
                  <div className="flex-1 border-b border-dashed border-brand-yellow/60" />
                </div>

                {/* Tag Chips Grid */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {TREND_TAGS.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => handleTagClick(tag)}
                      className="px-2 py-1 bg-[#1A2238] hover:bg-brand-yellow hover:text-black border border-white/10 rounded text-[9.5px] font-bold uppercase tracking-wider text-gray-300 transition-colors cursor-pointer"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              {/* ============================================================= */}
              {/* 5. FOOTER SOCIAL ICONS (Pixel-matched to Screenshot 1)       */}
              {/* ============================================================= */}
              <div className="pt-4 flex items-center gap-3">
                {/* X (Twitter) */}
                <a
                  href="https://x.com/imolefmlagos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-brand-yellow text-black flex items-center justify-center hover:scale-110 active:scale-95 transition-transform shadow-md"
                  aria-label="X / Twitter"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com/imolefmlagos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-brand-yellow text-black flex items-center justify-center hover:scale-110 active:scale-95 transition-transform shadow-md"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689-.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>

                {/* Facebook */}
                <a
                  href="https://facebook.com/imolefmlagos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-brand-yellow text-black flex items-center justify-center hover:scale-110 active:scale-95 transition-transform shadow-md"
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
