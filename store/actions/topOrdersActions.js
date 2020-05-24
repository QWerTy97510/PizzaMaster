import * as actionTypes from './actionTypes';
import axios from 'axios';

const startFetchingTopOrders = () => {
  return {
    type: actionTypes.START_FETCHING_TOP_ORDERS,
  };
};

const successFetchingTopOrders = (topOrdersData) => {
  return {
    type: actionTypes.SUCCESS_FETCHING_TOP_ORDERS,
    topOrdersData: topOrdersData,
  };
};

const errorFetchingTopOrdersData = (error) => {
  return {
    type: actionTypes.ERROR_FETCHING_TOP_ORDERS,
    error: error,
  };
};

const selectTopPizzaOrder = (index) => {
  return {
    type: actionTypes.SELECT_TOP_PIZZA_ORDER,
    currentPizzaIndex: index,
  };
};

const increaseTopPizzaOrder = (index) => {
  return {
    type: actionTypes.INCREASE_SELECT_TOP_PIZZA_ORDER,
  };
};

const decreaseTopPizzaOrder = (index) => {
  return {
    type: actionTypes.DECREASE_SELECT_TOP_PIZZA_ORDER,
  };
};

export const fetchTopOrders = () => {
  return (dispatch) => {
    dispatch(startFetchingTopOrders);
    axios
      .get('https://pizzerie-restaurant.firebaseio.com/top_pizzas.json')
      .then((result) => dispatch(successFetchingTopOrders(result)))
      .catch((error) => dispatch(errorFetchingTopOrdersData(error)));
  };
};

export const selectTopPizza = (index) => {
  return (dispatch) => {
    dispatch(selectTopPizzaOrder(index));
  };
};

export const increaseSelectTopPizza = (index) => {
  return (dispatch) => {
    dispatch(increaseTopPizzaOrder());
  };
};

export const decreaseSelectTopPizza = (index) => {
  return (dispatch) => {
    dispatch(decreaseTopPizzaOrder());
  };
};
