/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

import { COLORS } from './colors';
import { Typography } from './typography';
import { Constants, width } from './constants';

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
  nextBtn:{
    borderBottomStartRadius:30,
    borderTopStartRadius:30,
  },
  skipBtn:{
    marginRight:width-150,
    color:COLORS.BLACK,
  },
  prevBtn:{
    width:60,
    borderRadius:50,
    padding:5,
  },
  // Walkthrough Styling
  walkthroughContainer:{
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    paddingBottom:20,
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
    transform: [{ rotate: '180deg'}],
    marginTop:10,
    fontSize:30,
    textAlign:'center'
  },
  
  logo: {
    width: width,
    height: 250,
  },
  description:{
    textAlign:'center'
  },
  // Common Styling
  rowDirection:{
    flexDirection: 'row'
  },
  viewFlex:{
    flex: 1
  }

});
