import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import generalColor from '../../generals/colors'
import OrderDetail from './OrderDetail'

import SHome from "./SHome"
import SMe from "./SMe"

const Tab = createBottomTabNavigator()
const MainScreen = () => {
    const screenOptions = ({route}) => ({
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: generalColor.primary,
        tabBarInactiveTintColor: generalColor.primary,
        tabBarLabel: () => null,
        tabBarIcon: ({focused,color,size}) => {
            let screenName = route.name
            let iconName = "home"
            if(screenName == "Me") {
                iconName = "user"
            } else if(screenName == "OrderDetail") {
                iconName = "newspaper-o"
            }
            return <FontAwesome
                name={iconName}
                size={35}
                color={focused ? generalColor.primary : '#666'}
            />
        }
    })
    return(
        <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen name={"Home"} component={SHome} />
            <Tab.Screen name={"OrderDetail"} component={OrderDetail} />
            <Tab.Screen name={"Me"} component={SMe} />
        </Tab.Navigator>
    )
}

export default MainScreen