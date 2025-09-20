export interface StreamingService {
  id: string;
  name: string;
  displayName: string;
  logo?: string;
  website: string;
  regions: string[];
  tiers: StreamingTier[];
  features: StreamingFeature[];
  apiIntegration?: StreamingApiConfig;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface StreamingTier {
  id: string;
  name: string;
  price: number;
  currency: string;
  period: 'monthly' | 'yearly';
  features: string[];
  adSupported: boolean;
  maxQuality: string;
  simultaneousStreams: number;
}

export interface StreamingFeature {
  name: string;
  description: string;
  category: 'video' | 'audio' | 'content' | 'social' | 'device';
}

export interface StreamingApiConfig {
  provider: 'justwatch' | 'watchmode' | 'custom';
  apiKey?: string;
  baseUrl: string;
  rateLimits: {
    requestsPerHour: number;
    requestsPerDay: number;
  };
  lastUpdated: Date;
}

export interface StreamingAvailability {
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

export interface UserStreamingSubscription {
  userId: string;
  serviceId: string;
  tierId?: string;
  isActive: boolean;
  startDate: Date;
  endDate?: Date;
  autoRenew: boolean;
  region: string;
}

export interface StreamingAvailabilityRequest {
  movieId?: string;
  movieIds?: string[];
  serviceIds?: string[];
  region?: string;
  streamingTypes?: ('subscription' | 'rent' | 'buy' | 'free')[];
}

export interface StreamingCoverageReport {
  userId?: string;
  groupId?: string;
  totalMovies: number;
  availableMovies: number;
  coverage: number;
  serviceBreakdown: {
    serviceId: string;
    serviceName: string;
    availableMovies: number;
    coverage: number;
  }[];
  recommendations: {
    suggestedServices: string[];
    potentialMovies: number;
    costBenefit: number;
  };
}