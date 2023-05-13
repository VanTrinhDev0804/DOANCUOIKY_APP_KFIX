import { useEffect, useState } from "react";
import { Dimensions, Pressable, Switch, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import * as Location from "expo-location";
import generalColor from "../../../generals/colors";
import generalStyle from "../../../generals/generalStyle";
import styles from "./styles/stylesSHome";
import Geocoder from "react-native-geocoding";
import Modal from "react-native-modal";

import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { Marker } from "react-native-maps";
import { useRef } from "react";
import { getAddressFromLocation } from "../../../utils/map";
import { useDispatch, useSelector } from "react-redux";
import {
  updateKeyerByKeyvalue,
  updateUserOnlineRTDatabase,
  updateUserOnlineStatus,
} from "../../../firebase/asynsActions";
import { ActivityIndicator } from "react-native-paper";
import { Button } from "../../../components";
import { database } from "../../../firebase/config";
import * as Notifications from "expo-notifications";
import {
  onValue,
  onChildChanged,
  ref,
  getDatabase,
  get,
  child,
} from "firebase/database";
import { loadStatusOnline } from "../../../redux/slice/authSlice";
import { loadOrder } from "../../../redux/actions/orderAction";
import { Alert } from "react-native";
import { loadOrderSuccess } from "../../../redux/slice/orderSlice";

const SHome = () => {
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: false,
      shouldSetBadge: false,
    }),
  });
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
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const mapRef = useRef();
  const [loading, setLoadding] = useState(false);
  const { order, loadding } = useSelector((state) => state.order);
  const [isEnabled, setIsEnabled] = useState(false);
  const [loadingLoaction, setLoadingLocation] = useState(false);
  const [isModalVisibleNotify, setIsModaleVisibleNotify] = useState(false);
  const [isOrderNOT, setIsOrderNOT] = useState(false);

  const [currentLoction, setCurrentLocation] = useState({
    address: "",
    coordinate: {},
  });

  const { user } = useSelector((state) => state.auth);
  const moveTo = async (position) => {
    const camera = await mapRef.current?.getCamera();
    if (camera) {
      camera.center = position;
      mapRef.current?.animateCamera(camera, { duration: 1000 });
    }
  };
  const dbRef = ref(getDatabase());
  const orderReciveOff = () => {
    get(child(dbRef, `Keyers/${user.userId}/order`)).then((snapshot) => {
      if (snapshot.exists()) {
        let value = snapshot.val();
        const dataUserRealtime =
          value !== ""
            ? {
                balanceAc: user.balanceAc,
                dinhVi: currentLoction,
                img: user.img,
                phone: user.phone,
                status: "Xử lý đơn hàng",
                tenTho: user.tenTho,
                loaiSC: user.loaiSC,
                order: value,
              }
            : {
                balanceAc: user.balanceAc,
                dinhVi: currentLoction,
                img: user.img,
                phone: user.phone,
                status: "Online",
                tenTho: user.tenTho,
                loaiSC: user.loaiSC,
                order: "",
              };

        updateUserOnlineRTDatabase(user.userId, dataUserRealtime);
        setLoadding(false);
      }
    });
  };
  const toggleSwitch = async () => {
    setLoadding(true);
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

          setCurrentLocation({
            address: address,
            coordinate: coordinate,
          });
          setIsEnabled((previousState) => !previousState);
          moveTo(coordinate);
          orderReciveOff();
        } catch (error) {
          console.log(error);
        }
      }
    } else {
      setIsEnabled(!isEnabled);
      setLoadding(false);
    }
  };
  // realtime order
  const orderKeyerRef = ref(database, "Keyers/" + user.userId);
  const orderKeyerStatus = ref(database, "Keyers/" + user.userId + "/order");

  onChildChanged(orderKeyerRef, (data) => {
    if (data.exists()) {
      if (data.key.toString() === "status" && data.val() === "Xử lý đơn hàng") {
        setIsModaleVisibleNotify(true);
        Notifications.scheduleNotificationAsync({
          content: {
            title: "Bạn nhận được yêu cầu sửa chữa mới!",
            body: "Xem chi tiết!",
          },
          trigger: 1,
        });

        // Alert.alert("KFix", "Bạn nhận được yêu cầu xử lý từ khách hàng!", [
        //   {
        //     text: "Chi tiết đơn hàng",
        //     onPress: () => navigation.navigate("SOrder"),
        //     style: "cancel",
        //   },
        // ]);
      }
    }
  });
  const handleOffline = () => {
    get(child(dbRef, `Keyers/${user.userId}/order`)).then((snapshot) => {
      if (snapshot.exists()) {
        if (snapshot.val() !== "") {
          Notifications.scheduleNotificationAsync({
            content: {
              title: "Bạn có đơn hàng chưa hoàn thành!",
              body: "Xem chi tiết!",
            },
            trigger: 1,
          });
          setIsOrderNOT(true);
        } else {
          updateUserOnlineStatus(user.userId, "Offline");
          dispatch(loadStatusOnline(false));
        }
      }
    });
  };
  useEffect(() => {
    if (isEnabled === false) {
      handleOffline();
    }
  }, [isEnabled]);

  const handleWatchOrder = () => {
    navigation.navigate("SOrder");
    setIsModaleVisibleNotify(false);
    setIsOrderNOT(false);
  };

  return (
    <View style={generalStyle.container}>
      <View style={{ flexDirection: "row" }}>
        <View style={{ flex: 1 }}></View>
        <View style={generalStyle.containerCenter}>
          <Text style={styles.status}>{isEnabled ? "Online" : "Offline"}</Text>
        </View>
        <View style={{ flex: 1 }}>
          {loading ? (
            <View style={{ flexDirection: "row-reverse" }}>
              <ActivityIndicator
                size="small"
                color={"green"}
                animating={true}
              ></ActivityIndicator>
            </View>
          ) : (
            <View>
              <Switch
                trackColor={{ false: "#767577", true: generalColor.primary }}
                thumbColor={
                  isEnabled ? generalColor.border : generalColor.border
                }
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
                style={styles.switch}
              />
            </View>
          )}
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
      {/* Modal notify when have order */}
      <Modal
        isVisible={isModalVisibleNotify}
        // onBackdropPress={handelCloseModal}
      >
        <View style={{ backgroundColor: "#fff", borderRadius: 8, padding: 20 }}>
          <Text style={{ fontSize: 18 }}>Bạn có đơn hàng mới!</Text>
          <Button title="Xem chi tiết!" onPress={handleWatchOrder} />
        </View>
      </Modal>
      <Modal
        isVisible={isOrderNOT}
        // onBackdropPress={handelCloseModal}
      >
        <View style={{ backgroundColor: "#fff", borderRadius: 8, padding: 20 }}>
          <Text style={{ fontSize: 18 }}>Bạn có đơn hàng chưa hoàn thành!</Text>
          <Button title="Xem chi tiết!" onPress={handleWatchOrder} />
        </View>
      </Modal>
    </View>
  );
};

export default SHome;
