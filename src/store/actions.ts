import { Dispatch } from 'redux';

import {
  FETCH_NUMBERS,
  CLEAR_FETCHED_NUMBERS,
  SHOW_WRONG_NUMBER_FORMAT_ERROR,
  HIDE_WRONG_NUMBER_FORMAT_ERROR,
  SHOW_NO_SEARCH_RESULTS_ERROR,
  HIDE_NO_SEARCH_RESULTS_ERROR,
  SHOW_NEW_NUMBER_ADDED_MSG,
  HIDE_NEW_NUMBER_ADDED_MSG,
} from './actionTypes';

export const fetchNumbers = (url: string) => {
  return async (dispatch: Dispatch) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      dispatch({ type: FETCH_NUMBERS, payload: data });
    } catch (err) {
      console.log(`Ошибка: ${err}`);
    }
  };
};

export const clearFetchedNumbers = () => ({
  type: CLEAR_FETCHED_NUMBERS,
});

export const addNumber = (apiUrl: string, value: string) => {
  return async (dispatch: Dispatch) => {
    try {
      const options = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: Date.now(),
          number: value,
        }),
      };
      await fetch(apiUrl, options);
      dispatch({ type: SHOW_NEW_NUMBER_ADDED_MSG });
    } catch (err) {
      console.log(`Ошибка: ${err}`);
    }
  };
};

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

export const showNewNumberAddedMsg = () => ({
  type: SHOW_NEW_NUMBER_ADDED_MSG,
});

export const hideNewNumberAddedMsg = () => ({
  type: HIDE_NEW_NUMBER_ADDED_MSG,
});
