import {View, Text, Alert} from 'react-native';
import React from 'react';
import {Button} from 'react-native-paper';
import TopBar from './TopBar';
import {DarkScheme} from '../theme/darkScheme';

const ElevatedButton = () => {
  return (
    <View>
      <TopBar title="Elevated Button" />
      <View
        style={{
          margin: 20,
        }}>
        <Button
          style={{margin: 20}}
          buttonColor={DarkScheme.error}
          mode="elevated"
          onPress={() => Alert.alert('Default Pressed!')}>
          Default
        </Button>
        <Button
          style={{margin: 20}}
          mode="elevated"
          textColor={DarkScheme.tertiary}
          onPress={() => Alert.alert('Default Pressed!')}>
          Custom
        </Button>
        <Button
          style={{margin: 20}}
          mode="elevated"
          disabled={true}
          onPress={() => Alert.alert('Disabled Pressed!')}>
          Disabled
        </Button>
        <Button
          style={{margin: 20}}
          mode="elevated"
          icon="camera"
          onPress={() => Alert.alert('Icon Pressed!')}>
          Icon
        </Button>
        <Button
          style={{margin: 20}}
          mode="elevated"
          loading
          onPress={() => Alert.alert('Loading Pressed!')}>
          Loading
        </Button>
        <Button
          style={{margin: 20}}
          mode="elevated"
          icon="camera"
          contentStyle={{flexDirection: 'row-reverse'}}
          onPress={() => Alert.alert('Icon Right Pressed!')}>
          Icon Right
        </Button>
      </View>
    </View>
  );
};

export default ElevatedButton;
