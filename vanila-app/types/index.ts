export interface User {
  id: string;
  name: string;
  email: string;
  age: number;
  bio?: string;
  location?: string;
  profileImages: string[];
  interests: string[];
  preferences: UserPreferences;
  lastSeen?: Date;
  verified: boolean;
}

export interface UserPreferences {
  ageRange: {
    min: number;
    max: number;
  };
  distance: number;
  interestedIn: 'men' | 'women' | 'both';
  showMe: 'everyone' | 'verified-only';
}

export interface Profile {
  id: string;
  name: string;
  age: number;
  bio: string;
  distance: string;
  imageUrl?: string;
  images?: string[];
  interests?: string[];
  verified?: boolean;
  lastSeen?: string;
}

export interface Match {
  id: string;
  userId: string;
  matchedUserId: string;
  matchedAt: Date;
  user: User;
  lastMessage?: Message;
  unreadCount: number;
}

export interface Message {
  id: string;
  matchId: string;
  senderId: string;
  receiverId: string;
  content: string;
  timestamp: Date;
  read: boolean;
  type: 'text' | 'image' | 'gif';
}

export interface Conversation {
  id: string;
  participants: User[];
  messages: Message[];
  lastMessage?: Message;
  unreadCount: number;
  updatedAt: Date;
}

export interface SwipeAction {
  profileId: string;
  action: 'like' | 'pass' | 'superlike';
  timestamp: Date;
}

export interface AuthUser {
  id: string;
  email: string;
  name: string;
  profileComplete: boolean;
  emailVerified: boolean;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface SignupCredentials {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}
