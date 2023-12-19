import React, {useEffect} from 'react';
import LoginScreen from '../pages/Login';
import {LogBox} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {STACK} from '../components/common/stackNames';
import {Walkthrough1, Walkthrough2, Walkthrough3} from '../pages/Walkthrough';

import SignUp from '../pages/Signup';
import {OnBoarding1} from '../pages/OnBoarding';
import Otp from '../pages/Otp';

function AppNavigator(): JSX.Element {
  const AppStack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <AppStack.Navigator initialRouteName={STACK.LOGIN}>
        {/* Walkthrough Stacks */}
        <AppStack.Screen
          name={STACK.WALKTHROUGH1}
          options={{headerShown: false}}
          component={Walkthrough1}
        />
        <AppStack.Screen
          name={STACK.WALKTHROUGH2}
          options={{headerShown: false}}
          component={Walkthrough2}
        />
        <AppStack.Screen
          name={STACK.WALKTHROUGH3}
          options={{headerShown: false}}
          component={Walkthrough3}
        />
        {/* Auth Stacks */}
        <AppStack.Screen
          name={STACK.LOGIN}
          options={{headerShown: true}}
          component={LoginScreen}
        />
        <AppStack.Screen
          name={STACK.SIGN_UP}
          options={{headerShown: true}}
          component={SignUp}
        />
        {/* Boarding Stacks */}
        <AppStack.Screen
          name={STACK.ONBOARDING1}
          options={{headerShown: true}}
          component={OnBoarding1}
        />
        <AppStack.Screen
          name={STACK.OTP}
          options={{headerShown: true}}
          component={Otp}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
export default AppNavigator;
