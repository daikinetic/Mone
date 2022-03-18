import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

import { Feather } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 
import { borderColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

export default function TaskMainScreen () {
    return (
        <View style={styles.container}>
            <View style={styles.whiteMargin}>
            </View>
            <Image style={styles.backgroundImage} />

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
                <View style={styles.leftTriangle}>
                    <Entypo name="triangle-left" size={56} color="#EC1A66" />
                </View>
                <View style={styles.rightTriangle}>
                    <Entypo name="triangle-right" size={56} color="#EC1A66" />
                </View>
                <View style={styles.stopIcon}>
                    <FontAwesome5 name="stop-circle" size={40} color="#EC1A66" />
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
    backgroundImage: {
        width:100,
        height:100,
        position:"absolute",
        bottom:0,
        left:0,
    },
    centerBox :{
        position: "absolute",
        width:250,
        height:65,
        backgroundColor:"#ffffff",
        borderWidth: 1.5,
        borderColor: "#EC1A66",
        borderRadius:20,
        left:55,
        top:215,
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
    leftTriangle: {
        position:"absolute",
        left:20
    },
    rightTriangle: {
        position:"absolute",
        right:20
    },
    stopIcon: {
        position:"absolute",
        left:118
    },
    leftBar: {
        backgroundColor: "#EC1A66",
        width: 5,
        height:425,
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
        top: 30
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
        top:55,
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