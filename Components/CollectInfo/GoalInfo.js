import React, { useState } from 'react';
import { Text, ScrollView, TextInput, View, Pressable } from 'react-native';
import { StyleSheet, Dimensions } from 'react-native';
import { Footer } from './Footer';
import { wp, hp } from '../Viewport';
import NumberPlease from 'react-native-number-please';
import { Slider, Icon } from '@rneui/base';

const GoalInfo = (props) => {
  const [isLose, setIsLose] = useState(true);

  const [valid, setValid] = useState(true);
  const [value, setValue] = useState(0.25);

  const onNext = (page) => {
    let val = value;
    if (isLose) {
      val = -value;
    }
    props.onSave(val);
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
        justifyContent: 'center',
        alignContent:'center'
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
        <Text style={{ fontSize: 25, alignContent:'center'}}>
          How fast do you want to
        </Text>
        <Text style={{ fontSize: 25, marginBottom: 10, alignContent:'center'}}>
        reach your goal? 
        </Text>

        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'center',
            paddingVertical: 100,
          }}
        >
          <Text style={{textAlign:'center',fontSize : 50,}}>{value} kg</Text>
          <Text style={{textAlign:'center',fontSize : 30}}>per week</Text>
        </View>
        <View>
          <Slider
            // animateTransitions
            // animationType="timing"
            maximumTrackTintColor="#ccc"
            maximumValue={1}
            minimumTrackTintColor="#222831"
            minimumValue={0.25}
            onValueChange={(value) => setValue(value)}
            orientation="horizontal"
            step={0.25}
            style={{ width: wp(80) }}
            thumbStyle={{ height: 20, width: 20 }}
            thumbProps={{}}
            thumbTintColor="#111"
            thumbTouchSize={{ width: 40, height: 40 }}
            trackStyle={{ height: 6, borderRadius: 20 }}
            value={value}
          />
        </View>
        <View>
          <Pressable
            style={styles.btnLayout}
            onPress={() => {
              setIsLose((current) => !current);
            }}
          >
            <Text
              style={[styles.toggleOption, isLose ? styles.selectedBtn : '']}
            >
              Lose
            </Text>
            <Text
              style={[styles.toggleOption, !isLose ? styles.selectedBtn : '']}
            >
              Gain
            </Text>
          </Pressable>
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
  toggleOption: {
    padding: 5,
    width: 60,
    fontSize: 15,
    textAlign: 'center',
    backgroundColor: '#d5d5d5',
    color: 'black',
  },
  selectedBtn: {
    backgroundColor: '#ff4545',
    color: 'white',
  },
  btnLayout: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    height: 30,
    marginVertical : 50,
    borderRadius: 4,
    overflow: 'hidden',
  },
  pickerStyle: {
    width: 100,
  },
  itemStyle: {},
});

export default GoalInfo;
