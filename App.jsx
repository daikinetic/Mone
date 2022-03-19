import React from "react";
import { View, StyleSheet } from "react-native";

import TagMainScreen from "./src/screens/TagMainScreen";
import TagEditScreen from "./src/screens/TagEditScreen";
import TagOptionScreen from "./src/screens/TagOptionScreen";
import TagPastScreen from "./src/screens/TagPastScreen";
import TaskMainScreen from "./src/screens/TaskMainScreen";

export default function App () {
    return (
        <View style={styles.container}>
            <TagPastScreen />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
});