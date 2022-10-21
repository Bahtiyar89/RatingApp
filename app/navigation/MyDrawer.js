import React, {Fragment} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import CustomDrawer from '../components/CustomDrawer';
import MainScreen from '../screens/MainScreen';
import LoginScreen from '../screens/LoginScreen';

const HomeStack = createNativeStackNavigator();
function HomeDrawerStack() {
  return (
    <HomeStack.Navigator screenOptions={({route}) => ({headerShown: false})}>
      <HomeStack.Screen name="MainScreen" component={MainScreen} />
    </HomeStack.Navigator>
  );
}

function Article() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Article Screen</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="Help" onPress={() => alert('Link to help')} />
    </DrawerContentScrollView>
  );
}

export default function MyDrawer({navigation}) {
  console.log('props: ', navigation);

  return (
    <Drawer.Navigator
      useLegacyImplementation
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        drawerStyle: {
          paddingTop: 50,
          backgroundColor: '#A8A8A8',
        },
        headerShown: false,
      }}>
      <Drawer.Screen
        name="HomeDrawerStack"
        options={{
          drawerActiveBackgroundColor: '#737373',
          drawerLabel: 'live',
          title: '',
          drawerLabelStyle: {color: '#FFFFFF'},
        }}
        component={HomeDrawerStack}
      />

      <Drawer.Screen
        options={{
          drawerActiveBackgroundColor: '#737373',
          drawerLabel: 'Избранное',
          drawerLabelStyle: {color: '#FFFFFF'},
        }}
        name="Choosen"
        component={Article}
      />
      <Drawer.Screen
        options={{
          drawerActiveBackgroundColor: '#737373',
          drawerLabel: 'Виды спорта',
          drawerLabelStyle: {color: '#FFFFFF'},
        }}
        name="Article"
        component={Article}
      />
    </Drawer.Navigator>
  );
}
