/* eslint-disable prettier/prettier */
import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import {CommonActions} from '@react-navigation/native';

// Components
import {STACK} from '../../components/common/stackNames';
import {COLORS} from '../../components/common/colors';
import styles from '../../components/common/styles';
import GpButton from '../../components/elements/GpButton';
import {IMAGES} from '../../assets';
import WkContainer from '../../components/wlkthContent';
import GpText from '../../components/elements/GpText';

interface WalkthroughScreenProps {
  navigation: any;
}

const Walkthrough1: React.FC<WalkthroughScreenProps> = ({navigation}) => {
  const handleNext = () => {
    navigation.navigate(STACK.WALKTHROUGH2);
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
        text={'Some Content Walkthrough 1'}
      />
      <View style={styles.walkthroughContainer}>
        <View style={styles.rowDirection}>
          <GpButton
            onPress={handleSkip}
            type={"text"}
            style={{
              ...styles.skipBtn,
            }}>
            <Text style={styles.skTxt}>Skip</Text>
          </GpButton>
          <GpButton
          onPress={() => handleNext()}
          type={"contained"}
          style={{...styles.nextBtn,backgroundColor:COLORS.SUCCESS}}
        >
          <GpText type={"buttonText"} style={{ color: COLORS.WHITE }}>
            Next
          </GpText>
        </GpButton>
        </View>
      </View>
    </View>
  );
};

export default Walkthrough1;
