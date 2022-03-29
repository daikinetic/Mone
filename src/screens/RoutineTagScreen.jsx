import React, { useState, useEffect } from 'react';
import {
    View, StyleSheet, TouchableOpacity, Text, TextInput, Alert
} from 'react-native';

import firebase from 'firebase';


import HomeButton from '../components/HomeButton';
//Making に飛ばす用のボタンコンポネント
import EditButton from '../components/EditButton';
//import FlatList を返すコンポネント (消去用のボタン含む)
//import DefaultRoutineTag from '';
import DefaultRoutineTag from '../components/DefaultRoutineTag';

import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


export default function RoutineTagScreen (props) {
    const { navigation } = props;
    const [headers, setHeaders] = useState([]);

    useEffect(() => {
        const db = firebase.firestore();
        const { currentUser } = firebase.auth();
        let unsubscribe = () => {};
        if ( currentUser ) {
            const ref = db.collection(`users/${currentUser.uid}/headers`).orderBy('createdAt', 'asc')
            unsubscribe = ref.onSnapshot((snapshot) => {
                const userHeaders = [];
                snapshot.forEach((doc) => {
                    // console.log(doc.id, doc.data());
                    const data = doc.data();
                    userHeaders.push({
                        id: doc.id,
                        Headers: data.Header,
                    });
                });
                setHeaders(userHeaders);
            }, (error) => {
                // console.log(error);
                Alert.alert('データの読み込みに失敗しました');
            });
        }
        return unsubscribe;
    }, []);


    return (
        <View style={styles.container}>
            <View style={styles.routineTagArea}>
                <DefaultRoutineTag headers={headers}/>
            </View>

            <View style={styles.routineTagFooter}>
                <HomeButton
                    onPress={() => { navigation.navigate("HomeScreen");} }
                />
                <EditButton
                    onPress={() => { navigation.navigate("RoutineTagMakingScreen"); }}
                />
            </View>
        </View>
    );
}

const styles= StyleSheet.create({
    container: {
        flex:1,
    },
    routineTagArea: {
        margin: 1,
        padding: "4.5%",
        paddingVertical: "6%",
        height: "91.5%",
    },
    routineTagPlace: {
        height: 95,
        width: "97.5%",
    },
    routineTag: {
        borderWidth: 1,
        borderRadius: 20,
        padding:0,
        borderColor: '#ffffff',
        backgroundColor: '#EC1A66',
        alignItems: "center",
        justifyContent: "center",
        width: "90%",
        height: "73%",
    },
    routineTagText:{
        color: '#ffffff',
        fontSize: 16.5,
        fontWeight: "bold",
    },
    plusButton: {
        position: "absolute",
        bottom: -2.5,
        right:-12
    },
    routineTagFooter: {
        height: "8.5%",
        backgroundColor: "#ffffff",
        justifyContent:"center",
        shadowColor: "#000000",
        elevation:50,
        borderTopWidth: 3,
        borderColor: "rgba(0,0,0,0.05)"
    },
})
