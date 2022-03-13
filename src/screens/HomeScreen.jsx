import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import AppBar from '../components/AppBar';
import ButtonWithLogo from '../components/ButtonWithLogo';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <AppBar name="⌂" />
      <View style={styles.greet}>
        <Text style={styles.greetName}>           me さん</Text>
        <Text style={styles.goodMorning}>おはようございます</Text>
      </View>
      <View style={styles.buttonLine}>
        <ButtonWithLogo logo="▶" label="   Quick Start Preset Project"/>
        <ButtonWithLogo
          styleContainer={styles.styleContainer}
          styleLabel={styles.styleLabel}
          logo="+"
          label="New Project"
        />
      </View>
      <View style={styles.buttonLine}>
        <ButtonWithLogo
          styleContainer={styles.styleContainer}
          styleLabel={styles.styleLabel}
          logo="□"
          label="Logs / Share"
        />
        <ButtonWithLogo logo="⚙" label="Settings" />
      </View>
      <View style={styles.footer}>
        <Text style={styles.logo}>□</Text>
        <Text style={styles.mone}>mone</Text>
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
  greet: {
    marginVertical: 20,
  },
  greetName: {
    color: '#EC1A66',
    fontWeight: 'bold',
    fontSize: 17,
    lineHeight: 30,
  },
  goodMorning: {
    color: '#EC1A66',
    fontWeight: 'bold',
    fontSize: 17,
    lineHeight: 30
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
  footLine: {
    backgroundColor: '#EC1A66',
    width: 135,
    height: 5,
    borderRadius: 10,
    position: 'absolute',
    bottom: 8,
  },
});
