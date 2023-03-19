import React from 'react';
import {View, Dimensions, Image} from 'react-native';
import Swiper from 'react-native-swiper';

import { colors } from '../contains';

const {width} = Dimensions.get('window');


const IntroduceHome = ({height}) => {
  const styles = {
    container: {
      height: height,
    },
    slide: {
      flex: 1,
      backgroundColor: 'red',
      borderRadius: 20,
    },
    text: {
      textAlign: 'center',
    },
    image: {
      width: width*95/100,
      flex: 1,
      height: height,
      borderRadius: 20,
    },
  };
  return (
    <View style={styles.container}>
      <Swiper
        style={styles.wrapper}
        height={height}
        horizontal={true}
        loop={true}
        autoplay
        >
        <View style={styles.slide}>
          <Image
            resizeMode="contain"
            style={styles.image}
            source={require('../assets/images/image4.jpg')}
          />
        </View>
        <View style={styles.slide}>
          <Image
            resizeMode="contain"
            style={styles.image}
            source={require('../assets/images/image5.jpg')}
          />
        </View>
        <View style={styles.slide}>
          <Image
            resizeMode="contain"
            style={styles.image}
            source={require('../assets/images/image6.jpg')}
          />
        </View>
      </Swiper>
    </View>
  );
};

export default IntroduceHome;