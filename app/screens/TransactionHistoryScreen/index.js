import React, {Fragment, useState, useContext} from 'react';
import {View, Pressable, Text} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import {WebView} from 'react-native-webview';

import {Appbar, Card, Title, Paragraph} from 'react-native-paper';
import MainStyle from '../../utils/MainStyle';
import ShevronLeft from '../../assets/chevron-left';
import PropTypes from 'prop-types';

export default function TransactionHistoryScreen({navigation, route}) {
  const [fromAccount, seTfromAccount] = useState('');

  useFocusEffect(
    React.useCallback(() => {
      // Do something when the screen is focused
      seTfromAccount(route.params.fromAccount);

      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions
      };
    }, [route.params.fromAccount]),
  );
  console.log('route: ', fromAccount);
  return (
    <Fragment>
      <Appbar.Header style={MainStyle.appBarThreeItems}>
        <Pressable
          style={{alignSelf: 'center'}}
          onPress={() => navigation.goBack()}>
          <ShevronLeft />
        </Pressable>
        <View style={MainStyle.appBarThreeDevider}>
          <Text style={MainStyle.textSize}>История транзакций</Text>
        </View>
      </Appbar.Header>
      <WebView
        source={{
          uri: `http://194.87.103.77:63500/Network/account/${fromAccount}`,
        }}
      />
    </Fragment>
  );
}

TransactionHistoryScreen.propTypes = {
  navigation: PropTypes.object,
};

TransactionHistoryScreen.defaultProps = {
  navigation: {},
};

TransactionHistoryScreen.propTypes = {
  route: PropTypes.object,
};

TransactionHistoryScreen.defaultProps = {
  route: {},
};
