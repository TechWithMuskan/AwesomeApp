import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {List, Text} from 'react-native-paper';

const data = [
  {
    title: 'Documents',
    description: 'All your important files',
    icon: 'folder',
  },
  {
    title: 'Tasks',
    description: 'Your to-do list',
    icon: 'equal',
  },
  {
    title: 'Events',
    description: 'Upcoming meetings & events',
    icon: 'calendar',
  },
];

const ListLeftIcon =
  ({icon}) =>
  props =>
    <List.Icon {...props} color="#FF6D2D" icon={icon} />;

const ListRightIcon = props => <List.Icon {...props} icon="chevron-right" />;

const ListIconScreen = () => (
  <>
    <View style={styles.headerContainer}>
      <Text style={styles.headerEmoji}>📋</Text>
      <Text style={styles.headerTitle}>My Awesome List</Text>
      <Text style={styles.headerSubtitle}>Organize your life beautifully</Text>
    </View>
    <View style={styles.listWrapper}>
      <List.Section title="My List">
        {data.map(item => (
          <List.Item
            key={item.title}
            title={item.title}
            description={item.description}
            left={ListLeftIcon({icon: item.icon})}
            right={ListRightIcon}
          />
        ))}
      </List.Section>
    </View>
  </>
);

const styles = StyleSheet.create({
  headerContainer: {
    paddingTop: 56,
    paddingBottom: 32,
    backgroundColor: '#FF6D2D',
    alignItems: 'center',
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    shadowColor: '#000',
    shadowOpacity: 0.09,
    shadowRadius: 12,
    shadowOffset: {width: 0, height: 6},
    elevation: 8,
    marginBottom: 16,
  },
  headerEmoji: {
    fontSize: 48,
    marginBottom: 8,
  },
  headerTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 6,
    letterSpacing: 1,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#e0e0e0',
    fontStyle: 'italic',
  },
  listWrapper: {
    margin: 16,
    backgroundColor: '#fff',
    borderRadius: 18,
    paddingVertical: 8,
    // iOS shadow
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 8,
    shadowOffset: {width: 0, height: 2},
    // Android shadow
    elevation: 3,
  },
  listItem: {
    paddingVertical: 8,
    paddingHorizontal: 4,
  },
  listTitle: {
    fontWeight: '600',
    fontSize: 18,
    color: '#333',
  },
  listDescription: {
    color: '#888',
    fontSize: 14,
  },
});

export default ListIconScreen;
