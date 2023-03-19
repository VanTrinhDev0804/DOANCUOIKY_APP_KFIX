import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import generalColor from "../../generals/colors";
import generalStyle from "../../generals/generalStyle";
import IntroduceSlider from "./components/IntroduceSlide";
import styles from "./styles/stylesSWelcome";

const Welcome = () => {
  const navigation = useNavigation()
  const handleLogin = () => {
    navigation.navigate('MainScreen')
  }
  return (
    <View style={styles.container}>
      <IntroduceSlider />
      <View style={{ paddingVertical: 50 }}>
        <Text style={styles.header}>Đăng nhập</Text>
        <View style={{ marginTop: 10 }}>
          <View style={{marginBottom: 20}}>
            <TextInput
              style={generalStyle.input}
              keyboardType="numeric"
              placeholder="Số điện thoại"
            />
            <Text style={{color: generalColor.error}}>Số điện thoại không hợp lệ!</Text>
          </View>
          <View style={{marginBottom: 20}}>
            <TextInput
              style={generalStyle.input}
              secureTextEntry={true}
              placeholder="Mật khẩu"
            />
            <Text style={{color: generalColor.error}}>Mật khẩu không hợp lệ!</Text>
          </View>

          <TouchableOpacity style={styles.btnForgotPass} onPress={() => navigation.navigate('SForgotPassword')}>
            <Text style={{ color: generalColor.primary }}>Quên mật khẩu?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={generalStyle.button} onPress={handleLogin}>
            <Text style={styles.txtButton}>Đăng nhập</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Welcome;
