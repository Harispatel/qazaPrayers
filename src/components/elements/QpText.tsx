import React from "react";
import { Text } from "react-native";
import { Typography } from "../common/typography";
import { txtHead } from "../common/constants";

const textComponent = (props: any) => {
  return props.type === txtHead.heading1 ? (
    <Text accessible={true} style={{ ...Typography.heading1, ...props.style }}>
      {props.children}
    </Text>
  ) : props.type === txtHead.heading2 ? (
    <Text accessible={true} style={{ ...Typography.heading2, ...props.style }}>
      {props.children}
    </Text>
  ) : props.type === txtHead.heading3 ? (
    <Text accessible={true} style={{ ...Typography.heading3, ...props.style }}>
      {props.children}
    </Text>
  ) : (
    <Text {...props} accessible={true} style={props.style}>
      {props.children}
    </Text>
  );
};

export default function QpText(props: any) {
  return textComponent(props);
}
