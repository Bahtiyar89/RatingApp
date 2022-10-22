import React, {Fragment, useState, useContext} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useFocusEffect} from '@react-navigation/native';
import {Card, Title, Paragraph, Button} from 'react-native-paper';

import BalanceContext from '../../context/balance/BalanceContext';
import ShevronLeft from '../../assets/chevron-left';
import SendCoinsModal from './sendCoinsModal';
import MainStyle from '../../utils/MainStyle';
import styles from './styles';
import Loading from '../../components/Loading';
import ButtonComponent from './ButtonComponent';
import utility from '../../utils/Utility';

export default function RatingScreen(props) {
  const balanceContext = useContext(BalanceContext);
  const {loading, getBalance, clearRatingsBalance, balance} = balanceContext;

  const [id, setId] = useState();
  const [item, setItem] = useState({});
  const [itemName, setItemName] = useState('');
  const [visibleModal, setVisibleModal] = useState(false);
  const [result, setResult] = useState('');
  useFocusEffect(
    React.useCallback(() => {
      // Do something when the screen is focused
      setItem(props.route.params.item);

      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions
      };
    }, [props.route.params.item]),
  );

  const renderItem = element => {
    console.log('item:: ', item);
    return (
      <View key={element?.key}>
        <Title style={styles.legend}>{element?.name}</Title>
        <Paragraph
          style={{
            fontWeight: '400',
            color: '#8E8E93',
            fontSize: 14,
            lineHeight: 17,
          }}>
          {item?.dt}
        </Paragraph>
        <Text style={styles.legend}>{'Команды'}</Text>

        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}>
          {element.id1?.trim() != '' && element.id1?.trim() != 'none' && (
            <ButtonComponent
              itemName={itemName}
              id={element.id1}
              setmodal={() => console.log('ccc', itemName)}
              setId={() => setId('id1')}
              setItemName={() => setItemName(element.id1)}
            />
          )}

          {element.id2?.trim() != '' && element.id2?.trim() != 'none' && (
            <ButtonComponent
              id={element.id2}
              setmodal={() => setVisibleModal(!visibleModal)}
              setId={() => setId('id2')}
              setItemName={() => setItemName(element.id2)}
            />
          )}

          {element.id3?.trim() != '' && element.id3?.trim() != 'none' && (
            <ButtonComponent
              id={element.id3}
              setmodal={() => setVisibleModal(!visibleModal)}
              setId={() => setId('id3')}
              setItemName={() => setItemName(element.id3)}
            />
          )}

          {element.id4?.trim() != '' && element.id4?.trim() != 'none' && (
            <ButtonComponent
              id={element.id4}
              setmodal={() => setVisibleModal(!visibleModal)}
              setId={() => setId('id4')}
              setItemName={() => setItemName(element.id4)}
            />
          )}

          {element.id5?.trim() != '' && element.id5?.trim() != 'none' && (
            <ButtonComponent
              id={element.id5}
              setmodal={() => setVisibleModal(!visibleModal)}
              setId={() => setId('id5')}
              setItemName={() => setItemName(element.id5)}
            />
          )}

          {element.id6?.trim() != '' && element.id6?.trim() != 'none' && (
            <ButtonComponent
              id={element.id6}
              setmodal={() => setVisibleModal(!visibleModal)}
              setId={() => setId('id6')}
              setItemName={() => setItemName(element.id6)}
            />
          )}

          {element.id7?.trim() != '' && element.id7?.trim() != 'none' && (
            <ButtonComponent
              id={element.id7}
              setmodal={() => setVisibleModal(!visibleModal)}
              setId={() => setId('id7')}
              setItemName={() => setItemName(element.id7)}
            />
          )}

          {element.id8?.trim() != '' && element.id8?.trim() != 'none' && (
            <ButtonComponent
              id={element.id8}
              setmodal={() => setVisibleModal(!visibleModal)}
              setId={() => setId('id8')}
              setItemName={() => setItemName(element.id8)}
            />
          )}

          {element.id9?.trim() != '' && element.id9?.trim() != 'none' && (
            <ButtonComponent
              id={element.id9}
              setmodal={() => setVisibleModal(!visibleModal)}
              setId={() => setId('id9')}
              setItemName={() => setItemName(element.id9)}
            />
          )}
        </View>
      </View>
    );
  };
  console.log('balance: ', balance);

  async function encrypData() {
    await utility.getItemObject('wkeys').then(keys => {
      if (keys) {
        getBalance(keys);
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

  return (
    <Fragment>
      <Loading loading={loading} />

      <KeyboardAwareScrollView>
        <SafeAreaView style={styles.screen}>
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                width: '90%',
                justifyContent: 'space-between',
              }}>
              <TouchableOpacity
                style={{
                  height: 64,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
                onPress={() => props.navigation.goBack()}>
                <ShevronLeft />
              </TouchableOpacity>
              <View style={MainStyle.appBarThreeDevider}>
                <Text
                  style={{
                    fontSize: 18,
                    color: '#8E8E93',
                    textAlign: 'center',
                    width: '100%',
                  }}>
                  Сделать ставку
                </Text>
              </View>
            </View>
            <Text style={styles.balance}>{balance?.balance}</Text>
            <Text style={styles.currentBalance}>Текущий баланс SWT</Text>
            <Card
              onPress={() => props.navigation.navigate('RatingScreen', {item})}
              style={{
                flex: 1,
                marginTop: 8,
                borderRadius: 10,
                marginBottom: 20,
              }}>
              <Card.Content>
                {[item].map(element => renderItem(element))}
                <SendCoinsModal
                  visible={visibleModal}
                  hideModal={() => setVisibleModal(false)}
                  item={item}
                  id={id}
                  itemName={itemName}
                />
              </Card.Content>
            </Card>
          </ScrollView>
        </SafeAreaView>
      </KeyboardAwareScrollView>
    </Fragment>
  );
}
