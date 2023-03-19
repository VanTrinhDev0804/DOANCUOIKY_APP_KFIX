import { StyleSheet } from "react-native";

const stylesMe = StyleSheet.create({
  avatar: {
    width: 95,
    height: 95,
    resizeMode: "stretch",
    borderRadius: 10,
    borderRadius: 90,
  },
  viewInfo: {
    flexDirection: "row",
    flex: 1,
    marginLeft: 15,
    alignItems: "center",
  },
  info: {
    flex: 1,
    marginLeft: 10,
  },

  opt: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "rgb(243,243,243)",
  },
});

export default stylesMe;
