import utility from '../../utils/Utility';
import { CommonActions } from '@react-navigation/native';
import { CLEAR_ERRORS } from '../types';
import {
  LOGOUT,
  REGISTER_FAIL,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOADING,
  REGISTER_SUCCESS,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: action.payload };

    case REGISTER_SUCCESS:
      const { file: files, navigation } = action.payload;
      utility.setItemObject('wkeys', files);
      navigation.goBack();
      return {
        ...state,
        isSigned: true,
        loading: false,
      };

    case LOGIN_SUCCESS:
      utility.setItemObject('wkeys', action.payload);
      return {
        ...state,
        isSigned: true,
      };

    case REGISTER_FAIL:
    case AUTH_ERROR:
    case LOGIN_FAIL:
      // localStorage.removeItem('token');
      return {
        ...state,
        isSigned: false,
        loading: false,
      };
    case LOGOUT:
      return {
        ...state,
        isSigned: false,
        loading: false,
        error: [],
      };
    case CLEAR_ERRORS:
      return { ...state, error: null };

    default:
      return state;
  }
};
