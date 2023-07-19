import {View, Image, ScrollView} from 'react-native';
import React from 'react';
import Img1 from '../assets/Images/img7.jpeg';
import Img2 from '../assets/Images/img8.jpeg';
import Img3 from '../assets/Images/img5.jpeg';
import Img4 from '../assets/Images/img6.jpeg';
import Img5 from '../assets/Images/img12.jpeg';
import Img6 from '../assets/Images/img4.jpeg';
import Img7 from '../assets/Images/img1.jpeg';
import Img8 from '../assets/Images/img2.jpeg';
import Img9 from '../assets/Images/img9.jpeg';
import Img10 from '../assets/Images/img11.jpeg';
import Img11 from '../assets/Images/img10.jpeg';
import Img12 from '../assets/Images/img3.jpeg';

const Album = () => {
  return (
    <ScrollView>
      <View style={{flexDirection: 'row'}}>
        <Image
          source={Img1}
          style={{
            width: '46.4%',
            height: 200,
            marginLeft: 10,
            marginTop: 10,
          }}
        />
        <Image
          source={Img2}
          style={{width: '46.4%', height: 200, marginLeft: 10, marginTop: 10}}
        />
      </View>
      <View style={{flexDirection: 'row'}}>
        <Image
          source={Img3}
          style={{width: '46.4%', height: 200, marginLeft: 10, marginTop: 10}}
        />
        <Image
          source={Img4}
          style={{width: '46.4%', height: 200, marginLeft: 10, marginTop: 10}}
        />
      </View>
      <View style={{flexDirection: 'row'}}>
        <Image
          source={Img5}
          style={{width: '46.4%', height: 200, marginLeft: 10, marginTop: 10}}
        />
        <Image
          source={Img6}
          style={{width: '46.4%', height: 200, marginLeft: 10, marginTop: 10}}
        />
      </View>
      <View style={{flexDirection: 'row'}}>
        <Image
          source={Img7}
          style={{width: '46.4%', height: 200, marginLeft: 10, marginTop: 10}}
        />
        <Image
          source={Img8}
          style={{width: '46.4%', height: 200, marginLeft: 10, marginTop: 10}}
        />
      </View>
      <View style={{flexDirection: 'row'}}>
        <Image
          source={Img9}
          style={{width: '46.4%', height: 200, marginLeft: 10, marginTop: 10}}
        />
        <Image
          source={Img10}
          style={{width: '46.4%', height: 200, marginLeft: 10, marginTop: 10}}
        />
      </View>
      <View style={{flexDirection: 'row'}}>
        <Image
          source={Img11}
          style={{width: '46.4%', height: 200, marginLeft: 10, marginTop: 10}}
        />
        <Image
          source={Img12}
          style={{width: '46.4%', height: 200, marginLeft: 10, marginTop: 10}}
        />
      </View>
    </ScrollView>
  );
};

export default Album;
