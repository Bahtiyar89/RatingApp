import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import AuthContext from './context/auth/AuthContext';
import MainScreens from './navigation/MainScreens';
import LoginScreens from './navigation/LoginScreens';
import MyDrawer from './navigation/MyDrawer';

const Entrypoint = () => {
  const authContext = useContext(AuthContext);

  const {isSigned} = authContext;

  return (
    <NavigationContainer>
      {isSigned ? <MainScreens /> : <LoginScreens />}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default Entrypoint;
