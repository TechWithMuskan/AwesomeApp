import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerContent from './DrawerData';
import Music from '../screens/Music';
import Album from '../screens/Album';
import Recents from '../screens/Recents';
import Notification from '../screens/Notification';

const NativeDrawer = createDrawerNavigator();

const SideDrawer = () => (
  <NavigationContainer>
    <NativeDrawer.Navigator
      screenOptions={{
        drawerStyle: {
          width: '22%',
        },
      }}
      drawerContent={() => <DrawerContent />}>
      <NativeDrawer.Screen name="Music" component={Music} />
      <NativeDrawer.Screen name="Album" component={Album} />
      <NativeDrawer.Screen name="Recents" component={Recents} />
      <NativeDrawer.Screen name="Notifications" component={Notification} />
    </NativeDrawer.Navigator>
  </NavigationContainer>
);

export default SideDrawer;
