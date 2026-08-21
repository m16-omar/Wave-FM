export interface RadioShow {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  image: string;
  bannerImage: string;
  category: string;
  genres: string[];
  hostId: string;
  hostName: string;
  hostAvatar: string;
  scheduleSummary: string; // e.g. "Mon - Fri, 06:00 - 10:00 AM"
  daysOfWeek: ('monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday')[];
  startTime: string; // e.g. "06:00"
  endTime: string; // e.g. "10:00"
  isLive?: boolean;
  isFeatured?: boolean;
  socialLinks?: {
    instagram?: string;
    twitter?: string;
    mixcloud?: string;
    spotify?: string;
  };
  recentTracklist?: {
    title: string;
    artist: string;
    time: string;
  }[];
  latestPodcastEpisodeId?: string;
}
