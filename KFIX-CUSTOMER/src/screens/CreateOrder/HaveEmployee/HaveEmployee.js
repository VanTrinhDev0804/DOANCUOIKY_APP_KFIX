import { HeaderScreen } from "../../../components";
import Employee from "../../../components/Employee/Employee";
import { generalStyle } from "../../../contains";
import { employees } from "../data";

const { View, Text, Image } = require("react-native");

const HaveEmployee = () => {
  return (
    <View style={generalStyle.wrapper}>
      <HeaderScreen goBack name="Thợ" />
      <View style={generalStyle.mt10}>
        {
            employees.map(e => <Employee key={e.id} name={e.name} vote={e.vote} distance={e.distance} url={e.url}/>)
        }
      </View>
    </View>
  );
};

export default HaveEmployee;
