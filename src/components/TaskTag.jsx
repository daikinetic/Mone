import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function TaskTag (props) {
    const { memos, index } = props;
    let taskList = [];
    memos.forEach((doc) => {
        taskList.push(doc.Title)
    });
    return (
        <View style={styles.tag}>
            <Text style={styles.tagTitle}>{taskList[{index}]}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    tag: {
        position: 'absolute',
        zIndex: 15,
        backgroundColor: '#ffffff',
        borderColor: '#EC1A66',
        borderWidth: 2,
        borderRadius: 10,
        top: '46%',
        bottom: '46%',
        left: '20%',
        right: '20%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    tagTitle: {
        color: '#EC1A66',
        fontSize: 15,
        fontWeight: 'bold',
    },
});
