import React from 'react';
import {FAB} from 'react-native-paper';
import Album from './Album';

const FabGroupScreen = () => {
  const [state, setState] = React.useState({open: false});

  const onStateChange = ({open}) => setState({open});

  const {open} = state;
  console.log('open :', open);

  return (
    <>
      <Album />
      <FAB.Group
        open={open}
        visible
        icon={open ? 'calendar-today' : 'plus'}
        actions={[
          {icon: 'plus', onPress: () => console.log('Pressed add')},
          {
            icon: 'star',
            label: 'Star',
            onPress: () => console.log('Pressed star'),
          },
          {
            icon: 'email',
            label: 'Email',
            onPress: () => console.log('Pressed email'),
          },
          {
            icon: 'bell',
            label: 'Remind',
            onPress: () => console.log('Pressed notifications'),
          },
        ]}
        onStateChange={onStateChange}
        onPress={() => {
          if (open) {
            // Alert.alert("I'm opened");
            // do something if the speed dial is open
          }
        }}
      />
    </>
  );
};

export default FabGroupScreen;
