import React, { useState, useEffect } from "react";
import { 
    View, StyleSheet, Text, TextInput, TouchableOpacity, Alert, FlatList,
} from "react-native";
import { useNavigation } from '@react-navigation/native';

import firebase from 'firebase';

import { Entypo } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 

export default function DefaultRoutineTag (props) {
    const { headers, id } = props;
    const navigation = useNavigation();

    function deleteHeader(id) {
        const { currentUser } = firebase.auth();
        if (currentUser) {
            const db = firebase.firestore();
            const ref = db.collection(`users/${currentUser.uid}/headers`).doc(id);
            Alert.alert('ヘッダーを削除します', 'よろしいですか？',[
                {
                    text: 'キャンセル',
                    onPress: () => {},
                },
                {
                    text: '削除する',
                    style: 'destructive',
                    onPress: () => {
                        ref.delete().catch(() => {
                            Alert.alert('削除に失敗しました');
                        });
                    },
                },
            ]);
        }
    }

    function renderItem({ item }) {
        return (
            <View style={styles.routineTagPlace}>
                <TouchableOpacity 
                    style={styles.routineTag}
                    onPress={() => { navigation.navigate('TagMainScreen', { id:item.id, headers:item.Headers}) }}
                >
                    <TextInput
                        style={styles.routineTagText}
                        value={item.Headers}
                        placeholder="▶ Routine Name "
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.plusButton}
                    onPress={() => { deleteHeader(item.id); }}
                >
                    <Feather name="plus" size={38} color="#a9a9a9" />
                </TouchableOpacity>
            </View>
        );
    }
    return (
        <View style={styles.container}>
            <FlatList
                data={headers}
                renderItem={renderItem}
                keyExtractor={(item) => item.id} 
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
    
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