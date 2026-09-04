import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Play, X } from 'lucide-react';

export const VideoArchive: React.FC = () => {
  const [isPlayingModal, setIsPlayingModal] = useState(false);

  return (
    <section className="w-full py-12 sm:py-16 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column (5 Cols): Portrait Photo of Host Touching Cap with Tattoos */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-[32px] overflow-hidden aspect-[4/5] bg-neutral-900 shadow-2xl border border-white/10 group">
              <img
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80"
                alt="Studio Presenter"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
          </div>

          {/* Right Column (7 Cols): White Rounded Card Container from Screenshot 4 */}
          <div className="lg:col-span-7 bg-white rounded-[32px] p-8 sm:p-12 text-black shadow-2xl relative space-y-6">
            {/* Top Header + Floating Yellow Script "stay updated" */}
            <div className="relative pr-24 sm:pr-32">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-black uppercase font-display leading-none">
                VIDEOS
                <br />
                ARCHIVE
              </h2>

              {/* Yellow Marker Script "stay updated" on Top Right */}
              <span className="font-marker text-brand-yellow text-3xl sm:text-4xl md:text-5xl absolute -top-4 sm:-top-6 right-0 sm:right-4 rotate-[-10deg] drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] pointer-events-none select-none whitespace-nowrap">
                stay updated
              </span>
            </div>

            <p className="text-sm sm:text-base text-gray-600 font-medium leading-relaxed max-w-lg">
              Watch in preview our latest interviews, radio shows and podcasts streaming video clips releases and more!
            </p>

            {/* "ALL VIDEOS" Pill Button */}
            <div>
              <Link
                to="/contact#videos"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-brand-yellow hover:bg-brand-yellowHover active:scale-95 text-black font-black text-xs sm:text-sm uppercase tracking-wider shadow-md transition-all"
              >
                ALL VIDEOS
              </Link>
            </div>

            {/* Embedded Dark Video Player Preview Box */}
            <div
              onClick={() => setIsPlayingModal(true)}
              className="relative aspect-video rounded-2xl overflow-hidden bg-[#141416] text-white shadow-xl border border-neutral-800 cursor-pointer group flex items-end p-5 sm:p-6"
            >
              {/* Video Thumbnail Background */}
              <img
                src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80"
                alt="Global Beats Session"
                className="absolute inset-0 w-full h-full object-cover opacity-75 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              {/* Big Centered Golden Circular Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-brand-yellow text-black flex items-center justify-center shadow-2xl group-hover:scale-110 active:scale-95 transition-transform">
                  <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-current ml-1" />
                </div>
              </div>

              {/* Bottom Video Title */}
              <div className="relative z-10">
                <span className="text-base sm:text-xl font-black text-white uppercase font-display tracking-wide drop-shadow-md">
                  Global Beats
                </span>
                <span className="block text-xs font-bold text-gray-300">
                  Episode #42 • Live Studio Session
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal Player */}
      {isPlayingModal && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/20">
            <button
              onClick={() => setIsPlayingModal(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/20 hover:bg-brand-yellow hover:text-black text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="aspect-video w-full bg-black flex items-center justify-center">
              <iframe
                src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Global Beats Live Stream"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
