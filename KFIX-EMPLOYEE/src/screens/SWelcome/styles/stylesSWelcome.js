import { StyleSheet } from "react-native";
import generalColor from "../../../generals/colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: generalColor.white
  },
  header: { color: "green", fontSize: 15 },
  txtButton: {
    color: generalColor.colorTextbutton,
    fontSize: 20,
    fontWeight: "bold",
  },
  btnForgotPass: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginVertical: 10,
  },
});
