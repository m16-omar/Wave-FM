import React, { useState } from 'react';
import { VIDEOS_DATA } from '../../data/videos';
import { VideoCard } from '../../components/cards/VideoCard';
import { Modal } from '../../components/ui/Modal';
import { Tabs } from '../../components/ui/Tabs';
import type { TabItem } from '../../components/ui/Tabs';
import type { VideoItem } from '../../types/video';
import { Tv } from 'lucide-react';

export const VideosPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

  const categories: TabItem[] = [
    { id: 'all', label: 'All Videos', count: VIDEOS_DATA.length },
    { id: 'Studio Sessions', label: 'Studio Sessions' },
    { id: 'Comedy & Highlights', label: 'Comedy Highlights' },
    { id: 'DJ Masterclass', label: 'DJ Masterclass' },
    { id: 'Festival Highlights', label: 'Festival Highlights' },
    { id: 'Interviews', label: 'Interviews' },
  ];

  const filteredVideos = VIDEOS_DATA.filter((v) => {
    return selectedCategory === 'all' || v.category === selectedCategory;
  });

  return (
    <div className="w-full py-8 md:py-12 space-y-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header */}
        <div className="border-b border-border pb-6">
          <div className="flex items-center gap-2 text-xs text-brand-yellow font-extrabold uppercase tracking-widest mb-2">
            <Tv className="w-4 h-4" />
            <span>Imole Visual Broadcast</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Video Archive & Studio Live
          </h1>
          <p className="text-sm md:text-base text-gray-400 mt-2 max-w-xl">
            Stream full HD studio DJ sets, artist freestyle battles, live acoustic jam sessions, and aftermovies.
          </p>
        </div>

        {/* Category Filter */}
        <div className="overflow-x-auto pb-1">
          <Tabs
            tabs={categories}
            activeTab={selectedCategory}
            onChange={setSelectedCategory}
            variant="pills"
          />
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map((video) => (
            <VideoCard
              key={video.id}
              video={video}
              onPlay={(vid) => setSelectedVideo(vid)}
            />
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <Modal
          isOpen={!!selectedVideo}
          onClose={() => setSelectedVideo(null)}
          title={selectedVideo.title}
          maxWidth="4xl"
        >
          <div className="aspect-video w-full rounded-xl overflow-hidden bg-black">
            <iframe
              src={selectedVideo.videoUrl}
              title={selectedVideo.title}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="mt-4 flex items-center justify-between text-xs text-gray-400">
            <span>{selectedVideo.viewsCount} views • Published {selectedVideo.publishedAt}</span>
            <span className="text-brand-yellow font-bold uppercase">{selectedVideo.category}</span>
          </div>
        </Modal>
      )}
    </div>
  );
};
