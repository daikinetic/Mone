import React from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, ImageBackground,
} from 'react-native';

import Button from '../components/Button';
import { Entypo } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 

export default function LoggedOutScreen(props) {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../static/Rectangle.png')} style={styles.image}>
      </ImageBackground>
      <View style={styles.logo}>
        <Text style={styles.logoImage}>
          <Entypo name="hour-glass" size={34} color="#02B3DE" />
        </Text>
        <Text style={styles.logoText}> mone</Text>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.leftButton}
          onPress={() => {
            navigation.navigate('LogInScreen');
          }}
        >
          <Text style={styles.login}>LOG IN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.rightButton}
          onPress={() => {
            navigation.navigate('RegisterStep1Screen');
          }}
        >
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
  image: {
    position: 'absolute',
    width: '100%',
    height: '92%',
  },
  logo: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'blue',
    height: '85%',
  },
  logoImage: {
    marginRight: -5
  },
  logoText: {
    fontSize: 48,
    lineHeight: 54,
    color: "#000000"
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
