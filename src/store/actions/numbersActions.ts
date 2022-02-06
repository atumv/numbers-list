import axios from 'axios';
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
      const response = await axios.get(url);
      const numbers = response.data;

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
  return async (dispatch: Dispatch) => {
    const data = {
      id: Date.now(),
      number: value,
    };

    try {
      await axios.post(apiUrl, data);
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
