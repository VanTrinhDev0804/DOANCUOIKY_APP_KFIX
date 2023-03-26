import { StyleSheet } from "react-native";
import { colors } from "../../contains";

const stylesBill = StyleSheet.create({
    general:{
        marginBottom: 20
    },
    orderId: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    rowCenter: {
        flexDirection: 'row',
        alignItems: "center"
    },
    note: {
        justifyContent: 'flex-end',  
        borderWidth: 1,
        position: 'absolute',
        right: 0,
        padding: 6,
        borderRadius: 10,
        borderColor: colors.primaryColor,
        borderWidth: 2
    },
    infoEmployye:{
        borderWidth: 1,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginBottom: 10,
    },

    orderDetail: {
        
    },
    infoCustomer: {
        marginLeft: 10,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    textInfoCustomer: {
        fontWeight: 'bold',
        fontSize: 20
    },
    infoEmployee:{
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    textInfoCustomer: {
        fontSize: 20
    },
})

export default stylesBill