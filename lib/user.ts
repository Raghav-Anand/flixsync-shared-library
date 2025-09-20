export interface User {
  id: string;
  email: string;
  username: string;
  passwordHash: string;
  profile: UserProfile;
  preferences: UserPreferences;
  streamingSubscriptions: StreamingSubscription[];
  createdAt: Date;
  updatedAt: Date;
}

export interface UserProfile {
  firstName?: string;
  lastName?: string;
  avatar?: string;
  dateOfBirth?: Date;
  favoriteGenres: string[];
  bio?: string;
}

export interface UserPreferences {
  language: string;
  region: string;
  adultContent: boolean;
  notifications: NotificationPreferences;
  privacy: PrivacySettings;
}

export interface NotificationPreferences {
  newRecommendations: boolean;
  groupInvites: boolean;
  movieUpdates: boolean;
  email: boolean;
  push: boolean;
}

export interface PrivacySettings {
  profileVisibility: 'public' | 'friends' | 'private';
  ratingsVisibility: 'public' | 'friends' | 'private';
  allowGroupInvites: boolean;
}

export interface StreamingSubscription {
  serviceId: string;
  serviceName: string;
  isActive: boolean;
  tier?: string;
  addedAt: Date;
}

export interface CreateUserRequest {
  email: string;
  username: string;
  password: string;
  profile?: Partial<UserProfile>;
  preferences?: Partial<UserPreferences>;
}

export interface UpdateUserRequest {
  profile?: Partial<UserProfile>;
  preferences?: Partial<UserPreferences>;
  streamingSubscriptions?: StreamingSubscription[];
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface AuthResponse {
  user: Omit<User, 'passwordHash'>;
  token: string;
  refreshToken: string;
}