import React, { useState } from 'react';
import { Text, ScrollView, TextInput, View, Pressable } from 'react-native';
import { StyleSheet, Dimensions } from 'react-native';
import { Footer } from './Footer';
import { wp, hp } from '../Viewport';
import NumberPlease from 'react-native-number-please';

const WeightInfo = (props) => {
  const [isKg, setIsKg] = useState(true);

  const [valid, setValid] = useState(true);
  const initialKgValues = [
    { id: 'full', value: 80 },
    { id: 'decimal', value: 0 },
  ];
  const initialLbValues = [{ id: 'lb', value: 160 }];
  const [kg, setKg] = useState(initialKgValues);
  const [lb, setLb] = useState(initialLbValues);
  const kgNumbers = [
    { id: 'full', label: '.', min: 30, max: 300 },
    { id: 'decimal', label: '', min: 0, max: 9 },
  ];
  const lbNumbers = [{ id: 'lb', label: '', min: 66, max: 660 }];

  const onNext = (page) => {
    const value = isKg ? kg : lb;
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
        <Text style={{ fontSize: 25, marginBottom: 10 }}>
          What's your current weight?
        </Text>
        <Text style={{ textAlign: 'center' }}>
          This will help us determine your goal, and monitor your progress over
          time.
        </Text>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            paddingVertical: 100,
          }}
        >
          {isKg ? (
            <NumberPlease
              digits={kgNumbers}
              values={kg}
              onChange={(values) => setKg(values)}
              pickerStyle={styles.pickerStyle}
              itemStyle={styles.itemStyle}
            />
          ) : (
            <NumberPlease
              digits={lbNumbers}
              values={lb}
              onChange={(values) => setLb(values)}
              pickerStyle={styles.pickerStyle}
              itemStyle={styles.itemStyle}
            />
          )}
        </View>
        <View>
          <Pressable
            style={styles.btnLayout}
            onPress={() => {
              setIsKg((current) => !current);
            }}
          >
            <Text style={[styles.toggleOption, isKg ? styles.selectedBtn : '']}>
              Kg
            </Text>
            <Text
              style={[styles.toggleOption, !isKg ? styles.selectedBtn : '']}
            >
              Lb
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
    borderRadius: 4,
    overflow: 'hidden',
  },
  pickerStyle: {
    width: 100,
  },
  itemStyle: {},
});

export default WeightInfo;
