import React, { useState } from "react";
import {
    View, StyleSheet, Text, TextInput, ScrollView, TouchableOpacity, Alert
} from "react-native";
import { shape, string } from "prop-types";
import firebase from 'firebase';

import { Entypo } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import { useEffect } from "react/cjs/react.production.min";

export default function TagMakingScreen ( props ) {
    const { navigation } = props;
    const [title, setTitle] = useState('');
    const [time, setTime] = useState('');

    function hundlePress () {
        const { currentUser } = firebase.auth();
        if (currentUser) {
            const db = firebase.firestore ();
            const ref = db.collection(`users/${currentUser.uid}/memos`);
            ref.add({
                Title: title,
                Time: time,
                updatedAt: new Date(),
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
            <View style={styles.tagItemPlace}>
                <View style={styles.tagItem}>
                    <View style={styles.tagTitle}>
                        <TextInput 
                            style={styles.tagTitleText}
                            value={title}
                            onChangeText={(text) => { setTitle(text); }}
                            placeholder="▶ Tag Title "
                            numberOfLines={1}
                        />
                    </View>
                </View>
                <View style={styles.tagItem}>
                    <View style={styles.tagTimes}> 
                        <View style={styles.tagTime}>
                            <TextInput 
                                style={styles.tagTimeText}
                                value={time}
                                onChangeText={(text) => { setTime(text); }}
                                placeholder="xx"
                            />
                        </View>   
                        <View style={styles.tagMin}>   
                            <Text style={styles.tagMinText}>min</Text>
                        </View>
                    </View>
                </View>
            </View>
            <TouchableOpacity
                style={styles.checkButton}
                onPress={ hundlePress }
            >
                <Feather name="check" size={55} color="#ec1a66" />
            </TouchableOpacity>
        </View>
        
    );
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    tagItemPlace:{
        height: 87,
        width: "97.5%",
        position:"absolute",
        top: "30%"
    },
    tagItem: {
        flexDirection: "row",
        height: "69%",
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
    checkButton: {
        position: "absolute",
        right:"42%",
        bottom: "10%",
    },
})