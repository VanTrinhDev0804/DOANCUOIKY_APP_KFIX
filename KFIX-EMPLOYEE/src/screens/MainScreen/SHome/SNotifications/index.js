import { Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { generalStyle } from "../../../../generals";
import styles from "./styles";

const SNotifications = () => {
    const navigation = useNavigation()
  return (
    <View style={generalStyle.container}>
      <Pressable style={styles.notifyItem} onPress={()=> navigation.navigate('SOrder')}>
        <View style={styles.content}>
          <Text style={styles.txtNotify}>Hư ổ khóa</Text>
          <Text style={styles.txtNotify}>Địa chỉ: 158 An Phú, Tân Sơn, HCM</Text>
        </View>
        <View style={styles.status}>
          <Text style={styles.txtStatus}>Mới</Text>
        </View>
      </Pressable>
      <Pressable style={styles.notifyItem} onPress={()=> navigation.navigate('SOrder')}>
        <View style={styles.content}>
          <Text style={styles.txtNotify}>Hư ổ khóa</Text>
          <Text style={styles.txtNotify}>Địa chỉ: 158 An Phú, Tân Sơn, HCM</Text>
        </View>
        <View style={styles.status}>
          <Text style={styles.txtStatus}>Đã hủy</Text>
        </View>
      </Pressable>
      <Pressable style={styles.notifyItem} onPress={()=> navigation.navigate('SOrder')}>
        <View style={styles.content}>
          <Text style={styles.txtNotify}>Hư ổ khóa</Text>
          <Text style={styles.txtNotify}>Địa chỉ: 158 An Phú, Tân Sơn, HCM</Text>
        </View>
        <View style={styles.status}>
          <Text style={styles.txtStatus}>Đã sửa xong</Text>
        </View>
      </Pressable>
      
    </View>
  );
};

export default SNotifications;
