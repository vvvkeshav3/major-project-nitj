import React, { useState } from 'react';
import { View, Text,StyleSheet,Pressable } from 'react-native';

import PickImage from './PickImage';
import { wp,hp } from '../Viewport';

const TrackCal = () => {
    const [isVisible,setIsVisible] = useState(false);

  return (
    <View>
      <Text>Track Calories</Text>
      {/* <Pressable onPress={()=>setIsVisible(true)} style={styles.btn}>
        <Text style={styles.btnText}>Pick Image</Text>
      </Pressable> */}
      <PickImage />
    </View>
  );
};
const styles = StyleSheet.create({
  btn: {
    borderWidth: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
    padding: 10,
    width: wp(80),
    margin: 'auto',
  },
  btnText: {
    fontSize: 20,
  },
});

export default TrackCal;
