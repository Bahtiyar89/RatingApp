import React, { useState } from 'react';
import { Text, Pressable, TouchableOpacity, View } from 'react-native';
import { Modal, Portal, TextInput } from 'react-native-paper';
import QRCodeScanner from 'react-native-qrcode-scanner';
import QRCode from 'react-native-qrcode-svg';
import Clipboard from '@react-native-clipboard/clipboard';

import styles from './styles';

export default function BalanceModal({ walletKeys, visible, hideModal }) {
  const containerStyle = {
    backgroundColor: 'white',
    padding: 20,
    margin: 0,
    borderRadius: 20,
  };
  const [replenish, seTreplenish] = useState('');
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

  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={containerStyle}>
        {!scan && (
          <>
            <QRCode value={walletKeys?.pk} />
            <Pressable
              onPress={() => console.log()}
              style={[
                styles.completeButton,
                { marginTop: 20, marginBottom: 20 },
              ]}>
              <Text style={styles.completeButtonText}>Пополнить баланс</Text>
            </Pressable>
            <Text style={styles.textparagraph}>Адрес отправки</Text>
            <TextInput
              label={'получатель'}
              mode="outlined"
              right={<TextInput.Icon name="barcode" onPress={startScan} />}
              style={styles.textInput}
              value={result}
            />
            <Pressable
              onPress={() => console.log()}
              style={[styles.completeButton, { marginTop: 20 }]}>
              <Text style={styles.completeButtonText}>Отправить баланс</Text>
            </Pressable>
          </>
        )}
        {scan && (
          <View style={styles.sectionContainer}>
            <TouchableOpacity onPress={() => setScan(false)}>
              <Text>закрыть сканирование</Text>
            </TouchableOpacity>
            <QRCodeScanner
              containerStyle={{ position: 'absolute' }}
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
      </Modal>
    </Portal>
  );
}
