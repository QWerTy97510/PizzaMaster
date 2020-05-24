import * as actionTypes from '../actions/actionTypes';

const initialState = {
  loading: true,
  data: {},
  error: false,
  currentPizza: 0,
};

const topOrdersReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.START_FETCHING_TOP_ORDERS:
      return { ...state, loading: true };
    case actionTypes.SUCCESS_FETCHING_TOP_ORDERS:
      return { ...state, loading: false, data: action.topOrdersData };
    case actionTypes.ERROR_FETCHING_TOP_ORDERS:
      return { ...state, loading: false, error: action.error };

    case actionTypes.SELECT_TOP_PIZZA_ORDER:
      return { ...state, currentPizza: action.currentPizzaIndex };
    case actionTypes.INCREASE_SELECT_TOP_PIZZA_ORDER:
      return { ...state, currentPizza: state.currentPizza + 1 };
    case actionTypes.DECREASE_SELECT_TOP_PIZZA_ORDER:
      return { ...state, currentPizza: state.currentPizza - 1 };
    default:
      return state;
  }
};

export default topOrdersReducer;
