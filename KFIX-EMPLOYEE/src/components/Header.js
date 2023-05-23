import { StyleSheet } from "react-native";
import { View, Text } from "react-native";

const Header = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "#ccc",
    borderBottomWidth: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Header;
