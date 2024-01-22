import React from "react";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import { COLORS } from "../common/colors";

export default function QpTextInput(props) {
  const [height, setHeight] = React.useState(undefined);
  return props.type == "textarea" ? (
    <TextInput
      multiline
      // keyboardType="default"
      onContentSizeChange={(event) => {
        setHeight(event);
      }}
      {...props}
      style={[props.style, { backgroundColor: COLORS.TRANSPARENT }]}
    />
  ) : (
    <TextInput {...props} style={[styles.textInput, props.style]} />
  );
}
const styles = StyleSheet.create({
  textInput: {
    paddingVertical: 4,
    height: 50,
    backgroundColor: COLORS.TRANSPARENT,
    color: COLORS.PRIMARY,
  },
});
