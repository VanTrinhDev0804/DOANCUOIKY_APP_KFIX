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

const NewOrder = ({ route }) => {
  const navigation = useNavigation();
  const [address, setAddress] = useState("");
  const [open, setOpen] = useState(false);

  const [value, setValue] = useState("");
  const [items, setItems] = useState([
    { label: "Hỏng chìa khóa", value: "huchia" },
    { label: "Mất chìa khóa", value: "matchia" },
    { label: "Hỏng ổ khóa", value: "hongo" },
  ]);

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
              navigation.navigate("SearchLocation");
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
            onPress={() => {
              navigation.navigate("SearchLocation");
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
                    {route.params.problem}
                  </Text>
                </ReadMore>
              </View>
            </View>
          </Pressable>
        </View>

        <View style={{ marginTop: 20 }}>
          <Text style={generalStyle.label}>Mô tả vấn đề của bạn:</Text>
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
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
          <Text style={generalStyle.label}>Hình ảnh tình trạng khóa:</Text>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <ButtonAddImage />
          </View>
        </View>

        <View style={{ marginTop: 20}}>
          <Text style={generalStyle.label}>Ghi chú:</Text>
          <TextInput
            multiline={true}
            numberOfLines={5}
            style={{ height: 100, borderWidth: 1, padding: 5 }}
          />
        </View>
      <Button
        title="Gửi yêu cầu"
        onPress={() => navigation.navigate("HaveEmployee")}
      />
      </ScrollView>
    </View>
  );
};

export default NewOrder;
