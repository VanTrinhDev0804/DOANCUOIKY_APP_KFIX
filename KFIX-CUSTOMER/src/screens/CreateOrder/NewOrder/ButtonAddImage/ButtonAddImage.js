import { Pressable, Text, View, Image } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import { colors, generalStyle } from "../../../../contains";
import styles from "./styles";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";

const ButtonAddImage = () => {
  const [pickedImagePath, setPickedImagePath] = useState("");
  const openCamera = async () => {
    // Ask the user for the permission to access the camera
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your camera!");
      return;
    }

    const result = await ImagePicker.launchCameraAsync();

    // Explore the result
    console.log(result);

    if (!result.canceled) {
      setPickedImagePath(result.assets[0].uri);
      console.log(result);
    }
  };
  return (
    <>
      <View style={styles.imageContainer}>
        {pickedImagePath !== "" && (
          <Image source={{ uri: pickedImagePath }} style={styles.image} />
        )}
      </View>
      <Pressable style={styles.btnAdd} onPress={openCamera}>
        {pickedImagePath !== "" ? (
          <Text style={styles.descTxtBtn}>Ảnh khác</Text>
        ) : (
          <Text style={styles.descTxtBtn}>Thêm ảnh</Text>
        )}
      </Pressable>
    </>
  );
};

export default ButtonAddImage;
