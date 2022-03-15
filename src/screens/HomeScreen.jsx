import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import AppBar from '../components/AppBar';
import ButtonWithLogo from '../components/ButtonWithLogo';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <AppBar name="home" />
      <View style={styles.greet}>
        <Text style={styles.greetName}>me さん</Text>
        <Text style={styles.goodMorning}>おはようございます</Text>
      </View>
      <View style={styles.button12}>
        <View style={styles.button1}>
          <AntDesign style={styles.play} name="playcircleo" size={50} color="white" />
          <Text style={styles.button1Text}>Quick Start Preset Project</Text>
        </View>
        <View style={styles.button2}>
          <Entypo style={styles.plus} name="plus" size={50} color="#EC1A66" />
          <Text style={styles.button2Text}>New Project</Text>
        </View>
      </View>
      <View style={styles.button34}>
        <View style={styles.button3}>
          <View style={styles.button3Icon}>
            <FontAwesome style={styles.chart} name="bar-chart" size={40} color="#EC1A66" />
            <AntDesign style={styles.share} name="sharealt" size={40} color="#EC1A66" />
          </View>
          <Text style={styles.button3Text}>Logs / Share</Text>
        </View>
        <View style={styles.button4}>
          <FontAwesome style={styles.gear} name="gear" size={50} color="white" />
          <Text style={styles.button4Text}>Settings</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.logo}>□</Text>
        <Text style={styles.mone}>mone</Text>
      </View>
      <View style={styles.footLineContainer}>
        <View style={styles.footLine}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
  },
  greet: {
    marginVertical: 20,
    alignItems: 'center',
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
    lineHeight: 30,
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
  play: {
    margin: 20,
  },
  button1Text: {
    color: '#ffffff',
    fontWeight: 'bold',
    width: '80%',
  },
  button2: {
    backgroundColor: '#ffffff',
    borderColor: '#EC1A66',
    borderWidth: 2,
    width: '46%',
    alignItems: 'center',
    borderRadius: 10,
  },
  plus: {
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
  button3Icon: {
    flexDirection: 'row',
    margin: 25,
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
  gear: {
    margin: 20,
  },
  button4Text: {
    color: '#ffffff',
    fontWeight: 'bold',
    lineHeight: 40,
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
    justifyContent: 'center',
    marginVertical: 40,
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
  footLineContainer: {
    alignItems: 'center',
  },
  footLine: {
    backgroundColor: '#EC1A66',
    width: 135,
    height: 5,
    borderRadius: 10,
  },
});
