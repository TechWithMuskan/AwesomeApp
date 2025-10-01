import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Card, Text, List} from 'react-native-paper';
import PropTypes from 'prop-types';

const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
const todayIdx = 1;

const scheduleData = [
  {
    time: '09:30',
    title: 'Project setup',
    description: 'Zoom meeting',
    color: '#fcbaa2',
    icon: 'account-group',
    people: ['DM', 'ET', 'SP'],
  },
  {
    time: '13:30',
    title: 'App design',
    description: 'Conference call',
    color: '#d2b5aaff',
    icon: 'palette',
    people: ['PG', 'You'],
  },
  {
    time: '16:00',
    title: 'Launch details',
    description: 'Zoom meeting',
    color: '#f3c8b9ff',
    icon: 'rocket-launch',
    people: ['FC', 'You'],
  },
  {
    time: '17:00',
    title: 'Call Richard at 10am',
    description: 'Completion date: 21 Aug',
    color: '#f69e7eff',
    icon: 'phone',
    people: ['FC', 'You'],
  },
  {
    time: '18:00',
    title: 'Dentist',
    description: '34 Edward St.',
    color: '#fae0c9ff',
    icon: 'tooth',
    people: [],
  },
];

const DaySelector = ({selected}) => (
  <View style={styles.daySelector}>
    {days.map((day, id) => (
      <View
        key={day + id}
        style={[styles.dayButton, id === selected && styles.dayButtonSelected]}>
        <Text
          style={[styles.dayText, id === selected && styles.dayTextSelected]}>
          {day}
        </Text>
      </View>
    ))}
  </View>
);

DaySelector.propTypes = {
  selected: PropTypes.number.isRequired,
};

const CardRightIcon = props => <List.Icon icon="chevron-right" />;

const CardLeftIcon =
  ({icon}) =>
  props =>
    <List.Icon {...props} icon={icon} />;

const ToDoListScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftBar}>
        <DaySelector selected={todayIdx} />
      </View>
      <ScrollView style={styles.content}>
        <Text style={styles.header}>Schedule</Text>
        {scheduleData.map(item => (
          <Card
            key={`${item.title}-${item.time}`}
            style={[styles.card, {backgroundColor: item.color}]}>
            <Card.Title
              title={item.title}
              subtitle={`${item.description} • ${item.time}`}
              titleStyle={styles.titleStyle}
              subtitleStyle={styles.subtitleStyle}
              left={CardLeftIcon({icon: item.icon})}
              right={CardRightIcon}
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
  leftBar: {
    width: 56,
    backgroundColor: '#fcbaa2',
    alignItems: 'center',
    paddingTop: 32,
    borderTopRightRadius: 24,
    borderBottomRightRadius: 24,
  },
  daySelector: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 8,
  },
  dayButton: {
    width: 36,
    height: 36,
    borderRadius: 12,
    backgroundColor: '#ffe7cd',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 4,
  },
  dayButtonSelected: {
    backgroundColor: '#ed897a',
    borderWidth: 2,
    borderColor: '#ed897a',
  },
  dayText: {
    color: '#222',
    fontWeight: '600',
    fontSize: 16,
    fontFamily: 'System',
  },
  dayTextSelected: {
    color: '#fff',
    fontWeight: '700',
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
    fontFamily: 'System',
    textAlign: 'right',
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
  titleStyle: {
    color: '#232323',
    fontWeight: '900',
    fontSize: 14,
  },
  subtitleStyle: {
    color: '#232323',
    fontSize: 12,
  },
});

export default ToDoListScreen;
