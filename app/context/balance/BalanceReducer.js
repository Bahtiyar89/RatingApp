import {
  GET_BALANCE,
  LOADING,
  GET_RATINGS,
  CLEAR_RATINGS_BALANCE,
  HISTORY_RATINGS,
} from '../types';
import utility from '../../utils/Utility';

export default (state, action) => {
  switch (action.type) {
    case LOADING:
      return {...state, loading: action.payload};

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
    case HISTORY_RATINGS:
      const {historyRates, obj} = action.payload;
      console.log('action.payload: ', action.payload);
      console.log('historyRates', historyRates);
      console.log('obj', obj);

      const newItemHistory = {
        amount: obj.amount,
        date: obj.date,
        rateName: obj.rateName,
        team: obj.team,
        total: obj.total,
        your_prediction: obj.your_prediction,
      };

      let arrOfObj = Object.assign([], historyRates);
      arrOfObj.push(newItemHistory);
      utility.setItemObject('historyOfRatings', arrOfObj);
      return {
        ...state,
      };
    case CLEAR_RATINGS_BALANCE:
      console.log('clearing: ');
      return {...state, rates: [], balance: []};
    default:
      return state;
  }
};
