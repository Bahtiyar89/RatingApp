import React, {useReducer} from 'react';
import {useToast} from 'react-native-toast-notifications';

import DetectorContext from './DetectorContext';
import DetectorReducer from './DetectorReducer';
import {doGet, doPost, doPatch} from '../../utils/apiActions';

import {
  LOADING_DETECTOR,
  GET_PROFILE,
  GET_HISTORY_DEVICE,
  CLEAR_DETECTOR,
  UPDATE_PROFILE,
} from '../types';

const DetectorState = props => {
  const toast = useToast();
  const initialState = {
    profile: null,
    loading_detector: false,
    error: false,
    detectorHistory: [],
  };

  const [state, dispatch] = useReducer(DetectorReducer, initialState);

  //Profile User
  const getProfile = async () => {
    dispatch({type: LOADING_DETECTOR, payload: true});
    doGet('/accounts/profile-api/')
      .then(({data}) => {
        console.log('data 55: ', data);
        dispatch({
          type: GET_PROFILE,
          payload: data,
        });
        dispatch({type: LOADING_DETECTOR, payload: false});
      })
      .catch(error => {
        console.log('errorr ', JSON.stringify(error));
        toast.show(JSON.stringify(error.message), {
          type: 'warning',
          duration: 3000,
          animationType: 'zoom-in',
        });

        dispatch({type: LOADING_DETECTOR, payload: false});
      });
  };

  //GET History
  const getHistory = async id => {
    console.log('id history: ', id);
    dispatch({type: LOADING_DETECTOR, payload: true});
    doGet(`/device-api/${id}/`)
      .then(({data}) => {
        dispatch({
          type: GET_HISTORY_DEVICE,
          payload: data,
        });
        dispatch({type: LOADING_DETECTOR, payload: false});
      })
      .catch(error => {
        console.log('errorr ', JSON.stringify(error));
        toast.show(JSON.stringify(error.message), {
          type: 'warning',
          duration: 3000,
          animationType: 'zoom-in',
        });

        dispatch({type: LOADING_DETECTOR, payload: false});
      });
  };

  //GET Device
  const getDevice = async () => {
    dispatch({type: LOADING_DETECTOR, payload: true});
    doGet(`/user-devices-api/?`)
      .then(({data}) => {
        getHistory(data[0]?.id);
      })
      .catch(error => {
        console.log('errorr ', JSON.stringify(error));
        toast.show(JSON.stringify(error.message), {
          type: 'warning',
          duration: 3000,
          animationType: 'zoom-in',
        });

        dispatch({type: LOADING_DETECTOR, payload: false});
      });
  };

  //PATCH Profile
  const patchProfile = async formData => {
    dispatch({type: LOADING_DETECTOR, payload: true});
    doPatch(`/accounts/profile-api/`, formData)
      .then(({data}) => {
        dispatch({type: UPDATE_PROFILE, payload: data});
      })
      .catch(error => {
        console.log('errorr ', JSON.stringify(error));
        toast.show(JSON.stringify(error.message), {
          type: 'warning',
          duration: 3000,
          animationType: 'zoom-in',
        });

        dispatch({type: LOADING_DETECTOR, payload: false});
      });
  };

  //Clean Profile
  const cleanDetector = async () => {
    dispatch({type: CLEAR_DETECTOR});
  };

  return (
    <DetectorContext.Provider
      value={{
        loading_detector: state.loading_detector,
        detectorHistory: state.detectorHistory,
        error: state.error,
        profile: state.profile,
        getDevice,
        getProfile,
        getHistory,
        cleanDetector,
        patchProfile,
      }}>
      {props.children}
    </DetectorContext.Provider>
  );
};

export default DetectorState;
