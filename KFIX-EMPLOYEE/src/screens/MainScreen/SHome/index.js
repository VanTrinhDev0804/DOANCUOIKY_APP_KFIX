import { useEffect, useState } from "react";
import { Pressable, Switch, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import * as Location from "expo-location";
import generalColor from "../../../generals/colors";
import generalStyle from "../../../generals/generalStyle";
import styles from "./styles/stylesSHome";
import Geocoder from "react-native-geocoding";

const SHome = () => {
  const navigation = useNavigation();
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = async () => {
    if (!isEnabled) {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        return null;
      } else {
        try {
          let location = await Location.getCurrentPositionAsync({});
          setIsEnabled((previousState) => !previousState);
        } catch (error) {
          console.log(error);
        }
      }
    } else {
      setIsEnabled(!isEnabled)
      //await Location.requestForegroundPermissionsAsync
    }
  };

  return (
    <View style={generalStyle.container}>
      <Pressable
        style={styles.notification}
        onPress={() => navigation.navigate("SNotifications")}
      >
        <FontAwesome
          name="bell"
          size={35}
          color="#000"
          style={styles.bellIcon}
        />
        <View style={styles.new}>
          <Text style={styles.textNew}>1</Text>
        </View>
      </Pressable>
      <View style={styles.content}>
        <Text style={styles.title}>KFIX</Text>
        <Switch
          trackColor={{ false: "#767577", true: generalColor.primary }}
          thumbColor={isEnabled ? generalColor.border : generalColor.border}
          ios_backgroundColor="#3e3e3e"
          //onValueChange={toggleSwitch}
          onValueChange={toggleSwitch}
          value={isEnabled}
          style={{ transform: [{ scaleX: 3 }, { scaleY: 3 }] }}
        />
        <Text style={styles.status}>{isEnabled ? "Online" : "Offline"}</Text>
      </View>
    </View>
  );
};

export default SHome;
