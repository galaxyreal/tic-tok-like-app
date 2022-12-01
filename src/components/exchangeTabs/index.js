import React from 'react';
import {Text, TouchableOpacity, View, useColorScheme, ScrollView} from 'react-native';
import {styles} from './style';
import {Theme} from '@/theme';

export const ExchangeTabs = ({tabs, setTab, tab, style}) => {
	const colorTheme = useColorScheme();
	const theme = Theme[colorTheme];

	return (
		<ScrollView horizontal={true}>
		<View style={[styles.container, style]}>
			{tabs?.map((tabitem) => (
				<TouchableOpacity key={tabitem} onPress={() => setTab(tabitem)}>
					<View style={[styles.tab]}>
						<Text
							numberOfLines={1}
							style={
								tab === tabitem
									? [styles.titleActive,]
									: [styles.title]
							}
						>
							{tabitem}
						</Text>
						<View style={styles.absolute}>
							<View
								style={[
									styles.bottom,
									tab === tabitem && styles.active,
									// {backgroundColor: theme.colors.darkblue},
								]}
							/>
						</View>
					</View>
				</TouchableOpacity>
			))}
		</View>
		</ScrollView>
	);
};
