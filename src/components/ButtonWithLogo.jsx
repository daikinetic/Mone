import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function ButtonWithLogo(props) {
  const { styleContainer, styleLabel, logo, label } = props;
  return (
    <View style={[styles.buttonContainer, styleContainer]}>
      <View style={styles.buttonLogo}>
        <Text style={[styles.logoText, styleLabel]}>{logo}</Text>
      </View>
      <View style={styles.buttonLabel}>
        <Text style={[styles.labelText, styleLabel]}>{label}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#EC1A66',
    width: 120,
    height: 150,
    borderRadius: 10,
    marginHorizontal: 13.5,
    marginVertical: 13.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonLogo: {
    width: 140,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  logoText: {
    color: '#ffffff',
    fontSize: 40,
    paddingHorizontal: 37,
    paddingVertical: 15,
  },
  buttonLabel: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 55,
  },
  labelText: {
    color: '#ffffff',
    fontSize: 16,
    lineHeight: 25,
    paddingHorizontal: 8,
    paddingBottom: 8,
    fontWeight: 'bold',
  },
});
