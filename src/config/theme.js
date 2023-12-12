import {configureFonts, DefaultTheme} from 'react-native-paper';

import {FONTS} from '../components/common/fonts';
import {COLORS} from '../components/common/colors';

export const fontConfig = {
  ios: {
    regular: {
      fontFamily: FONTS.REGULAR,
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: FONTS.MEDIUM,
      fontWeight: 'normal',
    },
    light: {
      fontFamily: FONTS.LIGHT,
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: FONTS.THIN,
      fontWeight: 'normal',
    },
  },
  android: {
    regular: {
      fontFamily: FONTS.REGULAR,
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: FONTS.MEDIUM,
      fontWeight: 'normal',
    },
    light: {
      fontFamily: FONTS.LIGHT,
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: FONTS.THIN,
      fontWeight: 'normal',
    },
  },
};
export const theme = {
  ...DefaultTheme,
  roundness: 2,
  fonts: configureFonts(fontConfig),
  colors: {
    ...DefaultTheme.colors,
    primary: COLORS.PRIMARY,
    accent: COLORS.SECONDARY,
  },
};
