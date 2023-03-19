import React, { useEffect } from "react";
import { Text, View, Dimensions, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Foundation from "react-native-vector-icons/Foundation";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import generalStyle from "../../../contains/styles";
import styleProfile from "./stylesProfile";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../redux/action";
const { width } = Dimensions.get("window");

const Profile = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch()
  const {user , isAuthenticated} = useSelector(state => state.auth)

  const handleLogout =()=>{
    dispatch(logout())
   
  }
  useEffect(()=>{
    if(isAuthenticated === false){
      navigation.navigate('Welcome')
    }
  }, [isAuthenticated])


  return (
    <View style={generalStyle.wrapper}>
      <View style={{ flexDirection: "row" }}>
        <Image
          //style={styles.tinyLogo}
          style={styleProfile.avatar}
          source={{
            uri: user && user.avatar,
          }}
        />
        <View style={styleProfile.viewInfo}>
          <View style={styleProfile.info}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              {user && user.username}
            </Text>
            <Text style={{ fontSize: 20 }}>{user && user.phone}</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("EditProfile")}>
            <Foundation name="pencil" color="#666" size={28} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={generalStyle.mt10}>
        <TouchableOpacity style={generalStyle.opt}>
          <MaterialIcons name="feedback" size={30} color="#000" />
          <Text style={{ marginLeft: 10 }}>Phản hồi</Text>
        </TouchableOpacity>
        <TouchableOpacity style={generalStyle.opt} onPress ={handleLogout}>
          <Entypo name="log-out" size={30} color="#000" />
          <Text style={{ marginLeft: 10 }}>Đăng xuất</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Profile;
