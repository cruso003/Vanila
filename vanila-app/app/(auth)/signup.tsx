import React, { useState } from 'react';
import { View, Text, SafeAreaView, Alert } from 'react-native';
import { Link, router } from 'expo-router';
import { Input } from '../../components/ui/Input';
import { Button } from '../../components/ui/Button';

export default function SignupScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignup = () => {
    if (!validateForm()) {
      return;
    }

    // TODO: Implement actual signup logic
    router.replace('/(tabs)');
  };

  const isFormValid = name && email && password && confirmPassword && password === confirmPassword;

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 px-6">
        {/* Header */}
        <View className="mb-12 mt-16 items-center">
          <Text className="mb-2 text-3xl font-bold text-gray-900">Create Account</Text>
          <Text className="text-center text-gray-600">
            Join thousands of people finding their perfect match
          </Text>
        </View>

        {/* Signup Form */}
        <View className="flex-1">
          <Input placeholder="Full name" value={name} onChangeText={setName} error={errors.name} />

          <Input
            placeholder="Email address"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            error={errors.email}
          />

          <Input
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            error={errors.password}
          />

          <Input
            placeholder="Confirm password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
            error={errors.confirmPassword}
          />

          <Button title="Sign Up" onPress={handleSignup} disabled={!isFormValid} className="mb-4" />

          {/* Divider */}
          <View className="my-6 flex-row items-center">
            <View className="h-px flex-1 bg-gray-300" />
            <Text className="mx-4 text-gray-500">or</Text>
            <View className="h-px flex-1 bg-gray-300" />
          </View>

          {/* Social Login Buttons */}
          <Button
            title="Continue with Google"
            onPress={() => Alert.alert('Google Signup', 'Not implemented yet')}
            variant="outline"
          />
        </View>

        {/* Footer */}
        <View className="items-center pb-8">
          <Text className="text-gray-600">
            Already have an account?{' '}
            <Link href="/(auth)/login" asChild>
              <Text className="font-semibold text-purple-600">Sign In</Text>
            </Link>
          </Text>

          <Text className="mt-4 text-center text-xs leading-relaxed text-gray-500">
            By signing up, you agree to our{' '}
            <Text className="text-purple-600">Terms of Service</Text> and{' '}
            <Text className="text-purple-600">Privacy Policy</Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
