import React from "react";
import { StyleSheet, Text, View } from 'react-native';

import TagMainScreen from "./src/screens/TagMainScreen";
import TagEditScreen from "./src/screens/TagEditScreen";
import TagOptionScreen from "./src/screens/TagOptionScreen";
import TagPastScreen from "./src/screens/TagPastScreen";

export default function App () {
    return (
        <View style={styles.container}>
            <TagPastScreen/>
        </View>
    );  
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff'
    }
  });