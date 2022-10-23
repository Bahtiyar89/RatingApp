import React, {useContext, Fragment, useState} from 'react';
import {
  View,
  TextInput,
  Pressable,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import {useToast} from 'react-native-toast-notifications';

import Sodium from 'react-native-sodium';
import basex from 'bs58-rn';
import Buffer from 'buffer';
import {useFocusEffect} from '@react-navigation/native';

import AuthContext from '../../context/auth/AuthContext';
import Loading from '../../components/Loading';
import styles from './styles';
import GradientSvg from '../../assets/GradientSvg';
import utility from '../../utils/Utility';

export default function SignUpScreen({navigation}) {
  const toast = useToast();
  const authContext = useContext(AuthContext);
  const {loading, signUp} = authContext;
  const [keyGenerate, setKeyGenerate] = useState(true);

  async function encrypData() {
    await utility.getItemObject('wkeys').then(keys => {
      if (Object.keys(keys).length != 0) {
        setKeyGenerate(false);
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

  const [walletKeys, seTwalletKeys] = useState({
    sk: '',
    pk: '',
  });
  const [newuser, seTnewuser] = useState({
    first_name: '',
    last_name: '',
    middle_name: '',
    password: '',
    address: '',
    index: '',
    phone_number: '',
  });

  const generateKeys = async () => {
    setKeyGenerate;
    if (keyGenerate) {
      const ALPHABET =
        '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
      const base58 = basex(ALPHABET);
      let key = await Sodium.crypto_sign_keypair();

      let encoded_SK_Base58 = base58.encode(
        Buffer.Buffer.from(key.sk, 'base64'),
      );
      let encoded_PK_Base58 = base58.encode(
        Buffer.Buffer.from(key.pk, 'base64'),
      );
      const obj = {};
      obj['sk'] = encoded_SK_Base58;
      obj['pk'] = encoded_PK_Base58;
      toast.show('Ключи успешно сгенирированы', {
        type: 'success',
        duration: 2000,
        animationType: 'zoom-in',
      });
      seTwalletKeys({
        ...walletKeys,
        sk: encoded_SK_Base58,
        pk: encoded_PK_Base58,
      });
    } else {
      toast.show(
        'Вы не можете сгенирировать ключи так как у вас уже есть ключи!',
        {
          type: 'success',
          duration: 4000,
          animationType: 'zoom-in',
        },
      );
    }
  };

  const submit = () => {
    if (walletKeys.pk.length < 10 || walletKeys.sk.length < 10) {
      toast.show('Вы не сгенирировали ключи!', {
        type: 'warning',
        duration: 4000,
        animationType: 'zoom-in',
      });
    } else {
      signUp(walletKeys, navigation);
    }
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

      <SafeAreaView style={styles.screen}>
        <View style={styles.titleContainer}>
          <Text style={[styles.title]}>CryptoXBET</Text>
        </View>

        <TouchableOpacity onPress={generateKeys} style={{marginTop: 45}}>
          <Text style={styles.buttonStyle}>Сгенерировать ключи</Text>
        </TouchableOpacity>

        <View style={{marginTop: 24, flexDirection: 'row', width: '90%'}}>
          <Text style={styles.legend2}>Публичный ключ</Text>
        </View>
        <TextInput
          placeholder={''}
          mode="outlined"
          style={styles.input2}
          onChangeText={val => seTwalletKeys({...walletKeys, pk: val})}
          value={walletKeys.pk}
          placeholderTextColor={'black'}
        />
        <View style={{marginTop: 15, flexDirection: 'row', width: '90%'}}>
          <Text style={styles.legend2}>Секретный ключ</Text>
        </View>
        <TextInput
          placeholder={''}
          mode="outlined"
          style={styles.input2}
          onChangeText={val => seTwalletKeys({...walletKeys, sk: val})}
          value={walletKeys.sk}
          placeholderTextColor={'black'}
        />
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
          }}></View>
        <Pressable onPress={submit} style={styles.completeButton}>
          <Text style={[styles.completeButtonText]}>Зарегистрироваться</Text>
        </Pressable>
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
            marginBottom: 17,
            marginTop: 16,
          }}>
          <Text style={styles.bottomTitle1}>У вас нет аккаунта?</Text>
          <View
            style={{
              borderBottomColor: '#fff',
              borderBottomWidth: 1,
              marginLeft: 3,
            }}>
            <Text
              onPress={() => navigation.navigate('LoginScreen')}
              style={styles.bottomTitle2}>
              Войти
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </Fragment>
  );
}
