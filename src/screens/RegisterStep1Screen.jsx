import React, { useState } from 'react';
import {
  View, Text, TextInput, StyleSheet, Alert
} from 'react-native';
import firebase from 'firebase';

import Button from '../components/Button';

export default function RegisterStep1Screen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handlePress() {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const { user } = userCredential;
        console.log(user.uid);
      })
      .catch((error) => {
        console.log(error.code, error.message);
        Alert.alert(error.code);
      });
  }

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.back}>↰</Text>
        <Text style={styles.title}>Register</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={(text) => { setEmail(text); }}
          autoCapitalize="none"
          keyboardType="email-address"
          placeholder="Email Address"
          textContentType="emailAddress"
        />
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={(text) => { setPassword(text); }}
          autoCapitalize="none"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <Button
          label="NEXT"
          onPress={handlePress}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  inner: {
    paddingHorizontal: 16,
    paddingVertical: 32,
  },
  back: {
    fontSize: 30,
  },
  title: {
    fontSize: 36,
    lineHeight: 40,
    marginTop: 20,
    marginBottom: 32,
    color: '#EC1A66',
  },
  input: {
    color: '#EC1A66',
    fontSize: 15,
    height: 52,
    borderColor: '#EC1A66',
    borderWidth: 2,
    paddingHorizontal: 17,
    marginBottom: 16,
  },
});
