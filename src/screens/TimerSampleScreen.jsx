import React, { useEffect, useState, useRef } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, ImageBackground, Alert,
} from 'react-native';
// import Slider from '@react-native-community/slider';
import firebase from 'firebase';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

// import SliderComponent from '../components/SliderComponent';
import TaskTag from '../components/TaskTag';
import MidMargin from '../components/MidMargin';

export default function TimerSampleScreen(props) {
  const { navigation, route } = props;
  const { id } = route.params;
  const [count, setCount] = useState(0);
  const [icon, setIcon] = useState('controller-paus');
  const [memos, setMemos] = useState([]);
  const [numerator, setNumerator] = useState(1);

  const intervalRef = useRef(null);
  const start = () => {
    if (intervalRef.current !== null) {
      return;
    }
    intervalRef.current = setInterval(() => {
      setCount(c => c + 0.100);
    }, 100);
  };
  const stop = () => {
    if (intervalRef.current === null) {
      return;
    }
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }
  const reset = () => {
    setCount(250);
  }

  useEffect(() => {
    start();
  }, []);

  useEffect(() => {
    const db = firebase.firestore();
    const { currentUser } = firebase.auth();
    let unsubscribe = () => {};
    if (currentUser) {
      const ref = db.collection(`users/${currentUser.uid}/headers/${id}/memos`).orderBy('createdAt', 'asc');
      unsubscribe = ref.onSnapshot((snapshot) => {
        const userMemos = [];
        snapshot.forEach((doc) => {
          // console.log(doc.id, doc.data());
          const data = doc.data();
          userMemos.push({
            MemoId: doc.id,
            Title: data.Title,
            Time: data.Time,
          });
        });
        setMemos(userMemos);
      }, () => {
        Alert.alert('データの読み込みに失敗しました。');
      });
    }
    return unsubscribe;
  }, []);

  let taskList = [];
  memos.forEach((doc) => {
      taskList.push(doc.Time)
  });

  if (taskList[0] > 0) {
    for (let i = 0; i < memos.length-1; i++) {
      if (i+1 === numerator && count >= taskList[i]*60) {
        setNumerator(c => c + 1);
        reset();
      }
    }
  }

  if (taskList[0] > 0) {
    if (numerator === memos.length && count >= taskList[memos.length-1]*60) {
      stop();
      navigation.navigate('TagMainScreen');
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.topMargin}>
        <Text style={styles.min}>{taskList[numerator-1]} min</Text>
      </View>
      {/* <View style={styles.midMargin(count, taskList[0])}></View> */}
      <MidMargin
        memos={memos}
        index={numerator-1}
        count={count}
      />
      <ImageBackground source={require('../static/Rectangle.png')} style={styles.image}>
      </ImageBackground>
      <TaskTag
        memos={memos}
        index={numerator-1}
      />
      {/* <View style={styles.tag}>
        <Text style={styles.tagTitle}>歯磨き</Text>
      </View> */}
      {/* <View style={styles.timer}>
        <Text>Count={count}</Text>
        <TouchableOpacity style={styles.startButton} onPress={start}>
          <Text>start</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.stopButton} onPress={stop}>
          <Text>stop</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.resetButton} onPress={reset}>
          <Text>reset</Text>
        </TouchableOpacity>
      </View> */}
      <View style={styles.controller}>
        <View style={styles.controllerInner}>
          <TouchableOpacity
            onPress={() => {
              if (numerator > 1) {
                setNumerator(c => c - 1);
                reset();
                start();
              } else {
                navigation.goBack();
              }
            }}
          >
            <AntDesign name="arrowleft" size={35} color="#EC1A66" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              if (intervalRef.current !== null) {
                stop();
                setIcon('controller-play');
              } else {
                start();
                setIcon('controller-paus');
              }
            }}
          >
            <Entypo name={icon} size={35} color="#EC1A66" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              if (numerator < memos.length) {
                setNumerator(c => c + 1);
                reset();
                start();
              } else {
                navigation.goBack();
              }
            }}
          >
            <AntDesign name="arrowright" size={35} color="#EC1A66" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.leftBar}></View>
      <View style={styles.barContainer}>
        <View style={styles.barHeader}>
          <FontAwesome5 name="flag-checkered" size={24} color="#EC1A66" />
          <Text style={styles.ratio}>{numerator}/{memos.length}</Text>
        </View>
        <View style={styles.maxTrack}>
          <AntDesign style={styles.triangle} name="caretup" size={20} color="#acb3bf" />
          <View style={styles.minTrack(numerator, memos.length)}></View>
        </View>
      </View>
      {/* <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={100}
        minimunTrackTintColor="#EC1A66"
        maximumTrackTintColor="#EC1A66"
        thumbTintColor='#EC1A66'
        value={count}
        onValueChange={(value) => {setCount(value);}}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'green',
  },
  topMargin: {
    backgroundColor: '#ffffff',
    height: 70,
    zIndex: 10,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },
  min: {
    color: '#EC1A66',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  // midMargin: (count, time) => ({
  //   backgroundColor: '#ffffff',
  //   zIndex: 10,
  //   height: 500*(1-count/(time*60)),
  //   // height: `${80*(1-count*0.01)-2}%`,
  // }),
  image: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  // tag: {
  //   position: 'absolute',
  //   zIndex: 15,
  //   backgroundColor: '#ffffff',
  //   borderColor: '#EC1A66',
  //   borderWidth: 2,
  //   borderRadius: 10,
  //   top: '46%',
  //   bottom: '46%',
  //   left: '20%',
  //   right: '20%',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // tagTitle: {
  //   color: '#EC1A66',
  //   fontSize: 15,
  //   fontWeight: 'bold',
  // },
  timer: {
    position: 'absolute',
    zIndex: 15,
    top: '20%',
    left: '20%',
    right: '20%',
  },
  controller: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    position: 'absolute',
    zIndex: 15,
    bottom: 10,
    left: '15%',
    right: '15%',
    height: '10%',
    padding: '5%',
    alignItems: 'center',
  },
  controllerInner: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  startButton: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    height: 30,
  },
  stopButton: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    height: 30,
  },
  resetButton: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    height: 30,
  },
  leftBar: {
    position: 'absolute',
    zIndex: 15,
    backgroundColor: '#EC1A66',
    left: '11%',
    top: 70,
    height: 500,
    width: 3,
    borderRadius: 2,
  },
  barContainer: {
    position: 'absolute',
    zIndex: 15,
    right: '4%',
    top: 30,
    height: 540,
    width: 50,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  barHeader: {
    alignItems: 'center',
  },
  ratio: {
    color: '#EC1A66',
    fontWeight: 'bold',
  },
  maxTrack: {
    backgroundColor: 'pink',
    // position: 'absolute',
    // zIndex: 15,
    // left: '10%',
    top: 5,
    height: 480,
    width: 3,
    borderRadius: 5,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  // ball: {
  //   backgroundColor: '#ffffff',
  //   height: 25,
  //   width: 25,
  //   borderWidth: 3,
  //   borderColor: '#EC1A66',
  //   borderRadius: 12.5,
  // },
  triangle: {
    width: 20,
    height: 13,
  },
  minTrack: (numerator, denominator) => ({
    backgroundColor: '#EC1A66',
    height: `${numerator/denominator*100}%`,
    // height: '30%',
    width: '100%',
  }),
  sliderContainer: {
    zIndex: 15,
    backgroundColor: 'blue',
    transform:[{rotate: "-90deg"}],
    position: 'absolute',
    // width: '80%',
    height: '20%',
    width: '100%',
    top: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slider: {
    transform:[{rotate: "-90deg"}],
    // backgroundColor: 'pink',
    position: 'absolute',
    zIndex: 15,
    top: 300,
    left: '22%',
    width: 530,
    height: 40,
    // height: '100%',
    // width: '100%',
  },
});
