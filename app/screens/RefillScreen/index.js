import React, {Fragment, useContext, useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import {Appbar, Card, Title, Paragraph, Button} from 'react-native-paper';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useFocusEffect} from '@react-navigation/native';

import BalanceContext from '../../context/balance/BalanceContext';
import utility from '../../utils/Utility';
import LittleGradientSvg from '../../assets/LittleGradientSvg';
import LogoSvg from '../../assets/LogoSvg';
import styles from './styles';
import MolotokSvg from '../../assets/MolotokSvg';
import Colors from '../../constants/Сolors';
import ZeroIndex from './ZeroIndex';
import OneIndex from './OneIndex';

const columns = [
  {
    name: 'from',
    valInt: 0,
  },
  {
    name: 'to',
    valInt: 3,
  },
  {
    name: 'direction',
    valInt: 0,
  },
];

const RefillScreen = ({navigation}) => {
  const balanceContext = useContext(BalanceContext);
  const {loading, balance, getBalance, getRatings, rates, clearRatingsBalance} =
    balanceContext;
  console.log('balance: ', rates);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [walletKeys, seTwalletKeys] = useState({
    sk: '',
    pk: '',
  });

  async function encrypData() {
    await utility.getItemObject('wkeys').then(keys => {
      if (keys) {
        getBalance(keys);
        getRatings(columns, keys);

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
        clearRatingsBalance();
      };
    }, []),
  );
  useEffect(() => {
    async function getData() {
      const result = await Promise.resolve(rates);
      seTstavki(result);
    }

    getData();
  }, [rates]);
  const [stavki, seTstavki] = useState([
    {
      name: 'Кто выиграет в Хакатон?',
      content:
        'Ходит мнение, что совсем скоро, через пару часов, выиграет команда Жени Бутяева :)',
    },
    {
      name: 'Куда пойдет BTC?',
      content:
        'Ходит мнение, что совсем скоро, через месяц, монета от биржи Binance пойдет вниз на 3%',
    },
    {
      name: 'Куда пойдет ETH?',
      content:
        'Ходит мнение, что совсем скоро, через месяц, монета от биржи Binance пойдет вниз на 3%',
    },
  ]);
  return (
    <Fragment>
      <KeyboardAwareScrollView>
        <SafeAreaView style={styles.screen}>
          <Text style={styles.currentBalance}>Текущий баланс SWT</Text>
          <Text style={styles.balance}>{balance?.balance}</Text>

          <View
            style={{
              flexDirection: 'row',
              height: 32,
              backgroundColor: Colors.white,
              padding: 1,
              borderRadius: 6,
              marginTop: 30,
            }}>
            <TouchableOpacity
              onPress={() => setSelectedIndex(0)}
              style={{
                justifyContent: 'center',
                width: '50%',
                borderRadius: 6,
                backgroundColor:
                  selectedIndex == 0 ? Colors.defaultBlue : Colors.white,
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  fontWeight: '500',
                  lineHeight: 16,
                  color: selectedIndex == 0 ? Colors.white : Colors.black,
                }}>
                Пополнение
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setSelectedIndex(1)}
              style={{
                justifyContent: 'center',
                width: '50%',
                borderRadius: 6,
                backgroundColor:
                  selectedIndex == 1 ? Colors.defaultBlue : Colors.white,
              }}>
              <Text
                style={{
                  fontWeight: '500',
                  lineHeight: 16,
                  textAlign: 'center',
                  color: selectedIndex == 1 ? Colors.white : Colors.black,
                }}>
                Вывод
              </Text>
            </TouchableOpacity>
          </View>

          {selectedIndex === 0 ? (
            <ZeroIndex walletKeys={walletKeys} />
          ) : (
            <OneIndex walletKeys={walletKeys} visible={true} />
          )}
        </SafeAreaView>
      </KeyboardAwareScrollView>
    </Fragment>
  );
};

export default RefillScreen;
