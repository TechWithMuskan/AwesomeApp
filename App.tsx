import React from 'react';
import {View, StatusBar} from 'react-native';
import ToDoListScreen from './src/screens/ToDoListScreen';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#000" barStyle="light-content" />
      <View>
        <ToDoListScreen />
      </View>
    </>
  );
};

export default App;
