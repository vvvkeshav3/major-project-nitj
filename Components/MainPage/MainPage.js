import React, { useState, useEffect } from 'react';
import HorizontalDropdown from './HorizontalDropdown';
import WaterCounter from './WaterCounter';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { MainFooter } from './MainFooter';
import { wp, hp } from '../Viewport';
import { ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const MainPage = (props) => {
  const { data } = props.route.params;
  console.log(props.route.params.data);
  // const navigation = useNavigation();
  // navigation.reset({
  //   index: 0,
  //   routes: [{ name: 'MainPage' }],
  // });
  const [selectedOption, setSelectedOption] = useState(0);

  return (
    <View
      style={{
        height: hp(100),
      }}
    >
      <View style={styles.header}>
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <Text style={{ fontSize: 16 }}>Today</Text>
          <Icon name="caret-down" size={20} style={styles.icon} />
        </View>
      </View>
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
              <Icon name="caret-down" size={20} style={styles.icon} />
              <Text>Eat upto 2200 Cal</Text>
              <Icon name="caret-down" size={20} style={styles.icon} />
            </View>
          </Pressable>
        </View>
        {/* Nutrition card */}
        <View style={styles.cardContainer}>
          <Text style={styles.cardHeading}>Nutrition</Text>
          <Pressable onPress={()=>props.navigation.navigate('Profile')}>
            <View style={styles.cardDesign}>
              <Icon name="caret-down" size={20} style={styles.icon} />
              <Text>Eat upto 2200 Cal</Text>
              <Icon name="caret-down" size={20} style={styles.icon} />
            </View>
          </Pressable>
        </View>
        {/* Weight */}
        <View style={styles.cardContainer}>
          <Text style={styles.cardHeading}>Weight</Text>
          <Pressable>
            <View style={styles.cardDesign}>
              <Icon name="caret-down" size={20} style={styles.icon} />
              <Text>Eat upto 2200 Cal</Text>
              <Icon name="caret-down" size={20} style={styles.icon} />
            </View>
          </Pressable>
        </View>
        {/*  */}
        <View style={styles.cardContainer}>
            <Text style={styles.cardHeading}>Some Other Trackers</Text>
            <Pressable>
            <View style={styles.cardDesign}>
              <Icon name="caret-down" size={20} style={styles.icon} />
              <Text>Eat upto 2200 Cal</Text>
              <Icon name="caret-down" size={20} style={styles.icon} />
            </View>
          </Pressable>
          <Pressable>
            <View style={styles.cardDesign}>
              <Icon name="caret-down" size={20} style={styles.icon} />
              <Text>Eat upto 2200 Cal</Text>
              <Icon name="caret-down" size={20} style={styles.icon} />
            </View>
          </Pressable>
          <Pressable>
            <View style={styles.cardDesign}>
              <Icon name="caret-down" size={20} style={styles.icon} />
              <Text>Eat upto 2200 Cal</Text>
              <Icon name="caret-down" size={20} style={styles.icon} />
            </View>
          </Pressable>
          <Pressable>
            <View style={styles.cardDesign}>
              <Icon name="caret-down" size={20} style={styles.icon} />
              <Text>Eat upto 2200 Cal</Text>
              <Icon name="caret-down" size={20} style={styles.icon} />
            </View>
          </Pressable>
        </View>
      </ScrollView>

        <MainFooter
          selectedOption={selectedOption}
          onClick={(option) => setSelectedOption(option)}
        />
      </View>
    </>
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
    padding : 10,
    backgroundColor:'white',
    borderRadius: 20,
    marginVertical: 10,

  },
  cardHeading: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  cardHeading:{
    fontWeight:'bold',
    fontSize:15,
  }
});

export default MainPage;
