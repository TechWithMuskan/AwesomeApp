import * as React from 'react';
import {Avatar, Card, IconButton} from 'react-native-paper';
import TopBar from '../components/TopBar';

const MyComponent = () => {
  return (
    <>
      <TopBar title="Contained Button" />
      <Card>
        <Card.Title
          title="Card Title"
          subtitle="Card Subtitle"
          left={props => <Avatar.Icon {...props} icon="folder" />}
          right={props => (
            <IconButton {...props} icon="dots-vertical" onPress={() => {}} />
          )}
        />
      </Card>
    </>
  );
};

export default MyComponent;
