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
        uri: props.link,
      }}
    />
  );
};

export default Avartar;
