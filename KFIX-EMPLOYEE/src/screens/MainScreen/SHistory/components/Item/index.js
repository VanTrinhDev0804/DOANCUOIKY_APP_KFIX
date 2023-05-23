import { useNavigation } from "@react-navigation/native";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";
import generalStyle from "../../../../../generals/generalStyle";

import stylesItem from "./stylesItem";

const Item = ({ problem,address,totalPrice,time }) => {
  //const navigation = useNavigation()
  return (
    <View
      style={[stylesItem.wrapper, stylesItem.shadow]}
    >
      <View style={[generalStyle.containerRow,stylesItem.contentItem]}>
        <Text style={{ marginRight: 10 }}>{time.split(",")[1]}</Text>
        <Text>{time.split(",")[0]}</Text>
      </View>
      <View>
        <View style={[generalStyle.rowCenterV,stylesItem.contentItem]}>
          <Entypo name="warning" size={25} color="orange" />
          <View>
            <Text style={stylesItem.text}>{problem}</Text>
          </View>
        </View>
        <View style={[generalStyle.rowCenterV,stylesItem.contentItem]}>
          <Entypo name="location" size={25} color="red" />
          <View style={{maxWidth: '100%'}}>
            <Text style={stylesItem.text}>{address}</Text>
          </View>
        </View>
        <View style={[generalStyle.rowCenterV,stylesItem.contentItem]}>
          <FontAwesome5 name="coins" size={25} color="#FFD700" />
          <View style={{flexWrap: 'wrap'}}>
            <Text style={stylesItem.text}>{totalPrice}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Item;
