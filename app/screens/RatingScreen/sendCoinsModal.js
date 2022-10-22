import React, {useEffect, useState, useContext, Fragment} from 'react';
import {View, TouchableOpacity, Text, Pressable} from 'react-native';
import {TextInput} from 'react-native-paper';
import {useFocusEffect} from '@react-navigation/native';
import Buffer from 'buffer';

import BalanceContext from '../../context/balance/BalanceContext';
import utility from '../../utils/Utility';
import CustomModal from '../../components/CustomModal';
import styles from '../EventsScreen/styles';

export default function SendCoinsModal({
  visible,
  hideModal,
  item,
  id,
  itemName,
}) {
  const balanceContext = useContext(BalanceContext);
  const {postRateParticipant, loading} = balanceContext;
  const [encripted, seTencripted] = useState();
  const [walletKeys, seTwalletKeys] = useState({
    sk: '',
    pk: '',
  });
  async function encrypData() {
    await utility.getItemObject('wkeys').then(keys => {
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
    async function encrypData() {
      let buff;
      if (id === 'id1') {
        buff = Buffer.Buffer.from('1', 'utf-8');
      } else if (id === 'id2') {
        buff = Buffer.Buffer.from('2', 'utf-8');
      } else if (id === 'id3') {
        buff = Buffer.Buffer.from('3', 'utf-8');
      } else if (id === 'id4') {
        buff = Buffer.Buffer.from('4', 'utf-8');
      } else if (id === 'id5') {
        buff = Buffer.Buffer.from('5', 'utf-8');
      } else if (id === 'id6') {
        buff = Buffer.Buffer.from('6', 'utf-8');
      } else if (id === 'id7') {
        buff = Buffer.Buffer.from('7', 'utf-8');
      } else if (id === 'id8') {
        buff = Buffer.Buffer.from('8', 'utf-8');
      } else if (id === 'id9') {
        buff = Buffer.Buffer.from('9', 'utf-8');
      } else {
        buff = Buffer.Buffer.from('10', 'utf-8');
      }

      seTencripted(buff);
    }
    encrypData();
  }, [id]);

  const containerStyle = {
    backgroundColor: 'white',
    padding: 20,
    margin: 0,
    borderRadius: 20,
  };
  const [price, seTprice] = useState('');
  const [result, setResult] = useState();
  const [scan, setScan] = useState(false);

  const startScan = () => {
    setScan(true);
    setResult();
  };
  const onSuccess = e => {
    setResult(e.data);
    setScan(false);
  };

  const handleSendCoins = () => {
    postRateParticipant(walletKeys, Number(price), item?.scAddr, encripted);
    hideModal();
  };
  console.log('item:', item);
  return (
    <Fragment>
      <Text style={styles.legend}>{'Введите сумму'}</Text>
      <TextInput
        style={[
          {
            paddingLeft: 8,
            marginTop: 8,
            fontSize: 13,
            height: 40,
            borderRadius: 10,
            width: '100%',
            color: '#FFFFFF30%',
            backgroundColor: '#F2F3F7',
          },
        ]}
        onChangeText={text => seTprice(text)}
        value={price}
        placeholderTextColor={'#B3B8C6'}
        placeholder="от 1 SWT"
      />
      <View style={{flexDirection: 'row', marginTop: 8}}>
        <TouchableOpacity
          style={{
            borderRadius: 8,
            backgroundColor: '#F2F3F7',
            padding: 5,
          }}>
          <Text>10 SWT</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderRadius: 8,
            backgroundColor: '#F2F3F7',
            marginLeft: 10,
            padding: 5,
          }}>
          <Text>20 SWT</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderRadius: 8,
            backgroundColor: '#F2F3F7',
            marginLeft: 10,
            padding: 5,
          }}>
          <Text>100 SWT</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.legend}>{'Сумма возможного выигрыша'}</Text>
      <View style={{flexDirection: 'row', marginTop: 8}}>
        <TouchableOpacity
          style={{
            borderRadius: 8,
            backgroundColor: '#F2F3F7',
            padding: 5,
          }}>
          <Text>0 SWT</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        onPress={handleSendCoins}
        style={{
          marginTop: 35,
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
          Сделать ставку
        </Text>
      </TouchableOpacity>
    </Fragment>
  );
}
