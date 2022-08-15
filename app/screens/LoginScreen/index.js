import React, {useEffect, Fragment, useContext, useState} from 'react';
import {
  View,
  TextInput,
  Pressable,
  Text,
  SafeAreaView,
  Image,
} from 'react-native';
import styles from './styles';
import {Appbar, Button} from 'react-native-paper';
import RNFS from 'react-native-fs';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import DocumentPicker, {
  isInProgress,
  types,
} from 'react-native-document-picker';
import {useToast} from 'react-native-toast-notifications';
import {useFocusEffect} from '@react-navigation/native';

import AuthContext from '../../context/auth/AuthContext';
import Loading from '../../components/Loading';
import utility from '../../utils/Utility';

const LoginScreen = ({navigation}) => {
  const authContext = useContext(AuthContext);
  const toast = useToast();

  const {signin, loading} = authContext;

  const [result, setResult] = useState();
  const [walletKeys, seTwalletKeys] = useState({
    sk: '',
    pk: '',
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
      console.log('keys:3 ', keys);
      if (keys) {
        seTwalletKeys({...walletKeys, sk: keys?.sk, pk: keys?.pk});
      } else {
        seTwalletKeys({...walletKeys, sk: file?.sk, pk: file?.pk});
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
  return (
    <Fragment>
      <Loading loading={loading} />
      <Appbar.Header
        style={{
          backgroundColor: '#fff',
          borderBottomWidth: 1,
          borderBottomColor: '#003143',
        }}>
        <View style={{width: '100%'}}>
          <Image
            source={require('../../assets/star.png')} //Change your icon image here
            style={{height: 25, width: 25}}
          />
        </View>
      </Appbar.Header>

      <KeyboardAwareScrollView>
        <SafeAreaView style={styles.screen}>
          <View style={styles.container}>
            <Text style={styles.haveAnAccountText}>У вас нет аккаунта?</Text>
            <Pressable onPress={() => navigation.navigate('SignUpScreen')}>
              <Text style={styles.logInSignUpButton}>Регистрация</Text>
            </Pressable>
          </View>
          <View style={styles.titleContainer}>
            <Text style={[styles.title]}>
              Привет, авторизуйся
              <Text style={styles.blueColor}> Тут!</Text>
            </Text>
          </View>

          <Text style={styles.legend}>Публичный ключ</Text>
          <TextInput
            style={[styles.input]}
            onChangeText={val => seTwalletKeys({...walletKeys, pk: val})}
            value={walletKeys.pk}
            placeholderTextColor={'#999CA0'}
            placeholder="FLSXfhuXoZb8azzHgUN9Dt3HEup4FYndbwEHx7jmGpht"
          />

          <Text style={styles.legend}>Секретный ключ</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              style={[styles.input]}
              onChangeText={val => seTwalletKeys({...walletKeys, sk: val})}
              value={walletKeys.sk}
              //secureTextEntry={passwordInputSecure}
              placeholderTextColor={'#999CA0'}
              placeholder={'FLSXfhuXoZb8azzHgUN9Dt3HEup4FYndbwEHx7jmGpht'}
            />
          </View>

          <Button
            icon="upload"
            style={{
              width: '100%',
              marginTop: 20,
              marginBottom: 30,
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
            }}
            mode="contained">
            <Text style={{textAlign: 'center', color: '#000'}}>
              choose a file
            </Text>
          </Button>

          <View style={{marginTop: 20}}>
            <Pressable onPress={submitLogin} style={[styles.completeButton]}>
              <Text style={[styles.completeButtonText]}>Войти</Text>
            </Pressable>
          </View>
        </SafeAreaView>
      </KeyboardAwareScrollView>
    </Fragment>
  );
};

export default LoginScreen;
