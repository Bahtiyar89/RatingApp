import {
  GET_BALANCE,
  LOADING,
  GET_RATINGS,
  CLEAR_RATINGS_BALANCE,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: action.payload };

    case GET_BALANCE:
      return {
        ...state,
        balance: action.payload,
      };
    case GET_RATINGS:
      const clicing = action.payload.slice(17, action.payload.length - 1);
      let parsed = Object.values(JSON.parse(clicing));
      return {
        ...state,
        rates: parsed,
      };
    case CLEAR_RATINGS_BALANCE:
      console.log('clearing: ');
      return { ...state, rates: [], balance: [] };
    default:
      return state;
  }
};
