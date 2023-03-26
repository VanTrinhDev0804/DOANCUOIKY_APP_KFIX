import { ScrollView, Text, View } from "react-native";
import { generalStyle } from "../../../../../generals";
import Item from "../Item";

const Completed = () => {
  return (
    <View style={generalStyle.container}>
      <ScrollView>
      <Item />
      <Item />
      <Item />
      <Item />
      </ScrollView>
      
    </View>
  );
};

export default Completed;
