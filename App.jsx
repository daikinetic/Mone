import React from "react";
import { StyleSheet, Text, View } from 'react-native';

import TagMainScreen from "./src/screens/TagMainScreen";

export default function App () {
    return (
        <View style={styles.container}>
            <TagMainScreen/>
        </View>
    );  
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff'
    }
  });