import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { StepCounter } from '@ovalmoney/react-native-fitness';
import ProgressCircle from 'react-native-progress-circle';
import { wp, hp } from '../Viewport';
import Icon from 'react-native-vector-icons/FontAwesome';
import { BarChart } from 'react-native-chart-kit';


const StepsTracker = () => {
  const [stepCount, setStepCount] = useState(0);
  const percentage = stepCount / 1000 * 100;
  useEffect(() => {
    const fetchStepCount = async () => {
      try {
        const result = await StepCounter.getStepCount(new Date().toISOString().slice(0, 10));
        setStepCount(result.steps);
      } catch (error) {
        console.log('Error fetching step count:', error);
      }
    };

    fetchStepCount();
  }, []);

  const [buttonValue, setbuttonValue] = useState('CONNECT');
  const buttonClick = () => {
    setbuttonValue('CONNECTED'),
      setStepCount(250)
  };
  
    const data = {
      labels: ['09/5', '11/5', '12/5', '13/5', '14/5', '15/5'],
      datasets: [
        {
          data: [60, 45, 80, 30,75, 50],
        },
      ],
    };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Today's Steps Count: {stepCount}</Text>
      <ProgressCircle
        percent={percentage}
        radius={50}
        borderWidth={8}
        color="#424874"
        shadowColor="#999"
        bgColor="#DCD6F7"
      >
        <Text style={{ fontSize: 18 }}>{`${percentage.toFixed(1)}%`}</Text>
      </ProgressCircle>
      <View style={styles.cardDesign}>
        <Text style={styles.heading}>
          Connect to Application
        </Text>
        <View style={{ flexDirection: 'row', padding: 10 }}>
          <Icon name="medkit" size={20} style={styles.icon} />
          <Text style={styles.smallText}> Health App </Text>
          <Pressable onPress={buttonClick}>
            <View>
              <Text style={styles.button}> {buttonValue} </Text>
            </View>
          </Pressable>
        </View>
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
    margin: 25,
    borderBottomWidth: 1,
    borderColor: '#424874',
    paddingVertical: 5,
    color: '#424874',
  },
  container: {
    height: hp(100),
    flexDirection: 'column',
    backgroundColor: '#F4EEFF',
    alignItems: 'center',
  },
  heading: {
    color: '#424874',
    fontWeight: 'bold',
    fontSize: 17,
    padding: 10,
    borderBottomWidth: 2,
    borderColor: '#424874',
  },
  cardDesign: {
    borderWidth: 2,
    paddingHorizontal: wp(25),
    backgroundColor: '#DCD6F7',
    borderRadius: 20,
    marginVertical: 20,
    alignItems: 'flex-start',
  },
  button: {
    fontWeight: 'bold',
    color: '#8B0000'
  },
  smallText: {
    fontWeight: '500',
    color: '#424874',
    // paddingLeft: 5,
  }
});

export default StepsTracker;