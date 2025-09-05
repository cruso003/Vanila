import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { ProfileCard } from '../../components/ui/ProfileCard';
import { Profile } from '../../types';

const ActionButton: React.FC<{
  icon: string;
  variant: 'reject' | 'like' | 'superlike';
  onPress: () => void;
}> = ({ icon, variant, onPress }) => {
  const getButtonStyle = () => {
    switch (variant) {
      case 'reject':
        return 'bg-gray-100 border-gray-300';
      case 'like':
        return 'bg-green-500 border-green-500';
      case 'superlike':
        return 'bg-blue-500 border-blue-500';
      default:
        return 'bg-gray-100 border-gray-300';
    }
  };

  const getIconColor = () => {
    switch (variant) {
      case 'reject':
        return 'text-gray-600';
      case 'like':
      case 'superlike':
        return 'text-white';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <TouchableOpacity
      className={`h-16 w-16 items-center justify-center rounded-full border-2 ${getButtonStyle()}`}
      onPress={onPress}>
      <Text className={`text-2xl ${getIconColor()}`}>{icon}</Text>
    </TouchableOpacity>
  );
};

export default function ExploreScreen() {
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);

  // Sample profile data
  const profiles: Profile[] = [
    {
      id: '1',
      name: 'Sarah',
      age: 25,
      bio: 'Love hiking, coffee, and good conversations. Looking for someone to explore the city with!',
      distance: '2 miles away',
      interests: ['Hiking', 'Coffee', 'Photography'],
    },
    {
      id: '2',
      name: 'Emma',
      age: 28,
      bio: 'Photographer and dog lover. Always up for an adventure or a cozy night in.',
      distance: '5 miles away',
      interests: ['Photography', 'Dogs', 'Adventure'],
    },
    {
      id: '3',
      name: 'Jessica',
      age: 24,
      bio: "Yoga instructor and foodie. Let's find the best restaurants in town together!",
      distance: '3 miles away',
      interests: ['Yoga', 'Food', 'Wellness'],
    },
  ];

  const currentProfile = profiles[currentProfileIndex];

  const handleAction = (action: 'reject' | 'like' | 'superlike') => {
    console.log(`${action} action on ${currentProfile.name}`);

    // Move to next profile
    if (currentProfileIndex < profiles.length - 1) {
      setCurrentProfileIndex(currentProfileIndex + 1);
    } else {
      setCurrentProfileIndex(0); // Loop back to first profile
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="flex-row items-center justify-between px-6 py-4">
        <TouchableOpacity>
          <Text className="text-2xl">⚙️</Text>
        </TouchableOpacity>

        <Text className="text-2xl font-bold text-purple-600">Vanila</Text>

        <TouchableOpacity>
          <Text className="text-2xl">🔍</Text>
        </TouchableOpacity>
      </View>

      {/* Profile Card */}
      <View className="flex-1 justify-center">
        {currentProfile && (
          <ProfileCard
            profile={currentProfile}
            onSwipeLeft={() => handleAction('reject')}
            onSwipeRight={() => handleAction('like')}
            onSuperLike={() => handleAction('superlike')}
          />
        )}
      </View>

      {/* Action Buttons */}
      <View className="flex-row items-center justify-center space-x-6 py-8">
        <ActionButton icon="✕" variant="reject" onPress={() => handleAction('reject')} />

        <ActionButton icon="⭐" variant="superlike" onPress={() => handleAction('superlike')} />

        <ActionButton icon="❤️" variant="like" onPress={() => handleAction('like')} />
      </View>
    </SafeAreaView>
  );
}
