import { StyleSheet } from "react-native";
import generalColor from "../../../../generals/colors";

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  notification:{
    marginTop: 20,
    marginLeft: 20,
    //position: 'relative',
    width: 35,
    height: 35
  },
  new: {
    width: 25,
    height: 25,
    backgroundColor: 'red',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: -10,
    top: -10
  },
  textNew: {
    color: '#fff',
    fontWeight: 'bold',

  },
  title: {
    fontSize: 80,
    fontWeight: 'bold',
    color: generalColor.primary,
    marginBottom: 30
  },
  status: {
    fontSize: 20,
  },
  switch: {
    transform: [{ scaleX: 1.3 }, { scaleY: 1.3}],
    marginRight: 10
  }
});

export default styles