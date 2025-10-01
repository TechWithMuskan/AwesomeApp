import {View, Text, Alert} from 'react-native';
import React from 'react';
import {IconButton, MD3Colors} from 'react-native-paper';

const PaperIconButton = () => {
  return (
    <View>
      <IconButton
        theme={{colors: {primary: 'red'}}}
        icon="camera"
        size={50}
        // iconColor={MD3Colors.error50}
        onPress={() => Alert.alert("I'm pressed!")}
        // rippleColor="#000000"
        // disabled={true}
        // mode="outlined"
        // containerColor="#000000"
        selected={true}
        // animated={true}
        // loading={true}
      />
    </View>
  );
};

export default PaperIconButton;
