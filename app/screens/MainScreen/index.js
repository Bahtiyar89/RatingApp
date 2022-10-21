import React, {useEffect, Fragment, useContext, useState} from 'react';
import {
  View,
  TextInput,
  Pressable,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import {Appbar, Button} from 'react-native-paper';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import DrawerSvg from '../../assets/tabImages/DrawerSvg';

const MainScreen = ({navigation}) => {
  return (
    <Fragment>
      <Appbar.Header
        style={{
          backgroundColor: '#f2f3f7',
        }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <DrawerSvg />
          </TouchableOpacity>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              width: '50%',
            }}>
            <TouchableOpacity
              style={{
                paddingTop: 4,
                paddingRight: 12,
                paddingBottom: 4,
                paddingLeft: 12,
                borderRadius: 8,
                backgroundColor: '#fff',
              }}
              onPress={() => navigation.navigate('')}>
              <Text>Регистрация</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                paddingTop: 4,
                paddingRight: 12,
                paddingBottom: 4,
                paddingLeft: 12,
                borderRadius: 8,
                backgroundColor: '#fff',
              }}
              onPress={() => navigation.navigate('LoginScreen')}>
              <Text>Вход</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Appbar.Header>
      <KeyboardAwareScrollView>
        <SafeAreaView style={styles.screen}>
          <Text style={styles.haveAnAccountText}>У вас нет аккаунта?</Text>
        </SafeAreaView>
      </KeyboardAwareScrollView>
    </Fragment>
  );
};

export default MainScreen;
