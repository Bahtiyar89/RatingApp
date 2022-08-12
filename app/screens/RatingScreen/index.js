import React, {Fragment, useState, useContext} from 'react';
import {
  View,
  Pressable,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useFocusEffect} from '@react-navigation/native';
import {Appbar} from 'react-native-paper';

import BalanceContext from '../../context/balance/BalanceContext';
import ShevronLeft from '../../assets/chevron-left';
import SendCoinsModal from './sendCoinsModal';
import MainStyle from '../../utils/MainStyle';
import styles from './styles';
import Loading from '../../components/Loading';

export default function RatingScreen(props) {
  const balanceContext = useContext(BalanceContext);
  const {loading} = balanceContext;

  const [id, seTid] = useState();
  const [item, seTitem] = useState({});
  const [itemName, seTitemName] = useState('');
  const [visibleModal, seTvisibleModal] = useState(false);
  useFocusEffect(
    React.useCallback(() => {
      // Do something when the screen is focused
      seTitem(props.route.params.item);

      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions
      };
    }, [props.route.params.item]),
  );

  const renderItem = element => {
    return (
      <View key={element?.key}>
        <Text style={styles.legend}>{'Наименование'}</Text>
        <Text style={styles.legend}>{element?.name}</Text>
        <Text style={styles.legend}>{'Cобытия'}</Text>
        <Text style={styles.legend}>{item?.dt}</Text>
        <Text style={styles.legend}>{'Участники'}</Text>
        {element.id1?.trim() != '' && (
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => {
              seTvisibleModal(!visibleModal);
              seTid('id1');
              seTitemName(element.id1);
            }}>
            <Text>{element.id1}</Text>
          </TouchableOpacity>
        )}
        {element.id2?.trim() != '' && (
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => {
              seTvisibleModal(!visibleModal);
              seTid('id2');
              seTitemName(element.id2);
            }}>
            <Text>{element.id2}</Text>
          </TouchableOpacity>
        )}
        {element.id3?.trim() != '' ||
          (element.id3.length == 0 && (
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() => {
                seTvisibleModal(!visibleModal);
                seTid('id3');

                seTitemName(element.id3);
              }}>
              <Text>{element.id3}</Text>
            </TouchableOpacity>
          ))}
        {element.id4?.trim() != '' && (
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => {
              seTvisibleModal(!visibleModal);
              seTid('id4');
              seTitemName(element.id4);
            }}>
            <Text>{element.id4}</Text>
          </TouchableOpacity>
        )}
        {element.id5?.trim() != '' && (
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => {
              seTvisibleModal(!visibleModal);
              seTid('id5');
              seTitemName(element.id5);
            }}>
            <Text>{element.id5}</Text>
          </TouchableOpacity>
        )}
        {element.id6?.trim() != '' && (
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => {
              seTvisibleModal(!visibleModal);
              seTid('id6');
              seTitemName(element.id6);
            }}>
            <Text>{element.id6}</Text>
          </TouchableOpacity>
        )}
        {element.id7?.trim() != '' && (
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => {
              seTvisibleModal(!visibleModal);
              seTid('id7');
              seTitemName(element.id7);
            }}>
            <Text>{element.id7}</Text>
          </TouchableOpacity>
        )}
        {element.id8?.trim() != '' && (
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => {
              seTvisibleModal(!visibleModal);
              seTid('id8');
              seTitemName(element.id8);
            }}>
            <Text>{element.id8}</Text>
          </TouchableOpacity>
        )}
        {element.id9?.trim() != '' && (
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => {
              seTvisibleModal(!visibleModal);
              seTid('id9');
              seTitemName(element.id9);
            }}>
            <Text>{element.id9}</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  };
  console.log('loading: 2', loading);
  return (
    <Fragment>
      <Loading loading={loading} />
      <Appbar.Header style={MainStyle.appBarThreeItems}>
        <Pressable
          style={{alignSelf: 'center'}}
          onPress={() => props.navigation.goBack()}>
          <ShevronLeft />
        </Pressable>
        <View style={MainStyle.appBarThreeDevider}>
          <Text style={MainStyle.textSize}>Ставки</Text>
        </View>
      </Appbar.Header>
      <KeyboardAwareScrollView>
        <SafeAreaView style={styles.screen}>
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            {[item].map(element => renderItem(element))}
          </ScrollView>
        </SafeAreaView>
      </KeyboardAwareScrollView>
      <SendCoinsModal
        visible={visibleModal}
        hideModal={() => seTvisibleModal(false)}
        item={item}
        id={id}
        itemName={itemName}
      />
    </Fragment>
  );
}
