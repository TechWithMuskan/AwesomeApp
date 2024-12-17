import React, {useState} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Music from './Music';
import Album from './Album';
import {Drawer} from 'react-native-paper';
import HomeScreen from '../health/HomeScreen';

const RNDrawer = createDrawerNavigator();

const DrawerScreen = () => {
  const [active, setActive] = useState('first');

  return (
    <RNDrawer.Navigator
      //   screenOptions={{
      //     drawerStyle: {
      //       width: '20%',
      //     },
      //   }}
      drawerContent={() => (
        <>
          <Drawer.Section title="Some title">
            <Drawer.Item
              label="First Item"
              active={active === 'first'}
              onPress={() => setActive('first')}
            />
            <Drawer.Item
              label="Second Item"
              active={active === 'second'}
              onPress={() => setActive('second')}
            />
          </Drawer.Section>
          <Drawer.Item
            // style={{backgroundColor: '#64ffda'}}
            icon="star"
            label="First Item"
          />
          <Drawer.Item
            style={{backgroundColor: '#64ffda'}}
            icon="star"
            label="First Item"
          />
          <Drawer.CollapsedItem
            focusedIcon="inbox"
            unfocusedIcon="inbox-outline"
            label="Inbox"
          />
          <Drawer.CollapsedItem
            focusedIcon="inbox"
            unfocusedIcon="inbox-outline"
            label="Inbox"
          />
          <Drawer.CollapsedItem
            focusedIcon="inbox"
            unfocusedIcon="inbox-outline"
            label="Inbox"
          />
        </>
      )}>
      <RNDrawer.Screen name="HomeScreen" component={HomeScreen} />
      <RNDrawer.Screen name="Album" component={Album} />
    </RNDrawer.Navigator>
  );
};

export default DrawerScreen;
