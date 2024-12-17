import {View, Text} from 'react-native';
import React from 'react';
import {Checkbox} from 'react-native-paper';

const CheckboxScreen = () => {
  const [checked, setChecked] = React.useState(false);
  console.log('checked :', checked);

  return (
    <View>
      <Checkbox
        // disabled={true}
        status={checked ? 'checked' : 'unchecked'}
        onPress={() => {
          setChecked(!checked);
        }}
      />
      <Checkbox.Item
        label="Terms & Conditions"
        status={checked ? 'checked' : 'unchecked'}
        onPress={() => {
          setChecked(!checked);
        }}
      />
    </View>
  );
};

export default CheckboxScreen;
