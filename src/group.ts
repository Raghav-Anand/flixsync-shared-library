export interface GroupSession {
  id: string;
  name: string;
  description?: string;
  createdBy: string;
  members: GroupMember[];
  settings: GroupSettings;
  currentActivity?: GroupActivity;
  movieQueue: QueuedMovie[];
  history: GroupSessionHistory[];
  status: 'active' | 'completed' | 'paused';
  createdAt: Date;
  updatedAt: Date;
}

export interface GroupMember {
  userId: string;
  username: string;
  avatar?: string;
  role: 'admin' | 'member';
  joinedAt: Date;
  isActive: boolean;
  preferences?: GroupMemberPreferences;
}

export interface GroupMemberPreferences {
  voteWeight: number;
  genrePreferences: { genre: string; weight: number }[];
  streamingServices: string[];
}

export interface GroupSettings {
  isPrivate: boolean;
  requireApproval: boolean;
  votingMethod: 'majority' | 'unanimous' | 'weighted';
  autoProgress: boolean;
  maxMembers: number;
  allowChatting: boolean;
  streamingFilterMode: 'intersection' | 'union';
}

export interface GroupActivity {
  type: 'voting' | 'discussing' | 'selecting';
  movieId?: string;
  startedAt: Date;
  expiresAt?: Date;
  votes?: GroupVote[];
}

export interface GroupVote {
  userId: string;
  movieId: string;
  vote: 'up' | 'down' | 'neutral';
  timestamp: Date;
}

export interface QueuedMovie {
  movieId: string;
  addedBy: string;
  addedAt: Date;
  votes: GroupVote[];
  priority: number;
  watched: boolean;
  watchedAt?: Date;
}

export interface GroupSessionHistory {
  movieId: string;
  watchedAt: Date;
  rating?: number;
  notes?: string;
  memberVotes: GroupVote[];
}

export interface CreateGroupRequest {
  name: string;
  description?: string;
  settings?: Partial<GroupSettings>;
  initialMembers?: string[];
}

export interface JoinGroupRequest {
  groupId: string;
  message?: string;
}

export interface GroupRecommendation {
  movieId: string;
  score: number;
  reasons: string[];
  memberScores: { userId: string; score: number }[];
  streamingAvailability: {
    available: boolean;
    services: string[];
    coverage: number;
  };
}