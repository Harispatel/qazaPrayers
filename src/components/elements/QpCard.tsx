import { View, Image } from "react-native";
import React from "react";

// !other import
import { CardViewT } from "../../utility/types/type";
import QpText from "./QpText";
import styles from "../common/styles";

export default function QpCard({
  imageStyle,
  cardStyle,
  width,
  height,
  url,
  iconText,
}: CardViewT) {
  return (
    <View style={[cardStyle]}>
      <Image
        width={width}
        height={height}
        style={imageStyle}
        source={{ uri: `${url}` }}
        accessibilityLabel="car"
        resizeMode="cover"
      />
      <QpText
        style={[styles.test18, styles.overlayText, styles.overlay, styles.mb_5]}
      >
        {iconText}
      </QpText>
    </View>
  );
}
