import { useState } from "react";
import {

  Image,
  Linking,
  Modal,
  Platform,
  Pressable,
 
  View,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Fontisto from "react-native-vector-icons/Fontisto";
import { generalColor } from "../../../../generals";
import styles from "./styles";

const ImageChosen = (props) => {
  const [modalVisible, setModalVisible] = useState(false);


//   const scheme = Platform.select({ ios: 'maps:0,0?q=', android: 'geo:0,0?q=' });
// const latLng = `${0},${0}`;
// const label = 'Custom Label';
// const url = Platform.select({
//   ios: `${scheme}${label}@${latLng}`,
//   android: `${scheme}${latLng}(${label})`
// });

    



  return (
    <>
      <Pressable onPress={() => setModalVisible(true)}>
        <Image
          style={styles.image}
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9C6q-pAfSDX8WBmgEF9lpB19n1JOc-qS_QY7KVh8Iru4Qxu3p5TW5LfsZRGD00hrV9_w&usqp=CAU",
          }}
        />
        {!props.onlyView && (
          <AntDesign
            name="closecircle"
            size={20}
            color={generalColor.borderColor}
            style={styles.closeIcon}
          />
        )}
      </Pressable>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalView}>
         
          <Fontisto
            name="close-a"
            size={22}
            color={generalColor.borderColor}
            style={styles.closeViewImage}
            onPress={() => setModalVisible(false)}
          />
         
       
          <Image
          style={styles.imageView}
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9C6q-pAfSDX8WBmgEF9lpB19n1JOc-qS_QY7KVh8Iru4Qxu3p5TW5LfsZRGD00hrV9_w&usqp=CAU",
            }}
          />
        </View>
      </Modal>
    </>
  );
};

export default ImageChosen;
