import React from 'react';
import {View, TouchableOpacity, Text, useColorScheme} from 'react-native';
import {Theme} from '../../theme';
import {styles} from './style';
import {useNavigation} from '@react-navigation/core';
import {LeftArrowBlackIcon, LeftArrowWhiteIcon} from '@/utils/icons';

export const BackBar = ({text, style, backRoute, Right}) => {
	const navigation = useNavigation();
	// const colorTheme = useColorScheme();
	// const theme = Theme[colorTheme];

	return (
		<View
			style={[
				styles.container,				
				style,				
			]}
		>
			<TouchableOpacity
				onPress={() => null}
			>
				{/* <View><LeftArrowBlackIcon /> </View> */}
                <LeftArrowBlackIcon />
			</TouchableOpacity>
            
			<Text >
            {text || ''}
			</Text>
			{Right && <Right />}
		</View>
	);
};
