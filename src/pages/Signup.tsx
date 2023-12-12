/* eslint-disable prettier/prettier */
import {Text, View, TextInput, TouchableOpacity, Image} from 'react-native';
import React, {Component, useState} from 'react';
import styles from '../components/common/styles';
import GpText from '../components/elements/GpText';
import {btnTypes, txtHead} from '../components/common/constants';
import GpTextInput from '../components/elements/GpTextInput';
import GpButton from '../components/elements/GpButton';

const SignupScreen: React.FC = ({navigation}) => {
  const [firstname, setFirstname] = useState('');
  return (
    <View style={[styles.contentContainer]}>
      {/* <Text style={[styles.semiBold, styles.textBlack, styles.textLG]}>

        </Text> */}
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
        {/* <TextInput
          style={[styles.textInput, styles.mt15]}
          keyboardType="number-pad"
          placeholder="Enter your Phone Number"
        /> */}
        <GpTextInput
          keyboardType="number-pad"
          style={[styles.textInput, styles.mt15]}
          label={'Enter your Phone Number'}
          onChangeText={text => setFirstname(text)}
        />
        <GpTextInput
          style={[styles.textInput, styles.mt15]}
          label={'First name'}
          onChangeText={text => setFirstname(text)}
        />
        <GpTextInput
          style={[styles.textInput, styles.mt15]}
          label={'Enter your Email'}
          onChangeText={text => setFirstname(text)}
        />
        <TouchableOpacity
          style={[styles.buttonDark, styles.mt15]}
          onPress={() => {}}>
          <Text
            style={[
              styles.textBlack,
              styles.buttonDarkText,
              styles.textLG,
              styles.semiBold,
            ]}>
            SIGN UP
          </Text>
        </TouchableOpacity>
        <View
          style={[
            styles.mt15,
            styles.flex,
            styles.justifyContentCenter,
            styles.gap4,
          ]}>
          <TouchableOpacity>
            <Image
              style={styles.signUpIcon}
              source={{uri: 'https://i.postimg.cc/hzrKgYsG/google.png'}}
              accessibilityLabel="google"
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              style={styles.signUpIcon}
              source={{uri: 'https://i.postimg.cc/p5LRdBcJ/app-store.png'}}
              accessibilityLabel="AppleStore"
            />
          </TouchableOpacity>
        </View>
        <View
          style={[
            styles.mt15,
            styles.flex,
            styles.justifyContentCenter,
            styles.gap1,
          ]}>
          <Text style={[styles.textBlack]}>Already have an account?</Text>
          <GpButton type={btnTypes.text} onPress={{}}>
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
