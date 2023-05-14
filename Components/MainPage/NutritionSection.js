import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import CircularProgress from '../UI/CircularProgress';
import Icon from 'react-native-vector-icons/AntDesign';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import AddFoodItem from './AddFoodItem';
import { breakfast, lunch, dinnner } from '../../mealSplit.json';

const NutritionSection = (props) => {
  // const [foodItemModal, setFoodItemModal] = useState(false);
  const [currentFoodIntake, setCurrentFoodIntake] = useState(
    props.route.params.currentFoodIntake
  );
  const { totalFoodIntake, onCancel, onAdd } =
    props.route.params;
  const [currentIntake, setCurrentIntake] = useState(currentFoodIntake);
  useEffect(() => {
    console.log('Changed');
    setCurrentFoodIntake(props.route.params.currentFoodIntake);
  }, [props.route.params?.currentFoodIntake]);
  const caloriePercentage =
    (currentFoodIntake.calories / totalFoodIntake.calories) * 100;

  let breakfastSection =
    currentFoodIntake.breakfast.items.length > 0 ? (
      currentFoodIntake.breakfast.items.map((value, key) => {
        return (
          <View key={key}>
            <View>
              <Text>{value.name}</Text>
              <Text>{value.serving_size_g} g</Text>
            </View>
            <Text>{value.calories} Cal</Text>
            <Pressable
              style={styles.cancelBtn}
              onPress={() => onCancel('breakfast', key)}
            >
              <EntypoIcon
                name="squared-cross"
                size={20}
                color="red"
                style={styles.genderIcon}
              />
            </Pressable>
          </View>
        );
      })
    ) : (
      <Text style={{ fontSize: 18 }}>Add your Breakfast Here</Text>
    );

  let lunchSection =
    currentFoodIntake.lunch.items.length > 0 ? (
      currentFoodIntake.lunch.items.map((value, key) => {
        return (
          <View key={key}>
            <View>
              <Text>{value.name}</Text>
              <Text>{value.serving_size_g} g</Text>
            </View>
            <Text>{value.calories} Cal</Text>
            <Pressable
              style={styles.cancelBtn}
              onPress={() => onCancel('lunch', key)}
            >
              <EntypoIcon
                name="squared-cross"
                size={20}
                color="red"
                style={styles.genderIcon}
              />
            </Pressable>
          </View>
        );
      })
    ) : (
      <Text style={{ fontSize: 18 }}>Add your Lunch Here</Text>
    );
  let dinnerSection =
    currentFoodIntake.dinner.items.length > 0 ? (
      currentFoodIntake.dinner.items.map((value, key) => {
        return (
          <View key={key}>
            <View>
              <Text>{value.name}</Text>
              <Text>{value.serving_size_g} g</Text>
            </View>
            <Text>{value.calories} Cal</Text>
            <Pressable
              style={styles.cancelBtn}
              onPress={() => onCancel('dinner', key)}
            >
              <EntypoIcon
                name="squared-cross"
                size={20}
                color="red"
                style={styles.genderIcon}
              />
            </Pressable>
          </View>
        );
      })
    ) : (
      <Text style={{ fontSize: 18 }}>Add your Dinner Here</Text>
    );

  // const onChange = route.params.onChangeFoodIntake;
  return (
    <View style={styles.container}>
      <View style={styles.cardDesign}>
        <CircularProgress percent={caloriePercentage} />
        <View style={styles.display}>
          <Text style={{ fontSize: 18 }}>
            {currentFoodIntake.calories} of {totalFoodIntake.calories}
          </Text>
          <Text style={{ fontSize: 10 }}>Cal Eaten</Text>
        </View>
        {/* <Pressable>
        <Icon name="squared-plus" size={30} style={styles.icon} />
      </Pressable> */}
      </View>
      <View>
        <View style={styles.innerContainer}>
          <View style={styles.innerContainerTitle}>
            <Text style={styles.title}>Breakfast</Text>
            <View style={styles.mealSection}>
              <Text style={styles.mealUptoNow}>
                {currentFoodIntake.breakfast.calories} of{' '}
                {totalFoodIntake.breakfast} Cal
              </Text>
              <Pressable
                onPress={() =>
                  props.navigation.navigate('AddFoodItem', {
                    dish: 'breakfast',
                    onAdd: onAdd,
                  })
                }
              >
                <Icon name="pluscircle" size={25} style={styles.icon} />
              </Pressable>
            </View>
          </View>

          <View style={styles.cardDesign}>{breakfastSection}</View>
        </View>

        <View style={styles.innerContainer}>
          <View style={styles.innerContainerTitle}>
            <Text style={styles.title}>Lunch</Text>
            <View style={styles.mealSection}>
              <Text style={styles.mealUptoNow}>
                {currentFoodIntake.lunch.calories} of {totalFoodIntake.lunch}{' '}
                Cal
              </Text>
              <Pressable
                onPress={() =>
                  props.navigation.navigate('AddFoodItem', {
                    dish: 'lunch',
                    onAdd: onAdd,
                  })
                }
              >
                <Icon name="pluscircle" size={25} style={styles.icon} />
              </Pressable>
            </View>
          </View>

          <View style={styles.cardDesign}>{lunchSection}</View>
        </View>

        <View style={styles.innerContainer}>
          <View style={styles.innerContainerTitle}>
            <Text style={styles.title}>Dinner</Text>
            <View style={styles.mealSection}>
              <Text style={styles.mealUptoNow}>
                {currentFoodIntake.dinner.calories} of {totalFoodIntake.dinner}{' '}
                Cal
              </Text>
              <Pressable
                onPress={() =>
                  props.navigation.navigate('AddFoodItem', {
                    dish: 'dinner',
                    onAdd: onAdd,
                  })
                }
              >
                <Icon name="pluscircle" size={25} style={styles.icon} />
              </Pressable>
            </View>
          </View>

          <View style={styles.cardDesign}>{dinnerSection}</View>
        </View>
        {/* {foodItemModal && (
          <AddFoodItem onCancel={() => setFoodItemModal(false)} />
        )} */}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
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
  mealSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
  innerContainerTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 15,
    alignSelf: 'center',
  },
  mealUptoNow: {
    alignSelf: 'center',
    fontSize: 15,
    marginRight: 10,
  },
  cancelBtn: {
    padding: 10,
  },
});
export default NutritionSection;
