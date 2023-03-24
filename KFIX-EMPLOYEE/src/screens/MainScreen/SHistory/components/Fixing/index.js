import { useNavigation } from "@react-navigation/native";
import { Text, View } from "react-native";
import { generalStyle } from "../../../../../generals";
import Item from "../Item";

const Fixing = () => {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate('Detail')
  }
  return (
    <View style={generalStyle.container}>
      <Item onPress={onPress}/>
    </View>
  );
};

export default Fixing;
