/* eslint-disable prettier/prettier */
import React from "react";
import { StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { COLORS } from "../common/colors";
import { GpButtonT } from "../../utility/types/type";
import { btnTypes } from "../common/constants";

export default function GpButton({
  children,
  type,
  style,
  onPress,
  btnIcon,
  disabled = false,
  isUpperCase = false,
}: GpButtonT) {
  // const {children, type} = props;
  return (
    <Button
      // {...props}
      disabled={disabled}
      icon={btnIcon}
      onPress={onPress}
      mode={type}
      uppercase={isUpperCase}
      style={[
        btnStyle.buttonStyle,
        // eslint-disable-next-line react-native/no-inline-styles
        {
          borderWidth: type == btnTypes.outlined ? 1 : 0,
          borderColor: type == btnTypes.outlined ? COLORS.PRIMARY_TXT : null,
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
    textAlign: "center",
    justifyContent: "center",
  },
});
