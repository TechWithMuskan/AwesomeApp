import {View, Text, Alert} from 'react-native';
import React from 'react';
import {Button} from 'react-native-paper';
import TopBar from './TopBar';
import {DarkScheme} from '../theme/darkScheme';

const TextButton = () => {
  return (
    <View>
      <TopBar title="Text Button" />
      <Button mode="text" onPress={() => Alert.alert('Default Pressed!')}>
        Default
      </Button>
      <Button
        textColor={DarkScheme.tertiary}
        onPress={() => Alert.alert('Default Pressed!')}>
        Custom
      </Button>
      <Button disabled={true} onPress={() => Alert.alert('Disabled Pressed!')}>
        Disabled
      </Button>
      <Button icon="camera" onPress={() => Alert.alert('Icon Pressed!')}>
        Icon
      </Button>
      <Button loading onPress={() => Alert.alert('Loading Pressed!')}>
        Loading
      </Button>
      <Button
        icon="camera"
        contentStyle={{flexDirection: 'row-reverse'}}
        onPress={() => Alert.alert('Icon Right Pressed!')}>
        Icon Right
      </Button>
    </View>
  );
};

export default TextButton;
