import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';

import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';


import MainPage from './src/components/Page/MainPage';
import PlanProvider from './src/provider/PlanProvider';
import SplashScreen from './src/components/Page/SplashScreen';

const Stack = createStackNavigator();

export default function App() {

 
  return (
    <PlanProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="MainPage" component={MainPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </PlanProvider>
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

