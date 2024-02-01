/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import { theme } from "./src/config/theme";

import AppNavigator from "./src/navigation/AppNavigator";

import { PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import store from "./src/redux/store";
import { Provider } from "react-redux";
import { Home, Profile } from "./src/pages";
import { STACK } from "./src/components/common/stackNames";

const Drawer = createDrawerNavigator();

function App(): JSX.Element {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Provider store={store}>
          <AppNavigator />
        </Provider>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
