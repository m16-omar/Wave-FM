import { RadioChannel, NowPlayingTrack } from '../types/radio';

export const RADIO_CHANNELS: RadioChannel[] = [
  {
    id: 'wave-main',
    name: 'WAVE 98.5 FM',
    frequency: '98.5 FM',
    tagline: 'The #1 Urban, Electronic & Hit Music Station',
    genre: 'Urban / Hits / Electronic',
    streamUrl: 'https://stream.zeno.fm/f3wvbbqmdg8uv', // Real live streaming URL fallback
    backupStreamUrl: 'https://icecast.radiowave.live/live',
    bitrate: '320kbps',
    listenersCount: 14820,
    logo: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=150&auto=format&fit=crop&q=80',
    accentColor: '#FFE600',
  },
  {
    id: 'wave-urban',
    name: 'WAVE Urban & Hip-Hop',
    frequency: 'HD2 Digital',
    tagline: 'Non-Stop Hip-Hop, Drill, R&B & Afrobeats',
    genre: 'Hip-Hop & R&B',
    streamUrl: 'https://stream.zeno.fm/f3wvbbqmdg8uv',
    bitrate: '320kbps',
    listenersCount: 9340,
    logo: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=150&auto=format&fit=crop&q=80',
    accentColor: '#FF007F',
  },
  {
    id: 'wave-dance',
    name: 'WAVE Club & Dance',
    frequency: 'HD3 Digital',
    tagline: 'House, Techno, EDM & Live DJ Mixes',
    genre: 'Electronic / Dance',
    streamUrl: 'https://stream.zeno.fm/f3wvbbqmdg8uv',
    bitrate: '320kbps',
    listenersCount: 7120,
    logo: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=150&auto=format&fit=crop&q=80',
    accentColor: '#00F0FF',
  },
  {
    id: 'wave-chill',
    name: 'WAVE Chill & Lo-Fi',
    frequency: 'HD4 Digital',
    tagline: 'Deep Beats, Soul, Lo-Fi & Downtempo',
    genre: 'Chill / Lo-Fi / Soul',
    streamUrl: 'https://stream.zeno.fm/f3wvbbqmdg8uv',
    bitrate: '192kbps',
    listenersCount: 4890,
    logo: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=150&auto=format&fit=crop&q=80',
    accentColor: '#8B5CF6',
  },
];

export const CURRENT_NOW_PLAYING: NowPlayingTrack = {
  id: 'track-01',
  title: 'Anyway',
  artist: 'The Madpix Project',
  album: 'BMP Records',
  coverArt: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&auto=format&fit=crop&q=80',
  duration: 245,
  currentTime: 85,
  genre: 'Urban / Hit Music',
  releaseYear: 2026,
  spotifyUrl: 'https://spotify.com',
  appleMusicUrl: 'https://apple.com',
  previewAudioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
  votes: 1420,
};

export const ON_AIR_SHOW_INFO = {
  id: 'morning-drive',
  title: 'The Morning Drive w/ Marcus & Chloe',
  hostName: 'Marcus Cole & Chloe Vance',
  hostAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80',
  timeSlot: '06:00 - 10:00 AM',
  image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&auto=format&fit=crop&q=80',
  category: 'Live Talk & Hits',
  listeners: 14820,
  description: 'Wake up with fresh beats, trending culture talk, morning traffic, celebrity interviews and the hottest music chart countdown.',
};

export const COMING_NEXT_SHOW_INFO = {
  id: 'urban-pulse',
  title: 'Urban Pulse: The Midday Anthem',
  hostName: 'DJ K-Real & Sarah Jenkins',
  timeSlot: '10:00 AM - 02:00 PM',
  image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&auto=format&fit=crop&q=80',
  startsIn: '45 mins',
  category: 'Hip-Hop & R&B',
};
