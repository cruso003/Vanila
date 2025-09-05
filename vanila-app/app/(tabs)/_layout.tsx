import React from 'react';
import { Tabs } from 'expo-router';
import { Text } from 'react-native';

// Simple icon component using text for now
const TabIcon = ({ name, focused }: { name: string; focused: boolean }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'explore':
        return '🏠';
      case 'favorites':
        return '❤️';
      case 'messages':
        return '💬';
      case 'profile':
        return '👤';
      default:
        return '•';
    }
  };

  return <Text style={{ fontSize: 20, opacity: focused ? 1 : 0.6 }}>{getIcon(name)}</Text>;
};

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'white',
          borderTopWidth: 1,
          borderTopColor: '#E5E5E5',
          height: 80,
          paddingBottom: 20,
          paddingTop: 10,
        },
        tabBarActiveTintColor: '#7C3AED',
        tabBarInactiveTintColor: '#9CA3AF',
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Explore',
          tabBarIcon: ({ focused }) => <TabIcon name="explore" focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          title: 'Favorites',
          tabBarIcon: ({ focused }) => <TabIcon name="favorites" focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="messages"
        options={{
          title: 'Messages',
          tabBarIcon: ({ focused }) => <TabIcon name="messages" focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ focused }) => <TabIcon name="profile" focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          href: null, // Hide from tab bar
        }}
      />
    </Tabs>
  );
}
