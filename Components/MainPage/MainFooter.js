import React from 'react';
import { StyleSheet } from 'react-native';
import { wp, hp } from '../Viewport';
import { View, Pressable, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { RNSVGSymbol } from 'react-native-svg';
export const MainFooter = (props) => {
  let { selectedOption } = props;
  return (
    <View style={styles.footer}>
      <Pressable style={styles.footerBtn} onPress={() => props.onClick(0)}>
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <Icon
            name="home"
            size={20}
            style={[
              styles.icon,
              selectedOption == 0 ? styles.selected : styles.notSelected,
            ]}
          />
        </View>
        <Text style={styles.footerBtnText}>Home</Text>
      </Pressable>
      <Pressable style={styles.footerBtn} onPress={() => props.onClick(1)}>
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <Icon
            name="fire"
            size={20}
            style={[
              styles.icon,
              selectedOption == 1 ? styles.selected : styles.notSelected,
            ]}
          />
        </View>
        <Text style={styles.footerBtnText}>Find Calories </Text>
      </Pressable>
      <Pressable style={styles.footerBtn} onPress={() => props.onClick(2)}>
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <Icon
            name="ellipsis-h"
            size={20}
            style={[
              styles.icon,
              selectedOption == 2 ? styles.selected : styles.notSelected,
            ]}
          />
        </View>
        <Text style={styles.footerBtnText}>More</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  footerBtn: {
    paddingHorizontal: 15,
    paddingVertical: 0,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  footer: {
    height: 80,
    marginBottom: hp(3),
    borderTopWidth: 1,
    backgroundColor: '#A6B1E1',
    borderColor: '#424874',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  footerBtnText: {
    fontSize: 15,
    paddingTop: 5,
    textAlign: 'center',
    color: '#424874',
  },
  icon: {
    // marginRight: 10,
    backgroundColor: '#424874',
    padding: 10,
    width: 40,
    height: 40,
    textAlign: 'center',
    margin: 'auto',
    borderRadius: 20,
    overflow: 'hidden',
  },
  selected: {
    backgroundColor: '#424874',
    color: '#F4EEFF',
  },
  notSelected: {
    backgroundColor: '#F4EEFF',
    color: '#424874',
  },
});
