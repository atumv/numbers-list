import {
  SHOW_WRONG_NUMBER_FORMAT_ERROR,
  HIDE_WRONG_NUMBER_FORMAT_ERROR,
  SHOW_NO_SEARCH_RESULTS_ERROR,
  HIDE_NO_SEARCH_RESULTS_ERROR,
  FETCH_HAS_RESULTS,
  FETCH_NO_RESULTS,
} from 'store/actionTypes';

interface ErrorsState {
  wrongNumberFormat: boolean;
  noSearchResults: boolean;
}

const initialState: ErrorsState = {
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
    case FETCH_HAS_RESULTS:
      return {
        ...state,
        noSearchResults: false,
      };
    case FETCH_NO_RESULTS:
      return {
        ...state,
        noSearchResults: true,
      };

    default:
      return state;
  }
};
