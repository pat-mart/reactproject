import React from 'react'
import {View, SafeAreaView, Text, StyleSheet} from 'react-native'

import Header from './src/components/Header';
import Counter from './src/components/Counter'

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Counter.js">
      </Header> 
      <Counter></Counter>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 32,
    color: 'blue'
  }
});

export default App;