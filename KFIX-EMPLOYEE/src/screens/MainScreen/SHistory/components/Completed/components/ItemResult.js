import { StyleSheet, View, Text, ActivityIndicator } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
const ItemResult = ({ icon, title, result, color,loading }) => {
  const styles = StyleSheet.create({
    container: {
      width: "48%",
      height: 100,
      backgroundColor: color,
      borderRadius: 10,
      flexDirection: "row",
      padding: 10,
      //justifyContent: 'center',
      alignItems: "center",
    },
    result: {
      marginLeft: 10,
    },
    txtResult: {
      fontSize: 16,
      color: "#fff",
    },
  });
  return (
    <View style={styles.container}>
      <FontAwesome5 name={icon} size={30} color="#000" />
      <View style={styles.result}>
        <Text style={styles.txtResult}>{title}</Text>
        {loading ? (
          <ActivityIndicator />
        ) : (
          <Text style={styles.txtResult}>{result}</Text>
        )}
      </View>
    </View>
  );
};

export default ItemResult;
