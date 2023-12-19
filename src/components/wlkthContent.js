/* eslint-disable prettier/prettier */
import React from 'react';
import {View} from 'react-native';
import {GpButton, GpImage, GpText} from '../components/elements';
import styles from './common/styles';
import {btnTypes, txtHead} from './common/constants';
import {COLORS} from './common/colors';

export default function WkContainer(props) {
  return (
    <>
      <View>
        <GpImage
          style={styles.logo}
          resizeMode="contain"
          source={props?.image}
        />
        <GpText type={txtHead.heading2} style={styles.description}>
          {props.text}
        </GpText>
      </View>
      <View style={styles.walkthroughContainer}>
        <View style={styles.flex}>
          <GpButton
            type={btnTypes.text}
            onPress={props?.handleSkip}
            style={{
              ...styles.skipBtn,
            }}>
            <GpText style={styles.skTxt}>Skip</GpText>
          </GpButton>
          <GpButton
            type={btnTypes.contained}
            onPress={props?.handleNext}
            style={{
              ...styles.nextBtn,
              color: COLORS.WHITE,
              backgroundColor: COLORS.SUCCESS,
            }}>
            <GpText style={styles.wkTxt}>Next</GpText>
          </GpButton>
        </View>
      </View>
    </>
  );
}
