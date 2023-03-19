import { Text, View } from "react-native"
import { useNavigation } from '@react-navigation/native'

import { Button, HeaderScreen } from "../../../components"
import { generalStyle } from "../../../contains"

const OrderEstimate = () => {
    const navigation = useNavigation()

    return (
        <View style={generalStyle.wrapper}>
            <HeaderScreen goBack name="Hóa đơn ước tính"/>
            <View style={{marginTop: 20}}>
                <Text style={{fontSize: 20,marginBottom: 10}}>Tên khách hàng: Nguyễn Văn Trinh</Text>
                <Text  style={{fontSize: 20,marginBottom: 10}}>Vấn đề: Mất chì khóa xe 4 bánh</Text>
                <Text  style={{fontSize: 20,marginBottom: 10}}>Tên nhân viên: Nguyễn Minh Vương</Text>
                <Text  style={{fontSize: 20,marginBottom: 10}}>Chuyên môn: Khóa nhà, Khóa xe 4 bánh</Text>
                <Text  style={{fontSize: 20,marginBottom: 10}}>Khoảng cách: 4 Km</Text>
                <Text  style={{fontSize: 20,marginBottom: 10}}>Tổng hóa đơn: 1500000 VNĐ</Text>
            </View>
            <Button title="XÁC NHẬN" onPress={() => navigation.navigate('Order')}/>
        </View>
    )
}

export default OrderEstimate