import {View} from 'react-native';
import React from 'react';
import {GpCard, GpText} from '../../../components/elements';
import styles from '../../../components/common/styles';
import {CardViewT} from '../../../utility/types/type';

export default function IconCard({
  cardStyle,
  width,
  height,
  url,
  iconText,
}: CardViewT) {
  return (
    <View>
      <GpCard
        cardStyle={[cardStyle]}
        width={width}
        height={height}
        url={url}
        imageStyle={undefined}
      />
      <GpText
        style={[
          styles.center,
          styles.textBlack,
          styles.bold,
          styles.textSM,
          styles.mb5,
        ]}
      >
        {iconText}
      </GpText>
    </View>
  )
}
