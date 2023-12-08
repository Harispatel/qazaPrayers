/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import AppNavigator from './src/navigation/AppNavigator';
import {NativeBaseProvider} from 'native-base';

function App(): JSX.Element {
  return (
    <NativeBaseProvider>
      <AppNavigator />
    </NativeBaseProvider>
  );
}

export default App;
