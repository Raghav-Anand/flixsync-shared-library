import { describe, it, expect } from 'vitest';
import type {
  Movie,
  ExternalRating,
  MovieStreamingAvailability,
  MovieSearchResult,
  MovieSearchRequest
} from '../lib/movie';

describe('Movie Types', () => {
  describe('Movie interface', () => {
    it('should have all required properties', () => {
      const mockMovie: Movie = {
        id: 'movie-123',
        title: 'The Matrix',
        originalTitle: 'The Matrix',
        year: 1999,
        releaseDate: new Date('1999-03-31'),
        runtime: 136,
        plot: 'A computer programmer discovers reality is a simulation.',
        genres: ['Action', 'Sci-Fi'],
        director: 'The Wachowskis',
        writers: ['The Wachowskis'],
        actors: ['Keanu Reeves', 'Laurence Fishburne'],
        language: 'English',
        country: 'USA',
        awards: 'Won 4 Oscars',
        poster: 'https://example.com/matrix-poster.jpg',
        backdrop: 'https://example.com/matrix-backdrop.jpg',
        trailerUrl: 'https://youtube.com/watch?v=matrix',
        ratings: [],
        streamingAvailability: [],
        createdAt: new Date(),
        updatedAt: new Date()
      };

      expect(mockMovie.title).toBe('The Matrix');
      expect(mockMovie.year).toBe(1999);
      expect(mockMovie.genres).toContain('Action');
      expect(mockMovie.runtime).toBe(136);
    });

    it('should allow optional properties to be undefined', () => {
      const minimalMovie: Movie = {
        id: 'movie-456',
        title: 'Unknown Movie',
        year: 2023,
        releaseDate: new Date(),
        genres: ['Drama'],
        language: 'English',
        country: 'USA',
        ratings: [],
        streamingAvailability: [],
        createdAt: new Date(),
        updatedAt: new Date()
      };

      expect(minimalMovie.title).toBe('Unknown Movie');
      expect(minimalMovie.imdbId).toBeUndefined();
      expect(minimalMovie.plot).toBeUndefined();
      expect(minimalMovie.director).toBeUndefined();
    });
  });

  describe('ExternalRating interface', () => {
    it('should validate rating sources and values', () => {
      const imdbRating: ExternalRating = {
        source: 'imdb',
        value: 8.7,
        maxValue: 10,
        count: 1500000
      };

      const rtRating: ExternalRating = {
        source: 'rotten_tomatoes',
        value: 88,
        maxValue: 100
      };

      expect(imdbRating.source).toBe('imdb');
      expect(imdbRating.value).toBe(8.7);
      expect(imdbRating.maxValue).toBe(10);
      expect(rtRating.count).toBeUndefined();
    });
  });

  describe('MovieStreamingAvailability interface', () => {
    it('should handle different streaming types', () => {
      const subscriptionStream: MovieStreamingAvailability = {
        serviceId: 'netflix',
        serviceName: 'Netflix',
        region: 'US',
        streamingType: 'subscription',
        quality: 'HD',
        lastChecked: new Date()
      };

      const rentalStream: MovieStreamingAvailability = {
        serviceId: 'amazon',
        serviceName: 'Amazon Prime Video',
        region: 'US',
        streamingType: 'rent',
        price: 3.99,
        currency: 'USD',
        quality: '4K',
        url: 'https://amazon.com/rent/movie',
        lastChecked: new Date()
      };

      expect(subscriptionStream.streamingType).toBe('subscription');
      expect(subscriptionStream.price).toBeUndefined();
      expect(rentalStream.streamingType).toBe('rent');
      expect(rentalStream.price).toBe(3.99);
    });
  });

  describe('MovieSearchRequest interface', () => {
    it('should validate search parameters', () => {
      const basicSearch: MovieSearchRequest = {
        query: 'matrix'
      };

      const advancedSearch: MovieSearchRequest = {
        query: 'matrix',
        year: 1999,
        type: 'movie',
        page: 1,
        limit: 20
      };

      expect(basicSearch.query).toBe('matrix');
      expect(basicSearch.year).toBeUndefined();
      expect(advancedSearch.type).toBe('movie');
      expect(advancedSearch.limit).toBe(20);
    });
  });

  describe('MovieSearchResult interface', () => {
    it('should have required search result properties', () => {
      const searchResult: MovieSearchResult = {
        id: 'movie-789',
        title: 'The Matrix',
        year: 1999,
        type: 'movie'
      };

      expect(searchResult.id).toBe('movie-789');
      expect(searchResult.title).toBe('The Matrix');
      expect(searchResult.type).toBe('movie');
      expect(searchResult.poster).toBeUndefined();
    });
  });
});