import React, { useState } from "react";
import {
    View, StyleSheet, Text, TextInput, ScrollView, TouchableOpacity, Alert
} from "react-native";
import { shape, string } from "prop-types";
import firebase from 'firebase';

import { Entypo } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 

export default function TagTitleEditScreen ( props ) {
    const { navigation } = props;
    const [ header, setHeader ] = useState('');

    function hundlePress () {
        const { currentUser } = firebase.auth();
        if (currentUser) {
            const db = firebase.firestore ();
            const ref = db.collection(`users/${currentUser.uid}/headers`);
            ref.add({
                Header: header,
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
            <View style={styles.tagHeader}>
                <View style={styles.tagTheme}>
                    <TextInput
                    style={styles.themeText}
                    value={header}
                    onChangeText={(text) => { setHeader(text); }}
                    placeholder="▶ Routine Name"
                    numberOfLines={1}
                    />
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
    checkButton: {
        position: "absolute",
        right:"42%",
        bottom: "10%",
    },
})