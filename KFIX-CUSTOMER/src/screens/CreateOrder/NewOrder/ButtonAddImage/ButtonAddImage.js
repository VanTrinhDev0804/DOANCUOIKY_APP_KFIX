import { Pressable, Text, View, Image } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import { colors, generalStyle } from "../../../../contains";
import styles from "./styles";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { storage } from "../../../../firebase/config";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
const ButtonAddImage = ({onValue , orderID}) => {
  const [pickedImagePath, setPickedImagePath] = useState("");


  async function uploadImageAsync(uri) {
    // Why are we using XMLHttpRequest? See:
    // https://github.com/expo/expo/issues/2402#issuecomment-443726662
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        resolve(xhr.response);
      };
      xhr.onerror = function (e) {
        console.log(e);
        reject(new TypeError("Network request failed"));
      };
      xhr.responseType = "blob";
      xhr.open("GET", uri, true);
      xhr.send(null);
    });

    const fileRef = ref(storage, `order/${orderID}`);
    const result = await uploadBytes(fileRef, blob);

    // We're done with the blob, close and release it
    blob.close();

    return await getDownloadURL(fileRef);
  }

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
      const uploadUrl = await uploadImageAsync(result.assets[0].uri);
      onValue(uploadUrl)
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