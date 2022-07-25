import {GET_HISTORY, LOADING_DETECTOR, CLEAR_DETECTOR} from '../types';

export default (state, action) => {
  switch (action.type) {
    case LOADING_DETECTOR:
      return {...state, loading_detector: action.payload};
    case GET_HISTORY:
      return {...state, transactionHistory: action.payload};
    case CLEAR_DETECTOR:
      return {...state, profile: null, detectorHistory: []};
    default:
      return state;
  }
};
