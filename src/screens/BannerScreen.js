import {Image} from 'react-native';
import React from 'react';
import {Banner} from 'react-native-paper';
import Album from './Album';

const BannerScreen = () => {
  const [visible, setVisible] = React.useState(true);
  return (
    <>
      <Banner
        visible={visible}
        actions={[
          {
            label: 'Fix it',
            onPress: () => setVisible(false),
          },
          {
            label: 'Learn more',
            onPress: () => setVisible(false),
          },
        ]}
        icon={({size}) => (
          <Image
            source={{
              uri: 'https://avatars3.githubusercontent.com/u/17571969?s=400&v=4',
            }}
            style={{
              width: size,
              height: size,
            }}
          />
        )}>
        There was a problem processing a transaction on your credit card.
      </Banner>
      <Album />
    </>
  );
};

export default BannerScreen;
