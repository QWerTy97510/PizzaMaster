import * as actionTypes from '../actions/actionTypes';

const initialState = {
  data: {},
  loading: true,
  error: false,
};

const pizzaReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.START_FETCHING_PIZZA_DATA:
      return { ...state, loading: true };
    case actionTypes.SUCCESS_FETCHING_PIZZA_DATA:
      return { ...state, data: action.data, loading: false };
    case actionTypes.ERROR_FETCHING_PIZZA_DATA:
      return { ...state, error: action.error, loading: false };
    default:
      return state;
  }
};

export default pizzaReducer;
