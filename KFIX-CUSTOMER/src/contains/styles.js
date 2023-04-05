import {StyleSheet} from 'react-native';

const generalStyle = StyleSheet.create({
  mt10: {
    marginTop: 10,
  },
  mr10: {
    marginRight: 10,
  },
  mb2: {
    marginBottom: 20,
  },
  flex1: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 30,
    backgroundColor: '#fff',
  },
  rowCenterV: {
    flexDirection: 'row',
    alignItems: "center"
  },
  containCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerRow: {
    flexDirection: 'row'
  },
  containRowCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  input: {
    height: 50,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#000',
    justifyContent: 'center',
  },
  label: {
    fontSize: 20,
    marginBottom: 10,
    borderRadius:4,
    
  },
 
  opt: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'rgb(243,243,243)'
  }
});

export default generalStyle;
