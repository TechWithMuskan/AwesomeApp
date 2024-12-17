import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Drawer} from 'react-native-paper';
import {DrawerContentScrollView} from '@react-navigation/drawer';

const DrawerCollapsedItems = [
  {
    label: 'Inbox',
    focusedIcon: 'inbox',
    unfocusedIcon: 'inbox-outline',
    key: 0,
    badge: 44,
    route: 'Music',
  },
  {
    label: 'Starred',
    focusedIcon: 'star',
    unfocusedIcon: 'star-outline',
    key: 1,
    route: 'Album',
  },
  {
    label: 'Sent mail',
    focusedIcon: 'send',
    unfocusedIcon: 'send-outline',
    key: 2,
    route: 'Recents',
  },
  {
    label: 'A very long title that will be truncated',
    focusedIcon: 'delete',
    unfocusedIcon: 'delete-outline',
    key: 3,
    route: 'Notifications',
  },
  {
    label: 'Full width',
    focusedIcon: 'arrow-all',
    key: 4,
    route: 'Notifications',
  },
  {
    focusedIcon: 'bell',
    unfocusedIcon: 'bell-outline',
    key: 5,
    badge: true,
    route: 'Notifications',
  },
];

const DrawerContent = () => {
  const navigation = useNavigation();

  const [drawerItemIndex, setDrawerItemIndex] = React.useState(0);

  const onClick = (index, route) => {
    setDrawerItemIndex(index);
    navigation.navigate(route);
  };

  return (
    <DrawerContentScrollView>
      <Drawer.Section title="Hey">
        {DrawerCollapsedItems.map((item, index) => (
          <Drawer.CollapsedItem
            {...item}
            key={item.key}
            active={drawerItemIndex === index}
            onPress={() => onClick(index, item.route)}
          />
        ))}
      </Drawer.Section>
    </DrawerContentScrollView>
  );
};

export default DrawerContent;
