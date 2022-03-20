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
        justifyContent:"center",
        height: 70,
    },
    tagTheme: {
        borderWidth: 2,
        borderRadius: 20,
        borderColor: '#ffffff',
        backgroundColor: '#EC1A66',
        alignItems: "center",
        justifyContent: "center",
        width: "77%",
        height: "100%",
    },
    themeText: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: "bold"
    },
    tagTimeAllContainer: {
        paddingTop: "3%",
        paddingLeft: "2%",
        width: "23%",
        justifyContent:"center"
    },
    tagTimeAll: {
        textAlign: 'right',
        paddingLeft:"14%",
        justifyContent: "center",
    },
    tagTimeAllText: {
        color: '#EC1A66',
        fontSize: 28,
        textAlign: "center",
        fontWeight: "bold",
        height: 30
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