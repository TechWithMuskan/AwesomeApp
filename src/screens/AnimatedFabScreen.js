import {StyleSheet, SafeAreaView, ScrollView, View, Text} from 'react-native';
import React from 'react';
import {AnimatedFAB} from 'react-native-paper';

const mailList = [
  {
    id: 1,
    key: 'M',
    title: 'Aryan Mahl',
    description:
      'This is a reminder for the interview scheduled for tomorrow. Please make sure to prepare all necessary documents and arrive 10 minutes early.',
    date: '21.05.2024',
    time: '12:34',
    color: '#87CEEB', // Sky Blue
  },
  {
    id: 2,
    key: 'B',
    title: 'Brian Clark',
    description:
      'The team meeting has been rescheduled to next week. Please check your calendar for the updated date and time.',
    date: '22.05.2024',
    time: '09:00',
    color: '#4682B4', // Steel Blue
  },
  {
    id: 3,
    key: 'Q',
    title: 'Catherine Zeta',
    description:
      'The project deadline has been extended by two days. Make sure to inform your team and adjust your plans accordingly.',
    date: '23.05.2024',
    time: '14:15',
    color: '#5F9EA0', // Cadet Blue
  },
  {
    id: 4,
    key: 'W',
    title: 'Daniel Craig',
    description:
      'There is a client feedback meeting at the main office. Please be prepared to discuss the recent project deliverables and feedback.',
    date: '24.05.2024',
    time: '11:00',
    color: '#8B4513', // Saddle Brown
  },
  {
    id: 5,
    key: 'X',
    title: 'Emily Blunt',
    description:
      'Your performance review discussion is scheduled for next Monday. Be ready to discuss your achievements and areas for improvement.',
    date: '25.05.2024',
    time: '10:30',
    color: '#4682B4', // Steel Blue
  },
  {
    id: 6,
    key: 'N',
    title: 'Frank Miller',
    description:
      'A budget planning session is set with the finance team. Please bring all necessary reports and be prepared to discuss the budget.',
    date: '26.05.2024',
    time: '16:45',
    color: '#6B8E23', // Olive Drab
  },
  {
    id: 7,
    key: 'P',
    title: 'George Clooney',
    description:
      'There will be a new hire orientation in conference room A. Please ensure that all materials are ready and that you are on time.',
    date: '27.05.2024',
    time: '13:20',
    color: '#2E8B57', // Sea Green
  },
  {
    id: 8,
    key: 'J',
    title: 'Hannah Baker',
    description:
      'The quarterly report submission is due this Friday. Please make sure all data is accurate and submit it before the deadline.',
    date: '28.05.2024',
    time: '08:50',
    color: '#3CB371', // Medium Sea Green
  },
  {
    id: 9,
    key: 'C',
    title: 'Ian McKellen',
    description:
      'A technical training session for the new software is scheduled. Make sure to attend and familiarize yourself with the new features.',
    date: '29.05.2024',
    time: '15:30',
    color: '#8FBC8F', // Dark Sea Green
  },
  {
    id: 10,
    key: 'K',
    title: 'Jennifer Lawrence',
    description:
      'The marketing strategy meeting is set to plan the next campaign. Bring your ideas and be ready to discuss various strategies.',
    date: '30.05.2024',
    time: '12:00',
    color: '#CD853F', // Peru
  },
  {
    id: 11,
    key: 'V',
    title: 'Kevin Spacey',
    description:
      'The compliance audit review is scheduled for next week. Ensure all your documents are up-to-date and ready for review.',
    date: '31.05.2024',
    time: '17:10',
    color: '#A0522D', // Sienna
  },
  {
    id: 12,
    key: 'R',
    title: 'Linda Hamilton',
    description:
      'There is a customer feedback session on the recent product launch. Gather all customer feedback data and be prepared to present.',
    date: '01.06.2024',
    time: '10:00',
    color: '#D2691E', // Chocolate
  },
  {
    id: 13,
    key: 'S',
    title: 'Michael Jordan',
    description:
      'The product launch event will be held at the downtown venue. Make sure all preparations are complete and arrive on time.',
    date: '02.06.2024',
    time: '14:45',
    color: '#B8860B', // Dark Goldenrod
  },
  {
    id: 14,
    key: 'T',
    title: 'Natalie Portman',
    description:
      'The research and development meeting is on Tuesday. Please bring all your recent findings and be ready to discuss them.',
    date: '03.06.2024',
    time: '09:15',
    color: '#DAA520', // Goldenrod
  },
  {
    id: 15,
    key: 'O',
    title: 'Oliver Twist',
    description:
      'The annual general meeting will be at the headquarters. Ensure all annual reports are ready and attend the meeting on time.',
    date: '04.06.2024',
    time: '13:50',
    color: '#8B0000', // Dark Red
  },
];

const AnimatedFabScreen = () => {
  const [isExtended, setIsExtended] = React.useState(true);
  console.log('isExtended :', isExtended);

  const onScroll = ({nativeEvent}) => {
    const currentScrollPosition =
      Math.floor(nativeEvent?.contentOffset?.y) ?? 0;
    console.log('currentScrollPosition :', currentScrollPosition);

    setIsExtended(currentScrollPosition <= 0);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView onScroll={onScroll} showsVerticalScrollIndicator={false}>
        {mailList.map(item => {
          return (
            <View style={styles.subContainer}>
              <View
                style={[styles.keyContainer, {backgroundColor: item.color}]}>
                <Text style={styles.key}>{item.key}</Text>
              </View>
              <View style={styles.titleContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text numberOfLines={2} style={styles.description}>
                  {item.description}
                </Text>
              </View>
              <View style={styles.timeContainer}>
                <Text style={styles.date}>{item.date}</Text>
                <Text style={styles.time}>{item.time}</Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
      <AnimatedFAB
        icon={'plus'}
        label={'New Message'}
        extended={isExtended}
        onPress={() => console.log('Pressed')}
        animateFrom={'right'}
        iconMode={'static'}
        style={styles.fabStyle}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  key: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFF',
  },
  timeContainer: {
    alignItems: 'flex-end',
    paddingLeft: 15,
    height: 50,
  },
  date: {
    fontSize: 11,
    fontWeight: '800',
  },
  time: {
    fontSize: 11,
    fontWeight: '400',
    marginTop: 12,
  },
  container: {
    padding: 16,
  },
  subContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  fabStyle: {
    bottom: 16,
    right: 16,
    position: 'absolute',
  },
  title: {
    fontSize: 14,
    fontWeight: '800',
    color: '#000',
  },
  titleContainer: {
    paddingHorizontal: 12,
    flex: 1,
    flexShrink: 1,
  },
  description: {
    fontSize: 11,
    fontWeight: '400',
    marginTop: 3,
  },
  keyContainer: {
    width: 50,
    height: 50,
    backgroundColor: 'purple',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AnimatedFabScreen;
