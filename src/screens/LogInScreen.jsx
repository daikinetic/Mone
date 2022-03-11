import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

import Button from '../components/Button';

export default function LogInScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.back}>↰</Text>
        <Text style={styles.title}>Log in</Text>
        <TextInput style={styles.input} value="jane@example.com" />
        <TextInput style={styles.input} value="••••••••••••" />
        <Button label="LOG IN" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  inner: {
    paddingHorizontal: 16,
    paddingVertical: 32,
  },
  back: {
    fontSize: 30,
  },
  title: {
    fontSize: 36,
    lineHeight: 40,
    marginTop: 20,
    marginBottom: 32,
    color: '#EC1A66',
  },
  input: {
    color: '#EC1A66',
    fontSize: 15,
    height: 52,
    borderColor: '#EC1A66',
    borderWidth: 2,
    paddingHorizontal: 17,
    marginBottom: 16,
  },
});

