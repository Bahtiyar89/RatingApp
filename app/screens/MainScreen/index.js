import React, {Fragment, useContext, useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity,
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
import PropTypes from 'prop-types';

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

const MainScreen = ({navigation}) => {
  const balanceContext = useContext(BalanceContext);
  const {loading, balance, getBalance, getRatings, rates, clearRatingsBalance} =
    balanceContext;
  console.log('balance: ', rates);
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
          <Text style={styles.title}>
            Crypto<Text style={{color: '#000'}}>XBET</Text>
          </Text>
          <Text style={styles.balance}>{balance?.balance}</Text>
          <Text style={styles.currentBalance}>Текущий баланс SWT</Text>
          <Text style={styles.crypto}>Криптовалюта</Text>
          <View style={{flexDirection: 'row', marginTop: 16}}>
            <View style={{position: 'relative'}}>
              <LittleGradientSvg />
              <View
                style={{
                  position: 'absolute',
                  top: 8,
                  left: 8,
                  right: 0,
                  bottom: 0,
                }}>
                <LogoSvg />
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
                position: 'relative',
                width: 92,
                height: 82,
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
                  source={require('../../assets/EtheriumPng.png')} //Change your icon image here
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
                Etherium
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
              style={{
                marginLeft: 5,
                position: 'relative',
                width: 92,
                height: 82,
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
                  source={require('../../assets/BitcoinPng.png')} //Change your icon image here
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
          <Text style={styles.rateText}>Cтавки</Text>

          <FlatList
            style={{
              flex: 1,
              marginBottom: 50,
            }}
            data={stavki}
            keyExtractor={state => (Math.random(100) * 10).toString()}
            renderItem={({item}) => {
              return (
                <Card
                  style={{
                    flex: 1,
                    marginTop: 8,
                    borderRadius: 10,
                    backgroundColor: '#fff',
                  }}>
                  <Card.Content>
                    <Title
                      style={{
                        color: Colors.black,
                        fontSize: 14,
                        lineHeight: 17,
                      }}>
                      {item.name}
                    </Title>

                    <Paragraph
                      style={{
                        fontSize: 12,
                        lineHeight: 14,
                      }}>
                      {item.content}
                    </Paragraph>

                    <TouchableOpacity
                      style={{
                        flexDirection: 'row-reverse',
                      }}>
                      <View
                        style={{
                          flexDirection: 'row',
                          backgroundColor: '#6248FF',
                          paddingLeft: 14,
                          paddingRight: 4,
                          borderRadius: 10,
                          alignItems: 'center',
                        }}>
                        <Paragraph
                          onPress={() =>
                            navigation.navigate('RatingScreen', {item})
                          }
                          style={{
                            paddingRight: 5,
                            color: '#fff',
                            fontSize: 14,
                            lineHeight: 17,
                          }}>
                          Сделать ставку
                        </Paragraph>
                        <MolotokSvg />
                      </View>
                    </TouchableOpacity>
                  </Card.Content>
                </Card>
              );
            }}
          />
        </SafeAreaView>
      </KeyboardAwareScrollView>
    </Fragment>
  );
};

MainScreen.propTypes = {
  navigation: PropTypes.object,
};

MainScreen.defaultProps = {
  navigation: {},
};

export default MainScreen;
