import React, { useState } from 'react';
import { Text, ScrollView, TextInput, View, Pressable } from 'react-native';
import { StyleSheet, Dimensions } from 'react-native';
import { Footer } from './Footer';
import { wp, hp } from '../Viewport';
const NameInfo = (props) => {
  const [value, setValue] = useState('');
  const [valid, setValid] = useState(false);
  const onChangeText = (text) => {
    setValue(text);
    if (text.trim() == '') {
      setValid(false);
    } else setValid(true);
  };

  const onNext = (page) => {
    props.onSave(value.trim());
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
        <Text style={{ fontSize: 25, marginBottom: 10 }}>Hey there!</Text>
        <Text style={{ textAlign: 'center' }}>
          We're happy that you've taken the first step towards a healthier you.
          We need a few details to kickstart your journey
        </Text>
        <Text style={{ marginTop: 40, fontSize: 30 }}>What is your name?</Text>
        <TextInput
          placeholder="Enter your Name"
          style={styles.input}
          onChangeText={onChangeText}
          value={value}
        />
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
  input: {
    marginTop: 40,
    borderColor: 'black',
    width: '80%',
    borderRadius: 10,
    textAlign: 'center',
    borderWidth: 1,
    padding: 10,
    fontSize: 15,
    height: 50,
  },
});

export default NameInfo;
