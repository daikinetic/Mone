import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import RegisterStep1Screen from './src/screens/RegisterStep1Screen';
import RegisterStep2Screen from './src/screens/RegisterStep2Screen';
import LogInScreen from './src/screens/LogInScreen';
import LoggedOutScreen from './src/screens/LoggedOutScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <RegisterStep1Screen />
      {/* <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="light" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
