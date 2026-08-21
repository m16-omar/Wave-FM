import React from 'react';
import { HeroSection } from '../../components/sections/HeroSection';
import { SongRankSection } from '../../components/sections/SongRankSection';
import { SponsorBadges } from '../../components/sections/SponsorBadges';
import { FeaturedScheduleCallout } from '../../components/sections/FeaturedScheduleCallout';
import { WeeklySchedule } from '../../components/sections/WeeklySchedule';
import { UrbanMusicBanner } from '../../components/sections/UrbanMusicBanner';
import { VideoArchive } from '../../components/sections/VideoArchive';
import { CategoryDiscovery } from '../../components/sections/CategoryDiscovery';

export const HomePage: React.FC = () => {
  return (
    <div className="w-full space-y-2 sm:space-y-4">
      {/* 1. Hero Broadcast Section (Screenshot 1) */}
      <HeroSection />

      {/* 2. SONG RANK & Last Played Song & Voting Box (Screenshot 1 & 2) */}
      <SongRankSection />

      {/* 3. Station Sponsor Badges Row (Screenshot 2) */}
      <SponsorBadges />

      {/* 4. Featured Show + Weekly Schedule CTA Card (Screenshot 2) */}
      <FeaturedScheduleCallout />

      {/* 5. Interactive Tabbed Weekly Schedule (Screenshot 3) */}
      <WeeklySchedule />

      {/* 6. Full-Width Split Banner "The Best urban music" & Latest Songs (Screenshot 3) */}
      <UrbanMusicBanner />

      {/* 7. Videos Archive with "stay updated" & Video Player (Screenshot 4) */}
      <VideoArchive />

      {/* 8. Discover All Categories Yellow Banner (Screenshot 5) */}
      <CategoryDiscovery />
    </div>
  );
};
