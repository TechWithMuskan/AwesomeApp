import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Avatar} from 'react-native-paper';
import Health from '../assets/Images/healthy.jpeg';
import Walk from '../assets/animation/walk1.json';
import LottieView from 'lottie-react-native';
import Animated, {
  Easing,
  useSharedValue,
  useAnimatedProps,
  withTiming,
} from 'react-native-reanimated';
import {useNavigation} from '@react-navigation/native';

const HealthScore = () => {
  const animationRef = React.useRef(null);
  // const animationProgress = new Animated.Value(0);
  const {Value, timing} = Animated;
  console.log('Animated :', Animated);
  const animationProgress = useSharedValue(0);
  const navigation = useNavigation();

  React.useEffect(() => {
    // Reset progress when component mounts
    animationProgress.value = 0;
  }, []);

  const navigateToScreenTwo = () => {
    navigation.navigate('ScreenTwo');
  };

  const animateTransition = () => {
    animationProgress.value = withTiming(
      1,
      {duration: 500, easing: Easing.inOut(Easing.ease)},
      finished => {
        if (finished) {
          setTimeout(navigateToScreenTwo, 0); // Navigate after animation
        }
      },
    );
  };

  const animatedProps = useAnimatedProps(() => ({
    progress: animationProgress.value,
  }));

  // const animateTransition = () => {
  //   Animated.timing(animationProgress, {
  //     toValue: 1,
  //     duration: transitionDuration,
  //     easing: Easing.inOut(Easing.ease),
  //   }).start(() => {
  //     navigation.navigate('ScreenTwo');
  //     animationProgress.setValue(0); // Reset progress after the animation
  //   });
  // };

  // useEffect(() => {
  //   if (route.name === 'ScreenOne') {
  //     animateTransition();
  //   }
  // }, [route]);

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.firstContainer}>
          <Text style={styles.dailyGoal}>Daily Goal</Text>
          <Text style={styles.goalPer}>
            <Text style={styles.dailyGoalP}>87</Text>
            <Text style={styles.dailyGoalPS}>%</Text>
          </Text>
          <View style={styles.leftContainer}>
            <Avatar.Icon
              size={54}
              icon="fire"
              color="#fe6a1a"
              style={{backgroundColor: '#fdf7f3'}}
            />
            <View>
              <Text style={styles.caloryCount}>1,840</Text>
              <Text style={styles.calories}>calories</Text>
            </View>
          </View>

          <View style={styles.leftContainer}>
            <Avatar.Icon
              size={54}
              icon="shoe-print"
              color="#7739fa"
              style={{backgroundColor: '#fdf7f3'}}
            />
            <View>
              <Text style={styles.caloryCount}>3248</Text>
              <Text style={styles.calories}>steps</Text>
            </View>
          </View>

          <View style={styles.leftContainer}>
            <Avatar.Icon
              size={44}
              icon="timer-sand-full"
              color="#07baf8"
              style={{
                backgroundColor: '#fdf7f3',
                marginRight: 9,
              }}
            />
            <View>
              <Text style={styles.caloryCount}>6.5</Text>
              <Text style={styles.calories}>hours</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity
          onPress={animateTransition}
          style={styles.secondContainer}>
          <LottieView
            ref={animationRef}
            source={Walk}
            style={{width: '100%', height: '100%', marginTop: '-5%'}}
            autoPlay
            animatedProps={animatedProps}
            loop
          />
        </TouchableOpacity>
      </View>
      <View style={styles.card}>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={Health}
            style={{
              width: 60,
              height: 70,
            }}
          />
          <View style={styles.quoteContainer}>
            <Text style={styles.quote}>A simple way to stay healthy</Text>
            <Text style={styles.author}>Dr Melissa</Text>
          </View>
        </View>
        <Avatar.Icon
          size={44}
          icon="lightbulb"
          color="#f43264"
          style={{
            backgroundColor: '#ffffff',
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fdf7f3',
    flex: 1,
    padding: 20,
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
    marginBottom: -15,
    marginTop: 15,
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
    fontWeight: '500',
  },
  caloryCount: {
    color: '#434e73',
    fontSize: 20,
    fontWeight: '700',
  },
  leftContainer: {
    flexDirection: 'row',
    marginTop: 10,
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

export default HealthScore;
