import {StyleSheet} from 'react-native';
import {Theme} from '../../theme';

export const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		padding: 12,
		justifyContent: 'space-between',
		backgroundColor: 'white',
		borderRadius: 8,
		marginVertical: 10,
	},
	iconContainer: {
		width: 72,
		height: 72,
		borderRadius: 10,
		// backgroundColor: '#D561FF5F',
		alignItems: 'center',
		justifyContent: 'center',
		justifyContent: 'space-between',
	},
	icon: {
		width: 72,
		height: 72,		
	},
	body: {
		width: '60%',
		marginLeft: 16,
		marginRight: 16,
		flexDirection: 'row',
	},
	bodyTitle: {
		// color: Theme.colors.black,
		textAlign: 'left',
		marginBottom: 8,
		fontWeight: '600',
		marginRight: 16
	},
	bodySubTitle: {
		textAlign: 'left',
		fontWeight: '300',
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
