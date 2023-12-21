/* eslint-disable prettier/prettier */
import React from 'react';
import {ImageBackground, View} from 'react-native';
import {CommonActions} from '@react-navigation/native';

// Components
import {STACK} from '../../components/common/stackNames';
import styles from '../../components/common/styles';
import {IMAGES} from '../../assets';
import WkContainer from '../../components/wlkthContent';

interface OnBoardingScreenProps {
  navigation: any;
}

const OnBoarding1: React.FC<OnBoardingScreenProps> = ({navigation}) => {
  const handleNext = () => {
    navigation.navigate(STACK.ONBOARDING2);
  };
  const handleSkip = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: STACK.LOGIN}],
      }),
    );
  };
  return (
    <View style={styles.viewFlex}>
      <ImageBackground
        source={IMAGES.BGIMG}
        resizeMode="cover"
        style={styles.logo}></ImageBackground>
      <WkContainer
        image={IMAGES.COMMUNITY}
        text={'Some Content OnBoarding 1'}
        handleNext={handleNext}
        handleSkip={handleSkip}
        // handlePrevious={handlePrevious}
      />
    </View>
  );
};

export default OnBoarding1;
