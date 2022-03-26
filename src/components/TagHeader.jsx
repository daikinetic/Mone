import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import firebase from 'firebase';

export default function TagHeader( props ) {
    const { onPress, headers, memos } = props;
    const navigation = useNavigation();
    const [header, setHeader] = useState('');
    let timeAll = 0;
    let theme = '';
    memos.forEach((doc) => {
        timeAll += Number(doc.Time);
    });
    headers.forEach((doc) => {
        theme = doc.Header;
    });

    return (

        <TouchableOpacity
            style={styles.tagHeader}
            onPress={() => { navigation.navigate('TagTitleEditScreen', { id: headers.id }); }}
        >
            <View style={styles.tagTheme}>
                <TextInput
                    style={styles.themeText}
                    value={theme}
                    onChangeText={(text) => { setHeader(text); }}
                    placeholder="▶ Routine Name"
                />
            </View>
            <View style={styles.tagTimeAllContainer}>
                <View style={styles.tagTimeAll}>
                    <Text style={styles.tagTimeAllText}>{timeAll}</Text>
                </View>
                <View style={styles.tagTimeAllMin}>
                    <Text style={styles.tagTimeAllMinText}>min</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create ({
    tagHeader: {
        flexDirection: "row",
        justifyContent:"center",
        height: 65,
        marginRight:8
    },
    tagTheme: {
        borderWidth: 1,
        borderRadius: 20,
        borderColor: '#ffffff',
        backgroundColor: '#EC1A66',
        alignItems: "center",
        justifyContent: "center",
        width: "78%",
        height: "100%",
    },
    themeText: {
        color: '#ffffff',
        fontSize: 16.5,
        fontWeight: "bold"
    },
    tagTimeAllContainer: {
        paddingTop: "3%",
        paddingLeft: "1%",
        width: "22%",
        justifyContent:"center"
    },
    tagTimeAll: {
        textAlign: 'right',
        paddingLeft:"14%",
        justifyContent: "center",
    },
    tagTimeAllText: {
        color: '#EC1A66',
        fontSize: 24,
        textAlign: "center",
        fontWeight: "bold",
        height: 26
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