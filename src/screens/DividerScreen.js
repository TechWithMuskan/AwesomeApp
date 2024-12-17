import {View} from 'react-native';
import React from 'react';
import {Divider, Text} from 'react-native-paper';

const Fruits = [
  {
    key: 1,
    name: 'Lemon',
  },
  {
    key: 2,
    name: 'Mango',
  },
  {
    key: 3,
    name: 'Coconut',
  },
  {
    key: 4,
    name: 'Peach',
  },
  {
    key: 5,
    name: 'Banana',
  },
  {
    key: 6,
    name: 'Apple',
  },
];

const DividerScreen = () => {
  return (
    <>
      {Fruits.map(item => (
        <View key={item.key} style={{padding: 10}}>
          <Text
            style={{
              paddingVertical: 10,
            }}>
            {item.name}
          </Text>
          <Divider />
        </View>
      ))}
    </>
  );
};

export default DividerScreen;
