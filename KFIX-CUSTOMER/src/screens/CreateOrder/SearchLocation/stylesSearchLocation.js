import {StyleSheet, Dimensions} from 'react-native';
import { colors } from '../../../contains';

const stylesSearchLocation = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10
  },
  icon: {
    paddingHorizontal: 4,
    iconEx: {
      marginRight: 8
    }
  },
  txtHeader: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.textColor
  },
  contain: {
    flex: 1,
    marginTop: 20,
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },

  txtSearch: {
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 16,
  },

  options: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15
  },
  btn: {
    paddingHorizontal: 10,
    height: 40,
    borderWidth: 1,
    borderColor: colors.borderColor,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    btnRadius: {
      borderRadius: 20
    }
  }
  // btnBack: {
  //   position: 'absolute',
  //   top: 5,
  //   marginRight: 10,
  // },
  // buttonText: {
  //   textAlign: 'center',
  // },
  // btnContinue: {
  //   width: 75,
  //   height: 75,
  //   backgroundColor: colors.primaryColor,
  //   position: 'absolute',
  //   bottom: 10,
  //   right: 10,
  //   borderRadius: 100,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
});

export default stylesSearchLocation;
