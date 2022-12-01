import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
	container: {
		height: 60,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
		paddingTop: 20,
		paddingHorizontal: 20,
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
	},
	tab: {
		paddingHorizontal: 5,
		marginRight: 20,
		paddingVertical: 5,
		position: 'relative',
	},
	active: {
		display: 'flex',
	},
	bottom: {
		width: 5,
		height: 5,
		backgroundColor: 'red',
		borderRadius: 2,
		display: 'none',
	},
	absolute: {
		position: 'absolute',
		alignItems: 'center',
		bottom: 0,
		left: 0,
		right: 0,
	},
	title: {
		fontSize: 16,
		lineHeight: 20,
        color: 'black',
		fontWeight: '600',
		// fontFamily: 'Ubuntu-M',
		// color: Theme.colors.grey,
	},
	titleActive: {
		// color: Theme.colors.darkblue,
		fontSize: 16,
		lineHeight: 20,
        color: 'red',
		fontWeight: '600',
		// fontFamily: 'Ubuntu-M',
	},
});
