import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const HorizontalPicker = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <View style={styles.container}>
      {options.map((option) => (
        <TouchableOpacity
          key={option.value}
          onPress={() => handleOptionSelect(option)}
          style={[
            styles.optionButton,
            selectedOption && selectedOption.value === option.value && styles.selectedOption,
          ]}
        >
          <Text style={styles.optionLabel}>{option.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderWidth: 3,
    borderColor: '#424874',
    borderRadius: 6,
  },
  optionButton: {
    flex: 1,
    paddingVertical: 8,
    alignItems: 'center',
  },
  selectedOption: {
    backgroundColor: '#A6B1E1',
  },
  optionLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: '#424874',
  },
});

export default HorizontalPicker;
