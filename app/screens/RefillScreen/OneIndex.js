import React, {useState, useContext} from 'react';
import {Text, Image, TouchableOpacity, View, TextInput} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {useFocusEffect} from '@react-navigation/native';

import BalanceContext from '../../context/balance/BalanceContext';
import utility from '../../utils/Utility';
import Colors from '../../constants/Сolors';
import styles from './styles';

export default function OneIndex({navigation}) {
  const balanceContext = useContext(BalanceContext);
  const {sendBalance, loading} = balanceContext;
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

  const sendBalanceButton = () => {
    sendBalance(walletKeys, Number(amount), result);
    seTamount(0);
    setResult();
  };
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
            onPress={sendBalanceButton}
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
              Отправить
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
