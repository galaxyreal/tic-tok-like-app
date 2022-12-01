import { StyleSheet, Dimensions } from 'react-native';
const { width: screenWidth } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageContainer: {
        flex: 1,
    },
    imageButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 60,
        paddingHorizontal: 10
    },
    image: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'cover',
    },
    iconContainer: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        margin: 10,
    },
    title: {
        color: 'white',
        paddingLeft: 20,
        paddingRight: 60,
        fontWeight: '700',
        marginTop: -10,
    },
    bodyContainer: {
        backgroundColor: 'white',
        borderTopLeftRadius: 30, 
        borderTopRightRadius: 30, 
        marginTop: -30,
        paddingHorizontal: 20,
        paddingVertical: 30,
    },
    authorContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    author: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    autorTitle: {
        fontWeight: '500',
        paddingLeft: 12,
    },
    date: {
        color: '#BFBFBF',
        fontWeight: '400',
    },
    subTitle: {
        fontWeight: '600',
        paddingTop: 16,
    },
    description: {
        fontWeight: '400',
        color: '#333333',
        paddingTop: 16,
    },
});
