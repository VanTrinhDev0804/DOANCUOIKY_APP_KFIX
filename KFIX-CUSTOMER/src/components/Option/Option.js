import {View, Dimensions, TouchableOpacity, Text, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native'

import styleOption from './stylesOption';

const windowWidth = Dimensions.get('window').width;

const Option = ({problem,img}) => {
  console.log(img);
    const navigation = useNavigation()
  return (
    <TouchableOpacity
      style={styleOption.btnOpt}
      onPress={() => navigation.navigate('NewOrder',{problem})}
    >
    
      <View style={styleOption.opt}>
        <Image
          style={styleOption.imgOpt}
          resizeMode="contain"
          source={{uri: img}}
        />
        <Text>{problem}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Option;
