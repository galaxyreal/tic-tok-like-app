import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from '@react-navigation/native';
import React from 'react';
import { HomeNavigator } from '@/navigation/HomeNavigator';
import { TABS } from '@/constants/navigation';

const Tab = createBottomTabNavigator();

export function AppNavigator() {
  const { colors } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          borderRadius: 30, 
          position: 'absolute', 
          // bottom: 0, 
          overflow: 'hidden',
          alignItems: 'center',
          justifyContent:'center', 
        },
        tabBarItemStyle: {
          marginTop: 16,
          alignItems: 'center'
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.activeTab,
        tabBarInactiveTintColor: colors.inactiveTab,
        tabBarIcon: ({ color }) => null,
      })}
    >
      <Tab.Screen name={TABS.home} component={HomeNavigator} />
      <Tab.Screen name={TABS.board} component={HomeNavigator} />
      <Tab.Screen name={TABS.add} component={HomeNavigator} />
      <Tab.Screen name={TABS.heart} component={HomeNavigator} />
      <Tab.Screen name={TABS.profile} component={HomeNavigator} />
    </Tab.Navigator>
  );
}
