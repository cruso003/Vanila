import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Link } from 'expo-router';

export interface ButtonProps {
  title: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  onPress?: () => void;
  href?: string;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  onPress,
  href,
  className = '',
}) => {
  const baseClasses = 'items-center justify-center rounded-lg';

  const sizeClasses = {
    small: 'py-2 px-4',
    medium: 'py-3 px-6',
    large: 'py-4 px-8',
  };

  const variantClasses = {
    primary: `bg-purple-600 ${disabled ? 'opacity-50' : ''}`,
    secondary: 'bg-gray-100',
    outline: 'bg-transparent border border-purple-600',
  };

  const textClasses = {
    primary: 'text-white font-semibold',
    secondary: 'text-gray-900 font-semibold',
    outline: 'text-purple-600 font-semibold',
  };

  const textSizeClasses = {
    small: 'text-sm',
    medium: 'text-base',
    large: 'text-lg',
  };

  const buttonElement = (
    <TouchableOpacity
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      onPress={onPress}
      disabled={disabled}>
      <Text className={`${textClasses[variant]} ${textSizeClasses[size]}`}>{title}</Text>
    </TouchableOpacity>
  );

  if (href && !disabled) {
    return (
      <Link href={href} asChild>
        {buttonElement}
      </Link>
    );
  }

  return buttonElement;
};
