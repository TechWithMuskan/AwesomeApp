import {View} from 'react-native';
import React from 'react';
import {Icon, MD3Colors} from 'react-native-paper';

const PaperIcon = () => {
  return (
    <View style={{marginTop: 300, alignItems: 'center'}}>
      <Icon source="heart" color={MD3Colors.error50} size={50}></Icon>
    </View>
  );
};

export default PaperIcon;
