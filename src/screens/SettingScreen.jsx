import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import AppBar from '../components/AppBar';
import ButtonWithLogo from '../components/ButtonWithLogo';

export default function SettingScreen() {
  return (
    <View style={styles.container}>
      <AppBar name="gear" />
      <View style={styles.logoContainer}>
        <Text style={styles.logo}>□</Text>
        <Text style={styles.mone}>mone</Text>
      </View>
      <View style={styles.button12}>
        <View style={styles.button1}>
          <Ionicons style={styles.time} name="timer-outline" size={50} color="white" />
          <Text style={styles.button1Text}>Time Alert</Text>
        </View>
        <View style={styles.button2}>
          <Foundation style={styles.paint} name="paint-bucket" size={50} color="#EC1A66" />
          <Text style={styles.button2Text}>Colors</Text>
        </View>
      </View>
      <View style={styles.button34}>
        <View style={styles.button3}>
          <AntDesign style={styles.lock} name="unlock" size={50} color="#EC1A66" />
          <Text style={styles.button3Text}>Privacy</Text>
        </View>
        <View style={styles.button4}>
          <FontAwesome style={styles.photo} name="photo" size={50} color="white" />
          <Text style={styles.button4Text}>Background</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <FontAwesome style={styles.footerLogo} name="home" size={50} color="#EC1A66" />
        <Text style={styles.footerText}>Back</Text>
        <View style={styles.footLineContainer}>
          <View style={styles.footLine}></View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
  },
  logoContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    justifyContent: 'center',
    height: 60,
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
  button12: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    height: 150,
  },
  button1: {
    backgroundColor: '#EC1A66',
    width: '46%',
    alignItems: 'center',
    borderRadius: 10,
  },
  time: {
    margin: 20,
  },
  button1Text: {
    color: '#ffffff',
    fontWeight: 'bold',
    // width: '80%',
  },
  button2: {
    backgroundColor: '#ffffff',
    borderColor: '#EC1A66',
    borderWidth: 2,
    width: '46%',
    alignItems: 'center',
    borderRadius: 10,
  },
  paint: {
    margin: 16,
  },
  button2Text: {
    color: '#EC1A66',
    fontWeight: 'bold',
    lineHeight: 40,
  },
  button34: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    height: 150,
    marginTop: 24,
  },
  button3: {
    backgroundColor: '#ffffff',
    borderColor: '#EC1A66',
    borderWidth: 2,
    width: '46%',
    alignItems: 'center',
    borderRadius: 10,
  },
  lock: {
    margin: 20,
  },
  button3Text: {
    color: '#EC1A66',
    fontWeight: 'bold',
    lineHeight: 40,
  },
  button4: {
    backgroundColor: '#EC1A66',
    width: '46%',
    alignItems: 'center',
    borderRadius: 10,
  },
  photo: {
    margin: 20,
  },
  button4Text: {
    color: '#ffffff',
    fontWeight: 'bold',
    lineHeight: 40,
  },
  footer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    bottom: 8,
  },
  footerText: {
    color: '#EC1A66',
    lineHeight: 15,
    fontWeight: 'bold',
  },
  footLineContainer: {
    alignItems: 'center',
    marginTop: 5,
  },
  footLine: {
    backgroundColor: '#EC1A66',
    width: 135,
    height: 5,
    borderRadius: 10,
  },
});

