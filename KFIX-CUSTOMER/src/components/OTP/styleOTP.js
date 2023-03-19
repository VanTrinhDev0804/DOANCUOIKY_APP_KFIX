import { StyleSheet } from 'react-native'
import { colors } from '../../contains'

const styleOTP = StyleSheet.create({
    otps: {
        flexDirection: 'row'
    },
    iptOPT: {
        width: 50,
        height: 50,
        marginRight: 5,
        borderWidth: 2,
        textAlign: 'center',
        borderRadius: 8,
        borderColor: colors.primaryColor,
        color: colors.primaryColor,
    }
})

export default styleOTP