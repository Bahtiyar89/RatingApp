import React, {Fragment, useContext, useState} from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import styles from './styles';
import {Appbar} from 'react-native-paper';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import DrawerSvg from '../../assets/tabImages/DrawerSvg';

const MainScreen = ({navigation}) => {
  return (
    <Fragment>
      <KeyboardAwareScrollView>
        <SafeAreaView style={styles.screen}>
          <Text style={styles.haveAnAccountText}>У вас нет аккаунта?</Text>
        </SafeAreaView>
      </KeyboardAwareScrollView>
    </Fragment>
  );
};

export default MainScreen;
