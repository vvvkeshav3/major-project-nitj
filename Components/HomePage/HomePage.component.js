import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Linking, Pressable } from 'react-native';
import Phone from '../Phone';
import styles from './HomePage.component.style';
import { ScrollView } from 'react-native';
const HomePage = (props) => {
  const [valid, setValid] = useState(false);
  const onChange = (valid) => {
    setValid(valid);
  };

  const onPress = ()=>{
    props.onLogin(true);
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.userBtn}>Already a User?</Text>
        <Text style={styles.logo}>CalTracker</Text>
      </View>
      <ScrollView style={styles.account} alwaysBounceVertical={false}>
        <Text style={styles.accountHeading}>Create your account</Text>
        <Phone onChange={onChange} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 30,
          }}
        >
          <Text style={styles.tnc}>
            By Signing Up, I agree to the{' '}
            <Text style={styles.underline}>Terms of Service</Text> and{' '}
            <Text style={styles.underline}>Privacy Policy</Text>, including
            usage of Cookies{' '}
          </Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <Pressable
            style={[styles.button, { opacity: !valid ? 0.3 : 1 }]}
            disabled = {!valid}
            onPress={onPress}
          >
            {/* onPress={onPress} */}
            <Text style={styles.text}>Agree & Sign Up</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomePage;
