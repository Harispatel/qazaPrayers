import React from "react";
import { View } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { COLORS } from "../components/common/colors";
import styles from "../components/common/styles";
import { height } from "../components/common/constants";
import { GpText } from "../components/elements";

interface LoaderScreenProps {
  //   navigation: any;
}
const LoaderView: React.FC<LoaderScreenProps> = () => {
  return (
    <View
      style={{
        ...styles.justifyContentCenter,
        ...styles.alignContentCenter,
        height: height,
      }}
    >
      <ActivityIndicator
        size={40}
        animating={true}
        color={COLORS.PRIMARY_TXT}
      />
      <GpText
        style={{
          ...styles.textMD,
          ...styles.semiBold,
          ...styles.mt15,
          color: COLORS.PRIMARY_TXT,
        }}
      >
        Loading Please wait...
      </GpText>
    </View>
  );
};

export default LoaderView;
