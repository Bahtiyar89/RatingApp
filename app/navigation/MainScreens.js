import React, {useContext} from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AuthContext from '../context/auth/AuthContext';
import PluginScreen from '../screens/PluginScreen';
import ProfileScreen from '../screens/ProfileScreen';
import EventsScreen from '../screens/EventsScreen';
import BalanceSendScreen from '../screens/BalanceSend';
import RatingScreen from '../screens/RatingScreen';
import TransactionScreen from '../screens/TransactionScreen';
import TransactionHistoryScreen from '../screens/TransactionHistoryScreen';
import MyDrawer from './MyDrawer';
import HistoryRating from '../assets/tabImages/historyRatingSvg';
import HomeSvg from '../assets/tabImages/HomeSvg';
import BillSvg from '../assets/tabImages/BillSvg';
import ProfileSvg from '../assets/tabImages/ProfileSvg';
import HistoryScreen from '../screens/HistoryScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';

const Tab = createBottomTabNavigator();
const LoginStack = createNativeStackNavigator();

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
      <HomeStack.Screen
        name="TransactionScreen"
        component={TransactionScreen}
      />
      <HomeStack.Screen
        name="TransactionHistoryScreen"
        component={TransactionHistoryScreen}
      />
    </HomeStack.Navigator>
  );
}

function LoginScreens() {
  return (
    <LoginStack.Navigator screenOptions={({route}) => ({headerShown: false})}>
      <LoginStack.Screen name="LoginScreen" component={LoginScreen} />
      <LoginStack.Screen name="SignUpScreen" component={SignUpScreen} />
    </LoginStack.Navigator>
  );
}

const MainScreens = () => {
  const authContext = useContext(AuthContext);

  const {isSigned} = authContext;
  return (
    <Tab.Navigator screenOptions={{}}>
      <Tab.Screen
        name="MainScreenTab"
        component={MyDrawer}
        options={{
          headerShown: false,
          tabBarLabel: 'Главная',
          tabBarIcon: ({focused}) => <HomeSvg focused={focused} />,
        }}
      />

      <Tab.Screen
        name="HistoryScreen"
        component={isSigned ? HistoryScreen : LoginScreens}
        options={{
          headerShown: false,
          tabBarLabel: 'История ставок',

          tabBarIcon: ({focused}) => <HistoryRating focused={focused} />,
        }}
      />
      <Tab.Screen
        name="RefillScreen"
        component={PluginScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Счет',
          tabBarIcon: ({focused}) => <BillSvg focused={focused} />,
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={PluginScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Профиль',
          tabBarIcon: ({focused}) => <ProfileSvg focused={focused} />,
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({});

export default MainScreens;
