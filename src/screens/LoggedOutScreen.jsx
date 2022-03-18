import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Button from '../components/Button';

export default function LoggedOutScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Text style={styles.logoImage}>□ </Text>
        <Text style={styles.logoText}>mone</Text>
      </View>
      <View style={styles.footer}>
        <Button
          label="LOG IN"
          styleContainer={styles.footerLeftContainer}
          styleLabel={styles.footerLeftLabel}
        />
        <Button
          label="REGISTER"
          styleContainer={styles.footerRightContainer}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'blue',
    paddingHorizontal: 86,
    paddingTop: 280,
    paddingBottom: 220,
  },
  logoImage: {
    fontSize: 48,
    lineHeight: 54,
  },
  logoText: {
    fontSize: 48,
    lineHeight: 54,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  footerLeftContainer: {
    width: 145,
    height: 52,
    backgroundColor: '#ffffff',
    borderColor: '#EC1A66',
    borderWidth: 2,
  },
  footerLeftLabel: {
    color: '#EC1A66',
  },
  footerRightContainer: {
    width: 130,
    height: 52,
  },
});
