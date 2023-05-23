import { useEffect, useState } from "react";
import { ActivityIndicator, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import generalColor from "../../generals/colors";
import generalStyle from "../../generals/generalStyle";
import IntroduceSlider from "./components/IntroduceSlide";
import styles from "./styles/stylesSWelcome";
import { useDispatch, useSelector } from "react-redux";

import { clearErrResponse } from "../../redux/slice/authSlice";
import { login } from "../../redux/actions/action";
import { loginAuth } from "../../redux/actions/authActions";

const Welcome = () => {
  const navigation = useNavigation();
  const [checkPhone, setCheckPhone] = useState(false);
  const [checkPassword, setCheckPassword] = useState(false);
  const [loader, setloader] = useState(false);
  const [phoneNumber, setphoneNumber] = useState("0386200961");
  const [password, setpassword] = useState("0386200961");

  const dispatch = useDispatch();
  const { user, isAuthenticated , loading , error} = useSelector((state) => state.auth);

  const handleLogin = () => {
    console.log("phone", phoneNumber, password);


    // no server
    // dispatch(loginAuth(phoneNumber, password));

      // co server
      dispatch(login(phoneNumber, password));
    // navigation.navigate('MainScreen')
  };
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
    if (isAuthenticated) {
      navigation.navigate("MainScreen");
    }
  }, [isAuthenticated]);

  return (
    <View style={styles.container}>
      <IntroduceSlider />
      <View style={{ paddingVertical: 50 }}>
        <Text style={styles.header}>Đăng nhập</Text>
        <View style={{ marginTop: 10 }}>
          <View style={{ marginBottom: 20 }}>
            <TextInput
              style={generalStyle.input}
              keyboardType="numeric"
              placeholder="Số điện thoại"
              value={phoneNumber}
              onChangeText={setphoneNumber}
            />
            {checkPhone ? (
              <Text style={{ color: generalColor.error }}>
                Số điện thoại không hợp lệ!
              </Text>
            ) : (
              ""
            )}
          </View>
          <View style={{ marginBottom: 20 }}>
            <TextInput
              style={generalStyle.input}
              secureTextEntry={true}
              placeholder="Mật khẩu"
              value={password}
              onChangeText={setpassword}
            />
            {checkPassword ? (
              <Text style={{ color: generalColor.error }}>
                Mật khẩu không hợp lệ!
              </Text>
            ) : (
              ""
            )}
          </View>

          <TouchableOpacity
            style={styles.btnForgotPass}
            onPress={() => navigation.navigate("SForgotPassword")}
          >
            <Text style={{ color: generalColor.primary }}>Quên mật khẩu?</Text>
          </TouchableOpacity>
          {loader ? (
            <ActivityIndicator
              size="large"
              color={"bray"}
              animating={true}
            ></ActivityIndicator>
          ) : (
            <TouchableOpacity style={generalStyle.button} onPress={handleLogin}>
              <Text style={styles.txtButton}>Đăng nhập</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

export default Welcome;
