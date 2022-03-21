import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import AppBar from '../components/AppBar';

export default function SettingTimeScreen(props) {
  const { navigation } = props;
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <AppBar name="gear"/>
      <View style={styles.imageContainer}>
        <View style={styles.image}>
          <Ionicons style={styles.time} name="timer-outline" size={100} color="#EC1A66" />
          <Text style={styles.imageText}>Time Alert</Text>
        </View>
      </View>
      <View>
        <View style={styles.switch}>
          <Switch
            trackColor={{ false: "#767577", true: "#767577" }}
            thumbColor={isEnabled ? "#EC1A66" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => { navigation.goBack(); }}>
          <FontAwesome style={styles.footerLogo} name="gear" size={50} color="#EC1A66" />
          <Text style={styles.footerText}>Back</Text>
        </TouchableOpacity>
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
    marginHorizontal: 30,
  },
  image: {
    alignItems: 'center',
  },
  time: {
    marginTop: 25,
  },
  imageText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#EC1A66',
    marginTop: 15,
  },
  switch: {
    marginTop: 30,
    alignItems: 'center',
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
