import { StyleSheet } from "react-native";
import generalColor from "../../../../generals/colors";

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
    fontWeight: 'bold'
  },
  title: {
    fontSize: 80,
    fontWeight: 'bold',
    color: generalColor.primary,
    marginBottom: 30
  },
  status: {
    marginTop: 30,
    fontSize: 30
  }
});

export default styles