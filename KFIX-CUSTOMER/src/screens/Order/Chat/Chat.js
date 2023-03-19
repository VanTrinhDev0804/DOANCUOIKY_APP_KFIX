import { useRef, useState } from "react";
import {
  Dimensions,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { HeaderScreen } from "../../../components";
import ChatText from "../../../components/ChatText/ChatText";
import { generalStyle } from "../../../contains";
import { conversations } from "../data";
import stylesChat from "./stylesChat";

const Chat = () => {
  const [chatText, setChatText] = useState("");
  const [chats, setChats] = useState(conversations);
  const refInput = useRef();
  const idMe = 123;
  const handleCompareId = (id) => {
    if (idMe === id) return true;
    return false;
  };
  const handleChangeTextChat = (value) => {
    setChatText(value);
  };
  const handleSendMessage = () => {
    setChats([...chats, { id: 123, text: chatText, memberChat: 123 }]);
    setChatText("");
  };
  return (
    <View
      style={{ paddingTop: 20, flex: 1, backgroundColor: "rgb(243,243,243)" }}
    >
      <HeaderScreen name="Thợ sửa" />
      <View style={{ flex: 1 }}>
        <View style={stylesChat.conversation}>
          {chats.map((chat) => {
            const me = handleCompareId(chat.memberChat);
            return <ChatText key={chat.id} text={chat.text} me={me} />;
          })}
        </View>
        <View style={stylesChat.wrapperInput}>
          <TextInput
            value={chatText}
            style={stylesChat.ipt}
            onChangeText={handleChangeTextChat}
            autoFocus
          />
          {chatText.length > 0 && (
            <TouchableOpacity onPress={handleSendMessage}>
              <Ionicons
                name="ios-send"
                size={30}
                color="green"
                style={{ paddingHorizontal: 10 }}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};
export default Chat;
