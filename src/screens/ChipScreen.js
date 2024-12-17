import {View} from 'react-native';
import React from 'react';
import {Chip} from 'react-native-paper';

const ChipScreen = () => {
  return (
    <View>
      <Chip style={{width: 80}} onPress={() => console.log('Simple Pressed')}>
        Simple
      </Chip>
      <Chip
        style={{width: 105, marginTop: 20}}
        icon="information"
        rippleColor="red"
        onPress={() => console.log('Simple Pressed')}>
        With Icon
      </Chip>
      <Chip
        style={{width: 90, marginTop: 20}}
        disabled={true}
        onPress={() => console.log('Simple Pressed')}>
        Disabled
      </Chip>
      <Chip
        style={{width: 160, marginTop: 20, paddingVertical: 10}}
        onPress={() => console.log('Simple Pressed')}
        textStyle={{color: 'purple', fontSize: 20}}>
        With textStyle
      </Chip>
      <Chip
        style={{width: 125, marginTop: 20}}
        selectedColor="green"
        onPress={() => console.log('Simple Pressed')}>
        Selected Color
      </Chip>
    </View>
  );
};

export default ChipScreen;
