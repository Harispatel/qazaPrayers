/* eslint-disable prettier/prettier */
import React from "react"
import { StyleSheet } from "react-native"
import { Button } from "react-native-paper"
import { COLORS } from "../common/colors"

export default function GpButton({ children, type, style, onPress }) {
  // const {children, type} = props;
  return (
    <Button
      // {...props}
      onPress={onPress}
      mode={type}
      uppercase={false}
      style={[
        btnStyle.buttonStyle,
        // eslint-disable-next-line react-native/no-inline-styles
        {
          borderWidth: type === 'outlined' ? 1 : 0,
          borderColor: type === 'outlined' ? COLORS.PRIMARY_TXT : null,
          zIndex: 2000,
        },
        style,
      ]}
    >
      {children}
    </Button>
  );
}

const btnStyle = StyleSheet.create({
  buttonStyle: {
    textAlign: 'center',
    justifyContent: 'center',
  },
});
