import {View} from 'react-native';
import OTPTextInput from 'react-native-otp-textinput';
import React, {useState, useRef} from 'react';

// !other import
import {GpButton, GpText, GpTextInput} from '../components/elements';
import {txtHead} from '../components/common/constants';
import styles from '../components/common/styles';
import {STACK} from '../components/common/stackNames';

export default function Otp({navigation}: any) {
  // ? otp input code ==== start
  let otpInput: any = useRef(null);
  const clearText = () => {
    otpInput.current.clear();
  };
  const setText = () => {
    otpInput.current.setValue('1234');
  };
  // ? otp input code ==== end

  // ? home page navigate ==== start
  const handleHome = () => {
    navigation.navigate(STACK.HOME);
  };
  // ? home page navigate ==== end

  console.log(clearText, setText);
  const [email, setEmailValue] = useState('');
  console.log(email);

  // ? main code ==== start
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
              styles.primaryColor,
            ]}>
            Resend OTP
          </GpText>
        </View>
        <View>
          <View style={[styles.mb15]}>
            <OTPTextInput ref={e => (otpInput = e)} />
          </View>
          <View style={[styles.mt30]}>
            <GpButton
              style={[styles.buttonDark, styles.mt15]}
              onPress={handleHome}>
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
      </View>
    </View>
  );
}
