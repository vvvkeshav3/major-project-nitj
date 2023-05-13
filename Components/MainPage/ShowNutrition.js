import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { wp, hp } from '../Viewport';

const ShowNutrition = ({ route }) => {
  console.log(route.params);
  let nutritionData = route.params.nutritionData;
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {nutritionData ? (
        <View>
          <Text style={styles.title}>{nutritionData.name}</Text>
          <View style = {styles.macroNutrients}>
            <View style={styles.calorieInfo}>
              <View>
                <Text style={styles.caloriesTitle}>Calories</Text>
                <Text style={styles.calories}>{nutritionData.calories}</Text>
              </View>
              <Text>Serving Size: {nutritionData.serving_size_g} g</Text>
            </View>
            <View style={styles.breakdownDetail}>
              <Text>Proteins</Text>
              <Text>{nutritionData.protein_g} g</Text>
            </View>
            <View style={styles.breakdownDetail}>
              <Text>Total Fats</Text>
              <Text>{nutritionData.fat_total_g} g</Text>
            </View>
            <View style={styles.breakdownDetail}>
              <Text>Saturated Fats</Text>
              <Text>{nutritionData.fat_saturated_g} g</Text>
            </View>
            <View style={styles.breakdownDetail}>
              <Text>Carbs</Text>
              <Text>{nutritionData.carbohydrated_total_g} g</Text>
            </View>
            <View style={styles.breakdownDetail}>
              <Text>Sugar</Text>
              <Text>{nutritionData.sugar_g} g</Text>
            </View>
            <View style={styles.breakdownDetail}>
              <Text>Fiber</Text>
              <Text>{nutritionData.fiber_g} g</Text>
            </View>
            <View style={styles.breakdownDetail}>
              <Text>Sodium</Text>
              <Text>{nutritionData.sodium_mg} mg</Text>
            </View>
            <View style={styles.breakdownDetail}>
              <Text>Potassium</Text>
              <Text>{nutritionData.potassium_mg} mg</Text>
            </View>
            <View style={styles.breakdownDetail}>
              <Text>Cholesterol</Text>
              <Text>{nutritionData.cholesterol_mg} mg</Text>
            </View>
          </View>
        </View>
      ) : (
        <Text style={styles.notAvailable}>Nutrition Data Not Available</Text>
      )}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // width : wp(100),
    margin : 20,
    marginTop: 30,
  },
  notAvailable: {
    fontSize: 25,
  },
  title: {
    textTransform: 'uppercase',
    fontSize: 40,
    textAlign : 'center',
    fontWeight: 'bold',
  },
  macroNutrients: {
    borderWidth: 2,
    width : wp(80),
    marginTop : 30,
    padding : 20,   
  },
});

export default ShowNutrition;
