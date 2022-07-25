import React, {Fragment, useState, useContext} from 'react';
import {
  View,
  TextInput,
  Pressable,
  Text,
  SafeAreaView,
  ScrollView,
  FlatList,
} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Loading from '../../components/Loading';
import {
  Appbar,
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
} from 'react-native-paper';

import TransactionContext from '../../context/transaction/TransactionContext';

import MainStyle from '../../utils/MainStyle';
import ShevronLeft from '../../assets/chevron-left';
import CustomHeader from '../../components/CustomHeader';
import utility from '../../utils/Utility';
import styles from './styles';

export default function TransactionScreen({navigation}) {
  const transactionContext = useContext(TransactionContext);
  const {loading_transaction, transactionHistory, getTransactionsByWallet} =
    transactionContext;

  const [walletKeys, seTwalletKeys] = useState({
    sk: '',
    pk: '0',
  });

  async function encrypData() {
    await utility.getItemObject('wkeys').then(keys => {
      if (keys) {
        getTransactionsByWallet(keys);
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

  console.log('transactionHistory: ', transactionHistory);
  return (
    <Fragment>
      <Loading loading={loading_transaction} />
      <Appbar.Header style={MainStyle.appBarThreeItems}>
        <Pressable
          style={{alignSelf: 'center'}}
          onPress={() => navigation.goBack()}>
          <ShevronLeft />
        </Pressable>
        <View style={MainStyle.appBarThreeDevider}>
          <Text style={MainStyle.textSize}>Список транзакций</Text>
        </View>
      </Appbar.Header>
      <KeyboardAwareScrollView>
        <SafeAreaView style={styles.screen}>
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            <FlatList
              data={transactionHistory}
              keyExtractor={item => 'item_' + item.id}
              renderItem={({item, index}) => {
                console.log('item: ', item);
                return (
                  <Card style={{marginTop: 20}}>
                    <Card.Content>
                      <Title>
                        Id:{item.id} Status: {item.status}
                      </Title>
                      <Paragraph style={{fontWeight: 'bold'}}>
                        From: <Paragraph>{item.fromAccount}</Paragraph>
                      </Paragraph>
                      <Paragraph style={{fontWeight: 'bold'}}>
                        To:<Paragraph>{item.toAccount}</Paragraph>
                      </Paragraph>
                      <Paragraph style={{fontWeight: 'bold'}}>
                        innerId:<Paragraph>{item.innerId}</Paragraph>
                      </Paragraph>
                      <Paragraph style={{fontWeight: 'bold'}}>
                        Sum:<Paragraph>{item.sum}</Paragraph>
                      </Paragraph>
                      <Paragraph style={{fontWeight: 'bold'}}>
                        Time:<Paragraph>{item.time}</Paragraph>
                      </Paragraph>
                      <Paragraph style={{fontWeight: 'bold'}}>
                        Fee:<Paragraph>{item.fee}</Paragraph>
                      </Paragraph>
                    </Card.Content>
                  </Card>
                );
              }}
            />
          </ScrollView>
        </SafeAreaView>
      </KeyboardAwareScrollView>
    </Fragment>
  );
}
