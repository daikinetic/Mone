import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { borderBottomColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

import { Entypo } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 

export default function DefaultTag() {
    return (
        <View style={styles.tagItemPlace}>
            <View style={styles.tagItem}>
                <View style={styles.tagTitle}>
                    <Text style={styles.tagTitleText}>今日の服を決める</Text>
                </View>
                <View style={styles.tagTimes}> 
                    <View style={styles.tagTime}>
                        <Text style={styles.tagTimeText}>12</Text>
                    </View>   
                    <View style={styles.tagMin}>   
                        <Text style={styles.tagMinText}>min</Text>
                    </View>
                </View>
            </View>
            <View style={styles.triangle}>
                <Entypo name="triangle-down" size={28} color="#EC1A66" />
            </View>
            <View style={styles.plusBotton}>
                <Feather name="plus" size={42} color="white" />
            </View>
        </View>
        
    );
}

const styles = StyleSheet.create({
    tagItemPlace:{
        height: "12.7%",
    },
    tagItem: {
        flexDirection: "row",
        height: "69%",
        marginRight: "5.5%",
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
        width: "78%",
        alignItems: "center"
    },
    tagTitleText: {
        color: "#EC1A66",
        fontWeight: "bold",
        fontSize: 17,
    },
    tagTimes: {
        width:"15.5%",
        height: "86%",
    },
    tagTime: {
        width:"73%",
        height: "58%",
        alignItems:'center',
        marginBottom: 0,
    },
    tagTimeText: {
        color: "#EC1A66",
        fontSize: 24,
        fontWeight: "bold",
        lineHeight: 32
    },
    tagMin: {
        alignItems:"flex-end"
    },
    tagMinText: {
        color: "#ec1a66",
        fontSize: 17.5,
        fontWeight: "bold",
        lineHeight: 18
    },
    triangle: {
        position: "absolute",
        bottom: -1,
        left: "35%"
    },
    plusBotton: {
        position: "absolute",
        bottom: -5,
        right:-15
    },
})