import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default function TagHeader() {
    return (
        <View style={styles.tagHeader}>
            <View style={styles.tagTheme}>
                <Text style={styles.themeText}>my first rutine</Text>
            </View>
            <View style={styles.tagTimeAllContainer}>
                <View style={styles.tagTimeAll}>
                    <Text style={styles.tagTimeAllText}>120</Text>
                </View>
                <View style={styles.tagTimeAllMin}>
                    <Text style={styles.tagTimeAllMinText}>min</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create ({
    tagHeader: {
        flexDirection: "row",
    },
    tagTheme: {
        paddingVertical:10,
        paddingHorizontal: 15,
        borderWidth: 2,
        borderRadius: 20,
        borderColor: '#ffffff',
        backgroundColor: '#EC1A66',
        alignItems: "center",
        justifyContent: "center",
        width: 265,
        height: 70,
    },
    themeText: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: "bold"
    },
    tagTimeAllContainer: {
        paddingTop: 10,
        paddingLeft: 14,
        width: 78,
    },
    tagTimeAll: {
        textAlign: 'right',
        paddingLeft:10,
        justifyContent: "center",
    },
    tagTimeAllText: {
        color: '#EC1A66',
        fontSize: 30,
        textAlign: "center",
        fontWeight: "bold",
        height:32
    },
    tagTimeAllMin:{
        
    },
    tagTimeAllMinText: {
        color: "#ffffff",
        fontSize: 17,
        fontWeight: "bold",
        textAlign: 'right',
    },    
})