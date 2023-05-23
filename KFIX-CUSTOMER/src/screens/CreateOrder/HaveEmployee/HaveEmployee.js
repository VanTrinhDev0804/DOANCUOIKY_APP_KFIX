import { useDispatch, useSelector } from "react-redux";
import { HeaderScreen } from "../../../components";
import Employee from "../../../components/Employee/Employee";
import { generalStyle } from "../../../contains";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { employees } from "../data";
import { getDatabase, onValue, ref } from "firebase/database";
import { database } from "../../../firebase/config";
import { loadKeyerFailure, loadKeyerSuccess } from "../../../redux/slice/keyerSlice";
import { calcDistance2Location } from "../../../utils/map";

const { View, Text, Image } = require("react-native");

const HaveEmployee = ({ route }) => {
  const Order = route.params.Order;
  const { value, loading } = useSelector((state) => state.keyer);
  const dispatch = useDispatch()
  const KeyerRealtime = ref(database, "Keyers");
  const dbRef = ref(getDatabase());
  onValue(
    KeyerRealtime,
    (snapshot) => {
      if (snapshot.exists()) {
        // console.log("Data : " , snapshot.val() , "va")
    
        // if (value === null) {
          let promises = [];

          snapshot.forEach((childSnapshot) => {
            console.log(childSnapshot.val().status)
            if (
              childSnapshot.val().status === "Online" &&
              childSnapshot.val().balanceAc > 0 &&
              childSnapshot.val().loaiSC.includes(Order.loaiKhoa)
              && childSnapshot.val().dinhVi.coordinate
            ) {
              const coordinatesKeyer =
                childSnapshot.val().dinhVi.coordinate.latitude +
                "," +
                childSnapshot.val().dinhVi.coordinate.longitude;
              const promise = new Promise(async (resolve, reject) => {
                try {
                  const rs = await calcDistance2Location(
                    Order.diaChi,
                    coordinatesKeyer
                  );

                  const distance =
                    rs.result.routeRows[0].elements[0]?.distance?.value;
                  const timeMove =
                    rs.result.routeRows[0].elements[0]?.duration?.value;
                  const distanceFormat =
                    rs.result.routeRows[0].elements[0]?.distance?.text;
                  if (distance < 10000) {
                    const keyersucess = {
                      keyerId: childSnapshot.key,
                      ...childSnapshot.val(),
                      distance: distanceFormat,
                      timeMove,
                    };
                    resolve(keyersucess);
                  } else {
                    resolve(null);
                  }
                } catch (error) {
                  reject(error);
                }
              });
              promises.push(promise);
            }
          });
          Promise.all(promises).then((results) => {
            // console.log(results , "rs")
            const data = results.filter((result) => result !== null);
            console.log(data, "data")
            if(data && value ===null){
              dispatch(loadKeyerSuccess(data));
            }
           
          });
        }
      
     
    },
    {
      onlyOnce: true,
    }
  );

  return (
    <View style={generalStyle.wrapper}>
      <HeaderScreen goBack name="Thợ" />
      <View style={generalStyle.mt10}>
        {value && value.length > 0 ? (
          value.map((e) => (
            <Employee
              key={e.keyerId}
              keyer={e}
              name={e.tenTho}
              vote={e.vote}
              distance={e.distance}
              url={e.img}
              order={Order}
            />
          ))
        ) : (
          <View style={{ alignItems: "center", marginTop: 200 }}>
            <Text style={{ fontSize: 30, color: "#ccc" }}>Không tìm thấy </Text>
            <MaterialIcons name="search-off" size={150} color="#ccc" />
          </View>
        )}
      </View>
    </View>
  );
};

export default HaveEmployee;
