import { StyleSheet } from "react-native";

const stylesItem = StyleSheet.create({
    wrapper: {
        //borderWidth: 1,
        padding: 20,
        marginBottom: 10
        //borderRadius: 15,
        //borderColor: '#000',
        // elevation: 100,
        // shadowColor: '#000',
        // shadowOffset: {width: -2, height: 4},
        // shadowOpacity: 0.8,
        // shadowRadius: 3,
    },
    shadow: {  
        //width: '100%',
        //height: ,
        backgroundColor: "#fff",
        // Android
        elevation: 5,
        shadowRadius: 5,
        // shadow color
        shadowColor: "#000",
        //iOS
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.26,      
    }
})

export default stylesItem