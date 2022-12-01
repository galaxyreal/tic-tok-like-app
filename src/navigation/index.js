import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { useColorScheme } from 'react-native';
import { AppNavigator } from '@/navigation/AppNavigator';
import { Theme } from '@/theme';

export function RootNavigator() {
  const scheme = useColorScheme();

  return (
    <NavigationContainer theme={Theme[scheme]}>
      <AppNavigator /> 
    </NavigationContainer>
  );
}
