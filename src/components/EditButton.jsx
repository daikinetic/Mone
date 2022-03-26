import React from "react";
import { View, StyleSheet, Text, ScrollView, TouchableOpacity } from "react-native";

import DefaultTag from "../components/DefaultTag";
import TagHeader from "../components/TagHeader";
import HomeButton from "../components/HomeButton";

import { Feather } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

export default function EditButton (props) {
    const { style, onPress, navigation } = props;
    return (
        <TouchableOpacity
            style={styles.editButton}
            onPress={ onPress }
        >
            <MaterialCommunityIcons name="pencil" size={32} color="#EC1A66" />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    editButton: {
        position: "absolute",
        justifyContent:"center",
        right:"17%",
    },
})