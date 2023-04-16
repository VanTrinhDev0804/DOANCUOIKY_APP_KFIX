import { Modal, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import RadioGroup from "react-native-radio-buttons-group";
import { useNavigation } from '@react-navigation/native'
import { Button } from "../../../components"
import styles from "./styles";
import { removeOrderRTDatabase, updateKeyerByKeyvalue } from "../../../firebase/asynsActions";
import { useDispatch, useSelector } from "react-redux";
import {loadOrderSuccess} from "../../../redux/slice/orderSlice"
import { update } from "firebase/database";
const ReasonCancelOrder = ({modalVisible,setModalVisible, keyerRecive}) => {

  const navigation = useNavigation()
  const {user} = useSelector(state => state.auth)
  const dispatch = useDispatch
  const [radioButtons, setRadioButtons] = useState([
    {
      id: "1", // acts as primary key, should be unique and non-empty string
      label: "Thợ sửa khóa yêu cầu hủy",
      value: "option1",
      containerStyle: styles.reason
    },
    {
      id: "2",
      label: "Thay đổi ý",
      value: "option2",
      containerStyle:  styles.reason
    },
    {
      id: "3",
      label: "Thời gian chờ đợi quá lâu",
      value: "option3",
      containerStyle:  styles.reason
    },
    {
      id: "4",
      label: "Thay đổi địa chỉ",
      value: "option4",
      containerStyle: styles.reason
    },
    {
      id: "5",
      label: "Đã khắc phục được sự cố",
      value: "option5",
      containerStyle: styles.reason
    },
  ]);
  const [selectedReason,setSelectedReson] = useState({})
  // console.log(selectedReason);

  const [disabledConfirm,setDisableConfirm] = useState(true);
  function onPressRadioButton(radioButtonsArray) {
    setRadioButtons(radioButtonsArray);
    const b = radioButtons.find(rdo => rdo.selected === true)
    setSelectedReson({...b})
    setDisableConfirm(false)
   }

   const handleCancelOrder = () => {
    
    removeOrderRTDatabase(user.userId)
    updateKeyerByKeyvalue(`${keyerRecive}/order` , "")
    updateKeyerByKeyvalue(`${keyerRecive}/status` , "Online")

    navigation.navigate('Home')
    setModalVisible(false)
   }
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View
        style={{
          width: "100%",
          height: 450,
          borderWidth: 1,
          backgroundColor: "#fff",
          position: "absolute",
          left: 0,
          bottom: 0,
          borderTopStartRadius: 20,
          borderTopEndRadius: 20,
        }}
      >
        <View style={styles.headerCancel}>
          <Text style={styles.titleCancel}>Lí do hủy</Text>
          <AntDesign
            name="close"
            size={25}
            color="#ccc"
            style={styles.iconClose}
            onPress={() => setModalVisible(false)}
          />
        </View>
        <View style={styles.reasons}>
          <View>
            <RadioGroup
              radioButtons={radioButtons}
              onPress={onPressRadioButton}
              containerStyle={{ alignItems: "flex-start" }}
            />
            <Button title="Xác nhận" disabled={disabledConfirm} onPress={handleCancelOrder}/>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ReasonCancelOrder;

