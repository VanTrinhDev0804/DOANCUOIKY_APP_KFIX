import React, { useState } from "react";
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import RadioGroup from "react-native-radio-buttons-group";
import { useNavigation } from "@react-navigation/native";
import { generalStyle } from "../../contains";
import { ref, onValue, onChildChanged } from "firebase/database";
import { database } from "../../firebase/config";

import {
  Alert,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Button } from "../../components";
import Contact from "./Contact/Contact";
import ReasonCancelOrder from "./ReasonsCancelOrder/ReasonCancelOrder";
import { useDispatch, useSelector } from "react-redux";
import { loadOrder } from "../../redux/actions/orderAction";

import { useEffect } from "react";
import { updateOneOrder } from "../../redux/slice/orderSlice";
import { formatTimeFromCreateAt } from "../../utils/date";
import Notification from "../../Notification/Notification";

const Order = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { value, loading } = useSelector((state) => state.order);
  const keyer = value && value.keyer;
  const [statusOrder, setStatusOrder] = useState(value ? value.status : "");

  const orderRef = ref(database, "Orders/" + user.userId);
  onChildChanged(orderRef, (data) => {
    if(data.exists()){
      
      setStatusOrder(data.val());

    }
  });
  const [modalVisible, setModalVisible] = useState(false);
  const [refresh, setRefresh] = useState(false);

  const handlenotifyPrice = () => {
    Alert.alert(
      "KFix",
      "Đơn hàng của bạn đang được thợ sửa khóa xem xét, bạn sẽ nhận được thông báo về chi phí sửa chữa!",
      [
        {
          text: "Đồng ý",
          style: "Cancel",
        },
      ]
    );
  };

  const PullAndRefreshControl = () => {
    setRefresh(true);
    dispatch(loadOrder(user.userId));

    setTimeout(() => {
      setRefresh(false);
    }, 3000);
  };

  return (
    <>
      {value ? (
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
                <Text style={{ color: "#888", marginBottom: 20 }}>
                  Đặt dịch vụ lúc {value && formatTimeFromCreateAt(value.createAt)}
                  
                </Text>
                <View style={stylesOrder.orderDetail}>
                  <View style={[generalStyle.rowCenterV, generalStyle.mb2]}>
                    <Entypo name="location-pin" size={30} color="red" />
                    <View style={stylesOrder.infoCustomer}>
                      <Text style={stylesOrder.textInfoCustomerdiaChi}>
                        {value && value.diaChi}
                      </Text>
                    </View>
                  </View>
                  <View style={[generalStyle.rowCenterV, generalStyle.mb2]}>
                    <Entypo name="warning" size={30} color="orange" />
                    <View style={stylesOrder.infoCustomer}>
                      <Text style={stylesOrder.textInfoCustomer}>
                        {value && value.problem}
                      </Text>
                    </View>
                  </View>
                  <View
                    style={[generalStyle.rowCenterV, stylesOrder.infoEmployee]}
                  >
                    <Text style={[stylesOrder.textInfoCustomer]}>
                      Phí sửa chữa:
                    </Text>
                    {statusOrder=== "Đợi thợ báo giá" ? (
                      <FontAwesome5
                        name="info-circle"
                        size={24}
                        color={
                          statusOrder=== "Thợ đang đến"
                            ? "green"
                            : "#ccc"
                        }
                        onPress={handlenotifyPrice}
                      />
                    ) : (
                      <Text style={[stylesOrder.textInfoCustomer]}>
                        {value && value.price} vnđ
                      </Text>
                    )}
                  </View>
                </View>
              </View>
              <Text style={{ color: "#888", marginBottom: 10 }}>
                Trạng thái đơn :
              </Text>

              <View style={{ flexDirection: "row" }}>
                <Ionicons
                  name="ios-newspaper-outline"
                  size={20}
                  color="green"
                />
                <Text style={{ marginLeft: 10 }}>Thợ sửa khóa đã nhận đơn</Text>
              </View>

              <Entypo
                name="dots-three-vertical"
                size={20}
                color={
                  (statusOrder === "Báo giá" || statusOrder === "Thợ đang đến" || statusOrder === "Thợ đang sửa" || statusOrder === "Hoàn thành") ? "green" : "#ccc"
                }
              />

              <View style={{ flexDirection: "row" }}>
                <FontAwesome5
                  name="money-check"
                  size={20}
                  color={
                    (statusOrder === "Báo giá" || statusOrder === "Thợ đang đến" || statusOrder === "Thợ đang sửa" || statusOrder === "Hoàn thành")
                      ? "green"
                      : "#ccc"
                  }
                />
                <Text
                  style={{
                    marginLeft: 10,
                    color:
                    (statusOrder === "Báo giá" || statusOrder === "Thợ đang đến" || statusOrder === "Thợ đang sửa" || statusOrder === "Hoàn thành")
                        ? "#000"
                        : "#ccc",
                  }}
                >
                  Thợ báo phí sửa chữa
                </Text>
              </View>
              {/* thợ đang đến */}

              <Entypo
                name="dots-three-vertical"
                size={20}
                color={
                  (statusOrder === "Thợ đang đến" || statusOrder === "Thợ đang sửa" || statusOrder === "Hoàn thành") ? "green" : "#ccc"
                }
              />
              <View style={{ flexDirection: "row" }}>
                <FontAwesome5
                  name="motorcycle"
                  size={20}
                  color={
                    (statusOrder === "Thợ đang đến" || statusOrder === "Thợ đang sửa" || statusOrder === "Hoàn thành") ? "green" : "#ccc"
                  }
                />
                <Text
                  style={{
                    marginLeft: 10,
                    color:
                    (statusOrder === "Thợ đang đến" || statusOrder === "Thợ đang sửa" || statusOrder === "Hoàn thành")
                        ? "#000"
                        : "#ccc",
                  }}
                >
                  Thợ sửa khóa đang đến
                </Text>
              </View>
              {/* Đang sửa chữa */}
              <Entypo
                name="dots-three-vertical"
                size={20}
                color={
                  (statusOrder === "Thợ đang sửa" || statusOrder === "Hoàn thành") ? "green" : "#ccc"
                }
              />
              <View style={{ flexDirection: "row" }}>
                <MaterialIcons
                  name="home-repair-service"
                  size={20}
                  color={
                    (statusOrder === "Thợ đang sửa" || statusOrder === "Hoàn thành") ? "green" : "#ccc"
                  }
                />
                <Text
                  style={{
                    marginLeft: 10,
                    color:
                    (statusOrder === "Thợ đang sửa" || statusOrder === "Hoàn thành")
                        ? "#000"
                        : "#ccc",
                  }}
                >
                  Đang sửa khóa
                </Text>
              </View>
              <Entypo
                name="dots-three-vertical"
                size={20}
                color={
                  statusOrder === "Hoàn thành" ? "green" : "#ccc"
                }
              />
              {/* Hoàn thành */}
              <View style={{ flexDirection: "row" }}>
                <AntDesign
                  name="checkcircle"
                  size={20}
                  color={
                    statusOrder === "Hoàn thành" ? "green" : "#ccc"
                  }
                />
                <Text
                  style={{
                    marginLeft: 10,
                    color:
                      statusOrder === "Hoàn thành" ? "#000" : "#ccc",
                  }}
                >
                  Hoàn thành
                </Text>
              </View>
            </View>

            <Text style={{ color: "#888" }}>Thợ sửa:</Text>
            <View
              style={{
                borderWidth: 1,
                paddingHorizontal: 10,
                borderRadius: 10,
              }}
            >
              <Contact keyer={keyer} />
            </View>

            <ReasonCancelOrder
              modalVisible={modalVisible}
              setModalVisible={setModalVisible}
            />

            {value && statusOrder === "Hoàn thành" ? (
              <>
                <Button
                  title="XÁC NHẬN HOÀN THÀNH"
                  onPress={() => {
                    navigation.navigate("Vote");
                  }}
                />
                <Notification
                  title="Sửa xong"
                  body="Cảm ơn bạn đã lựa chọn KFix"
                />
              </>
            ) : (
              ""
            )}
            { value && statusOrder === "Báo giá" ? (
              <Button
                title="HỦY"
                onPress={() => setModalVisible(true)}
                customStyle={{ backgroundColor: "red" }}
              />
            ) : (
              ""
            )}
          </ScrollView>
        </View>
      ) : (
        <View style={generalStyle.wrapper}>
          <View style={stylesOrder.wapperorder}>
            <Text style={stylesOrder.orderTitle}>Bạn chưa có đơn hàng!</Text>
          </View>
        </View>
      )}
    </>
  );
};

const stylesOrder = StyleSheet.create({
  wrapper: {
    padding: 5,
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
  orderDetail: {
    borderTopWidth: 0.3,
    borderTopColor: "#ccc",
  },
  infoCustomer: {
    marginLeft: 10,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  textInfoCustomer: {
    fontWeight: "bold",
    fontSize: 20,
  },
  textInfoCustomerdiaChi: {
    fontSize: 16,
    fontWeight: "bold",
  },
  infoEmployee: {
    justifyContent: "space-between",
    // marginBottom: 5,
  },
  textInfoCustomer: {
    fontSize: 16,
  },
});

export default Order;
