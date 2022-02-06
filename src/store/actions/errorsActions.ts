import {
  SHOW_WRONG_NUMBER_FORMAT_ERROR,
  HIDE_WRONG_NUMBER_FORMAT_ERROR,
  SHOW_NO_SEARCH_RESULTS_ERROR,
  HIDE_NO_SEARCH_RESULTS_ERROR,
} from 'store/actionTypes';

export const showWrongNumberFormatError = () => ({
  type: SHOW_WRONG_NUMBER_FORMAT_ERROR,
});

export const hideWrongNumberFormatError = () => ({
  type: HIDE_WRONG_NUMBER_FORMAT_ERROR,
});

export const showNoSearchResultsError = () => ({
  type: SHOW_NO_SEARCH_RESULTS_ERROR,
});

export const hideNoSearchResultsError = () => ({
  type: HIDE_NO_SEARCH_RESULTS_ERROR,
});
