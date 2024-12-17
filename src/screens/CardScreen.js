import {View, Text} from 'react-native';
import React from 'react';
import {Avatar, Button, Card} from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />;

const CardScreen = () => {
  return (
    <View>
      <Card mode="contained">
        <Card.Title
          title="Card Title"
          subtitle="Card Subtitle"
          left={LeftContent}
        />
        <Card.Content>
          <Text variant="titleLarge">Card title</Text>
          <Text variant="bodyMedium">Card content</Text>
        </Card.Content>
        <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
        <Card.Actions>
          <Button>Cancel</Button>
          <Button>Ok</Button>
        </Card.Actions>
      </Card>
    </View>
  );
};

export default CardScreen;
