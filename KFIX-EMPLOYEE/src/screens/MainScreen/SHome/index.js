import { useEffect, useState } from "react";
import { Dimensions, Pressable, Switch, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import * as Location from "expo-location";
import generalColor from "../../../generals/colors";
import generalStyle from "../../../generals/generalStyle";
import styles from "./styles/stylesSHome";
import Geocoder from "react-native-geocoding";

import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { Marker } from "react-native-maps";
import { useRef } from "react";
import { getAddressFromLocation } from "../../../utils/map";

const SHome = () => {
  
  const { width, height } = Dimensions.get("window");

  const ASPECT_RATIO = width / height;

  const LATITUDE_DELTA = 0.02;

  const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
  let INITIAL_POSITION = {
    latitude: 10.824371876108833,
    longitude: 106.69208107191297,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  };

  const navigation = useNavigation();
  const mapRef = useRef();
  const [isEnabled, setIsEnabled] = useState(false);
  const [currentLoction,setCurrentLocation] = useState({address: '', coordinate: {}})

  const moveTo = async (position) => {
    const camera = await mapRef.current?.getCamera();
    if (camera) {
      camera.center = position;
      mapRef.current?.animateCamera(camera, { duration: 1000 });
    }
  };

  const toggleSwitch = async () => {
    console.log(isEnabled)
    if (!isEnabled) {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        return null;
      } else {
        try {
          let location = await Location.getCurrentPositionAsync({});
          const coordinate = {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
          };
          const address = await getAddressFromLocation(coordinate);
          moveTo(coordinate);
          await setCurrentLocation({
            address: address,
            coordinate: coordinate
          })
          setIsEnabled((previousState) => !previousState);
          console.log({
            address,
            coordinate
          });
        } catch (error) {
          console.log(error);
        }
      }
    } else {
      setIsEnabled(!isEnabled);
      //await Location.requestForegroundPermissionsAsync
    }
  };

  return (
    <View style={generalStyle.container}>
      <View style={{ flexDirection: "row" }}>
        <View style={{ flex: 1 }}></View>
        <View style={generalStyle.containerCenter}>
          <Text style={styles.status}>{isEnabled ? "Online" : "Offline"}</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Switch
            trackColor={{ false: "#767577", true: generalColor.primary }}
            thumbColor={isEnabled ? generalColor.border : generalColor.border}
            ios_backgroundColor="#3e3e3e"
            //onValueChange={toggleSwitch}
            onValueChange={toggleSwitch()}
            value={isEnabled}
            style={styles.switch}
          />
        </View>
      </View>
      <View style={styles.content}>
        <MapView
          ref={mapRef}
          style={{
            width: Dimensions.get("window").width,
            height: Dimensions.get("window").height,
          }}
          provider={PROVIDER_GOOGLE}
          initialRegion={INITIAL_POSITION}
          zoomEnabled={true}
          //onRegionChangeComplete={handleGetPossion}
        >
          {isEnabled && <Marker coordinate={currentLoction?.coordinate} />}
        </MapView>
      </View>
    </View>
  );
};

export default SHome;
