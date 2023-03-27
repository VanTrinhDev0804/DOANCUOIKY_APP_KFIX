import { useNavigation } from "@react-navigation/native";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";
import generalStyle from "../../../../../generals/generalStyle";

import stylesItem from "./stylesItem";

const Item = ({ onPress }) => {
  //const navigation = useNavigation()
  return (
    <TouchableOpacity
      style={[stylesItem.wrapper, stylesItem.shadow]}
      onPress={onPress}
    >
      <View style={[generalStyle.containerRow,stylesItem.contentItem]}>
        <Text style={{ marginRight: 10 }}>26-03-2023</Text>
        <Text>10:07:32 am</Text>
      </View>
      <View>
        <View style={[generalStyle.rowCenterV,stylesItem.contentItem]}>
          <Entypo name="warning" size={25} color="orange" />
          <View>
            <Text style={stylesItem.text}>Mất chìa khóa</Text>
          </View>
        </View>
        <View style={[generalStyle.rowCenterV,stylesItem.contentItem]}>
          <Entypo name="location" size={25} color="red" />
          <View style={{flexWrap: 'wrap'}}>
            <Text style={stylesItem.text}>158 Tân Sơn Nhì, Tân Phú, TP. Hồ Chí Minh</Text>
          </View>
        </View>
        <View style={[generalStyle.rowCenterV,stylesItem.contentItem]}>
          <FontAwesome5 name="coins" size={25} color="#FFD700" />
          <View style={{flexWrap: 'wrap'}}>
            <Text style={stylesItem.text}>150.000 vnđ</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Item;
