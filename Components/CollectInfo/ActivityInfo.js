import React, { useState } from 'react';
import { Text, ScrollView, TextInput, View, Pressable } from 'react-native';
import { StyleSheet, Dimensions } from 'react-native';
// import { mars } from '@fortawesome/free-solid-svg-icons/mars';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Footer } from './Footer';
import { wp, hp } from '../Viewport';
const ActivityInfo = (props) => {
  const [option, setOption] = useState();
  const [valid, setValid] = useState(false);
  const activityOptions = [
    {
      icon: <Icon name="running" size={40} color="#111" style={styles.icon} />,
      title: 'Little or No Activity',
      description:
        'Mostly sitting through the day (eg. Desk Job, Bank Teller )',
    },
    {
      icon: <Icon name="running" size={40} color="#111" style={styles.icon} />,
      title: 'Lightly Active',
      description:
        'Mostly standing through the day (eg. Sales Associate, Teacher )',
    },
    {
      icon: (
        <Icon
          name="running"
          size={40}
          color="#111"
          style={styles.icon}
        />
      ),
      title: 'Moderately Active',
      description:
        'Mostly walking or doing physical activities through the day (eg. Tour Guide, Waiter )',
    },
    {
      icon: (
        <Icon
          name="mars"
          size={40}
          color="#111"
          style={styles.icon}
        />
      ),
      title: 'Very Active',
      description:
        'Mostly doing heavy physical activities through the day (eg. Gym Instructor, Construction Worker )',
    },
  ];
  const onClick = (value) => {
    setOption(value);
    setValid(true);
  };

  const onNext = (page) => {
    props.onSave(activityOptions[option].title);
    props.onChangePage(page);
  };
  const onBack = (page) => {
    props.onChangePage(page);
  };
  return (
    <View
      style={{
        height: hp(100),
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <ScrollView
        alwaysBounceVertical={false}
        contentContainerStyle={{
          flexDirection: 'column',
          alignItems: 'center',
          flex: 1,
        }}
      >
        <Text style={{ fontSize: 25, marginBottom: 10 }}>
          How active are you?
        </Text>
        <Text style={{ textAlign: 'center' }}>
          Based on your lifestyle, we can assess your daily calorie
          requirements.
        </Text>
        <View style={styles.container}>
          {activityOptions.map((activity, idx) => (
            <View
                key={idx}
              style={[
                styles.btnContainer,
                option === idx ? styles.selected : '',
              ]}
            >
              <Pressable
                style={styles.btn}
                onPress={() => {
                  onClick(idx);
                }}
              >
                {activity.icon}
                <View style={styles.innerContainer}>
                  <Text style={styles.innerTitle}>{activity.title}</Text>
                  <Text style={styles.innerDescription}>
                    {activity.description}
                  </Text>
                </View>
              </Pressable>
            </View>
          ))}
        </View>
      </ScrollView>
      <Footer
        pageNo={props.pageNo}
        valid={valid}
        onNext={onNext}
        onBack={onBack}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: 50,
    margin: 'auto',
  },
  innerContainer: {
    flexDirection: 'column',
    flex: .96,
  },
  icon: {
    marginRight: 10,
    backgroundColor: '#F7F7F7',
    padding: 10,
    width: 60,
    height: 60,
    textAlign: 'center',
    margin: 'auto',
    borderRadius: 30,
    overflow: 'hidden',
  },
  btnContainer: {
    margin: 10,
    padding: 10,
    paddingVertical: 15,
    borderRadius: 10,
    backgroundColor: 'white',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.18,
    shadowRadius: 4.59,
    elevation: 5,
    width: wp(90),
  },
  btn: {
    flexDirection: 'row',
  },
  btnText: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
  },
  selected: {
    borderWidth: 2,

    borderColor: '#257afd',
  },
  innerTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  innerDescription: {},
});

export default ActivityInfo;
