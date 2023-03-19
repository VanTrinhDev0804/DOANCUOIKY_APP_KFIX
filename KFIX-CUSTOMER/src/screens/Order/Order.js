import React, { useState } from "react";
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import RadioGroup from "react-native-radio-buttons-group";
import { useNavigation } from '@react-navigation/native'
import { generalStyle } from "../../contains";
import { Image, Modal, StyleSheet, Text, View } from "react-native";
import { Button } from "../../components";
import Contact from "./Contact/Contact";
import ReasonCancelOrder from "./ReasonsCancelOrder/ReasonCancelOrder";

const Order = () => {

  const navigation = useNavigation()

  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={generalStyle.wrapper}>
      <View style={stylesOrder.wrapper}>
        <View style={generalStyle.mb2}>
          <Text style={{ borderBottomColor: "#ccc", borderBottomWidth: 1 }}>
            20-04-2023, 11.05 pm
          </Text>
          <Contact />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Ionicons name="ios-newspaper-outline" size={20} color="green" />
          <Text style={{ marginLeft: 10 }}>Thợ sửa khóa đã nhận đơn</Text>
        </View>

        <Entypo name="dots-three-vertical" size={20} color="green" />

        <View style={{ flexDirection: "row" }}>
          <FontAwesome5 name="motorcycle" size={20} color="green" />
          <Text style={{ marginLeft: 10 }}>
            Thợ sửa đang đến vị trí của bạn
          </Text>
        </View>

        <Entypo name="dots-three-vertical" size={20} color="#ccc" />
        <View style={{ flexDirection: "row" }}>
          <MaterialIcons name="home-repair-service" size={20} color="#ccc" />
          <Text style={{ marginLeft: 10, color: "#ccc" }}>Đang sửa khóa</Text>
        </View>
        <Entypo name="dots-three-vertical" size={20} color="#ccc" />

        <View style={{ flexDirection: "row" }}>
          <AntDesign name="checkcircle" size={20} color="#ccc" />
          <Text style={{ marginLeft: 10, color: "#ccc" }}>Sửa xong</Text>
        </View>
        <Entypo name="dots-three-vertical" size={20} color="#ccc" />

        <View style={{ flexDirection: "row" }}>
          <FontAwesome5 name="money-check" size={20} color="#ccc" />
          <Text style={{ marginLeft: 10, color: "#ccc" }}>Thanh toán</Text>
        </View>
      </View>
      <ReasonCancelOrder modalVisible={modalVisible} setModalVisible={setModalVisible}/>
      <Button title="XÁC NHẬN SỬA XONG" onPress={() => {navigation.navigate('Vote')}}/>
      <Button
        title="HỦY"
        onPress={() => setModalVisible(true)}
        customStyle={{ backgroundColor: "red" }}
      />
    </View>
  );
};

const stylesOrder = StyleSheet.create({
  wrapper: {
    borderWidth: 1,
    padding: 10,
    borderBottomWidth: 2,
    borderColor: "#ccc",
    borderRadius: 6,
  },
  
});

export default Order;
