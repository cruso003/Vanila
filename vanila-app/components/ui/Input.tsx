import React from 'react';
import { TextInput, View, Text } from 'react-native';

export interface InputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  label?: string;
  error?: string;
  secureTextEntry?: boolean;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  className?: string;
}

export const Input: React.FC<InputProps> = ({
  placeholder,
  value,
  onChangeText,
  label,
  error,
  secureTextEntry = false,
  keyboardType = 'default',
  autoCapitalize = 'sentences',
  className = '',
}) => {
  return (
    <View className={`mb-4 ${className}`}>
      {label && <Text className="mb-2 font-medium text-gray-700">{label}</Text>}

      <TextInput
        className={`w-full rounded-lg border p-4 text-base ${
          error ? 'border-red-500 bg-red-50' : 'border-gray-300 bg-white'
        }`}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        placeholderTextColor="#9CA3AF"
      />

      {error && <Text className="mt-1 text-sm text-red-500">{error}</Text>}
    </View>
  );
};
