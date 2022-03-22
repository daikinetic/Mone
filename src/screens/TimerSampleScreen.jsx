import React, { useEffect, useState, useRef } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, ImageBackground,
} from 'react-native';
import Slider from '@react-native-community/slider';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

// import SliderComponent from '../components/SliderComponent';

export default function TimerSampleScreen() {
  const [count, setCount] = useState(0);
  const [icon, setIcon] = useState('pause');

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
    setCount(0);
  }
  // console.log(count);
  if (count >= 100) {
    stop();
  }

  return (
    <View style={styles.container}>
      <View style={styles.topMargin}></View>
      <View style={styles.midMargin(count)}></View>
      <ImageBackground source={require('../static/Rectangle.png')} style={styles.image}>
      </ImageBackground>
      <View style={styles.tag}>
        <Text style={styles.tagTitle}>今日の服を決める</Text>
      </View>
      <View style={styles.timer}>
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
      </View>
      <View style={styles.controller}>
        <View style={styles.controllerInner}>
          <TouchableOpacity>
            <AntDesign name="arrowleft" size={35} color="#EC1A66" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              if (intervalRef.current !== null) {
                stop();
                setIcon('caretright');
              } else {
                start();
                setIcon('pause');
              }
            }}
          >
            <AntDesign name={icon} size={35} color="#EC1A66" />
          </TouchableOpacity>
          <TouchableOpacity>
            <AntDesign name="arrowright" size={35} color="#EC1A66" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.barContainer}>
        <View>
          <FontAwesome5 name="flag-checkered" size={24} color="black" />
          <Text>3/10</Text>
        </View>
        <View style={styles.maxTrack}>
          <AntDesign style={styles.triangle} name="caretup" size={20} color="black" />
          <View style={styles.minTrack(count)}></View>
        </View>
      </View>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={100}
        minimunTrackTintColor="#EC1A66"
        maximumTrackTintColor="#EC1A66"
        thumbTintColor='#EC1A66'
        value={count}
        onValueChange={(value) => {setCount(value);}}
      />
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
  },
  midMargin: (count) => ({
    backgroundColor: '#ffffff',
    zIndex: 10,
    height: 500*(1-count*0.01),
    // height: `${80*(1-count*0.01)-2}%`,
  }),
  image: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  tag: {
    position: 'absolute',
    zIndex: 15,
    backgroundColor: '#ffffff',
    borderColor: '#EC1A66',
    borderWidth: 2,
    borderRadius: 10,
    top: '46%',
    bottom: '46%',
    left: '20%',
    right: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tagTitle: {
    color: '#EC1A66',
    fontSize: 15,
    fontWeight: 'bold',
  },
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
  barContainer: {
    backgroundColor: 'pink',
    position: 'absolute',
    zIndex: 15,
    left: '10%',
    top: 70,
    height: 500,
    width: 50,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  maxTrack: {
    backgroundColor: '#EC1A66',
    // position: 'absolute',
    // zIndex: 15,
    // left: '10%',
    top: 70,
    height: 430,
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
    backgroundColor: 'green',
    width: 20,
    height: 15,
  },
  minTrack: (count) => ({
    backgroundColor: 'blue',
    height: `${count}%`,
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
    // left: '22%',
    width: 530,
    height: 40,
    // height: '100%',
    // width: '100%',
  },
});
