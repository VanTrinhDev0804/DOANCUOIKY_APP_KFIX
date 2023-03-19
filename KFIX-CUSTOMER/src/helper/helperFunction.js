import { PermissionsAndroid, Platform } from 'react-native'
import Geolocation from 'react-native-geolocation-service'
export const locationPermisson = () => new Promise(async (res,rej) => {
    if(Platform.OS === 'ios') {
        try {
            const permissionStatus = await Geolocation.requestAuthorization('always')
            if(permissionStatus === 'granted') {
                return res("granted")
            }
            rej("permission not granted")
        } catch (error) {
            return rej(error)
        }
    }
    return PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
    ).then((granted) => {
        if(granted === PermissionsAndroid.RESULTS.GRANTED){
            res('granted')
        }
        return rej("Location Permission denied")
    }).catch((error) => {
        console.log('Ask Location permission error:',error)
        return rej(error)
    })
})

// export const locationPermisson = async () => {
//     let { status } = await Location.requestForegroundPermissionsAsync();
//     if (status !== 'granted') {
//       console.log('Permission to access location was denied');
//       return null;
//     }
//     let location = await Location.getCurrentPositionAsync({});
 
// }