import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Avatar} from 'react-native-paper';
import Walk from '../assets/animation/walk4.json';
import LottieView from 'lottie-react-native';

const Profile = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.dailyGoal}>Profile</Text>
      <Text style={styles.dailyGoalP}>Ron</Text>
      <Text style={styles.dailyGoalPS}>29 years old</Text>

      <View style={styles.subContainer}>
        <View style={styles.secondContainer}>
          <LottieView
            source={Walk}
            style={{
              width: '100%',
              height: '100%',
            }}
            autoPlay
            loop
          />
        </View>
      </View>

      <View style={styles.bottomContainer}>
        <Text style={styles.dailyGoalPS}>Daily Goals</Text>
        <View style={[styles.leftContainer, (backgroundColor = '#fe6a1a')]}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Avatar.Icon
              size={44}
              icon="fire"
              color="#fe6a1a"
              style={{backgroundColor: '#fdf7f3'}}
            />
            <Text style={styles.caloryCount}>Calories</Text>
          </View>
          <Text style={styles.caloryCount}>1,840</Text>
        </View>

        <View style={[styles.leftContainer, {backgroundColor: '#7739fa'}]}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Avatar.Icon
              size={44}
              icon="shoe-print"
              color="#7739fa"
              style={{backgroundColor: '#fdf7f3'}}
            />
            <Text style={styles.caloryCount}>Steps</Text>
          </View>
          <Text style={styles.caloryCount}>3,500</Text>
        </View>

        <View style={[styles.leftContainer, {backgroundColor: '#07baf8'}]}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Avatar.Icon
              size={44}
              icon="timer-sand-full"
              color="#07baf8"
              style={{
                backgroundColor: '#fdf7f3',
              }}
            />
            <Text style={styles.caloryCount}>Hours</Text>
          </View>
          <Text style={styles.caloryCount}>8h</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomContainer: {
    marginTop: '-35%',
    alignItems: 'center',
  },
  container: {
    backgroundColor: '#fdf7f3',
    flex: 1,
    padding: 20,
  },
  subContainer: {
    width: '100%',
    alignItems: 'center',
  },
  secondContainer: {
    width: '65%',
    height: '60%',
    backgroundColor: '#f6ede3',
    borderRadius: 120,
  },
  dailyGoal: {
    color: '#334b75',
    fontSize: 16,
    fontWeight: '700',
    textTransform: 'uppercase',
    marginLeft: 6,
    marginTop: 15,
  },
  dailyGoalPContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    backgroundColor: 'red',
  },
  dailyGoalP: {
    color: '#334b75',
    fontSize: 76,
    fontWeight: '500',
  },
  dailyGoalPS: {
    color: '#9fa5b0',
    fontSize: 14,
    fontWeight: '700',
    marginLeft: 6,
  },
  goalPer: {
    marginBottom: 20,
  },
  calories: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
  caloryCount: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '700',
    marginLeft: 12,
  },
  leftContainer: {
    flexDirection: 'row',
    marginTop: 10,
    backgroundColor: '#fe6a1a',
    width: '100%',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: '#f6ede3',
    borderRadius: 10,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '-20%',
  },
  quoteContainer: {
    marginLeft: 20,
    width: '60%',
  },
  quote: {
    color: '#5f5e6d',
    fontWeight: '700',
    letterSpacing: 0.6,
    lineHeight: 20,
    fontSize: 16,
  },
  author: {
    color: '#a8a8a8',
    fontWeight: '500',
    fontSize: 12,
    marginTop: 10,
  },
});

export default Profile;
