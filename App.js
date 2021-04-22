/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Loginscreen from './src/Screen/login/index.js';

const App = () => {
  return (
    <View style={styles.root}>
      <StatusBar barStyle="dark-content" />
      <Loginscreen />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text: {
    color: 'red',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default App;
