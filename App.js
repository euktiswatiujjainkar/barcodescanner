import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Scan from './Screen/ScanScreen';

export default class App extends React.Component{
  render(){
  return (
    <View style={styles.container}>
      <Scan/>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
