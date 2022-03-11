import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { string } from 'prop-types';

export default function Button(props) {
  const { label } = props;
  return (
    <View style={StyleSheet.buttonContainer}>
      <Text style={StyleSheet.buttonLabel}>{label}</Text>
    </View>
  );
}

Button.propTypes = {
  label: string.isRequired,
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#EC1A66',
    borderRadius: 6,
  },
  buttonLabel: {
    fontSize: 13,
    lineHeight: 15,
    paddingVertical: 18,
    paddingHorizontal: 154,
  },
})
