/* eslint-disable prettier/prettier */
import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import {CommonActions} from '@react-navigation/native';

// Components
import {STACK} from '../../components/common/stackNames';
import {COLORS} from '../../components/common/colors';
import styles from '../../components/common/styles';
import GpButton from '../../components/elements/GpButton';
import GpImage from '../../components/elements/GpImage';
import {txtHead} from '../../components/common/constants';
import {IMAGES} from '../../assets';
import GpText from '../../components/elements/GpText';

interface WalkthroughScreenProps {
  navigation: any;
}

const Walkthrough2: React.FC<WalkthroughScreenProps> = ({navigation}) => {
  const handleNext = () => {
    navigation.navigate(STACK.WALKTHROUGH3);
  };
  const handlePrevious = () => {
    navigation.navigate(STACK.WALKTHROUGH1);
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
        style={styles.logo}>
          <GpButton
            onPress={handlePrevious}
            style={{
              ...styles.prevBtn,
            }}>
            <Text style={styles.prvTxt}>➤</Text>
          </GpButton>
        </ImageBackground>
        <View>
      <GpImage style={styles.logo} resizeMode="contain" source={IMAGES.COMMUNITY} />
      <GpText type={txtHead.heading2} style={styles.description}>Some Content Walkthrough 2</GpText>
        </View>
      <View style={styles.walkthroughContainer}>
        <View style={styles.rowDirection}>
          <GpButton
            onPress={handleSkip}
            style={{
              ...styles.skipBtn,
            }}>
            <Text style={styles.skTxt}>Skip</Text>
          </GpButton>
          <GpButton
            onPress={handleNext}
            style={{
              ...styles.nextBtn,
              color: COLORS.white.default,
              backgroundColor: COLORS.green.default,
            }}>
            <Text style={styles.wkTxt}>Next</Text>
          </GpButton>
        </View>
      </View>
    </View>
  );
};

export default Walkthrough2;
