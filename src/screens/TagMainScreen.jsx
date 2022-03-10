import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default function TagMainScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.tagArea}>
                <View style={styles.tagHeader}>
                    <View style={styles.tagTheme}>
                        <Text style={styles.themeText}>my first rutine</Text>
                    </View>
                    <View style={styles.tagTimeAll}>
                        <Text style={styles.tagTimeAllText}>120min</Text>
                    </View>
                </View>
                <View style={styles.tagBody}>
                    <View style={styles.tagItem}>
                        <View style={styles.tagTitle}>

                        </View>
                        <View style={styles.tagTime}>

                        </View>
                    </View>
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
                <View style={style.redCircle}>

                </View>
                <View style={style.rightTriangle}>

                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    tagArea: {
        margin: 8,
    },
    tagHeader: {
        flex: 0,
    },
    tagTheme: {
        paddingVertical:10,
        paddingHorizontal: 15,
        borderRadius: 10,
        borderColor: '#ffffff',
        backgroundColor: 'red'
    },
    themeText: {
        color: '#ffffff',
        fontSize: 14,
    },
    tagTimeAll: {
        textAlign: 'right',
        paddingLeft:10,
    },
    tagTimeAllText: {
        color: 'red',
        fontSize: 14,
    },
    
})