import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import React from 'react';
import { NAVIGATION } from '@/constants';
import { Home } from '@/screens';
import {ArticleDetails} from '@/screens/ArticleDetails';

const Stack = createNativeStackNavigator();

export function HomeNavigator({navigation, route}) {
  React.useLayoutEffect(() => {
		const tabHiddenRoutes = [
			NAVIGATION.articleDetails,
		];
		if (tabHiddenRoutes.includes(getFocusedRouteNameFromRoute(route))) {
			navigation.setOptions({tabBarStyle: {display: 'none'}});
		} else {
			navigation.setOptions({
				tabBarStyle: {
					paddingBottom: Platform.OS === 'android' ? 8 : 18,
					height: Platform.OS === 'android' ? 55 : 65,					
					display: 'flex',					
				},
			});
		}
	}, [navigation, route]);
  return (
    <Stack.Navigator initialRouteName={NAVIGATION.home} screenOptions={{headerShown:false}}>
      <Stack.Screen name={NAVIGATION.home} component={Home}/>
      <Stack.Screen name={NAVIGATION.articleDetails} component={ArticleDetails}/>
    </Stack.Navigator>
  );
}
