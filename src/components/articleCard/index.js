import React from 'react';
import {View, Text, useColorScheme, Image} from 'react-native';
import {styles} from './style';
import {Theme} from '../../theme';

export const ArticleCard = ({}) => {
    const colorTheme = useColorScheme();
	const theme = Theme[colorTheme];
    
    return(
        <View style={styles.container}>
			<View style={styles.iconContainer}>
                <Image source={require('@/assets/images/avatar.png')}/>
            </View>
			<View style={styles.body}>
				<Text style={[styles.bodyTitle,]}>
					{/* {assetSymbol.toUpperCase()}/{quoteSymbol.toUpperCase()} */}
                    Body Template
				</Text>
				<Text
					style={[ styles.bodySubTitle, ]}
					numberOfLines={1}
				>
					Body Template123
				</Text>
			</View>
			<View style={styles.footer}>
				{/* <Text style={[theme.styles.smallreg, theme.styles.grey]}>{item.time}</Text> */}
			</View>
		</View>
    );
};