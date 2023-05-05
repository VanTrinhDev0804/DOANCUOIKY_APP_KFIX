import { Image, Text, TouchableOpacity, View,Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Foundation from "react-native-vector-icons/Foundation";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import generalStyle from "../../../generals/generalStyle";
import stylesMe from "./styles/stylesSMe";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../redux/actions/action";
import { useEffect } from "react";

const SMe = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch()
  const {user , isAuthenticated} = useSelector(state => state.auth)

  const handleLogout =()=>{
    dispatch(logout())
   
  }
  useEffect(()=>{
    if(isAuthenticated === false){
      navigation.navigate('SWelcome')
    }
  }, [isAuthenticated])

  return (
    <View style={generalStyle.container}>
      <View style={{ flexDirection: "row" }}>
        <Image
          //style={styles.tinyLogo}
          style={stylesMe.avatar}
          source={{
            uri: user && user.img
          }}
        />
        <View style={stylesMe.viewInfo}>
          <View style={stylesMe.info}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              {user && user.tenTho}
            </Text>
            <Text style={{ fontSize: 20 }}>{user && user.phone}</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("EditProfile")}>
            <Foundation name="pencil" color="#666" size={28} />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={stylesMe.opt}>
          <FontAwesome5 name="coins" size={30} color="#FFD700" />
          <Text style={{ marginLeft: 10,fontSize: 25, fontWeight: 'bold' }}>Số dư: {user.balanceAc}</Text>
        </TouchableOpacity>
      <View style={{marginTop: 10}}>
        
        <TouchableOpacity style={stylesMe.opt}>
          <MaterialIcons name="feedback" size={30} color="#000" />
          <Text style={{ marginLeft: 10 }}>Phản hồi</Text>
        </TouchableOpacity>
        <TouchableOpacity style={stylesMe.opt}>
          <FontAwesome name="line-chart" size={30} color="#000" />
          <Text style={{ marginLeft: 10 }}>Thống kê</Text>
        </TouchableOpacity>
        <TouchableOpacity style={stylesMe.opt} onPress ={handleLogout}>
          <Entypo name="log-out" size={30} color="#000" />
          <Text style={{ marginLeft: 10 }}>Đăng xuất</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SMe;
