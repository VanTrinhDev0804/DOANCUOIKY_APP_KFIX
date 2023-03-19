import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import generalColor from "../../generals/colors";
import generalStyle from "../../generals/generalStyle";

const SConfirmPhoneNum = () => {
  const navigation = useNavigation()
  const handleSendOTP = () => {
    navigation.navigate('OTP')
  }
  return (
    <View style={generalStyle.container}>
      <View style={{ marginBottom: 20 }}>
        <TextInput
          style={generalStyle.input}
          keyboardType="numeric"
          placeholder="Số điện thoại"
        />
        <Text style={{ color: generalColor.error }}>
          Số điện thoại không hợp lệ!
        </Text>
      </View>
      <TouchableOpacity style={generalStyle.button} onPress={handleSendOTP}>
        <Text style={generalStyle.txtButton}>Tiếp tục</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SConfirmPhoneNum;
