import React, { useState } from 'react';
import HorizontalDropdown from './HorizontalDropdown';
import WaterCounter from './WaterCounter';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { MainFooter } from './MainFooter';
import { wp, hp } from '../Viewport';
import { ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import StepTracker from './StepsTracker';
const MainPage = (props) => {
  const [selectedOption, setSelectedOption] = useState(0);
  const [dropDown, setDropDown] = useState(false);
  const handleButtonClick = () => {
    setDropDown(!dropDown);
  };
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString();
  const options = [
    { value: 'option1', label: '09/5' },
    { value: 'option2', label: '10/5' },
    { value: 'option3', label: '11/5' },
    { value: 'option4', label: '12/5' },
    { value: 'option5', label: '13/5' },
    { value: 'option6', label: '14/5' },
    { value: 'option7', label: '15/5' },
  ];

  return (
    <View
      style={{
        height: hp(100),
        backgroundColor: '#F4EEFF',
      }}
    >
      <View style={styles.header}>
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <Pressable onPress={handleButtonClick}>
          <View style={styles.row}>
          <Text style={{ fontSize: 20, color: '#424874' }}>Today</Text>
          <Icon name="caret-down" size={20} style={styles.icon} />
          </View>
          </Pressable>
        </View>
      </View>
      { dropDown &&   <HorizontalDropdown options={options} />
      }
      <ScrollView
        // alwaysBounceVertical={false}
        contentContainerStyle={{
          flexDirection: 'column',
          //   alignItems: 'center',
        //   flex: 1,
          padding: 20,
        //   paddingTop: 40,
        }}
      >
        {/* Calorie Card  */}
        <View style={styles.cardContainer}>
          <Text style={styles.cardHeading}>Calorie Tracker</Text>
          <Pressable onPress={()=>props.navigation.navigate('TrackCal')}>
            <View style={styles.cardDesign}>
              <Icon name="camera" size={20} style={styles.icon} />
              <Text style={styles.smallText}>Eat upto 2200 Cal</Text>
            </View>
          </Pressable>
        </View>
        {/* Nutrition card */}
        <View style={styles.cardContainer}>
          <Text style={styles.cardHeading}>Nutrition</Text>
          <Pressable onPress={()=>props.navigation.navigate('Profile')}>
          <View style={styles.cardDesign}>
              <Icon name="cutlery" size={20} style={styles.icon} />
              <Text style={styles.smallText}>Eat upto 2200 Cal</Text>
            </View>
          </Pressable>
        </View>
        {/* Weight */}
        <View style={styles.cardContainer}>
          <Text style={styles.cardHeading}>Weight</Text>
          <Pressable>
            <View style={styles.cardDesign}>
              <Icon name="circle" size={20} style={styles.icon} />
              <Text style={styles.smallText}>Eat upto 2200 Cal</Text>
            </View>
          </Pressable>
        </View>
        {/* Steps */}
        <View style={styles.cardContainer}>
          <Text style={styles.cardHeading}>Get your Steps</Text>
          <Pressable>
            <View style={styles.cardDesign}>
              <Icon name="blind" size={20} style={styles.icon} />
              <StepTracker />  
            </View>
          </Pressable>
        </View>
        {/* Water Tracker */}
        <View style={styles.cardContainer}>
          <Text style={styles.cardHeading}>Track your water intake</Text>
          <Pressable>
          <View style={styles.cardDesign}>
            <WaterCounter/>
          </View>
          </Pressable> 
        </View>
      </ScrollView>

      <MainFooter
        selectedOption={selectedOption}
        onClick={(option) => setSelectedOption(option)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    paddingHorizontal: 16, 
  },
  header: {
    marginTop: hp(3),
    borderBottomWidth: 1,
    borderColor: '#424874',
    paddingVertical: 5,
    backgroundColor: '#A6B1E1',
  },
  icon: {
    color: '#424874',
    marginLeft: 5,
  },
  cardDesign:{
    borderWidth:2,
    padding : 15,
    backgroundColor:'#A6B1E1',
    borderRadius: 20,
    marginVertical: 10,
    flexDirection: 'row', 
    alignItems: 'center',  
  },
  cardContainer:{
    marginBottom : 30,
  },
  cardHeading:{
    color: '#424874',
    fontWeight:'bold',
    fontSize:17,
  },
  smallText:{
    fontWeight: '500',
    color: '#424874',
    paddingLeft: 5,
  }
});

export default MainPage;
