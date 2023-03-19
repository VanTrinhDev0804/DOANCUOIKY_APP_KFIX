import {StyleSheet} from 'react-native';

import { colors } from '../../contains';

const stylesInputField = StyleSheet.create({
  inputField: {
    height: 40,
    borderWidth: 2,
    padding: 10,
    borderColor: colors.borderColor,
    borderRadius: 8,
  },
  label: {
    fontSize: 18,
    color: colors.textColor
  },
  error: {
    fontSize: 14,
    color: colors.errorColor
  }
});

export default stylesInputField
