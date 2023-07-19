import {View, Image, ScrollView} from 'react-native';
import React from 'react';
import Img21 from '../assets/Images/img1.1.jpeg';
import Img22 from '../assets/Images/img1.2.png';
import Img23 from '../assets/Images/img1.3.jpeg';
import Img24 from '../assets/Images/img1.4.jpeg';
import Img25 from '../assets/Images/img1.5.jpeg';
import Img26 from '../assets/Images/img1.6.jpeg';
import Img27 from '../assets/Images/img1.7.jpeg';
import Img28 from '../assets/Images/img1.8.jpeg';
import Img29 from '../assets/Images/img1.9.jpeg';
import Img30 from '../assets/Images/img1.10.jpeg';
import Img31 from '../assets/Images/img1.11.jpeg';
import Img32 from '../assets/Images/img1.12.jpeg';

const Recents = () => {
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

export default Recents;
