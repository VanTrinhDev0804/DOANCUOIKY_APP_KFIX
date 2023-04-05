import React, { useState } from "react";
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import RadioGroup from "react-native-radio-buttons-group";
import { useNavigation } from "@react-navigation/native";
import { generalStyle } from "../../contains";
import {
  Alert,
  Image,
  Modal,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Button } from "../../components";
import Contact from "./Contact/Contact";
import ReasonCancelOrder from "./ReasonsCancelOrder/ReasonCancelOrder";
import { useSelector } from "react-redux";

const Order = () => {
  const navigation = useNavigation();
  const { value } = useSelector((state) => state.order);
  const keyer = value.keyer;
  const { status , diaChi , problem , price} = value;
  console.log("====================================");
  console.log(value);
  console.log("====================================");
  const [modalVisible, setModalVisible] = useState(false);
  const [refresh, setRefresh] = useState(false);

  const handlenotifyPrice = () => {
    Alert.alert(
      "KFix",
      "Đơn hàng của bạn đang được thợ sửa khóa xem xét, bạn sẽ nhận được thông báo về chi phí sửa chữa!",
      [
        {
          text: "Đồng ý",
          // onPress: () => console.log("Cancel Pressed"),
          style: "Cancel",
        },
      ]
    );
  };

  const PullAndRefreshControl = () => {
    setRefresh(true);

    setTimeout(() => {
      setRefresh(false);
    }, 3000);
  };

  return (
    <View style={generalStyle.wrapper}>
      <View style={stylesOrder.wapperorder}>
        <Text style={stylesOrder.orderTitle}>
          Chi tiết hóa đơn {value.orderID}
        </Text>
      </View>

      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refresh}
            onRefresh={PullAndRefreshControl}
          />
        }
      >
        <View style={stylesOrder.wrapper}>
          <View style={generalStyle.mb2}>
            <Text style={{ color: "#888" , marginBottom: 20}}>
              Đặt dịch vụ lúc {value && value.createAt}
            </Text>
            <Text style ={{ color: "#888"}}>Thợ sửa:</Text>
            <View style ={{ borderWidth: 1,
        paddingHorizontal: 10,
        borderRadius: 10,
        }}>

            <Contact keyer={keyer} />

            </View>
          </View>



          <View style={{ flexDirection: "row" }}>
            <Ionicons name="ios-newspaper-outline" size={20} color="green" />
            <Text style={{ marginLeft: 10 }}>Thợ sửa khóa đã nhận đơn</Text>
          </View>

          <Entypo
            name="dots-three-vertical"
            size={20}
            color={status && status === "Đợi thợ báo giá" ? "green" : "#ccc"}
          />

          <View style={{ flexDirection: "row" }}>
            <FontAwesome5
              name="money-check"
              size={20}
              color={status && status === "Đợi thợ báo giá" ? "green" : "#ccc"}
            />
            <Text
              style={{
                marginLeft: 10,
                color: status && status === "Đợi thợ báo giá" ? "#000" : "#ccc",
              }}
            >
              Thợ báo phí sửa chữa
            </Text>
          </View>
          {/* thợ đang đến */}

          <Entypo
            name="dots-three-vertical"
            size={20}
            color={status && status === "Thợ đang đến" ? "green" : "#ccc"}
          />
          <View style={{ flexDirection: "row" }}>
            <FontAwesome5
              name="motorcycle"
              size={20}
              color={status && status === "Thợ đang đến" ? "green" : "#ccc"}
            />
            <Text
              style={{
                marginLeft: 10,
                color: status && status === "Thợ đang đến" ? "#000" : "#ccc",
              }}
            >
              Thợ sửa khóa đang đến
            </Text>
          </View>
          {/* Đang sửa chữa */}
          <Entypo
            name="dots-three-vertical"
            size={20}
            color={status && status === "Đang sửa chữa" ? "green" : "#ccc"}
          />
          <View style={{ flexDirection: "row" }}>
            <MaterialIcons
              name="home-repair-service"
              size={20}
              color={status && status === "Đang sửa chữa" ? "green" : "#ccc"}
            />
            <Text
              style={{
                marginLeft: 10,
                color: status && status === "Đang sửa chữa" ? "#000" : "#ccc",
              }}
            >
              Đang sửa khóa
            </Text>
          </View>
          <Entypo
            name="dots-three-vertical"
            size={20}
            color={status && status === "Hoàn thành" ? "green" : "#ccc"}
          />
          {/* Hoàn thành */}
          <View style={{ flexDirection: "row" }}>
            <AntDesign
              name="checkcircle"
              size={20}
              color={status && status === "Hoàn thành" ? "green" : "#ccc"}
            />
            <Text
              style={{
                marginLeft: 10,
                color: status && status === "Hoàn thành" ? "#000" : "#ccc",
              }}
            >
              Sửa xong
            </Text>
          </View>
        </View>

        <View style={stylesOrder.orderDetail}>
          <View style={[generalStyle.rowCenterV, generalStyle.mb2]}>
            <Entypo name="location-pin" size={30} color="red" />
            <View style={stylesOrder.infoCustomer }>
              <Text style={stylesOrder.textInfoCustomerdiaChi}>
                {diaChi}
              </Text>
            </View>
          </View>
          <View style={[generalStyle.rowCenterV, generalStyle.mb2]}>
            <Entypo name="warning" size={30} color="orange" />
            <View style={stylesOrder.infoCustomer}>
              <Text style={stylesOrder.textInfoCustomer}>{problem}</Text>
            </View>
          </View>
          <View style={{ borderWidth: 0.3 }}></View>
          <View style={[generalStyle.rowCenterV, stylesOrder.infoEmployee]}>
            <Text style={[stylesOrder.textInfoCustomer]}>Phí sửa chữa:</Text>
            {
              status === "Đợi thợ báo giá" ?             <FontAwesome5
              name="info-circle"
              size={24}
              color={status && status === "Thợ đang đến" ? "green" : "#ccc"}
              onPress={handlenotifyPrice}
            /> :
            <Text style={[stylesOrder.textInfoCustomer]}>{price}</Text> 

            }


          </View>
        </View>
        <ReasonCancelOrder
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
        <Button
          title="XÁC NHẬN SỬA XONG"
          onPress={() => {
            navigation.navigate("Vote");
          }}
        />
        <Button
          title="HỦY"
          onPress={() => setModalVisible(true)}
          customStyle={{ backgroundColor: "red" }}
        />
      </ScrollView>
    </View>
  );
};

const stylesOrder = StyleSheet.create({
  wrapper: {
    // borderWidth: 1,
    padding: 10,
    // borderBottomWidth: 2,
    // borderColor: "#ccc",
    // borderRadius: 6,
  },
  orderTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  wapperorder: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
    borderBottomWidth: 2,
    borderBottomColor: "#ccc",
  },
  orderDetail: {},
  infoCustomer: {
    marginLeft: 10,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  textInfoCustomer: {
    fontWeight: "bold",
    fontSize: 20,
  },
  textInfoCustomerdiaChi :{
    fontSize :16,
    fontWeight: "bold"
  },
  infoEmployee: {
    justifyContent: "space-between",
    marginBottom: 10,
  },
  textInfoCustomer: {
    fontSize: 16,
  },
});

export default Order;
