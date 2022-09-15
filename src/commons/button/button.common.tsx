import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  GestureResponderEvent,
  ActivityIndicator,
} from 'react-native';

import Theme from '@src/theme';

import {styles} from './button.style';

interface ButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  loading?: boolean;
}

export const Button = ({
  title,
  leftIcon,
  rightIcon,
  onPress,
  disabled = false,
  style,
  loading = false,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        style,
        {
          backgroundColor:
            disabled || loading ? Theme.colors.$primary : Theme.colors.$gray300,
        },
      ]}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.8}
    >
      {loading ? (
        <ActivityIndicator size="small" color="white" />
      ) : (
        <>
          {leftIcon ? <View>{leftIcon}</View> : null}
          <Text style={styles.text}>{title}</Text>
          {rightIcon ? <View>{rightIcon}</View> : null}
        </>
      )}
    </TouchableOpacity>
  );
};
