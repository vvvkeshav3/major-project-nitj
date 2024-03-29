import React, { useEffect, useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import CircularProgress from '../UI/CircularProgress';
import Icon from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';
import NutritionSection from './NutritionSection';

const NutritionCard = (props) => {
    const { totalFoodIntake,onCancel,onAdd } = props;
    const [currentFoodIntake,setCurrentFoodIntake] = useState(props.currentFoodIntake)
    console.log(currentFoodIntake);
    console.log(totalFoodIntake);
  const [showMacro, setShowMacro] = useState(false);
  useEffect(()=>{
    console.log('changed 1');
    setCurrentFoodIntake(props.currentFoodIntake);
  },[props.currentFoodIntake])
    useEffect(()=>{
      if(currentFoodIntake.calories!=0){
          setShowMacro(true);
      }
      else setShowMacro(false);
    },[currentFoodIntake])

    const navigation = useNavigation();
  let text = '';
  if (currentFoodIntake.calories == 0) {
    // setShowMacro(false);
    text = (
      <Text style={styles.smallText}>
        Eat upto {totalFoodIntake.calories} calories
      </Text>
    );
  } else {
    text = (
      <View style={styles.display}>
        <Text style={styles.smallText}>
          {currentFoodIntake.calories} of {totalFoodIntake.calories}
        </Text>
        <Text style={styles.smallText}>Cal Eaten</Text>
      </View>
    );
  }

  const caloriePercentage =
    (currentFoodIntake.calories / totalFoodIntake.calories) * 100;
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.cardHeading}>Nutrition</Text>
      <Pressable
        onPress={() =>
          navigation.navigate('NutritionSection', {
            currentFoodIntake: currentFoodIntake,
            totalFoodIntake: totalFoodIntake,
            onCancel : onCancel,
            onAdd : onAdd
            // onChange : onChangeFoodIntake,
          })
        }
      >
        <View style={styles.cardDesign}>
        <Icon name="squared-plus" size={30} style={styles.icon} />
          {text}
          <CircularProgress percent={caloriePercentage} />
        </View>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    borderBottomWidth: 1,
    borderColor: '#424874',
    // paddingVertical: 5,
  },
  icon: {
    color: '#424874',
    marginLeft: 5,
  },
  cardDesign:{
    borderWidth:2,
    padding : 15,
    backgroundColor:'#A6B1E1',
    borderRadius: 20,
    marginVertical: 10,
    flexDirection: 'row', 
    alignItems: 'center',  
  },
  cardContainer:{
    marginBottom : 30,
  },
  cardHeading:{
    color: '#424874',
    fontWeight:'bold',
    fontSize:17,
  },
  smallText:{
    fontWeight: '500',
    color: '#424874',
    paddingLeft: 5,
  },
});
export default NutritionCard;
