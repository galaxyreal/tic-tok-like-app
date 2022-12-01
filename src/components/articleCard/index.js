import React from 'react';
import { View, Text, useColorScheme, Image } from 'react-native';
import { styles } from './style';
import { Theme } from '../../theme';
import { EtcIcon } from '@/utils/icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const ArticleCard = ({ }) => {
	const colorTheme = useColorScheme();
	const theme = Theme[colorTheme];

	return (
		<View style={styles.container}>
			<View style={styles.iconContainer}>
				<Image source={require('@/assets/images/avatar.png')} resizeMode='cover' style={styles.icon} />
			</View>
			<View style={styles.body}>
				<View>
					<Text style={[styles.bodyTitle, theme.styles.subheading]}>
						{/* {assetSymbol.toUpperCase()}/{quoteSymbol.toUpperCase()} */}
						Shin Megami Tesei V is An Amazing Game
					</Text>
					<View>
						<Text
							style={[styles.bodySubTitle, theme.styles.minicaps]}
						>
							Written By
						</Text>
						<Text
							style={[styles.bodySubTitle, theme.styles.minicaps]}
						>
							Demon Summon @Atalashin . 2h
						</Text>
					</View>
				</View>
				<TouchableOpacity>
					<EtcIcon />
				</TouchableOpacity>
			</View>
			<View style={styles.footer}>
				{/* <Text style={[theme.styles.smallreg, theme.styles.grey]}>{item.time}</Text> */}
			</View>
		</View>
	);
};