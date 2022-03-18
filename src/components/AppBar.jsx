import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function AppBar(props) {
  const { name } = props;
  return (
    <View style={styles.appbar}>
      <View style={styles.appbarInner}>
        <FontAwesome name={name} style={styles.appbarLogo} size={32} color="white" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appbar: {
    width: '100%',
    height: 84,
    backgroundColor: '#EC1A66',
    justifyContent: 'center',
  },
  appbarInner: {
    alignItems: 'center',
  },
  appbarLogo: {
    marginTop: 8,
    fontWeight: 'bold',
  },
});
