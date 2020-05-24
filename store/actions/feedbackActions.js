import * as actionTypes from './actionTypes';
import axios from 'axios';

const startFetchingFeedbacks = () => {
  return {
    type: actionTypes.START_FETCHING_FEEDBACK,
  };
};

const successFetchingFeedbacks = (feedbackData) => {
  return {
    type: actionTypes.SUCCESS_FETCHING_FEEDBACK,
    feedbackData: feedbackData,
  };
};

const errorFetchingFeedbacks = (error) => {
  return {
    type: actionTypes.ERROR_FETCHING_FEEDBACK,
    error: error,
  };
};

export const fetchFeedbackData = () => {
  return (dispatch) => {
    dispatch(startFetchingFeedbacks());
    axios
      .get('https://pizzerie-restaurant.firebaseio.com/feedbacks.json')
      .then((response) => dispatch(successFetchingFeedbacks(response)))
      .catch((error) => dispatch(errorFetchingFeedbacks(error)));
  };
};
