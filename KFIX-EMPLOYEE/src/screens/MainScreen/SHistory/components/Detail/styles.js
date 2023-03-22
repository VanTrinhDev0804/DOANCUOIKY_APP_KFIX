import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    txtHeaderTitle: {
        fontSize: 23,   
        justifyContent: 'center', 
    },
    iconClose: {
        position: 'absolute',
        top: 0,
        right: 0
    },
    infoW: {
        flexDirection: 'row',
        marginBottom: 15
    },
    label: {
        fontSize: 18,
        marginRight: 8
    },
    info: {
        fontSize: 18,
        fontWeight: 'bold',
        flex: 1,
        flexWrap: 'wrap'
    }

})

export default styles