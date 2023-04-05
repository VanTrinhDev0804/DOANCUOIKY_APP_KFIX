import { useSelector } from "react-redux";
import { HeaderScreen } from "../../../components";
import Employee from "../../../components/Employee/Employee";
import { generalStyle } from "../../../contains";
import { employees } from "../data";

const { View, Text, Image } = require("react-native");

const HaveEmployee = ({ route }) => {
  const Order = route.params.Order;

  const { value, loading } = useSelector((state) => state.keyer);
  return (
    <View style={generalStyle.wrapper}>
      <HeaderScreen goBack name="Thợ" />
      <View style={generalStyle.mt10}>
        {value && value.map((e) => (
          <Employee
            key={e.keyerId}
            keyer={e}
            name={e.tenTho}
            vote={e.vote}
            distance={e.distance}
            url={e.img}
            order = {Order}
          />
        ))}
      </View>
    </View>
  );
};

export default HaveEmployee;
