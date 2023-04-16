import { Image } from "react-native";

const Avartar = (props) => {
  return (
    <Image
      //style={styles.tinyLogo}
      style={{
        width: props.width,
        height: props.height,
        resizeMode: "contain",
        borderRadius: 100,
        marginRight: 20
      }}
      source={{
        uri: props.link ? props.link : "https://firebasestorage.googleapis.com/v0/b/key-fix.appspot.com/o/order%2F%231681309439106?alt=media&token=a944639a-064e-4ab7-b2f6-36a4a8ddc194",
      }}
    />
  );
};

export default Avartar;
