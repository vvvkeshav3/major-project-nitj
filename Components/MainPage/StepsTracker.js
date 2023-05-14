import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StepCounter } from '@ovalmoney/react-native-fitness';

const StepsTracker = () => {
    const [stepCount, setStepCount] = useState(0);
  
    // useEffect(() => {
    //   const fetchStepCount = async () => {
    //     try {
    //       const result = await StepCounter.getStepCount(new Date().toISOString().slice(0, 10));
    //       setStepCount(result.steps);
    //     } catch (error) {
    //       console.log('Error fetching step count:', error);
    //     }
    //   };
  
    //   fetchStepCount();
    // }, []);
  
    return (
      <View>
        <Text style={styles.smallText}>Today's Steps: {stepCount}</Text>
      </View>
    );
  };

  const styles = StyleSheet.create({
    smallText:{
      fontWeight: '500',
      color: '#424874',
      paddingLeft: 5,
    }
  });
  
export default StepsTracker;