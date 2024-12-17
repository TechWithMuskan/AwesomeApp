import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Drawer} from 'react-native-paper';

const DrawerContent = () => {
  const [active, setActive] = React.useState('');
  const navigation = useNavigation();

  const onClick = value => {
    setActive(value);
    navigation.navigate(value);
  };

  return (
    <Drawer.Section title="My Awesome App">
      <Drawer.Item
        label="Music"
        active={active === 'Music'}
        onPress={() => onClick('Music')}
        icon="heart"
      />
      <Drawer.Item
        label="Album"
        active={active === 'Album'}
        onPress={() => onClick('Album')}
        icon="album"
      />
      <Drawer.Item
        label="Recents"
        active={active === 'Recents'}
        onPress={() => onClick('Recents')}
        icon="history"
      />
      <Drawer.Item
        label="Notifications"
        active={active === 'Notifications'}
        onPress={() => onClick('Notifications')}
        icon="bell"
      />
      <Drawer.Item
        label="Color Palette"
        active={active === 'Palette'}
        onPress={() => onClick('Palette')}
        icon="palette"
      />
    </Drawer.Section>
  );
};

export default DrawerContent;
