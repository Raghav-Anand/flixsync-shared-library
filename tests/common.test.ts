import { describe, it, expect } from 'vitest';
import type {
  ApiResponse,
  ApiError,
  PaginatedResponse,
  HealthCheck,
  ValidationError,
  AuditLog
} from '../src/common';

describe('Common Types', () => {
  describe('ApiResponse interface', () => {
    it('should handle successful responses', () => {
      const successResponse: ApiResponse<string> = {
        success: true,
        data: 'Hello World',
        metadata: {
          requestId: 'req-123',
          executionTime: 150
        }
      };

      expect(successResponse.success).toBe(true);
      expect(successResponse.data).toBe('Hello World');
      expect(successResponse.error).toBeUndefined();
      expect(successResponse.metadata?.requestId).toBe('req-123');
    });

    it('should handle error responses', () => {
      const errorResponse: ApiResponse = {
        success: false,
        error: {
          code: 'VALIDATION_ERROR',
          message: 'Invalid input provided',
          timestamp: new Date(),
          requestId: 'req-456'
        }
      };

      expect(errorResponse.success).toBe(false);
      expect(errorResponse.data).toBeUndefined();
      expect(errorResponse.error?.code).toBe('VALIDATION_ERROR');
    });
  });

  describe('PaginatedResponse interface', () => {
    it('should provide pagination metadata', () => {
      const paginatedResponse: PaginatedResponse<string> = {
        success: true,
        data: ['item1', 'item2', 'item3'],
        metadata: {
          page: 1,
          limit: 10,
          total: 25,
          hasNext: true,
          hasPrevious: false,
          requestId: 'req-789',
          executionTime: 200
        }
      };

      expect(paginatedResponse.data).toHaveLength(3);
      expect(paginatedResponse.metadata.total).toBe(25);
      expect(paginatedResponse.metadata.hasNext).toBe(true);
      expect(paginatedResponse.metadata.hasPrevious).toBe(false);
    });
  });

  describe('HealthCheck interface', () => {
    it('should provide service health information', () => {
      const healthCheck: HealthCheck = {
        service: 'user-service',
        status: 'healthy',
        timestamp: new Date(),
        version: '1.0.0',
        uptime: 86400,
        dependencies: [
          {
            name: 'database',
            status: 'healthy',
            responseTime: 50,
            lastChecked: new Date()
          },
          {
            name: 'cache',
            status: 'degraded',
            responseTime: 200,
            lastChecked: new Date(),
            error: 'High latency detected'
          }
        ],
        metrics: {
          requestCount: 1000,
          averageResponseTime: 150,
          errorRate: 0.02,
          memoryUsage: 75.5,
          cpuUsage: 45.2
        }
      };

      expect(healthCheck.service).toBe('user-service');
      expect(healthCheck.status).toBe('healthy');
      expect(healthCheck.dependencies).toHaveLength(2);
      expect(healthCheck.dependencies[1].status).toBe('degraded');
      expect(healthCheck.metrics?.errorRate).toBe(0.02);
    });
  });

  describe('ValidationError interface', () => {
    it('should provide field validation details', () => {
      const validationError: ValidationError = {
        field: 'email',
        message: 'Invalid email format',
        code: 'INVALID_FORMAT',
        value: 'invalid-email'
      };

      expect(validationError.field).toBe('email');
      expect(validationError.code).toBe('INVALID_FORMAT');
      expect(validationError.value).toBe('invalid-email');
    });
  });

  describe('AuditLog interface', () => {
    it('should track user actions', () => {
      const auditLog: AuditLog = {
        id: 'audit-123',
        userId: 'user-456',
        action: 'CREATE_RATING',
        resource: 'rating',
        resourceId: 'rating-789',
        changes: {
          rating: 4.5,
          movieId: 'movie-123'
        },
        ipAddress: '192.168.1.1',
        userAgent: 'Mozilla/5.0...',
        timestamp: new Date(),
        sessionId: 'session-abc'
      };

      expect(auditLog.action).toBe('CREATE_RATING');
      expect(auditLog.resource).toBe('rating');
      expect(auditLog.changes.rating).toBe(4.5);
      expect(auditLog.ipAddress).toBe('192.168.1.1');
    });
  });
});