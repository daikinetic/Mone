import React from "react";
import { View, StyleSheet, Text, ScrollView, TouchableOpacity } from "react-native";

import DefaultTag from "./DefaultTag";
import TagHeader from "./TagHeader";
import HomeButton from "./HomeButton";

import { Feather } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

export default function CheckButton (props) {
    const { style, onPress, navigation } = props;
    return (
        <TouchableOpacity
            style={styles.checkButton}
            onPress={ onPress }
        >
            <Feather name="check" size={55} color="white" />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    checkButton: {
        position: "absolute",
        justifyContent:"center",
        right:"15%",
    },
})