import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import firebase from 'firebase';

import AppBar from '../components/AppBar';
// import ButtonWithLogo from '../components/ButtonWithLogo';
import LogOutButton from '../components/LogOutButton';

export default function HomeScreen(props) {
  const { navigation, route } = props;
  // const { id } = route.params;
  const [username, setUsername] = useState('');

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <LogOutButton />,
    });
  }, []);

  useEffect(() => {
    const db = firebase.firestore();
    const { currentUser } = firebase.auth();
    let unsubscribe = () => {};
    if (currentUser) {
      const ref = db.collection(`users/${currentUser.uid}/username`);
      
      unsubscribe = ref.onSnapshot((snapshot) => {
        snapshot.forEach((doc) => {
          const data = doc.data();
          setUsername(data.Username);
        });
      });
    }
    return unsubscribe;
  }, []);

  return (
    <View style={styles.container}>
      {/* <AppBar name="home" /> */}
      <View style={styles.greet}>
        {/* <Text style={styles.username}>me</Text> */}
        <Text style={styles.san}>{username} さん</Text>
        <Text style={styles.goodMorning}>おはようございます</Text>
      </View>
      <View style={styles.button12}>
        <TouchableOpacity style={styles.button1}>
          <View style={styles.button1Cover}></View>
          <FontAwesome style={styles.play} name="play-circle" size={44} color="white" />
          <Text style={styles.button1Text}>Quick Start Preset Project</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button2}
          onPress={() => {
            navigation.navigate('RoutineTagScreen');
          }}
        >
          <Entypo style={styles.plus} name="plus" size={50} color="#EC1A66" />
          <Text style={styles.button2Text}>New Project</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.button34}>
        <TouchableOpacity style={styles.button3}>
          <View style={styles.button3Cover}></View>
          <View style={styles.button3Icon}>
            <FontAwesome style={styles.chart} name="bar-chart" size={34} color="#EC1A66" />
            <AntDesign style={styles.share} name="sharealt" size={34} color="#EC1A66" />
          </View>
          <Text style={styles.button3Text}>Logs / Share</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button4}
          onPress={() => {
            navigation.navigate('SettingScreen');
          }}
        >
          <View style={styles.button4Cover}></View>
          <FontAwesome style={styles.gear} name="gear" size={44} color="white" />
          <Text style={styles.button4Text}>Settings</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <View style={styles.footerLogo}>
          <Text style={styles.logo}>
            <Entypo name="hour-glass" size={34} color="#02B3DE" />
          </Text>
          <Text style={styles.mone}>mone</Text>
        </View>
        
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
  greet: {
    height: 60,
    marginVertical: 35,
    alignItems: 'center',
  },
  san: {
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
  button1Cover: {
    position: 'absolute',
    zIndex: 5,
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    borderRadius: 10,
  },
  button1: {
    backgroundColor: '#EC1A66',
    width: '46%',
    alignItems: 'center',
    borderRadius: 10,
    // padding:3,
    // paddingBottom:5
  },
  play: {
    margin: 17,
    marginTop:23
  },
  button1Text: {
    color: '#ffffff',
    fontWeight: 'bold',
    width: '70%',
    textAlign: "center",
    marginTop:-5
  },
  button2: {
    backgroundColor: '#ffffff',
    borderColor: '#EC1A66',
    borderWidth: 2,
    width: '46%',
    alignItems: 'center',
    borderRadius: 10,
    padding:3
  },
  plus: {
    margin: 8,
    marginTop:22
  },
  button2Text: {
    color: '#EC1A66',
    fontWeight: 'bold',
    lineHeight: 30,
  },
  button34: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    height: 150,
    marginTop: 24,
  },
  button3Cover: {
    position: 'absolute',
    zIndex: 5,
    height: '102%',
    width: '102%',
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    borderRadius: 10,
  },
  button3: {
    backgroundColor: '#ffffff',
    borderColor: '#EC1A66',
    borderWidth: 2,
    width: '46%',
    alignItems: 'center',
    borderRadius: 10,
    /*padding:3 */
  },
  button3Icon: {
    flexDirection: 'row',
    margin: 14,
    marginTop:30
  },
  chart: {
    marginRight:5
  },
  button3Text: {
    color: '#EC1A66',
    fontWeight: 'bold',
    lineHeight: 30,
  },
  button4Cover: {
    position: 'absolute',
    zIndex: 5,
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    borderRadius: 10,
  },
  button4: {
    backgroundColor: '#EC1A66',
    width: '46%',
    alignItems: 'center',
    borderRadius: 10,
    /* padding:3 */
  },
  gear: {
    margin: 7,
    marginTop: 28
  },
  button4Text: {
    color: '#ffffff',
    fontWeight: 'bold',
    lineHeight: 30,
  },
  footer: {
    flex: 1,
  },
  footerLogo: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
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
    paddingBottom: 8,
  },
  footLine: {
    backgroundColor: '#EC1A66',
    width: 135,
    height: 5,
    borderRadius: 10,
  },
});
