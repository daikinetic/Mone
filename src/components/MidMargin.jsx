import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function MidMargin (props) {
  const { memos, index, count } = props;
  let taskList = [];
  memos.forEach((doc) => {
      taskList.push(doc.Time)
  });
  let height = 0;
  if (taskList[0] > 0) {
      height = 500*(1-count/(taskList[index]*60));
  }
  return (
    <View style={styles.midMargin(height)}>
        {/* <Text>{taskList[index]} min</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
    // midMargin: (count, time) => ({
    //     backgroundColor: '#ffffff',
    //     zIndex: 10,
    //     height: 500*(1-count/(time*60)),
    //     // height: `${80*(1-count*0.01)-2}%`,
    // }),
    midMargin: (h) => ({
        backgroundColor: '#ffffff',
        zIndex: 10,
        height: h,
        alignItems: 'flex-start',
        // height: `${80*(1-count*0.01)-2}%`,
    }),
});
