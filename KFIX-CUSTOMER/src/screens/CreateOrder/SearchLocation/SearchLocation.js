import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import * as Location from "expo-location";
import {
  GooglePlacesAutocomplete,
  GooglePlaceDetail,
} from "react-native-google-places-autocomplete";

import stylesSearchLocation from "./stylesSearchLocation";
import { colors, generalStyle } from "../../../contains";
import Geocoder from "react-native-geocoding";

// {
//   address: '',
//   coordinates: { latitude: '12.342345',longitude: '-0.045345' }
// }

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

const SearchLocation = ({ route }) => {
  const navigation = useNavigation();
  const [addressCustomer, setAdressCustomer] = useState({
    address: "",
    coordinates: {
      latitude: 0,
      longitude: 0,
    },
  });

  //
  const getLocationUserNow = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.log("Permission to access location was denied");
      return null;
    }
    let location = await Location.getCurrentPositionAsync({});
    Geocoder.init("AIzaSyDymGZaNKMgK9-_NNceShNhRE2xtfqecW4", {
      language: "vn",
    });
    Geocoder.from({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    })
      .then((json) => {
        console.log(json);
        //let addressComponent = json.results[0].formatted_address;
        const currentLocation = {
          address: json.results[0].formatted_address,
          coordinates: {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
          },
        };
        navigation.navigate("NewOrder", { currentLocation });
      })
      .catch((error) => {
        console.log(error);
        return null;
      });
  };

  const handleSelected = (details = GooglePlaceDetail, data) => {
    // const position = {
    //   latitude: details?.geometry.location.lat || 0,
    //   longitude: details?.geometry.location.lng || 0,
    // };
    Geocoder.init("AIzaSyDymGZaNKMgK9-_NNceShNhRE2xtfqecW4", {
      language: "vn",
    });
    Geocoder.from({
      latitude: details?.geometry.location.lat || 0,
      longitude: details?.geometry.location.lng || 0
    })
      .then((json) => {
        console.log(json);
        //let addressComponent = json.results[0].formatted_address;
        const currentLocation = {
          address: json.results[0].formatted_address,
          coordinates: {
            latitude: details?.geometry.location.lat,
            longitude: details?.geometry.location.lng,
          },
        };
        navigation.navigate("NewOrder", { currentLocation });
      })
      .catch((error) => {
        console.log(error);
        return null;
      });
  };

  const handleChooseCurrentLocation = () => {
    getLocationUserNow();
  };
  return (
    <View style={generalStyle.wrapper}>
      <View style={stylesSearchLocation.header}>
        <Ionicons
          name="close"
          size={30}
          color="#000"
          style={stylesSearchLocation.icon}
          onPress={() => navigation.goBack()}
        />
        <Text style={stylesSearchLocation.txtHeader}>Bạn đang ở đâu?</Text>
      </View>
      <View style={stylesSearchLocation.contain}>
        <View style={stylesSearchLocation.options}>
          <TouchableOpacity
            style={[
              stylesSearchLocation.btn,
              stylesSearchLocation.btn.btnRadius,
            ]}
            onPress={() => {
              navigation.navigate("SelectLocationOnMap");
            }}
          >
            <FontAwesome5
              name="map-marked"
              size={20}
              color="green"
              style={[stylesSearchLocation.icon.iconEx]}
            />
            <Text style={colors.textColor}>Chọn bằng bản đồ</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              stylesSearchLocation.btn,
              stylesSearchLocation.btn.btnRadius,
            ]}
            onPress={handleChooseCurrentLocation}
          >
            <MaterialIcons
              name="my-location"
              size={20}
              color={colors.primaryColor}
              style={stylesSearchLocation.icon.iconEx}
            />
            <Text style={colors.textColor}>Vị trí hiện tại của bạn</Text>
          </TouchableOpacity>
        </View>
        <GooglePlacesAutocomplete
          styles={{ textInput: stylesSearchLocation.txtSearch }}
          placeholder="Nhập địa chỉ của bạn"
          enablePoweredByContainer={false}
          fetchDetails
          onPress={(data, details = null) => {
            handleSelected(details, data);
          }}
          query={{
            key: "AIzaSyDymGZaNKMgK9-_NNceShNhRE2xtfqecW4",
            language: "vn",
            components: "country:vn",
          }}
        />
      </View>
    </View>
  );
  //
  // const mapRef = useRef(null);
  // const ref = useRef()
  // const [origin, setOrigin] = useState(route.params.origin);
  // const [addressCustomer, setAddressCustomer] = useState('');

  // const edgePaddingValue = 70;

  // const moveTo = async position => {
  //   const camera = await mapRef.current?.getCamera();
  //   if (camera) {
  //     camera.center = position;
  //     mapRef.current?.animateCamera(camera, {duration: 1000});
  //   }
  // };

  // useEffect(() => {
  //   if(route.params.place){
  //     ref.current.setAddressText(route.params.place)

  //   }
  //   //console.log(1);
  // },[])
  // const handleSelected = (details = GooglePlaceDetail, data) => {
  //   const position = {
  //     latitude: details?.geometry.location.lat || 0,
  //     longitude: details?.geometry.location.lng || 0,
  //   };
  //   setOrigin(position);
  //   moveTo(position);
  //   setAddressCustomer(data.description);
  // };

  // return (
  //   <View style={stylesSearchLocation.container}>
  //     <MapView
  //       ref={mapRef}
  //       style={stylesSearchLocation.map}
  //       provider={PROVIDER_GOOGLE}
  //       initialRegion={INITIAL_POSITION}>
  //       {origin && <Marker coordinate={origin} />}
  //     </MapView>

  //     <View style={stylesSearchLocation.header}>
  //       <Feather
  //         name="arrow-left"
  //         size={35}
  //         color="#000"
  //         style={stylesSearchLocation.btnBack}
  //         onPress={() => navigation.goBack()}
  //       />
  //       <View style={[stylesSearchLocation.searchContainer]}>
  //         <GooglePlacesAutocomplete
  //           ref={ref}
  //           styles={{textInput: stylesSearchLocation.txtSearch}}
  //           placeholder="Nhập địa chỉ của bạn"
  //           enablePoweredByContainer={false}
  //           fetchDetails
  //           onPress={(data, details = null) => {
  //             handleSelected(details, data);
  //           }}
  //           setAddressText={() => set}
  //           query={{
  //             key: 'AIzaSyDQBK0WUEi9UVhdv8wO8tz0_nVEQj-naqY',
  //             language: 'vn',
  //             components: 'country:vn',
  //           }}
  //         />
  //       </View>
  //     </View>
  //     <TouchableOpacity
  //       style={stylesSearchLocation.btnContinue}
  //       onPress={() =>
  //         navigation.navigate('NewOrder', {
  //           addressCustomer,
  //           origin,
  //         })
  //       }>
  //       <Feather name="arrow-right" size={35} color="#000" />
  //     </TouchableOpacity>
  //   </View>
  //);
};

export default SearchLocation;
