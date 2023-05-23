import {
  FlatList,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { collection, getDocs, query } from "firebase/firestore";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import CalendarPicker from "react-native-calendar-picker";
import Modal from "react-native-modal";

import { generalColor, generalStyle } from "../../../../../generals";
import Item from "../Item";
import { db, firestore } from "../../../../../firebase/config";
import { Header } from "../../../../../components";
import styles from "./completedStyles";
import ItemResult from "./components/ItemResult";
import { formatDate } from "../../../../../utils/date";
import moment from "moment";
const Completed = () => {
  const [loading,setLoading] = useState(false)
  const [totalOrder,setTotalOrder] = useState(0)
  const [income,setIncome] = useState(0)
  const [date, setDate] = useState(formatDate(new Date()))
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const [orders, setOrders] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const fetchOrdersOfKeyer = async (date) => {
    const q = query(collection(firestore, "Orders"));
    const ad = [];
    let orderTotal = 0
    let income = 0
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      if (doc.data().keyer.keyerId === user.id) {
        if(doc.data().finishedDate.split(',')[1].trim() === date){
          ad.push(doc.data());
          orderTotal+=1
          income+=doc.data().price
        }
      }
    });
    setOrders(ad);
    setTotalOrder(orderTotal)
    setIncome(income)
    setLoading(false)
  };
  useEffect(() => {
    setOrders([])
    setLoading(true)
    fetchOrdersOfKeyer(date);
  }, [date]);

  const handleDateChange = (date) => {
    setShowModal(false);
    setDate(moment(date).format('DD/M/YYYY'))
  };

  return (
    <View style={generalStyle.container}>
      <Header title="Lịch sử sửa khóa" />
      <Modal isVisible={showModal} style={{ alignItems: "center" }} onBackButtonPress={() => setShowModal(false)}>
        <View
          style={{ backgroundColor: "#fff", borderRadius: 10, width: "110%" }}
        >
          <CalendarPicker
            previousTitle="Trước"
            nextTitle="Sau"
            onDateChange={handleDateChange}
          />
        </View>
      </Modal>
      <View style={styles.viewResults}>
        <ItemResult
          icon="wrench"
          title="Số khóa sửa"
          result={totalOrder}
          color="#00a147"
          loading={loading}
        />
        <ItemResult
          icon="dollar-sign"
          title="Thu nhập"
          result={income}
          color="#00724D"
          loading={loading}
        />
      </View>
      <View style={{ flexDirection: "row",alignItems: 'center' }}>
        <Text>Danh sách sửa khóa ngày {date}</Text>
        <TouchableOpacity
          onPress={() => setShowModal(true)}
          style={{
            marginLeft: 10,
            width: 80,
            backgroundColor: generalColor.primary,
            height: 30,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Text style={{color: '#fff'}}>Thay đổi</Text>
        </TouchableOpacity>
      </View>
      {loading && <ActivityIndicator />}
      {orders.length > 0 && (
        <FlatList
          data={orders}
          renderItem={({ item }) => (
            <Item
              time={item.finishedDate}
              problem={item.problem}
              address={item.diaChi}
              totalPrice={item.price}
            />
          )}
          keyExtractor={(item) => item.orderID}
        />
      )}
    </View>
  );
};

export default Completed;
