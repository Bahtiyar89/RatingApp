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
import ButtonComponent from './ButtonComponent';

export default function RatingScreen(props) {
  const balanceContext = useContext(BalanceContext);
  const {loading} = balanceContext;

  const [id, setId] = useState();
  const [item, setItem] = useState({});
  const [itemName, setItemName] = useState('');
  const [visibleModal, setVisibleModal] = useState(false);
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
        <Text style={styles.legend}>{'Наименование'}</Text>
        <Text style={styles.legend}>{element?.name}</Text>
        <Text style={styles.legend}>{'Cобытия'}</Text>
        <Text style={styles.legend}>{item?.dt}</Text>
        <Text style={styles.legend}>{'Участники'}</Text>
        {element.id1?.trim() != '' && element.id1?.trim() != 'none' && (
          <ButtonComponent
            id={element.id1}
            setmodal={() => setVisibleModal(!visibleModal)}
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
    );
  };

  return (
    <Fragment>
      <Loading loading={loading} />
      <Appbar.Header style={MainStyle.appBarThreeItems}>
        <Pressable
          style={{
            paddingHorizontal: 10,
            height: 64,
            flexDirection: 'row',
            alignItems: 'center',
          }}
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
        hideModal={() => setVisibleModal(false)}
        item={item}
        id={id}
        itemName={itemName}
      />
    </Fragment>
  );
}
