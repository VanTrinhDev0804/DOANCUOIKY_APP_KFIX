import { useNavigation } from "@react-navigation/native";
import {
  View,
  Pressable,
  Text,
  LogBox,
  TextInput,
  Image,
  Alert,
  ScrollView,
} from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import ReadMore from "react-native-read-more-text";

import { Button, HeaderScreen } from "../../../components";
import { colors, generalStyle } from "../../../contains";
import stylesNewOrder from "./stylesNewOrder";
import { useEffect, useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import ButtonAddImage from "./ButtonAddImage/ButtonAddImage";

import { useDispatch, useSelector } from "react-redux";
import { loadKeyerLocation } from "../../../redux/actions/orderAction";

const NewOrder = ({ route }) => {
  const dispatch = useDispatch();
  var currentdate = new Date();
  var datetime =
    currentdate.getHours() +
    ":" +
    currentdate.getMinutes() +
    ", " +
    currentdate.getDate() +
    "/" + 
    (currentdate.getMonth() + 1) +
    "/" +
    currentdate.getFullYear();

  const loaiKhoa = route.params.loaiKhoa;
  const navigation = useNavigation();
  const orderID = Date.now().toString()
  const [address, setAddress] = useState("");
  const [open, setOpen] = useState(false);
  const [showNote, setShowNote] = useState(false);
  const [problem, setProblem] = useState("");
  const [note, setNote] = useState("");
  const [items, setItems] = useState([
    { label: "Hỏng chìa khóa", value: "Hỏng chìa khóa" },
    { label: "Mất chìa khóa", value: "Mất chìa khóa" },
    { label: "Hỏng ổ khóa", value: "Hỏng ổ khóa" },
  ]);
  const [imgURL, setImgURL] = useState("");

  useEffect(() => {
    if (route.params) {
      const address = route?.params?.currentLocation?.address;
      if (address != "") setAddress(address);
    }
  }, [route]);



  const handleEventOption = () => {
    Alert.alert("Hủy đặt đơn", "Bạn có muốn hủy đặt đơn này", [
      {
        text: "Hủy",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "Đồng ý", onPress: () => console.log("OK Pressed") },
    ]);
  };

  const handelCreateOrder = () => {
    const neworder =
      note === ""
        ? {
            diaChi: address,  
            loaiKhoa: route.params.loaiKhoa,
            problem: problem,
            image: imgURL,
            price: 1,
            orderID,
            createAt: datetime,
          }
        : {
            diaChi: address,
            loaiKhoa: route.params.loaiKhoa,
            problem: problem,
            image: imgURL,
            note: note,
            price: 1,
            orderID,
            createAt: datetime,
          };
    const isEmty = Object.values(neworder).includes(""); // true ==> thì không thêm vào realtime yc nhaaph đầy đủ thông tin

    if (isEmty) {
      Alert.alert("Thông báo", "Vui lòng điền đầy đủ thông tin");
    } else {
      // writeOrderRTDatabase(orderID, neworder);
      // dinh vi, 
      dispatch(loadKeyerLocation(address, route.params.loaiKhoa));

      navigation.navigate("HaveEmployee", { Order: neworder });
    }
  };

  const handleAddImgURL = (value) => {
    setImgURL(value);

  };

  const handelOpenNote = () => {
    setShowNote(!showNote);
  };


  return (
    <View style={generalStyle.wrapper}>
      <HeaderScreen
        goBack
        name="Đặt đơn"
        option="Hủy"
        eventOption={handleEventOption}
      />
      <ScrollView>
        <View>
          <Text style={generalStyle.label}>Địa chỉ của bạn:</Text>
          <Pressable
            style={generalStyle.input}
            onPress={() => {
              navigation.navigate("SearchLocation", { loaiKhoa: loaiKhoa });
            }}
          >
            <View style={stylesNewOrder.wConstainLocatin}>
              <Entypo
                name="location-pin"
                size={35}
                color={colors.primaryColor}
              />
              <View style={{ width: "85%" }}>
                <ReadMore numberOfLines={1} renderTruncatedFooter={() => null}>
                  <Text style={stylesNewOrder.txtLocation}>
                    {address ? address : "Chưa có"}
                  </Text>
                </ReadMore>
              </View>
            </View>
          </Pressable>
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={generalStyle.label}>Loại khóa</Text>
          <Pressable
            style={generalStyle.input}
            // onPress={() => {
            //   navigation.navigate("SearchLocation");
            // }}
          >
            <View style={stylesNewOrder.wConstainLocatin}>
              <Entypo name="lock" size={35} color={colors.primaryColor} />
              <View style={{ width: "85%" }}>
                <ReadMore numberOfLines={1} renderTruncatedFooter={() => null}>
                  <Text style={stylesNewOrder.txtLocation}>{loaiKhoa}</Text>
                </ReadMore>
              </View>
            </View>
          </Pressable>
        </View>

        <View style={{ marginTop: 20 }}>
          <Text style={generalStyle.label}>Mô tả vấn đề của bạn:</Text>
          <DropDownPicker
            open={open}
            value={problem}
            items={items}
            placeholder={"Chọn"}
            setOpen={setOpen}
            setValue={setProblem}
            setItems={setItems}
            labelStyle={{ fontSize: 18 }}
            textStyle={{ fontSize: 18 }}
            listMode="SCROLLVIEW"
            scrollViewProps={{
              nestedScrollEnabled: true,
            }}
          />
        </View>

        <View style={{ marginTop: 20 }}>
          <Pressable onPress={handelOpenNote}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <View style={{ height: "90%", marginRight: 4 }}>
                {showNote ? (
                  <Entypo name="circle-with-minus" size={25} color={"red"} />
                ) : (
                  <Entypo
                    name="circle-with-plus"
                    size={25}
                    color={colors.primaryColor}
                  />
                )}
              </View>
              <Text
                style={{
                  ...generalStyle.label,
                  color: showNote ? "#000" : "#888",
                }}
              >
                Thêm ghi chú
              </Text>
            </View>
          </Pressable>
          {showNote ? (
            <TextInput
              multiline={true}
              numberOfLines={5}
              value={note}
              onChangeText={setNote}
              style={{
                height: 100,
                borderWidth: 1,
                padding: 5,
                borderRadius: 4,
              }}
            />
          ) : (
            ""
          )}
        </View>

        <View style={{ marginTop: 20 }}>
          <Text style={generalStyle.label}>Hình ảnh tình trạng khóa:</Text>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <ButtonAddImage
              onValue={handleAddImgURL}
              orderID={orderID}
            />
          </View>
        </View>

        <Button
          title="Gửi yêu cầu"
          onPress={handelCreateOrder}
          // onPress={() => navigation.navigate("HaveEmployee")}
        />
      </ScrollView>
    </View>
  );
};

export default NewOrder;