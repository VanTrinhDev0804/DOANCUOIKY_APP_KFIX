import { useState } from "react";
import { useNavigation } from '@react-navigation/native'
import { generalStyle } from "../../../contains";
import stylesVote from "./stylesVote";
import { updateVotdOrder } from "../../../firebase/asynsActions";
import { useDispatch } from "react-redux";
import { loadOrderFailure } from "../../../redux/slice/orderSlice";
import { loadOrder } from "../../../redux/actions/orderAction";

const { View, Text, TouchableOpacity, Image } = require("react-native");

const Vote = ({ route }) => {
  const orderId  = route.params.id && `${route.params.id}`
    const navigation = useNavigation()

  const [defaultRating, setDefaultRating] = useState(0);
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);
 const dispatch = useDispatch()

  const handleVote = async (item) => {
    setDefaultRating(item)
    updateVotdOrder(orderId, item)
    dispatch(loadOrder())
    await setTimeout(() => {
        navigation.navigate('Home')
    },1500)
  }
  return (
    <View style={stylesVote.wrapper}>
        <Text>Nhận xét về dịch vụ của thợ sửa khóa</Text>
        <View style={stylesVote.customRatingBar}>
      {maxRating.map((item, index) => {
        return (
          <TouchableOpacity
            activeOpacity={0.7}
            key={item}
            onPress={() => handleVote(item)}
          >
            <Image
              style={stylesVote.imgStar}
              source={
                item <= defaultRating
                  ? require("../../../assets/images/star_filled.png")
                  : require("../../../assets/images/star_corner.png")
              }
            />
          </TouchableOpacity>
        );
      })}
    </View>
    </View>
  );
};

export default Vote;
