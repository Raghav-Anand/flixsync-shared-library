import { describe, it, expect } from 'vitest';
import type {
  Rating,
  CreateRatingRequest,
  UpdateRatingRequest,
  RatingStats,
  UserRatingStats
} from '../lib/rating';

describe('Rating Types', () => {
  describe('Rating interface', () => {
    it('should have all required properties', () => {
      const mockRating: Rating = {
        id: 'rating-123',
        userId: 'user-456',
        movieId: 'movie-789',
        rating: 4.5,
        review: 'Great movie!',
        tags: ['action', 'must-watch'],
        watchDate: new Date('2023-12-01'),
        rewatchCount: 2,
        isFavorite: true,
        isWatchlist: false,
        createdAt: new Date(),
        updatedAt: new Date()
      };

      expect(mockRating.rating).toBe(4.5);
      expect(mockRating.isFavorite).toBe(true);
      expect(mockRating.tags).toContain('action');
      expect(mockRating.rewatchCount).toBe(2);
    });

    it('should allow optional properties', () => {
      const minimalRating: Rating = {
        id: 'rating-456',
        userId: 'user-789',
        movieId: 'movie-123',
        rating: 3.0,
        isFavorite: false,
        isWatchlist: true,
        createdAt: new Date(),
        updatedAt: new Date()
      };

      expect(minimalRating.rating).toBe(3.0);
      expect(minimalRating.review).toBeUndefined();
      expect(minimalRating.tags).toBeUndefined();
      expect(minimalRating.watchDate).toBeUndefined();
    });
  });

  describe('CreateRatingRequest interface', () => {
    it('should validate required fields', () => {
      const createRequest: CreateRatingRequest = {
        movieId: 'movie-123',
        rating: 4.0
      };

      expect(createRequest.movieId).toBe('movie-123');
      expect(createRequest.rating).toBe(4.0);
      expect(createRequest.review).toBeUndefined();
    });

    it('should allow optional fields', () => {
      const fullRequest: CreateRatingRequest = {
        movieId: 'movie-456',
        rating: 5.0,
        review: 'Masterpiece!',
        tags: ['favorite', 'rewatch'],
        watchDate: new Date(),
        isFavorite: true,
        isWatchlist: false
      };

      expect(fullRequest.review).toBe('Masterpiece!');
      expect(fullRequest.tags).toContain('favorite');
      expect(fullRequest.isFavorite).toBe(true);
    });
  });

  describe('UpdateRatingRequest interface', () => {
    it('should allow partial updates', () => {
      const updateRequest: UpdateRatingRequest = {
        rating: 4.5,
        isFavorite: true
      };

      expect(updateRequest.rating).toBe(4.5);
      expect(updateRequest.review).toBeUndefined();
      expect(updateRequest.isFavorite).toBe(true);
    });
  });

  describe('RatingStats interface', () => {
    it('should provide rating statistics', () => {
      const stats: RatingStats = {
        totalRatings: 1000,
        averageRating: 4.2,
        distribution: {
          1: 10,
          2: 25,
          3: 150,
          4: 400,
          5: 415
        },
        favoriteCount: 200,
        watchlistCount: 50
      };

      expect(stats.totalRatings).toBe(1000);
      expect(stats.averageRating).toBe(4.2);
      expect(stats.distribution[5]).toBe(415);
      expect(stats.favoriteCount).toBe(200);
    });
  });

  describe('UserRatingStats interface', () => {
    it('should provide user-specific statistics', () => {
      const userStats: UserRatingStats = {
        totalMoviesRated: 150,
        averageRating: 3.8,
        favoriteGenres: [
          { genre: 'Action', count: 40, avgRating: 4.1 },
          { genre: 'Drama', count: 35, avgRating: 4.3 },
          { genre: 'Comedy', count: 30, avgRating: 3.5 }
        ],
        ratingHistory: [
          { month: '2023-12', count: 15, avgRating: 4.0 },
          { month: '2023-11', count: 12, avgRating: 3.8 },
          { month: '2023-10', count: 18, avgRating: 3.9 }
        ]
      };

      expect(userStats.totalMoviesRated).toBe(150);
      expect(userStats.favoriteGenres).toHaveLength(3);
      expect(userStats.favoriteGenres[0].genre).toBe('Action');
      expect(userStats.ratingHistory[0].month).toBe('2023-12');
    });
  });
});