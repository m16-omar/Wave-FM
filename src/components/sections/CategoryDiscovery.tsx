import React from 'react';
import { Link } from 'react-router-dom';

interface CategoryItem {
  id: string;
  title: string;
  href: string;
  watermark: string;
}

const CATEGORIES: CategoryItem[] = [
  { id: 'cat-1', title: 'Artists', href: '/hosts', watermark: 'Artists' },
  { id: 'cat-2', title: 'Trends', href: '/blog', watermark: 'Trends' },
  { id: 'cat-3', title: 'Releases', href: '/charts', watermark: 'Releases' },
  { id: 'cat-4', title: 'Concerts', href: '/contact#events', watermark: 'Concerts' },
];

export const CategoryDiscovery: React.FC = () => {
  return (
    <section className="w-full py-16 sm:py-20 bg-brand-yellow text-black relative overflow-hidden select-none">
      {/* Repeating Cursive Watermark "Categories" in Background */}
      <div className="absolute inset-0 flex items-center justify-around pointer-events-none opacity-15 overflow-hidden">
        <span className="font-script text-8xl sm:text-9xl text-black rotate-[-15deg] whitespace-nowrap">
          Categories
        </span>
        <span className="font-script text-8xl sm:text-9xl text-black rotate-[-15deg] whitespace-nowrap hidden sm:inline">
          Categories
        </span>
        <span className="font-script text-8xl sm:text-9xl text-black rotate-[-15deg] whitespace-nowrap hidden lg:inline">
          Categories
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Centered Black Pill Header from Screenshot 5 */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-block px-8 py-2.5 rounded-full bg-black text-brand-yellow font-black text-xs sm:text-sm uppercase tracking-widest shadow-xl">
            DISCOVER ALL CATEGORIES
          </div>
        </div>

        {/* 4 Dark Rounded Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              to={cat.href}
              className="bg-[#141416] text-white rounded-3xl p-8 sm:p-10 text-center flex flex-col items-center justify-center min-h-[170px] sm:min-h-[190px] relative overflow-hidden group shadow-2xl hover:scale-105 hover:bg-[#1a1a1e] transition-all duration-300 border border-white/5"
            >
              {/* Subtle repeating background text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none opacity-20 group-hover:opacity-30 transition-opacity">
                <span className="font-script text-4xl text-gray-400 rotate-[-12deg] select-none">
                  {cat.watermark}
                </span>
                <span className="font-script text-4xl text-gray-400 rotate-[-12deg] select-none -mt-3">
                  {cat.watermark}
                </span>
              </div>

              {/* Main Category Title */}
              <span className="relative z-10 font-extrabold text-xl sm:text-2xl text-white tracking-wide group-hover:text-brand-yellow transition-colors font-display">
                {cat.title}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
