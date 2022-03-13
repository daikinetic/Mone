import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AppBar(props) {
  const { name } = props;
  return (
    <View style={styles.appbar}>
      <View style={styles.appbarInner}>
        <Text style={styles.appbarLogo}>{name}</Text>
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
    fontSize: 32,
    color: '#ffffff',
    fontWeight: 'bold',
  },
});
