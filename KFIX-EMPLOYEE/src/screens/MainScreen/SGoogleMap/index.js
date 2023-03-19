import { useEffect, useRef, useState } from "react";
import { Button } from "../../../components";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import AntDesign  from 'react-native-vector-icons/AntDesign'
import styles from "./styles";
import MapViewDirections from "react-native-maps-directions";
import { Marker } from "react-native-maps";

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
const GoogleMap = () => {

  const mapRef = useRef();
  const [origin, setOrigin] = useState({
    latitude: 10.824371876108833,
    longitude: 106.69208107191297,
  });
  const [destination, setDestination] = useState({
    latitude: 10.85584,
    longitude: 106.63114,
  });
  const [showDirections, setShowDirections] = useState(false);
  const [distance, setDistance] = useState(0);
  const [duration, setDuration] = useState(0);

  //   const moveTo = async (position) => {
  //     const camera = await mapRef.current?.getCamera();
  //     if (camera) {
  //       camera.center = position;
  //       mapRef.current?.animateCamera(camera, { duration: 1000 });
  //     }
  //   };

  const traceRouteOnReady = (args) => {
    if (args) {
      // args.distance
      // args.duration
      setDistance(args.distance);
      setDuration(args.duration);
    }
  };

  const traceRoute = () => {

      mapRef.current?.fitToCoordinates([origin, destination], { edgePadding });
  };

  const edgePaddingValue = 0;
  const edgePadding = {
    top: edgePaddingValue,
    right: edgePaddingValue,
    bottom: edgePaddingValue,
    left: edgePaddingValue,
  };
  return (
    <View style={{ flex: 1 }}>
      <MapView
        ref={mapRef}
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={INITIAL_POSITION}
        zoomEnabled={true}
        //showsMyLocationButton={true}
        loadingEnabled={true}
      >
        <Marker coordinate={destination} />
        <Marker coordinate={origin}/>

        <MapViewDirections
          origin={origin}
          destination={destination}
          apikey="AIzaSyDymGZaNKMgK9-_NNceShNhRE2xtfqecW4"
          strokeColor="#6644ff"
          strokeWidth={7}
          onReady={traceRouteOnReady}
        />
      </MapView>
      <View style={styles.wrapSelectLocation}>
        <View style={styles.location}>
          <View style={styles.resultRoute}>
            <Text style={styles.time}>{Math.ceil(duration)} phút </Text>
            <Text style={styles.distance}>{`(${distance.toFixed(1)})`} Km</Text>
            <TouchableOpacity style={{marginLeft: 20}} onPress={traceRoute}>
                <AntDesign name="minuscircleo" size={30} />
            </TouchableOpacity>
          </View>
          <Button title="Bắt đầu" />
          {/* <Button
            title="thu nhỏ"
            onPress={onTra}
          /> */}
        </View>
      </View>
    </View>
  );
};

export default GoogleMap;
