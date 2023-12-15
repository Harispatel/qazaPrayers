import {View} from 'react-native';
import React, {useState} from 'react';
import styles from '../components/common/styles';
import {GpButton, GpText, GpTextInput} from '../components/elements';
import {txtHead} from '../components/common/constants';

export default function Otp() {
  const [email, setEmailValue] = useState('');
  const handleHome = () => {
    return;
  };
  console.log(email);
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
          label={'Email'}
          onChangeText={(text: any) => setEmailValue(text)}
        />
        <View style={[styles.flex, styles.justifyContentBetween]}>
          <GpText
            type={txtHead.heading6}
            style={[styles.semiBold, styles.textBlack]}>
            Otp is sended to you emails
          </GpText>
          <GpText
            type={txtHead.heading6}
            style={[
              styles.semiBold,
              styles.textBlack,
              styles.ml5,
              styles.semiBold,
              styles.textMD,
            ]}>
            Resend OTP
          </GpText>
        </View>
        <GpButton style={[styles.buttonDark, styles.mt15]} onPress={handleHome}>
          <GpText
            style={[
              styles.textBlack,
              styles.buttonDarkText,
              styles.textLG,
              styles.semiBold,
            ]}>
            VERIFY
          </GpText>
        </GpButton>
      </View>
    </View>
  );
}
