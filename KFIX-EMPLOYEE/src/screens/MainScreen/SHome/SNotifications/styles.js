import { StyleSheet } from "react-native";
import { generalColor } from "../../../../generals";

const styles = StyleSheet.create({
  notifyItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: generalColor.borderColor,
    borderBottomWidth: 4,
    borderRightWidth: 3,
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  content: { flex: 8 },
  status: { flex: 1, justifyContent: "center", alignItems: "center" },
  txtNotify: {
    fontSize: 20,
  },
  txtStatus: {
    color: "red",
  },
});

export default styles;
