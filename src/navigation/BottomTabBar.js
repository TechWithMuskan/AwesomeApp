import React from 'react';
import {BottomNavigation} from 'react-native-paper';
import Music from '../screens/Music';
import Album from '../screens/Album';
import Recents from '../screens/Recents';
import Notifications from '../screens/Notifications';

const routes = [
  {
    key: 'music',
    title: 'Favorites',
    focusedIcon: 'heart',
    unfocusedIcon: 'heart-outline',
  },
  {key: 'albums', title: 'Albums', focusedIcon: 'album'},
  {key: 'recents', title: 'Recents', focusedIcon: 'history'},
  {
    key: 'notifications',
    title: 'Notifications',
    focusedIcon: 'bell',
    unfocusedIcon: 'bell-outline',
  },
];

const BottomTabBar = () => {
  const [index, setIndex] = React.useState(0);

  const renderScene = BottomNavigation.SceneMap({
    music: () => <Music />,
    albums: () => <Album />,
    recents: () => <Recents />,
    notifications: () => <Notifications />,
  });

  return (
    <BottomNavigation
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default BottomTabBar;
