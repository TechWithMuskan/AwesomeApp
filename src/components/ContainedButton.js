import {View, Text, Alert} from 'react-native';
import React from 'react';
import {Button} from 'react-native-paper';
import TopBar from './TopBar';
import {DarkScheme} from '../theme/darkScheme';

const ContainedButton = () => {
  return (
    <View>
      <TopBar title="Contained Button" />
      <View
        style={{
          margin: 20,
        }}>
        <Button
          style={{margin: 20}}
          mode="contained"
          onPress={() => Alert.alert('Default Pressed!')}>
          Default
        </Button>
        <Button
          style={{margin: 20}}
          mode="contained"
          textColor={DarkScheme.tertiary}
          onPress={() => Alert.alert('Default Pressed!')}>
          Custom
        </Button>
        <Button
          style={{margin: 20}}
          mode="contained"
          disabled={true}
          onPress={() => Alert.alert('Disabled Pressed!')}>
          Disabled
        </Button>
        <Button
          style={{margin: 20}}
          mode="contained"
          icon="camera"
          onPress={() => Alert.alert('Icon Pressed!')}>
          Icon
        </Button>
        <Button
          style={{margin: 20}}
          mode="contained"
          loading
          onPress={() => Alert.alert('Loading Pressed!')}>
          Loading
        </Button>
        <Button
          style={{margin: 20}}
          mode="contained"
          icon="camera"
          contentStyle={{flexDirection: 'row-reverse'}}
          onPress={() => Alert.alert('Icon Right Pressed!')}>
          Icon Right
        </Button>
      </View>
    </View>
  );
};

export default ContainedButton;
