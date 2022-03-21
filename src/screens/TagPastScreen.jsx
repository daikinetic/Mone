import React from "react";
import { View, StyleSheet, Text, ScrollView, TouchableOpacity } from "react-native";

import DefaultTag from "../components/DefaultTag";
import TagHeader from "../components/TagHeader";
import HomeButton from "../components/HomeButton";
import BackFromPastButton from "../components/BackFromPastButton";

import { AntDesign } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 

export default function TagPastScreen(props) {
    const { onPress, style, navigation } = props;
    return (
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <View style={styles.tagHeader}>
                    <View style={styles.tagThemePlace}>
                        <Text style={styles.tagThemeText}>my first rutine</Text>
                        <View style={styles.tagTimeAll}>
                            <Text style={styles.tagTimeAllNumber}>120</Text>
                            <Text style={styles.tagTimeAllmin}> min</Text>
                        </View>
                    </View>
                </View>
                
                <View style={styles.tagArea}>
                    <View style={styles.tagItemArea}>
                        <View style={styles.tagItem}>
                            <Text style={styles.tagTitleText}>今日の服を決める</Text>
                            <View style={styles.tagTime}>
                                <Text style={styles.tagTimeText}>12</Text>
                                <Text style={styles.tagMinText}> min</Text>
                            </View>
                        </View>
                        
                        <View style={styles.triangle}>
                            <Entypo name="triangle-down" size={28} color="#ec1a66" />
                        </View>
                    </View>
                    <View style={styles.tagItemArea}>
                        <View style={styles.tagItem}>
                            <Text style={styles.tagTitleText}>今日の服を決める</Text>
                            <View style={styles.tagTime}>
                                <Text style={styles.tagTimeText}>12</Text>
                                <Text style={styles.tagMinText}> min</Text>
                            </View>
                        </View>
                        
                        <View style={styles.triangle}>
                            <Entypo name="triangle-down" size={28} color="#ec1a66" />
                        </View>
                    </View>
                    <View style={styles.tagItemArea}>
                        <View style={styles.tagItem}>
                            <Text style={styles.tagTitleText}>今日の服を決める</Text>
                            <View style={styles.tagTime}>
                                <Text style={styles.tagTimeText}>12</Text>
                                <Text style={styles.tagMinText}> min</Text>
                            </View>
                        </View>
                        
                        <View style={styles.triangle}>
                            <Entypo name="triangle-down" size={28} color="#ec1a66" />
                        </View>
                    </View>
                    <View style={styles.tagItemArea}>
                        <View style={styles.tagItem}>
                            <Text style={styles.tagTitleText}>今日の服を決める</Text>
                            <View style={styles.tagTime}>
                                <Text style={styles.tagTimeText}>12</Text>
                                <Text style={styles.tagMinText}> min</Text>
                            </View>
                        </View>
                        
                        <View style={styles.triangle}>
                            <Entypo name="triangle-down" size={28} color="#ec1a66" />
                        </View>
                    </View>
                    <View style={styles.tagItemArea}>
                        <View style={styles.tagItem}>
                            <Text style={styles.tagTitleText}>今日の服を決める</Text>
                            <View style={styles.tagTime}>
                                <Text style={styles.tagTimeText}>12</Text>
                                <Text style={styles.tagMinText}> min</Text>
                            </View>
                        </View>
                        
                        <View style={styles.triangle}>
                            <Entypo name="triangle-down" size={28} color="#ec1a66" />
                        </View>
                    </View>
                    <View style={styles.tagItemArea}>
                        <View style={styles.tagItem}>
                            <Text style={styles.tagTitleText}>今日の服を決める</Text>
                            <View style={styles.tagTime}>
                                <Text style={styles.tagTimeText}>12</Text>
                                <Text style={styles.tagMinText}> min</Text>
                            </View>
                        </View>
                        
                        <View style={styles.triangle}>
                            <Entypo name="triangle-down" size={28} color="#ec1a66" />
                        </View>
                    </View>
                    <View style={styles.tagItemArea}>
                        <View style={styles.tagItem}>
                            <Text style={styles.tagTitleText}>今日の服を決める</Text>
                            <View style={styles.tagTime}>
                                <Text style={styles.tagTimeText}>12</Text>
                                <Text style={styles.tagMinText}> min</Text>
                            </View>
                        </View>
                        
                        <View style={styles.triangle}>
                            <Entypo name="triangle-down" size={28} color="#ec1a66" />
                        </View>
                    </View>
                </View>
            </View>
                

            <View style={styles.rightContainer}>
                <View style={styles.selected}>
                    <Text style={styles.selectedText}>選択中のタグ</Text>
                    <View style={styles.selectedTag}>
                        <Text style={styles.selectedTagText}>今日の服を決める</Text>
                    </View>
                    <BackFromPastButton
                        onPress = { () => { navigation.navigate("TagEditScreen"); }}
                    />
                </View>
                <Text style={styles.pastText}>過去のタグ</Text>
                <ScrollView
                    contentContainerStyle={styles.pastTagArea}
                >
                    <TouchableOpacity style={styles.pastTagPlace}>
                        <Text style={styles.pastTagText}>今日の服を決める</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.pastTagPlace}>
                        <Text style={styles.pastTagText}>今日の服を決める</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.pastTagPlace}>
                        <Text style={styles.pastTagText}>今日の服を決める</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.pastTagPlace}>
                        <Text style={styles.pastTagText}>今日の服を決める</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.pastTagPlace}>
                        <Text style={styles.pastTagText}>今日の服を決める</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.pastTagPlace}>
                        <Text style={styles.pastTagText}>今日の服を決める</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.pastTagPlace}>
                        <Text style={styles.pastTagText}>今日の服を決める</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.pastTagPlace}>
                        <Text style={styles.pastTagText}>今日の服を決める</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.pastTagPlace}>
                        <Text style={styles.pastTagText}>今日の服を決める</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.pastTagPlace}>
                        <Text style={styles.pastTagText}>今日の服を決める</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
            <View style={styles.tagFooter}>
                <HomeButton
                    style={{ position:null, left:null }}
                    onPress={() => { navigation.navigate("HomeScreen")} }
                />
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
        width:"50%",
        height:700,
        backgroundColor: "#acb3bf",
        position: "absolute",
        left: 0,
        top: 0,
        alignItems:"center",
        flexDirection: "column",
        flex:1
    },
    tagHeader: {
        width:175,
        height:105,
        alignItems:"center",
    },
    tagThemePlace: {
        width:160,
        height: 70,
        borderWidth: 2,
        borderColor: "#ffffff",
        borderRadius: 20,
        position: "absolute",
        top:15,
        alignItems:"center",
        flexDirection: "column"
    },
    tagThemeText: {
        color: "#ffffff",
        fontSize:17,
        fontWeight:"bold",
        position: "absolute",
        top:8
    },
    tagTimeAll: {
        width: 140,
        height: 32,
        position: "absolute",
        bottom:5,
        flexDirection: "row",
        alignItems:"center",
        justifyContent: "center"
    },
    tagTimeAllNumber: {
        color: "#ffffff",
        fontSize: 17,
        fontWeight: "bold"
    },
    tagTimeAllmin: {
        color: "#ffffff",
        fontSize: 17,
        fontWeight: "bold"
    },
    tagArea: {
        width:170,
        height:50,
        alignItems: "center",
        flexDirection: "column",
    },
    tagItemArea: {
        width:170,
        height:80,
        alignItems: "center"
    },
    tagItem:{
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "rgba(255,255,255,0.6)",
        width:160,
        height:55,
        borderWidth:2,
        borderColor: "#ec1a66",
        borderRadius: 20,
    },
    tagTitleText: {
        color: "#ec1a66",
        fontSize: 13,
        fontWeight: "bold",
        position: "absolute",
        top:8,
    },
    tagTime: {
        width:120,
        height:22,
        position:"absolute",
        bottom:4,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    tagTimeText: {
        color: "#ec1a66",
        fontSize: 14.5,
        fontWeight: "bold"
    },
    tagMinText: {
        color: "#ec1a66",
        fontSize: 14.5,
        fontWeight: "bold"
    },
    triangle: {
        position: "absolute",
        bottom:-1.5
    },
    rightContainer: {
        flex:1,
        width:"50%",
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
        top:20,
        fontWeight:"bold"
    },
    selectedTag: {
        backgroundColor: "rgba(255,255,255,0.75)",
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
        marginTop: 8,
        fontWeight:"bold"
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
        width: "100%",
        position: "absolute",
        bottom: 0,
        backgroundColor: "#EC1A66",
        alignItems: "center",
        justifyContent: "center"
    },
    homeButton: {

    },
})