import * as actionTypes from './actionTypes';
import axios from 'axios';

const startFetchingPizzaData = () => {
  return {
    type: actionTypes.START_FETCHING_PIZZA_DATA,
  };
};

const successFetchingPizzaData = (data) => {
  return {
    type: actionTypes.SUCCESS_FETCHING_PIZZA_DATA,
    data: data,
  };
};

const errorFetchingPizzaData = (error) => {
  return {
    type: actionTypes.ERROR_FETCHING_PIZZA_DATA,
    error: error,
  };
};

export const fetchingPizza = () => {
  return (dispatch) => {
    dispatch(startFetchingPizzaData);
    axios
      .get('https://pizzerie-restaurant.firebaseio.com/pizzas.json')
      .then((response) => dispatch(successFetchingPizzaData(response)))
      .catch((error) => dispatch(errorFetchingPizzaData(error)));
  };
};
