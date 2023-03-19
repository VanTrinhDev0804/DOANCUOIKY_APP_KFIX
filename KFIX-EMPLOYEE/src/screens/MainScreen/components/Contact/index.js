import { Linking, TouchableOpacity, View } from "react-native";
import Ionicons  from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";

import generalStyle from "../../../../generals/generalStyle";
import styles from "./styles";
import { Button } from "../../../../components";

const Contact = () => {
  const phoneNumber = "0899306681";
  const navigation = useNavigation()
  return (
    <View style={[generalStyle.containerRow,{marginTop: 10}]}>
      <Button
        icon={<Ionicons name="call" size={25} color="#fff" />}
        customStyle={styles.customStyleIconRadius}
        onPress={() => Linking.openURL(`tel:${phoneNumber}`)}
      />
      <View style={{ marginRight: 10 }}></View>
      <Button
        icon={<AntDesign name="message1" size={25} color="#fff" />}
        customStyle={styles.customStyleIconRadius}
        onPress={()=>navigation.navigate('SChat')}
      />
    </View>
  );
};

export default Contact;
