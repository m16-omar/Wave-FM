import { PodcastEpisode, PodcastShow } from '../types/podcast';

export interface PodcastItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  views: number;
  duration: string;
  audioUrl: string;
}

export const ALL_PODCASTS_DATA: PodcastItem[] = [
  {
    id: 'pod-01',
    slug: 'beat-breakdown',
    title: 'Beat Breakdown',
    category: 'Music',
    date: 'January 8, 2026',
    views: 42,
    duration: '42:15',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
  },
  {
    id: 'pod-02',
    slug: 'hitplay-stories',
    title: 'HitPlay Stories',
    category: 'Stories',
    date: 'January 8, 2026',
    views: 45,
    duration: '38:40',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
  },
  {
    id: 'pod-03',
    slug: 'rhythm-roundtable',
    title: 'Rhythm Roundtable',
    category: 'Trends',
    date: 'January 8, 2026',
    views: 39,
    duration: '50:20',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
  },
  {
    id: 'pod-04',
    slug: 'mic-drop',
    title: 'Mic Drop',
    category: 'Stories',
    date: 'January 8, 2026',
    views: 56,
    duration: '34:10',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
  },
  {
    id: 'pod-05',
    slug: 'underground-soundscapes',
    title: 'Underground Soundscapes',
    category: 'Electronic',
    date: 'January 8, 2026',
    views: 64,
    duration: '45:00',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
  },
  {
    id: 'pod-06',
    slug: 'studio-secrets-unlocked',
    title: 'Studio Secrets Unlocked',
    category: 'Production',
    date: 'January 8, 2026',
    views: 71,
    duration: '55:30',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
  },
  {
    id: 'pod-07',
    slug: 'chart-insiders',
    title: 'Chart Insiders',
    category: 'Industry',
    date: 'January 8, 2026',
    views: 83,
    duration: '41:15',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
  },
  {
    id: 'pod-08',
    slug: 'the-dj-diaries',
    title: 'The DJ Diaries',
    category: 'Interviews',
    date: 'January 8, 2026',
    views: 92,
    duration: '49:45',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
  },
];

export const PODCAST_EPISODES: PodcastEpisode[] = ALL_PODCASTS_DATA.map((p, idx) => ({
  id: p.id,
  slug: p.slug,
  podcastId: p.slug,
  podcastTitle: p.title,
  title: `${p.title}: Episode ${idx + 1}`,
  episodeNumber: idx + 1,
  seasonNumber: 1,
  description: 'Deep dive podcast session broadcasted on Imole 106.3 FM.',
  duration: p.duration,
  durationSeconds: 2400,
  publishedAt: p.date,
  audioUrl: p.audioUrl,
  coverImage: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&auto=format&fit=crop&q=80',
  hostName: 'Maya Lin',
  category: p.category,
  tags: [p.category, 'Podcast', 'Imole 106.3'],
  playsCount: p.views * 100,
}));

export const PODCAST_SHOWS: PodcastShow[] = [
  {
    id: 'beat-breakdown',
    slug: 'beat-breakdown',
    title: 'Beat Breakdown',
    description: 'Inside the studio with the producers behind global chart anthems.',
    coverImage: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&auto=format&fit=crop&q=80',
    hostName: 'Maya Lin',
    hostAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80',
    category: 'Music Production',
    totalEpisodes: 24,
  },
  {
    id: 'hitplay-stories',
    slug: 'hitplay-stories',
    title: 'HitPlay Stories',
    description: 'Unfiltered stories from the world of music festivals, touring, and studio life.',
    coverImage: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=600&auto=format&fit=crop&q=80',
    hostName: 'Alex Rivera',
    hostAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80',
    category: 'Stories',
    totalEpisodes: 18,
  },
  {
    id: 'rhythm-roundtable',
    slug: 'rhythm-roundtable',
    title: 'Rhythm Roundtable',
    description: 'Weekly roundtable dissecting viral music trends, dance culture, and club tracks.',
    coverImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=80',
    hostName: 'Jordan Carter',
    hostAvatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&auto=format&fit=crop&q=80',
    category: 'Trends',
    totalEpisodes: 32,
  },
];
