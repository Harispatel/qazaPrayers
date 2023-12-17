import React, {useEffect} from 'react';
import LoginScreen from '../pages/Login';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {STACK} from '../components/common/stackNames';
import WalkthroughScreen1 from '../pages/Walkthrough/Walkthrough1';
import WalkthroughScreen2 from '../pages/Walkthrough/Walkthrough2';
import WalkthroughScreen3 from '../pages/Walkthrough/Walkthrough3';
import {LogBox} from 'react-native';
import SignUp from '../pages/Signup';
import Otp from '../pages/Otp';
import Home from '../pages/home/Home';

function AppNavigator(): JSX.Element {
  const AppStack = createNativeStackNavigator();
  useEffect(() => {
    LogBox.ignoreLogs([
      'In React 18, SSRProvider is not necessary and is a noop. You can remove it from your app.',
    ]);
  }, []);
  // const linking = {
  //   prefixes: [
  //     /* your linking prefixes */
  //   ],
  //   config: {
  //     /* configuration for matching screens with paths */
  //   },
  // };
  return (
    <NavigationContainer>
      <AppStack.Navigator initialRouteName={STACK.LOGIN}>
        <AppStack.Screen
          name={STACK.WALKTHROUGH1}
          options={{headerShown: false}}
          component={WalkthroughScreen1}
        />
        <AppStack.Screen
          name={STACK.WALKTHROUGH2}
          options={{headerShown: false}}
          component={WalkthroughScreen2}
        />
        <AppStack.Screen
          name={STACK.WALKTHROUGH3}
          options={{headerShown: false}}
          component={WalkthroughScreen3}
        />
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
        <AppStack.Screen
          name={STACK.OTP}
          options={{headerShown: true}}
          component={Otp}
        />
        <AppStack.Screen
          name={STACK.HOME}
          options={{headerShown: true}}
          component={Home}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
export default AppNavigator;
