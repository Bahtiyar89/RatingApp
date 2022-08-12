import React, {useReducer} from 'react';
import {useToast} from 'react-native-toast-notifications';
import basex from 'bs58-rn';
import Base64 from 'base64-js';
import Buffer from 'buffer';
import Sodium from 'react-native-sodium';

import BalanceContext from './BalanceContext';
import BalanceReducer from './BalanceReducer';
import {doPost} from '../../utils/apiActions';

import {
  GET_BALANCE,
  LOADING,
  GET_RATINGS,
  CLEAR_RATINGS_BALANCE,
} from '../types';

const BalanceState = props => {
  const toast = useToast();
  const initialState = {
    balance: {},
    rates: [],
    loading: false,
    error: [],
  };
  const [state, dispatch] = useReducer(BalanceReducer, initialState);

  //Get Balance
  const getBalance = async file => {
    dispatch({type: LOADING, payload: true});
    doPost('api/Monitor/GetBalance/', {
      PublicKey: file?.pk,
      networkAlias: 'MainNet',
    })
      .then(({data}) => {
        dispatch({type: LOADING, payload: false});
        dispatch({type: GET_BALANCE, payload: data});
      })
      .catch(error => {
        dispatch({type: LOADING, payload: false});
        toast.show(error.message, {
          type: 'warning',
          duration: 3000,
          animationType: 'zoom-in',
        });
      });
  };

  const transactionExecute = async (formData, transactionPackagedStr, keys) => {
    const ALPHABET =
      '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
    const base58 = basex(ALPHABET);

    let decodedFoBase58 = base58.decode(keys.sk);
    const decryptedMessageFromByteArray = Base64.fromByteArray(decodedFoBase58);

    let decoded = base58.decode(transactionPackagedStr);
    const decrypted = Base64.fromByteArray(decoded);

    let dt = await Sodium.crypto_sign_detached(
      decrypted,
      decryptedMessageFromByteArray,
    );

    let signature = base58.encode(Buffer.Buffer.from(dt, 'base64'));

    doPost('api/transaction/Execute', {
      authKey: '',
      NetworkAlias: 'MainNet',
      MethodApi: 'SmartMethodExecute',
      PublicKey: 'FqeMNqD2AfKUHceJQi8ZpeyEvouzESq7248tfcXAsVD6',
      TokenPublicKey: 'Dp5sC3FTn7KTPdkH8t2s2r5dUvFqYo5Z32HzX8jsToDm',
      TokenMethod: 'GetActiveEvents',
      TransactionSignature: signature,
      notSaveNewState: 1,
      Fee: 0.1,
      contractParams: formData,
    })
      .then(({data}) => {
        console.log('data: 333', data);
        dispatch({type: LOADING, payload: false});
        if (data.success) {
          dispatch({
            type: GET_RATINGS,
            payload: data.dataResponse.smartContractResult,
          });
        } else {
          dispatch({type: LOADING, payload: false});
          toast.show(data.message, {
            type: 'warning',
            duration: 3000,
            animationType: 'zoom-in',
          });
        }
      })
      .catch(error => {
        dispatch({type: LOADING, payload: false});
        toast.show(error.message, {
          type: 'warning',
          duration: 3000,
          animationType: 'zoom-in',
        });
      });
  };

  //Get Ratings
  const getRatings = async (formData, keys) => {
    dispatch({type: LOADING, payload: true});
    const contract = {
      authKey: '',
      NetworkAlias: 'MainNet',
      MethodApi: 'SmartMethodExecute',
      PublicKey: keys?.pk,
      TokenPublicKey: 'Dp5sC3FTn7KTPdkH8t2s2r5dUvFqYo5Z32HzX8jsToDm',
      TokenMethod: 'GetActiveEvents',
      Fee: 0.1,
      notSaveNewState: 1,
      contractParams: formData,
    };

    doPost('api/transaction/pack', contract)
      .then(({data}) => {
        if (data.success) {
          transactionExecute(
            formData,
            data.dataResponse.transactionPackagedStr,
            keys,
          );
        } else {
          dispatch({type: LOADING, payload: false});
          toast.show(data.message, {
            type: 'warning',
            duration: 3000,
            animationType: 'zoom-in',
          });
        }
      })
      .catch(error => {
        dispatch({type: LOADING, payload: false});
        toast.show(error.message, {
          type: 'warning',
          duration: 3000,
          animationType: 'zoom-in',
        });
      });
  };

  const trExtAll = async (transactionPackagedStr, keys) => {
    const ALPHABET =
      '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
    const base58 = basex(ALPHABET);

    let decodedFoBase58 = base58.decode(keys.sk);
    const decryptedMessageFromByteArray = Base64.fromByteArray(decodedFoBase58);

    let decoded = base58.decode(transactionPackagedStr);
    const decrypted = Base64.fromByteArray(decoded);

    let dt = await Sodium.crypto_sign_detached(
      decrypted,
      decryptedMessageFromByteArray,
    );

    let signature = base58.encode(Buffer.Buffer.from(dt, 'base64'));
    console.log('signature: ', signature);
    doPost('api/transaction/Execute', {
      authKey: '',
      NetworkAlias: 'MainNet',
      MethodApi: 'SmartMethodExecute',
      PublicKey: keys?.pk,
      TokenPublicKey: 'Dp5sC3FTn7KTPdkH8t2s2r5dUvFqYo5Z32HzX8jsToDm',
      TokenMethod: 'getTotalActiveEvents',
      TransactionSignature: signature,
      notSaveNewState: 1,
      Fee: 0.1,
      contractParams: [],
    })
      .then(({data}) => {
        dispatch({type: LOADING, payload: false});
        console.log(
          'data eexxxm: ',
          data.dataResponse.smartContractResult.slice(
            18,
            data.dataResponse.smartContractResult.length - 1,
          ),
        );
        getRatings(
          [
            {
              name: 'from',
              valInt: 0,
            },
            {
              name: 'to',
              valInt: parseInt(
                data.dataResponse.smartContractResult.slice(
                  18,
                  data.dataResponse.smartContractResult.length - 1,
                ),
              ),
            },
            {
              name: 'direction',
              valInt: 0,
            },
          ],
          keys,
        );
      })
      .catch(error => {
        dispatch({type: LOADING, payload: false});
        toast.show(error.message, {
          type: 'warning',
          duration: 3000,
          animationType: 'zoom-in',
        });
      });
  };

  //Get count notices
  const getCountRating = async keys => {
    dispatch({type: LOADING, payload: true});
    const contract = {
      authKey: '',
      NetworkAlias: 'MainNet',
      MethodApi: 'SmartMethodExecute',
      PublicKey: keys?.pk,
      TokenPublicKey: 'Dp5sC3FTn7KTPdkH8t2s2r5dUvFqYo5Z32HzX8jsToDm',
      TokenMethod: 'getTotalActiveEvents',
      Fee: 0.1,
      notSaveNewState: 1,
      contractParams: [],
    };

    doPost('api/transaction/pack', contract)
      .then(({data}) => {
        trExtAll(data.dataResponse.transactionPackagedStr, keys);
      })
      .catch(error => {
        console.log('dddd: ', error.response);
        dispatch({type: LOADING, payload: false});
        toast.show(error.message, {
          type: 'warning',
          duration: 3000,
          animationType: 'zoom-in',
        });
      });
  };

  const transactionExecuteRatingParticipant = async (
    transactionPackagedStr,
    wk,
    price,
    addressPk,
    toEncrypt,
  ) => {
    const ALPHABET =
      '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
    const base58 = basex(ALPHABET);

    let decodedFoBase58 = base58.decode(wk.sk);
    const decryptedMessageFromByteArray = Base64.fromByteArray(decodedFoBase58);

    let decoded = base58.decode(transactionPackagedStr);
    const decrypted = Base64.fromByteArray(decoded);

    let dt = await Sodium.crypto_sign_detached(
      decrypted,
      decryptedMessageFromByteArray,
    );
    let signature = base58.encode(Buffer.Buffer.from(dt, 'base64'));

    const encrypted = base58.encode(toEncrypt);

    doPost('api/transaction/Execute', {
      authKey: '',
      NetworkAlias: 'MainNet',
      MethodApi: 'TransferCs',
      PublicKey: wk.pk,
      ReceiverPublicKey: addressPk,
      Amount: price,
      Fee: 0.2,
      UserData: encrypted,
      TransactionSignature: signature,
    })
      .then(({data}) => {
        console.log('daaattaaa:execute', data);
        dispatch({type: LOADING, payload: false});
        if (data.success) {
          toast.show('Транзакция отправлено', {
            type: 'success',
            duration: 3000,
            animationType: 'zoom-in',
          });
        } else {
          toast.show(data.message, {
            type: 'warning',
            duration: 3000,
            animationType: 'zoom-in',
          });
        }
      })
      .catch(error => {
        dispatch({type: LOADING, payload: false});
        toast.show(error.response.data, {
          type: 'warning',
          duration: 3000,
          animationType: 'zoom-in',
        });
      });
  };

  //Rate to participant
  const postRateParticipant = async (wk, price, addressPk, toEncrypt) => {
    const ALPHABET =
      '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
    const base58 = basex(ALPHABET);

    const encrypted = base58.encode(toEncrypt);

    dispatch({type: LOADING, payload: true});
    doPost('api/transaction/pack', {
      PublicKey: wk.pk,
      ReceiverPublicKey: addressPk,
      networkAlias: 'MainNet',
      authKey: '',
      MethodApi: 'TransferCs',
      Amount: price,
      Fee: 0.2,
      UserData: encrypted,
    })
      .then(({data}) => {
        console.log('data:Pack ', data);
        if (data.success) {
          transactionExecuteRatingParticipant(
            data.dataResponse.transactionPackagedStr,
            wk,
            price,
            addressPk,
            toEncrypt,
          );
        } else {
          dispatch({type: LOADING, payload: false});
          toast.show(data.message, {
            type: 'warning',
            duration: 3000,
            animationType: 'zoom-in',
          });
        }
      })
      .catch(error => {
        dispatch({type: LOADING, payload: false});
        toast.show(error.response.data, {
          type: 'warning',
          duration: 3000,
          animationType: 'zoom-in',
        });
      });
  };

  //Get Balance
  const clearRatingsBalance = () => {
    dispatch({type: CLEAR_RATINGS_BALANCE});
  };
  return (
    <BalanceContext.Provider
      value={{
        error: state.error,
        balance: state.balance,
        rates: state.rates,
        loading: state.loading,
        postRateParticipant,
        getRatings,
        getCountRating,
        getBalance,
        clearRatingsBalance,
      }}>
      {props.children}
    </BalanceContext.Provider>
  );
};

export default BalanceState;
