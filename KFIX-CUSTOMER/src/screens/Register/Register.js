import { View, Text, ScrollView, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { generalStyle } from "../../contains";
import { Button, FormGroup, InputField } from "../../components";
import stylesLogin from "../Login/styleLogin";
import { useEffect, useState } from "react";
import { register } from "../../redux/action";
import { ActivityIndicator } from "react-native-paper";

const Register = () => {
  const { error, isRegister, isVerify, loading , user} = useSelector(
    (state) => state.auth
  );
  const [loader, setloader] = useState(false);
  const [checkname, setCheckname] = useState(false);
  const [checksdt, setChecksdt] = useState(false);
  const [checkpassword, setCheckpassword] = useState(false);
  const [checkConfirmpw, setCheckConfirmpw] = useState(false);

  // data
  const [username, setUserName] = useState("Nguyen Van Nam");
  const [phoneNumber, setphoneNumber] = useState("0386200961");
  const [password, setpassword] = useState("0386200961");
  const [confirmPassword, setconfirmPassword] = useState("0386200961");

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleRegister = () => {
    const data = {
      username,
      phoneNumber,
      password,
      confirmPassword,
    };

    dispatch(register(data));
  };
  useEffect(() => {
      if(loading){
        setloader(true)
      }
      else{
        setloader(false)
      }
  }, [loading]);

  useEffect(() => {
    if (isRegister) {
      alert("Đăng ký thành công!");
      navigation.navigate("Login");
    }
    if (error) {
      alert(error);
    }
  }, [error, isRegister]);
  console.log(error, isRegister, isVerify, loading , user);

  return (
    <ScrollView style={generalStyle.wrapper}>
      <FormGroup>
        <InputField
          label="Tên:"
          error={checkname ? "Tên không hợp lệ!" : ""}
          value={username}
          onChangeText={setUserName}
        />
        <InputField
          label="Số điện thoại:"
          keyboardType="numeric"
          error={checksdt ? "Số điện thoại không hợp lệ!" : ""}
          onChangeText={setphoneNumber}
          value={phoneNumber}
        />
        <InputField
          label="Mật khẩu:"
          secureTextEntry={true}
          error={
            checkpassword
              ? "Mật khẩu gồm ít nhất 8 kí tự gồm chữ thường, chữ hoa, số và kí tự đặc biệt!"
              : ""
          }
          value={password}
          onChangeText={setpassword}
        />
        <InputField
          label="Nhập lại mật khẩu:"
          secureTextEntry={true}
          error={checkConfirmpw ? "Mật khẩu không trùng khớp!" : ""}
          onChangeText={setconfirmPassword}
          value={confirmPassword}
        />

        {loader ? (
          <ActivityIndicator
            size="large"
            color={"bray"}
            animating={true}
          ></ActivityIndicator>
        ) : (
          <Button title="ĐĂNG KÝ" onPress={handleRegister} />
        )}

        <View style={stylesLogin.wNewUser}>
          <Text style={{ fontSize: 19 }}>Bạn đã có tài khoản?</Text>
          <Button
            title="Đăng nhập"
            noBackground
            customStyle={{ fontSize: 19, marginLeft: 8 }}
            onPress={() => navigation.navigate("Login")}
          />
        </View>
      </FormGroup>
    </ScrollView>
  );
};

export default Register;
