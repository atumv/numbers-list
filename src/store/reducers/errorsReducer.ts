import {
  SHOW_WRONG_NUMBER_FORMAT_ERROR,
  HIDE_WRONG_NUMBER_FORMAT_ERROR,
  SHOW_NO_SEARCH_RESULTS_ERROR,
  HIDE_NO_SEARCH_RESULTS_ERROR,
} from '../actionTypes';

const initialState = {
  wrongNumberFormat: false,
  noSearchResults: false,
};

export const errorsReducer = (
  state = initialState,
  action: { type: string }
) => {
  switch (action.type) {
    case SHOW_WRONG_NUMBER_FORMAT_ERROR:
      return {
        ...state,
        wrongNumberFormat: true,
      };
    case HIDE_WRONG_NUMBER_FORMAT_ERROR:
      return {
        ...state,
        wrongNumberFormat: false,
      };
    case SHOW_NO_SEARCH_RESULTS_ERROR:
      return {
        ...state,
        noSearchResults: true,
      };
    case HIDE_NO_SEARCH_RESULTS_ERROR:
      return {
        ...state,
        noSearchResults: false,
      };

    default:
      return state;
  }
};
