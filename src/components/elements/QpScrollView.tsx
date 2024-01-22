import { ScrollView, View } from "react-native";
import React from "react";

export default function QpScrollView({ props }: any) {
  return (
    <View>
      <ScrollView horizontal={true}>{props}</ScrollView>
    </View>
  );
}
