import React from 'react';
import { View, Text } from 'react-native';
import { wp, hp } from './Viewport';
const Welcome = (props) => {
  return (
    <View
      style={{
        backgroundColor: 'black',
        height: hp(100),
        paddingTop: hp(20),
      }}
    >
      <Text style={{ fontSize: 40, color: 'white', textAlign: 'center' }}>
        Welcome
      </Text>
      <Text
        style={{
          fontSize: 60,
          marginTop: 20,
          color: 'white',
          textDecorationLine: 'underline',
          fontWeight: 'bold',
          textAlign: 'center',
        }}
      >
        {props.name ? props.name : 'Keshav'}
      </Text>
    </View>
  );
};

export default Welcome;
