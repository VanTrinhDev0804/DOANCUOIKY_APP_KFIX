import { StyleSheet } from "react-native";

const stylesVote = StyleSheet.create({
    wrapper: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },
    customRatingBar: {
        marginTop: 10,
        flexDirection: 'row',
    },
    imgStar: {
        marginHorizontal: 8,
        width: 50,
        height: 50,
        resizeMode: 'cover'
    }
}) 

export default stylesVote