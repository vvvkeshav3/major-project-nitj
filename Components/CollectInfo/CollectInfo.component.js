import { StyleSheet, Text, View } from 'react-native';
import * as Progress from 'react-native-progress';
import React, { useState } from 'react';
import NameInfo from './NameInfo';
import GenderInfo from './GenderInfo';
import AgeInfo from './AgeInfo';
import HeightInfo from './HeightInfo';
import WeightInfo from './WeightInfo';
import ActivityInfo from './ActivityInfo';
const CollectInfo = (props) => {
  const totalPages = 6;
  const [currentPage, setCurrentPage] = useState(0);
  let perc = currentPage / totalPages;
  perc = parseFloat(perc.toFixed(1));

  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [activity, setActivity] = useState('');
  const changePageNoHandler = (pageNo) => {
    setCurrentPage(pageNo);
  };
  let componentPage = '';
  switch (currentPage) {
    case 0:
      componentPage = (
        <NameInfo
          pageNo={currentPage}
          onSave={(name) => setName(name)}
          onChangePage={changePageNoHandler}
        />
      );
      break;
    case 1:
      componentPage = (
        <GenderInfo
          pageNo={currentPage}
          onSave={(gender) => setGender(gender)}
          onChangePage={changePageNoHandler}
        />
      );
      break;
    case 2:
      componentPage = (
        <AgeInfo
          pageNo={currentPage}
          onSave={(age) => setAge(age)}
          onChangePage={changePageNoHandler}
        />
      );
      break;
    case 3:
      componentPage = (
        <ActivityInfo
          pageNo={currentPage}
          onSave={(value) => setActivity(value)}
          onChangePage={changePageNoHandler}
        />
      );
      break;
    case 4:
      componentPage = (
        <HeightInfo
          pageNo={currentPage}
          onSave={(height) => setHeight(height)}
          onChangePage={changePageNoHandler}
        />
      );
      break;
    case 5:
      componentPage = (
        <WeightInfo
          pageNo={currentPage}
          onSave={(weight) => setWeight(weight)}
          onChangePage={changePageNoHandler}
        />
      );
      break;

    default:
      const data = {
        name: name,
        age: age,
        gender: gender,
        height: height,
        weight: weight,
        activity: activity,
      };
      props.onSave(data);
  }

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginBottom: 30,
        }}
      >
        <Progress.Bar
          progress={perc}
          width={200}
          borderColor="black"
          color="#E74646"
          borderRadius={3}
        />
      </View>
      <View>{componentPage}</View>
    </View>
  );
};

export default CollectInfo;
