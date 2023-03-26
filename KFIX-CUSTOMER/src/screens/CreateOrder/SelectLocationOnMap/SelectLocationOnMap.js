import { View, Text, Dimensions } from "react-native";
import { useEffect, useRef, useState } from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { Button } from "../../../components";
import stylesSelectOnMap from "./stylesSelectOnMap";
import Entypo from "react-native-vector-icons/Entypo";
import { colors } from "../../../contains";
import Geocoder from "react-native-geocoding";
import { useNavigation } from "@react-navigation/native";
import { getAddressFromLocation } from "../../../utils/map";

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
const SelectLocationOnMap = () => {
  const navigation = useNavigation();

  const mapRef = useRef();
  const [locationSelected, setLocationSelected] = useState({
    address: "",
    coordinates: {
      latitude: 0,
      longitude: 0,
    },
  });

  const handleGetPossion = async () => {
    let camera = await mapRef.current.getCamera();
    const coordinate = {
      latitude: camera.center.latitude,
      longitude: camera.center.longitude,
    };
    const address = await getAddressFromLocation(coordinate);
    setLocationSelected({
      address: address,
      coordinates: {
        latitude: camera.latitude,
        longitude: camera.longitude,
      },
    });
  };

  const handleChooseLocation = () => {
    navigation.navigate("NewOrder", { currentLocation: locationSelected });
  };

  return (
    <View style={{ flex: 1 }}>
      <MapView
        ref={mapRef}
        style={stylesSelectOnMap.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={INITIAL_POSITION}
        zoomEnabled={true}
        onRegionChangeComplete={handleGetPossion}
      ></MapView>
      <Entypo
        name="location-pin"
        size={40}
        color={colors.primaryColor}
        style={stylesSelectOnMap.iconChooseOnMap}
      />
      <View style={stylesSelectOnMap.wrapSelectLocation}>
        <View style={stylesSelectOnMap.location}>
          <Text>Vị trí bạn chọn:</Text>
          <Text>{locationSelected?.address}</Text>
        </View>
        <Button
          title="Chọn"
          customStyle={stylesSelectOnMap.btnSelect}
          onPress={handleChooseLocation}
        />
      </View>
    </View>
  );
};

export default SelectLocationOnMap;
