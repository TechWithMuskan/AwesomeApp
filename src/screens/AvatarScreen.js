import {View} from 'react-native';
import React from 'react';
import {Avatar} from 'react-native-paper';
import AvatarImg from '../assets/Images/avatar_img.png';

const AvatarScreen = () => {
  return (
    <View>
      <Avatar.Icon
        size={54}
        icon="folder"
        style={{backgroundColor: 'yellow', margin: 30}}
      />
      <Avatar.Text
        size={54}
        label="AB"
        color="white"
        style={{backgroundColor: 'pink', margin: 30}}
      />
      <Avatar.Image size={54} source={AvatarImg} style={{margin: 30}} />
    </View>
  );
};

export default AvatarScreen;
