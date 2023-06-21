import {View, Text} from 'react-native';
import React from 'react';
import {ActivityIndicator, MD2Colors} from 'react-native-paper';

const LoaderScreen = () => {
  return (
    <View>
      <ActivityIndicator
        size={'large'}
        color={MD2Colors.red800}
        animating={false}
      />
    </View>
  );
};

export default LoaderScreen;
