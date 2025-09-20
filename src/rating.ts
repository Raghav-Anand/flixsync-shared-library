export interface Rating {
  id: string;
  userId: string;
  movieId: string;
  rating: number;
  review?: string;
  tags?: string[];
  watchDate?: Date;
  rewatchCount?: number;
  isFavorite: boolean;
  isWatchlist: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateRatingRequest {
  movieId: string;
  rating: number;
  review?: string;
  tags?: string[];
  watchDate?: Date;
  isFavorite?: boolean;
  isWatchlist?: boolean;
}

export interface UpdateRatingRequest {
  rating?: number;
  review?: string;
  tags?: string[];
  watchDate?: Date;
  rewatchCount?: number;
  isFavorite?: boolean;
  isWatchlist?: boolean;
}

export interface RatingStats {
  totalRatings: number;
  averageRating: number;
  distribution: { [rating: number]: number };
  favoriteCount: number;
  watchlistCount: number;
}

export interface UserRatingStats {
  totalMoviesRated: number;
  averageRating: number;
  favoriteGenres: { genre: string; count: number; avgRating: number }[];
  ratingHistory: { month: string; count: number; avgRating: number }[];
}