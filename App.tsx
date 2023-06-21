import { SafeAreaView, View, StyleSheet } from 'react-native';
import React from 'react';
import LoaderScreen from './src/screens/LoaderScreen';

const App = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <LoaderScreen />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    height: "100%"
  }
})

export default App;