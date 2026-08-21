export type RankMovement = 'up' | 'down' | 'same' | 'new';

export interface ChartSong {
  rank: number;
  lastWeekRank: number;
  peakRank: number;
  weeksOnChart: number;
  movement: RankMovement;
  movementCount: number; // e.g. +2, -1, 0
  id: string;
  title: string;
  artist: string;
  featuredArtist?: string;
  album: string;
  coverArt: string;
  votes: number;
  previewAudioUrl: string;
  spotifyUrl: string;
  appleMusicUrl: string;
  lyricsSnippet?: string;
  genre: string;
}

export interface RadioChart {
  id: string;
  title: string;
  description: string;
  updatedDate: string;
  coverImage: string;
  sponsor?: string;
  songs: ChartSong[];
}
