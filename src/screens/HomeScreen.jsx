import React, { useEffect } from 'react';
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
  // const [username, setUsername] = useState('');

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <LogOutButton />,
    });
  }, []);

  // useEffect(() => {
  //   const { currentUser } = firebase.auth();
  //   let unsubscribe = () => {};
  //   if (currentUser) {
  //     const db = firebase.firestore();
  //     const ref = db.collection(`users/${currentUser.uid}`).doc(id);
  //     unsubscribe = ref.onSnapshot((doc) => {
  //       const data = doc.data();
  //       setUsername(data.username);
  //     });
  //   }
  // }, []);

  return (
    <View style={styles.container}>
      <AppBar name="home" />
      <View style={styles.greet}>
        {/* <Text style={styles.username}>me</Text> */}
        <Text style={styles.san}>me さん</Text>
        <Text style={styles.goodMorning}>おはようございます</Text>
      </View>
      <View style={styles.button12}>
        <TouchableOpacity style={styles.button1}>
          <AntDesign style={styles.play} name="playcircleo" size={50} color="white" />
          <Text style={styles.button1Text}>Quick Start Preset Project</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button2}
          onPress={() => {
            navigation.navigate('TagMainScreen');
          }}
        >
          <Entypo style={styles.plus} name="plus" size={50} color="#EC1A66" />
          <Text style={styles.button2Text}>New Project</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.button34}>
        <TouchableOpacity style={styles.button3}>
          <View style={styles.button3Icon}>
            <FontAwesome style={styles.chart} name="bar-chart" size={40} color="#EC1A66" />
            <AntDesign style={styles.share} name="sharealt" size={40} color="#EC1A66" />
          </View>
          <Text style={styles.button3Text}>Logs / Share</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button4}
          onPress={() => {
            navigation.navigate('SettingScreen');
          }}
        >
          <FontAwesome style={styles.gear} name="gear" size={50} color="white" />
          <Text style={styles.button4Text}>Settings</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <View style={styles.footerLogo}>
          <Text style={styles.logo}>□</Text>
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
    marginVertical: 20,
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
