import {StyleSheet} from 'react-native';
import React from 'react';
import {Appbar, FAB} from 'react-native-paper';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const BOTTOM_APPBAR_HEIGHT = 80;

const BottomBar = () => {
  const {bottom} = useSafeAreaInsets();

  return (
    <Appbar
      style={[
        styles.bottom,
        {
          height: BOTTOM_APPBAR_HEIGHT + bottom,
          backgroundColor: '#EEFD96',
        },
      ]}
      safeAreaInsets={{bottom}}>
      <Appbar.Action icon="archive" onPress={() => {}} />
      <Appbar.Action icon="email" onPress={() => {}} />
      <Appbar.Action icon="label" onPress={() => {}} />
      <Appbar.Action icon="delete" onPress={() => {}} />
      <FAB size="medium" icon="plus" onPress={() => {}} style={[styles.fab]} />
    </Appbar>
  );
};

const styles = StyleSheet.create({
  bottom: {
    backgroundColor: 'aquamarine',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  fab: {
    position: 'absolute',
    right: 16,
    top: -20,
    borderRadius: 50,
    backgroundColor: '#F25165',
  },
});

export default BottomBar;
