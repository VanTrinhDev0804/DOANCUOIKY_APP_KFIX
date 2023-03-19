import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { colors } from '../contains'

import { Home, Order } from '../screens'
import Bill from '../screens/Bill/Bill'
import Profile from '../screens/Me/Profile/Profile'

const Tab = createBottomTabNavigator()
const BottomTab = () => {
    const screenOptions = ({route}) => ({
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: colors.primaryColor,
        tabBarInactiveTintColor: colors.iconColor,
        tabBarLabel: () => null,
        tabBarIcon: ({focused,color,size}) => {
            let screenName = route.name
            let iconName = "home"
            if(screenName == "Order") {
                iconName = "clock-o"
            } else if (screenName ==='Profile'){
                iconName = "user"
            } else if (screenName === 'Bill') {
                iconName = "money"
            }
            return <FontAwesome
                name={iconName}
                size={35}
                color={focused ? colors.primaryColor : '#666'}
            />
        }
    })
    return (
        <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen name={"Home"} component={Home} />
            <Tab.Screen name={"Order"} component={Order} />
            <Tab.Screen name={"Bill"} component={Bill} />

            <Tab.Screen name={"Profile"} component={Profile} />
        </Tab.Navigator>
    )
}
export default BottomTab