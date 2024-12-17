import {View, Text} from 'react-native';
import React from 'react';
import {HelperText, TextInput} from 'react-native-paper';

const HelperTextScreen = () => {
  const [text, setText] = React.useState('');

  const onChangeText = text => setText(text);

  const hasErrors = () => {
    // const regex = /^[A-Za-z]+$/;
    // return !regex.test(text);
    return !text.includes('@');
  };

  return (
    <View>
      <TextInput label="Email" value={text} onChangeText={onChangeText} />
      <HelperText type="error" visible={hasErrors()}>
        Email Address is invalid!
      </HelperText>
    </View>
  );
};

export default HelperTextScreen;
