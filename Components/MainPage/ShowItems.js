import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet, TextInput } from 'react-native';
import { wp, hp } from '../Viewport';
import Icon from 'react-native-vector-icons/Feather';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';
const ShowItems = (props) => {
  // const [loadNutrition,setLoadNutrition] = useState(false);
  const navigation = useNavigation();
  const { data } = props;
  // const onInfo = (idx)=>{
  //   const nutrition = data[idx].nutritionInfo;

  // }
  return (
    <View style={styles.container}>
      {data?.map((value, key) => (
        <View key={key} style={styles.innerContainer}>
          <Pressable
            style={styles.cancelBtn}
            onPress={() => props.onCancel(key)}
          >
            <EntypoIcon
              name="squared-cross"
              size={20}
              color="#424874"
              style={styles.genderIcon}
            />
          </Pressable>
          <Text style={styles.itemText}>{value.name}</Text>
          <View style={styles.innerFields}>
            <View style={styles.qty}>
              <Text style={styles.itemText}>Qty : </Text>
              <TextInput
                style={styles.textInput}
                keyboardType="number-pad"
                onChangeText={(newQty) => props.onChangeQty(key, newQty)}
                value={value.qty.toString()}
                maximumValue={10}
                minimumValue={0}
              />
            </View>

            <Text style={styles.calories}>
              Calories : {Math.floor(value.calories)}
            </Text>
          </View>
          <Pressable style={styles.more}>
            <Icon
              name="info"
              size={20}
              color="#613F75"
              style={styles.genderIcon}
              onPress={() => {
                navigation.navigate('NutritionInfo', {
                  nutritionData: value.nutritionInfo,
                });
              }}
            />
          </Pressable>
          {/* <Text style={styles.itemValue}>{value.calorie}</Text> */}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    flex: 0.5,
    borderColor: '#424874',
    borderRadius: 10,
    textAlign: 'center',
    borderWidth: 1,
    fontSize: 20,
    color: '#424874',
  },
  container: {
    marginVertical: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#F4EEFF',
  },
  innerContainer: {
    borderColor: '#424874',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    padding: 10,
    borderWidth: 2,
    width: wp(80),
    backgroundColor: '#A6B1E1',
  },
  cancelBtn: {
    padding: 10,
  },
  itemText: {
    alignContent: 'center',
    fontSize:18,
    fontWeight: '500',
    color: '#424874',
    paddingLeft: 5,
  },
  qty: {
    flexDirection: 'row',
    margin: 10,
    justifyContent: 'center',
  },
  calories: {
    fontSize:18,
    fontWeight: '500',
    color: '#424874',
    flex: 1,
    marginLeft: 10,
    textAlign: 'center',
  },
  more: {
    fontSize: 20,
  },
  innerFields: {
    // width : wp(20),
    flex: 1,
    color: '#424874',
  },
});

export default ShowItems;
