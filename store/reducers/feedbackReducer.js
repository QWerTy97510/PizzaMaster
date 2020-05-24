import * as actionTypes from '../actions/actionTypes';

const initialState = {
  feedbackData: [],
  loading: true,
  error: false,
};

const feedbackReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.START_FETCHING_FEEDBACK:
      return { ...state, loading: true };
    case actionTypes.SUCCESS_FETCHING_FEEDBACK:
      return { ...state, loading: false, feedbackData: action.feedbackData };
    case actionTypes.ERROR_FETCHING_FEEDBACK:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

export default feedbackReducer;
