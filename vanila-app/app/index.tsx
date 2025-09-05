import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { Button } from '../components/ui/Button';

export default function IntroScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header with logo/brand */}
      <View className="flex-1 items-center justify-center px-6">
        {/* Main illustration/logo area */}
        <View className="mb-12 items-center">
          <View className="mb-8 h-64 w-64 items-center justify-center rounded-full bg-purple-100">
            <Text className="text-6xl font-bold text-purple-600">V</Text>
          </View>

          <Text className="mb-4 text-center text-4xl font-bold text-gray-900">
            Welcome to Vanila
          </Text>

          <Text className="text-center text-lg leading-relaxed text-gray-600">
            Find your perfect match and connect with people who share your interests
          </Text>
        </View>
      </View>

      {/* Bottom buttons */}
      <View className="px-6 pb-8">
        <Button title="Get Started" variant="primary" href="/(auth)/signup" className="mb-4" />

        <Button title="I already have an account" variant="outline" href="/(auth)/login" />
      </View>
    </SafeAreaView>
  );
}
