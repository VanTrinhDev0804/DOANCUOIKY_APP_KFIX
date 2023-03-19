import { Image, Text, TouchableOpacity, View,Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Foundation from "react-native-vector-icons/Foundation";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import generalStyle from "../../../generals/generalStyle";
import stylesMe from "./styles/stylesSMe";

const SMe = () => {
  return (
    <View style={generalStyle.container}>
      <View style={{ flexDirection: "row" }}>
        <Image
          //style={styles.tinyLogo}
          style={stylesMe.avatar}
          source={{
            uri: "https://www.themoviedb.org/t/p/w500/blKKsHlJIL9PmUQZB8f3YmMBW5Y.jpg",
          }}
        />
        <View style={stylesMe.viewInfo}>
          <View style={stylesMe.info}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              Nguyễn Minh Vương
            </Text>
            <Text style={{ fontSize: 20 }}>0899306681</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("EditProfile")}>
            <Foundation name="pencil" color="#666" size={28} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{marginTop: 10}}>
        <TouchableOpacity style={stylesMe.opt}>
          <MaterialIcons name="feedback" size={30} color="#000" />
          <Text style={{ marginLeft: 10 }}>Phản hồi</Text>
        </TouchableOpacity>
        <TouchableOpacity style={stylesMe.opt}>
          <FontAwesome name="line-chart" size={30} color="#000" />
          <Text style={{ marginLeft: 10 }}>Thống kê</Text>
        </TouchableOpacity>
        <TouchableOpacity style={stylesMe.opt}>
          <Entypo name="log-out" size={30} color="#000" />
          <Text style={{ marginLeft: 10 }}>Đăng xuất</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SMe;
