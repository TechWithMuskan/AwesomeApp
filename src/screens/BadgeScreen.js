import {View, StyleSheet} from 'react-native';
import React from 'react';
import {Badge, FAB} from 'react-native-paper';

const BadgeScreen = () => {
  return (
    <View>
      <FAB icon="bell" size={54} style={styles.iconStyle} />
      <Badge style={styles.badgeStyle} visible={true}></Badge>
    </View>
  );
};

const styles = StyleSheet.create({
  iconStyle: {
    position: 'absolute',
    top: 20,
    left: 20,
    backgroundColor: '#D96E5B',
  },
  badgeStyle: {
    position: 'absolute',
    top: 10,
    left: 70,
    backgroundColor: '#D96E5B',
  },
});

export default BadgeScreen;
