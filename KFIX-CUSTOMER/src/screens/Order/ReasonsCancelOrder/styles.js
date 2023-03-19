import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    headerCancel: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      paddingVertical: 10,
      marginHorizontal: 15,
    },
    titleCancel: {
      fontWeight: "bold",
      fontSize: 20,
    },
    iconClose: {
      position: "absolute",
      right: 0,
      top: 0,
      padding: 10,
    },
    reasons: {
      padding: 10,
    },
    reason: {
      paddingVertical: 10,
      width: "100%",
    },
  });
  
  export default styles