import React, {
  useRef,
  Fragment,
  useState,
  useContext,
  useEffect,
  useCallback,
} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
  RefreshControl,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useToast} from 'react-native-toast-notifications';

import styles from './styles';
import {Appbar, Card, Title, Paragraph, Button} from 'react-native-paper';
import {useFocusEffect} from '@react-navigation/native';
import BalanceContext from '../../context/balance/BalanceContext';
import HomeBottomSheet from '../../components/HomeBottomSheet';
import utility from '../../utils/Utility';
import BalanceModal from './balanceModal';
import CartModal from './cartModal';
import Loading from '../../components/Loading';
import defaultImage from '../../assets/defaultImage.jpg';

const columns = [
  {
    name: 'from',
    valInt: 0,
  },
  {
    name: 'to',
    valInt: 1,
  },
  {
    name: 'direction',
    valInt: 0,
  },
];

export default function EventsScreen({navigation}) {
  const balanceContext = useContext(BalanceContext);
  const ref = useRef(null);
  const toast = useToast();
  const {loading, balance, getBalance, getRatings, rates, clearRatingsBalance} =
    balanceContext;

  const [stavki, seTstavki] = useState([]);
  const [visible, setVisible] = useState(false);
  const [visibleCartModal, seTvisibleCartModal] = React.useState(false);
  const showModal = () => setVisible(true);

  const hideModal = () => setVisible(false);
  const hideModalCart = () => seTvisibleCartModal(false);

  const [refreshing, setRefreshing] = useState(false);
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
  console.log('reates: ', rates);
  const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    clearRatingsBalance();
    encrypData();
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const profilePicture = null;
  const renderImage = useCallback(() => {
    return (
      <Image srouce={defaultImage} style={{width: '100%', height: '100%'}} />
    );
  }, [profilePicture]);

  useEffect(() => {
    renderImage();
  }, [renderImage]);
  const handlePress = () => {
    ref.current.show();
  };

  return (
    <Fragment>
      <Loading loading={loading} />
      <Appbar.Header
        style={{
          backgroundColor: '#fff',
          borderBottomWidth: 1,
          borderBottomColor: '#003143',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View>
          <Image
            source={require('../../assets/star.png')} //Change your icon image here
            style={{height: 25, width: 25}}
          />
        </View>
        <TouchableOpacity
          onPress={handlePress}
          style={{
            borderRadius: 50,
            overflow: 'hidden',
          }}>
          <Image
            source={require('../../assets/defaultImage.jpg')} //Change your icon image here
            style={{height: 25, width: 25}}
          />
        </TouchableOpacity>
        <HomeBottomSheet
          ref={ref}
          navigation={navigation}
          image={renderImage()}
        />
      </Appbar.Header>

      <KeyboardAwareScrollView>
        <SafeAreaView style={styles.screen}>
          <ScrollView
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 20, alignSelf: 'flex-end'}}>
                Баланс:{' '}
                <Text style={{color: '#000'}} onPress={showModal}>
                  {balance?.balance} swt
                </Text>
              </Text>
              {/*
              <Button
                style={{ marginLeft: 10 }}
                mode="contained"
                onPress={() => navigation.navigate('BalanceSendScreen')}>
                Пополнить
              </Button>*/}
            </View>

            <FlatList
              style={{
                flex: 1,
              }}
              data={stavki}
              keyExtractor={state => (Math.random(100) * 10).toString()}
              renderItem={({item}) => {
                return (
                  <Card
                    onPress={() => navigation.navigate('RatingScreen', {item})}
                    style={{
                      flex: 1,
                      width: '90%',
                      margin: 5,
                      borderColor: '#000',
                      borderWidth: 2,
                    }}>
                    <Card.Content>
                      <Title style={{fontSize: 16}}>События: {item.dt}</Title>

                      <Paragraph>Наименование {item.name}</Paragraph>

                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                        }}>
                        <Paragraph>Cтатус: скоро</Paragraph>
                        <Text style={{paddingLeft: 3}}>21/01/2022</Text>
                      </View>
                    </Card.Content>
                  </Card>
                );
              }}
            />
          </ScrollView>

          <BalanceModal
            walletKeys={walletKeys}
            visible={visible}
            hideModal={hideModal}
          />

          <CartModal visible={visibleCartModal} hideModal={hideModalCart} />
        </SafeAreaView>
      </KeyboardAwareScrollView>
    </Fragment>
  );
}
