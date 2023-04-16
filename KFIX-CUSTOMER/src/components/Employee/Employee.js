import { Alert, Image, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styleEmployee from "./styleEmployee";
import {
  updateKeyerByKeyvalue,
  updateOrderRTDatabase,
  writeOrderRTDatabase,
} from "../../firebase/asynsActions";
import { useSelector } from "react-redux";

const Employee = (props) => {
  const navigation = useNavigation();
  const { user } = useSelector((state) => state.auth);



  const handleSendRequireOrder = () => {
    let keyerSelect = props.keyer;
    const order = {
      keyer: keyerSelect,
      status: "Báo giá",
      userOrder: {
        username: user.username,
        phone: user.phone,
        avatar: user.avatar,
      },
      ...props.order,
    };

    Alert.alert("KFix", "Đơn hàng sẽ đã được gửi đến nhân viên sửa khóa", [
      {
        text: "Hủy",
        onPress: () => console.log("Cancel Pressed"),
        style: "Cancel",
      },
      {
        text: "Đồng ý",
        onPress: () => {
          writeOrderRTDatabase(user.userId, order);
          updateKeyerByKeyvalue(`${keyerSelect.keyerId}/order`, user.userId);
          updateKeyerByKeyvalue(
            `${keyerSelect.keyerId}/status`,
            "Xử lý đơn hàng"
          );
          navigation.navigate("Order");
        },
      },
    ]);

    // Alert.alert("KFix", "Đơn hàng sẽ được gửi đến nhân viên sửa khóa", [
    //   {
    //     text: "Hủy",
    //     onPress: () => console.log("Cancel Pressed"),
    //     style: "Cancel",
    //   },
    //   { text: "Đồng ý", onPress: handleSelectKeyer(dataUp) },
    // ]);
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
        <Text>Khoảng cách: {props.distance}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Employee;
