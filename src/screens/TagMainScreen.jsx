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
                    <View style={styles.tagTimeAllContainer}>
                        <View style={styles.tagTimeAll}>
                            <Text style={styles.tagTimeAllText}>120</Text>
                        </View>
                        <View style={styles.tagTimeAllMin}>
                            <Text style={styles.tagTimeAllMinText}>min</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.tagBody}>
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
                <View style={styles.redCircle}>

                </View>
                <View style={styles.rightTriangle}>

                </View>
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
    tagBody: {
        height: 565,
        marginTop: 18,
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