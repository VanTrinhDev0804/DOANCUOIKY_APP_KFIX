import {useRef} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import { useNavigation } from '@react-navigation/native';


import styleOTP from './styleOTP';
import generalColor from '../../generals/colors';
import generalStyle from '../../generals/generalStyle';

const OTP = ({action}) => {
  const navigation = useNavigation()

  const firstOTP = useRef();
  const secondOTP = useRef();
  const thirdOTP = useRef();
  const fourOTP = useRef();
  const fiveOTP = useRef();

  
  return (
    <View style={[generalStyle.container, generalStyle.containerCenter]}>
      <Text>Vui lòng nhập mã xác thực đã gửi đến số điện thọa của bạn</Text>
      <View style={styleOTP.otps}>
        <TextInput
          ref={firstOTP}
          autoFocus
          keyboardType="numeric"
          maxLength={1}
          cursorColor={generalColor.primary}
          style={styleOTP.iptOPT}
          onChangeText={text => {text && secondOTP.current.focus()}}
        />
        <TextInput
          ref={secondOTP}
          keyboardType="numeric"
          maxLength={1}
          cursorColor={generalColor.primary}
          style={styleOTP.iptOPT}
          onChangeText={text => {text && thirdOTP.current.focus()}}
        />
        <TextInput
          ref={thirdOTP}
          keyboardType="numeric"
          maxLength={1}
          cursorColor={generalColor.primary}
          style={styleOTP.iptOPT}
          onChangeText={text => {text && fourOTP.current.focus()}}
        />
        <TextInput
          ref={fourOTP}
          keyboardType="numeric"
          maxLength={1}
          cursorColor={generalColor.primary}
          style={styleOTP.iptOPT}
          onChangeText={text => {text && fiveOTP.current.focus()}}
        />
        <TextInput
          ref={fiveOTP}
          keyboardType="numeric"
          maxLength={1}
          cursorColor={generalColor.primary}
          style={styleOTP.iptOPT}
        />
      </View>
      <TouchableOpacity style={generalStyle.button} onPress={action}>
        <Text style={generalStyle.txtButton}>Xác thực</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OTP;