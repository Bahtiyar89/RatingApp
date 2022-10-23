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
import Clipboard from '@react-native-clipboard/clipboard';
import Colors from '../../constants/Сolors';
import ModdleGradientSvg from '../../assets/ModdleGradientSvg';

const ZeroIndex = ({navigation, walletKeys}) => {
  const [price, seTprice] = useState('');
  console.log('walletKeys: ', walletKeys.pk);
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
        Выберите платежный метод
      </Text>
      <View style={{flexDirection: 'row', marginTop: 16}}>
        <View
          style={{
            position: 'relative',
            width: 112,
            height: 95,
            backgroundColor: '#fff',
            borderRadius: 15,
          }}>
          <View
            style={{
              position: 'absolute',
              top: 8,
              left: 8,
              right: 0,
              bottom: 0,
            }}>
            <Image
              source={require('../../assets/BankCard.png')} //Change your icon image here
              style={{height: 32, width: 32}}
            />
          </View>

          <Text
            style={{
              position: 'absolute',
              top: 45,
              left: 8,
              right: 0,
              bottom: 0,
              fontSize: 12,
              color: '#000',
            }}>
            Viza/Mastercard
          </Text>
          <Text
            style={{
              position: 'absolute',
              top: 60,
              left: 8,
              right: 0,
              bottom: 0,
              fontSize: 10,
              color: '#B3B8C6',
            }}>
            ETH
          </Text>
        </View>
        <View
          style={{marginLeft: 5, width: 112, height: 95, position: 'relative'}}>
          <ModdleGradientSvg width={112} height={95} />
          <View
            style={{
              position: 'absolute',
              top: 8,
              left: 8,
              right: 0,
              bottom: 0,
            }}>
            <Image
              source={require('../../assets/Metamask.png')} //Change your icon image here
              style={{height: 32, width: 32}}
            />
          </View>

          <Text
            style={{
              position: 'absolute',
              top: 45,
              left: 8,
              right: 0,
              bottom: 0,
              fontSize: 12,
              color: '#fff',
            }}>
            Smart World...
          </Text>
          <Text
            style={{
              position: 'absolute',
              top: 60,
              left: 8,
              right: 0,
              bottom: 0,
              fontSize: 10,
              color: 'rgba(255, 255, 255, 0.65)',
            }}>
            Swt
          </Text>
        </View>
        <View
          style={{
            marginLeft: 5,
            position: 'relative',
            width: 112,
            height: 95,
            backgroundColor: '#fff',
            borderRadius: 15,
          }}>
          <View
            style={{
              position: 'absolute',
              top: 8,
              left: 8,
            }}>
            <Image
              source={require('../../assets/CoinBase.png')} //Change your icon image here
              style={{height: 32, width: 32}}
            />
          </View>

          <Text
            style={{
              position: 'absolute',
              top: 45,
              left: 8,
              right: 0,
              bottom: 0,
              fontSize: 12,
              color: '#000',
            }}>
            Bitcoin
          </Text>
          <Text
            style={{
              position: 'absolute',
              top: 60,
              left: 8,
              right: 0,
              bottom: 0,
              fontSize: 10,
              color: '#B3B8C6',
            }}>
            BTC
          </Text>
        </View>
      </View>
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
        <QRCode value={walletKeys.pk} />
        <TouchableOpacity onPress={() => Clipboard.setString(walletKeys.pk)}>
          <Text style={{color: Colors.defaultBlue, fontWeight: '700'}}>
            Скопировать в буффер
          </Text>
        </TouchableOpacity>
      </View>

      <Text
        style={{
          marginTop: 30,
          fontWeight: '700',
          fontSize: 22,
          lineHeight: 26,
          color: '#333333',
        }}>
        Введите сумму
      </Text>
      <TextInput
        style={[
          {
            paddingLeft: 8,
            marginTop: 10,
            fontSize: 13,
            height: 40,
            borderRadius: 8,
            color: '#FFFFFF30%',
            backgroundColor: Colors.white,
          },
        ]}
        onChangeText={text => seTprice(text)}
        value={price}
        placeholderTextColor={'#B3B8C6'}
        placeholder="от 1 SWT"
      />
      <View style={{flexDirection: 'row', marginTop: 8}}>
        <TouchableOpacity
          onPress={() => seTprice('10')}
          style={{
            borderRadius: 8,
            backgroundColor: '#6248FF',
            padding: 5,
          }}>
          <Text style={{color: Colors.white}}>10 SWT</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => seTprice('20')}
          style={{
            borderRadius: 8,
            backgroundColor: '#6248FF',
            marginLeft: 10,
            padding: 5,
          }}>
          <Text style={{color: Colors.white}}>20 SWT</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => seTprice('100')}
          style={{
            borderRadius: 8,
            backgroundColor: '#6248FF',
            marginLeft: 10,
            padding: 5,
          }}>
          <Text style={{color: Colors.white}}>100 SWT</Text>
        </TouchableOpacity>
      </View>
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
          Пополнить
        </Text>
      </TouchableOpacity>
    </Fragment>
  );
};

export default ZeroIndex;
