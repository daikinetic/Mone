import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default function DefaultTag() {
    return (
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
    );
}

const styles = StyleSheet.create({
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
})