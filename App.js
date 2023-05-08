import React, { useEffect, useState } from 'react';
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
const App = () => {
  const [login, setLogin] = useState(false);
  const [isFirstTimeLogin, setIsFirstTimeLogin] = useState(true);
  const [showWelcome, setShowWelcome] = useState(false);
  const [theme, setTheme] = useState('dark');
  const [showMainPage, setShowMainPage] = useState(true);
  const onLogin = () => {
    setLogin(true);
    setTheme('light');
    setIsFirstTimeLogin(true);
    setTheme('light');
  };
  const [data, setData] = useState();
  const saveDataHandler = (data) => {
    setData(data);
    setIsFirstTimeLogin(false);
  };

  useEffect(() => {
    if (!isFirstTimeLogin) {
      setShowWelcome(true);
      setTimeout(() => {
        setShowWelcome(false);
        setShowMainPage(true);
      }, 2000);
    }
  }, [isFirstTimeLogin]);
  useEffect(() => {
    if (showWelcome) setTheme('dark');
    else setTheme('light');
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
            {/* {!login && <HomePage onLogin={onLogin} />}
            {login && isFirstTimeLogin && (
              <CollectInfo onSave={saveDataHandler} />
            )} */}
            {/* {showWelcome && <Welcome name={data?.name} />} */}
          </View>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerStyle: {
                  backgroundColor: '#eef0ed',
                },
              }}
            >
              <Stack.Screen
                name="MainPage"
                component={MainPage}
                options={{ headerShown: false, title: '' }}
              />
              <Stack.Screen name="Profile" component={GenderInfo} />
              <Stack.Screen
                name="TrackCal"
                component={TrackCal}
                options={{ title: 'Track Calories' }}
              />
            </Stack.Navigator>
          </NavigationContainer>
          {/* <MainPage /> */}
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
};

export default App;
