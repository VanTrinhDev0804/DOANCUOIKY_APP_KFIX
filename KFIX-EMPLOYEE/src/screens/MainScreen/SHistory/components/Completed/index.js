import { Text, View } from "react-native";
import { generalStyle } from "../../../../../generals";
import Item from "../Item";

const Completed = () => {
  return (
    <View style={generalStyle.container}>
      <Item />
      <Item />
      <Item />
      <Item />
    </View>
  );
};

export default Completed;
