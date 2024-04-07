/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from '@react-navigation/native'
import HistoryScreen from './src/components/screens/HistoryScreen/HistoryScreen';
import HomeScreen from './src/components/screens/HomeScreen/HomeScreen';
import ChargeScreen from './src/components/screens/ChargeScreen/ChargeScreen';
import AccountScreen from './src/components/screens/AccountScreen/AccountScreen';
import LoginScreen from './src/components/screens/LoginScreen/LoginScreen';
import OnboardingScreen from './src/components/screens/OnboardingScreen/OnboardingScreen';
import CheckScreen from './src/components/screens/CheckScreen/CheckScreen';


const App = () => {

  const Tab = createBottomTabNavigator();

  const Stack = createNativeStackNavigator();

  const BottomTabScreen = () => {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: {
            height: 92,
            backgroundColor: '#1F2332',
            borderTopWidth: 0,
            padding: 12,
            justifyContent: 'space-between'
          },
          tabBarLabel: () => null,
          tabBarIcon: ({ focused, color, size }) => {
            let imagePath;
            if (route.name === "HomeScreen") {
              imagePath = focused ? require('./src/assets/images/bid-bold.png') : require('./src/assets/images/bid-light.png');
            } else if (route.name === "HistoryScreen") {
              imagePath = focused ? require('./src/assets/images/hourglass-bold.png') : require('./src/assets/images/hourglass.png');
            } else if (route.name === "ChargeScreen") {
              imagePath = focused ? require('./src/assets/images/coconut-bold.png') : require('./src/assets/images/coconut.png');
            } else if (route.name === "AccountScreen") {
              imagePath = focused ? require('./src/assets/images/user-bold.png') : require('./src/assets/images/user.png');
            }

            return <Image source={imagePath} style={{ width: 32, height: 32 }} />;
          }
        })}>
        <Tab.Screen name="HomeScreen" component={HomeScreen} />
        <Tab.Screen name="HistoryScreen" component={HistoryScreen} />
        <Tab.Screen name="ChargeScreen" component={ChargeScreen} />
        <Tab.Screen name="AccountScreen" component={AccountScreen} />
      </Tab.Navigator>
    )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
        <Stack.Screen name="CheckScreen" component={CheckScreen} />
        <Stack.Screen name="Bottom" component={BottomTabScreen} />
        {/*           
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
