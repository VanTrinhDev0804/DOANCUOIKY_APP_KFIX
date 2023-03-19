import {View, Text, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import Ionicons from 'react-native-vector-icons/Ionicons';

import { generalStyle } from '../../contains';
import stylesHeaderScreen from './styleHeaderScreen';

const HeaderScreen = ({goBack, name}) => {
    const navigation = useNavigation()
  return (
    <View style={stylesHeaderScreen.constain}>
      <TouchableOpacity style={generalStyle.flex1} onPress={()=>navigation.goBack()}>
        <Ionicons name="arrow-back" color="#000" size={35} />
      </TouchableOpacity>
      <View >
        <Text style={stylesHeaderScreen.nameHeader}>{name}</Text>
      </View>
      <View style={generalStyle.flex1}>
      </View>
    </View>
  );
};

export default HeaderScreen;
