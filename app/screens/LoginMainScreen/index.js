import React, {Fragment, useContext} from 'react';
import {
  Dimensions,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import {useToast} from 'react-native-toast-notifications';

import AuthContext from '../../context/auth/AuthContext';
import Loading from '../../components/Loading';
import GradientSvg from '../../assets/GradientSvg';

const LoginMainScreen = ({navigation}) => {
  const authContext = useContext(AuthContext);
  const toast = useToast();

  const {signin, loading} = authContext;

  const submitLogin = () => {
    navigation.navigate('LoginScreen');
  };
  const submitSignUp = () => {
    navigation.navigate('SignUpScreen');
  };

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  return (
    <Fragment>
      <Loading loading={loading} />
      <GradientSvg
        windowWidth={windowWidth}
        windowHeight={windowHeight}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      />
      <Loading loading={loading} />

      <SafeAreaView style={styles.screen}>
        <View style={styles.titleContainer}>
          <Text style={[styles.title]}>CryptoXBET</Text>
        </View>

        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
          }}></View>
        <TouchableOpacity
          onPress={submitSignUp}
          style={[styles.completeButton]}>
          <Text style={[styles.completeButtonText]}>Зарегистрироваться</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={submitLogin}
          style={[styles.completeButton2]}>
          <Text style={[styles.loginText]}>Войти</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </Fragment>
  );
};

export default LoginMainScreen;
