import { Image, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from '@react-navigation/native'
import styleEmployee from "./styleEmployee";

const Employee = (props) => {
const navigation = useNavigation()
  return (
    <TouchableOpacity
    style={styleEmployee.wrapper}
    onPress={() => navigation.navigate('OrderEstimate')}
    >
      <Image
        //style={styles.tinyLogo}
        style={{ width: 95, height: 95,resizeMode: 'stretch',borderRadius: 10 }}
        source={{
          uri: props.url,
        }}
      />

      <View style={styleEmployee.info}>
        <Text style={{ fontWeight: "bold" }}>{props.name}</Text>
        <Text>Đánh giá: {props.vote}</Text>
        <Text>Khoảng cách: {props.distance}Km</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Employee;
