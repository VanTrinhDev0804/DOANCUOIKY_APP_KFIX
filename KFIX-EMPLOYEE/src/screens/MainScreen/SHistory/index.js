import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Text, View } from "react-native"
import { generalStyle } from "../../../generals"
import OrderDetail from '../OrderDetail';
import SMe from '../SMe';
import TopTab from './TopTab';
import Completed from './components/Completed';


const Tab = createMaterialTopTabNavigator();
const SHistory = () => {
    return(
        <Completed/>
    )
}

export default SHistory