import {ScrollView, View} from 'react-native';
import React from 'react';

export default function GpScrollView({props}: any) {
  return (
    <View>
      <ScrollView horizontal={true}>{props}</ScrollView>
    </View>
  );
}
