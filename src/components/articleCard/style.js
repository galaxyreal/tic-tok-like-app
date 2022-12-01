import {StyleSheet} from 'react-native';
import {Theme} from '../../theme';

export const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingVertical: 10,
		justifyContent: 'space-between',
	},
	iconContainer: {
		width: 45,
		height: 45,
		borderRadius: 10,
		// backgroundColor: '#D561FF5F',
		alignItems: 'center',
		justifyContent: 'center',
	},
	icon: {
		width: 21,
		height: 21,
		color: '#B94CDF',
		backgroundColor: '#B94CDF',
	},
	body: {
		width: '60%',
		marginLeft: 16,
		marginRight: 16,
	},
	bodyTitle: {
		// color: Theme.colors.black,
		textAlign: 'left',
		marginBottom: 8,
	},
	bodySubTitle: {
		textAlign: 'left',
	},
	footer: {
		marginTop: 3,
		alignItems: 'center',
	},
	avatar: {
		width: 12,
		height: 12,
		borderRadius: 6,
		backgroundColor: '#C4C4C4',
		marginRight: 8,
	},
});
