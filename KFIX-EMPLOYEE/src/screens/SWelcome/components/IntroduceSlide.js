import React from "react";
import { View, Dimensions, Image, StyleSheet } from "react-native";
import Swiper from "react-native-swiper";

const { width } = Dimensions.get("window");

const IntroduceSlider = () => {
  return (
    <View style={styles.container}>
      <View style={styles.slide}>
        <Image
          resizeMode="contain"
          style={styles.image}
          source={require("../../../assests/images/slide-welcome2.png")}
        />
      </View>
    </View>
  );
};
export default IntroduceSlider;
const styles = StyleSheet.create({
  container: {
    //flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    textAlign: "center",
  },
  image: {
    width,
    height: 300,
  },
});
