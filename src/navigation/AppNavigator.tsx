import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { STACK } from "../components/common/stackNames"
import { Walkthrough1, Walkthrough2, Walkthrough3 } from "../pages/Walkthrough"

import {
  LoginScreen,
  Otp,
  Profile,
  SignupScreen,
  OnBoarding1,
  Home,
} from "../pages/index"

function AppNavigator(): JSX.Element {
  const AppStack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <AppStack.Navigator initialRouteName={STACK.PROFILE}>
        {/* Walkthrough Stacks */}
        <AppStack.Screen
          name={STACK.WALKTHROUGH1}
          options={{ headerShown: false }}
          component={Walkthrough1}
        />
        <AppStack.Screen
          name={STACK.WALKTHROUGH2}
          options={{ headerShown: false }}
          component={Walkthrough2}
        />
        <AppStack.Screen
          name={STACK.WALKTHROUGH3}
          options={{ headerShown: false }}
          component={Walkthrough3}
        />
        {/* Auth Stacks */}
        <AppStack.Screen
          name={STACK.LOGIN}
          options={{ headerShown: true }}
          component={LoginScreen}
        />
        {/* LoginScreen */}
        <AppStack.Screen
          name={STACK.SIGN_UP}
          options={{ headerShown: true }}
          component={SignupScreen}
        />
        {/* Boarding Stacks */}
        <AppStack.Screen
          name={STACK.ONBOARDING1}
          options={{ headerShown: true }}
          component={OnBoarding1}
        />
        <AppStack.Screen
          name={STACK.OTP}
          options={{ headerShown: true }}
          component={Otp}
        />
        {/* Profile Stack */}
        <AppStack.Screen
          name={STACK.PROFILE}
          options={{ headerShown: true }}
          component={Profile}
        />
        <AppStack.Screen
          name={STACK.HOME}
          options={{ headerShown: true }}
          component={Home}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  )
}
export default AppNavigator
