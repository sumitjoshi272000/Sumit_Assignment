import {Image, StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import SvgUri from 'react-native-svg-uri';
import DataComponent from './components/DataComponent';
import Spacer from './components/Spacer';

const Home = () => {
  let data = [
    {
      name: 'Sarah',
      message: "Hey I've completed the design",
      time: '11:45pm',
      numberOfMessage: 2,
      image: require('./assets/coffee.jpg'),
    },
    {
      name: 'Michael',
      message: 'Get those to me immediately',
      time: '11:45pm',
      image: require('./assets/man1.jpg'),
    },
    {
      name: 'James',
      message: 'Sent it over sometime back',
      time: '11:45pm',
      numberOfMessage: 3,
      image: require('./assets/man2.jpg'),
    },
    {
      name: 'Jessice',
      message: 'Hey I wanted to discuss',
      time: '11:45pm',
      numberOfMessage: 2,
      image: require('./assets/man3.jpg'),
    },
    {
      name: 'John',
      message: 'Send it over',
      time: '11:45pm',
      image: require('./assets/man4.jpg'),
    },
    {
      name: 'Smith',
      message: 'When are you available',
      time: '11:45pm',
      image: require('./assets/man5.jpg'),
    },
    {
      name: 'Hofstader',
      message: "Hey I've completed the design",
      time: '11:45pm',
      numberOfMessage: 2,
      image: require('./assets/man6.jpg'),
    },
    {
      name: 'Senior Manager',
      message: "Hey I've completed the design",
      time: '11:45pm',
      numberOfMessage: 2,
      image: require('./assets/manager.jpg'),
    },
    {
      name: 'Michael',
      message: 'Get those to me immediately',
      time: '11:45pm',
      image: require('./assets/man1.jpg'),
    },
    {
      name: 'James',
      message: 'Sent it over sometime back',
      time: '11:45pm',
      numberOfMessage: 3,
      image: require('./assets/man2.jpg'),
    },
    {
      name: 'Jessice',
      message: 'Hey I wanted to discuss',
      time: '11:45pm',
      numberOfMessage: 2,
      image: require('./assets/man3.jpg'),
    },
    {
      name: 'John',
      message: 'Send it over',
      time: '11:45pm',
      image: require('./assets/man4.jpg'),
    },
    {
      name: 'Smith',
      message: 'When are you available',
      time: '11:45pm',
      image: require('./assets/man5.jpg'),
    },
    {
      name: 'Hofstader',
      message: "Hey I've completed the design",
      time: '11:45pm',
      numberOfMessage: 2,
      image: require('./assets/man6.jpg'),
    },
    {
      name: 'Senior Manager',
      message: "Hey I've completed the design",
      time: '11:45pm',
      numberOfMessage: 2,
      image: require('./assets/manager.jpg'),
    },
  ];

  return (
    <View>
      <View
        style={{
          height: 90,
          backgroundColor: '#1E1E1E',
          paddingHorizontal: 24,
        }}>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <Image
            source={require('./assets/girl.jpg')}
            style={{width: 48, height: 48, borderRadius: 24}}
          />

          <Text
            style={{
              color: '#FFFFFF',
              alignSelf: 'center',
              marginLeft: 20,
              fontSize: 18,
              fontWeight: 'bold',
            }}>
            Diana
          </Text>
        </View>
      </View>
      <ScrollView
        style={{
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
          backgroundColor: '#FFFFFF',
          marginTop: -20,
          paddingHorizontal: 24,
        }}>
        {data.map((item, key) => (
          <View>
            <Spacer value={20} />
            <DataComponent
              name={item.name}
              message={item.message}
              time={item.time}
              numberOfMessage={item.numberOfMessage}
              image={item.image}
            />
          </View>
        ))}
        <Spacer value={100} />
      </ScrollView>
      <View
        style={{
          height: 70,
          width: 70,
          borderRadius: 35,
          backgroundColor: '#00008B',
          position: 'absolute',
          bottom: 150,
          right: 24,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <SvgUri source={require('./assets/User_add.svg')} />
      </View>
      <Spacer value={50} />
    </View>
  );
};

export default Home;
