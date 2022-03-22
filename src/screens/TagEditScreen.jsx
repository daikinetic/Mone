import React, { useState } from "react";
import {
    View, StyleSheet, Text, ScrollView, TouchableOpacity, Alert
} from "react-native";
import { shape, string } from "prop-types";
import firebase from 'firebase';

import DefaultTag from "../components/DefaultTag";
import TagHeader from "../components/TagHeader";
import HomeButton from "../components/HomeButton";
import CheckButton from "../components/CheckButton";
import ResumeButton from "../components/ResumeButton";

import { Feather } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 

export default function TagEditScreen(props) {
    const { style, onPress, navigation } = props;
    const { id, bodyText } = props;
    //const [body, setBody] = useState(bodyText);
    const body = 'あああ';

    function hundlePress () {
        const { currentUser } = firebase.auth();
        if (currentUser) {
            const db = firebase.firestore ();
            const ref = db.collection(`users/${currentUser.uid}/memos`).doc(id);
            ref.set({
                bodyText: body,
            })
                .then(() => {
                    navigation.navigate("TagMainScreen");
                })
                .catch((error) => {
                    Alert.alert(error.code);
                });
        }
    }
    
    return (
        <View style={styles.container}>
            <View style={styles.tagArea}>
                <TagHeader />
                <ScrollView style={styles.tagBody}>
                    <DefaultTag />
                        {/*
                        <View style={styles.tagAdditionIcon}>
                            <Feather name="plus" size={32} color="white" />
                        </View>
                        */}
                    <DefaultTag />
                    <DefaultTag />
                    <DefaultTag />
                    <DefaultTag />
                    <DefaultTag />
                    <DefaultTag />
                    <DefaultTag />
                    <DefaultTag />
                    <DefaultTag />
                    <DefaultTag />
                    <DefaultTag />
                    <DefaultTag />
                </ScrollView>
            </View>
            <View style={styles.tagFooter}>
                <HomeButton
                    onPress={() => { navigation.navigate("HomeScreen");} }
                />
                <CheckButton
                    onPress={ hundlePress }
                />
            </View>
            <ResumeButton
                onPress= { () => { navigation.navigate("TimerSampleScreen"); }} 
            />
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
        padding: "4.5%",
        height: "88%",
    },
    tagBody: {
        height: "115%",
        marginTop: "5.7%",
    },
    tagFooter: {
        height: "12%",
        backgroundColor: "#EC1A66",
        justifyContent:"center",
    },
    homeButton: {
        position: "absolute",
        justifyContent:"center",
        left:"15%",
    },
    checkButton: {
        position: "absolute",
        justifyContent:"center",
        right:"15%",
    },
    resumeButton: {
        width:"100%",
        height: "10%",
        position: "absolute",
        bottom: "8%",
        justifyContent:"center",
        alignItems: "center"
    },
    whiteCircle: {
        width: 75,
        height: 75,
        backgroundColor: "#ffffff",
        borderRadius: 37.5,
        elevation: 1.5,
        position: "absolute",
        bottom: 0,
        marginHorizontal: "auto"
    },
    redCircle: {
        width: 65,
        height: 65,
        backgroundColor: "#EC1A66",
        borderRadius: 32.5,
        elevation: 1.6,
        position: "absolute",
        bottom: 5,
        marginHorizontal: "auto"
    },
    rightTriangle: {
        elevation:3,
        position: "absolute",
        bottom:-3
    },
})