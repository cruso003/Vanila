import React from 'react';
import { View, Text, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export interface Profile {
  id: string;
  name: string;
  age: number;
  bio: string;
  distance: string;
  imageUrl?: string;
  interests?: string[];
}

export interface ProfileCardProps {
  profile: Profile;
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  onSuperLike?: () => void;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({
  profile,
  onSwipeLeft,
  onSwipeRight,
  onSuperLike,
}) => {
  return (
    <View
      className="mx-4 overflow-hidden rounded-3xl bg-white shadow-lg"
      style={{ width: width - 32, height: height * 0.7 }}>
      {/* Profile Image */}
      <View className="flex-1 items-center justify-center bg-gradient-to-br from-purple-100 to-pink-100">
        {profile.imageUrl ? (
          // TODO: Add actual image component when images are available
          <Text className="text-6xl">📷</Text>
        ) : (
          <Text className="text-6xl">👤</Text>
        )}
      </View>

      {/* Profile Info */}
      <View className="p-6">
        <View className="mb-2 flex-row items-center">
          <Text className="text-2xl font-bold text-gray-900">{profile.name}</Text>
          <Text className="ml-2 text-2xl text-gray-600">{profile.age}</Text>
        </View>

        <Text className="mb-3 leading-relaxed text-gray-600">{profile.bio}</Text>

        {profile.interests && profile.interests.length > 0 && (
          <View className="mb-3 flex-row flex-wrap">
            {profile.interests.slice(0, 3).map((interest, index) => (
              <View key={index} className="mb-2 mr-2 rounded-full bg-purple-100 px-3 py-1">
                <Text className="text-sm font-medium text-purple-700">{interest}</Text>
              </View>
            ))}
          </View>
        )}

        <View className="flex-row items-center">
          <Text className="font-medium text-purple-600">📍 {profile.distance}</Text>
        </View>
      </View>
    </View>
  );
};
