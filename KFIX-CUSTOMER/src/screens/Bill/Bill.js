import { Text, View } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import { colors, generalStyle } from "../../contains";
import Contact from "../Order/Contact/Contact";
import stylesBill from "./stylesBill";
import { Button } from "../../components";
import { useState } from "react";
import { database } from "../../firebase/config";
import { useSelector } from "react-redux";
import { ref , onValue} from "firebase/database";

const Bill = () => {
  const [orderAccept, setOrderAccept] = useState(false);
  const {user } = useSelector(state => state.auth)
  const handleAcceptOrder = () => {
    setOrderAccept(true);
  };

  const starCountRef = ref(database, "Orders/" + user.userId );
  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    // console.log(data)
    // updateStarCount(postElement, data);
  });

  return (
    <View style={generalStyle.wrapper}>
      <View style={stylesBill.general}>
        <Text style={stylesBill.orderId}>#321</Text>
        <View style={generalStyle.rowCenterV}>
          <View style={generalStyle.rowCenterV}>
            <Text style={generalStyle.mr10}>26-03-2023</Text>
            <Text>07:46:25 am</Text>
          </View>

          <View style={stylesBill.note}>
            <Text style={{ color: colors.primaryColor }}>
              {orderAccept ? "Hóa đơn" : "Hóa đơn dự kiến"}
            </Text>
          </View>
        </View>
      </View>
      <Text>Thợ sửa:</Text>
      <View style={stylesBill.infoEmployye}>
        <Contact />
      </View>

      <View style={stylesBill.orderDetail}>
        <View style={[generalStyle.rowCenterV, generalStyle.mb2]}>
          <Entypo name="location-pin" size={30} color="red" />
          <View style={stylesBill.infoCustomer}>
            <Text style={stylesBill.textInfoCustomer}>
              158 Tân Sơn Nhì, Tân Phú, Hồ Chí Minh
            </Text>
          </View>
        </View>
        <View style={[generalStyle.rowCenterV, generalStyle.mb2]}>
          <Entypo name="warning" size={30} color="orange" />
          <View style={stylesBill.infoCustomer}>
            <Text style={stylesBill.textInfoCustomer}>Mất chìa khóa</Text>
          </View>
        </View>
        <View style={[generalStyle.rowCenterV, stylesBill.infoEmployee]}>
          <Text style={[stylesBill.textInfoCustomer]}>Giá đưa ra:</Text>
          <Text style={[stylesBill.textInfoCustomer]}>15.000 vnđ</Text>
        </View>
        <View style={[generalStyle.rowCenterV, stylesBill.infoEmployee]}>
          <Text style={[stylesBill.textInfoCustomer]}>Phí di chuyển*:</Text>
          <Text style={[stylesBill.textInfoCustomer]}>15.000 vnđ</Text>
        </View>
        <View style={{ borderWidth: 0.3 }}></View>
        <View style={[generalStyle.rowCenterV, stylesBill.infoEmployee]}>
          <Text style={[stylesBill.textInfoCustomer]}>Tiền thanh toán:</Text>
          <Text style={[stylesBill.textInfoCustomer]}>30.000 vnđ</Text>
        </View>
      </View>
      {!orderAccept && <Button title="Chấp nhận" onPress={handleAcceptOrder} />}

      <Text style={{ marginTop: 10 }}>
        Lưu ý: Phí di chuyển được phát sinh tự động, dựa vào khoảng cách, thời
        gian bạn yêu cầu.
      </Text>
    </View>
  );
};

export default Bill;
