import React from 'react';
import { StyleSheet } from 'react-native';
import { wp, hp } from '../Viewport';
import { View, Pressable, Text } from 'react-native';
export const Footer = (props) => {
  return (
    <View style={styles.footer}>
      <Pressable
        style={[{ opacity: props.pageNo ? 1 : 0 }, styles.footerbtn]}
        disabled={!props.pageNo}
        onPress={() => props.onBack(props.pageNo - 1)}
      >
        <Text style={styles.navBtn}> &lt; Back</Text>
      </Pressable>

      <Pressable
        style={[{ opacity: !props.valid ? 0.3 : 1 }, styles.footerbtn]}
        onPress={() => props.onNext(props.pageNo + 1)}
        disabled={!props.valid}
      >
        <Text
          style={[styles.navBtn, { color: !props.valid ? '#DCD6F7' : '#424874' }]}
        >
          Next &gt;{' '}
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  footerbtn:{
    padding : 15,
    paddingTop: 20
  },
  footer: {
    height: 100,
    marginBottom: hp(6),
    borderTopWidth: 2,
    borderColor: '#424874',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  navBtn: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});
