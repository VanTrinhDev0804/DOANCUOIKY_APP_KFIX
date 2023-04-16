import { Pressable, Text, View, Image } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import { colors, generalStyle } from "../../../../contains";
import styles from "./styles";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import { useState } from "react";
import { storage } from "../../../../firebase/config";
import { launchCamera } from "react-native-image-picker";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
const ButtonAddImage = ({ onValue, orderID }) => {
  const [pickedImagePath, setPickedImagePath] = useState("");

  const [status, requestPermission] = ImagePicker.useCameraPermissions();
  const uploadImageAsync = async (uri) => {
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
  };

  const openCamera = () => {
    requestPermission().then((data) => {
      console.log(data)
      if ((data.status = "granted")) {
        ImagePicker.launchCameraAsync({ mediaTypes: ImagePicker.mediaTypes })
          .then((responese) => {
            if (!responese.canceled) {
              setPickedImagePath(responese.assets[0].uri);
              uploadImageAsync(responese.assets[0].uri).then((url) => {
                onValue(url);
              });
            }
          })
          .catch((err) => console.log(err));
      } else {
        alert("You've refused to allow this appp to access your camera!");
        return;
      }
    });
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