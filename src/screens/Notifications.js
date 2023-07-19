import {View, Image, ScrollView} from 'react-native';
import React from 'react';
import Img21 from '../assets/Images/img3.10.png';
import Img22 from '../assets/Images/img3.2.png';
import Img23 from '../assets/Images/img3.7.png';
import Img24 from '../assets/Images/img3.8.jpeg';
import Img25 from '../assets/Images/img3.12.jpeg';
import Img26 from '../assets/Images/img3.3.jpeg';
import Img27 from '../assets/Images/img3.6.jpeg';
import Img28 from '../assets/Images/img3.4.jpeg';
import Img29 from '../assets/Images/img3.9.jpeg';
import Img30 from '../assets/Images/img3.1.png';
import Img31 from '../assets/Images/img3.11.jpeg';
import Img32 from '../assets/Images/img3.5.jpeg';

const Notifications = () => {
  return (
    <ScrollView>
      <View style={{flexDirection: 'row'}}>
        <Image
          source={Img21}
          style={{
            width: '46.4%',
            height: 200,
            marginLeft: 10,
            marginTop: 10,
          }}
        />
        <Image
          source={Img22}
          style={{width: '46.4%', height: 200, marginLeft: 10, marginTop: 10}}
        />
      </View>
      <View style={{flexDirection: 'row'}}>
        <Image
          source={Img23}
          style={{width: '46.4%', height: 200, marginLeft: 10, marginTop: 10}}
        />
        <Image
          source={Img24}
          style={{width: '46.4%', height: 200, marginLeft: 10, marginTop: 10}}
        />
      </View>
      <View style={{flexDirection: 'row'}}>
        <Image
          source={Img25}
          style={{width: '46.4%', height: 200, marginLeft: 10, marginTop: 10}}
        />
        <Image
          source={Img26}
          style={{width: '46.4%', height: 200, marginLeft: 10, marginTop: 10}}
        />
      </View>
      <View style={{flexDirection: 'row'}}>
        <Image
          source={Img27}
          style={{width: '46.4%', height: 200, marginLeft: 10, marginTop: 10}}
        />
        <Image
          source={Img28}
          style={{width: '46.4%', height: 200, marginLeft: 10, marginTop: 10}}
        />
      </View>
      <View style={{flexDirection: 'row'}}>
        <Image
          source={Img29}
          style={{width: '46.4%', height: 200, marginLeft: 10, marginTop: 10}}
        />
        <Image
          source={Img30}
          style={{width: '46.4%', height: 200, marginLeft: 10, marginTop: 10}}
        />
      </View>
      <View style={{flexDirection: 'row'}}>
        <Image
          source={Img31}
          style={{width: '46.4%', height: 200, marginLeft: 10, marginTop: 10}}
        />
        <Image
          source={Img32}
          style={{width: '46.4%', height: 200, marginLeft: 10, marginTop: 10}}
        />
      </View>
    </ScrollView>
  );
};

export default Notifications;
