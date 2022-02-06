import { Dispatch } from 'redux';
import {
  FETCH_NUMBERS,
  FETCH_HAS_RESULTS,
  FETCH_NO_RESULTS,
  CLEAR_NUMBERS,
  ADD_NUMBER,
} from 'store/actionTypes';

export const fetchNumbers = (url: string) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await fetch(url);
      const numbers = await response.json();

      if (numbers.length) {
        dispatch(fetchHasResults());
        dispatch({ type: FETCH_NUMBERS, payload: numbers });
      } else {
        dispatch(fetchNoResults());
        dispatch(clearNumbers());
      }
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };
};

export const addNumber = (apiUrl: string, value: string) => {
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
  return async (dispatch: Dispatch) => {
    try {
      await fetch(apiUrl, options);
      dispatch({ type: ADD_NUMBER });
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };
};

export const fetchHasResults = () => ({
  type: FETCH_HAS_RESULTS,
});

export const fetchNoResults = () => ({
  type: FETCH_NO_RESULTS,
});

export const clearNumbers = () => ({
  type: CLEAR_NUMBERS,
});
