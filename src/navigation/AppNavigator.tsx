import React, { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { STACK } from "../components/common/stackNames";

import { LoginScreen, Otp, Profile, SignupScreen, Home } from "../pages/index";
import { Walkthrough } from "../pages/Walkthrough";
import Notifications from "../pages/Profile/Notifications";
import { createDrawerNavigator } from "@react-navigation/drawer";
import QpStorage from "../services/storageService";
import { useDispatch } from "react-redux";
import { setData } from "../redux/slice";
import { useDrawerStatus } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

// const HandleDOB = () => {
//   const isDrawerOpen = useDrawerStatus() === "open";
//   console.log("Function run", isDrawerOpen);
//   useEffect(() => {
//     if (isDrawerOpen) {
//       //yourFunction();
//       dispatch(setData({ changeDobModalStatus: true }));
//     }
//   }, [isDrawerOpen]);
// };
function HomeScreenTabs() {
  const dispatch = useDispatch();
  return (
    <Drawer.Navigator
      initialRouteName={STACK.HOME}
      screenListeners={{
        drawerItemPress: (e) => {
          if (e.target?.includes(STACK.DOB_CHANGE)) {
            dispatch(setData({ changeDobModalStatus: true }));
          }
        },
      }}
    >
      <Drawer.Screen name={STACK.HOME} component={Home} />
      <Drawer.Screen name={STACK.PROFILE} component={Profile} />
    </Drawer.Navigator>
  );
}
function AppNavigator(): JSX.Element {
  const AppStack = createNativeStackNavigator();
  return (
    <AppStack.Navigator initialRouteName={STACK.HOME_TABS}>
      {/* Walkthrough Stacks */}
      <AppStack.Screen
        name={STACK.WALKTHROUGH}
        options={{ headerShown: false }}
        component={Walkthrough}
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
        name={STACK.NOTIFICATIONS}
        options={{ headerShown: true }}
        component={Notifications}
      />

      <AppStack.Screen
        name={STACK.HOME_TABS}
        options={{ headerShown: false }}
        component={HomeScreenTabs}
      />
    </AppStack.Navigator>
  );
}
export default AppNavigator;
