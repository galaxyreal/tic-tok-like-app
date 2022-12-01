import { StyleSheet, Dimensions } from 'react-native';
const {width: screenWidth} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    width: (screenWidth * 0.7),
    height: screenWidth,
    borderRadius: 16,
    marginHorizontal: 16,
    // backgroundColor: 'red',
  },
  headerContainer: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header: {
    fontWeight: '600',    
  },
  itemIcons:{
    position:'absolute',      
    padding: 16,
    flexDirection: 'row',
    backgroundColor: 'red',
  },
  leftIcon: {
    position: 'absolute',
    left: 20,
    marginTop: 20,
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#FFFFFF33',
  },
  rightIcon: {
    position: 'absolute',
    right: 20,
    marginTop: 20,
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#FFFFFF33',
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
    // backgroundColor: 'red',
    borderRadius: 16,
  },
  image: {
    // ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
    borderRadius: 16,
    flex: 1,
    width: '100%',
    height: '100%',
  },
  title:{    
    color: 'white',
    fontWeight: '500',
    paddingTop: 10,
  },
  titleContainer:{
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#0B090A33',
    borderRadius: 16,
    padding: 16,
  },
  backBar: {
    flexDirection: 'row',
  },
  backBarIcon: {
    paddingLeft: 16,
  },
  author: {
    position: 'absolute',
    bottom: 0,
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  authorName: {
    color: 'white',
    paddingLeft: 8,
  },
  authorId: {
    paddingLeft: 4,
    color: '#FFFFFF80',
  },
  newsItems: {
    padding: 20,
  },
});
