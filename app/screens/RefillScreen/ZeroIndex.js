import React, {Fragment, useContext, useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import {useToast} from 'react-native-toast-notifications';
import Clipboard from '@react-native-clipboard/clipboard';

import Colors from '../../constants/Сolors';
import ModdleGradientSvg from '../../assets/ModdleGradientSvg';

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
    </Fragment>
  );
};

export default ZeroIndex;
