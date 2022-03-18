import React from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity
} from 'react-native';

import Button from '../components/Button';

export default function LoggedOutScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Text style={styles.logoImage}>□</Text>
        <Text style={styles.logoText}>mone</Text>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.leftButton}>
          <Text style={styles.login}>LOG IN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.rightButton}>
          <Text style={styles.register}>REGISTER</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    height: '85%',
  },
  logoImage: {
    fontSize: 48,
    lineHeight: 54,
  },
  logoText: {
    fontSize: 48,
    lineHeight: 54,
  },
  footer: {
    flex: 1,
    // backgroundColor:'green',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  leftButton: {
    backgroundColor: '#ffffff',
    borderColor: '#EC1A66',
    borderWidth: 2,
    borderRadius: 8,
    height: '50%',
    width: '47%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  login: {
    color: '#EC1A66',
    fontSize: 15,
    fontWeight: 'bold',
  },
  rightButton: {
    backgroundColor: '#EC1A66',
    borderRadius: 8,
    height: '50%',
    width: '47%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  register: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  // footerLeftContainer: {
  //   width: 145,
  //   height: 52,
  //   backgroundColor: '#ffffff',
  //   borderColor: '#EC1A66',
  //   borderWidth: 2,
  // },
  // footerLeftLabel: {
  //   color: '#EC1A66',
  // },
  // footerRightContainer: {
  //   width: 130,
  //   height: 52,
  // },
});
