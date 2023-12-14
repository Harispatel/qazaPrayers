/* eslint-disable prettier/prettier */
import {Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import styles from '../components/common/styles';
import {GpButton, GpText, GpTextInput} from '../components/elements';
import {btnTypes, txtHead} from '../components/common/constants';

const SignupScreen: React.FC = ({navigation}) => {
  const [firstname, setFirstname] = useState('');
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
