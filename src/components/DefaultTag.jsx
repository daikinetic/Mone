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
        height: "8.7%",
        marginRight: "5.5%",
        marginBottom: 25,
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
})