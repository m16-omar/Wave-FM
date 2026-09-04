import React from 'react';
import { Flame, Sparkles } from 'lucide-react';
import { SocialLinks } from '../ui/SocialLinks';
import { Link } from 'react-router-dom';

export const TopBar: React.FC = () => {
  return (
    <div className="w-full bg-[#07080B] text-gray-400 text-xs border-b border-border/60 py-1.5 px-4 sm:px-6 lg:px-8 hidden md:block">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Studio hotline & Trending banner */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 text-brand-yellow font-bold">
            <Flame className="w-3.5 h-3.5 fill-current" />
            <span className="uppercase tracking-wider">Hotline:</span>
            <a href="tel:+2348004665336" className="text-white hover:text-brand-yellow transition-colors font-mono">
              +234 800 466 5336 (0800-IMOLE)
            </a>
          </div>

          <span className="text-gray-600">|</span>

          <div className="flex items-center gap-1.5 text-gray-300">
            <Sparkles className="w-3.5 h-3.5 text-brand-cyan" />
            <span>Trending:</span>
            <Link to="/charts" className="hover:text-brand-yellow transition-colors truncate max-w-xs">
              Peggy Gou holds #1 on the Global Chart
            </Link>
          </div>
        </div>

        {/* Right: Quick Links & Social Icons */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 text-gray-400">
            <Link to="/promote" className="hover:text-brand-yellow transition-colors">
              Advertise
            </Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-brand-yellow transition-colors">
              Studio Request
            </Link>
          </div>

          <div className="border-l border-border/60 pl-4">
            <SocialLinks size="sm" variant="ghost" />
          </div>
        </div>
      </div>
    </div>
  );
};
