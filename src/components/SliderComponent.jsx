import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';

export default function SliderComponent(props) {
  const { style, time } = props;
  return (
    <View style={[styles.container, style]}>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={100}
        minimunTrackTintColor="#EC1A66"
        maximumTrackTintColor="#000000"
        thumbTintColor='#EC1A66'
        value={time}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // width: 30,
    transform:[{rotate: "-90deg"}],
  },
  slider: {
    width: 530,
    // height: '100%',
  },
});
