export interface Movie {
  id: string;
  imdbId?: string;
  tmdbId?: string;
  title: string;
  originalTitle?: string;
  year: number;
  releaseDate: Date;
  runtime?: number;
  plot?: string;
  genres: string[];
  director?: string;
  writers?: string[];
  actors?: string[];
  language: string;
  country: string;
  awards?: string;
  poster?: string;
  backdrop?: string;
  trailerUrl?: string;
  ratings: ExternalRating[];
  streamingAvailability: MovieStreamingAvailability[];
  createdAt: Date;
  updatedAt: Date;
}

export interface ExternalRating {
  source: 'imdb' | 'tmdb' | 'rotten_tomatoes' | 'metacritic';
  value: number;
  maxValue: number;
  count?: number;
}

export interface MovieStreamingAvailability {
  serviceId: string;
  serviceName: string;
  region: string;
  streamingType: 'subscription' | 'rent' | 'buy' | 'free';
  price?: number;
  currency?: string;
  quality?: string;
  url?: string;
  lastChecked: Date;
}

export interface MovieSearchResult {
  id: string;
  title: string;
  year: number;
  poster?: string;
  plot?: string;
  type: 'movie' | 'series' | 'episode';
}

export interface MovieSearchRequest {
  query: string;
  year?: number;
  type?: 'movie' | 'series' | 'episode';
  page?: number;
  limit?: number;
}