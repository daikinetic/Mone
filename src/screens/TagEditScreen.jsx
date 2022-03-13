import React from "react";
import { View, StyleSheet, Text } from "react-native";

import DefaultTag from "../components/DefaultTag";
import TagHeader from "../components/TagHeader";

export default function TagMainScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.tagArea}>
                <TagHeader />
                <View style={styles.tagBody}>
                    <DefaultTag />
                        <Text style={styles.tagAdditionIcon}>+</Text>
                    <DefaultTag />
                    <DefaultTag />
                    <DefaultTag />
                    <DefaultTag />
                    <DefaultTag />
                    <DefaultTag />
                </View>
            </View>
            <View style={styles.tagFooter}>
                <View style={styles.homeButton}>

                </View>
                <View style={styles.editButton}>

                </View>
            </View>
            <View style={styles.resumeButton}>
                <View style={styles.whiteCircle}>

                </View>
                <View style={styles.redCircle}>

                </View>
                <View style={styles.rightTriangle}>

                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#acb3bf',
    },
    tagArea: {
        margin: 1,
        padding: 20,
        height: 650,
    },
    tagBody: {
        height: 565,
        marginTop: 18,
    },
    tagAdditionIcon: {
        color: "#ffffff",
        position:"absolute",
        fontSize: 50,
        right:0,
        top: 30
    },
    tagFooter: {
        height: 85,
        backgroundColor: "#EC1A66",
    },
    whiteCircle: {
        width: 75,
        height: 75,
        backgroundColor: "#ffffff",
        borderRadius: 37.5,
        elevation: 1.5,
        position: "absolute",
        bottom: 40,
        left: 157,
        marginHorizontal: "auto"
    },
    redCircle: {
        width: 65,
        height: 65,
        backgroundColor: "#EC1A66",
        borderRadius: 32.5,
        elevation: 1.6,
        position: "absolute",
        bottom: 45,
        left: 162,
        marginHorizontal: "auto"
    }
})