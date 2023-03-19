import { Image, Text, TextInput, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import generalStyle from "../../../contains/styles";
import { Button } from "../../../components";
import styleProfile from "../Profile/stylesProfile";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateAvatarUser, updateUserName } from "../../../redux/action";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../../firebase/config";
const EditProfile = () => {
  const { user , isUpdate , loading } = useSelector((state) => state.auth);
  const [image, setImage] = useState(user && user.avatar);

  const [username, setUserName] = useState(user && user.username);
  const [phoneNumber, setphoneNumber] = useState(user && user.phone);

  const dispatch = useDispatch();
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      const uploadUrl = await uploadImageAsync(result.assets[0].uri);
      setImage(uploadUrl);
    } else {
      alert("You did not select any image.");
    }
  };

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

    const fileRef = ref(storage, `user/${user.phone}`);
    const result = await uploadBytes(fileRef, blob);

    // We're done with the blob, close and release it
    blob.close();

    return await getDownloadURL(fileRef);
  }

  const handelUpdate = () => {
    if (image !== user.avatar) {
      dispatch(updateAvatarUser(image, phoneNumber));
    }else if (username !== user.username){
      dispatch(updateUserName(username, phoneNumber))
    }else{
      alert("Thông tin chưa có thay đổi !")
    }
  };
  useEffect(()=>{
    if(isUpdate){
      alert('Đã thay đổi thông tin!')
    }
  },[loading])

  return (
    <View style={generalStyle.wrapper}>
      <Pressable onPress={pickImageAsync}>
        <Image
          style={styleProfile.avatar}
          source={{
            uri: image,
          }}
        />
      </Pressable>

      <View style={generalStyle.mt10}>
        <TextInput
          style={{
            height: 50,
            borderWidth: 1,
            paddingHorizontal: 10,
            fontSize: 20,
            marginBottom: 10,
          }}
          value={username}
          onChangeText={setUserName}
          placeholder="Tên của bạn"
        />
        <TextInput
          style={{
            height: 50,
            borderWidth: 1,
            paddingHorizontal: 10,
            fontSize: 20,
            marginBottom: 10,
          }}
          value={phoneNumber}
          onChangeText={setphoneNumber}
          placeholder="Số điện thoại"
          keyboardType="numeric"
          editable={false}
        />
      </View>

      <Button onPress={handelUpdate} title="Thay đổi" />
    </View>
  );
};

export default EditProfile;
