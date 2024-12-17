import {Alert, StyleSheet} from 'react-native';
import React from 'react';
import {FAB} from 'react-native-paper';

const FabScreen = () => {
  return (
    <FAB
      icon="plus"
      style={styles.fab}
      onPress={() => Alert.alert('Pressed')}
      variant="tertiary"
      size="medium"
      mode="elevated"
      label="Add Contact"
    />
  );
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default FabScreen;
