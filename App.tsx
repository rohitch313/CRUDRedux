/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import AppNavigator from './src/navigator/appNavigator';
import { Provider } from 'react-redux';
import Mystore from './src/redux/MyStore';




function App(): React.JSX.Element {
 
 

  return (
    <Provider store={Mystore}>

  
    <AppNavigator/>
    </Provider>
  );
}



export default App;
