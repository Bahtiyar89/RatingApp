import React, {useReducer} from 'react';
import {PermissionsAndroid, Platform} from 'react-native';
import {useToast} from 'react-native-toast-notifications';
import RNFS from 'react-native-fs';

import AuthContext from './AuthContext';
import AuthReducer from './AuthReducer';
import utility from '../../utils/Utility';

import {LOGOUT, LOGIN_SUCCESS, LOADING, REGISTER_SUCCESS} from '../types';

const AuthState = props => {
  const toast = useToast();
  const initialState = {
    token: utility.getItem('token'),
    loading: false,
    isSigned: false,
    user: utility.getItemObject('user'),
    calculateArray: [],
    modalBalanceErr: false,
    error: [],
    file: {},
  };
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const signUpSuccess = (file, navigation, path) => {
    console.log('in showww', navigation);
    console.log('in showww', file);
    toast.show(
      `${'your_keys_have_been_successfully_saved_path_to_keys'} ${
        'file_saved_under_name ' + path
      } `,
      {
        type: 'success',
        duration: 6000,
        animationType: 'zoom-in',
      },
    );
    dispatch({
      type: REGISTER_SUCCESS,
      payload: {navigation, file},
    });
    dispatch({type: LOADING, payload: false});
  };

  const signUp = async (file, navigation) => {
    dispatch({type: LOADING, payload: true});

    let path =
      Platform.OS === 'ios'
        ? RNFS.LibraryDirectoryPath + '/keys.txt'
        : RNFS.DownloadDirectoryPath + '/keys.txt';

    if (Platform.OS === 'ios') {
      RNFS.writeFile(path, JSON.stringify(file), 'utf8')
        .then(success => {
          signUpSuccess(file, navigation, path);
        })
        .catch(err => {
          console.log('err.message: ', err.message);
          dispatch({type: LOADING, payload: false});
        });
    } else {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'Cool File Permission',
            message: 'Your app needs permission.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );

        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          RNFS.writeFile(path, JSON.stringify(file), 'utf8')
            .then(success => {
              signUpSuccess(file, navigation, path);
            })
            .catch(err => {
              console.log('err.message: ', err.message);
              dispatch({type: LOADING, payload: false});
            });
          return true;
        } else {
          console.log('Download permission denied');
          dispatch({type: LOADING, payload: false});
          return false;
        }
      } catch (err) {
        console.warn(err);
        dispatch({type: LOADING, payload: false});
        return false;
      }
    }
  };

  //logout
  const signOut = async () => {
    try {
      dispatch({type: LOADING, payload: true});
      dispatch({
        type: LOGOUT,
      });
      dispatch({type: LOADING, payload: false});
    } catch (err) {
      console.log(err);
    }
  };

  //Login User
  const signin = FormData => {
    dispatch({
      type: LOGIN_SUCCESS,
      payload: FormData,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        error: state.error,
        isSigned: state.isSigned,
        loading: state.loading,
        file: state.file,

        signUp,
        signin,
        signOut,
      }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
