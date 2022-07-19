import React, { useContext, Fragment, useState } from 'react';
import {
  View,
  TextInput,
  Pressable,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useToast } from 'react-native-toast-notifications';
import { Appbar, Button } from 'react-native-paper';
import Sodium from 'react-native-sodium';
import basex from 'bs58-rn';
import Buffer from 'buffer';

import Logo from '../../assets/logo.svg';
import AuthContext from '../../context/auth/AuthContext';
import Loading from '../../components/Loading';
import styles from './styles';

export default function SignUpScreen({ navigation }) {
  const toast = useToast();
  const authContext = useContext(AuthContext);
  const { loading, signUp } = authContext;
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
    const ALPHABET =
      '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
    const base58 = basex(ALPHABET);
    let key = await Sodium.crypto_sign_keypair();
    console.log('keyR', key);
    let encoded_SK_Base58 = base58.encode(Buffer.Buffer.from(key.sk, 'base64'));
    let encoded_PK_Base58 = base58.encode(Buffer.Buffer.from(key.pk, 'base64'));
    const obj = {};
    obj['sk'] = encoded_SK_Base58;
    obj['pk'] = encoded_PK_Base58;
    seTwalletKeys({
      ...walletKeys,
      sk: encoded_SK_Base58,
      pk: encoded_PK_Base58,
    });
  };

  const submit = () => {
    if (walletKeys.pk.length < 10 || walletKeys.sk.length < 10) {
      toast.show('generate_keys', {
        type: 'warning',
        duration: 4000,
        animationType: 'zoom-in',
      });
    } else {
      signUp(walletKeys, navigation);
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
        <View style={{ width: '100%' }}>
          <Image
            source={require('../../assets/sensor.png')} //Change your icon image here
            style={{ height: 25, width: 25 }}
          />
        </View>
      </Appbar.Header>
      <KeyboardAwareScrollView>
        <SafeAreaView style={styles.screen}>
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            <View style={styles.container}>
              <Text style={styles.haveAnAccountText}>
                У вас уже есть аккаунт?
              </Text>
              <Pressable onPress={() => navigation.navigate('LoginScreen')}>
                <Text style={styles.logInSignUpButton}>Логин</Text>
              </Pressable>
            </View>
            <View style={styles.titleContainer}>
              <Text
                style={[styles.title, styles.blueColor, { marginBottom: 20 }]}>
                Новый пользователь
              </Text>
            </View>

            <View>
              {/*
              <Text style={styles.legend}>Фамилия</Text>
              <TextInput
                style={[styles.input]}
                placeholderTextColor={'#999CA0'}
                placeholder="Антонов"
                value={newuser.last_name}
                onChangeText={val => seTnewuser({ ...newuser, last_name: val })}
              />*/}

              <Button
                icon="lead-pencil"
                style={{
                  width: '100%',
                  marginTop: 10,
                  marginBottom: 10,
                }}
                disabled={
                  walletKeys.pk.length === 44 && walletKeys.sk.length === 88
                }
                onPress={generateKeys}
                mode="contained">
                <Text style={{ textAlign: 'center', color: '#000' }}>
                  generateKeys
                </Text>
              </Button>

              <View
                style={{ marginTop: 5, flexDirection: 'row', width: '90%' }}>
                <Text style={{ flex: 1 }}>Public key</Text>
              </View>
              <TextInput
                editable={false}
                placeholder={'Public key'}
                mode="outlined"
                style={{
                  backgroundColor: '#000',
                  color: '#fff',
                  borderRadius: 5,
                  fontSize: 16,
                  height: 48,
                  borderRadius: 8,
                  width: '100%',
                  paddingVertical: 12,
                  paddingHorizontal: 16,
                }}
                value={walletKeys.pk}
              />
              <View
                style={{ marginTop: 5, flexDirection: 'row', width: '90%' }}>
                <Text style={{ flex: 1 }}>Secret key</Text>
              </View>
              <TextInput
                editable={false}
                placeholder={'Secret key'}
                mode="outlined"
                style={{
                  backgroundColor: '#000',
                  color: '#fff',
                  borderRadius: 5,
                  fontSize: 16,
                  height: 48,
                  borderRadius: 8,
                  width: '100%',
                  paddingVertical: 12,
                  paddingHorizontal: 16,
                }}
                value={walletKeys.sk}
              />

              <Pressable onPress={submit} style={[styles.completeButton]}>
                <Text style={styles.completeButtonText}>
                  Зарегистрироваться
                </Text>
              </Pressable>
            </View>
          </ScrollView>
        </SafeAreaView>
      </KeyboardAwareScrollView>
    </Fragment>
  );
}
