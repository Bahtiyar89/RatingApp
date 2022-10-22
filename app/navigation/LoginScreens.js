import React from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import Logo from '../assets/logo.svg';
import SignUpScreen from '../screens/SignUpScreen';
import LoginMainScreen from '../screens/LoginMainScreen';
const Stack = createNativeStackNavigator();

const LoginScreens = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LoginMainScreen"
        component={LoginMainScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default LoginScreens;
