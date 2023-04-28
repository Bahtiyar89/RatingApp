import React, {useEffect, Fragment, useContext, useState} from 'react';
import {
  View,
  TextInput,
  Pressable,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import styles from './styles';

import RNFS from 'react-native-fs';

import DocumentPicker, {
  isInProgress,
  types,
} from 'react-native-document-picker';
import {useToast} from 'react-native-toast-notifications';
import {useFocusEffect} from '@react-navigation/native';

import AuthContext from '../../context/auth/AuthContext';
import Loading from '../../components/Loading';
import utility from '../../utils/Utility';
import PropTypes from 'prop-types';

import GradientSvg from '../../assets/GradientSvg';
import UploadSvg from '../../assets/UploadSvg';

const LoginScreen = ({navigation}) => {
  const authContext = useContext(AuthContext);
  const toast = useToast();

  const {signin, loading} = authContext;

  const [result, setResult] = useState();
  const [walletKeys, seTwalletKeys] = useState({
    sk: '4m9yzp9bkbiYWisUaojfd9AuXg25RSgLqwoRfZHQkaDGgKzke9ZVgAfDjFEYFQA1KppjGBEhNJoWg6maeVzGbo48',
    pk: 'FqeMNqD2AfKUHceJQi8ZpeyEvouzESq7248tfcXAsVD6',
  });
  const handleError = err => {
    if (DocumentPicker.isCancel(err)) {
      console.warn('cancelled');
      // User cancelled the picker, exit any dialogs or menus and move on
    } else if (isInProgress(err)) {
      console.warn(
        'multiple pickers were opened, only the last will be considered',
      );
    } else {
      throw err;
    }
  };

  async function encrypData() {
    await utility.getItemObject('wkeys').then(keys => {
      if (Object.keys(keys).length != 0) {
        seTwalletKeys({...walletKeys, sk: keys?.sk, pk: keys?.pk});
      }
    });
  }
  useFocusEffect(
    React.useCallback(() => {
      // Do something when the screen is focused
      encrypData();
      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions
      };
    }, []),
  );

  useEffect(() => {
    if (result instanceof Array) {
      result.map(item => {
        toast.show('Ваш файл успешно прикреплен', {
          type: 'success',
          duration: 4000,
          animationType: 'zoom-in',
        });
        RNFS.readFile(item.fileCopyUri, 'utf8')
          .then(data => {
            seTwalletKeys({
              ...walletKeys,
              pk: JSON.parse(data).pk,
              sk: JSON.parse(data).sk,
            });
          })
          .catch(error => {
            check = false;
            toast.show('Прикрепите заново что то не так!', {
              type: 'warning',
              duration: 3000,
              animationType: 'zoom-in',
            });
          });
      });
    }
  }, [result]);

  const submitLogin = () => {
    if (walletKeys.pk === '' || walletKeys.sk === '') {
      toast.show('Введите ключи', {
        type: 'success',
        duration: 4000,
        animationType: 'zoom-in',
      });
    } else {
      signin(walletKeys);
    }
  };
  console.log('walletKeys', walletKeys);
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  console.log('walletKeys: ', walletKeys);
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

        <Text style={styles.legend}>Публичный ключ</Text>
        <TextInput
          style={[styles.input]}
          onChangeText={val => seTwalletKeys({...walletKeys, pk: val})}
          value={walletKeys.pk}
          placeholderTextColor={'#000000'}
          placeholder="3i8tu4DsTrZKUAZRUjqxvpVT4Xycve8doNbwyGVuBJ8nRtZxEMBbNBD5PfBpTdgV36uPPKtkoCG3EwgoVdPuFsm8"
        />

        <Text style={styles.legend}>Секретный ключ</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={[styles.input]}
            onChangeText={val => seTwalletKeys({...walletKeys, sk: val})}
            value={walletKeys.sk}
            //secureTextEntry={passwordInputSecure}
            placeholderTextColor={'#000000'}
            placeholder={'FqeMNqD2AfKUHceJQi8ZpeyEvouzESq7248tfcXAsVD6'}
          />
        </View>

        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
            marginTop: 43,
          }}
          onPress={async () => {
            try {
              const pickerResult = await DocumentPicker.pickSingle({
                presentationStyle: 'fullScreen',
                copyTo: 'cachesDirectory',
                type: types.allFiles,
              });
              setResult([pickerResult]);
            } catch (e) {
              handleError(e);
            }
          }}>
          <UploadSvg />
          <Text style={{paddingLeft: 5, color: '#FFFFFF'}}>
            Загрузить ключ{' '}
          </Text>
        </TouchableOpacity>

        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
          }}></View>
        <Pressable onPress={submitLogin} style={[styles.completeButton]}>
          <Text style={[styles.completeButtonText]}>Войти</Text>
        </Pressable>
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
            marginBottom: 28,
            marginTop: 16,
          }}>
          <Text style={styles.bottomTitle}>У вас нет аккаунта?</Text>
          <View
            style={{
              borderBottomColor: '#fff',
              borderBottomWidth: 1,
              marginLeft: 3,
            }}>
            <Text
              onPress={() => navigation.navigate('SignUpScreen')}
              style={styles.bottomTitle2}>
              Зарегистрироваться
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </Fragment>
  );
};

LoginScreen.propTypes = {
  navigation: PropTypes.object,
};

LoginScreen.defaultProps = {
  navigation: {},
};

export default LoginScreen;
