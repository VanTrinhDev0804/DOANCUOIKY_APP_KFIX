import { useSelector } from "react-redux";
import { HeaderScreen } from "../../../components";
import Employee from "../../../components/Employee/Employee";
import { generalStyle } from "../../../contains";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { employees } from "../data";

const { View, Text, Image } = require("react-native");

const HaveEmployee = ({ route }) => {
  const Order = route.params.Order;
  const { value, loading } = useSelector((state) => state.keyer);
  return (
    <View style={generalStyle.wrapper}>
      <HeaderScreen goBack name="Thợ" />
      <View style={generalStyle.mt10}>
        {value && value.length > 0 ? value.map((e) => (
          <Employee
            key={e.keyerId}
            keyer={e}
            name={e.tenTho}
            vote={e.vote}
            distance={e.distance}
            url={e.img}
            order = {Order}
          />
        )) : (<View style={{alignItems: 'center', marginTop: 200}}>
          <Text style={{fontSize: 30, color: '#ccc'}}>Không tìm thấy </Text>
              <MaterialIcons
                name = "search-off"
                size = {150}
                color = '#ccc'
              />
          </View>)}
      </View>
    </View>
  );
};

export default HaveEmployee;
