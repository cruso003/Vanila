import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { router } from 'expo-router';

interface MessageItemProps {
  name: string;
  lastMessage: string;
  time: string;
  unread?: boolean;
  isTyping?: boolean;
}

const MessageItem: React.FC<MessageItemProps> = ({
  name,
  lastMessage,
  time,
  unread = false,
  isTyping = false,
}) => {
  return (
    <TouchableOpacity
      className="border-b border-gray-100 bg-white px-6 py-4"
      onPress={() => router.push('/(tabs)/chat')}>
      <View className="flex-row items-center">
        {/* Profile Image */}
        <View className="mr-4 h-14 w-14 items-center justify-center rounded-full bg-purple-100">
          <Text className="text-xl">👤</Text>
        </View>

        {/* Message Content */}
        <View className="flex-1">
          <View className="mb-1 flex-row items-center justify-between">
            <Text className={`text-lg ${unread ? 'font-bold' : 'font-semibold'} text-gray-900`}>
              {name}
            </Text>
            <Text className={`text-sm ${unread ? 'font-medium text-purple-600' : 'text-gray-500'}`}>
              {time}
            </Text>
          </View>

          <Text className={`text-sm ${unread ? 'font-medium text-gray-900' : 'text-gray-600'}`}>
            {isTyping ? <Text className="italic text-purple-600">typing...</Text> : lastMessage}
          </Text>
        </View>

        {/* Unread Indicator */}
        {unread && <View className="ml-2 h-3 w-3 rounded-full bg-purple-600" />}
      </View>
    </TouchableOpacity>
  );
};

export default function MessagesScreen() {
  const conversations = [
    {
      name: 'Sarah',
      lastMessage: 'Hey! How was your weekend?',
      time: '2m',
      unread: true,
    },
    {
      name: 'Emma',
      lastMessage: 'Thanks for the coffee recommendation! ☕',
      time: '1h',
      unread: false,
    },
    {
      name: 'Jessica',
      lastMessage: 'That restaurant was amazing!',
      time: '3h',
      unread: true,
      isTyping: true,
    },
    {
      name: 'Ashley',
      lastMessage: 'Good morning! Hope you have a great day',
      time: '1d',
      unread: false,
    },
    {
      name: 'Rachel',
      lastMessage: 'Would love to meet up this weekend',
      time: '2d',
      unread: false,
    },
  ];

  const unreadCount = conversations.filter((conv) => conv.unread).length;

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="border-b border-gray-100 bg-white px-6 py-4">
        <View className="flex-row items-center justify-between">
          <View>
            <Text className="text-2xl font-bold text-gray-900">Messages</Text>
            {unreadCount > 0 && (
              <Text className="mt-1 text-gray-600">
                {unreadCount} new message{unreadCount > 1 ? 's' : ''}
              </Text>
            )}
          </View>

          <TouchableOpacity>
            <Text className="text-2xl">✏️</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Conversations List */}
      <ScrollView className="flex-1">
        {conversations.map((conversation, index) => (
          <MessageItem
            key={index}
            name={conversation.name}
            lastMessage={conversation.lastMessage}
            time={conversation.time}
            unread={conversation.unread}
            isTyping={conversation.isTyping}
          />
        ))}

        {/* Empty State */}
        {conversations.length === 0 && (
          <View className="mt-20 flex-1 items-center justify-center">
            <Text className="mb-4 text-6xl">💬</Text>
            <Text className="mb-2 text-xl font-semibold text-gray-900">No conversations yet</Text>
            <Text className="px-8 text-center text-gray-600">
              Start matching with people to begin conversations
            </Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
