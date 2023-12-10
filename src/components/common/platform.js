import {Dimensions, PixelRatio, Platform} from 'react-native';

const {width, height} = Dimensions.get('window');
const guidelineBaseWidth = 350;
// const guidelineBaseHeight = 680;
const BASE_SCALE = width / guidelineBaseWidth;

export const {screenWidth, screenHeight} = Dimensions.get('window');

export const widthPercentageToDP = widthPercent => {
  // Parse string percentage input and convert it to number.
  const elemWidth =
    typeof widthPercent === 'number' ? widthPercent : parseFloat(widthPercent);

  // Use PixelRatio.roundToNearestPixel method in order to round the layout
  // size (dp) to the nearest one that correspons to an integer number of pixels.
  return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
};

/**
 * Converts provided height percentage to independent pixel (dp).
 * @param  {string} heightPercent The percentage of screen's height that UI element should cover
 *                                along with the percentage symbol (%).
 * @return {number}               The calculated dp depending on current device's screen height.
 */
export const heightPercentageToDP = heightPercent => {
  // Parse string percentage input and convert it to number.
  const elemHeight =
    typeof heightPercent === 'number'
      ? heightPercent
      : parseFloat(heightPercent);

  // Use PixelRatio.roundToNearestPixel method in order to round the layout
  // size (dp) to the nearest one that correspons to an integer number of pixels.
  return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);
};

export const listenOrientationChange = that => {
  Dimensions.addEventListener('change', newDimensions => {
    // Retrieve and save new dimensions
    screenWidth = newDimensions.window.width;
    screenHeight = newDimensions.window.height;

    // Trigger screen's rerender with a state update of the orientation variable
    that.setState({
      orientation: screenWidth < screenHeight ? 'portrait' : 'landscape',
    });
  });
};

export const removeOrientationListener = () => {
  Dimensions.removeEventListener('change', () => {});
};
export const isIos = () => {
  return Platform.OS === 'ios' ? true : false;
};

export const isWeb = () => {
  return Platform.OS === 'web' ? true : false;
};

export const dim = () => {
  return {width, height};
};

export const normalize = size => {
  const newSize = size * BASE_SCALE;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(size));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(size));
  }
};

export const isIphoneX = () => {
  return Platform.OS === 'ios' && (isIPhoneXSize() || isIPhoneXrSize());
};

export const isIPhoneXSize = () => {
  const dim = Dimensions.get('window');
  return dim.height == 812 || dim.width == 812;
};

export const isIPhoneXrSize = () => {
  const dim = Dimensions.get('window');
  return dim.height == 896 || dim.width == 896;
};

// TODO have to hadel the height

export const AppBarHeight = props => {
  if (Platform.OS === 'ios') {
    return props;
    // return isIPhoneXrSize() || isIPhoneXSize()
    //   ? normalize(64) + StatusBarHeight()
    //   : normalize(64)
  } else {
    return props;
  }
};

export const StatusBarHeight = () => {
  if (Platform.OS === 'ios') {
    return normalize(24);
  } else {
    return 0;
  }
};
