import React, {Fragment} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import {useToast} from 'react-native-toast-notifications';
import Clipboard from '@react-native-clipboard/clipboard';
import RNFS from 'react-native-fs';
import utility from '../../utils/Utility';

const ZeroIndex = ({navigation, walletKeys}) => {
  const toast = useToast();
  const bufferCopy = () => {
    Clipboard.setString(walletKeys.pk);
    toast.show('Успешно скапированно в буффер!' + walletKeys.pk, {
      type: 'success',
      duration: 3000,
      animationType: 'zoom-in',
    });
  };

  const downloadKeys = async () => {
    await utility.getItemObject('wkeys').then(keys => {
      if (keys) {
        var path = RNFS.DocumentDirectoryPath + '/keys.txt';
        console.log('path: ', path);

        RNFS.writeFile(path, JSON.stringify(keys), 'utf8')
          .then(() =>
            toastRef.current.show('Успешно сохранено', {
              type: 'success',
              duration: 4000,
              animationType: 'zoom-in',
            }),
          )
          .catch(err => console.log(err.message));
      } else {
        console.log('else', keys);
      }
    });
  };

  return (
    <Fragment>
      <Text
        style={{
          marginTop: 30,
          fontWeight: '700',
          fontSize: 22,
          lineHeight: 26,
          color: '#333333',
        }}>
        {'Ваш публичный ключ:'}
      </Text>
      <View style={{marginTop: 20}}>
        {walletKeys?.pk && <QRCode value={walletKeys?.pk || ''} />}
      </View>

      <TouchableOpacity
        onPress={bufferCopy}
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
          Скопировать в буффер
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={downloadKeys}
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
          Скачать ключи
        </Text>
      </TouchableOpacity>
    </Fragment>
  );
};

export default ZeroIndex;
