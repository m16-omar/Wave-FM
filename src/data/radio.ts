import { RadioChannel, NowPlayingTrack } from '../types/radio';
import { ASSET_IMAGES } from '../assets/images';

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

import { getCurrentLiveShow } from './schedule';

export function getCurrentLiveTrack(now: Date = new Date()): NowPlayingTrack {
  const liveShow = getCurrentLiveShow(now);
  return {
    id: `live-${liveShow.id}`,
    title: liveShow.showTitle,
    artist: `Hosted by ${liveShow.hostName}`,
    album: 'Imole 106.3 FM Lagos',
    coverArt: liveShow.image,
    duration: 0,
    currentTime: 0,
    genre: liveShow.category,
    releaseYear: 2026,
    previewAudioUrl: 'https://stream.zeno.fm/f3wvbbqmdg8uv',
    votes: 3820,
  };
}

export const CURRENT_NOW_PLAYING: NowPlayingTrack = getCurrentLiveTrack();

export const ON_AIR_SHOW_INFO = {
  id: 'morning-drive',
  title: 'The Morning Drive w/ Marcus & Chloe',
  hostName: 'Marcus Cole & Chloe Vance',
  hostAvatar: ASSET_IMAGES.staff,
  timeSlot: '06:00 - 10:00 AM',
  image: ASSET_IMAGES.studio,
  category: 'Live Talk & Hits',
  listeners: 14820,
  description: 'Wake up with fresh beats, trending culture talk, morning traffic, celebrity interviews and the hottest music chart countdown.',
};

export const COMING_NEXT_SHOW_INFO = {
  id: 'urban-pulse',
  title: 'Urban Pulse: The Midday Anthem',
  hostName: 'DJ K-Real & Sarah Jenkins',
  timeSlot: '10:00 AM - 02:00 PM',
  image: ASSET_IMAGES.shows.comedySplash,
  startsIn: '45 mins',
  category: 'Hip-Hop & R&B',
};
