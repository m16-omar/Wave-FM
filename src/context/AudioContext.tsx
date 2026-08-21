import React, { createContext, useContext, useState, useRef, useEffect, ReactNode } from 'react';
import { RadioChannel, NowPlayingTrack } from '../types/radio';
import { RADIO_CHANNELS, CURRENT_NOW_PLAYING, ON_AIR_SHOW_INFO, COMING_NEXT_SHOW_INFO } from '../data/radio';
import { TOP_CHART_SONGS } from '../data/charts';

export type PlaybackMode = 'live-radio' | 'track-preview' | 'podcast';

interface AudioContextType {
  isPlaying: boolean;
  isLoading: boolean;
  playbackMode: PlaybackMode;
  currentChannel: RadioChannel;
  currentTrack: NowPlayingTrack;
  onAirShow: typeof ON_AIR_SHOW_INFO;
  comingNextShow: typeof COMING_NEXT_SHOW_INFO;
  volume: number;
  isMuted: boolean;
  currentTime: number;
  duration: number;
  votedSongIds: string[];
  
  // Actions
  togglePlay: () => void;
  playLiveStream: (channelId?: string) => void;
  playTrack: (track: Partial<NowPlayingTrack> & { title: string; artist: string; previewAudioUrl?: string }) => void;
  playPodcast: (podcast: { title: string; hostName: string; audioUrl: string; coverImage: string }) => void;
  setChannel: (channel: RadioChannel) => void;
  setVolumeLevel: (vol: number) => void;
  toggleMute: () => void;
  seekTo: (timeInSeconds: number) => void;
  voteSong: (songId: string) => void;
  nextTrack: () => void;
  prevTrack: () => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const AudioProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [playbackMode, setPlaybackMode] = useState<PlaybackMode>('live-radio');
  const [currentChannel, setCurrentChannel] = useState<RadioChannel>(RADIO_CHANNELS[0]);
  const [currentTrack, setCurrentTrack] = useState<NowPlayingTrack>(CURRENT_NOW_PLAYING);
  const [onAirShow] = useState(ON_AIR_SHOW_INFO);
  const [comingNextShow] = useState(COMING_NEXT_SHOW_INFO);
  const [volume, setVolume] = useState<number>(() => {
    const saved = localStorage.getItem('wave_player_volume');
    return saved !== null ? parseFloat(saved) : 0.85;
  });
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(245);
  const [votedSongIds, setVotedSongIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('wave_voted_songs');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Initialize HTML5 Audio instance
  useEffect(() => {
    const audio = new Audio();
    audio.preload = 'none';
    audio.volume = isMuted ? 0 : volume;

    audio.onwaiting = () => setIsLoading(true);
    audio.onplaying = () => {
      setIsLoading(false);
      setIsPlaying(true);
    };
    audio.onpause = () => setIsPlaying(false);
    audio.ontimeupdate = () => {
      if (audio.duration && !isNaN(audio.duration)) {
        setCurrentTime(audio.currentTime);
        setDuration(audio.duration);
      }
    };
    audio.onended = () => {
      setIsPlaying(false);
      nextTrack();
    };
    audio.onerror = () => {
      setIsLoading(false);
      setIsPlaying(false);
    };

    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.src = '';
    };
  }, []);

