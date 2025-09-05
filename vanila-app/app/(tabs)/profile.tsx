import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';

interface SettingsItemProps {
  icon: string;
  title: string;
  subtitle?: string;
  onPress?: () => void;
  showArrow?: boolean;
}

const SettingsItem: React.FC<SettingsItemProps> = ({
  icon,
  title,
  subtitle,
  onPress,
  showArrow = true,
}) => {
  return (
    <TouchableOpacity className="border-b border-gray-100 bg-white px-6 py-4" onPress={onPress}>
      <View className="flex-row items-center">
        <Text className="mr-4 text-2xl">{icon}</Text>

        <View className="flex-1">
          <Text className="text-lg font-medium text-gray-900">{title}</Text>
          {subtitle && <Text className="mt-1 text-sm text-gray-600">{subtitle}</Text>}
        </View>

        {showArrow && <Text className="text-xl text-gray-400">›</Text>}
      </View>
    </TouchableOpacity>
  );
};

export default function ProfileScreen() {
  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      {/* Profile Header */}
      <View className="items-center bg-white px-6 py-8">
        <View className="mb-4 h-24 w-24 items-center justify-center rounded-full bg-purple-100">
          <Text className="text-4xl">👤</Text>
        </View>

        <Text className="mb-1 text-2xl font-bold text-gray-900">John Doe</Text>
        <Text className="text-gray-600">25 years old</Text>

        <TouchableOpacity className="mt-4 rounded-full bg-purple-600 px-6 py-2">
          <Text className="font-semibold text-white">Edit Profile</Text>
        </TouchableOpacity>
      </View>

      {/* Settings List */}
      <ScrollView className="mt-4 flex-1">
        {/* Account Section */}
        <View className="mb-4">
          <Text className="px-6 py-2 text-sm font-semibold uppercase tracking-wide text-gray-500">
            Account
          </Text>

          <SettingsItem icon="📱" title="Phone Number" subtitle="Manage your phone number" />

          <SettingsItem icon="✉️" title="Email" subtitle="Update your email address" />

          <SettingsItem icon="🔒" title="Privacy" subtitle="Control who can see your profile" />
        </View>

        {/* Preferences Section */}
        <View className="mb-4">
          <Text className="px-6 py-2 text-sm font-semibold uppercase tracking-wide text-gray-500">
            Preferences
          </Text>

          <SettingsItem icon="📍" title="Location" subtitle="Change your location" />

          <SettingsItem
            icon="🔍"
            title="Discovery Settings"
            subtitle="Age range, distance, and more"
          />

          <SettingsItem icon="🔔" title="Notifications" subtitle="Push notifications and emails" />
        </View>

        {/* Support Section */}
        <View className="mb-4">
          <Text className="px-6 py-2 text-sm font-semibold uppercase tracking-wide text-gray-500">
            Support
          </Text>

          <SettingsItem icon="❓" title="Help Center" subtitle="Get help and support" />

          <SettingsItem icon="💌" title="Contact Us" subtitle="Send us your feedback" />

          <SettingsItem icon="⭐" title="Rate Us" subtitle="Rate Vanila on the app store" />
        </View>

        {/* Legal Section */}
        <View className="mb-8">
          <Text className="px-6 py-2 text-sm font-semibold uppercase tracking-wide text-gray-500">
            Legal
          </Text>

          <SettingsItem icon="📄" title="Terms of Service" />

          <SettingsItem icon="🛡️" title="Privacy Policy" />

          <SettingsItem icon="📊" title="Data Usage" />
        </View>

        {/* Logout Button */}
        <View className="mb-8 px-6">
          <TouchableOpacity className="items-center rounded-lg border border-red-200 bg-red-50 py-4">
            <Text className="text-lg font-semibold text-red-600">Log Out</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
