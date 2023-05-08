import React from 'react';
import { StyleSheet } from 'react-native';
import { wp, hp } from '../Viewport';
import { View, Pressable, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
export const MainFooter = (props) => {
  let { selectedOption } = props;
  return (
    <View style={styles.footer}>
      <Pressable style={styles.footerBtn} onPress={() => props.onClick(0)}>
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <Icon
            name="venus"
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
            name="venus"
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
            name="venus"
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
    marginBottom: hp(10),
    borderTopWidth: 1,
    borderColor: 'gray',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  footerBtnText: {
    fontSize: 15,
    paddingTop: 5,
    textAlign: 'center',
  },
  icon: {
    // marginRight: 10,
    backgroundColor: '#F7F7F7',
    padding: 10,
    width: 40,
    height: 40,
    textAlign: 'center',
    margin: 'auto',
    borderRadius: 20,
    overflow: 'hidden',
  },
  selected: {
    backgroundColor: 'black',
    color: 'white',
  },
  notSelected: {
    backgroundColor: 'white',
    color: 'black',
  },
});
