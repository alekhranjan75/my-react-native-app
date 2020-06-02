import * as React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Main from './components/Main';

const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});

const App = () => {
  return (
    <Main/>
  );
}

export default App;

