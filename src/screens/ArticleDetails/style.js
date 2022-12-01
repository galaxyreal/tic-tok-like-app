import { StyleSheet, Dimensions } from 'react-native';
const {width: screenWidth} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    width: (screenWidth * 0.7),
    height: screenWidth,
  },
  itemIcons:{
    position:'absolute',
    top: 10,
    color: 'white',
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
    backgroundColor: 'red',
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
  title:{
    position: 'absolute',
    bottom: 20,
    color: 'white',
  },
  
});
