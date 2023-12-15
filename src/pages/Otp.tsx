import {View} from 'react-native';
import React, {useState} from 'react';
import styles from '../components/common/styles';
import {GpText, GpTextInput} from '../components/elements';
import {txtHead} from '../components/common/constants';

export default function Otp() {
  const [mobile, setMobileValue] = useState();
  return (
    <View style={[styles.contentContainer]}>
      <GpText
        type={txtHead.heading3}
        style={[styles.semiBold, styles.textBlack, styles.textLG]}>
        Hey there!
      </GpText>
      <GpText
        type={txtHead.heading3}
        style={[styles.semiBold, styles.textBlack, styles.textLG]}>
        Let's get Start?
      </GpText>

      <View style={[styles.mt45]}>
        <GpTextInput
          style={[styles.textInput, styles.mt15]}
          label={'Mobile Number'}
          onChangeText={(text: any) => setMobileValue(text)}
        />
        <GpText
          type={txtHead.heading6}
          style={[styles.semiBold, styles.textBlack]}>
          Let's get Start?
        </GpText>
      </View>
    </View>
  );
}
