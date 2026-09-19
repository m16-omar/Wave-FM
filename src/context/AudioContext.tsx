import React, { createContext, useContext, useState, useRef, useEffect, useCallback, ReactNode } from 'react';
import { RadioChannel, NowPlayingTrack } from '../types/radio';
import { RADIO_CHANNELS, CURRENT_NOW_PLAYING, ON_AIR_SHOW_INFO, COMING_NEXT_SHOW_INFO, getCurrentLiveTrack } from '../data/radio';
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
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [playbackMode, setPlaybackMode] = useState<PlaybackMode>('live-radio');
  const [currentChannel, setCurrentChannel] = useState<RadioChannel>(RADIO_CHANNELS[0]);
  const [currentTrack, setCurrentTrack] = useState<NowPlayingTrack>(() => getCurrentLiveTrack());
  const [onAirShow] = useState(ON_AIR_SHOW_INFO);
  const [comingNextShow] = useState(COMING_NEXT_SHOW_INFO);
  const [volume, setVolumeState] = useState<number>(() => {
    const saved = localStorage.getItem('wave_player_volume');
    return saved !== null ? parseFloat(saved) : 0.85;
  });
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [votedSongIds, setVotedSongIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('wave_voted_songs');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Keep live track updated to current active broadcast slot
  useEffect(() => {
    if (playbackMode === 'live-radio') {
      setCurrentTrack(getCurrentLiveTrack());
    }

    const interval = setInterval(() => {
      if (playbackMode === 'live-radio') {
        const live = getCurrentLiveTrack();
        setCurrentTrack(prev => {
          if (prev.id !== live.id || prev.title !== live.title) {
            return live;
          }
          return prev;
        });
      }
    }, 15000);

    return () => clearInterval(interval);
  }, [playbackMode]);

  // Initialize audio element and auto-stream starter matching Area FM
  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio();
      audioRef.current.crossOrigin = "anonymous";
    }
    const audio = audioRef.current;
    audio.src = RADIO_CHANNELS[0].streamUrl;
    audio.volume = 0.85;
    audio.preload = 'auto';

    const handleTimeUpdate = () => setCurrentTime(audio.currentTime);
    const handleLoadedMetadata = () => setDuration(audio.duration || 0);
    const handleWaiting = () => setIsLoading(true);
    const handlePlaying = () => {
      setIsLoading(false);
      setIsPlaying(true);
    };
    const handlePause = () => {
      setIsLoading(false);
      setIsPlaying(false);
    };
    const handleEnded = () => {
      setIsPlaying(false);
      setIsLoading(false);
    };
    const handleError = (e: any) => {
      console.warn('Audio streaming notice/error:', e);
      setIsLoading(false);
    };

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('waiting', handleWaiting);
    audio.addEventListener('playing', handlePlaying);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('error', handleError);

    // Auto-stream starter: attempts direct unmuted play first, falls back to muted stream + unlock on first gesture
    const unlockUserAudio = () => {
      if (audio.paused || audio.muted) {
        audio.muted = false;
        audio.volume = 0.85;
        audio.play()
          .then(() => {
            setIsPlaying(true);
            setIsMuted(false);
          })
          .catch((err) => console.log('Audio unlock notice:', err));
      }
      removeListeners();
    };

    const unlockEvents = ['click', 'touchstart', 'touchend', 'pointerdown', 'mousedown', 'keydown', 'scroll'];

    const addListeners = () => {
      unlockEvents.forEach(evt => {
        window.addEventListener(evt, unlockUserAudio, { once: true, capture: true, passive: true });
        document.addEventListener(evt, unlockUserAudio, { once: true, capture: true, passive: true });
      });
    };

    const removeListeners = () => {
      unlockEvents.forEach(evt => {
        window.removeEventListener(evt, unlockUserAudio, { capture: true });
        document.removeEventListener(evt, unlockUserAudio, { capture: true });
      });
    };

    // 1. Try immediate unmuted play
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          // If browser Autoplay policy blocks unmuted audio, start playing muted & immediately attach global gesture unlock
          audio.muted = true;
          audio.play()
            .then(() => {
              setIsPlaying(true);
              setIsMuted(true);
            })
            .catch(() => {});
          
          addListeners();
        });
    }

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('waiting', handleWaiting);
      audio.removeEventListener('playing', handlePlaying);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('error', handleError);
      removeListeners();
    };
  }, []);

  const togglePlay = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying && !audio.paused) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.muted = false;
      setIsMuted(false);
      audio.volume = volume;

      // Reload live stream to eliminate buffer delay
      if (playbackMode === 'live-radio') {
        audio.src = currentChannel.streamUrl;
        audio.load();
      } else if (!audio.src || audio.src === '') {
        audio.src = currentTrack.previewAudioUrl || currentChannel.streamUrl;
        audio.load();
      }
      setIsLoading(true);
      audio.play()
        .then(() => {
          setIsPlaying(true);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log('Audio play error:', err);
          setIsLoading(false);
        });
    }
  }, [isPlaying, playbackMode, currentTrack, currentChannel, volume]);

  const playLiveStream = useCallback((channelId?: string) => {
    const targetChannel = channelId 
      ? RADIO_CHANNELS.find(c => c.id === channelId) || RADIO_CHANNELS[0] 
      : currentChannel;
    
    setCurrentChannel(targetChannel);
    setPlaybackMode('live-radio');
    setCurrentTrack(getCurrentLiveTrack());

    const audio = audioRef.current;
    if (audio) {
      audio.pause();
      audio.muted = false;
      setIsMuted(false);
      audio.src = targetChannel.streamUrl;
      audio.load();
      setIsLoading(true);
      audio.play()
        .then(() => {
          setIsPlaying(true);
          setIsLoading(false);
        })
        .catch(err => {
          console.log('Live stream play error:', err);
          setIsLoading(false);
        });
    }
  }, [currentChannel]);

  const playTrack = useCallback((track: Partial<NowPlayingTrack> & { title: string; artist: string; previewAudioUrl?: string }) => {
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

    const audio = audioRef.current;
    if (audio) {
      audio.pause();
      audio.muted = false;
      setIsMuted(false);
      audio.src = newTrack.previewAudioUrl || '';
      audio.load();
      setIsLoading(true);
      audio.play()
        .then(() => {
          setIsPlaying(true);
          setIsLoading(false);
        })
        .catch(err => {
          console.log('Play track error:', err);
          setIsLoading(false);
        });
    }
  }, []);

  const playPodcast = useCallback((podcast: { title: string; hostName: string; audioUrl: string; coverImage: string }) => {
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

    const audio = audioRef.current;
    if (audio) {
      audio.pause();
      audio.muted = false;
      setIsMuted(false);
      audio.src = podcast.audioUrl;
      audio.load();
      setIsLoading(true);
      audio.play()
        .then(() => {
          setIsPlaying(true);
          setIsLoading(false);
        })
        .catch(err => {
          console.log('Play podcast error:', err);
          setIsLoading(false);
        });
    }
  }, []);

  const setChannel = (channel: RadioChannel) => {
    setCurrentChannel(channel);
    if (isPlaying && playbackMode === 'live-radio') {
      playLiveStream(channel.id);
    }
  };

  const setVolumeLevel = (val: number) => {
    const clamped = Math.max(0, Math.min(1, val));
    const audio = audioRef.current;
    if (audio) {
      audio.volume = clamped;
    }
    setVolumeState(clamped);
    if (clamped > 0) {
      if (audio) audio.muted = false;
      setIsMuted(false);
    }
    localStorage.setItem('wave_player_volume', clamped.toString());
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isMuted || audio.muted) {
      audio.muted = false;
      setIsMuted(false);
    } else {
      audio.muted = true;
      setIsMuted(true);
    }
  };

  const seekTo = (timeInSeconds: number) => {
    const audio = audioRef.current;
    if (audio && playbackMode !== 'live-radio' && isFinite(timeInSeconds)) {
      audio.currentTime = timeInSeconds;
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
