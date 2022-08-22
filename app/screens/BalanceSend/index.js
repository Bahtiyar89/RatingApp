import React, {Fragment, useEffect, useState} from 'react';
import {
  Text,
  Pressable,
  Image,
  TouchableOpacity,
  View,
  SafeAreaView,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import QRCodeScanner from 'react-native-qrcode-scanner';
import QRCode from 'react-native-qrcode-svg';
import Clipboard from '@react-native-clipboard/clipboard';
import {useFocusEffect} from '@react-navigation/native';
import {
  TextInput,
  Appbar,
  Card,
  Title,
  Paragraph,
  Button,
  Modal,
  Portal,
} from 'react-native-paper';
import utility from '../../utils/Utility';
import styles from './styles';
import ShevronLeft from '../../assets/chevron-left';

import MainStyle from '../../utils/MainStyle';
export default function BalanceSendScreen({navigation}) {
  const [replenish, seTreplenish] = useState('');
  const [send, seTsend] = useState('');
  const [amount, seTamount] = useState('');
  const [result, setResult] = useState();
  const [scan, setScan] = useState(false);
  const [walletKeys, seTwalletKeys] = useState({
    sk: '',
    pk: '0',
  });

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
  const startScan = () => {
    setScan(true);
    setResult();
  };
  const onSuccess = e => {
    setResult(e.data);
    setScan(false);
  };
  console.log('amount: ', amount);
  return (
    <Fragment>
      <Appbar.Header style={MainStyle.appBarThreeItems}>
        <Pressable
          style={{alignSelf: 'center'}}
          onPress={() => navigation.goBack()}>
          <ShevronLeft />
        </Pressable>
        <View style={MainStyle.appBarThreeDevider}>
          <Text style={MainStyle.textSize}>Пополнить</Text>
        </View>
      </Appbar.Header>
      <KeyboardAwareScrollView>
        <SafeAreaView style={styles.screen}>
          {!scan && (
            <View>
              <QRCode value={walletKeys.pk} />
              <Pressable
                onPress={() => console.log()}
                style={[
                  styles.completeButton,
                  {marginTop: 20, marginBottom: 20},
                ]}>
                <Text style={styles.completeButtonText}>Пополнить баланс</Text>
              </Pressable>
              <Text style={styles.textparagraph}>Адрес отправки</Text>
              <TextInput
                label={'получатель'}
                mode="outlined"
                right={<TextInput.Icon name="barcode" onPress={startScan} />}
                style={styles.textInput}
                onChangeText={text => setResult(text)}
                value={result}
              />
              <TextInput
                label={'сумма'}
                mode="outlined"
                // right={<TextInput.Icon name="barcode" onPress={startScan} />}
                style={styles.textInput}
                onChangeText={text => seTamount(text)}
                value={amount}
              />
              <Pressable
                onPress={() => console.log()}
                style={[styles.completeButton, {marginTop: 20}]}>
                <Text style={styles.completeButtonText}>Отправить баланс</Text>
              </Pressable>
            </View>
          )}
          {scan && (
            <View style={styles.sectionContainer}>
              <TouchableOpacity onPress={() => setScan(false)}>
                <Text>закрыть сканирование</Text>
              </TouchableOpacity>
              <QRCodeScanner
                containerStyle={{position: 'absolute'}}
                reactivate={true}
                showMarker={true}
                onRead={onSuccess}
                topContent={<Text style={styles.centerText}>отсканируйте</Text>}
                bottomContent={
                  <TouchableOpacity
                    style={styles.buttonTouchable}
                    onPress={() => setScan(false)}>
                    <Text style={styles.buttonText}>отменить сканирование</Text>
                  </TouchableOpacity>
                }
              />
            </View>
          )}
        </SafeAreaView>
      </KeyboardAwareScrollView>
    </Fragment>
  );
}
