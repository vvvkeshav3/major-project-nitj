import React, { useEffect, useState } from 'react';
import firebaseDetails from './firebase.json';
import { initializeApp } from 'firebase/app';
import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  StatusBar,
  Root,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import HomePage from './Components/HomePage/HomePage.component';
import CollectInfo from './Components/CollectInfo/CollectInfo.component';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GenderInfo from './Components/CollectInfo/GenderInfo';
const Stack = createNativeStackNavigator();
import Welcome from './Components/Welcome';
import MainPage from './Components/MainPage/MainPage';
import TrackCal from './Components/MainPage/TrackCal';
import ShowNutrition from './Components/MainPage/ShowNutrition';
import GoalInfo from './Components/CollectInfo/GoalInfo';
import getRequirements from './getRequirements';
// import AddFoodItem from './Components/MainPage/NutritionSection';
import NutritionSection from './Components/MainPage/NutritionSection';
const Login = (props) => {
  // Firebase config
  const { details } = firebaseDetails;
  const firebaseConfig = {
    apiKey: details.apiKey,
    authDomain: details.authDomain,
    projectId: details.projectId,
    storageBucket: details.storageBucket,
    messagingSenderId: details.messagingSenderId,
    appId: details.appId,
    measurementId: details.measurementId,
  };
  initializeApp(firebaseConfig);

  const [login, setLogin] = useState(false);
  // const [login, setLogin] = useState(true);

  const [isFirstTimeLogin, setIsFirstTimeLogin] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const [theme, setTheme] = useState('dark');
  const [showMainPage, setShowMainPage] = useState(true);
  // const [currentFoodIntake, setCurrentFoodIntake] = useState({
  //   calories: 200,
  //   proteins: 0,
  //   carbs: 0,
  //   fats: 0,
  //   fiber: 0,
  // });
  // const [totalFoodIntake, setTotalFoodIntake] = useState({
  //   calories: 2200,
  //   proteins: 150,
  //   carbs: 200,
  //   fats: 80,
  //   fiber: 30,
  // });
  const onLogin = () => {
    setLogin(true);
    setTheme('light');
    setIsFirstTimeLogin(true);
    setTheme('light');
  };
  const [data, setData] = useState({
    activity: 2,
    age: 20,
    gender: 1,
    goal: -0.25,
    height: 165,
    name: 'Ggx',
    weight: 80,
  });
  const saveDataHandler = (data) => {
    console.log(data);
    setData(data);
    // const requirements = getRequirements(data);
    // setTotalFoodIntake(requirements);
    // setCurrentFoodIntake({
    //   calories: 0,
    //   proteins: 0,
    //   carbs: 0,
    //   fats: 0,
    //   fiber: 0,
    // });
    setIsFirstTimeLogin(false);
  };

  useEffect(() => {
    if (!isFirstTimeLogin) {
      setShowWelcome(true);
      setTimeout(() => {
        setShowWelcome(false);
        props.navigation.navigate('MainPage', {
          data: data,
        });
        // setShowMainPage(true);
      }, 2000);
    }
  }, [isFirstTimeLogin]);
  useEffect(() => {
    if (showWelcome) setTheme('dark');
    else if (login) setTheme('light');
  }, [showWelcome]);
  return (
    <>
      <StatusBar
        backgroundColor={theme === 'light' ? '#eef0ed' : '#000'}
        barStyle={theme === 'light' ? 'dark-content' : 'light-content'}
      />
      <SafeAreaProvider>
        <SafeAreaView
          style={{
            flex: 1,
            backgroundColor: theme === 'light' ? '#eef0ed' : '#000',
          }}
        >
          <View>
            {!login && <HomePage onLogin={onLogin} />}
            {login && isFirstTimeLogin && (
              <CollectInfo onSave={saveDataHandler} />
            )}
            {showWelcome && <Welcome name={data?.name} />}
            {/* {showMainPage && (
              <MainPage
                currentFoodIntake={currentFoodIntake}
                totalFoodIntake={totalFoodIntake}
                onChangeFoodIntake={(data) => setCurrentFoodIntake(data)}
              />
            )} */}
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
};
export default Login;
