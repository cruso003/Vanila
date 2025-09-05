import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Alert } from 'react-native';
import { Link, router } from 'expo-router';
import { Input } from '../../components/ui/Input';
import { Button } from '../../components/ui/Button';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    // TODO: Implement actual login logic
    router.replace('/(tabs)');
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 px-6">
        {/* Header */}
        <View className="mb-12 mt-16 items-center">
          <Text className="mb-2 text-3xl font-bold text-gray-900">Welcome Back</Text>
          <Text className="text-center text-gray-600">Sign in to continue your journey</Text>
        </View>

        {/* Login Form */}
        <View className="flex-1">
          <Input
            placeholder="Email address"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <Input
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <TouchableOpacity className="mb-6 self-end">
            <Text className="font-medium text-purple-600">Forgot Password?</Text>
          </TouchableOpacity>

          <Button
            title="Sign In"
            onPress={handleLogin}
            disabled={!email || !password}
            className="mb-4"
          />

          {/* Divider */}
          <View className="my-6 flex-row items-center">
            <View className="h-px flex-1 bg-gray-300" />
            <Text className="mx-4 text-gray-500">or</Text>
            <View className="h-px flex-1 bg-gray-300" />
          </View>

          {/* Social Login Buttons */}
          <Button
            title="Continue with Google"
            onPress={() => Alert.alert('Google Login', 'Not implemented yet')}
            variant="outline"
          />
        </View>

        {/* Footer */}
        <View className="items-center pb-8">
          <Text className="text-gray-600">
            Don&apos;t have an account?{' '}
            <Link href="/(auth)/signup" asChild>
              <Text className="font-semibold text-purple-600">Sign Up</Text>
            </Link>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
