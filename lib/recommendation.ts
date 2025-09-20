import { StreamingAvailability } from './streaming';
import { GroupRecommendation } from './group';

export interface Recommendation {
  id: string;
  userId?: string;
  groupId?: string;
  movieId: string;
  score: number;
  confidence: number;
  reasons: RecommendationReason[];
  algorithm: string;
  metadata: RecommendationMetadata;
  streamingAvailability?: StreamingAvailability[];
  createdAt: Date;
  expiresAt?: Date;
}

export interface RecommendationReason {
  type: 'genre_match' | 'similar_users' | 'director_match' | 'actor_match' | 'rating_pattern' | 'group_consensus';
  explanation: string;
  weight: number;
  data?: any;
}

export interface RecommendationMetadata {
  modelVersion: string;
  trainingData: {
    userCount: number;
    ratingCount: number;
    lastUpdated: Date;
  };
  features: string[];
  parameters: { [key: string]: any };
}

export interface RecommendationRequest {
  userId?: string;
  groupId?: string;
  filters?: RecommendationFilters;
  limit?: number;
  includeWatched?: boolean;
  algorithm?: string;
}

export interface RecommendationFilters {
  genres?: string[];
  excludeGenres?: string[];
  minYear?: number;
  maxYear?: number;
  minRating?: number;
  maxRuntime?: number;
  streamingServices?: string[];
  language?: string;
  country?: string;
}

export interface PersonalizedRecommendation extends Recommendation {
  userSimilarity?: UserSimilarity[];
  ratingPrediction: number;
  genrePreferences: { genre: string; score: number }[];
}

export interface GroupRecommendationResult {
  recommendations: GroupRecommendation[];
  consensus: {
    agreement: number;
    conflicts: ConflictReport[];
  };
  memberPreferences: {
    userId: string;
    topRecommendations: string[];
    preferences: RecommendationFilters;
  }[];
}

export interface UserSimilarity {
  userId: string;
  username: string;
  similarity: number;
  commonRatings: number;
  avgRatingDiff: number;
}

export interface ConflictReport {
  type: 'genre' | 'rating' | 'streaming' | 'runtime';
  description: string;
  affectedMembers: string[];
  suggestions: string[];
}