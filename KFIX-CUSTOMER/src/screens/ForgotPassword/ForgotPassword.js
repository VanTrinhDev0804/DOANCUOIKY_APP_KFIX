import {useState} from 'react';
import {Text, View} from 'react-native';
import { useNavigation } from '@react-navigation/native'

import {Button, InputField, OTP} from '../../components';
import {generalStyle} from '../../contains';

const ForgotPassword = () => {
  
  const navigation = useNavigation()
  const [screen, setScreen] = useState(1);

  const handleSendOTP = () => {
      setScreen(screen + 1);
  };
  const handleAccuracyForgotPassword = () => {
    setScreen(prev => prev + 1)
  };
  return (
    <View style={generalStyle.wrapper}>
      {screen === 1 && (
        <View>
          <InputField keyboardType="numeric" label="Số điện thoại của bạn:" />
          <Button title="Tiếp tục" onPress={handleSendOTP} />
        </View>
      )}
      {screen === 2 && <OTP action={handleAccuracyForgotPassword} />}
      {screen === 3 && (
        <View>
          <InputField
            label="Mật khẩu:"
            secureTextEntry={true}
            error="Mật khẩu gồm ít nhất 8 kí tự gồm chữ thường, chữ hoa, số và kí tự đặc biệt!"
          />
          <InputField
            label="Nhập lại mật khẩu:"
            secureTextEntry={true}
            error="Mật khẩu không trùng khớp!"
          />
          <Button title="Xác nhận" onPress={() => navigation.navigate('Main')} />
        </View>
      )}
    </View>
  );
};

export default ForgotPassword;
