import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// import RegisterStep1Screen from './src/screens/RegisterStep1Screen';
// import RegisterStep2Screen from './src/screens/RegisterStep2Screen';
// import LogInScreen from './src/screens/LogInScreen';
// import LoggedOutScreen from './src/screens/LoggedOutScreen';
import StartScreen from './src/screens/StartScreen';
import HomeScreen from './src/screens/HomeScreen';
import SettingScreen from './src/screens/SettingScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <SettingScreen />
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      <StatusBar style="light" />
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
