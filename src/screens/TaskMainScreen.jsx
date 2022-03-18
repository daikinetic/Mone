import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

import { Feather } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';
import { borderColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

export default function TaskMainScreen () {
    return (
        <View style={styles.container}>
            <View style={styles.whiteMargin}>
            </View>
            <Image style={styles.backgroundImage} source={require("../static/Rectangle.png")} />

            <View style={styles.centerBox}>
                <Text style={styles.taskText}>今日の服を決める</Text>
            </View>
            <View style={styles.leftBar}>
                <View style={styles.barL}></View>
            </View>
            <View style={styles.barCircle}>
            </View>
            <View style={styles.rightBar}>
                <View style={styles.barR}></View>
            </View>
            <View style={styles.flag}>
                <Feather name="flag" size={24} color="#EC1A66" />
            </View>
            <View style={styles.time}>
                <Text style={styles.timeChild}>3</Text>
                <Text style={styles.slash}>／</Text>
                <Text style={styles.timeMother}>10</Text>
            </View>
            <View style={styles.barTriangle}>
                <Entypo name="triangle-up" size={28} color="#EC1A66" />
            </View>
            <View style={styles.bottomArea}>
                <View style={styles.leftArrow}>
                    <AntDesign name="arrowleft" size={42} color="#EC1A66" />
                </View>
                <View style={styles.rightArrow}>
                    <AntDesign name="arrowright" size={42} color="#EC1A66" />
                </View>
                <View style={styles.stopIcon}>
                    <Ionicons name="stop-circle-outline" size={48} color="#EC1A66" />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#cacdc1",
    },
    whiteMargin: {
        backgroundColor: "#FFFFFF",
        width:360,
        height:150,
        position:"absolute",
        top:0,
        left:0
    },
    backgroundImage: {
        width:360,
        height:442,
        position:"absolute",
        bottom:0,
        left:0,
    },
    centerBox :{
        position: "absolute",
        width:250,
        height:60,
        backgroundColor:"#ffffff",
        borderWidth: 1.5,
        borderColor: "#EC1A66",
        borderRadius:20,
        left:55,
        top:225,
        alignItems:"center",
        justifyContent:"center"
    },
    taskText: {
        fontWeight:"bold",
        color: "#EC1A66",
        fontSize: 17,
    },
    bottomArea: {
        backgroundColor: "#ffffff",
        width:275,
        height:80,
        position:"absolute",
        bottom:25,
        left:43,
        borderRadius: 20,
        justifyContent: "center"
    },
    leftArrow: {
        position:"absolute",
        left:30
    },
    rightArrow: {
        position:"absolute",
        right:30
    },
    stopIcon: {
        position:"absolute",
        left:115.5
    },
    leftBar: {
        backgroundColor: "#EC1A66",
        width: 5,
        height:455,
        position: "absolute",
        left:25,
        bottom: 90,
        borderRadius: 5
    },
    barCircle: {
        backgroundColor:"#ffffff",
        width:22,
        height:22,
        borderRadius:11,
        borderWidth:2,
        borderColor:"#EC1A66",
        position:"absolute",
        top:140,
        left:16.5,
    },
    rightBar: {
        backgroundColor: "#ACB3BF",
        width: 5,
        height:425,
        position: "absolute",
        right:25,
        bottom: 90,
        borderRadius: 5,
    },
    flag: {
        position: "absolute",
        width:25,
        height:25,
        right:13,
        top: 28
    },
    barTriangle: {
        width:25,
        height:25,
        position: "absolute",
        right:16.5,
        bottom:235
    },
    time: {
        width: 35,
        height: 23,
        position: "absolute",
        top:53.5,
        right:10,
        flexDirection:"row",
        padding:0
    },
    timeChild: {
        color:"#EC1A66",
        position:"absolute",
        top:-4,
        left:5,
        fontWeight:"bold"
    },
    slash: {
        color:"#EC1A66",
        position:"absolute",
        fontSize:18,
        top:-1,
        left:5,
    },
    timeMother: {
        color:"#EC1A66",
        position:"absolute",
        bottom:-1,
        right:3,
        fontWeight:"bold"
    },


})