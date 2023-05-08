import React, { useState, useRef, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  TouchableOpacity,
  Text,
} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
const Phone = (props) => {
  const [value, setValue] = useState('');
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const phoneInput = useRef(null);
  useEffect(() => {
    props.onChange(valid);
  }, [valid]);
  return (
    <View style={{ marginTop: 20 }}>
      <PhoneInput
        ref={phoneInput}
        defaultValue={value}
        defaultCode="IN"
        onChangeFormattedText={(text) => {
          setValue(text);
          if (text == '') setValid(false);
          else setValid(true);
        }}
        withDarkTheme
        withShadow
      />
    </View>
  );
};

export default Phone;
