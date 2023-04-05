import { Image, Text, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useNavigation } from '@react-navigation/native'
import { Linking } from "react-native";
import stylesContact from "./stylesContact";
import { Button } from "../../../components";

const Contact = (props) => {
  const { keyer} = props

  const phoneNumber = '0899306681'
  const navigation = useNavigation()
  return (
    <View style={stylesContact.wrapper}>
      <Image
        //style={styles.tinyLogo}
        style={{
          width: 70,
          height: 70,
          resizeMode: "contain",
          borderRadius: 100,
        }}
        source={{
          uri: keyer && keyer.img,
        }}
      />

      <View style={{ marginLeft: 20 }}>
        <Text style={{ fontSize: 18 }}>{keyer && keyer.tenTho}</Text>
        <View style={{flexDirection: 'row'}}>
        <Button
            icon={ <Ionicons name="call" size={25} color="#fff" /> }
            customStyle={stylesContact.customStyleIconRadius}
            onPress={()=>Linking.openURL(`tel:${keyer && keyer.phone}`)}
        />
        <View style={{marginRight: 10}}></View>
        <Button
            icon={ <AntDesign name="message1" size={25} color="#fff" /> }
            customStyle={stylesContact.customStyleIconRadius}
            onPress={()=>navigation.navigate('Chat')} 
        />
        </View>
        </View>
      </View>
    
  );
};

export default Contact;
