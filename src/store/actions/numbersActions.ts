import {
  FETCH_NUMBERS_REQUESTED,
  ADD_NUMBER_REQUESTED,
  FETCH_HAS_RESULTS,
  FETCH_NO_RESULTS,
  CLEAR_NUMBERS,
} from 'store/actionTypes';

export const fetchNumbers = (url: string) => ({
  type: FETCH_NUMBERS_REQUESTED,
  payload: url,
});

export const addNumber = (value: string) => ({
  type: ADD_NUMBER_REQUESTED,
  payload: value,
});

export const fetchHasResults = () => ({
  type: FETCH_HAS_RESULTS,
});

export const fetchNoResults = () => ({
  type: FETCH_NO_RESULTS,
});

export const clearNumbers = () => ({
  type: CLEAR_NUMBERS,
});
