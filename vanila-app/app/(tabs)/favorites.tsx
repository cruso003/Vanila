import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';

interface MatchCardProps {
  name: string;
  age: number;
  matchPercentage: number;
  lastSeen: string;
}

const MatchCard: React.FC<MatchCardProps> = ({ name, age, matchPercentage, lastSeen }) => {
  return (
    <TouchableOpacity className="mb-4 rounded-xl bg-white p-4 shadow-sm">
      <View className="flex-row items-center">
        {/* Profile Image */}
        <View className="mr-4 h-16 w-16 items-center justify-center rounded-full bg-purple-100">
          <Text className="text-2xl">👤</Text>
        </View>

        {/* Profile Info */}
        <View className="flex-1">
          <View className="mb-1 flex-row items-center">
            <Text className="text-lg font-semibold text-gray-900">{name}</Text>
            <Text className="ml-1 text-gray-600">{age}</Text>
          </View>

          <Text className="mb-1 text-sm text-gray-500">{lastSeen}</Text>

          <View className="flex-row items-center">
            <Text className="text-sm font-medium text-purple-600">{matchPercentage}% match</Text>
          </View>
        </View>

        {/* Heart Icon */}
        <View className="h-8 w-8 items-center justify-center rounded-full bg-red-100">
          <Text className="text-red-500">❤️</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default function FavoritesScreen() {
  const matches = [
    {
      name: 'Sarah',
      age: 25,
      matchPercentage: 95,
      lastSeen: 'Active now',
    },
    {
      name: 'Emma',
      age: 28,
      matchPercentage: 89,
      lastSeen: '2 hours ago',
    },
    {
      name: 'Jessica',
      age: 24,
      matchPercentage: 92,
      lastSeen: '1 day ago',
    },
    {
      name: 'Ashley',
      age: 26,
      matchPercentage: 87,
      lastSeen: '3 days ago',
    },
  ];

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="bg-white px-6 py-4">
        <Text className="text-2xl font-bold text-gray-900">Your Matches</Text>
        <Text className="mt-1 text-gray-600">{matches.length} people liked you back</Text>
      </View>

      {/* Matches List */}
      <ScrollView className="flex-1 px-6 pt-4">
        {matches.map((match, index) => (
          <MatchCard
            key={index}
            name={match.name}
            age={match.age}
            matchPercentage={match.matchPercentage}
            lastSeen={match.lastSeen}
          />
        ))}

        {/* Empty State Message */}
        {matches.length === 0 && (
          <View className="mt-20 flex-1 items-center justify-center">
            <Text className="mb-4 text-6xl">💔</Text>
            <Text className="mb-2 text-xl font-semibold text-gray-900">No matches yet</Text>
            <Text className="text-center text-gray-600">
              Keep swiping to find your perfect match!
            </Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
