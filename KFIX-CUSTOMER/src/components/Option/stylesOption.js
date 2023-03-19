import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const styleOption = StyleSheet.create({
  btnOpt: {
    width: (windowWidth * 30) / 100,
    height: (windowWidth * 30) / 100,
    backgroundColor: '#fff',
    marginRight: (windowWidth * 4) / 100 / 3,
    marginBottom: (windowWidth * 4) / 100 / 3,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  opt: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgOpt: {
    height: 50,
    width: 50,
  },
});

export default styleOption;
