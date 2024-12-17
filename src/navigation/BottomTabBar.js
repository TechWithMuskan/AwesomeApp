import React from 'react';
import {BottomNavigation} from 'react-native-paper';
import HomeScreen from '../health/HomeScreen';
import Journal from '../health/Journal';
import Profile from '../health/Profile';

const routes = [
  {
    key: 'home',
    title: 'Home',
    focusedIcon: 'heart',
    unfocusedIcon: 'google-fit',
  },
  {
    key: 'journal',
    title: 'Activities',
    focusedIcon: 'clock',
    unfocusedIcon: 'clock-outline',
  },
  {
    key: 'account',
    title: 'Account',
    focusedIcon: 'account',
    unfocusedIcon: 'account-outline',
  },
];

const BottomTabBar = () => {
  const [index, setIndex] = React.useState(0);

  const renderScene = BottomNavigation.SceneMap({
    home: () => <HomeScreen />,
    journal: () => <Journal />,
    account: () => <Profile />,
  });

  return (
    <BottomNavigation
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      renderScene={renderScene}
      barStyle={{backgroundColor: '#f6ede3'}}
    />
  );
};

export default BottomTabBar;
