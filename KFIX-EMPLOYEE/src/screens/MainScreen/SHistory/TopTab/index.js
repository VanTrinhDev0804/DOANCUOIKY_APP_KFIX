import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Text, View } from "react-native";
import { generalColor, generalStyle } from "../../../../generals";
import Completed from "../components/Completed";
import Fixing from "../components/Fixing";
import New from "../components/New";


const Tab = createMaterialTopTabNavigator();
const TopTab = () => {
  return (
    <View style={generalStyle.container}>
      <Tab.Navigator
        initialRouteName="Feed"
        screenOptions={{
            tabBarScrollEnabled: true,
            //tabBarActiveTintColor: generalColor.primary,
            tabBarIndicatorStyle: {
                backgroundColor: generalColor.primary,
                height: 2,
            },
            tabBarLabelStyle: {
                textTransform: 'capitalize',
            },
            
            tabBarStyle: {
                backgroundColor: '#fff',
            },
            tabBarIcon: ({focused}) => {
              //console.log();
            },
            tabBarComponent: ({navigation}) => <History navigation={navigation}/>
        }}
      >
        <Tab.Screen name="New" component={New} options={{ tabBarLabel: ({focused}) =>  <Text>Mới</Text>}}/>
        <Tab.Screen name="Completed" component={Completed} options={{ tabBarLabel: 'Đã hoàn thành' }}/>
      </Tab.Navigator>
    </View>
  );
};

export default TopTab;
