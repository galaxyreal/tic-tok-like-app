import React from 'react';
import {View, Text, useColorScheme, Image} from 'react-native';
import {styles} from './style';
import {Theme} from '../../theme';

export const Avatar = ({}) => {
    const colorTheme = useColorScheme();
	const theme = Theme[colorTheme];
    
    return(
        <View style={styles.container}>			
                <Image source={require('@/assets/images/avatar.png')} style={styles.avatar}/>
		</View>
    );
};