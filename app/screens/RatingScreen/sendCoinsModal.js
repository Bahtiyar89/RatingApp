import React, { useEffect, useState, useContext } from 'react';
import { Text, Pressable, TouchableOpacity, View } from 'react-native';
import { Modal, Portal, TextInput } from 'react-native-paper';
import { useFocusEffect, useNavigationState } from '@react-navigation/native';
import basex from 'bs58-rn';
import Buffer from 'buffer';

import BalanceContext from '../../context/balance/BalanceContext';
import utility from '../../utils/Utility';
import styles from '../EventsScreen/styles';

export default function SendCoinsModal({ visible, hideModal, item, id }) {
  const balanceContext = useContext(BalanceContext);
  const { postRateParticipant } = balanceContext;
  const [encripted, seTencripted] = useState();
  const [walletKeys, seTwalletKeys] = useState({
    sk: '',
    pk: '',
  });
  async function encrypData() {
    await utility.getItemObject('wkeys').then(keys => {
      if (keys) {
        seTwalletKeys({ ...walletKeys, sk: keys?.sk, pk: keys?.pk });
      } else {
        seTwalletKeys({ ...walletKeys, sk: file?.sk, pk: file?.pk });
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
        // clearRatingsBalance();
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
  const [send, seTsend] = useState('');
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
  };

  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={containerStyle}>
        <Text style={styles.textparagraph}>Адрес отправки</Text>
        <TextInput
          label={'получатель'}
          mode="outlined"
          right={<TextInput.Icon name="barcode" onPress={startScan} />}
          style={styles.textInput}
          value={item?.scAddr}
          editable={false}
        />
        <TextInput
          label={'сумма swt'}
          mode="outlined"
          style={styles.textInput}
          value={price}
          onChangeText={text => seTprice(text)}
        />
        <Pressable
          onPress={handleSendCoins}
          style={[styles.completeButton, { marginTop: 20 }]}>
          <Text style={styles.completeButtonText}>Отправить баланс</Text>
        </Pressable>
      </Modal>
    </Portal>
  );
}
