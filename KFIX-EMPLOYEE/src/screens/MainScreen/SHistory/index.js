import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Text, View } from "react-native"
import { generalStyle } from "../../../generals"
import OrderDetail from '../OrderDetail';
import SMe from '../SMe';
import TopTab from './TopTab';


const Tab = createMaterialTopTabNavigator();
const SHistory = () => {
    return(
        <TopTab/>
    )
}

export default SHistory