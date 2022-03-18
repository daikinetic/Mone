import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import AppBar from '../components/AppBar';
import ButtonWithLogo from '../components/ButtonWithLogo';

export default function SettingScreen() {
  return (
    <View style={styles.container}>
      <AppBar name="⚙" />
      <View style={styles.logoContainer}>
        <Text style={styles.logo}>□</Text>
        <Text style={styles.mone}>mone</Text>
      </View>
      <View style={styles.buttonLine}>
        <ButtonWithLogo logo="🕒" label="Time Alert"/>
        <ButtonWithLogo
          styleContainer={styles.styleContainer}
          styleLabel={styles.styleLabel}
          logo="🎨"
          label="Colors"
        />
      </View>
      <View style={styles.buttonLine}>
        <ButtonWithLogo
          styleContainer={styles.styleContainer}
          styleLabel={styles.styleLabel}
          logo="🔒"
          label="Privacy"
        />
        <ButtonWithLogo logo="🖼️" label="Background" />
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerLogo}>⌂</Text>
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
  logoContainer: {
    flexDirection: 'row',
    marginVertical: 25,
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
  buttonLine: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  styleContainer: {
    backgroundColor: '#ffffff',
    borderColor: '#EC1A66',
    borderWidth: 2,
  },
  styleLabel: {
    color: '#EC1A66',
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
  footLine: {
    backgroundColor: '#EC1A66',
    width: 135,
    height: 5,
    borderRadius: 10,
    position: 'absolute',
    bottom: 8,
  },
});

