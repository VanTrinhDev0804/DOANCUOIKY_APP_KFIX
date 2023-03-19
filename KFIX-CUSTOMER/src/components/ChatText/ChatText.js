import { Text, View } from "react-native"

const ChatText = ({me,text}) => {

    return (
        <View
            style={{
              alignSelf: me ? "flex-end": "flex-start",
              padding: 12,
              backgroundColor: me ? "green" : "#fff",
              borderRadius: 10,
              marginBottom: 10
            }}
          >
            <Text style={{ color: me ? '#fff': '#000'}}>{text}</Text>
          </View>
    )
}

export default ChatText