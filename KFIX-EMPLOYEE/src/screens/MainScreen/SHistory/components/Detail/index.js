import { Text, View } from "react-native"
import { generalStyle } from "../../../../../generals"
import AntDesign from 'react-native-vector-icons/AntDesign'
import styles from "./styles"
import { useNavigation } from "@react-navigation/native"

const Detail = () => {
    const navigation = useNavigation()
    return(
        <View style={generalStyle.container}>
            <View style={styles.header}>
                <Text style={styles.txtHeaderTitle}>Chi tiết đơn hàng</Text>
                <AntDesign
                    name="close"
                    color="#000"
                    size={30}
                    style={styles.iconClose}
                    onPress={() => navigation.goBack()}
                />
            </View>
            <View>
                <View style={styles.infoW}>
                    <Text style={styles.label}>Thời gian đặt:</Text>
                    <Text style={styles.info}>10:06 am</Text>
                </View> 
                <View style={styles.infoW}>
                    <Text style={styles.label}>Thời gian hoàn thành:</Text>
                    <Text style={styles.info}>10:50 am</Text>
                </View> 
                <View style={styles.infoW}>
                    <Text style={styles.label}>Tên khách hàng:</Text>
                    <Text style={styles.info}>Nguyễn Minh Vương</Text>
                </View>
                <View style={styles.infoW}>
                    <Text style={styles.label}>Vấn đề:</Text>
                    <Text style={styles.info}>Hư ổ khóa</Text>
                </View>
                <View style={styles.infoW}>
                    <Text style={styles.label}>Tên nhân viên:</Text>
                    <Text style={styles.info}>Nguyễn Văn Trinh</Text>
                </View>
                <View style={styles.infoW}>
                    <Text style={styles.label}>Địa chỉ:</Text>
                    <Text style={styles.info}>158/5 Tân Sơn Nhì, Tân Phú, Hồ Chí Minh</Text>
                </View>
                <View style={styles.infoW}>
                    <Text style={styles.label}>Khoảng cách:</Text>
                    <Text style={styles.info}>10Km</Text>
                </View>
                <View style={styles.infoW}>
                    <Text style={styles.label}>Ghi chú:</Text>
                    <Text style={styles.info}>Tới nhanh giùm e, đang gấp</Text>
                </View>
                <View style={styles.infoW}>
                    <Text style={styles.label}>Tổng tiền:</Text>
                    <Text style={styles.info}>150000</Text>
                </View> 

            </View>
        </View>
    )
}

export default Detail