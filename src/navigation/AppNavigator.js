import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useColorScheme } from 'react-native';
import React from 'react';
import { HomeNavigator } from '@/navigation/HomeNavigator';
import { TABS } from '@/constants/navigation';
import { Theme } from '@/theme';
import { AddIcon, BoardIcon, ColorHeartIcon, HomeIcon, ProfileIcon } from '@/utils/icons';

const Tab = createBottomTabNavigator();

export function AppNavigator() {
  const colorTheme = useColorScheme();
  const theme = Theme[colorTheme];

  return (
    <Tab.Navigator      
      initialRouteName={TABS.home}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {     
          display: 'flex',     
          position: 'absolute',
          overflow: 'hidden',
          justifyContent: 'center',
          alignItems: 'center',
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: theme.colors.red,
        tabBarInactiveTintColor: theme.colors.grey,
        tabBarIcon: ({ color }) => {
          switch (route.name) {
            case TABS.home: return <HomeIcon />
            case TABS.board: return <BoardIcon />;
            case TABS.add: return <AddIcon />;
            case TABS.heart: return <ColorHeartIcon />;
            case TABS.profile: return <ProfileIcon />
            default: return <HomeIcon />;
          }
        },
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
