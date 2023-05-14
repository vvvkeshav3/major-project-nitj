import React, { useState, useEffect } from 'react';

import { View, Text, StyleSheet, Pressable } from 'react-native';
import { MainFooter } from './MainFooter';
import { wp, hp } from '../Viewport';
import { ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import NutritionCard from './NutritionCard';
import GenderInfo from '../CollectInfo/GenderInfo';
import TrackCal from './TrackCal';
import ShowNutrition from './ShowNutrition';
import NutritionSection from './NutritionSection';
// const Stack = createNativeStackNavigator();
const MainPage = (props) => {
  const { data } = props.route.params;
  console.log(props.route.params.data);
  // const navigation = useNavigation();
  // navigation.reset({
  //   index: 0,
  //   routes: [{ name: 'MainPage' }],
  // });
  const [selectedOption, setSelectedOption] = useState(0);
  // const navigation = useNavigation();
  // const { data } = props.route.params;
  // console.log(props.route.params);
  const [currentFoodIntake, setCurrentFoodIntake] = useState({
    breakfast: { calories: 0, items: [] },
    calories: 0,
    carbs: 0,
    dinner: { calories: 0, items: [] },
    fats: 0,
    fiber: 0,
    lunch: { calories: 0, items: [] },
    proteins: 0,
  });
  const [totalFoodIntake, setTotalFoodIntake] = useState({
    breakfast: 718,
    calories: 2051,
    carbs: 205,
    dinner: 51,
    fats: 68,
    fiber: 28,
    lunch: 820,
    proteins: 154,
  });
  const onAddFoodItem = (dish,itemDetails) =>{
    console.log('hello');
    const value = {...currentFoodIntake};
    const cal = itemDetails.calories;
    console.log(value);

    value[dish].items.push(itemDetails);
    value[dish].calories += cal;
    value.calories += cal;
    value.carbs += itemDetails.nutritionInfo.carbohydrates_total_g * itemDetails.qty;
    value.fats += itemDetails.nutritionInfo.fat_total_g * itemDetails.qty;
    value.fiber += itemDetails.nutritionInfo.fiber_g * itemDetails.qty;
    value.proteins += itemDetails.nutritionInfo.proteins_g * itemDetails.qty;
    setCurrentFoodIntake(value);
  }
  const onCancelFoodItem = (dish,item)=>{
    let value = {...currentFoodIntake};
    let cal = value[dish].items[item].calories;
    let itemDetails = value[dish].items[item];
    value[dish].items.splice(idx,1);
    value[dish].calories -= cal;
    value.calories -=cal;
    value.carbs -= itemDetails.nutritionInfo.carbohydrates_total_g * itemDetails.qty;
    value.fats -= itemDetails.nutritionInfo.fat_total_g * itemDetails.qty;
    value.fiber -= itemDetails.nutritionInfo.fiber_g * itemDetails.qty;
    value.proteins -= itemDetails.nutritionInfo.proteins_g * itemDetails.qty;
    setCurrentFoodIntake(value);
  
  }
  // const [currentFoodIntake,setCurrentFoodIntake] = useState(null);
  // const [totalFoodIntake,setTotalFoodIntake] = useState(null);
  useEffect(() => {
    const requirements = getRequirements(data);
    setTotalFoodIntake(requirements);
    setCurrentFoodIntake({
      calories: 0,
      proteins: 0,
      carbs: 0,
      fats: 0,
      fiber: 0,
      breakfast: {
        calories: 0,
        items: [],
      },
      lunch: {
        calories: 0,
        items: [],
      },
      dinner: {
        calories: 0,
        items: [],
      },
    });
  }, [data]);

  return (
    <>
      <View
        style={{
          height: hp(100),
          marginTop: 60,
        }}
      >
        <View style={styles.header}>
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <Text style={{ fontSize: 16 }}>Today</Text>
            <Icon name="caret-down" size={20} style={styles.icon} />
          </View>
        </View>
        <ScrollView
          // alwaysBounceVertical={false}
          contentContainerStyle={{
            flexDirection: 'column',
            //   alignItems: 'center',
            //   flex: 1,
            padding: 20,
            //   paddingTop: 40,
          }}
        >
          {/* Calorie Card  */}
          <View style={styles.cardContainer}>
            <Text style={styles.cardHeading}>Calorie Tracker</Text>
            <Pressable onPress={() => props.navigation.navigate('TrackCal')}>
              <View style={styles.cardDesign}>
                <Icon name="caret-down" size={20} style={styles.icon} />
                <Text>Eat upto 2200 Cal</Text>
                <Icon name="caret-down" size={20} style={styles.icon} />
              </View>
            </Pressable>
          </View>
          {/* Nutrition card */}
          <NutritionCard
            currentFoodIntake={currentFoodIntake}
            totalFoodIntake={totalFoodIntake}
            onCancel = {onCancelFoodItem}
            onAdd = {onAddFoodItem}
          />

          {/* Weight */}
          <View style={styles.cardContainer}>
            <Text style={styles.cardHeading}>Weight</Text>
            <Pressable>
              <View style={styles.cardDesign}>
                <Icon name="caret-down" size={20} style={styles.icon} />
                <Text>Eat upto 2200 Cal</Text>
                <Icon name="caret-down" size={20} style={styles.icon} />
              </View>
            </Pressable>
          </View>
          {/*  */}
          <View style={styles.cardContainer}>
            <Text style={styles.cardHeading}>Some Other Trackers</Text>
            <Pressable>
              <View style={styles.cardDesign}>
                <Icon name="caret-down" size={20} style={styles.icon} />
                <Text>Eat upto 2200 Cal</Text>
                <Icon name="caret-down" size={20} style={styles.icon} />
              </View>
            </Pressable>
            <Pressable>
              <View style={styles.cardDesign}>
                <Icon name="caret-down" size={20} style={styles.icon} />
                <Text>Eat upto 2200 Cal</Text>
                <Icon name="caret-down" size={20} style={styles.icon} />
              </View>
            </Pressable>
            <Pressable>
              <View style={styles.cardDesign}>
                <Icon name="caret-down" size={20} style={styles.icon} />
                <Text>Eat upto 2200 Cal</Text>
                <Icon name="caret-down" size={20} style={styles.icon} />
              </View>
            </Pressable>
            <Pressable>
              <View style={styles.cardDesign}>
                <Icon name="caret-down" size={20} style={styles.icon} />
                <Text>Eat upto 2200 Cal</Text>
                <Icon name="caret-down" size={20} style={styles.icon} />
              </View>
            </Pressable>
          </View>
        </ScrollView>

        <MainFooter
          selectedOption={selectedOption}
          onClick={(option) => setSelectedOption(option)}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    borderBottomWidth: 1,
    borderColor: 'gray',
    paddingVertical: 5,
  },
  icon: {
    marginLeft: 5,
  },
  cardDesign: {
    borderWidth: 2,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    marginVertical: 10,
  },
  cardContainer: {
    marginBottom: 30,
  },
  cardHeading: {
    fontWeight: 'bold',
    fontSize: 15,
  },
});

export default MainPage;
