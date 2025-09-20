# @flixsync/types

Shared TypeScript types and interfaces for the FlixSync Platform.

## Installation

```bash
npm install @flixsync/types
```

## Usage

```typescript
import { User, Movie, Rating, GroupSession } from '@flixsync/types';

// Use the types in your TypeScript project
const user: User = {
  id: 'user-123',
  email: 'user@example.com',
  username: 'moviefan',
  // ... other properties
};
```

## Available Types

### User Types
- `User` - Complete user profile with preferences
- `UserProfile` - User's personal information
- `UserPreferences` - User settings and privacy preferences
- `CreateUserRequest` - Request payload for user creation
- `UpdateUserRequest` - Request payload for user updates
- `LoginRequest` - Login credentials
- `AuthResponse` - Authentication response with JWT tokens

### Movie Types
- `Movie` - Complete movie information with metadata
- `ExternalRating` - Ratings from external sources (IMDB, TMDB, etc.)
- `MovieStreamingAvailability` - Streaming service availability
- `MovieSearchResult` - Search result items
- `MovieSearchRequest` - Search query parameters

### Rating Types
- `Rating` - User movie ratings and reviews
- `CreateRatingRequest` - Request to create a new rating
- `UpdateRatingRequest` - Request to update existing rating
- `RatingStats` - Aggregated rating statistics
- `UserRatingStats` - User-specific rating analytics

### Group Types
- `GroupSession` - Group movie session management
- `GroupMember` - Group member information and preferences
- `GroupSettings` - Group configuration and rules
- `CreateGroupRequest` - Request to create a new group
- `GroupRecommendation` - Group-based movie recommendations

### Recommendation Types
- `Recommendation` - Individual or group recommendations
- `RecommendationReason` - Explanation for recommendations
- `RecommendationRequest` - Request parameters for recommendations
- `PersonalizedRecommendation` - User-specific recommendations
- `GroupRecommendationResult` - Group consensus recommendations

### Streaming Types
- `StreamingService` - Streaming platform information
- `StreamingAvailability` - Movie availability on platforms
- `UserStreamingSubscription` - User's active subscriptions
- `StreamingCoverageReport` - Availability analysis

### Common Types
- `ApiResponse<T>` - Standard API response wrapper
- `PaginatedResponse<T>` - Paginated API responses
- `ApiError` - Error response format
- `HealthCheck` - Service health monitoring
- `ValidationError` - Field validation errors
- `AuditLog` - Action tracking and logging

## Development

```bash
# Install dependencies
npm install

# Build the library
npm run build

# Run tests
npm test

# Run tests with coverage
npm run test:coverage

# Watch for changes
npm run watch
```

## License

MIT