import React from "react";
import { View, StyleSheet, Text, ScrollView, TouchableOpacity } from "react-native";

import DefaultTag from "../components/DefaultTag";
import TagHeader from "../components/TagHeader";
import HomeButton from "../components/HomeButton";
import EditButton from "../components/EditButton";

import { Feather } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

export default function ResumeButton (props) {
    const { style, onPress } = props;
    return (
        <TouchableOpacity
            style={styles.resumeButton}
            onPress = { onPress }
        >
            <View style={styles.whiteCircle}>
            </View>
            <View style={styles.redCircle}>                
            </View>

            <View style={styles.rightTriangle}>
                <Entypo name="triangle-right" size={45} color="white" />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create ({
    resumeButton: {
        width:"100%",
        height: "6%",
        position: "absolute",
        bottom: "5%",
        justifyContent:"center",
        alignItems: "center",
        elevation: 50
    },
    whiteCircle: {
        width: 58,
        height: 58,
        backgroundColor: "rgba(255,255,255,0.8)",
        borderRadius: 37.5,
        elevation: 1.5,
        position: "absolute",
        bottom: 0,
        marginHorizontal: "auto"
    },
    redCircle: {
        width: 48,
        height: 48,
        backgroundColor: "#EC1A66",
        borderRadius: 32.5,
        elevation: 1.6,
        position: "absolute",
        bottom: 5,
        marginHorizontal: "auto"
    },
    rightTriangle: {
        elevation:3,
        position: "absolute",
        bottom:5.5
    },
})