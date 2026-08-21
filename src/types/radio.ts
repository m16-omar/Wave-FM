export type StreamQuality = '128kbps' | '192kbps' | '320kbps' | 'FLAC';

export interface RadioChannel {
  id: string;
  name: string;
  frequency: string;
  tagline: string;
  genre: string;
  streamUrl: string;
  backupStreamUrl?: string;
  bitrate: StreamQuality;
  listenersCount: number;
  logo: string;
  accentColor: string;
}

export interface NowPlayingTrack {
  id: string;
  title: string;
  artist: string;
  album?: string;
  coverArt: string;
  duration: number; // in seconds
  currentTime?: number;
  genre: string;
  releaseYear?: number;
  spotifyUrl?: string;
  appleMusicUrl?: string;
  previewAudioUrl?: string;
  playedAt?: string;
  votes: number;
}

export interface RadioStationState {
  currentChannel: RadioChannel;
  isPlaying: boolean;
  isLoading: boolean;
  volume: number;
  isMuted: boolean;
  currentTrack: NowPlayingTrack;
  onAirShow: {
    id: string;
    title: string;
    hostName: string;
    hostAvatar: string;
    timeSlot: string;
    image: string;
    category: string;
    listeners: number;
  };
  comingNextShow: {
    id: string;
    title: string;
    hostName: string;
    timeSlot: string;
    image: string;
    startsIn: string;
  };
}
