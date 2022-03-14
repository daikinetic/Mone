import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import AppBar from '../components/AppBar';

export default function SettingTimeScreen() {
  return (
    <View style={styles.container}>
      <AppBar name="⚙"/>
      <View style={styles.imageContainer}>
        <View style={styles.image}>
          <Text style={styles.imageIcon}>🕒</Text>
          <Text style={styles.imageText}>Time Alert</Text>
        </View>
      </View>
      <View>
        <View style={styles.switch}>
          <Text style={styles.ball}>●</Text>
        </View>
        <Text style={styles.on}>ON</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerLogo}>⚙</Text>
        <Text style={styles.footerText}>Back</Text>
      </View>
      <View style={styles.footLine}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  footLine: {
    backgroundColor: '#EC1A66',
    width: 135,
    height: 5,
    borderRadius: 10,
    position: 'absolute',
    bottom: 8,
  },
  imageContainer: {
    borderColor: '#EC1A66',
    borderWidth: 2,
    borderRadius: 10,
    width: 260,
    height: 230,
    marginTop: 40,
  },
  image: {
    alignItems: 'center',
  },
  imageIcon: {
    fontSize: 80,
    marginTop: 25,
  },
  imageText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#EC1A66',
    marginTop: 15,
  },
  switch: {
    borderColor: '#EC1A66',
    borderWidth: 2,
    borderRadius: 35,
    width: 140,
    height: 75,
    marginTop: 30,
    justifyContent: 'center',
  },
  ball: {
    color: '#EC1A66',
    fontSize: 50,
    paddingLeft: 13,
  },
  on: {
    color: '#EC1A66',
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 25,
    paddingTop: 10,
  },
  footer: {
    alignItems: 'center',
    position: 'absolute',
    bottom: 16,
  },
  footerLogo: {
    fontSize: 50,
    color: '#EC1A66',
  },
  footerText: {
    color: '#EC1A66',
    lineHeight: 15,
    fontWeight: 'bold',
  },
});
