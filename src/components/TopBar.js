import React from 'react';
import {Appbar} from 'react-native-paper';

const TopBar = props => {
  return (
    <Appbar.Header style={{backgroundColor: '#FFC4B6'}}>
      <Appbar.BackAction onPress={() => {}} />
      <Appbar.Content title={props.title} />
      <Appbar.Action icon="menu" onPress={() => {}} />
    </Appbar.Header>
  );
};

export default TopBar;
