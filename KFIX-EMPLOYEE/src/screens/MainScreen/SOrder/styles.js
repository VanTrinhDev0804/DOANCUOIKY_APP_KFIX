import { StyleSheet } from "react-native";
import { generalColor, generalStyle } from "../../../generals";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: generalColor.borderColor,
    borderBottomWidth: 4,
    borderRightWidth: 3,
    borderRadius: 10,
    padding: 10,
  },
  contentOrder: {
    flexDirection: "row",
    marginTop: 15,
    alignItems: "center",
  },
  images: {
    flexDirection: "row",
    justifyContent: "space-around",
    flex: 1,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    resizeMode: "contain",
  },
  reasonOrder: {
    marginLeft: 10,
    fontSize: 20,
  },
  options: {
    marginTop: 20,
  },
  btn: {
    marginBottom: 10,
  },


  infoCustomer: {
    marginLeft: 10,
    flexDirection: 'row',
    flexWrap: 'wrap'
},
textInfoCustomer: {
    fontWeight: 'bold',
    fontSize: 20
},
infoEmployee:{
    justifyContent: 'space-between',
    marginBottom: 10,
},
textInfoCustomer: {
    fontSize: 20
},
});

export default styles;
