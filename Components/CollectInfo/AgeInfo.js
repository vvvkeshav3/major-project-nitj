import React, { useState } from 'react';
import { Text, ScrollView, TextInput, View, Pressable } from 'react-native';
import { StyleSheet, Dimensions } from 'react-native';
import { Footer } from './Footer';
import { wp, hp } from '../Viewport';
import { Slider, Icon } from '@rneui/base';

const AgeInfo = (props) => {
  const [value, setValue] = useState(20);
  const [valid, setValid] = useState(true);

  const onNext = (page) => {
    props.onSave(value);
    props.onChangePage(page);
  };
  const onBack = (page) => {
    props.onChangePage(page);
  };

  return (
    <View
      style={{
        height: hp(100),
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <ScrollView
        alwaysBounceVertical={false}
        contentContainerStyle={{
          flexDirection: 'column',
          alignItems: 'center',
          flex: 1,
        }}
      >
        <Text style={{ fontSize: 25, marginBottom: 10 }}>What's your Age?</Text>
        <Text style={{ textAlign: 'center' }}>
          Your age determined how much you should consume. (Select your age in
          years)
        </Text>
        <View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 50,
              justifyContent: 'center',
              marginBottom: 50,
            }}
          >
            <Text style={styles.age}>Age : </Text>
            <TextInput
              keyboardType="numeric"
              style={styles.ageInput}
              value={value.toString()}
              defaultValue="20"
              maximumValue={120}
              minimumValue={0}
              onChangeText={(value) => setValue(value)}
            />
          </View>
          <Slider
            // animateTransitions
            // animationType="timing"
            maximumTrackTintColor="#ccc"
            maximumValue={120}
            minimumTrackTintColor="#222831"
            minimumValue={0}
            onValueChange={(value) => setValue(value)}
            orientation="horizontal"
            step={1}
            style={{ width: wp(80) }}
            thumbStyle={{ height: 20, width: 20 }}
            thumbProps={{}}
            thumbTintColor="#B83B5E"
            thumbTouchSize={{ width: 40, height: 40 }}
            trackStyle={{ height: 6, borderRadius: 20 }}
            value={value}
          />
        </View>
      </ScrollView>
      <Footer
        pageNo={props.pageNo}
        valid={valid}
        onNext={onNext}
        onBack={onBack}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  ageInput: {
    // marginTop: 40,
    borderColor: 'black',
    marginLeft: 20,
    borderRadius: 10,
    textAlign: 'center',
    borderWidth: 1,
    width: 80,
    padding: 10,
    fontSize: 25,
    // height: 50,
  },
  age: {
    fontSize: 25,
    lineHeight: 50,
  },
});

export default AgeInfo;
