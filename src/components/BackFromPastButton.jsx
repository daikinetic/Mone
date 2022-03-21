import React from "react";
import { View, StyleSheet, Text, ScrollView, TouchableOpacity } from "react-native";

import DefaultTag from "../components/DefaultTag";
import TagHeader from "../components/TagHeader";
import HomeButton from "../components/HomeButton";

import { AntDesign } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 

export default function BackFromPastButton (props) {
    const { style, onPress } = props;
    return (
        <TouchableOpacity 
            style={styles.backIconPlace}
            onPress={ onPress }
        >
            <View style={styles.backIcon}>
                <AntDesign name="back" size={28} color="#ec1a66" />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create ({
    backIconPlace: {
        backgroundColor: "#ffffff",
        width: 50,
        height: 50,
        borderRadius: 25,
        position: "absolute",
        top: 123,
        alignItems: "center",
        justifyContent: "center"
    },
})