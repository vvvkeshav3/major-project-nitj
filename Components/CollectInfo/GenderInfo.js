import React, { useState } from 'react';
import { Text, ScrollView, TextInput, View, Pressable } from 'react-native';
import { StyleSheet, Dimensions } from 'react-native';
// import { mars } from '@fortawesome/free-solid-svg-icons/mars';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Footer } from './Footer';
import { wp, hp } from '../Viewport';
const GenderInfo = (props) => {
  const [value, setValue] = useState();
  const [valid, setValid] = useState(false);
  const onClick = (value) => {
    setValue(value);
    setValid(true);
  };

  const onNext = (page) => {
    props.onSave(value);
    props.onChangePage(page);
  };
  const onBack = (page) => {
    props.onChangePage(page);
  };
  const myIcon1 = <Icon name="comments" size={30} color="#900" />;
  return (
    <View
      style={{
        height: hp(100),
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: "#F4EEFF",
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
        <Text style={styles.header}>
          What's your biological sex?
        </Text>
        <Text style={styles.smallText}>
          We support all forms of gender expression. However, we need this to
          calculate your body metrics.
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginTop: 50,
            width: wp(100),
          }}
        >
          <Pressable
            style={[styles.genderBtn, value === 0 ? styles.selected : '']}
            onPress={() => {
              onClick(0);
            }}
          >
            <Icon
              name="mars"
              size={40}
              color="#111"
              style={styles.genderIcon}
            />
            <Text style={styles.btnText}>Male</Text>
          </Pressable>

          <Pressable
            style={[styles.genderBtn, value === 1 ? styles.selected : '']}
            onPress={() => {
              onClick(1);
            }}
          >
            <Icon
              name="venus"
              size={40}
              color="#111"
              style={styles.genderIcon}
            />
            <Text style={styles.btnText}>Female</Text>
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
  input: {
    marginTop: 40,
    borderColor: '#424874',
    width: '80%',
    borderRadius: 10,
    textAlign: 'center',
    borderWidth: 1,
    padding: 'auto',
    fontSize: 15,
    height: 50,
  },
  genderIcon: {
    margin: 10,
    backgroundColor: '#F4EEFF',
    padding: 10,
    width: 60,
    height: 60,
    textAlign: 'center',
    margin: 'auto',
    borderRadius: 30,
    overflow: 'hidden',
  },
  genderBtn: {
    paddingHorizontal: 50,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: '#A6B1E1',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.18,
    shadowRadius: 4.59,
    elevation: 5,
  },
  btnText: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
    color: '#424874',
  },
  selected: {
    borderWidth: 2,
    borderColor: '#424874',
  },
  smallText:{
    fontSize: 16,
    fontWeight: '500',
    color: '#424874',
    paddingHorizontal: 10,
    textAlign: 'center',
  },
  header: {
    fontSize: 25, 
    margin: 10,
    borderBottomWidth: 1,
    borderColor: '#424874',
    paddingVertical: 5,
    color: '#424874',
  },
});

export default GenderInfo;
