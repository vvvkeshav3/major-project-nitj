import React, { useState } from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  ScrollView,
  Pressable,
} from 'react-native';
import ShowItems from './ShowItems';
import { wp } from '../Viewport';
import getNutrition from '../../getNutrition';

const AddFoodItem = ({ route }) => {
  const { dish,onAdd } = route.params;
  const [value, setValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [dataFound, setDataFound] = useState(false);
  const [data, setData] = useState([
    {
      calories: 0,
      name: '',
      nutritionInfo: null,
      qty: 0,
    },
  ]);
  const onChangeQty = (key, qty) => {
    const newData = [...data];
    newData[key].qty = qty;
    let cal = newData[key].nutritionInfo
      ? newData[key].nutritionInfo.calories
      : 0;
    newData[key].calories = cal * qty;
    setData(newData);
  };
  const onCancel = (key) => {
    setData([
      {
        calories: 0,
        name: '',
        nutritionInfo: null,
        qty: 0,
      },
    ]);
  };
  const trackItem = () => {
    console.log(dish,data[0]);
    console.log("hello123123")
    onAdd(dish,data[0]);
  };
  const submitHandler = async () => {
    setIsLoading(true);
    let nutritionInfo = await getNutrition(value);
    const data_ = [...data];
    data_[0].nutritionInfo = nutritionInfo;
    data_[0].calories = nutritionInfo ? nutritionInfo.calories : 0;
    data_[0].name = value;
    data_[0].qty = 1;
    console.log(data_);
    setData(data_);
    setIsLoading(false);
    setDataFound(true);
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Enter Food Item</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={(value) => setValue(value)}
      />
      <Pressable style={styles.btn} onPress={submitHandler}>
        <Text style={styles.btnText}>Submit</Text>
      </Pressable>
      {isLoading && <Text>Loading...</Text>}
      {dataFound &&
        !isLoading &&
        (data[0].nutritionInfo ? (
          <ShowItems
            data={data}
            onChangeQty={onChangeQty}
            onCancel={onCancel}
          />
        ) : (
          <Text style={styles.notAvailable}>
            Nutrition Info not available for this Item
          </Text>
        ))}
      {dataFound && !isLoading && data[0].nutritionInfo && (
        <Pressable onPress={trackItem} style={styles.trackBtn}>
          <Text>Track this Item</Text>
        </Pressable>
      )}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    margin: 10,
    marginTop: 40,
    flexDirection: 'column',
    alignItems: 'center',
  },
  input: {
    padding: 10,
    borderWidth: 2,
    width: wp(80),
    textAlign: 'center',
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    marginVertical: 30,
  },
  btn: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: 'blue',
  },
  btnText: {
    color: 'white',
  },
  notAvailable: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  trackBtn: {
    width : wp(100),
    padding : 10,
    backgroundColor:'red',
    borderWidth: 2,
  },
});

export default AddFoodItem;
