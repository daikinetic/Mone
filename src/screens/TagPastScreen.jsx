import React from "react";
import { View, StyleSheet, Text } from "react-native";

import DefaultTag from "../components/DefaultTag";
import TagHeader from "../components/TagHeader";

import { AntDesign } from '@expo/vector-icons'; 
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
                        <Text style={styles.tagTimeAllNumber}>120</Text>
                        <Text style={styles.tagTimeAllmin}>min</Text>
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
                <View style={styles.selected}>
                    <Text style={styles.selectedText}>選択中のタグ</Text>
                    <View style={styles.selectedTag}>
                        <Text style={styles.selectedTagText}>今日の服を決める</Text>
                    </View>
                    <View style={styles.backIconPlace}>
                        <View style={styles.backIcon}>
                            <AntDesign name="back" size={28} color="#ec1a66" />
                        </View>
                    </View>
                </View>
                <Text style={styles.pastText}>過去のタグ</Text>
                <View style={styles.pastTagArea}>
                    <View style={styles.pastTagPlace}>
                        <Text style={styles.pastTagText}>今日の服を決める</Text>
                    </View>
                    <View style={styles.pastTagPlace}>
                        <Text style={styles.pastTagText}>今日の服を決める</Text>
                    </View>
                    <View style={styles.pastTagPlace}>
                        <Text style={styles.pastTagText}>今日の服を決める</Text>
                    </View>
                    <View style={styles.pastTagPlace}>
                        <Text style={styles.pastTagText}>今日の服を決める</Text>
                    </View>
                    <View style={styles.pastTagPlace}>
                        <Text style={styles.pastTagText}>今日の服を決める</Text>
                    </View>
                    <View style={styles.pastTagPlace}>
                        <Text style={styles.pastTagText}>今日の服を決める</Text>
                    </View>
                </View>
            </View>
            <View style={styles.tagFooter}></View>
            <View style={styles.homeButton}>
                <Entypo name="home" size={48} color="white" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#acb3bf',
    },
    leftContainer: {
        width:180,
        height:700,
        backgroundColor: "#acb3bf",
        position: "absolute",
        left: 0,
        top: 0,
        alignItems:"center",
        flexDirection: "column"
    },
    rightContainer: {
        width:180,
        height:700,
        backgroundColor: "#EC1A66",
        position: "absolute",
        right: 0,
        top: 0,
        flexDirection: "column",
        alignItems: "center",
        borderTopLeftRadius: 20,
        borderLeftWidth: 2,
        borderLeftColor: "#ffffff"
    },
    selected: {
        width:160,
        height:180,
        flexDirection: "column",
        alignItems:"center"
    },
    selectedText: {
        color: "#ffffff",
        position: "absolute",
        top:20
    },
    selectedTag: {
        backgroundColor: "#ffffff",
        width:150,
        height:55,
        borderRadius:20,
        position: "absolute",
        top:50,
        alignItems: "center",
        justifyContent: "center",
    },
    selectedTagText: {
        color: "#EC1A66",
        fontWeight: "bold"
    },
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
    pastText: {
        color: "#ffffff",
        marginTop: 8
    },
    pastTagArea: {
        width: 165,
        height: 400,
        alignItems: "center",
        flexDirection: "column",
    },
    pastTagPlace: {
        backgroundColor: "#ffffff",
        width:150,
        height:55,
        borderRadius:20,
        alignItems: "center",
        justifyContent: "center",
        marginTop:12
    },
    pastTagText: {
        color: "#EC1A66",
        fontWeight: "bold"
    },
    tagFooter: {
        height: 85,
        width: 360,
        position: "absolute",
        bottom: 0,
        backgroundColor: "#EC1A66",
    },
    homeButton: {
        position: "absolute",
        left: 156,
        bottom: 17,
    },
})