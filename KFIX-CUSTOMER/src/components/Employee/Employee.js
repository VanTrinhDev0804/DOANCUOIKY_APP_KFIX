import { Alert, Image, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styleEmployee from "./styleEmployee";
import { updateOrderRTDatabase, writeOrderRTDatabase } from "../../firebase/asynsActions";
import { useSelector } from "react-redux";

const Employee = (props) => {
  const navigation = useNavigation();
  const { user } = useSelector((state) => state.auth);


  const handleSelectKeyer = (data) => {
    
    const order ={  ...props.order , ...data , userOrder : {
        username : user.username,
        phone : user.phone,
        avatar : user.avatar,
    }} ;
    writeOrderRTDatabase( user.userId, order);
    navigation.navigate("Main");
  };

  const handleSendRequireOrder = () => {
    let keyerSelect= props.keyer;
    let dataUp = {
      keyer: keyerSelect,
      status: "Đợi thợ báo giá",
    };
    Alert.alert("KFix", "Đơn hàng sẽ được gửi đến nhân viên sửa khóa", [
      {
        text: "Hủy",
        onPress: () => console.log("Cancel Pressed"),
        style: "Cancel",
      },
      { text: "Đồng ý", onPress: handleSelectKeyer(dataUp) },
    ]);
  };

  return (
    <TouchableOpacity
      style={styleEmployee.wrapper}
      onPress={handleSendRequireOrder}
    >
      <Image
        //style={styles.tinyLogo}
        style={{
          width: 95,
          height: 95,
          resizeMode: "stretch",
          borderRadius: 10,
        }}
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
