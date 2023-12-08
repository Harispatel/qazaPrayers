/* eslint-disable prettier/prettier */
import React from 'react';
import {View,  Button, Text} from 'native-base';
import { STACK } from '../../components/common/stackNames';

interface WalkthroughScreenProps {
  navigation: any;
}

const WalkthroughScreen: React.FC<WalkthroughScreenProps> = ({navigation}) => {
  const handleContinue = () => {
    // Navigate to the next walkthrough screen
    // You can customize the navigation logic based on your requirements
    navigation.navigate(STACK.WALKTHROUGH2);
  };
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Walkthrough Screen 1</Text>
      <Button onPress={handleContinue} mt={4}>
        <Text>Continue</Text>
      </Button>
    </View>
  );
};

export default WalkthroughScreen;
