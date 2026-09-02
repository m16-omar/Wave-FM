import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Search, ChevronRight } from 'lucide-react';
import { MAIN_NAV_ITEMS } from './Navigation';
import { StationLogo } from '../ui/StationLogo';
import { SocialLinks } from '../ui/SocialLinks';
import { useAudio } from '../../context/AudioContext';
import { clsx } from 'clsx';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenSearch: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  onOpenSearch,
}) => {
  const { playLiveStream, isPlaying } = useAudio();

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 250 }}
            className="relative w-4/5 max-w-sm h-full bg-background-card border-r border-border flex flex-col justify-between p-6 z-10 overflow-y-auto"
          >
            <div>
              {/* Header inside drawer */}
              <div className="flex items-center justify-between pb-5 border-b border-border mb-6">
                <StationLogo variant="dark" size="sm" asLink={true} />

                <button
                  onClick={onClose}
                  className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-white/10"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Listen Live Action */}
              <button
                onClick={() => {
                  playLiveStream();
                  onClose();
                }}
                className="w-full py-3 px-4 rounded-xl bg-brand-yellow text-black font-extrabold uppercase tracking-wider text-sm flex items-center justify-center gap-2 shadow-glow-yellow mb-6"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>{isPlaying ? 'Now Playing Live' : 'Listen Live Now'}</span>
              </button>

              {/* Quick Search Button */}
              <button
                onClick={() => {
                  onClose();
                  onOpenSearch();
                }}
                className="w-full py-2.5 px-4 rounded-xl bg-background-secondary border border-border text-gray-400 text-xs font-bold flex items-center justify-between mb-6"
              >
                <span className="flex items-center gap-2">
                  <Search className="w-4 h-4 text-brand-yellow" />
                  <span>Search site...</span>
                </span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/10 text-gray-300">
                  ⌘K
                </span>
              </button>

              {/* Navigation Links */}
              <nav className="space-y-1">
                {MAIN_NAV_ITEMS.map((item) => (
                  <NavLink
                    key={item.href}
                    to={item.href}
                    onClick={onClose}
                    className={({ isActive }) =>
                      clsx(
                        'flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-bold uppercase tracking-wider transition-colors',
                        isActive
                          ? 'bg-brand-yellow/10 text-brand-yellow border-l-4 border-brand-yellow'
                          : 'text-gray-300 hover:text-white hover:bg-white/5'
                      )
                    }
                  >
                    <span>{item.label}</span>
                    {item.badge ? (
                      <span className="text-[10px] px-2 py-0.5 rounded bg-brand-yellow text-black font-black">
                        {item.badge}
                      </span>
                    ) : (
                      <ChevronRight className="w-4 h-4 opacity-40" />
                    )}
                  </NavLink>
                ))}
              </nav>
            </div>

            {/* Drawer Footer */}
            <div className="pt-6 border-t border-border mt-6 space-y-4">
              <div className="flex items-center justify-center">
                <SocialLinks size="sm" variant="pills" />
              </div>
              <div className="text-center text-xs text-gray-500">
                <p>Studio: +1 (800) 555-WAVE</p>
                <p className="mt-0.5">Live 24/7 in High Definition</p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
