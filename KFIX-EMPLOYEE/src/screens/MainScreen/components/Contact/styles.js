import { StyleSheet } from "react-native";
import generalColor from "../../../../generals/colors";

const styles = StyleSheet.create({
    btn: {
        backgroundColor: generalColor.primary
    },
    customStyleIconRadius: {
        width: 45,
        height: 45,
        backgroundColor: "green",
        borderRadius: 100,
        justifyContent: "center",
        alignItems: 'center',
        paddingHorizontal: 0,
        paddingVertical: 0
    }
})

export default styles