import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    resizeMode: "contain",
    position: "relative",
  },
  closeIcon: {
    position: "absolute",
    top: -5,
    right: -5,
  },
  modalView: {
    flex: 1,
    backgroundColor: "#000",
    position: "relative",
  },
  closeViewImage: {
    position: "absolute",
    right: 20,
    top: 20,
    zIndex: 1000
    // justifyContent: 'flex-end',
    // flexDirection: 'row',
    // flex: 1,
  },
  imageView: { width: "100%", height: "100%", resizeMode: "contain" },
});

export default styles;
