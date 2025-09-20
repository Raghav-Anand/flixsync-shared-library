import { describe, it, expect } from 'vitest';
import type {
  GroupSession,
  GroupMember,
  GroupSettings,
  CreateGroupRequest,
  GroupRecommendation
} from '../src/group';

describe('Group Types', () => {
  describe('GroupSession interface', () => {
    it('should have all required properties', () => {
      const mockGroup: GroupSession = {
        id: 'group-123',
        name: 'Movie Night Crew',
        description: 'Weekly movie night with friends',
        createdBy: 'user-456',
        members: [],
        settings: {
          isPrivate: false,
          requireApproval: true,
          votingMethod: 'majority',
          autoProgress: false,
          maxMembers: 10,
          allowChatting: true,
          streamingFilterMode: 'intersection'
        },
        movieQueue: [],
        history: [],
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date()
      };

      expect(mockGroup.name).toBe('Movie Night Crew');
      expect(mockGroup.status).toBe('active');
      expect(mockGroup.settings.votingMethod).toBe('majority');
      expect(mockGroup.settings.maxMembers).toBe(10);
    });
  });

  describe('GroupMember interface', () => {
    it('should validate member properties', () => {
      const member: GroupMember = {
        userId: 'user-789',
        username: 'moviefan',
        avatar: 'https://example.com/avatar.jpg',
        role: 'member',
        joinedAt: new Date(),
        isActive: true,
        preferences: {
          voteWeight: 1.0,
          genrePreferences: [
            { genre: 'Action', weight: 0.8 },
            { genre: 'Comedy', weight: 0.6 }
          ],
          streamingServices: ['netflix', 'hulu']
        }
      };

      expect(member.role).toBe('member');
      expect(member.isActive).toBe(true);
      expect(member.preferences?.voteWeight).toBe(1.0);
      expect(member.preferences?.genrePreferences).toHaveLength(2);
    });

    it('should allow admin role', () => {
      const admin: GroupMember = {
        userId: 'user-456',
        username: 'groupleader',
        role: 'admin',
        joinedAt: new Date(),
        isActive: true
      };

      expect(admin.role).toBe('admin');
      expect(admin.preferences).toBeUndefined();
    });
  });

  describe('GroupSettings interface', () => {
    it('should validate different voting methods', () => {
      const majoritySettings: GroupSettings = {
        isPrivate: true,
        requireApproval: false,
        votingMethod: 'majority',
        autoProgress: true,
        maxMembers: 5,
        allowChatting: false,
        streamingFilterMode: 'union'
      };

      const unanimousSettings: GroupSettings = {
        isPrivate: false,
        requireApproval: true,
        votingMethod: 'unanimous',
        autoProgress: false,
        maxMembers: 8,
        allowChatting: true,
        streamingFilterMode: 'intersection'
      };

      expect(majoritySettings.votingMethod).toBe('majority');
      expect(unanimousSettings.votingMethod).toBe('unanimous');
      expect(majoritySettings.streamingFilterMode).toBe('union');
      expect(unanimousSettings.streamingFilterMode).toBe('intersection');
    });
  });

  describe('CreateGroupRequest interface', () => {
    it('should validate group creation', () => {
      const createRequest: CreateGroupRequest = {
        name: 'New Movie Group'
      };

      expect(createRequest.name).toBe('New Movie Group');
      expect(createRequest.description).toBeUndefined();
      expect(createRequest.settings).toBeUndefined();
    });

    it('should allow optional properties', () => {
      const fullRequest: CreateGroupRequest = {
        name: 'Advanced Movie Group',
        description: 'For serious movie enthusiasts',
        settings: {
          isPrivate: true,
          maxMembers: 15
        },
        initialMembers: ['user-123', 'user-456']
      };

      expect(fullRequest.description).toBe('For serious movie enthusiasts');
      expect(fullRequest.settings?.isPrivate).toBe(true);
      expect(fullRequest.initialMembers).toHaveLength(2);
    });
  });

  describe('GroupRecommendation interface', () => {
    it('should provide recommendation details', () => {
      const recommendation: GroupRecommendation = {
        movieId: 'movie-123',
        score: 0.85,
        reasons: ['High member ratings', 'Popular genre'],
        memberScores: [
          { userId: 'user-1', score: 0.9 },
          { userId: 'user-2', score: 0.8 }
        ],
        streamingAvailability: {
          available: true,
          services: ['netflix', 'hulu'],
          coverage: 0.75
        }
      };

      expect(recommendation.score).toBe(0.85);
      expect(recommendation.reasons).toContain('High member ratings');
      expect(recommendation.memberScores).toHaveLength(2);
      expect(recommendation.streamingAvailability.available).toBe(true);
      expect(recommendation.streamingAvailability.coverage).toBe(0.75);
    });
  });
});