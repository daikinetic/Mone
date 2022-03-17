import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import TagMainScreen from './src/screens/TagMainScreen';
import TagEditScreen from './src/screens/TagEditScreen';
import TagOptionScreen from './src/screens/TagOptionScreen';
import TagPastScreen from './src/screens/TagPastScreen';

export default function App() {
  return (
    <TagMainScreen />
  );
}
