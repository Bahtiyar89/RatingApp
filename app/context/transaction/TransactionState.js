import React, {useReducer} from 'react';
import {useToast} from 'react-native-toast-notifications';

import TransactionContext from './TransactionContext';
import TransactionReducer from './TransactionReducer';
import {doGet, doPost, doPatch} from '../../utils/apiActions';

import {LOADING_DETECTOR, GET_HISTORY, CLEAR_DETECTOR} from '../types';

const TransactionState = props => {
  const toast = useToast();
  const initialState = {
    transactionHistory: [],
    loading_transaction: false,
    error: false,
  };

  const [state, dispatch] = useReducer(TransactionReducer, initialState);

  //GET History
  const getTransactionsByWallet = async keys => {
    console.log('keys: 3333walletKeys:', keys);
    dispatch({type: LOADING_DETECTOR, payload: true});
    doPost('api/Monitor/GetTransactionsByWallet', {
      authKey: '',
      networkAlias: 'MainNet',
      networkIp: '',
      networkPort: '',
      methodApi: '',
      compressed: true,
      publicKey: keys.pk,
      offset: 0,
      limit: 100,
    })
      .then(({data}) => {
        console.log('data: ', data.transactions);
        dispatch({type: LOADING_DETECTOR, payload: false});
        dispatch({type: GET_HISTORY, payload: data.transactions});
      })
      .catch(error => {
        dispatch({type: LOADING_DETECTOR, payload: false});
        toast.show(error.message, {
          type: 'warning',
          duration: 3000,
          animationType: 'zoom-in',
        });
      });
  };

  //Clean Profile
  const cleanDetector = async () => {
    dispatch({type: CLEAR_DETECTOR});
  };

  return (
    <TransactionContext.Provider
      value={{
        loading_transaction: state.loading_transaction,
        error: state.error,
        transactionHistory: state.transactionHistory,
        getTransactionsByWallet,
        cleanDetector,
      }}>
      {props.children}
    </TransactionContext.Provider>
  );
};

export default TransactionState;
