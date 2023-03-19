import {TouchableOpacity, Text, StyleSheet} from 'react-native';

import { colors } from '../contains';
const Button = ({noBackground,title,customStyle,...passProps}) => {
  const props = {...passProps};
  let styleText = {}
  for(let style in customStyle){
    if(style === 'fontSize' || style==='color')
    styleText = {...styleText,[style]: customStyle[style]}
  }
  const styles = StyleSheet.create({
    btn: !noBackground && {
      backgroundColor: noBackground ? '' : (props.disabled ? colors.disabled :colors.primaryColor),
      paddingHorizontal: 8,
      paddingVertical: 16,
      width: '100%',
      alignItems: 'center',
      borderRadius: 10,
      marginTop: 20,
    },
    textButton: {
      color: noBackground ? colors.primaryColor : '#fff',
      fontSize: 21,
      fontWeight: '600',
    },
  });
  return (
    <TouchableOpacity style={{...styles.btn,...customStyle}} {...props}>
      {title && <Text style={{...styles.textButton,...styleText}}>{title}</Text>}
      {passProps.icon}
    </TouchableOpacity>
  );
};



export default Button;
