import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import generalStyle from "../../generals/generalStyle";
import OTP from "../OTP";

const SForgotPassword = () => {
  const navigation = useNavigation();
  const [screen, setScreen] = useState(1);

  const handleSendOTP = () => {
    setScreen(screen + 1);
  };
  const handleAccuracyForgotPassword = () => {
    setScreen((prev) => prev + 1);
  };
  return (
    <View style={generalStyle.container}>
      {screen === 1 && (
        <View>
          <View style={{ marginBottom: 15 }}>
            <TextInput
              keyboardType="numeric"
              placeholder="Số điện thoại của bạn:"
              style={generalStyle.input}
            />
          </View>

          <TouchableOpacity style={generalStyle.button} onPress={handleSendOTP}>
            <Text style={generalStyle.txtButton}>Tiếp tục</Text>
          </TouchableOpacity>
        </View>
      )}
      {screen === 2 && <OTP action={handleAccuracyForgotPassword} />}
      {screen === 3 && (
        <View>
          <View style={{ marginBottom: 15 }}>
            <TextInput
              style={generalStyle.input}
              placeholder="Mật khẩu:"
              secureTextEntry={true}
              //error="Mật khẩu gồm ít nhất 8 kí tự gồm chữ thường, chữ hoa, số và kí tự đặc biệt!"
            />
          </View>
          <View style={{ marginBottom: 15 }}>
            <TextInput
              style={generalStyle.input}
              placeholder="Nhập lại mật khẩu:"
              secureTextEntry={true}
              //error="Mật khẩu không trùng khớp!"
            />
          </View>
          <TouchableOpacity style={generalStyle.button}>
            <Text style={generalStyle.txtButton}>Xác nhận</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default SForgotPassword;
