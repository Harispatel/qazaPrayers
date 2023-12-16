import {Text, View, Pressable} from 'react-native';
import React, {useState} from 'react';
import styles from '../components/common/styles';
import {GpButton, GpImage, GpText, GpTextInput} from '../components/elements';
import {btnTypes, txtHead} from '../components/common/constants';

import {STACK} from '../components/common/stackNames';
import {IMAGES} from '../assets';

const SignupScreen: React.FC = ({navigation}: any) => {
  const [fullname, setFullname] = useState('');
  const handleOtpNav = () => {
    navigation.navigate(STACK.OTP);
  };

  const handleLogin = () => {
    navigation.navigate(STACK.LOGIN);
  };

  console.log(fullname);
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
          keyboardType="number-pad"
          style={[styles.textInput, styles.mt15]}
          label={'Mobile Number'}
          onChangeText={(text: any) => setFullname(text)}
        />
        <GpTextInput
          style={[styles.textInput, styles.mt15]}
          label={'Full Name'}
          onChangeText={(text: any) => setFullname(text)}
        />
        <GpTextInput
          style={[styles.textInput, styles.mt15]}
          label={'Email'}
          onChangeText={(text: any) => setFullname(text)}
        />
        <GpButton
          style={[styles.buttonDark, styles.mt15]}
          onPress={handleOtpNav}>
          <GpText
            style={[
              styles.textBlack,
              styles.buttonDarkText,
              styles.textLG,
              styles.semiBold,
            ]}>
            SIGN UP
          </GpText>
        </GpButton>
        <View
          style={[
            styles.mt15,
            styles.flex,
            styles.justifyContentCenter,
            styles.gap4,
          ]}>
          <Pressable onPress={() => console.log('Clicked Google Icon')}>
            <GpImage
              style={styles.loginIcon}
              source={{uri: IMAGES.GOOGLE}}
              accessibilityLabel="AppleStore"
            />
          </Pressable>
          <Pressable onPress={() => console.log('Clicked Facebook Icon')}>
            <GpImage
              style={styles.loginIcon}
              source={{uri: IMAGES.FACEBOOK}}
              accessibilityLabel="AppleStore"
            />
          </Pressable>
        </View>
        <View
          style={[
            styles.mt15,
            styles.flex,
            styles.justifyContentCenter,
            styles.gap1,
          ]}>
          <Text style={[styles.textBlack, styles.mt15]}>
            Already have an account?
          </Text>
          <GpButton type={btnTypes.text} onPress={handleLogin}>
            <GpText style={[styles.textBlack, styles.semiBold, styles.textMD]}>
              LOGIN
            </GpText>
          </GpButton>
        </View>
      </View>
    </View>
  );
};

export default SignupScreen;
