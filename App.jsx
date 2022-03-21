import React from "react";
import { View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import TagMainScreen from "./src/screens/TagMainScreen";
import TagEditScreen from "./src/screens/TagEditScreen";
import TagOptionScreen from "./src/screens/TagOptionScreen";
import TagPastScreen from "./src/screens/TagPastScreen";
import TaskMainScreen from "./src/screens/TaskMainScreen";
import LogInScreen from "./src/screens/LogInScreen";
import LoggedOutScreen from "./src/screens/LoggedOutScreen";
import RegisterStep1Screen from "./src/screens/RegisterStep1Screen";
import RegisterStep2Screen from "./src/screens/RegisterStep2Screen";
import SettingScreen from "./src/screens/SettingScreen";
import SettingTimeScreen from "./src/screens/SettingTimeScreen";
import HomeScreen from "./src/screens/HomeScreen";
import StartScreen from "./src/screens/StartScreen";
import TimerSampleScreen from "./src/screens/TimerSampleScreen"; 


const Stack = createStackNavigator();

export default function App () {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="TagMainScreen"
            >
                <Stack.Screen name="TagMainScreen" component={TagMainScreen} />
                <Stack.Screen name="TagEditScreen" component={TagEditScreen} />
                <Stack.Screen name="TagOptionScreen" component={TagOptionScreen} />
                <Stack.Screen name="TagPastScreen" component={TagPastScreen} />
                <Stack.Screen name="LoggedOutScreen" component={LoggedOutScreen} />
                <Stack.Screen name="LogInScreen" component={LogInScreen} />
                <Stack.Screen name="RegisterStep1Screen" component={RegisterStep1Screen} />
                <Stack.Screen name="RegisterStep2Screen" component={RegisterStep2Screen} />
                <Stack.Screen name="SettingScreen" component={SettingScreen} />
                <Stack.Screen name="SettingTimeScreen" component={SettingTimeScreen} />
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="StartScreen" component={StartScreen} />
                <Stack.Screen name="TimerSampleScreen" component={TimerSampleScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
});
