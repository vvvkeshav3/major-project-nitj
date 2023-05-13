import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';

import axios from 'axios';
import getNutrition from '../../getNutrition';
import PickImage from './PickImage';
import { wp, hp } from '../Viewport';
import ShowItems from './ShowItems';
const TrackCal = () => {
  // const [isVisible, setIsVisible] = useState(false);
  const [image, setImage] = useState(null);
  const [dataLoadedImage, setDataLoadedImage] = useState(null);
  // const [isVisible, setIsVisible] = useState(true);

  const [isLoading, setIsLoading] = useState(false);
  // const [data, setData] = useState(null);
  const [data, setData] = useState([
    { name: 'plainrice', nutritionInfo: null, calories: 0, qty: 1 },
    {
      calories: 143,
      name: 'chole',
      nutritionInfo: {
        calories: 143.8,
        carbohydrates_total_g: 14.5,
        cholesterol_mg: 0,
        fat_saturated_g: 1.1,
        fat_total_g: 8.4,
        fiber_g: 3.9,
        name: 'chole',
        potassium_mg: 58,
        protein_g: 3.9,
        serving_size_g: 100,
        sodium_mg: 122,
        sugar_g: 3.5,
      },
      qty: 1,
    },
    {
      calories: 102,
      name: 'dal',
      nutritionInfo: {
        calories: 102.2,
        carbohydrates_total_g: 16,
        cholesterol_mg: 0,
        fat_saturated_g: 0.3,
        fat_total_g: 1.9,
        fiber_g: 5.9,
        name: 'dal',
        potassium_mg: 133,
        protein_g: 6.6,
        serving_size_g: 100,
        sodium_mg: 200,
        sugar_g: 2.1,
      },
      qty: 1,
    },
    {
      calories: 324,
      name: 'poori',
      nutritionInfo: {
        calories: 324.1,
        carbohydrates_total_g: 28.2,
        cholesterol_mg: 0,
        fat_saturated_g: 1.8,
        fat_total_g: 22.7,
        fiber_g: 4.1,
        name: 'poori',
        potassium_mg: 142,
        protein_g: 5.2,
        serving_size_g: 100,
        sodium_mg: 190,
        sugar_g: 0.2,
      },
      qty: 1,
    },
  ]);
  const [dataLoaded, setDataLoaded] = useState(true);
  // const [dataLoaded, setDataLoaded] = useState(false);

  const uploadImageHandler = async () => {
    console.log('Sending Image to Server');
    // console.log(image);
    try {
      let data = new FormData();
      setIsLoading(true);
      data.append('file', {
        uri: image.uri,
        name: `photo.jpg`,
        type: image.type,
      });
      // data.append('Content-Type','image/jpg')
      setImage(null);

      const url = 'http://192.168.0.3:5000/segmentImage';
      let res = await axios.post(url, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      // console.log(res);
      console.log('hello');
      let result = res.data.result;
      // console.log(result);
      let newResult = [];
      // console.log(data);
      await Promise.all(result.map(async (element) => {
        let newElement = { ...element };
        // console.log(newElement);
        // console.log('element', element);
        let nutritionInfo = await getNutrition(newElement.name);
        // console.log(nutritionInfo);
        newElement.nutritionInfo = nutritionInfo;
        if (nutritionInfo)
          newElement.calories =
            parseInt(nutritionInfo.calories) * newElement.qty;
        else {
          newElement.calories = 0;
        }
        newResult.push(newElement);
      }));

      console.log('after find');
      // print(newElement);

      console.log(newResult);
      setData(newResult);

      setDataLoaded(true);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
    setIsLoading(false);
  };
  let imagePath = require('../../assets/output/photo.jpg');
  const onChange = (key, qty) => {
    const newData = [...data];
    newData[key].qty = qty;
    let cal = newData[key].nutritionInfo
      ? newData[key].nutritionInfo.calories
      : 0;
    newData[key].calories = cal * qty;
    setData(newData);
  };
  const onCancel = (key) => {
    const newData = [...data];
    newData.splice(key, 1);
    setData(newData);
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      alwaysBounceVertical={false}
    >
      {/* <Text>Track Calories</Text> */}
      {/* <Pressable onPress={()=>setIsVisible(true)} style={styles.btn}>
        <Text style={styles.btnText}>Pick Image</Text>
      </Pressable> */}
      <PickImage onChange={(image) => setImage(image)} />
      {image && (
        <Pressable onPress={uploadImageHandler} style={styles.btn}>
          <Text style={styles.btnText}>Upload Image</Text>
        </Pressable>
      )}
      {image && <Image source={{ uri: image.uri }} style={styles.imageStyle} />}
      {isLoading && <Text>Loading..</Text>}
      {dataLoaded && !isLoading && (
        <Image source={imagePath} style={styles.imageStyle} />
      )}
      {dataLoaded && !isLoading && (
        <ShowItems data={data} onChangeQty={onChange} onCancel={onCancel} />
      )}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  imageStyle: {
    height: wp(80),
    width: wp(80),
  },
  container: {
    margin: 10,
    flexDirection: 'column',
    justifyContent: 'center',

    alignItems: 'center',
  },
  btn: {
    borderWidth: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
    padding: 10,
    width: wp(80),
    margin: 'auto',
  },
  btnText: {
    fontSize: 20,
  },
});

export default TrackCal;
