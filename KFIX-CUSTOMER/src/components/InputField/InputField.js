import {Text, TextInput, View} from 'react-native';

import { generalStyle } from '../../contains';
import stylesInputField from './styleInputField';

const InputField = ({
  keyboardType,
  secureTextEntry=false,
  label,
  placeholder,
  value,
  onChangeText,
  onBlur,
  error,
  ...passProps
}) => {
  const props = {...passProps}
  return (
    <View style={[generalStyle.mt10]}>
      {label && <Text style={stylesInputField.label}>{label}</Text>}
      <TextInput
        style={stylesInputField.inputField}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        onBlur={onBlur}
        {...props}
      />
      {error && <Text style={stylesInputField.error}>{error}</Text>}
    </View>
  );
};

export default InputField;
