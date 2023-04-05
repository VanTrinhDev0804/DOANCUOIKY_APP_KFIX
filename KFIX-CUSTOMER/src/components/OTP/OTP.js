import { useEffect, useRef, useState } from "react";
import { Text, TextInput, View } from "react-native";

import { colors, generalStyle } from "../../contains";
import styleOTP from "./styleOTP";
import Button from "../Button";
import { useDispatch, useSelector } from "react-redux";
import { sendSMSOTP } from "../../redux/actions/action";
import { ActivityIndicator } from "react-native-paper";
import { clearErrResponse } from "../../redux/slice/authSlice";

const OTP = ({ action , phone }) => {
 const dispatch = useDispatch()
  const {loading, isVerify , error} = useSelector(state => state.auth)
  const [loader, setloader] = useState(false);

  useEffect(() => {
    if (loading) {
      setloader(true);
    } else {
      setloader(false);
    }
   
  }, [loading]);
  useEffect(()=>{
    if(error){
      alert(error)
      dispatch(clearErrResponse())
    }
  }, [isVerify , error])

  const firstOTP = useRef();
  const secondOTP = useRef();
  const thirdOTP = useRef();
  const fourOTP = useRef();
  const fiveOTP = useRef();
  const sixOTP = useRef();
  const [first, setFirst] = useState("");
  const [second, setSeccond] = useState("");
  const [third, setThird] = useState("");
  const [four, setFour] = useState("");
  const [five, setFive] = useState("");
  const [six, setSix] = useState("");
  const handelVerify = () => {
    const otp = first
      .concat(second)
      .concat(third)
      .concat(four)
      .concat(five)
      .concat(six);
    if(otp){
      action(otp)
    }
  };

  return (
    <View style={[generalStyle.wrapper, generalStyle.containCenter]}>
      <Text>Vui lòng nhập mã xác thực đã gửi đến số điện thoại của bạn</Text>
      <View style={styleOTP.otps}>
        <TextInput
          ref={firstOTP}
          autoFocus
          keyboardType="numeric"
          maxLength={1}
          cursorColor={colors.primaryColor}
          style={styleOTP.iptOPT}
          value={first}
          onChangeText={(text) => {
            setFirst(text) 
            secondOTP.current.focus() 
          }}
        />
        <TextInput
          ref={secondOTP}
          keyboardType="numeric"
          maxLength={1}
          cursorColor={colors.primaryColor}
          style={styleOTP.iptOPT}
          value={second}
          onChangeText={(text) => {
            setSeccond(text) 
            thirdOTP.current.focus();
          }}
        />
        <TextInput
          ref={thirdOTP}
          keyboardType="numeric"
          maxLength={1}
          cursorColor={colors.primaryColor}
          style={styleOTP.iptOPT}
          value={third}
          onChangeText={(text) => {
            setThird(text) 
             fourOTP.current.focus();
          }}
        />
        <TextInput
          ref={fourOTP}
          keyboardType="numeric"
          maxLength={1}
          cursorColor={colors.primaryColor}
          style={styleOTP.iptOPT}
          value={four}
          onChangeText={(text) => {
            setFour(text) 
            fiveOTP.current.focus();
          }}
        />
        <TextInput
          ref={fiveOTP}
          keyboardType="numeric"
          maxLength={1}
          cursorColor={colors.primaryColor}
          style={styleOTP.iptOPT}
          value={five}
          onChangeText={(text) => {
            setFive(text) 
             sixOTP.current.focus();
          }}
        />
        <TextInput
          ref={sixOTP}
          keyboardType="numeric"
          maxLength={1}
          cursorColor={colors.primaryColor}
          style={styleOTP.iptOPT}
          value={six}
          onChangeText={(text) => {
            setSix(text);
          }}
        />
      </View>

    
        {loader ? (
          <ActivityIndicator
            size="large"
            color={"bray"}
            animating={true}
          ></ActivityIndicator>
        ) : (
          <>
           <Button title="Xác thực" onPress={handelVerify} />
          </>
        )}
     
    
    </View>
  );
};

export default OTP;
