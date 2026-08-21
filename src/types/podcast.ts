export interface PodcastEpisode {
  id: string;
  slug: string;
  podcastId: string;
  podcastTitle: string;
  title: string;
  episodeNumber: number;
  seasonNumber?: number;
  description: string;
  duration: string; // e.g. "45:20"
  durationSeconds: number;
  publishedAt: string; // "Oct 12, 2026"
  audioUrl: string;
  coverImage: string;
  hostName: string;
  category: string;
  tags: string[];
  notes?: string;
  playsCount?: number;
}

export interface PodcastShow {
  id: string;
  slug: string;
  title: string;
  description: string;
  hostName: string;
  hostAvatar: string;
  coverImage: string;
  category: string;
  totalEpisodes: number;
  latestEpisode?: PodcastEpisode;
}
