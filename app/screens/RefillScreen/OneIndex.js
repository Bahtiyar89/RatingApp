import React, {Fragment, useEffect, useState} from 'react';
import {
  Text,
  Pressable,
  Image,
  TouchableOpacity,
  View,
  TextInput,
  SafeAreaView,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import QRCodeScanner from 'react-native-qrcode-scanner';
import QRCode from 'react-native-qrcode-svg';
import Clipboard from '@react-native-clipboard/clipboard';
import {useFocusEffect} from '@react-navigation/native';
import {
  // TextInput,
  IconButton,
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
import Colors from '../../constants/Сolors';

export default function OneIndex({navigation}) {
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
    <View style={{marginTop: 30}}>
      {!scan && (
        <View>
          <Text style={styles.textparagraph}>Адрес отправки</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TextInput
              style={[
                {
                  fontSize: 16,
                  height: 40,
                  borderRadius: 8,
                  width: '100%',
                  paddingVertical: 12,
                  paddingHorizontal: 16,
                  marginBottom: 8,
                  color: Colors.black,
                  backgroundColor: Colors.white,
                },
              ]}
              editable={false}
              value={result}
            />
            <TouchableOpacity
              onPress={startScan}
              style={{
                top: 5,
                position: 'absolute',
                right: 12,
              }}>
              <Image
                source={require('../../assets/barcode.png')} //Change your icon image here
                style={{height: 25, width: 25}}
              />
            </TouchableOpacity>
          </View>
          <TextInput
            style={[
              {
                paddingLeft: 8,
                marginTop: 8,
                fontSize: 13,
                height: 40,
                borderRadius: 8,
                color: '#333333%',
                backgroundColor: '#fff',
              },
            ]}
            onChangeText={text => seTamount(text)}
            value={amount}
            placeholderTextColor={'#B3B8C6'}
            placeholder="от 1 SWT"
          />
          <TouchableOpacity
            onPress={() => console.log('ddd')}
            style={{
              marginTop: 30,
              borderRadius: 8,
              backgroundColor: '#6248FF',
              padding: 13,
            }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '500',
                textAlign: 'center',
                color: 'white',
              }}>
              Отправить баланс
            </Text>
          </TouchableOpacity>
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
    </View>
  );
}
