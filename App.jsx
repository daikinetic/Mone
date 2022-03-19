import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';

import RegisterStep1Screen from './src/screens/RegisterStep1Screen';
import RegisterStep2Screen from './src/screens/RegisterStep2Screen';
import LogInScreen from './src/screens/LogInScreen';
import LoggedOutScreen from './src/screens/LoggedOutScreen';
import StartScreen from './src/screens/StartScreen';
import HomeScreen from './src/screens/HomeScreen';
import SettingScreen from './src/screens/SettingScreen';
import SettingTimeScreen from './src/screens/SettingTimeScreen';
import TimerSampleScreen from './src/screens/TimerSampleScreen';

const firebaseConfig = {
  apiKey: "AIzaSyA7dk0v-m25r9tX8AYQL9PxJik7LNtaJao",
  authDomain: "mone-6e841.firebaseapp.com",
  projectId: "mone-6e841",
  storageBucket: "mone-6e841.appspot.com",
  messagingSenderId: "742955431893",
  appId: "1:742955431893:web:ea6f4a4d8010632a292f5c"
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  return (
    <View style={styles.container}>
      <TimerSampleScreen />
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff'
    }
  })