import {
  GET_HISTORY_DEVICE,
  GET_PROFILE,
  LOADING_DETECTOR,
  CLEAR_DETECTOR,
  UPDATE_PROFILE,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case LOADING_DETECTOR:
      return {...state, loading_detector: action.payload};
    case GET_PROFILE:
      return {...state, profile: action.payload};
    case UPDATE_PROFILE:
      return {...state, profile: action.payload};
    case GET_HISTORY_DEVICE:
      return {...state, detectorHistory: action.payload};
    case CLEAR_DETECTOR:
      return {...state, profile: null, detectorHistory: []};
    default:
      return state;
  }
};
