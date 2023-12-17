import {Dimensions} from 'react-native';
export const Constants = {
  GAP: 20,
};

export const {width, height} = Dimensions.get('window');

export const txtHead = {
  heading1: 'heading1',
  heading2: 'heading2',
  heading3: 'heading3',
  heading4: 'heading4',
  heading6: 'heading6',
};
export const btnTypes = {
  contained: 'contained',
  elevated: 'elevated',
  tonal: 'contained-tonal',
  outlined: 'outlined',
  text: 'text',
};

export const emailRegex =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
