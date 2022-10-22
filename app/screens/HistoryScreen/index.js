import {
  View,
  TextInput,
  Pressable,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {Fragment, useState} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {Appbar, Card, Title, Paragraph, Button} from 'react-native-paper';
import styles from './styles';
import MolotokSvg from '../../assets/MolotokSvg';

export default function HistoryScreen({navigation}) {
  return (
    <Fragment>
      <KeyboardAwareScrollView>
        <SafeAreaView style={styles.screen}>
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 30,
              }}>
              <Text style={{color: '#8E8E93', fontWeight: '500', fontSize: 18}}>
                История ставок
              </Text>
            </View>
            <Text
              style={{
                marginTop: 13,
                fontWeight: '700',
                fontSize: 22,
                lineHeight: 26,
                color: '#333333',
              }}>
              Активные
            </Text>

            <Card
              onPress={() => navigation.navigate('RatingScreen', {item})}
              style={{
                flex: 1,
                marginTop: 8,
                borderRadius: 10,
              }}>
              <Card.Content
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  alignItems: 'flex-start', // if you want to fill rows left to right
                }}>
                <View style={{width: '60%'}}>
                  <Text
                    style={{
                      fontSize: 12,
                      lineHeight: 14,
                      fontWeight: '400',
                      color: '#8E8E93',
                    }}>
                    Ставка
                  </Text>
                  <Text
                    style={{
                      fontWeight: '500',
                      fontSize: 14,
                      lineHeight: 17,
                      color: '#333333',
                    }}>
                    Кто выиграет в Хакатон?
                  </Text>
                  <Text
                    style={{
                      marginTop: 16,
                      fontSize: 12,
                      lineHeight: 14,
                      fontWeight: '400',
                      color: '#8E8E93',
                    }}>
                    Ваш прогноз
                  </Text>
                  <Text
                    style={{
                      fontWeight: '500',
                      fontSize: 14,
                      lineHeight: 17,
                      color: '#333333',
                    }}>
                    Команда Жени Бутяева
                  </Text>
                  <Text
                    style={{
                      marginTop: 16,
                      fontSize: 12,
                      lineHeight: 14,
                      fontWeight: '400',
                      color: '#8E8E93',
                    }}>
                    Дата окончания
                  </Text>
                  <Text
                    style={{
                      fontWeight: '500',
                      fontSize: 14,
                      lineHeight: 17,
                      color: '#333333',
                    }}>
                    24.10.2022
                  </Text>
                </View>
                <View style={{width: '40%'}}>
                  <Text
                    style={{
                      fontSize: 12,
                      lineHeight: 14,
                      fontWeight: '400',
                      color: '#8E8E93',
                    }}>
                    Дата
                  </Text>
                  <Text
                    style={{
                      fontWeight: '500',
                      fontSize: 14,
                      lineHeight: 17,
                      color: '#333333',
                    }}>
                    24.10.2022
                  </Text>
                  <Text
                    style={{
                      marginTop: 16,
                      fontSize: 12,
                      lineHeight: 14,
                      fontWeight: '400',
                      color: '#8E8E93',
                    }}>
                    Вы поставки
                  </Text>
                  <Text
                    style={{
                      fontWeight: '500',
                      fontSize: 14,
                      lineHeight: 17,
                      color: '#333333',
                    }}>
                    12 SWT
                  </Text>
                </View>
              </Card.Content>
            </Card>

            <Text
              style={{
                marginTop: 30,
                fontWeight: '700',
                fontSize: 22,
                lineHeight: 26,
                color: '#333333',
              }}>
              Завершенные
            </Text>

            <Card
              onPress={() => navigation.navigate('RatingScreen', {item})}
              style={{
                flex: 1,
                marginTop: 8,
                borderRadius: 10,
              }}>
              <Card.Content
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  alignItems: 'flex-start', // if you want to fill rows left to right
                }}>
                <View style={{width: '60%'}}>
                  <Text
                    style={{
                      fontSize: 12,
                      lineHeight: 14,
                      fontWeight: '400',
                      color: '#8E8E93',
                    }}>
                    Ставка
                  </Text>
                  <Text
                    style={{
                      fontWeight: '500',
                      fontSize: 14,
                      lineHeight: 17,
                      color: '#333333',
                    }}>
                    Куда пойдет BTC?
                  </Text>
                  <Text
                    style={{
                      marginTop: 16,
                      fontSize: 12,
                      lineHeight: 14,
                      fontWeight: '400',
                      color: '#8E8E93',
                    }}>
                    Ваш прогноз
                  </Text>
                  <Text
                    style={{
                      fontWeight: '500',
                      fontSize: 14,
                      lineHeight: 17,
                      color: '#333333',
                    }}>
                    Вниз
                  </Text>
                  <Text
                    style={{
                      marginTop: 16,
                      fontSize: 12,
                      lineHeight: 14,
                      fontWeight: '400',
                      color: '#8E8E93',
                    }}>
                    Итог
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                    }}>
                    <Text
                      style={{
                        padding: 5,
                        borderRadius: 10,
                        fontWeight: '500',
                        fontSize: 14,
                        lineHeight: 17,
                        color: '#339E6B',
                        backgroundColor: '#E4FFEA',
                      }}>
                      Выигрыш:
                      <Text
                        style={{
                          padding: 5,
                          fontWeight: '500',
                          fontSize: 14,
                          lineHeight: 17,
                          color: '#339E6B',
                          backgroundColor: '#E4FFEA',
                        }}>
                        34 SWT
                      </Text>
                    </Text>
                  </View>
                </View>
                <View style={{width: '40%'}}>
                  <Text
                    style={{
                      fontSize: 12,
                      lineHeight: 14,
                      fontWeight: '400',
                      color: '#8E8E93',
                    }}>
                    Дата
                  </Text>
                  <Text
                    style={{
                      fontWeight: '500',
                      fontSize: 14,
                      lineHeight: 17,
                      color: '#333333',
                    }}>
                    24.10.2022
                  </Text>
                  <Text
                    style={{
                      marginTop: 16,
                      fontSize: 12,
                      lineHeight: 14,
                      fontWeight: '400',
                      color: '#8E8E93',
                    }}>
                    Вы поставки
                  </Text>
                  <Text
                    style={{
                      fontWeight: '500',
                      fontSize: 14,
                      lineHeight: 17,
                      color: '#333333',
                    }}>
                    12 SWT
                  </Text>
                </View>
              </Card.Content>
            </Card>

            <Card
              onPress={() => navigation.navigate('RatingScreen', {item})}
              style={{
                flex: 1,
                marginTop: 8,
                borderRadius: 10,
              }}>
              <Card.Content
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  alignItems: 'flex-start', // if you want to fill rows left to right
                }}>
                <View style={{width: '60%'}}>
                  <Text
                    style={{
                      fontSize: 12,
                      lineHeight: 14,
                      fontWeight: '400',
                      color: '#8E8E93',
                    }}>
                    Ставка
                  </Text>
                  <Text
                    style={{
                      fontWeight: '500',
                      fontSize: 14,
                      lineHeight: 17,
                      color: '#333333',
                    }}>
                    Куда пойдет BTC?
                  </Text>
                  <Text
                    style={{
                      marginTop: 16,
                      fontSize: 12,
                      lineHeight: 14,
                      fontWeight: '400',
                      color: '#8E8E93',
                    }}>
                    Ваш прогноз
                  </Text>
                  <Text
                    style={{
                      fontWeight: '500',
                      fontSize: 14,
                      lineHeight: 17,
                      color: '#333333',
                    }}>
                    Вниз
                  </Text>
                  <Text
                    style={{
                      marginTop: 16,
                      fontSize: 12,
                      lineHeight: 14,
                      fontWeight: '400',
                      color: '#8E8E93',
                    }}>
                    Итог
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                    }}>
                    <Text
                      style={{
                        padding: 5,
                        borderRadius: 10,
                        fontWeight: '500',
                        fontSize: 14,
                        lineHeight: 17,
                        color: '#EB5757',
                        backgroundColor: '#FFE7E7',
                      }}>
                      Выигрыш:
                      <Text
                        style={{
                          padding: 5,
                          fontWeight: '500',
                          fontSize: 14,
                          lineHeight: 17,
                          color: '#EB5757',
                          backgroundColor: '#FFE7E7',
                        }}>
                        34 SWT
                      </Text>
                    </Text>
                  </View>
                </View>
                <View style={{width: '40%'}}>
                  <Text
                    style={{
                      fontSize: 12,
                      lineHeight: 14,
                      fontWeight: '400',
                      color: '#8E8E93',
                    }}>
                    Дата
                  </Text>
                  <Text
                    style={{
                      fontWeight: '500',
                      fontSize: 14,
                      lineHeight: 17,
                      color: '#333333',
                    }}>
                    24.10.2022
                  </Text>
                  <Text
                    style={{
                      marginTop: 16,
                      fontSize: 12,
                      lineHeight: 14,
                      fontWeight: '400',
                      color: '#8E8E93',
                    }}>
                    Вы поставки
                  </Text>
                  <Text
                    style={{
                      fontWeight: '500',
                      fontSize: 14,
                      lineHeight: 17,
                      color: '#333333',
                    }}>
                    12 SWT
                  </Text>
                </View>
              </Card.Content>
            </Card>
          </ScrollView>
        </SafeAreaView>
      </KeyboardAwareScrollView>
    </Fragment>
  );
}
