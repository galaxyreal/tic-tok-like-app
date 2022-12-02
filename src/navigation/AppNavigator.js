import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useColorScheme, View, Text } from 'react-native';
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
      // initialRouteName={TABS.home}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {    
          position: 'absolute',
          overflow: 'hidden',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
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
      <Tab.Screen name={TABS.board} component={BoardScreen} />
      <Tab.Screen name={TABS.add} component={AddScreen} />
      <Tab.Screen name={TABS.heart} component={HeartScreen} />
      <Tab.Screen name={TABS.profile} component={ProfileScreen} />
    </Tab.Navigator>
  );
}

function BoardScreen (){
  return (
    <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Board</Text>
    </View>
  );
}

function AddScreen (){
  return (
    <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Add</Text>
    </View>
  );
}

function HeartScreen (){
  return (
    <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Heart</Text>
    </View>
  );
}

function ProfileScreen (){
  return (
    <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Profile</Text>
    </View>
  );
}