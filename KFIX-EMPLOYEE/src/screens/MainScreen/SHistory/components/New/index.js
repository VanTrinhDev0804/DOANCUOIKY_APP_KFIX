import { Text, View } from "react-native"
import { useIsFocused, useNavigation } from '@react-navigation/native';
import Item from "../Item";
import { generalStyle } from "../../../../../generals";


const New = () => {
    const navigation = useNavigation()
    const onPress = () => {
        navigation.navigate('SOrder')
    } 
    return(
        <View style={generalStyle.container}>
            <Item onPress={onPress}/>
        </View>
    )
}

export default New