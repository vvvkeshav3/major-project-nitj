import React, { useState } from 'react';
import { Text, ScrollView, TextInput, View, Pressable } from 'react-native';
import { StyleSheet, Dimensions } from 'react-native';
import { Footer } from './Footer';
import { wp, hp } from '../Viewport';
import NumberPlease from 'react-native-number-please';

const HeightInfo = (props) => {
  const [isCentimeter, setIsCentimeter] = useState(false);

  const [valid, setValid] = useState(true);
  const initialFeetInValues = [
    { id: 'feet', value: 5 },
    { id: 'inch', value: 5 },
  ];
  const initialCmValues = [{ id: 'cm', value: 160 }];
  const [feetIn, setFeetIn] = useState(initialFeetInValues);
  const [cm, setCm] = useState(initialCmValues);
  const feetInNumbers = [
    { id: 'feet', label: "'", min: 1, max: 9 },
    { id: 'inch', label: '"', min: 0, max: 11 },
  ];
  const cmNumbers = [{ id: 'cm', label: '', min: 0, max: 300 }];

  const onNext = (page) => {
    const value = isCentimeter?cm:feetIn;
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
          How tall are you?
        </Text>
        <Text style={{ textAlign: 'center' }}>
          Your height will help us calculate important body stats to help you
          reach your goals faster.
        </Text>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            paddingVertical: 100,
          }}
        >
          {!isCentimeter ? (
            <NumberPlease
              digits={feetInNumbers}
              values={feetIn}
              onChange={(values) => setFeetIn(values)}
              pickerStyle={styles.pickerStyle}
            />
          ) : (
            <NumberPlease
              digits={cmNumbers}
              values={cm}
              onChange={(values) => setCm(values)}
              pickerStyle={styles.pickerStyle}
            />
          )}
        </View>
        <View>
          <Pressable
            style={styles.btnLayout}
            onPress={() => {
              setIsCentimeter((current) => !current);
            }}
          >
            <Text
              style={[
                styles.toggleOption,
                !isCentimeter ? styles.selectedBtn : '',
              ]}
            >
              ft/in
            </Text>
            <Text
              style={[
                styles.toggleOption,
                isCentimeter ? styles.selectedBtn : '',
              ]}
            >
              cm
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
    width: 120,
  },
});

export default HeightInfo;
