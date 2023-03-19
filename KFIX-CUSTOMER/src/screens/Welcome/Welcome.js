import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';


import {generalStyle} from '../../contains';
import { Button, IntroduceSlider } from '../../components';

const Welcome = () => {
  const navigation = useNavigation();
  return (
    <View style={generalStyle.wrapper}>
      <IntroduceSlider
        height={400}
      />
      <Button
        title="ĐĂNG NHẬP"
        onPress={() => navigation.navigate('Login')}
      />
      <Button
        title="ĐĂNG KÝ"
        onPress={() => navigation.navigate('Register')}
      />
    </View>
  );
};

export default Welcome;
