import React, { createContext, useContext, useState, useRef, useEffect, ReactNode } from 'react';
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
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [playbackMode, setPlaybackMode] = useState<PlaybackMode>('live-radio');
  const [currentChannel, setCurrentChannel] = useState<RadioChannel>(RADIO_CHANNELS[0]);
  const [currentTrack, setCurrentTrack] = useState<NowPlayingTrack>(() => getCurrentLiveTrack());
  const [onAirShow] = useState(ON_AIR_SHOW_INFO);
  const [comingNextShow] = useState(COMING_NEXT_SHOW_INFO);
  const [volume, setVolume] = useState<number>(() => {
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

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const userPausedRef = useRef<boolean>(false);
  const autoplayAttemptedRef = useRef<boolean>(false);

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

  // Initialize HTML5 Audio event listeners and execute Autoplay on Launch
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = isMuted ? 0 : volume;

    const onWaiting = () => setIsLoading(true);
    const onPlaying = () => {
      setIsLoading(false);
      setIsPlaying(true);
    };
    const onPause = () => {
      setIsPlaying(false);
      setIsLoading(false);
    };
    const onTimeUpdate = () => {
      if (audio.duration && !isNaN(audio.duration)) {
        setCurrentTime(audio.currentTime);
        setDuration(audio.duration);
      }
    };
    const onEnded = () => {
      setIsPlaying(false);
      nextTrack();
    };
    const onError = () => {
      setIsLoading(false);
      setIsPlaying(false);
    };

    audio.addEventListener('waiting', onWaiting);
    audio.addEventListener('playing', onPlaying);
    audio.addEventListener('pause', onPause);
    audio.addEventListener('timeupdate', onTimeUpdate);
    audio.addEventListener('ended', onEnded);
    audio.addEventListener('error', onError);

    // Initial Live Stream Load & Bulletproof Autoplay Sequence
    if (!autoplayAttemptedRef.current) {
      autoplayAttemptedRef.current = true;
      audio.src = RADIO_CHANNELS[0].streamUrl;
      setIsLoading(true);

      // Attempt 1: Standard unmuted autoplay (allowed on desktop when user has interacted or MEI permits)
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
          setIsLoading(false);
        })
        .catch(() => {
          // Attempt 2: Muted autoplay (universally allowed by all browsers and mobile devices)
          audio.muted = true;
          audio
            .play()
            .then(() => {
              setIsPlaying(true);
              setIsLoading(false);
            })
            .catch(() => {
              setIsLoading(false);
              setIsPlaying(false);
            });

          // Unmute & start audio stream on the user's very first interaction anywhere on the site
          const handleFirstInteraction = () => {
            if (userPausedRef.current) return;
            audio.muted = false;
            audio.volume = volume;
            setIsMuted(false);
            
            if (audio.paused) {
              setIsLoading(true);
              audio
                .play()
                .then(() => {
                  setIsPlaying(true);
                  setIsLoading(false);
                })
                .catch(() => {
                  setIsLoading(false);
                });
            }
            cleanupListeners();
          };

          const cleanupListeners = () => {
            ['click', 'pointerdown', 'touchstart', 'touchend', 'keydown', 'scroll', 'wheel'].forEach(ev => {
              window.removeEventListener(ev, handleFirstInteraction, { capture: true });
              document.removeEventListener(ev, handleFirstInteraction, { capture: true });
            });
          };

          ['click', 'pointerdown', 'touchstart', 'touchend', 'keydown', 'scroll', 'wheel'].forEach(ev => {
            window.addEventListener(ev, handleFirstInteraction, { capture: true, once: true });
            document.addEventListener(ev, handleFirstInteraction, { capture: true, once: true });
          });
        });
    }

    return () => {
      audio.removeEventListener('waiting', onWaiting);
      audio.removeEventListener('playing', onPlaying);
      audio.removeEventListener('pause', onPause);
      audio.removeEventListener('timeupdate', onTimeUpdate);
      audio.removeEventListener('ended', onEnded);
      audio.removeEventListener('error', onError);
    };
  }, []);

  // Update volume & mute state on audio element
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
      audioRef.current.muted = isMuted;
    }
    localStorage.setItem('wave_player_volume', volume.toString());
  }, [volume, isMuted]);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      userPausedRef.current = true;
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      userPausedRef.current = false;
      audioRef.current.muted = false;
      setIsMuted(false);

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
          setIsLoading(false);
          setIsPlaying(false);
        });
    }
  };

  const playLiveStream = (channelId?: string) => {
    userPausedRef.current = false;
    const targetChannel = channelId 
      ? RADIO_CHANNELS.find(c => c.id === channelId) || RADIO_CHANNELS[0] 
      : currentChannel;
    
    setCurrentChannel(targetChannel);
    setPlaybackMode('live-radio');
    setCurrentTrack(getCurrentLiveTrack());

    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.muted = false;
      setIsMuted(false);
      audioRef.current.src = targetChannel.streamUrl;
      setIsLoading(true);
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
          setIsLoading(false);
        })
        .catch(() => {
          setIsLoading(false);
          setIsPlaying(false);
        });
    }
  };

  const playTrack = (track: Partial<NowPlayingTrack> & { title: string; artist: string; previewAudioUrl?: string }) => {
    setPlaybackMode('track-preview');
    userPausedRef.current = false;
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
      audioRef.current.muted = false;
      setIsMuted(false);
      audioRef.current.src = newTrack.previewAudioUrl || '';
      setIsLoading(true);
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
          setIsLoading(false);
        })
        .catch(() => {
          setIsLoading(false);
          setIsPlaying(false);
        });
    }
  };

  const playPodcast = (podcast: { title: string; hostName: string; audioUrl: string; coverImage: string }) => {
    setPlaybackMode('podcast');
    userPausedRef.current = false;
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
      audioRef.current.muted = false;
      setIsMuted(false);
      audioRef.current.src = podcast.audioUrl;
      setIsLoading(true);
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
          setIsLoading(false);
        })
        .catch(() => {
          setIsLoading(false);
          setIsPlaying(false);
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
      {/* Hidden audio element in DOM for rock-solid mobile & browser support */}
      <audio
        ref={audioRef}
        playsInline
        autoPlay
        preload="auto"
        className="hidden"
        aria-hidden="true"
      />
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
