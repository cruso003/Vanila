import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { router } from 'expo-router';

interface ChatMessage {
  id: string;
  senderId: string;
  content: string;
  timestamp: Date;
  isMe: boolean;
}

const MessageBubble: React.FC<{ message: ChatMessage }> = ({ message }) => {
  return (
    <View className={`mb-4 ${message.isMe ? 'items-end' : 'items-start'}`}>
      <View
        className={`max-w-xs rounded-2xl px-4 py-3 ${
          message.isMe ? 'mr-4 bg-purple-600' : 'ml-4 bg-gray-200'
        }`}>
        <Text className={`text-base ${message.isMe ? 'text-white' : 'text-gray-900'}`}>
          {message.content}
        </Text>
      </View>
      <Text className="mx-4 mt-1 text-xs text-gray-500">
        {message.timestamp.toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        })}
      </Text>
    </View>
  );
};

export default function ChatScreen() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      senderId: 'other',
      content: 'Hey! How was your weekend?',
      timestamp: new Date(Date.now() - 120000),
      isMe: false,
    },
    {
      id: '2',
      senderId: 'me',
      content: 'It was great! Went hiking with some friends. How about you?',
      timestamp: new Date(Date.now() - 60000),
      isMe: true,
    },
    {
      id: '3',
      senderId: 'other',
      content: 'Nice! I love hiking too. Which trail did you go to?',
      timestamp: new Date(),
      isMe: false,
    },
  ]);

  const sendMessage = () => {
    if (message.trim()) {
      const newMessage: ChatMessage = {
        id: Date.now().toString(),
        senderId: 'me',
        content: message.trim(),
        timestamp: new Date(),
        isMe: true,
      };
      setMessages([...messages, newMessage]);
      setMessage('');
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header */}
      <View className="flex-row items-center border-b border-gray-200 px-4 py-3">
        <TouchableOpacity onPress={() => router.back()} className="mr-4">
          <Text className="text-lg text-purple-600">←</Text>
        </TouchableOpacity>

        <View className="mr-3 h-10 w-10 items-center justify-center rounded-full bg-purple-100">
          <Text className="text-lg">👤</Text>
        </View>

        <View className="flex-1">
          <Text className="text-lg font-semibold text-gray-900">Sarah</Text>
          <Text className="text-sm text-gray-500">Active now</Text>
        </View>

        <TouchableOpacity>
          <Text className="text-xl">📞</Text>
        </TouchableOpacity>
      </View>

      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        {/* Messages */}
        <ScrollView className="flex-1 px-4 py-4">
          {messages.map((msg) => (
            <MessageBubble key={msg.id} message={msg} />
          ))}
        </ScrollView>

        {/* Input */}
        <View className="flex-row items-center border-t border-gray-200 px-4 py-3">
          <TextInput
            className="mr-3 flex-1 rounded-full bg-gray-100 px-4 py-3 text-base"
            placeholder="Type a message..."
            value={message}
            onChangeText={setMessage}
            multiline
            placeholderTextColor="#9CA3AF"
          />
          <TouchableOpacity
            onPress={sendMessage}
            className="h-10 w-10 items-center justify-center rounded-full bg-purple-600"
            disabled={!message.trim()}>
            <Text className="text-lg text-white">→</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
