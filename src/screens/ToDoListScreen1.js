import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Card, Text} from 'react-native-paper';

const scheduleData = [
  {
    title: 'Project setup',
    color: '#a5a4a4ff',
  },
  {
    title: 'App design',
    color: '#a5a4a4ff',
  },
  {
    title: 'Launch details',
    color: '#a5a4a4ff',
  },
  {
    title: 'Call Richard at 10am',
    color: '#a5a4a4ff',
  },
  {
    title: 'Dentist',
    color: '#a5a4a4ff',
  },
];

const ToDoListScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
        <Text style={styles.header}>Schedule</Text>
        {scheduleData.map(item => (
          <Card
            key={`${item.title}`}
            style={[styles.card, {backgroundColor: item.color}]}>
            <Card.Title
              title={item.title}
              titleStyle={{
                color: '#232323',
                fontWeight: '900',
                fontSize: 14,
              }}
            />
          </Card>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flexDirection: 'row',
    backgroundColor: '#FFF6F0',
  },
  content: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFF6F0',
  },
  header: {
    fontSize: 28,
    color: '#222',
    marginBottom: 24,
    marginTop: 8,
    fontWeight: '900',
  },
  card: {
    marginBottom: 16,
    borderRadius: 10,
    elevation: 5,
    paddingRight: 14,
    backgroundColor: '#FFF1F7',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: {width: 0, height: 4},
  },
});

export default ToDoListScreen;
