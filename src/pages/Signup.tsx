import {Text, View, TextInput, TouchableOpacity, Image} from 'react-native';
import React, {Component} from 'react';
import styles from '../components/common/styles';

export default class Signup extends Component {
  render() {
    return (
      <View style={[styles.contentContainer]}>
        <Text style={[styles.semiBold, styles.textBlack, styles.textLG]}>
          Hey there!
        </Text>
        <Text style={[styles.semiBold, styles.textBlack, styles.textLG]}>
          Let's get Start?
        </Text>
        <View style={[styles.mt45]}>
          <TextInput
            style={[styles.textInput, styles.mt15]}
            keyboardType="number-pad"
            placeholder="Enter your Phone Number"
          />
          <TextInput
            style={[styles.textInput, styles.mt15]}
            keyboardType="email-address"
            placeholder="Enter your Email"
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
            <TouchableOpacity>
              <Text style={[styles.textBlack, styles.semiBold, styles.textMD]}>
                LOGIN
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
