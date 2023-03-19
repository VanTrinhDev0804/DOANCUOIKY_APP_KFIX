import React from 'react';
import {View, Dimensions, Image} from 'react-native';
import Swiper from 'react-native-swiper';

import { colors } from '../contains';

const {width} = Dimensions.get('window');


const IntroduceSlider = ({height}) => {
  const styles = {
    container: {
      height: height,
      // borderWidth: 1,
      // borderRadius: 20,
      // borderColor: colors.borderColor
    },
    slide: {
      flex: 1,
     
    },
    text: {
      textAlign: 'center',
    },
    image: {
      width,
      flex: 1,
      height: height,
  
    },
  };
  return (
    <View style={styles.container}>
      <Swiper
        style={styles.wrapper}
        height={height}
        horizontal={true}
        loop={true}
        autoplay>
        <View style={styles.slide}>
          <Image
            resizeMode="contain"
            style={styles.image}
            source={require('../assets/images/image2.png')}
          />
        </View>
        <View style={styles.slide}>
          <Image
            resizeMode="contain"
            style={styles.image}
            source={require('../assets/images/image1.png')}
          />
        </View>
      </Swiper>
    </View>
  );
};

export default IntroduceSlider;