  // Update volume
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
    localStorage.setItem('wave_player_volume', volume.toString());
  }, [volume, isMuted]);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      // If no src or stopped, load current mode source
      if (!audioRef.current.src || audioRef.current.src === '') {
        const src = playbackMode === 'live-radio' ? currentChannel.streamUrl : (currentTrack.previewAudioUrl || currentChannel.streamUrl);
        audioRef.current.src = src;
      }
      setIsLoading(true);
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
          setIsLoading(false);
        })
        .catch(() => {
          // Fallback simulation for live stream preview if audio file is blocked
          setIsLoading(false);
          setIsPlaying(true);
        });
    }
  };

  const playLiveStream = (channelId?: string) => {
    const targetChannel = channelId 
      ? RADIO_CHANNELS.find(c => c.id === channelId) || RADIO_CHANNELS[0] 
      : currentChannel;
    
    setCurrentChannel(targetChannel);
    setPlaybackMode('live-radio');
    setCurrentTrack(CURRENT_NOW_PLAYING);

    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = targetChannel.streamUrl;
      setIsLoading(true);
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
          setIsLoading(false);
        })
        .catch(() => {
          setIsLoading(false);
          setIsPlaying(true);
        });
    }
  };

  const playTrack = (track: Partial<NowPlayingTrack> & { title: string; artist: string; previewAudioUrl?: string }) => {
    setPlaybackMode('track-preview');
    const newTrack: NowPlayingTrack = {
      id: track.id || `track-${Date.now()}`,
      title: track.title,
      artist: track.artist,
      coverArt: track.coverArt || CURRENT_NOW_PLAYING.coverArt,
      duration: track.duration || 210,
      genre: track.genre || 'Hit Music',
      previewAudioUrl: track.previewAudioUrl || 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
      votes: track.votes || 0,
      spotifyUrl: track.spotifyUrl,
      appleMusicUrl: track.appleMusicUrl,
    };
    setCurrentTrack(newTrack);

    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = newTrack.previewAudioUrl || '';
      setIsLoading(true);
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
          setIsLoading(false);
        })
        .catch(() => {
          setIsLoading(false);
          setIsPlaying(true);
        });
    }
  };

  const playPodcast = (podcast: { title: string; hostName: string; audioUrl: string; coverImage: string }) => {
    setPlaybackMode('podcast');
    const newTrack: NowPlayingTrack = {
      id: `pod-${Date.now()}`,
      title: podcast.title,
      artist: podcast.hostName,
      coverArt: podcast.coverImage,
      duration: 2400,
      genre: 'Podcast',
      previewAudioUrl: podcast.audioUrl,
      votes: 120,
    };
    setCurrentTrack(newTrack);

    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = podcast.audioUrl;
      setIsLoading(true);
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
          setIsLoading(false);
        })
        .catch(() => {
          setIsLoading(false);
          setIsPlaying(true);
        });
    }
  };

  const setChannel = (channel: RadioChannel) => {
    setCurrentChannel(channel);
    if (isPlaying && playbackMode === 'live-radio') {
      playLiveStream(channel.id);
    }
  };

  const setVolumeLevel = (vol: number) => {
    const clamped = Math.max(0, Math.min(1, vol));
    setVolume(clamped);
    if (clamped > 0 && isMuted) {
      setIsMuted(false);
    }
  };

  const toggleMute = () => {
    setIsMuted(prev => !prev);
  };

  const seekTo = (timeInSeconds: number) => {
    if (audioRef.current && playbackMode !== 'live-radio') {
      audioRef.current.currentTime = timeInSeconds;
      setCurrentTime(timeInSeconds);
    }
  };

  const voteSong = (songId: string) => {
    if (votedSongIds.includes(songId)) return;
    const updated = [...votedSongIds, songId];
    setVotedSongIds(updated);
    localStorage.setItem('wave_voted_songs', JSON.stringify(updated));
  };

  const nextTrack = () => {
    const currentIndex = TOP_CHART_SONGS.findIndex(s => s.title === currentTrack.title);
    const nextSong = TOP_CHART_SONGS[(currentIndex + 1) % TOP_CHART_SONGS.length];
    playTrack(nextSong);
  };

  const prevTrack = () => {
    const currentIndex = TOP_CHART_SONGS.findIndex(s => s.title === currentTrack.title);
    const prevSong = TOP_CHART_SONGS[(currentIndex - 1 + TOP_CHART_SONGS.length) % TOP_CHART_SONGS.length];
    playTrack(prevSong);
  };

  return (
    <AudioContext.Provider
      value={{
        isPlaying,
        isLoading,
        playbackMode,
        currentChannel,
        currentTrack,
        onAirShow,
        comingNextShow,
        volume,
        isMuted,
        currentTime,
        duration,
        votedSongIds,
        togglePlay,
        playLiveStream,
        playTrack,
        playPodcast,
        setChannel,
        setVolumeLevel,
        toggleMute,
        seekTo,
        voteSong,
        nextTrack,
        prevTrack,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
};
