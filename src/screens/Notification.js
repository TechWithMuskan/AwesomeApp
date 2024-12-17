import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import Img21 from '../assets/Images/img3.10.png';
import Img22 from '../assets/Images/img3.2.png';
import Img23 from '../assets/Images/img3.7.png';
import Img24 from '../assets/Images/img3.8.jpeg';
import Img25 from '../assets/Images/img3.12.jpeg';
import Img26 from '../assets/Images/img3.3.jpeg';

const notificationList = [
  {
    id: 1,
    name: '21 minutes ago',
    time: 'Thomas Koil added new Photo',
    img: Img21,
  },
  {
    id: 2,
    name: '45 minutes ago',
    time: 'Konsa Peri added new Photo',
    img: Img22,
  },
  {
    id: 3,
    name: '1 hour ago',
    time: 'Chik devid liked your Photo',
    img: Img23,
  },
  {
    id: 4,
    name: '4 hour ago',
    time: 'Nik Kosta commented on your post',
    img: Img24,
  },
  {
    id: 5,
    name: '1 day ago',
    time: 'Zeel Nilo added new Photo',
    img: Img25,
  },
  {
    id: 6,
    name: '7 November',
    time: 'Kin added new Photo',
    img: Img26,
  },
];

const Notification = () => {
  return (
    <>
      {notificationList.map(item => (
        <View style={styles.container}>
          <View style={styles.textStyle}>
            <Text style={styles.time}>{item.name}</Text>
            <Text style={styles.name}>{item.time}</Text>
          </View>
          <Image source={item.img} style={styles.imgStyle} />
        </View>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    elevation: 5,
    borderRadius: 18,
    marginTop: 20,
    marginHorizontal: 20,
    paddingLeft: 20,
    justifyContent: 'space-between',
  },
  textStyle: {
    paddingVertical: 15,
  },
  imgStyle: {
    width: 80,
    height: 80,
    borderRadius: 18,
  },
  time: {
    fontSize: 13,
    color: '#a35638',
  },
  name: {
    fontSize: 14,
    color: '#0096b6',
    fontWeight: 500,
    marginTop: 5,
  },
});

export default Notification;
