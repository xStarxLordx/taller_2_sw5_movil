import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import 'react-native-gesture-handler';
import TouchableOpacity from 'react-native';
import SplashScreen from "./screens/SplashScreen"
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import Rutines from './screens/Rutines';
import Classes from './screens/Classes';
import FirebaseStage from './context/firebaseStage';
import RutinesStage from './rutines/rutinesStage';
const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{headerShown: false, statusBarTranslucent: true}}>
        {/* <Stack.Screen  name="Splash" component={SplashScreen} /> 
        <Stack.Screen  name="Login" component={LoginScreen} /> */}
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Rutines" component={Rutines} />
        <Stack.Screen name="Classes" component={Classes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
