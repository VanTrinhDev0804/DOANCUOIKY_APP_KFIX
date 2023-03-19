import { StyleSheet } from 'react-native'
import generalColor from '../../generals/colors'


const styleOTP = StyleSheet.create({
    otps: {
        flexDirection: 'row',
        marginBottom: 10
    },
    iptOPT: {
        width: 50,
        height: 50,
        marginRight: 5,
        borderWidth: 2,
        textAlign: 'center',
        borderRadius: 8,
        borderColor: generalColor.primary,
        color: generalColor.primary,
    }
})

export default styleOTP