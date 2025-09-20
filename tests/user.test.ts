import { describe, it, expect } from 'vitest';
import type {
  User,
  UserProfile,
  UserPreferences,
  CreateUserRequest,
  AuthResponse
} from '../lib/user';

describe('User Types', () => {
  describe('User interface', () => {
    it('should have all required properties', () => {
      const mockUser: User = {
        id: 'user-123',
        email: 'test@example.com',
        username: 'testuser',
        passwordHash: 'hashed-password',
        profile: {
          favoriteGenres: ['Action', 'Comedy']
        },
        preferences: {
          language: 'en',
          region: 'US',
          adultContent: false,
          notifications: {
            newRecommendations: true,
            groupInvites: true,
            movieUpdates: false,
            email: true,
            push: false
          },
          privacy: {
            profileVisibility: 'public',
            ratingsVisibility: 'friends',
            allowGroupInvites: true
          }
        },
        streamingSubscriptions: [],
        createdAt: new Date(),
        updatedAt: new Date()
      };

      expect(mockUser.id).toBe('user-123');
      expect(mockUser.email).toBe('test@example.com');
      expect(mockUser.profile.favoriteGenres).toContain('Action');
      expect(mockUser.preferences.language).toBe('en');
    });
  });

  describe('UserProfile interface', () => {
    it('should allow optional properties', () => {
      const minimalProfile: UserProfile = {
        favoriteGenres: ['Drama']
      };

      const fullProfile: UserProfile = {
        firstName: 'John',
        lastName: 'Doe',
        avatar: 'https://example.com/avatar.jpg',
        dateOfBirth: new Date('1990-01-01'),
        favoriteGenres: ['Drama', 'Thriller'],
        bio: 'Movie enthusiast'
      };

      expect(minimalProfile.favoriteGenres).toHaveLength(1);
      expect(fullProfile.firstName).toBe('John');
      expect(fullProfile.bio).toBe('Movie enthusiast');
    });
  });

  describe('CreateUserRequest interface', () => {
    it('should validate required fields', () => {
      const createRequest: CreateUserRequest = {
        email: 'newuser@example.com',
        username: 'newuser',
        password: 'securepassword123'
      };

      expect(createRequest.email).toBe('newuser@example.com');
      expect(createRequest.username).toBe('newuser');
      expect(createRequest.password).toBe('securepassword123');
    });

    it('should allow optional profile and preferences', () => {
      const createRequestWithProfile: CreateUserRequest = {
        email: 'newuser@example.com',
        username: 'newuser',
        password: 'securepassword123',
        profile: {
          firstName: 'Jane',
          favoriteGenres: ['Comedy']
        },
        preferences: {
          language: 'es',
          region: 'ES',
          adultContent: true
        }
      };

      expect(createRequestWithProfile.profile?.firstName).toBe('Jane');
      expect(createRequestWithProfile.preferences?.language).toBe('es');
    });
  });

  describe('AuthResponse interface', () => {
    it('should exclude passwordHash from user object', () => {
      const authResponse: AuthResponse = {
        user: {
          id: 'user-123',
          email: 'test@example.com',
          username: 'testuser',
          profile: {
            favoriteGenres: ['Action']
          },
          preferences: {
            language: 'en',
            region: 'US',
            adultContent: false,
            notifications: {
              newRecommendations: true,
              groupInvites: true,
              movieUpdates: false,
              email: true,
              push: false
            },
            privacy: {
              profileVisibility: 'public',
              ratingsVisibility: 'friends',
              allowGroupInvites: true
            }
          },
          streamingSubscriptions: [],
          createdAt: new Date(),
          updatedAt: new Date()
        },
        token: 'jwt-token',
        refreshToken: 'refresh-token'
      };

      expect(authResponse.user).not.toHaveProperty('passwordHash');
      expect(authResponse.token).toBe('jwt-token');
      expect(authResponse.refreshToken).toBe('refresh-token');
    });
  });
});