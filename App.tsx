/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react"
import { theme } from "./src/config/theme"

import AppNavigator from "./src/navigation/AppNavigator"
import { PaperProvider } from "react-native-paper"
import { NavigationContainer } from "@react-navigation/native"

function App(): JSX.Element {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </PaperProvider>
  )
}

export default App
