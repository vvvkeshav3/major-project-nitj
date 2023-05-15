import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { wp, hp } from '../Viewport';
import { BarChart } from 'react-native-chart-kit';

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

  const data = {
    labels: ['09/5', '11/5', '12/5', '13/5', '14/5', '15/5'],
    datasets: [
      {
        data: [6, 4, 8, 9,7, 2],
      },
    ],
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>    Number of Glasses of water</Text>
      <View style={styles.btncontainer}>
      <TouchableOpacity onPress={decrementWater} style={styles.button}>
        <Text style={styles.heading}>-</Text>
      </TouchableOpacity>
      <Text style={styles.heading}>{waterValue} Glass</Text>
      <TouchableOpacity onPress={incrementWater} style={styles.button}>
        <Text style={styles.heading}>+</Text>
      </TouchableOpacity>
      </View>
      <View style={{ alignItems: 'center',}}>
      <BarChart
        data={data}
        width={350}
        height={350}
        yAxisLabel=""
        chartConfig={{
          backgroundGradientFrom: '#F4EEFF',
          backgroundGradientTo: '#DCD6F7',
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(66, 72, 116, ${opacity})`,
        }}
        style={{
          borderRadius: 12,
          color: '#424874',
          paddingLeft: 25,
          paddingRight: 25,
        }}
        barRadius={8}
        showValuesOnTopOfBars
        fromZero
        showBarTops
        withVerticalLabels
        verticalLabelRotation={30}
      />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 25,
    marginHorizontal: 20,
    marginVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#424874',
    paddingVertical: 5,
    color: '#424874',
  },
  container: {
    flexDirection: 'column',
    // alignItems: 'center',
    // justifyContent: 'center',
    height: hp(100),
    backgroundColor: '#F4EEFF',
    
  },
  btncontainer: {
    flexDirection: 'row',
    marginHorizontal: wp(20),
    marginVertical: 25,
    borderWidth: 2,
  },
  heading: {
    color: '#424874',
    fontWeight: 'bold',
    fontSize: 17,
    padding: 10,
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
