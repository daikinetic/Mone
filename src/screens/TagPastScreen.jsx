import React from "react";
import { View, StyleSheet, Text } from "react-native";

import DefaultTag from "../components/DefaultTag";
import TagHeader from "../components/TagHeader";

import { Feather } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 

export default function TagPastScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <View style={styles.tagHeader}>
                    <View style={styles.tagTheme}>
                        <Text style={styles.tagThemeText}>my first rutine</Text>
                    </View>
                    <View style={styles.tagTimeAll}>
                        <Text style={styles.tagTimeAllText}>120 min</Text>
                    </View>
                </View>
                <View style={styles.tagItem}>
                    <View style={styles.tagTitle}>
                        <Text style={styles.tagTitleText}>今日の服を決める</Text>
                    </View>
                    <View style={styles.tagTimes}> 
                        <View style={styles.tagTime}>
                            <Text style={styles.tagTimeText}>12</Text>
                        </View>
                    </View>   
                    <View style={styles.tagMin}>   
                        <Text style={styles.tagMinText}>min</Text>
                    </View>
                </View>
            </View>
            <View style={styles.rightContainer}>
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
    tagItem: {
        flexDirection: "row",
        height: 60,
        marginRight: 20,
        marginBottom: 25,
        paddingVertical: 8,
        paddingLeft: 10,
        paddingRight: 15,
        borderWidth: 2.3,
        borderRadius: 20,
        borderColor: "#EC1A66",
        backgroundColor: "#ffffff",
        alignItems:"center",
        justifyContent:"center"
    },
    tagTitle: {
        width: 250,
        alignItems: "center"
    },
    tagTitleText: {
        color: "#EC1A66",
        fontWeight: "bold",
        fontSize: 17,
    },
    tagTimes: {
        width:50,
        height: 50,
    },
    tagTime: {
        width:30,
        height: 28,
        alignItems:'center',
        marginBottom: 0,
    },
    tagTimeText: {
        color: "#EC1A66",
        fontSize: 26,
        fontWeight: "bold",
        lineHeight: 34
    },
    tagMin: {
        alignItems:"flex-end"
    },
    tagMinText: {
        color: "#ec1a66",
        fontSize: 18,
        fontWeight: "bold",
        lineHeight: 18
    },    
    tagBody: {
        height: 565,
        marginTop: 18,
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