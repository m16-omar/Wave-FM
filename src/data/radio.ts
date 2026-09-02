import { RadioChannel, NowPlayingTrack } from '../types/radio';

export const RADIO_CHANNELS: RadioChannel[] = [
  {
    id: 'imole-main',
    name: 'Imole 106.3 FM',
    frequency: '106.3 FM',
    tagline: 'The Light of the Airwaves — Hit Music & Live Radio',
    genre: 'Afrobeats / Urban / Hits',
    streamUrl: 'https://stream.zeno.fm/f3wvbbqmdg8uv', // Real live streaming URL fallback
    backupStreamUrl: 'https://icecast.radiowave.live/live',
    bitrate: '320kbps',
    listenersCount: 14820,
    logo: '/imole-logo.png',
    accentColor: '#F5B800',
  },
  {
    id: 'imole-afrobeats',
    name: 'Imole Afrobeats & Hip-Hop',
    frequency: 'HD2 Digital',
    tagline: 'Non-Stop Afrobeats, Drill, R&B & Street Hits',
    genre: 'Afrobeats & Hip-Hop',
    streamUrl: 'https://stream.zeno.fm/f3wvbbqmdg8uv',
    bitrate: '320kbps',
    listenersCount: 9340,
    logo: '/imole-logo.png',
    accentColor: '#FF007F',
  },
  {
    id: 'imole-dance',
    name: 'Imole Club & Dance',
    frequency: 'HD3 Digital',
    tagline: 'Amapiano, House, EDM & Live DJ Mixes',
    genre: 'Amapiano / Electronic',
    streamUrl: 'https://stream.zeno.fm/f3wvbbqmdg8uv',
    bitrate: '320kbps',
    listenersCount: 7120,
    logo: '/imole-logo.png',
    accentColor: '#00F0FF',
  },
  {
    id: 'imole-gospel',
    name: 'Imole Inspiration & Soul',
    frequency: 'HD4 Digital',
    tagline: 'Inspirational Gospel, Soul & Lo-Fi Beats',
    genre: 'Inspirational / Soul',
    streamUrl: 'https://stream.zeno.fm/f3wvbbqmdg8uv',
    bitrate: '192kbps',
    listenersCount: 4890,
    logo: '/imole-logo.png',
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
