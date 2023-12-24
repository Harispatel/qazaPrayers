import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

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
import GpIcons from "../components/elements/GpIcons"
import { COLORS } from "../components/common/colors"

function HomeScreenTabs() {
  const Tab = createBottomTabNavigator()

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName = ""

          if (route.name === STACK.HOME) {
            iconName = focused ? "home-circle" : "home-circle-outline"
          } else if (route.name === STACK.PROFILE) {
            iconName = focused ? "account-check" : "account-check-outline"
          }
          return (
            <GpIcons
              style={{ color: focused ? COLORS.GREEN : COLORS.DARK_GREY }}
              type={"MaterialCommunityIcons"}
              name={iconName}
              size={30}
            />
          )
        },
        tabBarActiveTintColor: COLORS.GREEN,
        tabBarInactiveTintColor: COLORS.DARK_GREY,
      })}
    >
      <Tab.Screen name={STACK.HOME} component={Home} />
      <Tab.Screen name={STACK.PROFILE} component={Profile} />
    </Tab.Navigator>
  )
}
function AppNavigator(): JSX.Element {
  const AppStack = createNativeStackNavigator()
  return (
    <AppStack.Navigator initialRouteName={STACK.HOME_TABS}>
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
        name={STACK.HOME_TABS}
        options={{ headerShown: false }}
        component={HomeScreenTabs}
      />
    </AppStack.Navigator>
  )
}
export default AppNavigator
