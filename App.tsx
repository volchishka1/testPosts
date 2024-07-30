/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Navigator } from './src/navigation/navigator';
import { Provider } from 'react-redux';
import { store } from './src/store/store';

function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Navigator />
      </SafeAreaProvider>
    </Provider>
  );
}

export default App;
