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
import Login from './Login';
import AddFoodItem from './Components/MainPage/AddFoodItem';
import StepsTracker from './Components/MainPage/StepsTracker';
import WaterCounter from './Components/MainPage/WaterCounter';

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#eef0ed',
          },
        }}
      >
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false, title: '' }}
        />
        <Stack.Screen
          name="MainPage"
          component={MainPage}
          options={{ headerShown: false, title: '', gestureEnabled: false }}
        />
        <Stack.Screen name="Profile" component={GenderInfo} />
        <Stack.Screen
          name="TrackCal"
          component={TrackCal}
          options={{ title: 'Track Calories' }}
        />
        <Stack.Screen
          name="NutritionInfo"
          component={ShowNutrition}
          options={{ title: 'Nutrition Info' }}
        />
        <Stack.Screen
          name="NutritionSection"
          component={NutritionSection}
          options={{ title: 'Nutrition' }}
        />
        <Stack.Screen
          name="AddFoodItem"
          component={AddFoodItem}
          options={{ title: 'Add Food Item' }}
        />
        <Stack.Screen 
        name="StepTracker" 
        component={StepsTracker} 
        options={{ title: 'Check your steps' }}
        />
        <Stack.Screen 
        name="WaterIntake" 
        component={WaterCounter} 
        options={{ title: 'Check your Water Intake' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
