import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import AppBar from '../components/AppBar';

export default function StartScreen() {
  return (
    <View style={styles.container}>
      <AppBar name="□" />
      <View style={styles.inner}>
        <Text style={styles.logo}>□</Text>
        <Text style={styles.mone}>mone</Text>
      </View>
      <View style={styles.footer}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  inner: {
    marginTop: 250,
    marginVertical: 87,
    flexDirection: 'row',
  },
  logo: {
    fontSize: 48,
    lineHeight: 54,
    paddingRight: 10,
  },
  mone: {
    fontSize: 48,
    lineHeight: 54,
  },
  footer: {
    backgroundColor: '#EC1A66',
    width: 135,
    height: 5,
    borderRadius: 10,
    position: 'absolute',
    bottom: 8,
  },
});
