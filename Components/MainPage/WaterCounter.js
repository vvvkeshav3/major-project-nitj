import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const WaterCounter = () => {
  const [waterValue, setWaterValue] = useState(0);

  const incrementWater = () => {
    setWaterValue(waterValue + 1);
  };

  const decrementWater = () => {
    if (waterValue > 0) {
      setWaterValue(waterValue - 1);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={decrementWater} style={styles.button}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
      <Text style={styles.waterValue}>{waterValue} Glass</Text>
      <TouchableOpacity onPress={incrementWater} style={styles.button}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: '#F4EEFF',
    borderRadius: 4,
    marginHorizontal: 8,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '500',
    color: '#424874',
  },
  waterValue: {
    fontSize: 16,
    fontWeight: '500',
    color: '#424874',
    // paddingLeft: 5,
  },
});

export default WaterCounter;
