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
      <Text style={styles.text}>
        Eat upto {totalFoodIntake.calories} calories
      </Text>
    );
  } else {
    text = (
      <View style={styles.display}>
        <Text style={{ fontSize: 18 }}>
          {currentFoodIntake.calories} of {totalFoodIntake.calories}
        </Text>
        <Text style={{ fontSize: 10 }}>Cal Eaten</Text>
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
          <CircularProgress percent={caloriePercentage} />
          {text}
          {/* <Pressable> */}
          <Icon name="squared-plus" size={30} style={styles.icon} />
          {/* </Pressable> */}
        </View>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    borderBottomWidth: 1,
    borderColor: 'gray',
    paddingVertical: 5,
  },
  icon: {
    marginHorizontal: 5,
    color: '#222831',
  },
  cardDesign: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    marginVertical: 10,
    paddingVertical: 20,
  },
  cardContainer: {
    marginBottom: 30,
  },
  cardHeading: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  text: {
    marginLeft: 10,
    fontSize: 18,
    // alignSelf:'center',
    flex: 1,
  },
  display: {
    marginLeft: 10,
    flex: 0.95,
  },
});
export default NutritionCard;
