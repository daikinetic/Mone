import React, { useState } from "react";
import { 
    View, StyleSheet, Text, TextInput, TouchableOpacity, Alert, FlatList,
} from "react-native";
import { borderBottomColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import { useNavigation } from '@react-navigation/native';
import { 
    string, shape, func, instanceOf, arrayOf 
} from "prop-types";
import firebase from 'firebase';

import { Entypo } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 


export default function DefaultTag(props) {
    const { onPress, memos } = props;
    const navigation = useNavigation();

    function deleteMemo(id) {
        const { currentUser } = firebase.auth(); 
        if (currentUser) {
            const db = firebase.firestore();
            const ref = db.collection(`users/${currentUser.uid}/memos`).doc(id);
            Alert.alert('メモを削除します', 'よろしいですか？', [
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
            <View 
                style={styles.tagItemPlace}
            >
                <TouchableOpacity
                    style={styles.tagItem}
                    onPress={() => { navigation.navigate('TagEditSubScreen', { id: item.id, titleText: item.Title, timeText: item.Time }); }}
                >
                    <View style={styles.tagTitle}>
                        <TextInput 
                            style={styles.tagTitleText}
                            value={item.Title}
                            onChangeText={(text) => { setTitle(text); }}
                            placeholder="▶ Tag Title "
                            numberOfLines={1}
                         />
                    </View>
                    <View style={styles.tagTimes}> 
                        <View style={styles.tagTime}>
                            <Text style={styles.tagTimeText}>
                                {item.Time}
                            </Text>
                        </View>   
                        <View style={styles.tagMin}>   
                            <Text style={styles.tagMinText}>min</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <View style={styles.triangle}>
                    <Entypo name="triangle-down" size={28} color="#EC1A66" />
                </View>
                <TouchableOpacity
                    style={styles.plusBotton}
                    onPress={() => { deleteMemo(item.id); }}
                >
                    <Feather name="plus" size={40} color="white" />
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={memos}
                renderItem={renderItem}
                keyExtractor={(item) => item.id} 
            />
        </View>
    );
}



DefaultTag.propTypes = {
    onPress: func,
};

DefaultTag.defaultProps = {
    onPress: null,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tagItemPlace:{
        height: 87,
        width: "97.5%",
    },
    tagItem: {
        flexDirection: "row",
        height: "69%",
        marginRight: "5.5%",
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
        fontSize: 16,
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
        fontSize: 23,
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
    triangle: {
        position: "absolute",
        bottom: -1,
        left: "35%"
    },
    plusBotton: {
        position: "absolute",
        bottom: -4,
        right:-13
    },
})