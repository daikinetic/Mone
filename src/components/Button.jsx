import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function Button(props) {
  const { label, styleLabel, styleContainer } = props;
  return (
    <View style={[styles.buttonContainer, styleContainer]}>
      <Text style={[styles.buttonLabel, styleLabel]}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#EC1A66',
    borderRadius: 6,
    alignItems: 'center',
    marginBottom: 32,
  },
  buttonLabel: {
    fontSize: 13,
    lineHeight: 15,
    paddingVertical: 18,
    color: '#ffffff',
    fontWeight: 'bold',
  },
});
