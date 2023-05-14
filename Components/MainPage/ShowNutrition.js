import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { wp, hp } from '../Viewport';

const ShowNutrition = ({ route }) => {
  console.log(route.params);
  const nutritionData = route.params.nutritionData;

  const renderNutrient = (label, value) => {
    return (
      <View style={styles.breakdownDetail}>
        <Text style={styles.smallText}>{label}</Text>
        <Text style={styles.smallText}>{value} g</Text>
      </View>
    );
  };

  return (
    <View
      style={{
        height: hp(100),
        backgroundColor: '#F4EEFF',
      }}
    >
    <ScrollView contentContainerStyle={styles.container}>
      {nutritionData ? (
        <View>
          <Text style={styles.title}>{nutritionData.name}</Text>
          <View style={styles.macroNutrients}>
            {renderNutrient('Calories:', nutritionData.calories)}
            {renderNutrient('Serving Size:', nutritionData.serving_size_g)}
            {renderNutrient('Proteins', nutritionData.protein_g)}
            {renderNutrient('Total Fats', nutritionData.fat_total_g)}
            {renderNutrient('Saturated Fats', nutritionData.fat_saturated_g)}
            {renderNutrient('Carbs', nutritionData.carbohydrates_total_g)}
            {renderNutrient('Sugar', nutritionData.sugar_g)}
            {renderNutrient('Fiber', nutritionData.fiber_g)}
            {renderNutrient('Sodium', nutritionData.sodium_mg)}
            {renderNutrient('Potassium', nutritionData.potassium_mg)}
            {renderNutrient('Cholesterol', nutritionData.cholesterol_mg)}
          </View>
        </View>
      ) : (
        <Text style={styles.notAvailable}>Nutrition Data Not Available</Text>
      )}
    </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // width : wp(100),
    margin : 20,
    backgroundColor: '#F4EEFF',
  },
  notAvailable: {
    fontSize: 25,
  },
  title: {
    textTransform: 'uppercase',
    fontSize: 40,
    textAlign : 'center',
    fontWeight: 'bold',
    color: '#424874',
  },
  macroNutrients: {
    borderColor: '#424874',
    backgroundColor: '#A6B1E1',
    borderWidth: 2,
    width : wp(80),
    marginTop : 30,
    padding : 20,   
  },
  breakdownDetail: {
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
  },
  smallText:{
    fontSize:15,
    fontWeight: '500',
    color: '#424874',
    // paddingLeft: 5,
  },
});

export default ShowNutrition;
