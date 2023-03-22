import { useNavigation } from "@react-navigation/native";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";

import stylesItem from "./stylesItem";

const Item = ({onPress}) => {
  //const navigation = useNavigation()
  return (
    <TouchableOpacity style={[stylesItem.wrapper, stylesItem.shadow]} onPress={onPress}>
      <View>
        <Text>Mất chìa khóa</Text>
        <Text>10:06</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Item;
