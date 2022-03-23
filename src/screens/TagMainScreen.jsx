import React, { useState, useEffect }from "react";
import { View, StyleSheet, Text, ScrollView, TouchableOpacity, Alert } from "react-native";
import firebase from "firebase";

import DefaultTag from "../components/DefaultTag";
import TagHeader from "../components/TagHeader";
import HomeButton from "../components/HomeButton";
import EditButton from "../components/EditButton";
import ResumeButton from "../components/ResumeButton";

import { Feather } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

export default function TagMainScreen(props) {
    const { style, onPress, navigation } = props;
    const [memos, setMemos] = useState ([]);
    const [headers, setHeaders] = useState ([]);
    // let memoData = 0;
    // let timeAllConst = 0;

    useEffect(() => {
        const db = firebase.firestore();
        const { currentUser } = firebase.auth();
        let unsubscribe = () => {};
        // let timeAll = 0; 
        if (currentUser) {
            const ref = db.collection(`users/${currentUser.uid}/memos`).orderBy('updatedAt', 'asc')
            
            unsubscribe = ref.onSnapshot (( snapshot ) => {
                const userMemos = [];
                snapshot.forEach((doc) => {
                    console.log(doc.id, doc.data());
                    const data = doc.data();
                    userMemos.push({
                        id: doc.id,
                        Title: data.Title,
                        Time: data.Time,
                    });
                });
                /* timeAllConst = userMemos[0].Time;
                
                memoData.forEach((doc) => {
                    timeAll += Number(doc.Time);
                });
                */
                setMemos(userMemos);
            }, (error) => {
                console.log(error);
                Alert.alert('データの読み込みに失敗しました。');
            });
        }
        return unsubscribe;
    }, []);

    useEffect(() => {
        const db = firebase.firestore();
        const { currentUser } = firebase.auth();
        let unsubscribe = () => {};
        if (currentUser) {
            const ref = db.collection(`users/${currentUser.uid}/headers`)

            unsubscribe = ref.onSnapshot(( snapshot ) => {
                const userHeaders = [];
                snapshot.forEach((doc) => {
                    console.log(doc.id, doc.data());
                    const data = doc.data();
                    userHeaders.push({
                        Header: data.Header,
                    });
                });
                setHeaders(userHeaders);
            }, (error) => {
                console.log(error);
                Alert.alert('データの読み込みに失敗しました。');
            });
        }
        return unsubscribe;
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.tagArea}>
                <TagHeader 
                    headers={headers}
                    memos={memos}
                    //timeAll={timeAllConst}
                />
                <View style={styles.tagBody}>   
                    <DefaultTag memos={memos} />
                </View>
            </View>
            <View style={styles.tagFooter}>
                <HomeButton
                    onPress={() => { navigation.navigate("HomeScreen");} }
                />
                <EditButton 
                    onPress={() => { navigation.navigate("TagMakingScreen"); }}
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
    editButton: {
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
        bottom:-2
    },
})
