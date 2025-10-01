import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Avatar} from 'react-native-paper';
import Map from '../assets/Images/map.jpeg';
import Building from '../assets/Images/building.jpeg';
import Walk from '../assets/animation/walk7.json';
import LottieView from 'lottie-react-native';
import Animated, {
  Easing,
  useSharedValue,
  useAnimatedProps,
  withTiming,
} from 'react-native-reanimated';
import {useNavigation} from '@react-navigation/native';

const Journal = () => {
  const animationProgress = useSharedValue(0);
  const navigation = useNavigation();

  React.useEffect(() => {
    // Reset progress when component mounts
    animationProgress.value = 0;
  }, []);

  const navigateToScreenOne = () => {
    navigation.navigate('ScreenOne');
  };

  const animateTransition = () => {
    animationProgress.value = withTiming(
      1,
      {duration: 500, easing: Easing.inOut(Easing.ease)},
      finished => {
        if (finished) {
          setTimeout(navigateToScreenOne, 0); // Navigate after animation
        }
      },
    );
  };

  const animatedProps = useAnimatedProps(() => ({
    progress: animationProgress.value,
  }));

  return (
    <View style={styles.container}>
      <ImageBackground source={Building} style={styles.backgroundImage}>
        <Text style={styles.dailyGoal}>JOURNAL</Text>
        <View style={styles.goalPer}>
          <Text style={styles.dailyGoalP}>19</Text>
          <Text style={styles.dailyGoalDate}>May 2024</Text>
        </View>
        <TouchableOpacity onPress={animateTransition}>
          <LottieView
            animatedProps={animatedProps}
            source={Walk}
            style={{width: '100%', height: '70%', marginBottom: '-10%'}}
            autoPlay
            loop
          />
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.card}>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={Map}
            style={{
              width: 60,
              height: 70,
            }}
          />
          <View style={styles.quoteContainer}>
            <Text style={styles.author}>07:42</Text>
            <Text style={styles.quote}>Morning Walk</Text>
            <Text style={styles.author}>2km in 30 minutes</Text>
          </View>
        </View>
        <Avatar.Icon
          size={44}
          icon="walk"
          color="#0b263b"
          style={{
            backgroundColor: '#fbcd3e',
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: 600, // Adjust this height as needed
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  container: {
    backgroundColor: '#fdf7f3',
    flex: 1,
    // padding: 20,
  },
  subContainer: {
    width: '100%',
    flexDirection: 'row',
  },
  firstContainer: {
    width: '40%',
  },
  secondContainer: {
    width: '60%',
    height: '90%',
  },
  dailyGoal: {
    color: '#334b75',
    fontSize: 16,
    fontWeight: '700',
    textTransform: 'uppercase',
    marginLeft: 13,
    marginTop: 15,
  },
  dailyGoalDate: {
    color: '#334b75',
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 20,
    marginTop: -10,
  },
  dailyGoalPContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    backgroundColor: 'red',
  },
  dailyGoalP: {
    color: '#334b75',
    fontSize: 96,
    fontWeight: '500',
    textTransform: 'uppercase',
  },
  dailyGoalPS: {
    color: '#334b75',
    fontSize: 25,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  goalPer: {
    marginBottom: 20,
  },
  calories: {
    color: '#b7b2af',
    fontSize: 14,
    fontWeight: '490',
  },
  caloryCount: {
    color: '#434e73',
    fontSize: 20,
    fontWeight: '700',
  },
  leftContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
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
    marginBottom: 10,
    marginTop: 5,
  },
  author: {
    color: '#a8a8a8',
    fontWeight: '500',
    fontSize: 12,
  },
});

export default Journal;
