import React from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import PluginScreen from '../screens/PluginScreen';
import ProfileScreen from '../screens/ProfileScreen';
import EventsScreen from '../screens/EventsScreen';
import BalanceSendScreen from '../screens/BalanceSend';
import RatingScreen from '../screens/RatingScreen';

const Tab = createBottomTabNavigator();

const HomeStack = createNativeStackNavigator();
function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={({route}) => ({headerShown: false})}>
      <HomeStack.Screen name="Events" component={EventsScreen} />
      <HomeStack.Screen name="ProfileScreen" component={ProfileScreen} />
      <HomeStack.Screen name="RatingScreen" component={RatingScreen} />
      <HomeStack.Screen
        name="BalanceSendScreen"
        component={BalanceSendScreen}
      />
    </HomeStack.Navigator>
  );
}

const MainScreens = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Detector"
        component={HomeStackScreen}
        options={{
          headerShown: false,
          title: 'События',
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/home.png')} //Change your icon image here
              style={{
                height: 25,
                width: 25,
                tintColor: focused ? '#4d94ff' : '#666666',
              }}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Plugin"
        component={PluginScreen}
        options={{
          headerShown: false,
          title: 'Следующая',
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/sensor.png')} //Change your icon image here
              style={{
                height: 25,
                width: 25,
                tintColor: focused ? '#4d94ff' : '#666666',
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({});

export default MainScreens;
