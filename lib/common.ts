export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: ApiError;
  metadata?: ResponseMetadata;
}

export interface ApiError {
  code: string;
  message: string;
  details?: any;
  timestamp: Date;
  requestId?: string;
}

export interface ResponseMetadata {
  page?: number;
  limit?: number;
  total?: number;
  hasNext?: boolean;
  hasPrevious?: boolean;
  requestId: string;
  executionTime: number;
}

export interface PaginationRequest {
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  metadata: ResponseMetadata & {
    page: number;
    limit: number;
    total: number;
    hasNext: boolean;
    hasPrevious: boolean;
  };
}

export interface ValidationError {
  field: string;
  message: string;
  code: string;
  value?: any;
}

export interface HealthCheck {
  service: string;
  status: 'healthy' | 'degraded' | 'unhealthy';
  timestamp: Date;
  version: string;
  uptime: number;
  dependencies: DependencyHealth[];
  metrics?: ServiceMetrics;
}

export interface DependencyHealth {
  name: string;
  status: 'healthy' | 'degraded' | 'unhealthy';
  responseTime?: number;
  lastChecked: Date;
  error?: string;
}

export interface ServiceMetrics {
  requestCount: number;
  averageResponseTime: number;
  errorRate: number;
  memoryUsage: number;
  cpuUsage: number;
}

export interface AuditLog {
  id: string;
  userId?: string;
  action: string;
  resource: string;
  resourceId?: string;
  changes?: any;
  ipAddress?: string;
  userAgent?: string;
  timestamp: Date;
  sessionId?: string;
}

export type DatabaseEntity = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
};

export interface CacheConfig {
  ttl: number;
  refreshThreshold?: number;
  maxSize?: number;
  compressionEnabled?: boolean;
}