import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { generalStyle } from "../../contains";
import { Button, FormGroup, InputField } from "../../components";
import stylesLogin from "./styleLogin";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, sendSMSOTP, verifyOTPhandel } from "../../redux/action";
import { ActivityIndicator } from "react-native-paper";
import { clearErrResponse } from "../../redux/slice/authSlice";


const Login = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [loader, setloader] = useState(false);
  const [checksdt, setChecksdt] = useState(false);
  const [checkpassword, setCheckpassword] = useState(false);

  const [phoneNumber, setphoneNumber] = useState("0386200961");
  const [password, setpassword] = useState("0386200961");

  const {user, isAuthenticated, loading, isVerify , error} = useSelector((state) => state.auth);
  const handelLogin = () => {
    console.log("phone", phoneNumber, password);
    dispatch(login(phoneNumber, password));
  };
  const handleVerifyPhone = (value) => {
    if(user){
      dispatch(verifyOTPhandel(user.phone , value))
    }
   
    
     
  }

  useEffect(() => {
    if (loading) {
      setloader(true);
    } else {
      setloader(false);
    }
    if(error){
      alert(error)
      dispatch(clearErrResponse())
    }
  }, [loading]);

  useEffect(() => {
    if (isAuthenticated && isVerify) {
      navigation.navigate('Main')
    } else if(isAuthenticated &&  isVerify ===false){
      // dispatch(sendSMSOTP( user && user.phone))
      navigation.navigate('Accuracy',{phone: user && user.phone,action: handleVerifyPhone})
    }
  }, [isAuthenticated, isVerify , loading ]);

  return (
    <View style={generalStyle.wrapper}>
      <FormGroup>
        <InputField
          label="Số điện thoại:"
          keyboardType="numeric"
          onChangeText={setphoneNumber}
          value={phoneNumber}
          error={checksdt ? "Số điện thoại không hợp lệ!" : ""}
        />
        <InputField
          label="Mật khẩu:"
          secureTextEntry={true}
          onChangeText={setpassword}
          value={password}
          error={
            checkpassword
              ? "Mật khẩu gồm ít nhất 8 kí tự gồm chữ thường, chữ hoa, số và kí tự đặc biệt!"
              : ""
          }
        />

        <Button
          title="Quên mật khẩu?"
          noBackground
          customStyle={{ marginTop: 20, fontSize: 19, alignItems: "flex-end" }}
          onPress={() => navigation.navigate("ForgotPassword")}
        />
        {loader ? (
          <ActivityIndicator
            size="large"
            color={"bray"}
            animating={true}
          ></ActivityIndicator>
        ) : (
          <>
            <Button title="ĐĂNG NHẬP" onPress={handelLogin} />
          </>
        )}
      </FormGroup>

      {loader ? (
        ""
      ) : (
        <View style={stylesLogin.wNewUser}>
          <Text style={{ fontSize: 19 }}>Người dùng mới?</Text>
          <Button
            title="Đăng ký"
            noBackground
            customStyle={{ fontSize: 19, marginLeft: 8 }}
            onPress={() => navigation.navigate("Register")}
          />
        </View>
      )}
    </View>
  );
};

export default Login;
