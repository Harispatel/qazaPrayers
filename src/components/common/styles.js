/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

import {COLORS} from './colors';
import {Typography} from './typography';
import {Constants, width} from './constants';

export default StyleSheet.create({
  titleContainer: {
    backgroundColor: COLORS.GREEN,
    padding: Constants.GAP,
  },

  title: Object.assign({}, Typography.heading3, {
    color: COLORS.BLACK,
  }),

  contentContainer: {
    padding: Constants.GAP,
  },

  content: Object.assign({}, Typography.bodyText),
  nextBtn: {
    borderBottomStartRadius: 30,
    borderTopStartRadius: 30,
  },
  skipBtn: {
    marginRight: width - 150,
    color: COLORS.BLACK,
  },
  prevBtn: {
    width: 60,
    borderRadius: 50,
    padding: 5,
  },
  // Walkthrough Styling
  walkthroughContainer: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    paddingBottom: 20,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  wkTxt: {
    color: COLORS.WHITE,
  },
  skTxt: {
    color: COLORS.BLACK,
  },
  prvTxt: {
    color: COLORS.GREEN,
    marginTop: 10,
    fontSize: 20,
    textAlign: 'center',
  },

  logo: {
    width: width,
    height: 250,
  },
  description: {
    textAlign: 'center',
  },
  // Common Styling
  viewFlex: {
    flex: 1,
  },
  textBlack: {
    color: 'black',
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'white',
    width: '100%',
    height: 60,
    backgroundColor: '#CDCDCD',
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 18,
  },
  buttonDark: {
    backgroundColor: '#4D4D4D',
    width: '100%',
    height: 60,
    borderRadius: 50,
  },
  buttonDarkText: {
    textAlign: 'center',
    marginVertical: 15,
    color: 'white',
  },
  semiBold: {
    fontWeight: '800',
  },
  textUP: {
    textTransform: 'uppercase',
  },
  textLG: {
    fontSize: 20,
  },
  textMD: {
    fontSize: 15,
  },
  mt45: {
    marginVertical: 45,
  },
  mt15: {
    marginVertical: 15,
  },
  signUpIcon: {
    width: 60,
    height: 60,
  },
  loginIcon: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  flex: {
    flexDirection: 'row',
  },
  justifyContentEvenly: {
    justifyContent: 'space-evenly',
  },
  justifyContentCenter: {
    justifyContent: 'center',
  },
  gap4: {
    gap: 30,
  },
  gap1: {
    gap: 5,
  },
  colorSuccess: {
    color: COLORS.SUCCESS,
  },
  colorGrey: {
    color: COLORS.DARK_GREY,
  },
});
