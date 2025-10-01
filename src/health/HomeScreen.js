import React, {useState} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HealthScore from './HealthScore';
import Journal from './Journal';
import {Drawer} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';

const RNDrawer = createDrawerNavigator();

const DrawerScreen = () => {
  const [active, setActive] = useState('first');

  return (
    <NavigationContainer>
      <RNDrawer.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f6ede3',
          },
          headerTintColor: '#334b75',
          headerTitleAlign: 'center',
        }}
        drawerContent={() => (
          <>
            <Drawer.Section title="Section 1">
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
          </>
        )}>
        <RNDrawer.Screen name="HealthScore" component={HealthScore} />
        <RNDrawer.Screen name="Journal" component={Journal} />
      </RNDrawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerScreen;
