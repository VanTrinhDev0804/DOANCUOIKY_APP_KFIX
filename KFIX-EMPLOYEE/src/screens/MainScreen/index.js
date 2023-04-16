import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import generalColor from '../../generals/colors'
import OrderDetail from './OrderDetail'
import SHistory from './SHistory'
import Detail from './SHistory/components/Detail'

import SHome from "./SHome"
import SMe from "./SMe"
import { useDispatch, useSelector } from 'react-redux'
import { Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useEffect } from 'react'
import { child, get, getDatabase, onValue, ref } from 'firebase/database'
import { database } from '../../firebase/config'
import { loadOrderSuccess } from '../../redux/slice/orderSlice'
import { loadOrder } from '../../redux/actions/orderAction'

const Tab = createBottomTabNavigator()
const MainScreen = () => {
    const {isOnline , user} = useSelector(state => state.auth)
    const navigation = useNavigation()
    const dispatch = useDispatch()
    // useEffect(()=>{
    //     if(isOnline){
    //         console.log(isOnline)
      
    //     }
    // }, [isOnline])
  

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
            } else if(screenName == "History") {
                iconName = "history"
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
            <Tab.Screen name={"History"} component={SHistory} />
            <Tab.Screen name={"Me"} component={SMe} />
           
        </Tab.Navigator>
    )
}

export default MainScreen