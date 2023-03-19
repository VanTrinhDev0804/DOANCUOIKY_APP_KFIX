import {StyleSheet, Dimensions} from 'react-native';

const stylesSelectOnMap = StyleSheet.create({
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  wrapSelectLocation: {
    width: '100%',
    minHeight: 100,
    position: 'absolute',
    bottom: 0,
    padding: 10,
    backgroundColor: '#fff',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  location: {
    marginTop: 8,
  },
  iconChooseOnMap: {
    position: 'absolute',
    top: Dimensions.get('window').height/2 - 45,
    left: Dimensions.get('window').width/2-20,
  }
});

export default stylesSelectOnMap
